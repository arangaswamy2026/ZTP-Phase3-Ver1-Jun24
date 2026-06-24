import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Search, Download, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { SeverityChip, DataTable, THead, TH, TR, TD } from '../components/ds';

// ── Shared data (mirrors BlockedThreatsPage) ──────────────────────────────────

const SEV: Record<string, { level: 'crit' | 'high' | 'med'; bar: string }> = {
  Critical: { level: 'crit', bar: '#d4183d' },
  High:     { level: 'high', bar: '#d97706' },
  Medium:   { level: 'med',  bar: '#ca8a04' },
};

const THREAT_TYPES = [
  { key: 'unauthorized', label: 'Unauthorized Access',    display: 'Unauthorized Access Attempt',       severity: 'High' },
  { key: 'posture',      label: 'Device Posture Failure', display: 'Non-Compliant Device Blocked',      severity: 'Medium' },
  { key: 'c2',           label: 'C2 attempts',            display: 'C2 Attempts',                       severity: 'Critical' },
  { key: 'lateral',      label: 'Lateral Movement',       display: 'Port Scanning / Lateral Movement',  severity: 'Critical' },
  { key: 'dns',          label: 'Malicious DNS',          display: 'DNS-Based Threat',                  severity: 'Medium' },
  { key: 'mfa',          label: 'MFA Failure',            display: 'MFA Challenge Failed / Bypassed',   severity: 'High' },
  { key: 'geo',          label: 'Geo Block',              display: 'Geo / Location-Based Block',        severity: 'Medium' },
] as const;

type ThreatKey = typeof THREAT_TYPES[number]['key'];

interface TenantData {
  id: string;
  name: string;
  color: string;
  counts: Record<ThreatKey, number>;
}

const TENANTS: TenantData[] = [
  { id: 'riverside',  name: 'Riverside Dental Office',   color: '#4f46e5', counts: { unauthorized:412, posture:340, c2:29, lateral:18, dns:126, mfa:171, geo:141 } },
  { id: 'bayarea',    name: 'Bay Area Ortho Group',       color: '#0ea5e9', counts: { unauthorized:87,  posture:54,  c2:11, lateral:7,  dns:38,  mfa:29,  geo:22  } },
  { id: 'sunstate',   name: 'SunState Insurance LLC',     color: '#10b981', counts: { unauthorized:63,  posture:41,  c2:7,  lateral:4,  dns:19,  mfa:13,  geo:9   } },
  { id: 'pinehurst',  name: 'Pinehurst Law Partners',     color: '#f59e0b', counts: { unauthorized:22,  posture:14,  c2:0,  lateral:0,  dns:8,   mfa:6,   geo:4   } },
  { id: 'clearwater', name: 'Clearwater Tech (inactive)', color: '#9ca3af', counts: { unauthorized:0,   posture:0,   c2:0,  lateral:0,  dns:0,   mfa:0,   geo:0   } },
  { id: 'northridge', name: 'Northridge Medical Group',   color: '#8b5cf6', counts: { unauthorized:0,   posture:0,   c2:0,  lateral:0,  dns:0,   mfa:0,   geo:0   } },
];

interface ThreatEvent {
  ts: string; type: string; user: string; ip: string;
  app: string; policy: string; severity: string; action: string;
}

const EVENTS_BY_TENANT: Record<string, ThreatEvent[]> = {
  riverside: [
    { ts:'2026-05-29 08:42', type:'C2 attempts',            user:'mark@riversidedental.com',          ip:'192.168.1.42',  app:'Dentrix Cloud',     policy:'C2 Block — Private App',     severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 08:31', type:'Unauthorized Access',    user:'unknown@extern.com',                ip:'203.0.113.17',  app:'HR Records Portal', policy:'Engineering to HR Policy',   severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 08:19', type:'MFA Failure',            user:'jessica@riversidedental.com',       ip:'10.0.0.88',     app:'Microsoft 365',     policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 07:58', type:'Lateral Movement',       user:'mark@riversidedental.com',          ip:'192.168.1.42',  app:'Storage Server',    policy:'IoT to Storage Policy',      severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 07:44', type:'Malicious DNS',          user:'admin@riversidedental.com',         ip:'10.0.1.5',      app:'—',                 policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 07:33', type:'Unauthorized Access',    user:'temp.vendor@extern.com',            ip:'198.51.100.44', app:'QuickBooks',         policy:'Vendor Access Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 07:21', type:'Device Posture Failure', user:'maria@riversidedental.com',         ip:'10.0.0.21',     app:'Dentrix Cloud',     policy:'Device Trust Policy',        severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 07:10', type:'Geo Block',              user:'jessica@riversidedental.com',       ip:'91.108.4.12',   app:'Microsoft 365',     policy:'Geo Restriction Policy',     severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-29 06:55', type:'MFA Failure',            user:'mark@riversidedental.com',          ip:'10.0.0.88',     app:'QuickBooks',         policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-29 06:42', type:'C2 attempts',            user:'jessica@riversidedental.com',       ip:'192.168.1.51',  app:'Dentrix Cloud',     policy:'C2 Block — Private App',     severity:'Critical', action:'Blocked' },
    { ts:'2026-05-28 17:12', type:'Unauthorized Access',    user:'unknown@extern.com',                ip:'203.0.113.22',  app:'Patient Records DB', policy:'Engineering to HR Policy',  severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 16:55', type:'Malicious DNS',          user:'admin@riversidedental.com',         ip:'10.0.1.5',      app:'—',                 policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-28 15:33', type:'Device Posture Failure', user:'mark@riversidedental.com',          ip:'10.0.0.88',     app:'Microsoft 365',     policy:'Device Trust Policy',        severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-28 14:20', type:'MFA Failure',            user:'jessica@riversidedental.com',       ip:'10.0.0.51',     app:'QuickBooks',         policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 13:07', type:'Geo Block',              user:'dr.henderson@riversidedental.com',  ip:'77.88.8.1',     app:'Dentrix Cloud',     policy:'Geo Restriction Policy',     severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-27 10:44', type:'Lateral Movement',       user:'mark@riversidedental.com',          ip:'192.168.1.42',  app:'File Server',       policy:'IoT to Storage Policy',      severity:'Critical', action:'Blocked' },
    { ts:'2026-05-27 09:22', type:'Unauthorized Access',    user:'temp.vendor2@extern.com',           ip:'198.51.100.77', app:'HR Records Portal', policy:'Engineering to HR Policy',   severity:'High',     action:'Blocked' },
    { ts:'2026-05-26 15:11', type:'C2 attempts',            user:'mark@riversidedental.com',          ip:'192.168.1.42',  app:'Dentrix Cloud',     policy:'C2 Block — Private App',     severity:'Critical', action:'Blocked' },
    { ts:'2026-05-26 11:03', type:'MFA Failure',            user:'maria@riversidedental.com',         ip:'10.0.0.21',     app:'Microsoft 365',     policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-25 16:48', type:'Malicious DNS',          user:'jessica@riversidedental.com',       ip:'10.0.0.51',     app:'—',                 policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
  ],
  bayarea: [
    { ts:'2026-05-29 09:11', type:'C2 attempts',            user:'user1@bayareaortho.com',            ip:'10.1.0.5',      app:'Ortho EHR',          policy:'C2 Block — Private App',     severity:'Critical', action:'Blocked' },
    { ts:'2026-05-29 08:50', type:'Unauthorized Access',    user:'extern@unknown.net',                ip:'185.220.101.5', app:'Billing Portal',     policy:'Vendor Access Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 14:22', type:'MFA Failure',            user:'receptionist@bayareaortho.com',     ip:'10.1.0.12',     app:'Microsoft 365',      policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-27 11:05', type:'Device Posture Failure', user:'dr.kim@bayareaortho.com',           ip:'10.1.0.7',      app:'Ortho EHR',          policy:'Device Trust Policy',        severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-27 09:33', type:'Geo Block',              user:'user2@bayareaortho.com',            ip:'84.17.52.3',    app:'Billing Portal',     policy:'Geo Restriction Policy',     severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-26 16:44', type:'Malicious DNS',          user:'admin@bayareaortho.com',            ip:'10.1.0.1',      app:'—',                  policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-25 10:12', type:'Lateral Movement',       user:'user1@bayareaortho.com',            ip:'10.1.0.5',      app:'File Server',         policy:'IoT to Storage Policy',     severity:'Critical', action:'Blocked' },
  ],
  sunstate: [
    { ts:'2026-05-29 07:55', type:'Unauthorized Access',    user:'agent@sunstateins.com',             ip:'10.2.0.18',     app:'Policy Portal',      policy:'Agent Access Policy',        severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 13:44', type:'C2 attempts',            user:'server@sunstateins.com',            ip:'10.2.0.5',      app:'Claims System',      policy:'C2 Block — Private App',     severity:'Critical', action:'Blocked' },
    { ts:'2026-05-27 11:22', type:'MFA Failure',            user:'manager@sunstateins.com',           ip:'10.2.0.22',     app:'Microsoft 365',      policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-26 09:10', type:'Device Posture Failure', user:'agent2@sunstateins.com',            ip:'10.2.0.19',     app:'Policy Portal',      policy:'Device Trust Policy',        severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-25 14:05', type:'Malicious DNS',          user:'admin@sunstateins.com',             ip:'10.2.0.1',      app:'—',                  policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
  ],
  pinehurst: [
    { ts:'2026-05-29 10:05', type:'Unauthorized Access',    user:'extern@unknown.net',                ip:'45.33.32.156',  app:'Legal Doc Vault',    policy:'Vendor Access Policy',       severity:'High',     action:'Blocked' },
    { ts:'2026-05-28 15:30', type:'MFA Failure',            user:'paralegal@pinehurst.law',           ip:'10.3.0.9',      app:'Microsoft 365',      policy:'MFA Enforcement Policy',     severity:'High',     action:'Blocked' },
    { ts:'2026-05-27 12:11', type:'Geo Block',              user:'attorney@pinehurst.law',            ip:'109.238.1.5',   app:'Legal Doc Vault',    policy:'Geo Restriction Policy',     severity:'Medium',   action:'Blocked' },
    { ts:'2026-05-26 09:55', type:'Malicious DNS',          user:'admin@pinehurst.law',               ip:'10.3.0.1',      app:'—',                  policy:'DNS Threat Block',           severity:'Medium',   action:'Blocked' },
  ],
  clearwater: [],
  northridge: [],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function tenantTotal(t: TenantData) {
  return Object.values(t.counts).reduce((a, b) => a + b, 0);
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

function StatCard({ label, value, sub, accent }: {
  label: string; value: string | number; sub?: string; accent?: boolean;
}) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '16px',
      padding: '20px',
      flex: 1,
      minWidth: '140px',
    }}>
      <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#717182' }}>
        {label}
      </div>
      <div style={{ fontSize: '28px', fontWeight: 700, marginTop: '6px', marginBottom: '4px', color: accent ? '#d4183d' : '#1a1a1a' }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: '12px', color: '#717182' }}>{sub}</div>}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

export function TenantBlockedThreatsPage() {
  const navigate = useNavigate();

  const activeTenants = TENANTS.filter((t) => tenantTotal(t) > 0);
  const [selectedId] = useState(activeTenants[0]?.id ?? 'riverside');

  const tenant = TENANTS.find((t) => t.id === selectedId) ?? TENANTS[0];
  const allEvents = EVENTS_BY_TENANT[selectedId] ?? [];

  const [search,       setSearch]       = useState('');
  const [filterThreat, setFilterThreat] = useState('');
  const [filterApp,    setFilterApp]    = useState('');
  const [filterSev,    setFilterSev]    = useState('');
  const [page,         setPage]         = useState(1);

  const apps = useMemo(
    () => [...new Set(allEvents.map((e) => e.app).filter((a) => a && a !== '—'))].sort(),
    [allEvents],
  );

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const q = search.toLowerCase();
      if (q && !e.user.toLowerCase().includes(q) && !e.ip.includes(q)) return false;
      if (filterThreat && e.type !== filterThreat) return false;
      if (filterApp    && e.app !== filterApp)     return false;
      if (filterSev    && e.severity !== filterSev) return false;
      return true;
    });
  }, [allEvents, search, filterThreat, filterApp, filterSev]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const pageEvents = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const tot          = tenantTotal(tenant);
  const crit         = tenant.counts.c2 + tenant.counts.lateral;
  const unauthorized = tenant.counts.unauthorized;
  const mfa          = tenant.counts.mfa;

  // Threat breakdown bars
  const typeBreakdown = THREAT_TYPES.map((tt) => ({
    ...tt,
    count: tenant.counts[tt.key],
  }));
  const maxTypeCount = Math.max(...typeBreakdown.map((t) => t.count), 1);

  function handleExport() {
    exportCSV(
      ['Timestamp', 'Threat Type', 'User', 'Source IP', 'Destination App', 'Policy Matched', 'Severity', 'Action Taken'],
      filtered.map((e) => [e.ts, e.type, e.user, e.ip, e.app, e.policy, e.severity, e.action]),
      `blocked-threats-${selectedId}.csv`,
    );
  }

  const inputStyle: React.CSSProperties = {
    height: '32px',
    padding: '0 12px',
    fontSize: '13px',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: '8px',
    background: '#f8f9fa',
    outline: 'none',
    color: '#1a1a1a',
    fontFamily: 'inherit',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px', maxWidth: '1200px', width: '100%' }}>

      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '13px',
          fontWeight: 500,
          color: '#0066cc',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          alignSelf: 'flex-start',
          fontFamily: 'inherit',
        }}
      >
        <ChevronLeft style={{ width: '16px', height: '16px' }} />
        Back to Dashboard
      </button>

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Blocked Threats</h1>
          <p style={{ fontSize: '13px', color: '#717182', marginTop: '4px', marginBottom: 0 }}>
            Tenant-level threat details — last 30 days
          </p>
        </div>
        <button
          onClick={handleExport}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            height: '32px',
            padding: '0 12px',
            fontSize: '12px',
            fontWeight: 500,
            border: '1px solid rgba(0,0,0,0.15)',
            borderRadius: '8px',
            background: '#ffffff',
            color: '#1a1a1a',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          <Download style={{ width: '14px', height: '14px' }} />
          Export CSV
        </button>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <StatCard label="Total Blocked"       value={tot.toLocaleString()}   sub="in last 30 days" accent />
        <StatCard label="Critical Events"     value={crit}                   sub="C2 + lateral movement" />
        <StatCard label="Unauthorized Access" value={unauthorized}           sub="top threat type" />
        <StatCard label="MFA Failures"        value={mfa} />
      </div>

      {/* Threat type breakdown + event log */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Breakdown panel */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
          minWidth: '260px',
          width: '280px',
          flexShrink: 0,
        }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>Threat Type Breakdown</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {typeBreakdown.map((tt) => (
              <div key={tt.key} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#1a1a1a', lineHeight: 1.3 }}>{tt.display}</span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', tabularNums: true } as React.CSSProperties}>{tt.count}</span>
                </div>
                <div style={{ height: '6px', background: '#ececf0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    borderRadius: '9999px',
                    width: `${Math.round((tt.count / maxTypeCount) * 100)}%`,
                    background: SEV[tt.severity]?.bar ?? '#9ca3af',
                    transition: 'width 0.4s',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event log */}
        <div style={{
          flex: 1,
          minWidth: '0',
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
              Event Log — {tenant.name}
            </span>
            <span style={{ fontSize: '12px', color: '#717182' }}>
              {filtered.length} event{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', padding: '10px 20px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ position: 'relative' }}>
              <Search style={{ width: '13px', height: '13px', position: 'absolute', left: '9px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="search"
                placeholder="Search user or IP…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                style={{ ...inputStyle, paddingLeft: '30px', width: '196px' }}
              />
            </div>
            {[
              { label: 'All Threat Types', value: filterThreat, set: setFilterThreat, options: THREAT_TYPES.map((t) => t.label) },
              { label: 'All Applications',  value: filterApp,    set: setFilterApp,    options: apps },
              { label: 'All Severities',    value: filterSev,    set: setFilterSev,    options: ['Critical', 'High', 'Medium'] },
            ].map(({ label, value, set, options }) => (
              <select
                key={label}
                value={value}
                onChange={(e) => { set(e.target.value); setPage(1); }}
                style={inputStyle}
              >
                <option value="">{label}</option>
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ))}
            <button
              onClick={() => { setSearch(''); setFilterThreat(''); setFilterApp(''); setFilterSev(''); setPage(1); }}
              style={{ ...inputStyle, padding: '0 12px', cursor: 'pointer', marginLeft: 'auto', color: '#717182' }}
            >
              Clear
            </button>
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto' }}>
            {allEvents.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '64px 20px', color: '#717182' }}>
                <Shield style={{ width: '32px', height: '32px', margin: '0 auto 12px', color: '#d1d5db' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>No blocked threats for this tenant</div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>Switch to an active tenant above</div>
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', fontSize: '13px', color: '#717182' }}>
                No events match the current filters.
              </div>
            ) : (
              <DataTable>
                <THead>
                  <tr>
                    {['Timestamp', 'Threat Type', 'User', 'Source IP', 'Destination App', 'Policy Matched', 'Severity', 'Action'].map((h) => (
                      <TH key={h}>{h}</TH>
                    ))}
                  </tr>
                </THead>
                <tbody>
                  {pageEvents.map((e, i) => (
                    <TR key={i}>
                      <TD style={{ fontSize: '12px', color: '#717182', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>{e.ts}</TD>
                      <TD style={{ fontSize: '13px', color: '#1a1a1a' }}>{e.type}</TD>
                      <TD style={{ fontSize: '13px', color: '#1a1a1a' }}>{e.user}</TD>
                      <TD style={{ fontSize: '12px', fontFamily: 'monospace', color: '#717182' }}>{e.ip}</TD>
                      <TD style={{ fontSize: '13px', color: '#1a1a1a' }}>{e.app}</TD>
                      <TD style={{ fontSize: '12px', color: '#717182' }}>{e.policy}</TD>
                      <TD><SeverityChip level={SEV[e.severity]?.level ?? 'med'}>{e.severity}</SeverityChip></TD>
                      <TD>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '8px',
                          background: '#d4183d1a',
                          color: '#d4183d',
                        }}>
                          {e.action}
                        </span>
                      </TD>
                    </TR>
                  ))}
                </tbody>
              </DataTable>
            )}
          </div>

          {/* Pagination */}
          {filtered.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '12px', color: '#717182' }}>
              <span>
                Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length} events
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={safePage <= 1}
                  style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: safePage <= 1 ? 'not-allowed' : 'pointer', opacity: safePage <= 1 ? 0.4 : 1 }}
                >
                  <ChevronLeft style={{ width: '13px', height: '13px' }} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => totalPages <= 7 || p <= 2 || p >= totalPages - 1 || Math.abs(p - safePage) <= 1)
                  .map((p, idx, arr) => (
                    <span key={p} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {idx > 0 && arr[idx - 1] !== p - 1 && (
                        <span style={{ padding: '0 4px', color: '#717182' }}>…</span>
                      )}
                      <button
                        onClick={() => setPage(p)}
                        style={{
                          width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          borderRadius: '6px', border: '1px solid', fontSize: '12px', fontWeight: 500, cursor: 'pointer',
                          borderColor: p === safePage ? '#0066cc' : 'rgba(0,0,0,0.12)',
                          background: p === safePage ? '#0066cc' : '#ffffff',
                          color: p === safePage ? '#ffffff' : '#1a1a1a',
                        }}
                      >
                        {p}
                      </button>
                    </span>
                  ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage >= totalPages}
                  style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: safePage >= totalPages ? 'not-allowed' : 'pointer', opacity: safePage >= totalPages ? 0.4 : 1 }}
                >
                  <ChevronRight style={{ width: '13px', height: '13px' }} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
