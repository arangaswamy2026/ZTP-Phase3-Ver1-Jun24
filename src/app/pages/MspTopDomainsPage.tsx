import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Search, Download, TrendingUp, TrendingDown, Minus, Globe } from 'lucide-react';
import { StatusBadge, DataTable, THead, TH, TR, TD } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

// ── Extended mock data ────────────────────────────────────────────────────────

const TOP_DOMAINS_FULL = [
  { domain: 'office365.com',      category: 'Business Productivity', badge: 'Known',     requests: 1_402_031, tenants: 4, trend: 6,    dir: 'up'   },
  { domain: 'salesforce.com',     category: 'Business Productivity', badge: 'Known',     requests:   551_090, tenants: 2, trend: 11,   dir: 'up'   },
  { domain: 'dentrix.com',        category: 'Healthcare Software',   badge: 'Known',     requests:   234_112, tenants: 1, trend: 3,    dir: 'down' },
  { domain: 'quickbooks.com',     category: 'Business Productivity', badge: 'Known',     requests:   198_447, tenants: 3, trend: 0,    dir: 'flat' },
  { domain: 'dropbox.com',        category: 'Cloud Storage',         badge: 'Shadow IT', requests:   162_120, tenants: 3, trend: 42,   dir: 'up'   },
  { domain: 'slack.com',          category: 'Communication',         badge: 'Known',     requests:   148_300, tenants: 4, trend: 5,    dir: 'up'   },
  { domain: 'zoom.us',            category: 'Communication',         badge: 'Known',     requests:   140_218, tenants: 4, trend: 2,    dir: 'down' },
  { domain: 'box.com',            category: 'Cloud Storage',         badge: 'Shadow IT', requests:    94_500, tenants: 2, trend: 18,   dir: 'up'   },
  { domain: 'google.com',         category: 'Search / Productivity', badge: 'Known',     requests:    88_741, tenants: 4, trend: 1,    dir: 'flat' },
  { domain: 'github.com',         category: 'Development',           badge: 'Known',     requests:    72_034, tenants: 2, trend: 8,    dir: 'up'   },
  { domain: 'amazonaws.com',      category: 'Cloud Infrastructure',  badge: 'Known',     requests:    65_299, tenants: 3, trend: 12,   dir: 'up'   },
  { domain: 'telegram.org',       category: 'Social / Messaging',    badge: 'Shadow IT', requests:    44_100, tenants: 2, trend: 61,   dir: 'up'   },
  { domain: 'wetransfer.com',     category: 'File Sharing',          badge: 'Shadow IT', requests:    31_452, tenants: 3, trend: 29,   dir: 'up'   },
  { domain: 'azure.microsoft.com',category: 'Cloud Infrastructure',  badge: 'Known',     requests:    28_900, tenants: 2, trend: 4,    dir: 'up'   },
  { domain: 'onedrive.live.com',  category: 'Cloud Storage',         badge: 'Known',     requests:    24_317, tenants: 2, trend: 7,    dir: 'up'   },
];

function fmtNum(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
}

function TrendCell({ trend, dir }: { trend: number; dir: string }) {
  if (dir === 'up')   return <span className="inline-flex items-center gap-1 text-xs font-semibold text-destructive"><TrendingUp className="w-3 h-3" />+{trend}%</span>;
  if (dir === 'down') return <span className="inline-flex items-center gap-1 text-xs font-semibold text-success"><TrendingDown className="w-3 h-3" />-{trend}%</span>;
  return <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Minus className="w-3 h-3" />Stable</span>;
}

function exportCSV() {
  const rows = TOP_DOMAINS_FULL.map(d => [d.domain, d.category, d.badge, d.requests, d.tenants, d.trend]);
  const csv = [['Domain','Category','Type','Requests','Tenants','Trend%'], ...rows]
    .map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'top-domains.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

export function MspTopDomainsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [badgeFilter, setBadgeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = useMemo(() => [...new Set(TOP_DOMAINS_FULL.map(d => d.category))].sort(), []);

  const filtered = useMemo(() => TOP_DOMAINS_FULL.filter(d => {
    if (search && !d.domain.toLowerCase().includes(search.toLowerCase())) return false;
    if (badgeFilter && d.badge !== badgeFilter) return false;
    if (categoryFilter && d.category !== categoryFilter) return false;
    return true;
  }), [search, badgeFilter, categoryFilter]);

  const totalRequests = filtered.reduce((s, d) => s + d.requests, 0);
  const shadowCount   = TOP_DOMAINS_FULL.filter(d => d.badge === 'Shadow IT').length;

  return (
    <div className="space-y-6 pb-10 max-w-[1200px]">
      {/* Back */}
      <button
        onClick={() => navigate('/msp-dashboard')}
        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Dashboard
      </button>

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <PageHeader
          title="Top Domains & Traffic"
          subtitle="All domains accessed across your managed tenants, sorted by request volume."
        />
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-1.5 h-9 px-3.5 text-sm font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Stat row */}
      <div className="flex gap-4 flex-wrap">
        {[
          { label: 'Total Requests',    value: fmtNum(totalRequests), sub: 'filtered results' },
          { label: 'Unique Domains',    value: String(filtered.length), sub: 'in view' },
          { label: 'Shadow IT Domains', value: String(shadowCount), sub: 'require review', accent: true },
        ].map(s => (
          <div key={s.label} className="bg-card border rounded-2xl shadow-sm p-5 flex-1 min-w-[160px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">{s.label}</div>
            <div className={`text-[28px] font-bold mt-1.5 mb-1 ${s.accent ? 'text-destructive' : 'text-foreground'}`}>{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search domain…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="h-9 pl-8 pr-3 w-56 text-sm border border-input rounded-lg bg-muted focus:outline-none focus:border-action focus:bg-card"
          />
        </div>
        <select
          value={badgeFilter}
          onChange={e => setBadgeFilter(e.target.value)}
          className="h-9 px-3 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
        >
          <option value="">All Types</option>
          <option value="Known">Known</option>
          <option value="Shadow IT">Shadow IT</option>
        </select>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="h-9 px-3 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
        >
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {(search || badgeFilter || categoryFilter) && (
          <button
            onClick={() => { setSearch(''); setBadgeFilter(''); setCategoryFilter(''); }}
            className="h-9 px-3 text-xs font-medium border border-border rounded-lg bg-card hover:bg-muted text-muted-foreground transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Table */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-muted-foreground">
            <Globe className="w-8 h-8 mx-auto mb-3 text-muted-foreground/40" />
            No domains match the current filters.
          </div>
        ) : (
          <DataTable>
            <THead>
              <tr>
                {['Domain', 'Category', 'Type', 'Requests (30d)', 'Tenants', 'Trend'].map(h => (
                  <TH key={h}>{h}</TH>
                ))}
              </tr>
            </THead>
            <tbody>
              {filtered.map(d => (
                <TR key={d.domain}>
                  <TD>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0">
                        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                      </div>
                      <span className="text-[13px] font-medium text-foreground whitespace-nowrap">{d.domain}</span>
                    </div>
                  </TD>
                  <TD>
                    <span className="text-xs text-muted-foreground">{d.category}</span>
                  </TD>
                  <TD>
                    <StatusBadge variant={d.badge === 'Shadow IT' ? 'warning' : 'success'}>{d.badge}</StatusBadge>
                  </TD>
                  <TD className="tabular-nums font-medium text-[13px] text-foreground">{fmtNum(d.requests)}</TD>
                  <TD className="tabular-nums text-[13px] text-muted-foreground">{d.tenants}</TD>
                  <TD><TrendCell trend={d.trend} dir={d.dir} /></TD>
                </TR>
              ))}
            </tbody>
          </DataTable>
        )}
        <div className="px-5 py-2.5 border-t border-border text-xs text-muted-foreground">
          {filtered.length} domain{filtered.length !== 1 ? 's' : ''} shown · data reflects the last 30 days
        </div>
      </div>
    </div>
  );
}
