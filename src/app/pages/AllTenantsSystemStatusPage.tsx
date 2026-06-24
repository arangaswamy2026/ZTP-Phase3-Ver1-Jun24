import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, RefreshCw, ChevronRight, Server, Wifi, Globe, Shield, AlertTriangle } from 'lucide-react';
import { StatusBadge, DataTable, THead, TH, TR, TD } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

// ── Data ──────────────────────────────────────────────────────────────────────

const TENANT_NAMES: Record<string, string> = {
  riverside:  'Riverside Dental Office',
  northgate:  'Northgate Logistics',
  summit:     'Summit Health Partners',
  lakeside:   'Lakeside Clinic',
  harbor:     'Harbor Law Group',
};

type ConnStatus = 'ok' | 'warn' | 'crit' | 'offline';

interface Session { user: string; duration: string; app: string; }

interface Connector {
  id: string;
  name: string;
  tenant: string;
  region: string;
  status: ConnStatus;
  cpu: number;
  mem: number;
  sessions: Session[] | null; // null = offline, [] = empty
}

const APPS = ['Dentrix', 'Microsoft 365', 'QuickBooks', 'SAP', 'Salesforce', 'Epic EHR', 'SharePoint'];
const USERS = ['ana','ben','cara','dev','evan','finn','gita','hugo','ivy','joe'];
function bulk(n: number, domain: string): Session[] {
  return Array.from({ length: n }, () => ({
    user: `${USERS[Math.floor(Math.random() * USERS.length)]}@${domain}.com`,
    duration: `${Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 59)}m`,
    app: APPS[Math.floor(Math.random() * APPS.length)],
  }));
}

const INITIAL_CONNECTORS: Connector[] = [
  { id:'ztc-rv-01', name:'ZTC-Riverside-01', tenant:'riverside', region:'us-west-2', status:'ok',      cpu:31, mem:38,
    sessions:[
      { user:'maria@riversidedental.com',   duration:'2h 14m', app:'Dentrix' },
      { user:'jessica@riversidedental.com', duration:'41m',    app:'Microsoft 365' },
      { user:'mark@riversidedental.com',    duration:'1h 08m', app:'QuickBooks' },
      { user:'dana@riversidedental.com',    duration:'22m',    app:'Microsoft 365' },
      { user:'priya@riversidedental.com',   duration:'55m',    app:'SharePoint' },
    ] },
  { id:'ztc-ng-01', name:'ZTC-Northgate-01', tenant:'northgate', region:'us-east-1', status:'crit',    cpu:94, mem:91,
    sessions: bulk(1240, 'northgatelog') },
  { id:'ztc-sh-01', name:'ZTC-Summit-01',    tenant:'summit',    region:'us-east-1', status:'warn',    cpu:78, mem:71,
    sessions:[
      { user:'priya@summithealth.com', duration:'26m',    app:'Epic EHR' },
      { user:'leo@summithealth.com',   duration:'1h 02m', app:'Microsoft 365' },
      { user:'ron@summithealth.com',   duration:'3h 41m', app:'SharePoint' },
    ] },
  { id:'ztc-lc-01', name:'ZTC-Lakeside-01',  tenant:'lakeside',  region:'eu-west-1', status:'offline', cpu:0,  mem:0,  sessions:null },
  { id:'ztc-hl-01', name:'ZTC-Harbor-01',    tenant:'harbor',    region:'us-west-2', status:'ok',      cpu:14, mem:22, sessions:[] },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

const STATUS_META: Record<ConnStatus, { label: string; variant: 'success' | 'warning' | 'error' | 'neutral' }> = {
  ok:      { label: 'Healthy',  variant: 'success' },
  warn:    { label: 'Warning',  variant: 'warning' },
  crit:    { label: 'Critical', variant: 'error'   },
  offline: { label: 'Offline',  variant: 'neutral' },
};

// Utilization bar color references semantic tokens (one-token recolor).
function barColor(v: number) {
  if (v >= 90) return 'var(--destructive)';
  if (v >= 75) return 'var(--warning)';
  if (v >= 60) return 'color-mix(in srgb, var(--warning) 55%, #ffffff)';
  return 'var(--success)';
}

function sessCount(c: Connector) {
  return c.sessions === null ? 0 : c.sessions.length;
}

function stamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function StatusCard({ label, status, sub, icon: Icon, iconColor }: {
  label: string; status: string; sub: string; icon: React.ElementType; iconColor: string;
}) {
  const dotColor = status === 'Connected' ? 'bg-action' : 'bg-success';
  const textColor = status === 'Connected' ? 'text-action' : 'text-success';
  return (
    <div className="bg-card border rounded-2xl p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="size-10 rounded-2xl flex items-center justify-center" style={{ background: `color-mix(in srgb, ${iconColor} 12%, transparent)` }}>
          <Icon className="w-4 h-4" style={{ color: iconColor }} />
        </div>
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em]">{label}</span>
      </div>
      <div className={`flex items-center gap-1.5 font-semibold text-sm ${textColor}`}>
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        {status}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </div>
  );
}

function UtilBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
      <span className="w-7 font-semibold uppercase">{label}</span>
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${value}%`, background: barColor(value) }} />
      </div>
      <span className="w-8 text-right tabular-nums">{value}%</span>
    </div>
  );
}

function ConnectorRow({
  connector, isOpen, tenantFilter, searchQuery, onToggle,
}: {
  connector: Connector; isOpen: boolean; tenantFilter: string; searchQuery: string; onToggle: () => void;
}) {
  const meta = STATUS_META[connector.status];
  const offline = connector.status === 'offline';
  const count = sessCount(connector);

  const filteredSessions = useMemo(() => {
    if (!connector.sessions) return [];
    const q = searchQuery.toLowerCase();
    if (!q) return connector.sessions.slice(0, 500);
    return connector.sessions.filter(
      (s) => s.user.toLowerCase().includes(q) || s.app.toLowerCase().includes(q)
    ).slice(0, 500);
  }, [connector.sessions, searchQuery]);

  return (
    <div className={`border rounded-2xl overflow-hidden mb-2.5 ${
      offline ? 'border-destructive/30 bg-destructive-subtle/40' : 'border-border bg-card'
    }`}>
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full grid items-center gap-4 px-4 py-3.5 text-left hover:bg-muted/50 transition-colors"
        style={{ gridTemplateColumns: '16px 1.7fr 1fr 1.3fr auto' }}
      >
        {/* Chevron */}
        <ChevronRight
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-150 ${isOpen ? 'rotate-90' : ''}`}
        />

        {/* Name */}
        <div>
          <div className="text-sm font-semibold text-foreground">{connector.name}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">{connector.id} · {connector.region}</div>
        </div>

        {/* Session count */}
        <div>
          <div className="text-xl font-bold text-foreground leading-none">
            {offline ? '—' : count.toLocaleString()}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground mt-0.5">
            active sessions
          </div>
        </div>

        {/* Tenant (all-tenants) or region (scoped) */}
        <div className={`text-sm ${tenantFilter === 'all' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
          {tenantFilter === 'all' ? TENANT_NAMES[connector.tenant] : connector.region}
        </div>

        {/* Util + badge */}
        <div className="flex items-center gap-3">
          <div className="space-y-1.5 min-w-[140px]">
            {offline ? (
              <span className="text-xs text-muted-foreground">No utilization data</span>
            ) : (
              <>
                <UtilBar label="CPU" value={connector.cpu} />
                <UtilBar label="Mem" value={connector.mem} />
              </>
            )}
          </div>
          <StatusBadge variant={meta.variant}>{meta.label}</StatusBadge>
        </div>
      </button>

      {/* Expanded sessions */}
      {isOpen && (
        <div className="border-t border-border bg-muted/50">
          {offline ? (
            <div className="flex items-center gap-2 px-4 py-3.5 text-sm text-destructive">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Connector is not reporting — session data unavailable. Last contact: 6m ago.
            </div>
          ) : count === 0 ? (
            <div className="px-4 py-5 text-sm text-muted-foreground text-center">
              No active sessions on this connector right now.
            </div>
          ) : (
            <>
              {count > 200 && (
                <div className="px-4 py-2 text-[11px] text-muted-foreground bg-muted border-b border-border">
                  High session volume — {count.toLocaleString()} sessions. Showing first 500.
                </div>
              )}
              <div className="max-h-72 overflow-y-auto">
                <DataTable>
                  <THead className="sticky top-0">
                    <tr>
                      {['Connected user', 'Session duration', 'Application accessed'].map((h) => (
                        <TH key={h} className="py-2">{h}</TH>
                      ))}
                    </tr>
                  </THead>
                  <tbody>
                    {filteredSessions.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="px-4 py-4 text-sm text-muted-foreground text-center">
                          No sessions match the search.
                        </td>
                      </tr>
                    ) : filteredSessions.map((s, i) => (
                      <TR key={i}>
                        <TD className="py-2.5">{s.user}</TD>
                        <TD className="py-2.5 text-muted-foreground tabular-nums">{s.duration}</TD>
                        <TD className="py-2.5">{s.app}</TD>
                      </TR>
                    ))}
                  </tbody>
                </DataTable>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export function AllTenantsSystemStatusPage() {
  const [connectors, setConnectors] = useState<Connector[]>(
    INITIAL_CONNECTORS.map((c) => ({ ...c, sessions: c.sessions ? [...c.sessions] : c.sessions }))
  );
  const [openSet,       setOpenSet]       = useState<Set<string>>(new Set());
  const [search,        setSearch]        = useState('');
  const [tenantFilter,  setTenantFilter]  = useState('all');
  const [sortBy,        setSortBy]        = useState('sessions');
  const [autoRefresh,   setAutoRefresh]   = useState(true);
  const [lastUpdated,   setLastUpdated]   = useState(stamp());
  const [stale,         setStale]         = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function refresh() {
    setStale(false);
    setConnectors((prev) =>
      prev.map((c) => {
        if (c.status === 'offline') return c;
        const nudge = () => Math.floor(Math.random() * 11) - 5;
        return { ...c, cpu: Math.min(99, Math.max(5, c.cpu + nudge())), mem: Math.min(99, Math.max(5, c.mem + nudge())) };
      })
    );
    setLastUpdated(stamp());
  }

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoRefresh) timerRef.current = setInterval(refresh, 30_000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoRefresh]);

  function toggleRow(id: string) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const visible = useMemo(() => {
    let cs = tenantFilter === 'all' ? connectors : connectors.filter((c) => c.tenant === tenantFilter);
    if (sortBy === 'util') cs = [...cs].sort((a, b) => Math.max(b.cpu, b.mem) - Math.max(a.cpu, a.mem));
    else if (sortBy === 'name') cs = [...cs].sort((a, b) => a.name.localeCompare(b.name));
    else cs = [...cs].sort((a, b) => sessCount(b) - sessCount(a));
    return cs;
  }, [connectors, tenantFilter, sortBy]);

  // Summary tiles
  const scopedConns   = tenantFilter === 'all' ? connectors : connectors.filter((c) => c.tenant === tenantFilter);
  const totalSessions = scopedConns.reduce((s, c) => s + (c.status === 'offline' ? 0 : sessCount(c)), 0);
  const needsAttention = scopedConns.filter((c) => c.status !== 'ok').length;
  const tenantCount   = new Set(scopedConns.map((c) => c.tenant)).size;

  // Group by tenant when showing all
  const grouped = useMemo(() => {
    if (tenantFilter !== 'all') return null;
    const map: Record<string, Connector[]> = {};
    visible.forEach((c) => { (map[c.tenant] = map[c.tenant] || []).push(c); });
    return map;
  }, [visible, tenantFilter]);

  return (
    <div className="space-y-6 pb-10">
      {/* Page title */}
      <PageHeader title="System Status" />

      {/* Infrastructure status cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <StatusCard label="ZT Connector"       status="Online"    sub="Last ping: 2s ago"    icon={Server} iconColor="var(--action)" />
        <StatusCard label="Cloud Connectivity" status="Connected" sub="Latency: 12ms"         icon={Wifi}   iconColor="var(--action)" />
        <StatusCard label="Edge Network"       status="Online"    sub="All nodes healthy"     icon={Globe}  iconColor="var(--success)" />
        <StatusCard label="DNS Filtering"      status="Active"    sub="CFS + Botnet"          icon={Shield} iconColor="var(--success)" />
      </div>

      {/* Connections & Tunnels */}
      <div>
        <h2 className="text-base font-medium text-foreground mb-3.5">Connections &amp; Tunnels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Connector card */}
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <div className="size-10 bg-action-subtle rounded-2xl flex items-center justify-center shrink-0">
                <Server className="w-4 h-4 text-action" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em] mb-0.5">Secure Remote Access</div>
                <div className="text-sm font-semibold text-foreground">ZTP Connector</div>
              </div>
              <StatusBadge variant="success" dot>Online</StatusBadge>
            </div>
            <div className="px-4 py-3 border-b border-border">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em] mb-2">Private Networks</div>
              <div className="flex items-center gap-2 text-sm">
                <StatusBadge variant="info">NW</StatusBadge>
                <span className="font-medium text-foreground flex-1">Employee Zone</span>
                <span className="font-mono text-[13px] text-muted-foreground">192.168.0.0/16</span>
                <StatusBadge variant="success">Default</StatusBadge>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em] mb-2">Internal Domains</div>
              <div className="flex flex-wrap gap-1.5">
                {['dentrix.local', 'erp.riverside.local'].map((d) => (
                  <span key={d} className="font-mono text-[13px] text-foreground bg-muted px-2.5 py-1 rounded-md">{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Service Tunnel card */}
          <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <div className="size-10 bg-success-subtle rounded-2xl flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-success" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em] mb-0.5">Service Tunnel</div>
                <div className="text-sm font-semibold text-foreground">ST-Remote-Employee-Access-01</div>
              </div>
              <StatusBadge variant="info">Active</StatusBadge>
            </div>
            <div className="px-4 py-3 space-y-2.5">
              {[
                { label: 'Status',        value: <span className="flex items-center gap-1.5 text-action font-semibold text-sm"><span className="w-1.5 h-1.5 rounded-full bg-action" />Connected</span> },
                { label: 'Linked Policy', value: <span className="text-sm font-medium text-foreground">Remote Employee Access</span> },
                { label: 'Purpose',       value: <span className="text-sm text-muted-foreground">Connects securely to private resources</span> },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-border pb-2.5 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Connectors & Active Sessions */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-medium text-foreground">Connectors &amp; Active Sessions</h2>
          <span className="text-xs text-muted-foreground">
            {tenantFilter === 'all' ? 'All managed tenants (MSP rollup)' : `Scoped to ${TENANT_NAMES[tenantFilter]}`}
          </span>
        </div>

        {/* Summary tiles */}
        <div className="grid grid-cols-3 gap-3.5 mb-4">
          {[
            { label: tenantFilter === 'all' ? 'Connectors / Tenants' : 'Connectors',
              value: tenantFilter === 'all' ? `${scopedConns.length} / ${tenantCount}` : String(scopedConns.length),
              sub: tenantFilter === 'all' ? 'across all customers' : 'in this tenant' },
            { label: 'Active Sessions',  value: totalSessions.toLocaleString(), sub: 'connected now' },
            { label: 'Needs Attention',  value: String(needsAttention),         sub: 'warning, critical, or offline' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bg-card border rounded-2xl p-4 shadow-sm">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em]">{label}</div>
              <div className="text-2xl font-bold text-foreground mt-2 mb-1">{value}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2.5 flex-wrap mb-3.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search sessions by user or application..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 pl-8 pr-3 w-72 text-sm border border-input rounded-lg bg-card focus:outline-none focus:border-action"
            />
          </div>
          <select
            value={tenantFilter}
            onChange={(e) => { setTenantFilter(e.target.value); setOpenSet(new Set()); }}
            className="h-9 px-3 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
          >
            <option value="all">All tenants</option>
            {Object.entries(TENANT_NAMES).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-9 px-3 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
          >
            <option value="sessions">Sort: Active sessions (high→low)</option>
            <option value="util">Sort: Resource utilization (high→low)</option>
            <option value="name">Sort: Connector name (A→Z)</option>
          </select>

          <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
            {/* Auto-refresh toggle */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <span className="text-xs">Auto-refresh (30s)</span>
              <button
                role="switch"
                aria-checked={autoRefresh}
                onClick={() => setAutoRefresh((v) => !v)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-150 ${autoRefresh ? 'bg-action' : 'bg-[var(--switch-background)]'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-150 ${autoRefresh ? 'left-[18px]' : 'left-0.5'}`} />
              </button>
            </label>
            <span className="text-xs text-muted-foreground">Last updated: <strong className="text-foreground">{lastUpdated}</strong></span>
            <button
              onClick={refresh}
              className="inline-flex items-center gap-1.5 h-9 px-4 border border-border rounded-lg text-sm font-medium text-action hover:border-action bg-card transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Refresh
            </button>
          </div>
        </div>

        {/* Stale banner */}
        {stale && (
          <div className="flex items-center gap-3 bg-warning-subtle border border-warning/30 rounded-2xl p-3 mb-3.5 text-sm text-foreground">
            <AlertTriangle className="w-4 h-4 shrink-0 text-warning" />
            <span>
              <strong>Telemetry is stale.</strong> Live refresh failed. Showing last successful update from {lastUpdated}. Values may not reflect current connector state.
            </span>
          </div>
        )}

        {/* Connector list */}
        {grouped ? (
          Object.entries(grouped).map(([tenantId, conns]) => {
            const groupSessions = conns.reduce((s, c) => s + (c.status === 'offline' ? 0 : sessCount(c)), 0);
            return (
              <div key={tenantId}>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.04em] mt-4 mb-2">
                  {TENANT_NAMES[tenantId]}
                  <span className="font-semibold normal-case tracking-normal text-muted-foreground ml-1.5">
                    · {conns.length} connector{conns.length !== 1 ? 's' : ''}, {groupSessions.toLocaleString()} active sessions
                  </span>
                </div>
                {conns.map((c) => (
                  <ConnectorRow
                    key={c.id}
                    connector={c}
                    isOpen={openSet.has(c.id)}
                    tenantFilter={tenantFilter}
                    searchQuery={search}
                    onToggle={() => toggleRow(c.id)}
                  />
                ))}
              </div>
            );
          })
        ) : (
          visible.length === 0
            ? <div className="text-sm text-muted-foreground text-center py-12">No connectors in scope.</div>
            : visible.map((c) => (
              <ConnectorRow
                key={c.id}
                connector={c}
                isOpen={openSet.has(c.id)}
                tenantFilter={tenantFilter}
                searchQuery={search}
                onToggle={() => toggleRow(c.id)}
              />
            ))
        )}
      </div>
    </div>
  );
}
