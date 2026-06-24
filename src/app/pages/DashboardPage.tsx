import { useOutletContext, useNavigate } from 'react-router';
import { useState } from 'react';
import { SummaryCards } from '../components/SummaryCards';
import { SessionChart } from '../components/SessionChart';
import { MOCK_ACTIVITIES, ActionBadge } from '../components/ActivityTable';
import { ENDPOINTS_DATA } from './EndpointsPage';
import { DashboardVariants } from '../components/DashboardVariants';
import { Button } from '../components/ui/button';
import { Download, Shield, Globe, ChevronRight, Activity, Monitor, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { LifecycleStage } from '../components/TopBar';
import { useTenant } from '../contexts/TenantContext';
import { PageHeader } from '../components/PageHeader';

interface OutletContext {
  lifecycleStage: LifecycleStage;
  showClientDownloadModal: boolean;
  setShowClientDownloadModal: (show: boolean) => void;
}

// ── Widget data ────────────────────────────────────────────────────────────────

const BLOCKED_THREATS = [
  { label: 'Unauthorized Access Attempt',      count: 84,  severity: 'High'     },
  { label: 'Non-Compliant Device Blocked',      count: 63,  severity: 'Medium'   },
  { label: 'C2 Attempts',                       count: 7,   severity: 'Critical' },
  { label: 'Port Scanning / Lateral Movement',  count: 4,   severity: 'Critical' },
  { label: 'DNS-Based Threat',                  count: 29,  severity: 'Medium'   },
  { label: 'MFA Challenge Failed / Bypassed',   count: 33,  severity: 'High'     },
];

const TOP_DOMAINS = [
  { domain: 'office365.com',  badge: 'Known',     requests: '402,031', trend: 6,  dir: 'up'   },
  { domain: 'salesforce.com', badge: 'Known',     requests: '151,090', trend: 11, dir: 'up'   },
  { domain: 'dentrix.com',    badge: 'Known',     requests: '84,112',  trend: 3,  dir: 'down' },
  { domain: 'quickbooks.com', badge: 'Known',     requests: '58,447',  trend: 0,  dir: 'flat' },
  { domain: 'dropbox.com',    badge: 'Shadow IT', requests: '42,120',  trend: 42, dir: 'up'   },
  { domain: 'slack.com',      badge: 'Known',     requests: '38,300',  trend: 5,  dir: 'up'   },
];


const SEV_COLOR: Record<string, string> = { Critical: '#d4183d', High: '#d97706', Medium: '#ca8a04' };

function TrendBadge({ trend, dir }: { trend: number; dir: string }) {
  if (dir === 'up')   return <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-red-600"><TrendingUp className="w-3 h-3" />+{trend}%</span>;
  if (dir === 'down') return <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-green-600"><TrendingDown className="w-3 h-3" />-{trend}%</span>;
  return <span className="inline-flex items-center gap-0.5 text-[11px] text-gray-400"><Minus className="w-3 h-3" />Stable</span>;
}

export function DashboardPage() {
  const { lifecycleStage, showClientDownloadModal, setShowClientDownloadModal } = useOutletContext<OutletContext>();
  const { currentTenant, getTenantData } = useTenant();
  const navigate = useNavigate();
  const [dashboardVariant, setDashboardVariant] = useState<'standard' | 'sidebar'>('standard');
  const [showOnboardingCards, setShowOnboardingCards] = useState(true);

  const tenantData = getTenantData();
  const maxThreat = Math.max(...BLOCKED_THREATS.map(t => t.count));

  return (
    <>
      <PageHeader
        title="Zero Trust Dashboard"
        subtitle="Monitor and manage your zero trust security posture"
      />

      <DashboardVariants
        variant={dashboardVariant}
        showOnboarding={showOnboardingCards}
        onDismissOnboarding={() => setShowOnboardingCards(false)}
        onAdvancedSettings={() => {}}
      />

      <SessionChart />

      {/* ── All 4 widgets — uniform height ─────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Blocked Threats widget */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[340px]">
          <div className="flex items-center px-5 py-3.5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-[#d4183d]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Blocked Threats</span>
                <span className="ml-2 text-xs text-gray-400">Last 30 days</span>
              </div>
            </div>
          </div>
          <div className="p-5 space-y-3 flex-1 overflow-hidden">
            {BLOCKED_THREATS.slice(0, 6).map(t => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="text-xs text-gray-700 w-44 shrink-0 leading-snug">{t.label}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${Math.round((t.count / maxThreat) * 100)}%`, background: SEV_COLOR[t.severity] }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-900 w-7 text-right tabular-nums">{t.count}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-end px-5 py-3 border-t border-gray-100 shrink-0">
            <button
              onClick={() => navigate('/tenant-blocked-threats')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#0066cc] hover:underline"
            >
              View Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Top Domains widget */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[340px]">
          <div className="flex items-center px-5 py-3.5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-[#0066cc]" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Top Domains</span>
                <span className="ml-2 text-xs text-gray-400">Last 30 days</span>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-50 flex-1 overflow-hidden">
            {TOP_DOMAINS.map(d => (
              <div key={d.domain} className="flex items-center justify-between px-5 py-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <Globe className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                  <span className="text-[13px] text-gray-800 truncate">{d.domain}</span>
                  {d.badge === 'Shadow IT' && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 shrink-0">Shadow IT</span>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-3">
                  <span className="text-[12px] font-medium text-gray-700 tabular-nums">{d.requests}</span>
                  <TrendBadge trend={d.trend} dir={d.dir} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end px-5 py-3 border-t border-gray-100 shrink-0">
            <button
              onClick={() => navigate('/tenant-top-domains')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#0066cc] hover:underline"
            >
              View Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Activity Log widget */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[340px]">
          <div className="flex items-center px-5 py-3.5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Activity Log</span>
                <span className="ml-2 text-xs text-gray-400">Recent events</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 bg-gray-50 border-b border-gray-100 shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-gray-400 w-[150px] shrink-0">Source</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-gray-400 flex-1">Destination</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-gray-400 w-[64px] shrink-0">Action</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-gray-400 w-[80px] shrink-0 text-right">Time</span>
          </div>
          <div className="divide-y divide-gray-50 flex-1 overflow-hidden">
            {MOCK_ACTIVITIES.slice(0, 5).map(a => (
              <div key={a.id} className="flex items-center gap-3 px-5 py-2.5">
                <span className="text-[13px] text-gray-800 w-[150px] shrink-0 truncate">{a.source}</span>
                <span className="text-[13px] text-gray-500 flex-1 truncate">{a.destination}</span>
                <div className="w-[64px] shrink-0"><ActionBadge action={a.action} /></div>
                <span className="text-xs text-gray-400 w-[80px] shrink-0 text-right">{a.timeAgo}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-end px-5 py-3 border-t border-gray-100 shrink-0">
            <button
              onClick={() => navigate('/tenant-activity-log')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#0066cc] hover:underline"
            >
              View Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Endpoints widget */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[340px]">
          <div className="flex items-center px-5 py-3.5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <Monitor className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">Endpoints</span>
                <span className="ml-2 text-xs text-gray-400">Connected devices</span>
              </div>
            </div>
          </div>
          <div className="flex items-center px-5 py-2 bg-[#f8f9fa] border-b border-[rgba(0,0,0,0.06)] shrink-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#717182] flex-1 basis-0">Endpoint</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#717182] flex-1 basis-0">User</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#717182] flex-1 basis-0">Tunnel</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#717182] flex-1 basis-0">Health</span>
          </div>
          <div className="divide-y divide-[rgba(0,0,0,0.04)] flex-1 overflow-hidden">
            {ENDPOINTS_DATA.slice(0, 5).map(ep => {
              const tunnelDot: Record<string, string> = { Connected: 'bg-[#16a34a]', Degraded: 'bg-[#f3ac3d]', Suspended: 'bg-[#5885cc]', Disconnected: 'bg-[#cccccc]' };
              const tunnelColor: Record<string, string> = { Connected: '#16a34a', Degraded: '#d97406', Suspended: '#4a618f', Disconnected: '#9ca3af' };
              const healthBg: Record<string, string>    = { Healthy: '#16a34a1a', 'At Risk': '#d977061a', Isolated: '#0066cc1a', Offline: '#ececf0' };
              const healthFg: Record<string, string>    = { Healthy: '#16a34a',   'At Risk': '#d97406',   Isolated: '#0066cc',   Offline: '#717182' };
              return (
                <div key={ep.id} className="flex items-center px-5 py-2.5 hover:bg-[#f8f9fa]">
                  <span className="text-[13px] font-medium text-[#1a1a1a] flex-1 basis-0 truncate">{ep.device}</span>
                  <span className="text-[13px] text-[#717182] flex-1 basis-0 truncate">{ep.user}</span>
                  <div className="flex-1 basis-0 flex items-center gap-1.5">
                    <span className={`w-[7px] h-[7px] rounded-full shrink-0 ${tunnelDot[ep.tunnel]}`} />
                    <span className="text-[13px] font-medium" style={{ color: tunnelColor[ep.tunnel] }}>{ep.tunnel}</span>
                  </div>
                  <div className="flex-1 basis-0">
                    <span
                      className="inline-flex items-center text-[11px] font-semibold rounded-[8px] px-[8px] py-[3px]"
                      style={{ background: healthBg[ep.health], color: healthFg[ep.health] }}
                    >
                      {ep.health}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end px-5 py-3 border-t border-gray-100 shrink-0">
            <button
              onClick={() => navigate('/endpoint-threats')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#0066cc] hover:underline"
            >
              View Details <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-5 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 m-0 mb-0.5">Download Unified Client</h3>
            <p className="text-xs text-gray-500 m-0">
              Deploy the unified security agent to all enabled tenants to ensure full zero trust compliance.
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="shrink-0 text-xs"
          onClick={() => setShowClientDownloadModal(true)}
        >
          View Details
        </Button>
      </div>

    </>
  );
}