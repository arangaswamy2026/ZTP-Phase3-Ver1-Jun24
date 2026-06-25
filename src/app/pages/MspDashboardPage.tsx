import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { TenantAvatar } from '../components/TenantAvatar';
import { StatusBadge, DataTable, THead, TH, TR, TD, DashboardWidget } from '../components/ds';
import type { WidgetPeriod } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

// ── Data ──────────────────────────────────────────────────────────────────────

// Severity bar colors reference the semantic tokens so a recolor is a one-token
// edit. CRITICAL → error, HIGH/MEDIUM → warning.
const THREAT_BREAKDOWN = [
  { label: 'Unauthorized Access Attempt',      count: 584 },
  { label: 'Non-Compliant Device Blocked',     count: 449 },
  { label: 'C2 Attempts',                      count: 51  },
  { label: 'Port Scanning / Lateral Movement', count: 32  },
  { label: 'DNS-Based Threat',                 count: 201 },
  { label: 'MFA Challenge Failed / Bypassed',  count: 229 },
  { label: 'Geo / Location-Based Block',       count: 184 },
];

const TENANT_ACTIONS = [
  { name: 'Global Services LLC',      allowed: 4_364_951, blocked: 764_051 },
  { name: 'Enterprise Solutions',     allowed: 3_528_455, blocked: 673_285 },
  { name: 'Acme Corporation',         allowed: 2_469_112, blocked: 615_346 },
  { name: 'Riverside Dental Office',  allowed:   987_816, blocked: 262_584 },
];

// Deterministic 30-day daily web-traffic series per tenant (LCG-seeded so the
// chart is stable across re-renders). Values are request counts per day.
function genSeries(seed: number, base: number, amp: number): number[] {
  let s = seed;
  const out: number[] = [];
  for (let i = 0; i < 30; i++) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const r = s / 0x7fffffff;
    const weekend = i % 7 === 5 || i % 7 === 6 ? 0.62 : 1;       // dip on weekends
    const drift = 1 + (i / 29) * 0.18;                          // gentle upward trend
    out.push(Math.max(0, Math.round((base * weekend * drift) + (r - 0.5) * amp)));
  }
  return out;
}

// Multi-series data-encoding palette — intentionally raw hex (one hue per
// tenant), per the design-system "Charts" reference. Not semantic tokens.
const TRAFFIC_SERIES = [
  { name: 'Global Services LLC',    color: '#10b981', data: genSeries(7, 168000, 52000) },
  { name: 'Enterprise Solutions',  color: '#0ea5e9', data: genSeries(23, 138000, 44000) },
  { name: 'Acme Corporation',      color: '#6366f1', data: genSeries(41, 101000, 38000) },
  { name: 'Riverside Dental Office', color: '#f59e0b', data: genSeries(59, 41000, 16000) },
  { name: 'Cloud Innovations',     color: '#9ca3af', data: new Array(30).fill(0) },
];

const TOP_DOMAINS = [
  { domain: 'office365.com',   badge: 'Known',     requests: '1,402,031', tenants: 4, trend: '6%',  dir: 'up'     },
  { domain: 'salesforce.com',  badge: 'Known',     requests: '551,090',   tenants: 2, trend: '11%', dir: 'up'     },
  { domain: 'dentrix.com',     badge: 'Known',     requests: '234,112',   tenants: 1, trend: '3%',  dir: 'down'   },
  { domain: 'quickbooks.com',  badge: 'Known',     requests: '198,447',   tenants: 3, trend: 'stable', dir: 'flat' },
  { domain: 'dropbox.com',     badge: 'Shadow IT', requests: '162,120',   tenants: 3, trend: '42%', dir: 'up'     },
];

const TENANT_BREAKDOWN = [
  { name: 'Acme Corporation',       status: 'Active',        endpoints: '12 / 18', policies: 10, traffic: '3,084,358', threats: '1,237', activity: '2 hrs ago',  action: 'View' },
  { name: 'Enterprise Solutions',   status: 'Active',        endpoints: '18 / 22', policies: 14, traffic: '4,201,740', threats: '248',   activity: '5 min ago',  action: 'View' },
  { name: 'Global Services LLC',    status: 'Active',        endpoints: '12 / 20', policies: 14, traffic: '5,129,002', threats: '156',   activity: '18 min ago', action: 'View' },
  { name: 'Riverside Dental Office', status: 'Active',       endpoints: '7 / 12',  policies: 6,  traffic: '1,250,400', threats: '89',    activity: '42 min ago', action: 'View' },
  { name: 'Cloud Innovations',      status: 'Pending Setup', endpoints: '— / —',   policies: '—', traffic: '—',       threats: '—',     activity: '—',          action: 'Continue Setup' },
];

// ── Sub-components ──────────────────────────────────────────────────────────────

function TrendCell({ trend, dir }: { trend: string; dir: string }) {
  if (dir === 'up')   return <span className="text-xs font-semibold text-destructive">▲ {trend}</span>;
  if (dir === 'down') return <span className="text-xs font-semibold text-success">▼ {trend}</span>;
  return <span className="text-xs font-medium text-muted-foreground">— {trend}</span>;
}

function fmtK(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return String(n);
}

function TrafficLineChart() {
  const [hover, setHover] = useState<number | null>(null);

  const W = 820, H = 300;
  const padL = 52, padR = 16, padT = 16, padB = 30;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const days = 30;

  const maxY = useMemo(() => {
    const peak = Math.max(...TRAFFIC_SERIES.flatMap((s) => s.data));
    return Math.ceil(peak / 50000) * 50000; // round up to nearest 50k
  }, []);

  const x = (i: number) => padL + (i / (days - 1)) * innerW;
  const y = (v: number) => padT + innerH - (v / maxY) * innerH;

  const yTicks = 4;
  const xLabels = [0, 4, 9, 14, 19, 24, 29];

  return (
    <div className="flex flex-col h-full px-5 pb-4">
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-2 shrink-0">
        {TRAFFIC_SERIES.map((s) => (
          <span key={s.name} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="w-3 h-0.5 rounded-full" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>

      <div className="relative flex-1 min-h-0">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-full">
          {/* horizontal gridlines + y labels */}
          {Array.from({ length: yTicks + 1 }, (_, i) => {
            const val = (maxY / yTicks) * i;
            const yy = y(val);
            return (
              <g key={i}>
                <line x1={padL} y1={yy} x2={W - padR} y2={yy} stroke="#f1f5f9" strokeWidth={1} />
                <text x={padL - 8} y={yy + 3.5} textAnchor="end" className="fill-muted-foreground" style={{ fontSize: 10 }}>
                  {fmtK(val)}
                </text>
              </g>
            );
          })}

          {/* x labels */}
          {xLabels.map((i) => (
            <text key={i} x={x(i)} y={H - 10} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 10 }}>
              Day {i + 1}
            </text>
          ))}

          {/* lines */}
          {TRAFFIC_SERIES.map((s) => {
            if (s.data.every((d) => d === 0)) return null; // skip flat-zero (pending tenant)
            const d = s.data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
            return <path key={s.name} d={d} fill="none" stroke={s.color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />;
          })}

          {/* hover guide + dots */}
          {hover !== null && (
            <>
              <line x1={x(hover)} y1={padT} x2={x(hover)} y2={padT + innerH} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="3 3" />
              {TRAFFIC_SERIES.filter((s) => !s.data.every((d) => d === 0)).map((s) => (
                <circle key={s.name} cx={x(hover)} cy={y(s.data[hover])} r={3.5} fill="#fff" stroke={s.color} strokeWidth={2} />
              ))}
            </>
          )}

          {/* hover capture overlay */}
          <rect
            x={padL} y={padT} width={innerW} height={innerH} fill="transparent"
            onMouseMove={(e) => {
              const rect = (e.target as SVGRectElement).getBoundingClientRect();
              const rel = (e.clientX - rect.left) / rect.width;
              setHover(Math.max(0, Math.min(days - 1, Math.round(rel * (days - 1)))));
            }}
            onMouseLeave={() => setHover(null)}
          />
        </svg>

        {/* tooltip */}
        {hover !== null && (
          <div
            className="absolute top-2 bg-card border rounded-lg shadow-lg p-2.5 pointer-events-none z-10"
            style={{ left: `${(((padL + (hover / (days - 1)) * innerW) / W) * 100)}%`, transform: 'translateX(-50%)' }}
          >
            <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Day {hover + 1}</div>
            <div className="space-y-1">
              {TRAFFIC_SERIES.filter((s) => !s.data.every((d) => d === 0)).map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                  <span className="text-muted-foreground flex-1">{s.name}</span>
                  <span className="font-semibold text-foreground tabular-nums">{fmtK(s.data[hover])}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────────

export function MspDashboardPage() {
  const navigate = useNavigate();
  const maxThreat = Math.max(...THREAT_BREAKDOWN.map((t) => t.count));
  const [trafficPeriod, setTrafficPeriod] = useState<WidgetPeriod>('30d');
  const [threatPeriod, setThreatPeriod] = useState<WidgetPeriod>('30d');
  const [domainsPeriod, setDomainsPeriod] = useState<WidgetPeriod>('30d');
  const [actionsPeriod, setActionsPeriod] = useState<WidgetPeriod>('30d');
  const [tenantPeriod, setTenantPeriod] = useState<WidgetPeriod>('30d');

  return (
    <div className="space-y-6 pb-10">
      <PageHeader title="MSP Dashboard" />

      {/* Uniform widget grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Web Traffic Trend */}
        <DashboardWidget
          title="Web Traffic Trend"
          sub="· requests / day"
          period={trafficPeriod}
          onPeriodChange={setTrafficPeriod}
          onViewAll={() => navigate('/msp-traffic')}
          viewAllLabel="View all traffic"
          className="h-[400px]"
        >
          <TrafficLineChart />
        </DashboardWidget>

        {/* Blocked Threats */}
        <DashboardWidget
          title="Blocked Threats"
          period={threatPeriod}
          onPeriodChange={setThreatPeriod}
          onViewAll={() => navigate('/blocked-threats')}
          className="h-[400px]"
        >
          <div className="h-full overflow-auto px-5 pb-5">
            <div className="space-y-3">
              {THREAT_BREAKDOWN.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <span className="text-xs text-foreground w-48 shrink-0 leading-snug">{t.label}</span>
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div className="h-full rounded-full bg-muted-foreground/50" style={{ width: `${Math.round((t.count / maxThreat) * 100)}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-foreground w-8 text-right tabular-nums">{t.count}</span>
                </div>
              ))}
            </div>
          </div>
        </DashboardWidget>

        {/* Top Domains & Traffic */}
        <DashboardWidget
          title="Top Domains & Traffic"
          period={domainsPeriod}
          onPeriodChange={setDomainsPeriod}
          onViewAll={() => navigate('/msp-top-domains')}
          viewAllLabel="View all domains"
          bodyClass="overflow-auto"
          className="h-[400px]"
        >
          <DataTable>
            <THead className="sticky top-0">
              <tr>
                {['Domain / Destination', 'Type', 'Requests'].map((h) => (
                  <TH key={h} className="px-4">{h}</TH>
                ))}
              </tr>
            </THead>
            <tbody>
              {TOP_DOMAINS.map((d) => (
                <TR key={d.domain}>
                  <TD className="px-4">
                    <span className="text-[13px] text-foreground whitespace-nowrap">{d.domain}</span>
                  </TD>
                  <TD className="px-4">
                    <StatusBadge variant={d.badge === 'Shadow IT' ? 'warning' : 'success'}>{d.badge}</StatusBadge>
                  </TD>
                  <TD className="px-4 tabular-nums whitespace-nowrap">
                    <span className="text-[13px] text-foreground">{d.requests}</span>
                    {d.dir !== 'flat' && (
                      <span className={`ml-2 text-xs font-semibold ${d.dir === 'up' ? 'text-destructive' : 'text-success'}`}>
                        {d.dir === 'up' ? '▲' : '▼'} {d.trend}
                      </span>
                    )}
                    {d.dir === 'flat' && (
                      <span className="ml-2 text-xs text-muted-foreground">— stable</span>
                    )}
                  </TD>
                </TR>
              ))}
            </tbody>
          </DataTable>
        </DashboardWidget>

        {/* Actions Breakdown */}
        <DashboardWidget
          title="Actions Breakdown"
          period={actionsPeriod}
          onPeriodChange={setActionsPeriod}
          className="h-[400px]"
        >
          <div className="h-full flex flex-col justify-start gap-4 px-5 pb-5">
            {/* Legend */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="w-3 h-2 rounded-sm" style={{ background: '#22c55e' }} /> Allowed
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="w-3 h-2 rounded-sm" style={{ background: '#ef4444' }} /> Blocked
              </span>
            </div>
            {/* Per-tenant rows — two-column: name | bar + labels */}
            <div className="space-y-3.5">
              {TENANT_ACTIONS.map((t) => {
                const total = t.allowed + t.blocked;
                const allowedPct = (t.allowed / total) * 100;
                const blockedPct = (t.blocked / total) * 100;
                return (
                  <div key={t.name} className="flex items-center gap-4">
                    {/* Tenant name column */}
                    <span className="text-xs font-medium text-foreground w-36 shrink-0 leading-snug">{t.name}</span>
                    {/* Bar column with hover tooltip */}
                    <div className="flex-1 relative group">
                      <div className="flex h-2.5 rounded-full overflow-hidden w-full gap-px cursor-default">
                        <div style={{ width: `${allowedPct}%`, background: '#22c55e' }} className="rounded-l-full" />
                        <div style={{ width: `${blockedPct}%`, background: '#ef4444' }} className="rounded-r-full" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-start bg-card border rounded-lg shadow-lg px-3 py-2 pointer-events-none z-20 whitespace-nowrap gap-1">
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#22c55e' }} />
                          <span className="text-muted-foreground">Allowed</span>
                          <span className="font-semibold text-foreground tabular-nums">{allowedPct.toFixed(0)}%</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#ef4444' }} />
                          <span className="text-muted-foreground">Blocked</span>
                          <span className="font-semibold tabular-nums" style={{ color: '#ef4444' }}>{blockedPct.toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DashboardWidget>

        {/* Tenant Breakdown — full width */}
        <DashboardWidget
          title="Tenant Breakdown"
          period={tenantPeriod}
          onPeriodChange={setTenantPeriod}
          onViewAll={() => {}}
          viewAllLabel="Manage tenants"
          bodyClass="overflow-auto"
          className="h-[400px] lg:col-span-2"
        >
          <DataTable>
            <THead className="sticky top-0">
              <tr>
                {['Tenant', 'Status', 'Endpoints', 'Policies', 'Web Traffic (30D)', 'Threats Blocked', 'Last Activity', ''].map((h, i) => (
                  <TH key={i} className="px-3">{h}</TH>
                ))}
              </tr>
            </THead>
            <tbody>
              {TENANT_BREAKDOWN.map((t) => (
                <TR key={t.name}>
                  <TD className="px-3">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <TenantAvatar size={28} />
                      <span className="text-[13px] font-medium text-foreground">{t.name}</span>
                    </div>
                  </TD>
                  <TD className="px-3">
                    <StatusBadge variant={t.status === 'Active' ? 'success' : 'warning'} dot>
                      {t.status}
                    </StatusBadge>
                  </TD>
                  <TD className="px-3 tabular-nums">{t.endpoints}</TD>
                  <TD className="px-3 tabular-nums">{t.policies}</TD>
                  <TD className="px-3 tabular-nums">{t.traffic}</TD>
                  <TD className="px-3 tabular-nums">{t.threats}</TD>
                  <TD className="px-3 text-muted-foreground whitespace-nowrap">{t.activity}</TD>
                  <TD className="px-3 text-right">
                    <button className="text-sm font-medium text-action hover:underline whitespace-nowrap">
                      {t.action}
                    </button>
                  </TD>
                </TR>
              ))}
            </tbody>
          </DataTable>
        </DashboardWidget>
      </div>

    </div>
  );
}
