import { useState } from 'react';
import { Download, Search, X, Shield, AlertTriangle, Ban, Users, KeyRound, ArrowUp } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

/* ─── types ────────────────────────────────────────────────── */

type Range = '24h' | '7d' | '30d' | 'custom';
type Severity = 'Critical' | 'High' | 'Medium';

interface Event {
  ts: string; type: string; user: string; ip: string;
  app: string; policy: string; severity: Severity; action: string;
}

/* ─── data ──────────────────────────────────────────────────── */

const THREAT_TYPES = [
  { key: 'unauthorized', label: 'Unauthorized Access',   display: 'Unauthorized Access Attempt',      severity: 'High'     as Severity, barColor: '#f97316' },
  { key: 'posture',      label: 'Device Posture Failure',display: 'Non-Compliant Device Blocked',     severity: 'Medium'   as Severity, barColor: '#f59e0b' },
  { key: 'c2',           label: 'C2 attempts',           display: 'C2 Attempts',                      severity: 'Critical' as Severity, barColor: '#ef4444' },
  { key: 'lateral',      label: 'Lateral Movement',      display: 'Port Scanning / Lateral Movement', severity: 'Critical' as Severity, barColor: '#ef4444' },
  { key: 'dns',          label: 'Malicious DNS',         display: 'DNS-Based Threat',                 severity: 'Medium'   as Severity, barColor: '#f59e0b' },
  { key: 'mfa',          label: 'MFA Failure',           display: 'MFA Challenge Failed / Bypassed',  severity: 'High'     as Severity, barColor: '#f97316' },
  { key: 'geo',          label: 'Geo Block',             display: 'Geo / Location-Based Block',       severity: 'Medium'   as Severity, barColor: '#f59e0b' },
];

const RANGE_MULTIPLIERS: Record<Range, number> = { '24h': 0.14, '7d': 1, '30d': 4.3, 'custom': 1 };

const BASE_COUNTS: Record<string, number> = {
  unauthorized: 412, posture: 340, c2: 29, lateral: 18, dns: 126, mfa: 171, geo: 141,
};

const EVENTS: Event[] = [
  { ts:'2026-05-29 08:42:11', type:'C2 attempts',            user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Dentrix Cloud',      policy:'C2 Block — Private App',    severity:'Critical', action:'Blocked' },
  { ts:'2026-05-29 08:31:55', type:'Unauthorized Access',    user:'unknown@extern.com',               ip:'203.0.113.17',  app:'HR Records Portal',  policy:'Engineering to HR Policy',  severity:'High',     action:'Blocked' },
  { ts:'2026-05-29 08:19:03', type:'MFA Failure',            user:'jessica@riversidedental.com',      ip:'10.0.0.88',     app:'Microsoft 365',      policy:'MFA Enforcement Policy',    severity:'High',     action:'Blocked' },
  { ts:'2026-05-29 07:58:40', type:'Lateral Movement',       user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Storage Server',     policy:'IoT to Storage Policy',     severity:'Critical', action:'Blocked' },
  { ts:'2026-05-29 07:44:22', type:'Malicious DNS',          user:'admin@riversidedental.com',        ip:'10.0.1.5',      app:'—',                   policy:'DNS Threat Block',          severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-29 07:33:15', type:'Unauthorized Access',    user:'temp.vendor@extern.com',           ip:'198.51.100.44', app:'QuickBooks',          policy:'Vendor Access Policy',      severity:'High',     action:'Blocked' },
  { ts:'2026-05-29 07:21:08', type:'Device Posture Failure', user:'maria@riversidedental.com',        ip:'10.0.0.21',     app:'Dentrix Cloud',      policy:'Device Trust Policy',       severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-29 07:10:54', type:'Geo Block',              user:'jessica@riversidedental.com',      ip:'91.108.4.12',   app:'Microsoft 365',      policy:'Geo Restriction Policy',    severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-29 06:55:30', type:'MFA Failure',            user:'mark@riversidedental.com',         ip:'10.0.0.88',     app:'QuickBooks',          policy:'MFA Enforcement Policy',    severity:'High',     action:'Blocked' },
  { ts:'2026-05-29 06:42:17', type:'C2 attempts',            user:'jessica@riversidedental.com',      ip:'192.168.1.51',  app:'Dentrix Cloud',      policy:'C2 Block — Private App',    severity:'Critical', action:'Blocked' },
  { ts:'2026-05-28 17:12:40', type:'Unauthorized Access',    user:'unknown@extern.com',               ip:'203.0.113.22',  app:'Patient Records DB', policy:'Engineering to HR Policy',  severity:'High',     action:'Blocked' },
  { ts:'2026-05-28 16:55:02', type:'Malicious DNS',          user:'admin@riversidedental.com',        ip:'10.0.1.5',      app:'—',                   policy:'DNS Threat Block',          severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-28 15:33:11', type:'Device Posture Failure', user:'mark@riversidedental.com',         ip:'10.0.0.88',     app:'Microsoft 365',      policy:'Device Trust Policy',       severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-28 14:20:48', type:'MFA Failure',            user:'jessica@riversidedental.com',      ip:'10.0.0.51',     app:'QuickBooks',          policy:'MFA Enforcement Policy',    severity:'High',     action:'Blocked' },
  { ts:'2026-05-28 13:07:35', type:'Geo Block',              user:'dr.henderson@riversidedental.com', ip:'77.88.8.1',     app:'Dentrix Cloud',      policy:'Geo Restriction Policy',    severity:'Medium',   action:'Blocked' },
  { ts:'2026-05-27 10:44:12', type:'Lateral Movement',       user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'File Server',        policy:'IoT to Storage Policy',     severity:'Critical', action:'Blocked' },
  { ts:'2026-05-27 09:22:55', type:'Unauthorized Access',    user:'temp.vendor2@extern.com',          ip:'198.51.100.77', app:'HR Records Portal',  policy:'Engineering to HR Policy',  severity:'High',     action:'Blocked' },
  { ts:'2026-05-26 15:11:03', type:'C2 attempts',            user:'mark@riversidedental.com',         ip:'192.168.1.42',  app:'Dentrix Cloud',      policy:'C2 Block — Private App',    severity:'Critical', action:'Blocked' },
  { ts:'2026-05-26 11:03:41', type:'MFA Failure',            user:'maria@riversidedental.com',        ip:'10.0.0.21',     app:'Microsoft 365',      policy:'MFA Enforcement Policy',    severity:'High',     action:'Blocked' },
  { ts:'2026-05-25 16:48:22', type:'Malicious DNS',          user:'jessica@riversidedental.com',      ip:'10.0.0.51',     app:'—',                   policy:'DNS Threat Block',          severity:'Medium',   action:'Blocked' },
];

/* ─── helpers ───────────────────────────────────────────────── */

const PAGE_SIZE = 10;

function sevStyle(s: Severity) {
  if (s === 'Critical') return 'bg-red-50 text-red-600';
  if (s === 'High')     return 'bg-orange-50 text-orange-500';
  return 'bg-yellow-50 text-yellow-600';
}

function exportCSV(events: Event[]) {
  const headers = ['Timestamp','Threat Type','User','Source IP','Destination App','Policy Matched','Severity','Action Taken'];
  const rows = events.map(e => [e.ts, e.type, e.user, e.ip, e.app, e.policy, e.severity, e.action]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'blocked-threats-riverside.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ─── component ─────────────────────────────────────────────── */

export function ReportsPage() {
  const [range, setRange] = useState<Range>('7d');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');
  const [customErr, setCustomErr] = useState(false);
  const [search, setSearch] = useState('');
  const [filterThreat, setFilterThreat] = useState('');
  const [filterApp, setFilterApp] = useState('');
  const [filterSev, setFilterSev] = useState('');
  const [page, setPage] = useState(1);

  const m = RANGE_MULTIPLIERS[range];
  const total      = Math.round(Object.values(BASE_COUNTS).reduce((a, b) => a + b, 0) * m);
  const critical   = Math.round((BASE_COUNTS.c2 + BASE_COUNTS.lateral) * m);
  const unauthorized = Math.round(BASE_COUNTS.unauthorized * m);
  const uniqueUsers  = new Set(EVENTS.map(e => e.user)).size;
  const mfaCount   = Math.round(BASE_COUNTS.mfa * m);

  const counts = Object.fromEntries(THREAT_TYPES.map(tt => [tt.key, Math.round((BASE_COUNTS[tt.key] ?? 0) * m)]));
  const maxCount = Math.max(...Object.values(counts));

  const apps = [...new Set(EVENTS.map(e => e.app).filter(a => a && a !== '—'))].sort();

  // filtered events
  const filtered = EVENTS.filter(e => {
    if (search && !e.user.toLowerCase().includes(search.toLowerCase()) && !e.ip.includes(search)) return false;
    if (filterThreat && e.type !== filterThreat) return false;
    if (filterApp && e.app !== filterApp) return false;
    if (filterSev && e.severity !== filterSev) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageEvents = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const clearFilters = () => { setSearch(''); setFilterThreat(''); setFilterApp(''); setFilterSev(''); setPage(1); };
  const hasFilters = search || filterThreat || filterApp || filterSev;

  const applyCustom = (from: string, to: string) => {
    if (from && to && new Date(from) > new Date(to)) { setCustomErr(true); return; }
    setCustomErr(false);
  };

  const rangeLabel: Record<Range, string> = { '24h': 'Last 24 hours', '7d': 'Last 7 days', '30d': 'Last 30 days', 'custom': 'Custom range' };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        subtitle="Blocked threats, activity, and security posture for this tenant"
        actions={
          <div className="flex items-center gap-3 flex-wrap">
            {/* Time range dropdown */}
            <select
              value={range}
              onChange={e => { setRange(e.target.value as Range); setPage(1); }}
              className="text-xs font-medium px-3 py-1.5 border border-[#e5e7eb] rounded-md text-[#6b7280] bg-white focus:outline-none focus:border-[#f05a23]"
            >
              {(['24h','7d','30d','custom'] as Range[]).map(r => (
                <option key={r} value={r}>{rangeLabel[r]}</option>
              ))}
            </select>
            {/* Custom date pickers */}
            {range === 'custom' && (
              <div className="flex items-center gap-2 text-xs">
                <input type="date" value={customFrom}
                  onChange={e => { setCustomFrom(e.target.value); applyCustom(e.target.value, customTo); }}
                  className={`px-2 py-1.5 border rounded-md text-[#111827] ${customErr ? 'border-red-500' : 'border-[#e5e7eb]'}`}
                />
                <span className="text-[#6b7280]">to</span>
                <input type="date" value={customTo}
                  onChange={e => { setCustomTo(e.target.value); applyCustom(customFrom, e.target.value); }}
                  className={`px-2 py-1.5 border rounded-md text-[#111827] ${customErr ? 'border-red-500' : 'border-[#e5e7eb]'}`}
                />
                {customErr && <span className="text-red-500 text-xs">Start must be before end</span>}
              </div>
            )}
            {/* Export */}
            <button
              onClick={() => exportCSV(filtered)}
              title="Export CSV"
              aria-label="Export CSV"
              className="flex items-center justify-center p-2 text-[#6b7280] bg-white border border-[#e5e7eb] rounded-md hover:bg-gray-50"
            >
              <Download size={15} />
            </button>
          </div>
        }
      />

      <div className="space-y-5">
        {/* ── Stat cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-5 gap-4">
          {[
            { label: 'Total Blocked',        value: total.toLocaleString(), of: 'events',          trend: '↑ 14%', trendColor: 'text-red-500',   Icon: Shield,        iconBg: 'bg-red-50',    iconColor: 'text-red-500' },
            { label: 'Critical Events',      value: critical,               of: 'C2 + lateral',    trend: '',      trendColor: 'text-[#6b7280]', Icon: AlertTriangle, iconBg: 'bg-red-50',    iconColor: 'text-red-500' },
            { label: 'Unauthorized Access',  value: unauthorized,           of: 'top threat',      trend: '',      trendColor: 'text-[#6b7280]', Icon: Ban,           iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
            { label: 'Unique Users Blocked', value: uniqueUsers,            of: 'this period',     trend: '',      trendColor: 'text-[#6b7280]', Icon: Users,         iconBg: 'bg-blue-50',   iconColor: 'text-blue-500' },
            { label: 'MFA Failures',         value: mfaCount,               of: 'challenges',      trend: '↑ 22%', trendColor: 'text-red-500',   Icon: KeyRound,      iconBg: 'bg-amber-50',  iconColor: 'text-amber-500' },
          ].map(({ label, value, of, trend, trendColor, Icon, iconBg, iconColor }) => (
            <div key={label} className="bg-white border border-[#e5e7eb] rounded-xl px-4 py-4 flex items-center gap-3">
              <div className={`size-12 shrink-0 rounded-xl flex items-center justify-center ${iconBg}`}>
                <Icon size={22} className={iconColor} strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#6b7280] truncate">{label}</p>
                <div className="flex items-baseline gap-1.5 flex-wrap mt-0.5">
                  <span className="text-2xl font-bold text-[#111827] leading-none">{value}</span>
                  <span className="text-xs text-[#6b7280]">{of}</span>
                  {trend && (
                    <span className={`text-xs font-semibold inline-flex items-center gap-0.5 ${trendColor}`}>
                      <ArrowUp size={11} strokeWidth={2.5} />{trend.replace('↑ ', '')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Threat type breakdown ────────────────────────────── */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e5e7eb]">
            <span className="text-sm font-semibold text-[#111827]">Threat Type Breakdown</span>
            <span className="text-xs text-[#6b7280]">{rangeLabel[range]}</span>
          </div>
          <div className="px-5 py-4 space-y-3">
            {THREAT_TYPES.map(tt => {
              const c = counts[tt.key] ?? 0;
              const pct = maxCount > 0 ? Math.round((c / maxCount) * 100) : 0;
              return (
                <div key={tt.key} className="flex items-center gap-3">
                  <span className="text-xs text-[#111827] w-56 shrink-0 leading-snug">{tt.display}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: tt.barColor }} />
                  </div>
                  <span className="text-xs font-semibold text-[#111827] w-10 text-right shrink-0">{c.toLocaleString()}</span>
                  <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full w-16 text-center shrink-0 ${sevStyle(tt.severity)}`}>
                    {tt.severity}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Event log ───────────────────────────────────────── */}
        <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#e5e7eb]">
            <span className="text-sm font-semibold text-[#111827]">Event Log</span>
            <span className="text-xs text-[#6b7280]">{filtered.length} event{filtered.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="px-5 py-4">
            {/* Filters */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <div className="relative">
                <Search size={13} className="absolute left-2.5 top-2.5 text-gray-400" />
                <input
                  type="search" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search user or IP…"
                  className="pl-8 pr-3 py-1.5 text-sm border border-[#e5e7eb] rounded-md w-52 focus:outline-none focus:border-[#f05a23]"
                />
              </div>
              <select value={filterThreat} onChange={e => { setFilterThreat(e.target.value); setPage(1); }}
                className="text-sm px-2.5 py-1.5 border border-[#e5e7eb] rounded-md focus:outline-none focus:border-[#f05a23]">
                <option value="">All Threat Types</option>
                {THREAT_TYPES.map(tt => <option key={tt.key}>{tt.label}</option>)}
              </select>
              <select value={filterApp} onChange={e => { setFilterApp(e.target.value); setPage(1); }}
                className="text-sm px-2.5 py-1.5 border border-[#e5e7eb] rounded-md focus:outline-none focus:border-[#f05a23]">
                <option value="">All Applications</option>
                {apps.map(a => <option key={a}>{a}</option>)}
              </select>
              <select value={filterSev} onChange={e => { setFilterSev(e.target.value); setPage(1); }}
                className="text-sm px-2.5 py-1.5 border border-[#e5e7eb] rounded-md focus:outline-none focus:border-[#f05a23]">
                <option value="">All Severities</option>
                <option>Critical</option><option>High</option><option>Medium</option>
              </select>
              {hasFilters && (
                <button onClick={clearFilters}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium border border-[#e5e7eb] rounded-md hover:bg-gray-50">
                  <X size={12} /> Clear
                </button>
              )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#e5e7eb]">
                    {['Timestamp','Threat Type','User','Source IP','Destination App','Policy Matched','Severity','Action'].map(h => (
                      <th key={h} className="px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-[#6b7280]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageEvents.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-3 py-10 text-center text-sm text-[#6b7280]">
                        {hasFilters ? 'No events match the current filters.' : 'No blocked threats in selected period.'}
                      </td>
                    </tr>
                  ) : pageEvents.map((e, i) => (
                    <tr key={i} className="border-b border-[#e5e7eb] last:border-b-0 hover:bg-gray-50">
                      <td className="px-3 py-2.5 text-xs text-[#6b7280] whitespace-nowrap">{e.ts}</td>
                      <td className="px-3 py-2.5">
                        <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${sevStyle(e.severity as Severity)}`}>{e.type}</span>
                      </td>
                      <td className="px-3 py-2.5 text-xs">{e.user}</td>
                      <td className="px-3 py-2.5 text-xs font-mono text-[#6b7280]">{e.ip}</td>
                      <td className="px-3 py-2.5 text-xs">{e.app}</td>
                      <td className="px-3 py-2.5 text-xs text-[#6b7280]">{e.policy}</td>
                      <td className="px-3 py-2.5">
                        <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${sevStyle(e.severity as Severity)}`}>{e.severity}</span>
                      </td>
                      <td className="px-3 py-2.5 text-xs font-semibold text-red-500">{e.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filtered.length > 0 && (
              <div className="flex items-center justify-between pt-3 text-xs text-[#6b7280]">
                <span>
                  Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length} events
                </span>
                <div className="flex gap-1">
                  <button disabled={safePage <= 1} onClick={() => setPage(p => p - 1)}
                    className="px-2.5 py-1 border border-[#e5e7eb] rounded-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50">‹</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button key={p} onClick={() => setPage(p)}
                      className={`px-2.5 py-1 border rounded-md ${p === safePage ? 'bg-[#f05a23] text-white border-[#f05a23]' : 'border-[#e5e7eb] hover:bg-gray-50'}`}>
                      {p}
                    </button>
                  ))}
                  <button disabled={safePage >= totalPages} onClick={() => setPage(p => p + 1)}
                    className="px-2.5 py-1 border border-[#e5e7eb] rounded-md disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50">›</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
