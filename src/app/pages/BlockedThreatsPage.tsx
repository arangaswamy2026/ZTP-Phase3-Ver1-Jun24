import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Search, Download, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { SeverityChip, DataTable, THead, TH, TR, TD } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

// ── Data ──────────────────────────────────────────────────────────────────────

// Severity → chip level + bar color. Bar colors reference semantic tokens so a
// recolor is a one-token edit (Critical → error, High/Medium → warning).
const SEV: Record<string, { level: 'crit' | 'high' | 'med'; bar: string }> = {
  Critical: { level: 'crit', bar: 'var(--destructive)' },
  High:     { level: 'high', bar: 'var(--warning)' },
  Medium:   { level: 'med',  bar: 'color-mix(in srgb, var(--warning) 55%, #ffffff)' },
};

const THREAT_TYPES = [
  { key: 'unauthorized', label: 'Unauthorized Access',          display: 'Unauthorized Access Attempt',       severity: 'High' },
  { key: 'posture',      label: 'Device Posture Failure',       display: 'Non-Compliant Device Blocked',      severity: 'Medium' },
  { key: 'c2',           label: 'C2 attempts',                  display: 'C2 Attempts',                       severity: 'Critical' },
  { key: 'lateral',      label: 'Lateral Movement',             display: 'Port Scanning / Lateral Movement',  severity: 'Critical' },
  { key: 'dns',          label: 'Malicious DNS',                display: 'DNS-Based Threat',                  severity: 'Medium' },
  { key: 'mfa',          label: 'MFA Failure',                  display: 'MFA Challenge Failed / Bypassed',   severity: 'High' },
  { key: 'geo',          label: 'Geo Block',                    display: 'Geo / Location-Based Block',        severity: 'Medium' },
] as const;

type ThreatKey = typeof THREAT_TYPES[number]['key'];

const RANGE_MULT: Record<string, number> = { '24h': 0.14, '7d': 1, '30d': 4.3, custom: 1 };

interface TenantData {
  id: string;
  name: string;
  color: string;
  counts: Record<ThreatKey, number>;
}

const TENANTS: TenantData[] = [
  { id: 'riverside',  name: 'Riverside Dental Office',   color: '#4f46e5', counts: { unauthorized:412,posture:340,c2:29,lateral:18,dns:126,mfa:171,geo:141 } },
  { id: 'bayarea',    name: 'Bay Area Ortho Group',       color: '#0ea5e9', counts: { unauthorized:87, posture:54, c2:11,lateral:7, dns:38, mfa:29, geo:22  } },
  { id: 'sunstate',   name: 'SunState Insurance LLC',     color: '#10b981', counts: { unauthorized:63, posture:41, c2:7, lateral:4, dns:19, mfa:13, geo:9   } },
  { id: 'pinehurst',  name: 'Pinehurst Law Partners',     color: '#f59e0b', counts: { unauthorized:22, posture:14, c2:0, lateral:0, dns:8,  mfa:6,  geo:4   } },
  { id: 'clearwater', name: 'Clearwater Tech (inactive)', color: '#9ca3af', counts: { unauthorized:0,  posture:0,  c2:0, lateral:0, dns:0,  mfa:0,  geo:0   } },
  { id: 'northridge', name: 'Northridge Medical Group',   color: '#8b5cf6', counts: { unauthorized:0,  posture:0,  c2:0, lateral:0, dns:0,  mfa:0,  geo:0   } },
];

interface ThreatEvent {
  ts: string; type: string; user: string; ip: string;
  app: string; policy: string; severity: string; action: string;
}

const EVENTS_BY_TENANT: Record<string, ThreatEvent[]> = {
  riverside: [
    { ts:'2026-05-29 08:42', type:'C2 attempts',            user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Dentrix Cloud',       policy:'C2 Block — Private App',       severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 08:31', type:'Unauthorized Access',    user:'unknown@extern.com',                ip:'203.0.113.17',  app:'HR Records Portal',   policy:'Engineering to HR Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 08:19', type:'MFA Failure',            user:'jessica@riversidedental.com',      ip:'10.0.0.88',     app:'Microsoft 365',        policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 07:58', type:'Lateral Movement',       user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Storage Server',       policy:'IoT to Storage Policy',        severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 07:44', type:'Malicious DNS',          user:'admin@riversidedental.com',        ip:'10.0.1.5',      app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 07:33', type:'Unauthorized Access',    user:'temp.vendor@extern.com',            ip:'198.51.100.44', app:'QuickBooks',           policy:'Vendor Access Policy',         severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 07:21', type:'Device Posture Failure', user:'maria@riversidedental.com',        ip:'10.0.0.21',     app:'Dentrix Cloud',        policy:'Device Trust Policy',          severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 07:10', type:'Geo Block',              user:'jessica@riversidedental.com',      ip:'91.108.4.12',   app:'Microsoft 365',        policy:'Geo Restriction Policy',       severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 06:55', type:'MFA Failure',            user:'mark@riversidedental.com',         ip:'10.0.0.88',     app:'QuickBooks',           policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 06:42', type:'C2 attempts',            user:'jessica@riversidedental.com',      ip:'192.168.1.51',  app:'Dentrix Cloud',        policy:'C2 Block — Private App',       severity:'Critical', action:'Blocked' },
    { ts:'2026-05-28 17:12', type:'Unauthorized Access',    user:'unknown@extern.com',                ip:'203.0.113.22',  app:'Patient Records DB',   policy:'Engineering to HR Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 16:55', type:'Malicious DNS',          user:'admin@riversidedental.com',        ip:'10.0.1.5',      app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-28 15:33', type:'Device Posture Failure', user:'mark@riversidedental.com',         ip:'10.0.0.88',     app:'Microsoft 365',        policy:'Device Trust Policy',          severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-28 14:20', type:'MFA Failure',            user:'jessica@riversidedental.com',      ip:'10.0.0.51',     app:'QuickBooks',           policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 13:07', type:'Geo Block',              user:'dr.henderson@riversidedental.com', ip:'77.88.8.1',     app:'Dentrix Cloud',        policy:'Geo Restriction Policy',       severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-27 10:44', type:'Lateral Movement',       user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'File Server',          policy:'IoT to Storage Policy',        severity:'Critical', action:'Blocked' },
    { ts:'2026-05-27 09:22', type:'Unauthorized Access',    user:'temp.vendor2@extern.com',           ip:'198.51.100.77', app:'HR Records Portal',   policy:'Engineering to HR Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-26 15:11', type:'C2 attempts',            user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Dentrix Cloud',        policy:'C2 Block — Private App',       severity:'Critical', action:'Blocked' },
    { ts:'2026-05-26 11:03', type:'MFA Failure',            user:'maria@riversidedental.com',        ip:'10.0.0.21',     app:'Microsoft 365',        policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-25 16:48', type:'Malicious DNS',          user:'jessica@riversidedental.com',      ip:'10.0.0.51',     app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
  ],
  bayarea: [
    { ts:'2026-05-29 09:11', type:'C2 attempts',            user:'user1@bayareaortho.com',           ip:'10.1.0.5',      app:'Ortho EHR',            policy:'C2 Block — Private App',       severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 08:50', type:'Unauthorized Access',    user:'extern@unknown.net',                ip:'185.220.101.5', app:'Billing Portal',       policy:'Vendor Access Policy',         severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 14:22', type:'MFA Failure',            user:'receptionist@bayareaortho.com',    ip:'10.1.0.12',     app:'Microsoft 365',        policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-27 11:05', type:'Device Posture Failure', user:'dr.kim@bayareaortho.com',          ip:'10.1.0.7',      app:'Ortho EHR',            policy:'Device Trust Policy',          severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-27 09:33', type:'Geo Block',              user:'user2@bayareaortho.com',           ip:'84.17.52.3',    app:'Billing Portal',       policy:'Geo Restriction Policy',       severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-26 16:44', type:'Malicious DNS',          user:'admin@bayareaortho.com',           ip:'10.1.0.1',      app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-25 10:12', type:'Lateral Movement',       user:'user1@bayareaortho.com',           ip:'10.1.0.5',      app:'File Server',          policy:'IoT to Storage Policy',        severity:'Critical', action:'Blocked' },
  ],
  sunstate: [
    { ts:'2026-05-29 07:55', type:'Unauthorized Access',    user:'agent@sunstateins.com',            ip:'10.2.0.18',     app:'Policy Portal',        policy:'Agent Access Policy',          severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 13:44', type:'C2 attempts',            user:'server@sunstateins.com',           ip:'10.2.0.5',      app:'Claims System',        policy:'C2 Block — Private App',       severity:'Critical', action:'Blocked' },
    { ts:'2026-05-27 11:22', type:'MFA Failure',            user:'manager@sunstateins.com',          ip:'10.2.0.22',     app:'Microsoft 365',        policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-26 09:10', type:'Device Posture Failure', user:'agent2@sunstateins.com',           ip:'10.2.0.19',     app:'Policy Portal',        policy:'Device Trust Policy',          severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-25 14:05', type:'Malicious DNS',          user:'admin@sunstateins.com',            ip:'10.2.0.1',      app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
  ],
  pinehurst: [
    { ts:'2026-05-29 10:05', type:'Unauthorized Access',    user:'extern@unknown.net',                ip:'45.33.32.156',  app:'Legal Doc Vault',      policy:'Vendor Access Policy',         severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 15:30', type:'MFA Failure',            user:'paralegal@pinehurst.law',          ip:'10.3.0.9',      app:'Microsoft 365',        policy:'MFA Enforcement Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-27 12:11', type:'Geo Block',              user:'attorney@pinehurst.law',           ip:'109.238.1.5',   app:'Legal Doc Vault',      policy:'Geo Restriction Policy',       severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-26 09:55', type:'Malicious DNS',          user:'admin@pinehurst.law',              ip:'10.3.0.1',      app:'—',                    policy:'DNS Threat Block',             severity:'Medium',   action:'Blocked' },
  ],
  clearwater: [],
  northridge: [],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function scaled(n: number, range: string) {
  return Math.round(n * (RANGE_MULT[range] ?? 1));
}
function tenantTotal(t: TenantData, range: string) {
  return scaled(Object.values(t.counts).reduce((a, b) => a + b, 0), range);
}
function tenantCritical(t: TenantData, range: string) {
  return scaled(t.counts.c2 + t.counts.lateral, range);
}
function sevBreakdown(t: TenantData, range: string) {
  const out = { Critical: 0, High: 0, Medium: 0 } as Record<string, number>;
  THREAT_TYPES.forEach((tt) => { out[tt.severity] += scaled(t.counts[tt.key], range); });
  return out;
}

function exportCSV(headers: string[], rows: (string | number)[][], filename: string) {
  const csv = [headers, ...rows]
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ── Stat card ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, trend, accent }: {
  label: string; value: string; sub?: string; trend?: { text: string; up: boolean }; accent?: boolean;
}) {
  return (
    <div className="bg-card border rounded-2xl shadow-sm p-5 flex-1 min-w-[150px]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">{label}</div>
      <div className={`text-[28px] font-bold mt-1.5 mb-1 ${accent ? 'text-destructive' : 'text-foreground'}`}>{value}</div>
      {trend && (
        <div className={`text-xs font-medium ${trend.up ? 'text-destructive' : 'text-success'}`}>
          {trend.up ? '↑' : '↓'} {trend.text}
        </div>
      )}
      {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

// ── Time range selector ────────────────────────────────────────────────────────

const RANGES = [
  { key: '24h', label: '24h' },
  { key: '7d',  label: '7 days' },
  { key: '30d', label: '30 days' },
  { key: 'custom', label: 'Custom' },
];

function RangeSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex border border-border rounded-lg overflow-hidden">
      {RANGES.map((r) => (
        <button
          key={r.key}
          onClick={() => onChange(r.key)}
          className={`px-3.5 py-1.5 text-xs font-medium border-r border-border last:border-0 transition-colors ${
            value === r.key
              ? 'bg-action text-action-foreground'
              : 'bg-card text-muted-foreground hover:bg-muted'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

// ── PAGE_SIZE ─────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

// ── All-Tenants view ──────────────────────────────────────────────────────────

// All events across all tenants, each tagged with tenant info
const ALL_EVENTS = Object.entries(EVENTS_BY_TENANT).flatMap(([id, evts]) => {
  const tenant = TENANTS.find((t) => t.id === id)!;
  return evts.map((e) => ({ ...e, tenantId: id, tenantName: tenant?.name ?? id, tenantColor: tenant?.color ?? '#9ca3af' }));
}).sort((a, b) => b.ts.localeCompare(a.ts));

const LOG_PAGE_SIZE = 10;

function AllTenantsView({
  range,
  onRangeChange,
  onDrilldown,
}: {
  range: string;
  onRangeChange: (r: string) => void;
  onDrilldown: (id: string, severity?: string) => void;
}) {
  const navigate = useNavigate();
  // Aggregate stats
  const total    = TENANTS.reduce((s, t) => s + tenantTotal(t, range), 0);
  const critical = TENANTS.reduce((s, t) => s + tenantCritical(t, range), 0);
  const affected = TENANTS.filter((t) => tenantTotal(t, range) > 0).length;
  const mfa      = TENANTS.reduce((s, t) => s + scaled(t.counts.mfa, range), 0);

  // Event log state
  const [logSearch,       setLogSearch]       = useState('');
  const [logFilterTenant, setLogFilterTenant] = useState('');
  const [logFilterThreat, setLogFilterThreat] = useState('');
  const [logFilterSev,    setLogFilterSev]    = useState('');
  const [logPage,         setLogPage]         = useState(1);

  const activeTenants = TENANTS.filter((t) => (EVENTS_BY_TENANT[t.id]?.length ?? 0) > 0);

  const logFiltered = useMemo(() => {
    const q = logSearch.toLowerCase();
    return ALL_EVENTS.filter((e) => {
      if (q && !e.user.toLowerCase().includes(q) && !e.ip.includes(q) && !e.tenantName.toLowerCase().includes(q)) return false;
      if (logFilterTenant && e.tenantId !== logFilterTenant) return false;
      if (logFilterThreat && e.type     !== logFilterThreat) return false;
      if (logFilterSev    && e.severity !== logFilterSev)    return false;
      return true;
    });
  }, [logSearch, logFilterTenant, logFilterThreat, logFilterSev]);

  const logTotalPages = Math.max(1, Math.ceil(logFiltered.length / LOG_PAGE_SIZE));
  const logSafePage   = Math.min(logPage, logTotalPages);
  const logPageEvents = logFiltered.slice((logSafePage - 1) * LOG_PAGE_SIZE, logSafePage * LOG_PAGE_SIZE);

  function handleLogExport() {
    exportCSV(
      ['Timestamp', 'Tenant', 'Threat Type', 'User', 'Source IP', 'Destination App', 'Policy Matched', 'Severity', 'Action'],
      logFiltered.map((e) => [e.ts, e.tenantName, e.type, e.user, e.ip, e.app, e.policy, e.severity, e.action]),
      'blocked-threats-event-log.csv',
    );
  }

  // Threat breakdown
  const aggCounts = THREAT_TYPES.map((tt) => ({
    ...tt,
    count: Math.round(TENANTS.reduce((s, t) => s + t.counts[tt.key], 0) * (RANGE_MULT[range] ?? 1)),
  }));
  const maxCount = Math.max(...aggCounts.map((tt) => tt.count), 1);

  // Tenant bars
  const sorted = [...TENANTS].sort((a, b) => tenantTotal(b, range) - tenantTotal(a, range));
  const maxTotal = Math.max(...sorted.map((t) => tenantTotal(t, range)), 1);

  function handleExport() {
    exportCSV(
      ['Tenant', 'Total Blocked', 'Critical', 'Top Threat'],
      TENANTS.map((t) => [
        t.name,
        tenantTotal(t, range),
        tenantCritical(t, range),
        THREAT_TYPES.reduce((best, tt) =>
          t.counts[tt.key] > t.counts[best.key as ThreatKey] ? tt : best
        ).label,
      ]),
      'blocked-threats-all-tenants.csv',
    );
  }

  const rangeLabel: Record<string, string> = { '24h': 'Last 24 hours', '7d': 'Last 7 days', '30d': 'Last 30 days', custom: 'Custom range' };

  return (
    <div className="space-y-5 pb-10">
      {/* Back link */}
      <button
        onClick={() => navigate('/msp-dashboard')}
        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Dashboard
      </button>

      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <PageHeader title="Blocked Threats" />
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Live — refreshes every 5 min
          </span>
          <RangeSelector value={range} onChange={onRangeChange} />
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 h-8 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-4 flex-wrap">
        <StatCard label="Total Blocked"         value={total.toLocaleString()}    trend={{ text: '14% vs prior period', up: true }}  accent />
        <StatCard label="Critical Events"        value={critical.toLocaleString()} sub="C2 attempts + lateral movement" />
        <StatCard label="Tenants Affected"       value={`${affected} of ${TENANTS.length}`} sub="managed tenants" />
        <StatCard label="Unique Users Blocked"   value="37"                        trend={{ text: '8 vs prior period', up: true }} />
        <StatCard label="MFA Failures"           value={mfa.toLocaleString()}      trend={{ text: '22% vs prior period', up: true }} />
      </div>

      {/* Two-column grid */}
      <div className="flex gap-4 flex-wrap items-start">

        {/* Left column: threat breakdown + event log stacked */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-4">

        {/* Threat type breakdown */}
        <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
            <span className="text-sm font-medium text-foreground">Threat Type Breakdown</span>
            <span className="text-xs text-muted-foreground">{rangeLabel[range] ?? ''}</span>
          </div>
          <div className="p-5 space-y-3.5">
            {aggCounts.map((tt) => (
              <div key={tt.key} className="flex items-center gap-3">
                <span className="text-xs text-foreground w-52 shrink-0 leading-snug">{tt.display}</span>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${maxCount > 0 ? Math.round((tt.count / maxCount) * 100) : 0}%`, background: SEV[tt.severity].bar }}
                  />
                </div>
                <span className="text-xs font-semibold text-foreground w-8 text-right tabular-nums">{tt.count.toLocaleString()}</span>
                <SeverityChip level={SEV[tt.severity].level} className="w-16 justify-center">{tt.severity}</SeverityChip>
              </div>
            ))}
          </div>
        </div>

        {/* ── Aggregate event log ──────────────────────────────────────────── */}
        <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
            <span className="text-sm font-medium text-foreground">Event Log — All Tenants</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{logFiltered.length} event{logFiltered.length !== 1 ? 's' : ''}</span>
              <button
                onClick={handleLogExport}
                className="inline-flex items-center gap-1.5 h-7 px-2.5 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors"
              >
                <Download className="w-3 h-3" />
                CSV
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap px-5 py-3 border-b border-border">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search user, IP, or tenant…"
                value={logSearch}
                onChange={(e) => { setLogSearch(e.target.value); setLogPage(1); }}
                className="h-8 pl-8 pr-3 w-56 text-sm border border-input rounded-lg bg-muted focus:outline-none focus:border-action focus:bg-card"
              />
            </div>
            <select
              value={logFilterTenant}
              onChange={(e) => { setLogFilterTenant(e.target.value); setLogPage(1); }}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="">All Tenants</option>
              {activeTenants.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
            <select
              value={logFilterThreat}
              onChange={(e) => { setLogFilterThreat(e.target.value); setLogPage(1); }}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="">All Threat Types</option>
              {THREAT_TYPES.map((t) => <option key={t.key} value={t.label}>{t.label}</option>)}
            </select>
            <select
              value={logFilterSev}
              onChange={(e) => { setLogFilterSev(e.target.value); setLogPage(1); }}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="">All Severities</option>
              {['Critical', 'High', 'Medium'].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {(logSearch || logFilterTenant || logFilterThreat || logFilterSev) && (
              <button
                onClick={() => { setLogSearch(''); setLogFilterTenant(''); setLogFilterThreat(''); setLogFilterSev(''); setLogPage(1); }}
                className="h-8 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-muted-foreground transition-colors ml-auto"
              >
                Clear
              </button>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {logFiltered.length === 0 ? (
              <div className="text-center py-10 text-sm text-muted-foreground">No events match the current filters.</div>
            ) : (
              <DataTable>
                <THead>
                  <tr>
                    {['Timestamp', 'Tenant', 'Threat Type', 'User', 'Destination App', 'Severity', 'Action'].map((h) => (
                      <TH key={h}>{h}</TH>
                    ))}
                  </tr>
                </THead>
                <tbody>
                  {logPageEvents.map((e, i) => (
                    <TR key={i}>
                      <TD className="text-xs text-muted-foreground whitespace-nowrap font-mono">{e.ts}</TD>
                      <TD>
                        <button
                          onClick={() => onDrilldown(e.tenantId)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-action hover:underline"
                        >
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: e.tenantColor }} />
                          {e.tenantName}
                        </button>
                      </TD>
                      <TD className="text-foreground">{e.type}</TD>
                      <TD className="text-foreground">{e.user}</TD>
                      <TD className="text-foreground">{e.app}</TD>
                      <TD><SeverityChip level={SEV[e.severity]?.level ?? 'med'}>{e.severity}</SeverityChip></TD>
                      <TD className="text-xs font-semibold text-destructive">{e.action}</TD>
                    </TR>
                  ))}
                </tbody>
              </DataTable>
            )}
          </div>

          {/* Pagination */}
          {logFiltered.length > 0 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-muted-foreground">
              <span>
                Showing {(logSafePage - 1) * LOG_PAGE_SIZE + 1}–{Math.min(logSafePage * LOG_PAGE_SIZE, logFiltered.length)} of {logFiltered.length} events
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLogPage((p) => Math.max(1, p - 1))}
                  disabled={logSafePage <= 1}
                  className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                {Array.from({ length: logTotalPages }, (_, i) => i + 1)
                  .filter((p) => logTotalPages <= 7 || p <= 2 || p >= logTotalPages - 1 || Math.abs(p - logSafePage) <= 1)
                  .map((p, idx, arr) => (
                    <span key={p}>
                      {idx > 0 && arr[idx - 1] !== p - 1 && <span className="px-1 text-muted-foreground">…</span>}
                      <button
                        onClick={() => setLogPage(p)}
                        className={`w-7 h-7 flex items-center justify-center rounded-md border text-xs font-medium transition-colors ${
                          p === logSafePage
                            ? 'bg-action text-action-foreground border-action'
                            : 'border-border hover:bg-muted text-foreground'
                        }`}
                      >
                        {p}
                      </button>
                    </span>
                  ))}
                <button
                  onClick={() => setLogPage((p) => Math.min(logTotalPages, p + 1))}
                  disabled={logSafePage >= logTotalPages}
                  className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        </div>{/* end left column */}

        {/* Top tenants by volume */}
        <div className="w-[340px] min-w-[280px] bg-card border rounded-2xl shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
            <span className="text-sm font-medium text-foreground">Top Tenants by Volume</span>
            <span className="text-xs text-muted-foreground">Bar = total · color = severity</span>
          </div>
          <div className="p-5">
            {/* Legend */}
            <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
              {[[SEV.Critical.bar,'Critical'],[SEV.High.bar,'High'],[SEV.Medium.bar,'Medium']].map(([color, label]) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
                  {label}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              {sorted.map((t) => {
                const tot = tenantTotal(t, range);
                const sev = sevBreakdown(t, range);
                const barW = Math.max(8, Math.round((tot / maxTotal) * 100));
                if (tot === 0) {
                  return (
                    <div key={t.id} className="opacity-40 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                          <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                          {t.name}
                        </span>
                        <span className="text-xs text-muted-foreground">—</span>
                      </div>
                      <div className="h-4 bg-muted rounded" />
                      <div className="text-[11px] text-muted-foreground">No blocked threats this period</div>
                    </div>
                  );
                }
                return (
                  <div key={t.id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => onDrilldown(t.id)}
                        className="flex items-center gap-1.5 text-xs font-medium text-action hover:underline"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                        {t.name}
                      </button>
                      <span className="text-xs font-bold text-foreground tabular-nums">{tot.toLocaleString()}</span>
                    </div>
                    <div className="flex h-4 rounded overflow-hidden bg-muted" style={{ width: `${barW}%` }}>
                      {sev.Critical > 0 && (
                        <button
                          title={`Critical: ${sev.Critical}`}
                          onClick={() => onDrilldown(t.id, 'Critical')}
                          className="h-full hover:brightness-90 transition-[filter]"
                          style={{ width: `${(sev.Critical / tot) * 100}%`, background: SEV.Critical.bar }}
                        />
                      )}
                      {sev.High > 0 && (
                        <button
                          title={`High: ${sev.High}`}
                          onClick={() => onDrilldown(t.id, 'High')}
                          className="h-full hover:brightness-90 transition-[filter]"
                          style={{ width: `${(sev.High / tot) * 100}%`, background: SEV.High.bar }}
                        />
                      )}
                      {sev.Medium > 0 && (
                        <button
                          title={`Medium: ${sev.Medium}`}
                          onClick={() => onDrilldown(t.id, 'Medium')}
                          className="h-full hover:brightness-90 transition-[filter]"
                          style={{ width: `${(sev.Medium / tot) * 100}%`, background: SEV.Medium.bar }}
                        />
                      )}
                    </div>
                    <div className="flex gap-3 text-[11px] text-muted-foreground">
                      <button onClick={() => onDrilldown(t.id, 'Critical')} className="text-destructive font-semibold hover:underline">
                        {sev.Critical} critical
                      </button>
                      <span>{sev.High} high</span>
                      <span>{sev.Medium} medium</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Per-tenant drill-down view ─────────────────────────────────────────────────

function DrilldownView({
  tenantId,
  range,
  onRangeChange,
  onBack,
  presetSeverity,
}: {
  tenantId: string;
  range: string;
  onRangeChange: (r: string) => void;
  onBack: () => void;
  presetSeverity?: string;
}) {
  const tenant = TENANTS.find((t) => t.id === tenantId)!;
  const allEvents = EVENTS_BY_TENANT[tenantId] ?? [];

  const [search,    setSearch]    = useState('');
  const [filterThreat, setFilterThreat] = useState('');
  const [filterApp, setFilterApp] = useState('');
  const [filterSev, setFilterSev] = useState(presetSeverity ?? '');
  const [page, setPage] = useState(1);

  const apps = useMemo(
    () => [...new Set(allEvents.map((e) => e.app).filter((a) => a && a !== '—'))].sort(),
    [allEvents],
  );

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const q = search.toLowerCase();
      if (q && !e.user.toLowerCase().includes(q) && !e.ip.includes(q)) return false;
      if (filterThreat && e.type !== filterThreat) return false;
      if (filterApp   && e.app !== filterApp)   return false;
      if (filterSev   && e.severity !== filterSev) return false;
      return true;
    });
  }, [allEvents, search, filterThreat, filterApp, filterSev]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const pageEvents = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const tot          = tenantTotal(tenant, range);
  const crit         = tenantCritical(tenant, range);
  const unauthorized = scaled(tenant.counts.unauthorized, range);
  const mfa          = scaled(tenant.counts.mfa, range);

  function handleExport() {
    exportCSV(
      ['Timestamp','Threat Type','User','Source IP','Destination App','Policy Matched','Severity','Action Taken'],
      filtered.map((e) => [e.ts, e.type, e.user, e.ip, e.app, e.policy, e.severity, e.action]),
      `blocked-threats-${tenantId}.csv`,
    );
  }

  return (
    <div className="space-y-5 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" />
            Blocked Threats
          </button>
          <h1 className="text-2xl font-bold text-foreground">{tenant.name} — Blocked Threats</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filterSev ? `${filterSev} severity threats for this tenant` : 'Blocked threats filtered by tenant'}
          </p>
        </div>
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Live
          </span>
          <RangeSelector value={range} onChange={onRangeChange} />
          <button onClick={onBack} className="h-8 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors">
            ← All Tenants
          </button>
          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 h-8 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-4 flex-wrap">
        <StatCard label="Total Blocked"      value={tot.toLocaleString()}          sub="in selected period" accent />
        <StatCard label="Critical Events"    value={crit.toString()}               sub="C2 + lateral movement" />
        <StatCard label="Unauthorized Access" value={unauthorized.toString()}       trend={{ text: 'Top threat type', up: true }} />
        <StatCard label="MFA Failures"       value={mfa.toString()} />
      </div>

      {/* Event log */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
          <span className="text-sm font-medium text-foreground">Event Log — {tenant.name}</span>
          <span className="text-xs text-muted-foreground">{filtered.length} event{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2.5 flex-wrap px-5 py-3 border-b border-border">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search user or IP…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="h-8 pl-8 pr-3 w-52 text-sm border border-input rounded-lg bg-muted focus:outline-none focus:border-action focus:bg-card"
            />
          </div>
          {[
            { id: 'threat', label: 'All Threat Types', value: filterThreat, set: setFilterThreat,
              options: THREAT_TYPES.map((t) => t.label) },
            { id: 'app',    label: 'All Applications',  value: filterApp,    set: setFilterApp,    options: apps },
            { id: 'sev',    label: 'All Severities',    value: filterSev,    set: setFilterSev,    options: ['Critical','High','Medium'] },
          ].map(({ id, label, value, set, options }) => (
            <select
              key={id}
              value={value}
              onChange={(e) => { set(e.target.value); setPage(1); }}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="">{label}</option>
              {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ))}
          <button
            onClick={() => { setSearch(''); setFilterThreat(''); setFilterApp(''); setFilterSev(''); setPage(1); }}
            className="h-8 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-muted-foreground transition-colors ml-auto"
          >
            Clear Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {allEvents.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Shield className="w-8 h-8 mx-auto mb-3 text-muted-foreground/50" />
              <div className="text-sm font-semibold text-foreground">No blocked threats in selected period</div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-sm text-muted-foreground">No events match the current filters.</div>
          ) : (
            <DataTable>
              <THead>
                <tr>
                  {['Timestamp','Threat Type','User','Source IP','Destination App','Policy Matched','Severity','Action'].map((h) => (
                    <TH key={h}>{h}</TH>
                  ))}
                </tr>
              </THead>
              <tbody>
                {pageEvents.map((e, i) => (
                  <TR key={i}>
                    <TD className="text-xs text-muted-foreground whitespace-nowrap font-mono">{e.ts}</TD>
                    <TD className="text-foreground">{e.type}</TD>
                    <TD className="text-foreground">{e.user}</TD>
                    <TD className="text-xs font-mono text-muted-foreground">{e.ip}</TD>
                    <TD className="text-foreground">{e.app}</TD>
                    <TD className="text-xs text-muted-foreground">{e.policy}</TD>
                    <TD><SeverityChip level={SEV[e.severity]?.level ?? 'med'}>{e.severity}</SeverityChip></TD>
                    <TD className="text-xs font-semibold text-destructive">{e.action}</TD>
                  </TR>
                ))}
              </tbody>
            </DataTable>
          )}
        </div>

        {/* Pagination */}
        {filtered.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-muted-foreground">
            <span>
              Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length} events
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage <= 1}
                className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => totalPages <= 7 || p <= 2 || p >= totalPages - 1 || Math.abs(p - safePage) <= 1)
                .map((p, idx, arr) => (
                  <span key={p}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && (
                      <span className="px-1 text-muted-foreground">…</span>
                    )}
                    <button
                      onClick={() => setPage(p)}
                      className={`w-7 h-7 flex items-center justify-center rounded-md border text-xs font-medium transition-colors ${
                        p === safePage
                          ? 'bg-action text-action-foreground border-action'
                          : 'border-border hover:bg-muted text-foreground'
                      }`}
                    >
                      {p}
                    </button>
                  </span>
                ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage >= totalPages}
                className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Root page component ────────────────────────────────────────────────────────

export function BlockedThreatsPage() {
  const [range, setRange]             = useState('7d');
  const [drilldownId, setDrilldownId] = useState<string | null>(null);
  const [presetSev, setPresetSev]     = useState<string | undefined>();

  const handleDrilldown = useCallback((id: string, severity?: string) => {
    setDrilldownId(id);
    setPresetSev(severity);
  }, []);

  const handleBack = useCallback(() => {
    setDrilldownId(null);
    setPresetSev(undefined);
  }, []);

  if (drilldownId) {
    return (
      <DrilldownView
        tenantId={drilldownId}
        range={range}
        onRangeChange={setRange}
        onBack={handleBack}
        presetSeverity={presetSev}
      />
    );
  }

  return (
    <AllTenantsView
      range={range}
      onRangeChange={setRange}
      onDrilldown={handleDrilldown}
    />
  );
}
