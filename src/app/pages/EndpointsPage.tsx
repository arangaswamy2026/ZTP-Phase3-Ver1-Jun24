import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Search } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

export interface EndpointRow {
  id: string;
  device: string;
  model: string;
  tenant: string;
  user: string;
  tunnel: 'Connected' | 'Degraded' | 'Suspended' | 'Disconnected';
  location: string;
  agent: string;
  agentOutdated?: boolean;
  health: 'Healthy' | 'At Risk' | 'Isolated' | 'Offline';
  lastSeen: string;
  os: string;
  ip: string;
  mac: string;
  arch: string;
  domain: string;
}

export const ENDPOINTS_DATA: EndpointRow[] = [
  { id: 'ep-1', device: 'DESKTOP-CT7UT4D',  model: 'Dell OptiPlex 7090',        tenant: 'Gav-India',     user: 'bob',         tunnel: 'Connected',    location: '🇮🇳 India',          agent: '4.1.2', health: 'Healthy',  lastSeen: '2 min ago',   os: 'Windows 11 Pro',         ip: '192.168.163.128', mac: 'A4:C3:F0:11:22:33', arch: 'x64',   domain: 'Active Directory' },
  { id: 'ep-2', device: 'DESKTOP-M5K8HOU',  model: 'HP EliteBook 840',           tenant: 'Yash Personal', user: 'Theron',      tunnel: 'Connected',    location: '🇮🇳 India',          agent: '4.1.2', health: 'Healthy',  lastSeen: '18 min ago',  os: 'Windows 10 Pro',         ip: '192.168.168.171', mac: 'B8:27:EB:44:55:66', arch: 'x64',   domain: 'Local' },
  { id: 'ep-3', device: 'VTB280-PC1',       model: 'Lenovo ThinkCentre M70q',    tenant: 'QA',            user: 'N/A',         tunnel: 'Connected',    location: '🇮🇳 India',          agent: '4.1.2', health: 'At Risk',  lastSeen: '1 hr ago',    os: 'Windows 11 Pro',         ip: '10.5.65.222',     mac: 'DC:A6:32:77:88:99', arch: 'x64',   domain: 'Workgroup' },
  { id: 'ep-4', device: 'GAV-LAPTOP-03',    model: 'Dell Latitude 5540',          tenant: 'Gav-India',     user: 'priya.k',     tunnel: 'Degraded',     location: '🇮🇳 India',          agent: '4.0.8', agentOutdated: true, health: 'At Risk',  lastSeen: '5 min ago',   os: 'Windows 11 Enterprise',  ip: '192.168.163.45',  mac: 'F0:18:98:AA:BB:CC', arch: 'x64',   domain: 'Active Directory' },
  { id: 'ep-5', device: 'GAV-WSTN-07',      model: 'HP Z4 Workstation G4',        tenant: 'Gav-India',     user: 'arjun.m',     tunnel: 'Connected',    location: '🇺🇸 United States',  agent: '4.0.8', agentOutdated: true, health: 'At Risk',  lastSeen: '12 min ago',  os: 'Windows 10 Enterprise',  ip: '192.168.163.91',  mac: '00:1A:2B:DD:EE:FF', arch: 'x64',   domain: 'Active Directory' },
  { id: 'ep-6', device: 'DESKTOP-CT7UT4D',  model: 'Dell OptiPlex 7090',          tenant: 'Gav-India',     user: 'bob',         tunnel: 'Suspended',    location: '🇬🇧 UK',             agent: '4.1.2', health: 'Isolated', lastSeen: 'Just now',    os: 'Windows 11 Pro',         ip: '192.168.163.128', mac: 'A4:C3:F0:11:22:33', arch: 'x64',   domain: 'Active Directory' },
  { id: 'ep-7', device: 'QA-DESK-12',       model: 'Apple Mac mini M2',           tenant: 'QA',            user: 'james.t',     tunnel: 'Connected',    location: '🇸🇬 Singapore',      agent: '4.1.2', health: 'Healthy',  lastSeen: '34 min ago',  os: 'macOS 14.4',             ip: '10.5.65.45',      mac: '3C:22:FB:55:66:77', arch: 'arm64', domain: 'Local' },
  { id: 'ep-8', device: 'GAV-SERVER-01',    model: 'VMware Virtual Machine',      tenant: 'Gav-India',     user: 'svc-account', tunnel: 'Degraded',     location: '🇮🇳 India',          agent: '3.9.1', agentOutdated: true, health: 'At Risk',  lastSeen: '8 min ago',   os: 'Windows Server 2022',    ip: '192.168.163.10',  mac: '08:00:27:C8:D9:EA', arch: 'x64',   domain: 'Active Directory' },
  { id: 'ep-9', device: 'YP-LAPTOP-02',     model: 'ASUS VivoBook 15',            tenant: 'Yash Personal', user: 'yash.p',      tunnel: 'Disconnected', location: '🇦🇺 Australia',      agent: '4.1.2', health: 'Offline',  lastSeen: '3 days ago',  os: 'Windows 11 Home',        ip: '192.168.168.55',  mac: 'CC:DD:EE:11:22:AA', arch: 'x64',   domain: 'Local' },
];

const TUNNEL_DOT: Record<string, string> = {
  Connected:    'bg-[#59a02e]',
  Degraded:     'bg-[#f3ac3d]',
  Suspended:    'bg-[#5885cc]',
  Disconnected: 'bg-[#cccccc]',
};
const TUNNEL_COLOR: Record<string, string> = {
  Connected:    'text-[#59a02e] font-semibold',
  Degraded:     'text-[#7a4f00] font-semibold',
  Suspended:    'text-[#4a618f] font-semibold',
  Disconnected: 'text-[#717182]',
};

const HEALTH_CHIP: Record<string, string> = {
  Healthy:  'bg-[#e3efdc] border-[#59a02e] text-[#59a02e]',
  'At Risk':'bg-[#ffe9be] border-[#f3ac3d] text-[#7a4f00]',
  Isolated: 'bg-[#f6f8fe] border-[#78a3e5] text-[#1f3c73]',
  Offline:  'bg-[#f0f2f5] border-[#cccccc] text-[#888888]',
};

type HealthFilter = 'all' | 'Healthy' | 'At Risk' | 'Isolated' | 'Offline';

export function EndpointsPage() {
  const navigate = useNavigate();
  const [search, setSearch]           = useState('');
  const [healthFilter, setHealthFilter] = useState<HealthFilter>('all');

  const filtered = useMemo(() => ENDPOINTS_DATA.filter(ep => {
    if (healthFilter !== 'all' && ep.health !== healthFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!ep.device.toLowerCase().includes(q) &&
          !ep.user.toLowerCase().includes(q) &&
          !ep.tenant.toLowerCase().includes(q)) return false;
    }
    return true;
  }), [search, healthFilter]);

  const STATS = [
    { label: 'Total Endpoints', value: 47,  color: 'text-[#191c25]'  },
    { label: 'Healthy',         value: 38,  color: 'text-[#59a02e]'  },
    { label: 'At Risk',         value: 6,   color: 'text-[#ff5d00]'  },
    { label: 'Isolated',        value: 2,   color: 'text-[#c70f0f]'  },
    { label: 'Offline',         value: 1,   color: 'text-[#f3ac3d]'  },
    { label: 'Agent Outdated',  value: 9,   color: 'text-[#f3ac3d]'  },
  ];

  const HEALTH_FILTERS: { label: string; value: HealthFilter }[] = [
    { label: 'All',      value: 'all'      },
    { label: 'Healthy',  value: 'Healthy'  },
    { label: 'At Risk',  value: 'At Risk'  },
    { label: 'Isolated', value: 'Isolated' },
    { label: 'Offline',  value: 'Offline'  },
  ];

  return (
    <div className="space-y-6 pb-10 max-w-[1200px]">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        Back to Dashboard
      </button>

      <PageHeader
        title="Endpoints"
        subtitle="All endpoints running the SonicWall Unified Client across managed tenants."
      />

      {/* Stat tiles */}
      <div className="flex gap-3 flex-wrap">
        {STATS.map(s => (
          <div key={s.label} className="bg-card border border-[#78a3e5] rounded-[8px] px-4 py-3 min-w-[110px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#4a618f]">{s.label}</div>
            <div className={`text-[22px] font-bold leading-tight mt-0.5 ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Table card */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-2.5 flex-wrap px-5 py-3 border-b border-border">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search endpoints, users, tenants…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="h-8 pl-8 pr-3 w-64 text-sm border border-input rounded-lg bg-muted focus:outline-none focus:border-action focus:bg-card"
            />
          </div>
          <div className="flex items-center gap-1.5">
            {HEALTH_FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setHealthFilter(f.value)}
                className={`h-[26px] px-3 rounded-full text-[11px] font-semibold border transition-all ${
                  healthFilter === f.value
                    ? 'bg-[#001b50] border-[#001b50] text-white'
                    : 'bg-card border-[#cccccc] text-[#4a618f] hover:border-[#78a3e5]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">{filtered.length} endpoint{filtered.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-sm text-muted-foreground">No endpoints match the current filters.</div>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f2f5] border-b-2 border-[#ff5d00]">
                  {['Endpoint', 'Tenant', 'User', 'OS', 'Tunnel', 'Location', 'Agent', 'Health', 'Last Seen'].map(h => (
                    <th key={h} className="px-3 py-2 text-left text-[11px] font-bold uppercase tracking-[0.05em] text-[#4a618f] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((ep, i) => (
                  <tr
                    key={ep.id}
                    className={`border-b border-[rgba(17,17,17,0.09)] hover:bg-[#f6f8fe] ${i % 2 === 1 ? 'bg-[#f6f8fe]' : 'bg-white'}`}
                  >
                    {/* Endpoint */}
                    <td className="px-3 py-2.5 align-middle">
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#0078D4" style={{flexShrink:0}}>
                          <path d="M3 5.5L11.5 4v8H3zm0 13L11.5 20v-8H3zm9.5-14L21 3v10h-8.5zm0 14.5L21 21V11h-8.5z"/>
                        </svg>
                        <span className="text-[12.5px] font-bold text-[#001b50] font-mono leading-none">{ep.device}</span>
                      </div>
                      <div className="text-[11px] text-[#888] mt-0.5 pl-[17px]">{ep.model}</div>
                    </td>
                    {/* Tenant */}
                    <td className="px-3 py-2.5 align-middle">
                      <span className="text-[12.5px] font-bold text-[#001b50]">{ep.tenant}</span>
                    </td>
                    {/* User */}
                    <td className="px-3 py-2.5 align-middle">
                      <div className="flex items-center gap-1 text-[11.5px] text-[#4a618f]">
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="#888"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5H2z"/></svg>
                        {ep.user}
                      </div>
                    </td>
                    {/* OS */}
                    <td className="px-3 py-2.5 align-middle text-[12px] text-[#191c25] max-w-[140px] truncate">{ep.os}</td>
                    {/* Tunnel */}
                    <td className="px-3 py-2.5 align-middle">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${TUNNEL_DOT[ep.tunnel]}`} />
                        <span className={`text-[12px] ${TUNNEL_COLOR[ep.tunnel]}`}>{ep.tunnel}</span>
                      </div>
                    </td>
                    {/* Location */}
                    <td className="px-3 py-2.5 align-middle text-[12px] text-[#4a618f] whitespace-nowrap">{ep.location}</td>
                    {/* Agent */}
                    <td className="px-3 py-2.5 align-middle">
                      <span className={`font-mono text-[11.5px] ${ep.agentOutdated ? 'text-[#f3ac3d] font-bold' : 'text-[#4a618f]'}`}>
                        {ep.agent}
                      </span>
                      {ep.agentOutdated && (
                        <div className="text-[10px] text-[#f3ac3d] font-bold mt-0.5">Outdated</div>
                      )}
                    </td>
                    {/* Health */}
                    <td className="px-3 py-2.5 align-middle">
                      <span className={`inline-flex items-center gap-1.5 h-5 px-2 rounded-[4px] border text-[10px] font-bold uppercase tracking-[0.04em] whitespace-nowrap ${HEALTH_CHIP[ep.health]}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        {ep.health}
                      </span>
                    </td>
                    {/* Last Seen */}
                    <td className="px-3 py-2.5 align-middle text-[12px] text-[#888] whitespace-nowrap">{ep.lastSeen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="px-5 py-2.5 border-t border-border text-xs text-muted-foreground">
          {filtered.length} endpoint{filtered.length !== 1 ? 's' : ''} shown · sample data from managed tenants
        </div>
      </div>
    </div>
  );
}
