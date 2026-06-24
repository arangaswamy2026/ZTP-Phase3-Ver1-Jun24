import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Globe, Search, Download, TrendingUp, TrendingDown, Minus, AlertTriangle, Shield, BarChart2 } from 'lucide-react';
import { DataTable, THead, TH, TR, TD } from '../components/ds';

// ── Data ──────────────────────────────────────────────────────────────────────

interface DomainRow {
  domain: string;
  category: string;
  badge: 'Known' | 'Shadow IT' | 'Blocked';
  requests: number;
  bandwidth: number; // GB
  uniqueUsers: number;
  avgLatency: number; // ms
  trend: number;
  dir: 'up' | 'down' | 'flat';
  risk: 'None' | 'Low' | 'Medium' | 'High';
  lastSeen: string;
}

const ALL_DOMAINS: DomainRow[] = [
  { domain: 'office365.com',        category: 'Business Productivity', badge: 'Known',     requests: 402_031, bandwidth: 214.3, uniqueUsers: 38, avgLatency: 42,  trend: 6,  dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:55' },
  { domain: 'salesforce.com',       category: 'CRM',                   badge: 'Known',     requests: 151_090, bandwidth:  98.7, uniqueUsers: 24, avgLatency: 67,  trend: 11, dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:51' },
  { domain: 'dentrix.com',          category: 'Healthcare Software',   badge: 'Known',     requests:  84_112, bandwidth:  55.1, uniqueUsers: 31, avgLatency: 38,  trend: 3,  dir: 'down', risk: 'None',   lastSeen: '2026-05-29 08:48' },
  { domain: 'quickbooks.com',       category: 'Finance',               badge: 'Known',     requests:  58_447, bandwidth:  41.8, uniqueUsers: 12, avgLatency: 55,  trend: 0,  dir: 'flat', risk: 'None',   lastSeen: '2026-05-29 07:22' },
  { domain: 'dropbox.com',          category: 'File Sharing',          badge: 'Shadow IT', requests:  42_120, bandwidth: 189.4, uniqueUsers: 19, avgLatency: 74,  trend: 42, dir: 'up',   risk: 'Medium', lastSeen: '2026-05-29 08:44' },
  { domain: 'slack.com',            category: 'Communication',         badge: 'Known',     requests:  38_300, bandwidth:  27.9, uniqueUsers: 35, avgLatency: 33,  trend: 5,  dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:58' },
  { domain: 'zoom.us',              category: 'Communication',         badge: 'Known',     requests:  34_218, bandwidth: 302.1, uniqueUsers: 29, avgLatency: 48,  trend: 2,  dir: 'down', risk: 'None',   lastSeen: '2026-05-29 08:30' },
  { domain: 'box.com',              category: 'File Sharing',          badge: 'Shadow IT', requests:  21_500, bandwidth:  88.6, uniqueUsers: 11, avgLatency: 81,  trend: 18, dir: 'up',   risk: 'Medium', lastSeen: '2026-05-28 17:10' },
  { domain: 'google.com',           category: 'Search / Productivity', badge: 'Known',     requests:  18_741, bandwidth:   9.2, uniqueUsers: 40, avgLatency: 19,  trend: 1,  dir: 'flat', risk: 'None',   lastSeen: '2026-05-29 08:59' },
  { domain: 'github.com',           category: 'Development',           badge: 'Known',     requests:  17_034, bandwidth:  31.4, uniqueUsers: 8,  avgLatency: 61,  trend: 8,  dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:12' },
  { domain: 'amazonaws.com',        category: 'Cloud Infrastructure',  badge: 'Known',     requests:  15_299, bandwidth:  74.8, uniqueUsers: 6,  avgLatency: 29,  trend: 12, dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:05' },
  { domain: 'telegram.org',         category: 'Social / Messaging',    badge: 'Shadow IT', requests:  11_200, bandwidth:  14.7, uniqueUsers: 7,  avgLatency: 92,  trend: 61, dir: 'up',   risk: 'High',   lastSeen: '2026-05-29 07:45' },
  { domain: 'wetransfer.com',       category: 'File Sharing',          badge: 'Shadow IT', requests:   8_450, bandwidth: 412.0, uniqueUsers: 9,  avgLatency: 118, trend: 29, dir: 'up',   risk: 'High',   lastSeen: '2026-05-28 15:33' },
  { domain: 'azure.microsoft.com',  category: 'Cloud Infrastructure',  badge: 'Known',     requests:   7_900, bandwidth:  23.5, uniqueUsers: 5,  avgLatency: 35,  trend: 4,  dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 07:58' },
  { domain: 'onedrive.live.com',    category: 'Cloud Storage',         badge: 'Known',     requests:   6_317, bandwidth:  67.3, uniqueUsers: 14, avgLatency: 44,  trend: 7,  dir: 'up',   risk: 'None',   lastSeen: '2026-05-29 08:21' },
  { domain: 'anonfiles.com',        category: 'File Sharing',          badge: 'Blocked',   requests:     412, bandwidth:   0.4, uniqueUsers: 2,  avgLatency: 210, trend: 0,  dir: 'flat', risk: 'High',   lastSeen: '2026-05-27 11:04' },
  { domain: 'pastebin.com',         category: 'Development',           badge: 'Shadow IT', requests:   3_218, bandwidth:   1.1, uniqueUsers: 4,  avgLatency: 58,  trend: 15, dir: 'up',   risk: 'Medium', lastSeen: '2026-05-29 06:30' },
  { domain: 'protonmail.com',       category: 'Communication',         badge: 'Shadow IT', requests:   2_105, bandwidth:   3.8, uniqueUsers: 3,  avgLatency: 88,  trend: 9,  dir: 'up',   risk: 'Low',    lastSeen: '2026-05-28 12:44' },
];

// Weekly traffic spark data (requests in thousands, 7 data points = Mon–Sun)
const WEEKLY_TRAFFIC = [58.4, 62.1, 71.3, 68.9, 80.2, 44.1, 31.5];
const DAY_LABELS     = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
}

function fmtBW(gb: number): string {
  if (gb >= 1000) return `${(gb / 1000).toFixed(1)} TB`;
  return `${gb.toFixed(1)} GB`;
}

function exportCSV(rows: DomainRow[]) {
  const headers = ['Domain', 'Category', 'Type', 'Requests', 'Bandwidth', 'Unique Users', 'Avg Latency (ms)', 'Trend %', 'Risk', 'Last Seen'];
  const data = rows.map(d => [d.domain, d.category, d.badge, d.requests, fmtBW(d.bandwidth), d.uniqueUsers, d.avgLatency, (d.dir === 'up' ? '+' : d.dir === 'down' ? '-' : '') + d.trend + '%', d.risk, d.lastSeen]);
  const csv = [headers, ...data].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'top-domains-detail.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

// ── Sub-components ────────────────────────────────────────────────────────────

const RISK_STYLE: Record<string, { bg: string; text: string }> = {
  None:   { bg: '#16a34a1a', text: '#16a34a' },
  Low:    { bg: '#0066cc1a', text: '#0066cc' },
  Medium: { bg: '#d977061a', text: '#d97706' },
  High:   { bg: '#d4183d1a', text: '#d4183d' },
};

const BADGE_STYLE: Record<string, { bg: string; text: string }> = {
  'Known':     { bg: '#16a34a1a', text: '#16a34a' },
  'Shadow IT': { bg: '#d977061a', text: '#d97706' },
  'Blocked':   { bg: '#d4183d1a', text: '#d4183d' },
};

function Chip({ label, style }: { label: string; style: { bg: string; text: string } }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: '11px', fontWeight: 600,
      padding: '3px 8px', borderRadius: '8px',
      background: style.bg, color: style.text,
    }}>
      {label}
    </span>
  );
}

function TrendCell({ trend, dir }: { trend: number; dir: string }) {
  if (dir === 'up')   return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '12px', fontWeight: 600, color: '#d4183d' }}><TrendingUp style={{ width: '12px', height: '12px' }} />+{trend}%</span>;
  if (dir === 'down') return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '12px', fontWeight: 600, color: '#16a34a' }}><TrendingDown style={{ width: '12px', height: '12px' }} />-{trend}%</span>;
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '12px', color: '#9ca3af' }}><Minus style={{ width: '12px', height: '12px' }} />Stable</span>;
}

// Mini bar chart for weekly traffic
function WeeklyChart() {
  const max = Math.max(...WEEKLY_TRAFFIC);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', flex: 1, minHeight: 0, padding: '0 4px' }}>
      {WEEKLY_TRAFFIC.map((v, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', flex: 1, gap: '6px', height: '100%' }}>
          <div style={{
            width: '100%', borderRadius: '4px 4px 0 0',
            flex: `${(v / max)}`,
            background: i === 4 ? '#0066cc' : '#0066cc33',
            transition: 'flex 0.3s',
            minHeight: '4px',
          }} />
          <span style={{ fontSize: '10px', color: '#9ca3af', whiteSpace: 'nowrap', flexShrink: 0 }}>{DAY_LABELS[i]}</span>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

export function TenantTopDomainsPage() {
  const navigate = useNavigate();
  const [search,          setSearch]          = useState('');
  const [badgeFilter,     setBadgeFilter]     = useState('');
  const [categoryFilter,  setCategoryFilter]  = useState('');
  const [riskFilter,      setRiskFilter]      = useState('');
  const [page,            setPage]            = useState(1);
  const [sortCol,         setSortCol]         = useState<'requests' | 'bandwidth' | 'users' | 'latency' | 'trend'>('requests');
  const [sortDir,         setSortDir]         = useState<'desc' | 'asc'>('desc');

  const categories = useMemo(() => [...new Set(ALL_DOMAINS.map(d => d.category))].sort(), []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return ALL_DOMAINS.filter(d => {
      if (q && !d.domain.toLowerCase().includes(q)) return false;
      if (badgeFilter    && d.badge    !== badgeFilter)    return false;
      if (categoryFilter && d.category !== categoryFilter) return false;
      if (riskFilter     && d.risk     !== riskFilter)     return false;
      return true;
    });
  }, [search, badgeFilter, categoryFilter, riskFilter]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let av = 0, bv = 0;
      if (sortCol === 'requests')  { av = a.requests;    bv = b.requests; }
      if (sortCol === 'bandwidth') { av = a.bandwidth;   bv = b.bandwidth; }
      if (sortCol === 'users')     { av = a.uniqueUsers; bv = b.uniqueUsers; }
      if (sortCol === 'latency')   { av = a.avgLatency;  bv = b.avgLatency; }
      if (sortCol === 'trend')     { av = a.trend * (a.dir === 'down' ? -1 : 1); bv = b.trend * (b.dir === 'down' ? -1 : 1); }
      return sortDir === 'desc' ? bv - av : av - bv;
    });
  }, [filtered, sortCol, sortDir]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const pageRows   = sorted.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const totalRequests  = ALL_DOMAINS.reduce((s, d) => s + d.requests, 0);
  const totalBandwidth = ALL_DOMAINS.reduce((s, d) => s + d.bandwidth, 0);
  const shadowCount    = ALL_DOMAINS.filter(d => d.badge === 'Shadow IT').length;
  const blockedCount   = ALL_DOMAINS.filter(d => d.badge === 'Blocked').length;
  const highRiskCount  = ALL_DOMAINS.filter(d => d.risk === 'High').length;

  function toggleSort(col: typeof sortCol) {
    if (sortCol === col) setSortDir(d => d === 'desc' ? 'asc' : 'desc');
    else { setSortCol(col); setSortDir('desc'); }
    setPage(1);
  }

  const inputStyle: React.CSSProperties = {
    height: '32px', padding: '0 12px', fontSize: '13px',
    border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px',
    background: '#f8f9fa', outline: 'none', color: '#1a1a1a', fontFamily: 'inherit',
  };

  function SortTH({ col, children }: { col: typeof sortCol; children: React.ReactNode }) {
    const active = sortCol === col;
    return (
      <TH>
        <button
          onClick={() => toggleSort(col)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', color: active ? '#0066cc' : 'inherit' }}
        >
          {children}
          <span style={{ fontSize: '9px', opacity: active ? 1 : 0.4 }}>
            {active ? (sortDir === 'desc' ? '▼' : '▲') : '↕'}
          </span>
        </button>
      </TH>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px', maxWidth: '1200px', width: '100%' }}>

      {/* Back link */}
      <button
        onClick={() => navigate(-1)}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: 500, color: '#0066cc', background: 'none', border: 'none', padding: 0, cursor: 'pointer', alignSelf: 'flex-start', fontFamily: 'inherit' }}
      >
        <ChevronLeft style={{ width: '16px', height: '16px' }} />
        Back to Dashboard
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>Top Domains &amp; Traffic</h1>
          <p style={{ fontSize: '13px', color: '#717182', marginTop: '4px', marginBottom: 0 }}>
            All domains accessed in the last 30 days — sorted by request volume
          </p>
        </div>
        <button
          onClick={() => exportCSV(sorted)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '32px', padding: '0 12px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', background: '#ffffff', color: '#1a1a1a', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          <Download style={{ width: '14px', height: '14px' }} />
          Export CSV
        </button>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          { label: 'Total Requests',    value: fmtNum(totalRequests),     sub: 'last 30 days',       icon: <BarChart2 style={{ width: '16px', height: '16px', color: '#0066cc' }} />, iconBg: '#0066cc12' },
          { label: 'Total Bandwidth',   value: fmtBW(totalBandwidth),     sub: 'data transferred',   icon: <Globe     style={{ width: '16px', height: '16px', color: '#4f46e5' }} />, iconBg: '#4f46e512' },
          { label: 'Shadow IT Domains', value: String(shadowCount),       sub: 'require review',     icon: <AlertTriangle style={{ width: '16px', height: '16px', color: '#d97706' }} />, iconBg: '#d977061a', accent: '#d97706' },
          { label: 'Blocked Domains',   value: String(blockedCount),      sub: 'policy-blocked',     icon: <Shield    style={{ width: '16px', height: '16px', color: '#d4183d' }} />, iconBg: '#d4183d1a', accent: '#d4183d' },
          { label: 'High Risk',         value: String(highRiskCount),     sub: 'need action',        icon: <AlertTriangle style={{ width: '16px', height: '16px', color: '#d4183d' }} />, iconBg: '#d4183d1a', accent: '#d4183d' },
        ].map(s => (
          <div key={s.label} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', padding: '18px 20px', flex: 1, minWidth: '140px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {s.icon}
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#717182' }}>{s.label}</span>
            </div>
            <div style={{ fontSize: '26px', fontWeight: 700, color: s.accent ?? '#1a1a1a', lineHeight: 1.1 }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '3px' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Analytics panels — 2 equal columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

        {/* Weekly traffic chart */}
        <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>Weekly Request Volume</span>
            <span style={{ fontSize: '11px', color: '#9ca3af' }}>Requests (k)</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <WeeklyChart />
            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#9ca3af', flexShrink: 0 }}>
              <span>Peak: Fri 80.2k</span>
              <span>Avg: {Math.round(WEEKLY_TRAFFIC.reduce((a, b) => a + b) / WEEKLY_TRAFFIC.length)}k / day</span>
            </div>
          </div>
        </div>

        {/* Risk Flags */}
        <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertTriangle style={{ width: '14px', height: '14px', color: '#d97706' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>Risk Flags</span>
          </div>
          <div style={{ padding: '8px 0' }}>
            {ALL_DOMAINS.filter(d => d.risk !== 'None').sort((a, b) => {
              const order: Record<string, number> = { High: 0, Medium: 1, Low: 2, None: 3 };
              return order[a.risk] - order[b.risk];
            }).map(d => (
              <div key={d.domain} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe style={{ width: '13px', height: '13px', color: '#9ca3af' }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.domain}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{d.badge}</div>
                  </div>
                </div>
                <Chip label={d.risk} style={RISK_STYLE[d.risk]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative' }}>
          <Search style={{ width: '13px', height: '13px', position: 'absolute', left: '9px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="search"
            placeholder="Search domain…"
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            style={{ ...inputStyle, paddingLeft: '30px', width: '196px' }}
          />
        </div>
        {[
          { label: 'All Types',      value: badgeFilter,    set: setBadgeFilter,    options: ['Known', 'Shadow IT', 'Blocked'] },
          { label: 'All Categories', value: categoryFilter, set: setCategoryFilter, options: categories },
          { label: 'All Risk',       value: riskFilter,     set: setRiskFilter,     options: ['None', 'Low', 'Medium', 'High'] },
        ].map(({ label, value, set, options }) => (
          <select key={label} value={value} onChange={e => { set(e.target.value); setPage(1); }} style={inputStyle}>
            <option value="">{label}</option>
            {options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        ))}
        {(search || badgeFilter || categoryFilter || riskFilter) && (
          <button
            onClick={() => { setSearch(''); setBadgeFilter(''); setCategoryFilter(''); setRiskFilter(''); setPage(1); }}
            style={{ ...inputStyle, padding: '0 12px', cursor: 'pointer', color: '#717182' }}
          >
            Clear
          </button>
        )}
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#9ca3af' }}>
          {sorted.length} domain{sorted.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Table */}
      <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
        {sorted.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 20px', color: '#717182' }}>
            <Globe style={{ width: '32px', height: '32px', margin: '0 auto 12px', color: '#d1d5db' }} />
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>No domains match your filters</div>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <DataTable>
              <THead>
                <tr>
                  <TH>Domain</TH>
                  <TH>Category</TH>
                  <TH>Type</TH>
                  <SortTH col="requests">Requests</SortTH>
                  <SortTH col="bandwidth">Bandwidth</SortTH>
                  <SortTH col="users">Users</SortTH>
                  <SortTH col="latency">Avg Latency</SortTH>
                  <SortTH col="trend">Trend</SortTH>
                  <TH>Risk</TH>
                  <TH>Last Seen</TH>
                </tr>
              </THead>
              <tbody>
                {pageRows.map(d => (
                  <TR key={d.domain}>
                    <TD>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Globe style={{ width: '13px', height: '13px', color: '#9ca3af' }} />
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap' }}>{d.domain}</span>
                      </div>
                    </TD>
                    <TD><span style={{ fontSize: '12px', color: '#717182' }}>{d.category}</span></TD>
                    <TD><Chip label={d.badge} style={BADGE_STYLE[d.badge]} /></TD>
                    <TD><span style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', fontVariantNumeric: 'tabular-nums' }}>{fmtNum(d.requests)}</span></TD>
                    <TD><span style={{ fontSize: '13px', color: '#1a1a1a', fontVariantNumeric: 'tabular-nums' }}>{fmtBW(d.bandwidth)}</span></TD>
                    <TD><span style={{ fontSize: '13px', color: '#717182', fontVariantNumeric: 'tabular-nums' }}>{d.uniqueUsers}</span></TD>
                    <TD>
                      <span style={{ fontSize: '12px', color: d.avgLatency > 100 ? '#d97706' : '#717182', fontVariantNumeric: 'tabular-nums' }}>
                        {d.avgLatency} ms
                      </span>
                    </TD>
                    <TD><TrendCell trend={d.trend} dir={d.dir} /></TD>
                    <TD><Chip label={d.risk} style={RISK_STYLE[d.risk]} /></TD>
                    <TD><span style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{d.lastSeen}</span></TD>
                  </TR>
                ))}
              </tbody>
            </DataTable>
          </div>
        )}

        {/* Table footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', borderTop: '1px solid rgba(0,0,0,0.08)', background: '#ffffff' }}>
          <span style={{ fontSize: '12px', color: '#717182' }}>
            {sorted.length > 0
              ? `Showing ${(safePage - 1) * PAGE_SIZE + 1}–${Math.min(safePage * PAGE_SIZE, sorted.length)} of ${sorted.length} domains`
              : '0 domains'}
          </span>
          {totalPages > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={safePage <= 1}
                style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: safePage <= 1 ? 'not-allowed' : 'pointer', opacity: safePage <= 1 ? 0.4 : 1 }}
              >
                <ChevronLeft style={{ width: '13px', height: '13px' }} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => totalPages <= 7 || p <= 2 || p >= totalPages - 1 || Math.abs(p - safePage) <= 1)
                .map((p, idx, arr) => (
                  <span key={p} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && <span style={{ padding: '0 4px', color: '#717182' }}>…</span>}
                    <button
                      onClick={() => setPage(p)}
                      style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: '1px solid', fontSize: '12px', fontWeight: 500, cursor: 'pointer', borderColor: p === safePage ? '#0066cc' : 'rgba(0,0,0,0.12)', background: p === safePage ? '#0066cc' : '#ffffff', color: p === safePage ? '#ffffff' : '#1a1a1a' }}
                    >
                      {p}
                    </button>
                  </span>
                ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={safePage >= totalPages}
                style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.12)', background: '#fff', cursor: safePage >= totalPages ? 'not-allowed' : 'pointer', opacity: safePage >= totalPages ? 0.4 : 1 }}
              >
                <ChevronRight style={{ width: '13px', height: '13px' }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
