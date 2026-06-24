import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Download } from 'lucide-react';
import { DataTable, THead, TH, TR, TD } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

// ── Deterministic series generator (same seed as MspDashboardPage) ────────────

function genSeries(seed: number, base: number, amp: number): number[] {
  let s = seed;
  const out: number[] = [];
  for (let i = 0; i < 30; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const r = s / 0x7fffffff;
    const weekend = i % 7 === 5 || i % 7 === 6 ? 0.62 : 1;
    const drift = 1 + (i / 29) * 0.18;
    out.push(Math.max(0, Math.round((base * weekend * drift) + (r - 0.5) * amp)));
  }
  return out;
}

const TRAFFIC_SERIES = [
  { name: 'Global Services LLC',      color: '#10b981', data: genSeries(7,  168000, 52000) },
  { name: 'Enterprise Solutions',     color: '#0ea5e9', data: genSeries(23, 138000, 44000) },
  { name: 'Acme Corporation',         color: '#6366f1', data: genSeries(41, 101000, 38000) },
  { name: 'Riverside Dental Office',  color: '#f59e0b', data: genSeries(59,  41000, 16000) },
  { name: 'Cloud Innovations',        color: '#9ca3af', data: new Array(30).fill(0) },
];

function fmtK(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
}

const DAY_LABELS = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

function TrafficChart({ active }: { active: string | null }) {
  const [hover, setHover] = useState<number | null>(null);

  const W = 900, H = 320;
  const padL = 56, padR = 20, padT = 20, padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const days = 30;

  const visible = active ? TRAFFIC_SERIES.filter(s => s.name === active) : TRAFFIC_SERIES;

  const maxY = useMemo(() => {
    const peak = Math.max(...TRAFFIC_SERIES.flatMap(s => s.data));
    return Math.ceil(peak / 50000) * 50000;
  }, []);

  const x = (i: number) => padL + (i / (days - 1)) * innerW;
  const y = (v: number) => padT + innerH - (v / maxY) * innerH;
  const xLabels = [0, 4, 9, 14, 19, 24, 29];

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full" style={{ height: 280 }}>
        {/* gridlines */}
        {[0, 1, 2, 3, 4].map(i => {
          const val = (maxY / 4) * i;
          const yy = y(val);
          return (
            <g key={i}>
              <line x1={padL} y1={yy} x2={W - padR} y2={yy} stroke="#f1f5f9" strokeWidth={1} />
              <text x={padL - 8} y={yy + 3.5} textAnchor="end" className="fill-muted-foreground" style={{ fontSize: 10 }}>{fmtK(val)}</text>
            </g>
          );
        })}
        {/* x labels */}
        {xLabels.map(i => (
          <text key={i} x={x(i)} y={H - 10} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 10 }}>Day {i + 1}</text>
        ))}
        {/* lines */}
        {visible.map(s => {
          if (s.data.every(d => d === 0)) return null;
          const d = s.data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
          return <path key={s.name} d={d} fill="none" stroke={s.color} strokeWidth={active && active !== s.name ? 1 : 2.5} strokeOpacity={active && active !== s.name ? 0.25 : 1} strokeLinecap="round" strokeLinejoin="round" />;
        })}
        {/* hover guide */}
        {hover !== null && (
          <>
            <line x1={x(hover)} y1={padT} x2={x(hover)} y2={padT + innerH} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3 3" />
            {visible.filter(s => !s.data.every(d => d === 0)).map(s => (
              <circle key={s.name} cx={x(hover)} cy={y(s.data[hover])} r={4} fill="#fff" stroke={s.color} strokeWidth={2} />
            ))}
          </>
        )}
        {/* hover capture */}
        <rect x={padL} y={padT} width={innerW} height={innerH} fill="transparent"
          onMouseMove={e => {
            const rect = (e.target as SVGRectElement).getBoundingClientRect();
            const rel = (e.clientX - rect.left) / rect.width;
            setHover(Math.max(0, Math.min(days - 1, Math.round(rel * (days - 1)))));
          }}
          onMouseLeave={() => setHover(null)}
        />
      </svg>

      {hover !== null && (
        <div
          className="absolute top-4 bg-card border rounded-xl shadow-lg p-3 pointer-events-none z-10 min-w-[180px]"
          style={{ left: `${(((padL + (hover / (days - 1)) * innerW) / W) * 100)}%`, transform: 'translateX(-50%)' }}
        >
          <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">{DAY_LABELS[hover]}</div>
          <div className="space-y-1">
            {visible.filter(s => !s.data.every(d => d === 0)).map(s => (
              <div key={s.name} className="flex items-center gap-2 text-xs whitespace-nowrap">
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="text-muted-foreground flex-1">{s.name.split(' ')[0]}</span>
                <span className="font-semibold text-foreground tabular-nums">{fmtK(s.data[hover])}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function exportCSV() {
  const headers = ['Day', ...TRAFFIC_SERIES.map(s => s.name)];
  const rows = Array.from({ length: 30 }, (_, i) => [
    `Day ${i + 1}`,
    ...TRAFFIC_SERIES.map(s => s.data[i]),
  ]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'web-traffic-trend.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

export function MspTrafficPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);

  const tableRows = TRAFFIC_SERIES.map(s => ({
    name: s.name,
    color: s.color,
    total: s.data.reduce((a, b) => a + b, 0),
    peak:  Math.max(...s.data),
    avg:   Math.round(s.data.reduce((a, b) => a + b, 0) / 30),
    active: !s.data.every(d => d === 0),
  }));

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

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <PageHeader
          title="Web Traffic Trend"
          subtitle="Daily request volumes across all managed tenants — last 30 days."
        />
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-1.5 h-9 px-3.5 text-sm font-medium border border-border rounded-lg bg-card hover:bg-muted text-foreground transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Chart card */}
      <div className="bg-card border rounded-2xl shadow-sm p-6">
        <div className="flex flex-wrap gap-3 mb-4">
          {TRAFFIC_SERIES.map(s => (
            <button
              key={s.name}
              onClick={() => setActive(active === s.name ? null : s.name)}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                active === s.name
                  ? 'border-foreground text-foreground font-semibold'
                  : active
                    ? 'border-border text-muted-foreground opacity-50'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              {s.name}
            </button>
          ))}
        </div>
        <TrafficChart active={active} />
        <p className="text-xs text-muted-foreground mt-3">Click a tenant in the legend to isolate its line. Hover the chart for daily breakdowns.</p>
      </div>

      {/* Per-tenant summary table */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border">
          <span className="text-sm font-medium text-foreground">Tenant Summary — Last 30 Days</span>
        </div>
        <DataTable>
          <THead>
            <tr>
              {['Tenant', 'Status', 'Total Requests', 'Peak Day', 'Daily Average'].map(h => (
                <TH key={h}>{h}</TH>
              ))}
            </tr>
          </THead>
          <tbody>
            {tableRows.map(r => (
              <TR key={r.name}>
                <TD>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: r.color }} />
                    <span className="text-[13px] font-medium text-foreground">{r.name}</span>
                  </div>
                </TD>
                <TD>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.active ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}>
                    {r.active ? 'Active' : 'Pending Setup'}
                  </span>
                </TD>
                <TD className="tabular-nums font-medium text-[13px] text-foreground">{r.active ? fmtK(r.total) : '—'}</TD>
                <TD className="tabular-nums text-[13px] text-muted-foreground">{r.active ? fmtK(r.peak) : '—'}</TD>
                <TD className="tabular-nums text-[13px] text-muted-foreground">{r.active ? fmtK(r.avg) + ' / day' : '—'}</TD>
              </TR>
            ))}
          </tbody>
        </DataTable>
      </div>
    </div>
  );
}
