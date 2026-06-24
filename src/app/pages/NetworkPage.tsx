import { useState } from 'react';
import { RefreshCw, Plus, Filter, ChevronDown, ChevronRight, Pencil, Trash2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

const TABS = ['Device', 'Zones/Interfaces', 'Routes', 'NAT', 'WLB'] as const;
type Tab = typeof TABS[number];

/* ─── shared ─────────────────────────────────────────────────── */

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[18px] w-8 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors ${
        checked ? 'bg-[#006cc0]' : 'bg-[#cbced4]'
      }`}
    >
      <span
        className={`pointer-events-none inline-block size-4 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

function DeviceToggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[18px] w-8 shrink-0 cursor-pointer rounded-full border border-transparent transition-colors ${
        checked ? 'bg-[#030213]' : 'bg-[#cbced4]'
      }`}
    >
      <span
        className={`pointer-events-none inline-block size-4 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

/* ─── Device tab ────────────────────────────────────────────── */

function DeviceTab() {
  const [ntpEnabled, setNtpEnabled] = useState(false);
  const [dstEnabled, setDstEnabled] = useState(false);
  const [deviceName, setDeviceName] = useState('ZTC');
  const [adminLogin, setAdminLogin] = useState('admin');
  const [timezone, setTimezone] = useState('Pacific Time (US & Canada)');

  return (
    <div className="p-6 space-y-0">
      {/* General */}
      <section className="pb-6">
        <h3 className="text-base font-bold text-[#101828] mb-4">General</h3>
        <div className="flex items-center gap-4">
          <label className="w-64 text-right text-sm font-medium text-[#4a5565] shrink-0">Name</label>
          <input
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="h-9 w-40 px-3 text-sm text-[#0a0a0a] bg-white border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>
      <div className="border-t border-[#f3f4f6]" />
      {/* Administrator Name */}
      <section className="py-6">
        <h3 className="text-base font-bold text-[#101828] mb-4">Administrator Name</h3>
        <div className="flex items-center gap-4">
          <label className="w-64 text-right text-sm font-medium text-[#4a5565] shrink-0">Administrator Login Name</label>
          <div className="flex gap-3">
            <input
              value={adminLogin}
              onChange={(e) => setAdminLogin(e.target.value)}
              className="h-9 w-48 px-3 text-sm text-[#0a0a0a] bg-white border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="h-9 px-3 text-sm font-medium text-[#364153] bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              Change Password
            </button>
          </div>
        </div>
      </section>
      <div className="border-t border-[#f3f4f6]" />
      {/* Time Settings */}
      <section className="py-6">
        <h3 className="text-base font-bold text-[#101828] mb-4">Time Settings</h3>
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <span className="w-64 text-right text-sm font-medium text-[#4a5565]">Set time automatically using NTP</span>
            <DeviceToggle checked={ntpEnabled} onChange={setNtpEnabled} />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-64 text-right text-sm font-medium text-[#4a5565]">Date / Time</label>
            <div className="relative">
              <input
                defaultValue="22/05/2018 12:30:00"
                className="h-9 w-48 px-3 pr-9 text-sm text-[#0a0a0a] border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute right-2.5 top-2.5 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="w-64 text-right text-sm font-medium text-[#4a5565]">Time Zone</label>
            <div className="relative">
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="h-9 w-64 pl-3 pr-8 text-sm text-[#0a0a0a] bg-white border border-[#e5e7eb] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Pacific Time (US &amp; Canada)</option>
                <option>Mountain Time (US &amp; Canada)</option>
                <option>Central Time (US &amp; Canada)</option>
                <option>Eastern Time (US &amp; Canada)</option>
                <option>UTC</option>
                <option>London (GMT)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 text-gray-400" size={16} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-64 text-right text-sm font-medium text-[#4a5565]">Automatically adjust clock for daylight saving time</span>
            <DeviceToggle checked={dstEnabled} onChange={setDstEnabled} />
          </div>
        </div>
      </section>
      <div className="flex justify-end gap-3 pt-4 border-t border-[#f3f4f6]">
        <button className="h-9 px-5 text-sm font-medium text-[#0a0a0a] bg-white border border-black/10 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
        <button className="h-9 px-5 text-sm font-medium text-white bg-[#006cc0] rounded-lg hover:bg-[#0058a3] transition-colors">Accept</button>
      </div>
    </div>
  );
}

/* ─── Zones/Interfaces tab ──────────────────────────────────── */

type ZoneBadge = { label: string; color: string };
type Interface = { name: string; ip: string; subnet: string; assignment: string; status: string; comment?: string };
type Zone = { id: string; name: string; badge: ZoneBadge; enabled: boolean; expanded: boolean; interfaces: Interface[] };

const ZONE_BADGE: Record<string, ZoneBadge> = {
  EMPLOYEE:   { label: 'Trusted',    color: 'bg-purple-100 text-purple-700' },
  WAN:        { label: 'WAN',        color: 'bg-orange-100 text-orange-600' },
  GUEST:      { label: 'Wireless',   color: 'bg-green-100 text-green-700' },
  IOT:        { label: 'IOT',        color: 'bg-red-100 text-red-600' },
  UNASSIGNED: { label: 'Unassigned', color: 'bg-gray-100 text-gray-500' },
};

const INITIAL_ZONES: Zone[] = [
  { id: 'EMPLOYEE',   name: 'EMPLOYEE',   badge: ZONE_BADGE.EMPLOYEE,   enabled: true,  expanded: true,
    interfaces: [
      { name: 'X0', ip: '192.168.168.1', subnet: '255.255.255.0', assignment: 'Static IP', status: '1 Gbps Full Duplex', comment: 'Default LAN' },
      { name: 'X3', ip: '192.168.100.1', subnet: '255.255.255.0', assignment: 'Static IP', status: '1 Gbps Full Duplex' },
    ]},
  { id: 'WAN',        name: 'WAN',        badge: ZONE_BADGE.WAN,        enabled: false, expanded: false, interfaces: [] },
  { id: 'GUEST',      name: 'GUEST',      badge: ZONE_BADGE.GUEST,      enabled: false, expanded: false, interfaces: [] },
  { id: 'IOT',        name: 'IOT',        badge: ZONE_BADGE.IOT,        enabled: false, expanded: false, interfaces: [] },
  { id: 'UNASSIGNED', name: 'UNASSIGNED', badge: ZONE_BADGE.UNASSIGNED, enabled: false, expanded: true,
    interfaces: [
      { name: 'X9',  ip: '0.0.0.0', subnet: '0.0.0.0', assignment: '', status: 'No Link' },
      { name: 'X10', ip: '0.0.0.0', subnet: '0.0.0.0', assignment: '', status: 'No Link' },
      { name: 'X11', ip: '0.0.0.0', subnet: '0.0.0.0', assignment: '', status: 'No Link' },
    ]},
];

const ZONE_SUBTABS = ['Interface Settings', 'Traffic Statistics'] as const;

function ZonesInterfacesTab() {
  const [subTab, setSubTab] = useState<typeof ZONE_SUBTABS[number]>('Interface Settings');
  const [zones, setZones] = useState<Zone[]>(INITIAL_ZONES);

  const toggleExpanded = (id: string) =>
    setZones(z => z.map(zone => zone.id === id ? { ...zone, expanded: !zone.expanded } : zone));
  const toggleEnabled = (id: string) =>
    setZones(z => z.map(zone => zone.id === id ? { ...zone, enabled: !zone.enabled } : zone));

  return (
    <div className="p-6">
      {/* Sub-tabs */}
      <div className="flex gap-1 mb-5">
        {ZONE_SUBTABS.map(t => (
          <button
            key={t}
            onClick={() => setSubTab(t)}
            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              subTab === t ? 'text-[#ff5d00] border-b-2 border-[#ff5d00]' : 'text-[#6a7282] hover:text-[#364153]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {subTab === 'Interface Settings' && (
        <>
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              <select className="h-9 pl-3 pr-8 text-sm bg-white border border-[#e5e7eb] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>IPv4</option><option>IPv6</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-2.5 text-gray-400" size={16} />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 h-9 px-3 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
                <RefreshCw size={14} /> Refresh
              </button>
              <button className="flex items-center gap-1.5 h-9 px-3 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
                <Plus size={14} /> Add Zone
              </button>
            </div>
          </div>

          {/* Zone groups */}
          <div className="space-y-3">
            {zones.map(zone => (
              <div key={zone.id} className="border border-[#e5e7eb] rounded-xl overflow-hidden">
                {/* Zone header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                  <button
                    className="flex items-center gap-2 font-semibold text-sm text-[#101828]"
                    onClick={() => toggleExpanded(zone.id)}
                  >
                    {zone.expanded
                      ? <ChevronDown size={16} className="text-gray-500" />
                      : <ChevronRight size={16} className="text-gray-500" />}
                    {zone.name}
                  </button>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${zone.badge.color}`}>
                      {zone.badge.label}
                    </span>
                    <Toggle checked={zone.enabled} onChange={() => toggleEnabled(zone.id)} />
                  </div>
                </div>

                {/* Expanded interfaces */}
                {zone.expanded && zone.interfaces.length > 0 && (
                  <>
                    <div className="flex justify-end gap-2 px-4 py-2 border-t border-[#f3f4f6] bg-gray-50">
                      <button className="flex items-center gap-1.5 h-8 px-3 text-xs font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
                        <RefreshCw size={12} /> Refresh
                      </button>
                      <button className="flex items-center gap-1.5 h-8 px-3 text-xs font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
                        <Plus size={12} /> Add Interface
                      </button>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-t border-[#f3f4f6] bg-gray-50">
                          {['NAME','IP ADDRESS','SUBNET MASK','IP ASSIGNMENT','STATUS','COMMENT','ACTIONS'].map(h => (
                            <th key={h} className="px-4 py-2 text-left text-xs font-semibold text-[#6a7282] uppercase tracking-wide">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {zone.interfaces.map((iface, i) => (
                          <tr key={i} className="border-t border-[#f3f4f6] hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-[#101828]">{iface.name}</td>
                            <td className="px-4 py-3 text-[#364153]">{iface.ip}</td>
                            <td className="px-4 py-3 text-[#364153]">{iface.subnet}</td>
                            <td className="px-4 py-3 text-[#364153]">{iface.assignment}</td>
                            <td className="px-4 py-3 text-[#364153]">{iface.status}</td>
                            <td className="px-4 py-3 text-[#364153]">{iface.comment ?? ''}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <button className="text-[#6a7282] hover:text-[#101828]"><Pencil size={15} /></button>
                                {zone.id !== 'UNASSIGNED' && <button className="text-[#6a7282] hover:text-red-600"><Trash2 size={15} /></button>}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {subTab === 'Traffic Statistics' && (
        <div className="py-16 text-center text-sm text-[#6a7282]">Traffic statistics will appear here.</div>
      )}
    </div>
  );
}

/* ─── Routes tab ────────────────────────────────────────────── */

function RoutesTab() {
  const [statusFilter, setStatusFilter] = useState('Active & Inactive');
  const [usageFilter, setUsageFilter] = useState('Used & Unused');

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 h-9 px-3 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
            <Filter size={14} /> Filters
          </button>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="h-9 pl-3 pr-8 text-sm bg-white border border-[#e5e7eb] rounded-lg appearance-none focus:outline-none"
            >
              <option>Active & Inactive</option><option>Active</option><option>Inactive</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-2.5 text-gray-400" size={16} />
          </div>
          <div className="relative">
            <select
              value={usageFilter}
              onChange={e => setUsageFilter(e.target.value)}
              className="h-9 pl-3 pr-8 text-sm bg-white border border-[#e5e7eb] rounded-lg appearance-none focus:outline-none"
            >
              <option>Used & Unused</option><option>Used</option><option>Unused</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-2.5 text-gray-400" size={16} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 px-4 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">Live Counter</button>
          <button className="h-9 px-4 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">Reset Counter</button>
          <button className="flex items-center gap-1.5 h-9 px-4 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
            <Plus size={14} /> Add Route
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 text-sm text-[#6a7282]">
        No routes configured. Click <span className="mx-1 font-medium text-[#364153]">+ Add Route</span> to create one.
      </div>
    </div>
  );
}

/* ─── NAT tab ───────────────────────────────────────────────── */

type NatRow = { id: number; name: string; subtitle: string; hits: number; maxHits: number; enabled: boolean; source: string; dest: string; service: string; iface: string; srcAddr: string; destAddr: string; svcTranslated: string; expanded?: boolean };

const DEFAULT_NAT: NatRow[] = [
  { id: 1, name: 'Default NAT Policy',  subtitle: 'Auto-added · Read-only', hits: 12481, maxHits: 25000, enabled: true,  source:'Any',dest:'Any',service:'Any',iface:'X1',     srcAddr:'X1 IP', destAddr:'Original',svcTranslated:'Original' },
  { id: 2, name: 'Loopback NAT',        subtitle: 'Auto-added · Read-only', hits: 8204,  maxHits: 25000, enabled: true,  source:'Any',dest:'Any',service:'Any',iface:'X0',     srcAddr:'X0 IP', destAddr:'Original',svcTranslated:'Original' },
  { id: 3, name: 'Default NAT Policy',  subtitle: 'Auto-added · X1 (DMZ)',  hits: 5992,  maxHits: 25000, enabled: true,  source:'Any',dest:'Any',service:'Any',iface:'X1 (DMZ)',srcAddr:'X1 IP', destAddr:'Original',svcTranslated:'Original' },
];
const CUSTOM_NAT: NatRow[] = [
  { id: 8, name: 'Outbound NAT — X1', subtitle: 'Policy(NAT) / Outbound', hits: 21678, maxHits: 25000, enabled: true,  source:'Any',dest:'Any',service:'Any',iface:'X1', srcAddr:'X1 IP',destAddr:'Original',svcTranslated:'Original', expanded: true },
  { id: 9, name: 'Outbound NAT — X3', subtitle: 'Policy(NAT) / Outbound', hits: 0,     maxHits: 25000, enabled: false, source:'Any',dest:'Any',service:'Any',iface:'X3', srcAddr:'X3 IP',destAddr:'Original',svcTranslated:'Original' },
  { id: 8, name: 'Outbound NAT — X1', subtitle: 'Policy(NAT) / Outbound', hits: 21678, maxHits: 25000, enabled: true,  source:'Any',dest:'Any',service:'Any',iface:'X1', srcAddr:'X1 IP',destAddr:'Original',svcTranslated:'Original' },
  { id: 9, name: 'Outbound NAT — X4', subtitle: 'Policy(NAT) / Outbound', hits: 0,     maxHits: 25000, enabled: false, source:'Any',dest:'Any',service:'Any',iface:'X3', srcAddr:'X3 IP',destAddr:'Original',svcTranslated:'Original' },
];

function HitsBar({ hits, max }: { hits: number; max: number }) {
  const pct = Math.min((hits / max) * 100, 100);
  const color = hits > 15000 ? 'bg-[#ff5d00]' : hits > 5000 ? 'bg-[#ff5d00]' : 'bg-[#ff5d00]';
  return (
    <div>
      <span className="text-sm font-semibold text-[#101828]">{hits.toLocaleString()}</span>
      <div className="mt-1 h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function NatTable({ rows }: { rows: NatRow[] }) {
  const [enabled, setEnabled] = useState(() => rows.map(r => r.enabled));
  const [expanded, setExpanded] = useState<number | null>(rows.findIndex(r => r.expanded));

  const toggle = (i: number) => setEnabled(e => e.map((v, j) => j === i ? !v : v));

  return (
    <>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-[#f3f4f6]">
            <th className="px-3 py-2 text-xs font-semibold text-[#6a7282] uppercase w-8">#</th>
            <th className="px-3 py-2 text-xs font-semibold text-[#6a7282] uppercase text-left">NAME</th>
            <th className="px-3 py-2 text-xs font-semibold text-[#6a7282] uppercase text-left">HITS</th>
            <th className="px-3 py-2 text-center" colSpan={4}>
              <span className="text-xs font-semibold text-[#6a7282] uppercase">ORIGINAL</span>
            </th>
            <th className="px-3 py-2 text-center" colSpan={3}>
              <span className="text-xs font-semibold text-[#6a7282] uppercase">TRANSLATED</span>
            </th>
            <th className="px-3 py-2 text-xs font-semibold text-[#6a7282] uppercase text-left">ACTIONS</th>
          </tr>
          <tr className="bg-gray-50 border-b border-[#f3f4f6]">
            <th /><th /><th />
            {['SOURCE','DESTINATION','SERVICE','INTERFACE'].map(h => (
              <th key={h} className="px-3 py-1 text-xs font-semibold text-[#6a7282] uppercase text-left">{h}</th>
            ))}
            {['SOURCE ADDRESS','DEST. ADDRESS','SERVICE'].map(h => (
              <th key={h} className="px-3 py-1 text-xs font-semibold text-[#6a7282] uppercase text-left">{h}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <>
              <tr
                key={i}
                className={`border-t border-[#f3f4f6] hover:bg-gray-50 cursor-pointer ${expanded === i ? 'bg-blue-50' : ''}`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <td className="px-3 py-3 text-center text-[#6a7282]">{row.id}</td>
                <td className="px-3 py-3">
                  <Toggle checked={enabled[i]} onChange={() => toggle(i)} />
                  <div className="ml-2 inline-block">
                    <div className="font-semibold text-[#101828]">{row.name}</div>
                    <div className="text-xs text-[#6a7282]">{row.subtitle}</div>
                  </div>
                </td>
                <td className="px-3 py-3"><HitsBar hits={row.hits} max={row.maxHits} /></td>
                <td className="px-3 py-3 text-[#364153]">{row.source}</td>
                <td className="px-3 py-3 text-[#364153]">{row.dest}</td>
                <td className="px-3 py-3 text-[#364153]">{row.service}</td>
                <td className="px-3 py-3 text-[#364153]">{row.iface}</td>
                <td className="px-3 py-3 text-[#364153]">{row.srcAddr}</td>
                <td className="px-3 py-3 text-[#364153]">{row.destAddr}</td>
                <td className="px-3 py-3 text-[#364153]">{row.svcTranslated}</td>
                <td className="px-3 py-3">
                  <div className="flex gap-2">
                    <button className="text-[#6a7282] hover:text-[#101828]"><Pencil size={15} /></button>
                    <button className="text-[#6a7282] hover:text-red-600"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
              {expanded === i && (
                <tr key={`${i}-detail`} className="border-t border-[#e5e7eb] bg-gray-50">
                  <td colSpan={11} className="px-6 py-4">
                    <div className="flex items-start gap-8">
                      {/* Original */}
                      <div className="flex-1">
                        <div className="border-t-2 border-blue-400 mb-3" />
                        <p className="text-xs font-semibold text-[#6a7282] uppercase mb-2">ORIGINAL</p>
                        <div className="space-y-1 text-sm">
                          {[['Source', row.source],['Destination', row.dest],['Service', row.service],['Interface', row.iface]].map(([k,v]) => (
                            <div key={k} className="flex gap-4">
                              <span className="w-24 text-[#6a7282]">{k}</span>
                              <span className="text-[#101828]">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="flex flex-col items-center justify-center pt-8 px-4">
                        <div className="flex items-center gap-1">
                          <div className="h-px w-10 bg-green-500" />
                          <span className="text-xs font-semibold text-green-600 uppercase">Translation</span>
                          <div className="h-px w-4 bg-green-500" />
                          <svg width="10" height="10" viewBox="0 0 10 10" className="text-green-500 fill-current"><path d="M0 0 L10 5 L0 10 Z"/></svg>
                        </div>
                      </div>
                      {/* Translated */}
                      <div className="flex-1">
                        <div className="border-t-2 border-green-400 mb-3" />
                        <p className="text-xs font-semibold text-[#6a7282] uppercase mb-2">TRANSLATED</p>
                        <div className="space-y-1 text-sm">
                          {[['Source', row.srcAddr],['Destination', row.destAddr],['Service', row.svcTranslated],['Interface', row.iface]].map(([k,v]) => (
                            <div key={k} className="flex gap-4">
                              <span className="w-24 text-[#6a7282]">{k}</span>
                              <span className="text-[#101828]">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

function NatTab() {
  return (
    <div className="p-6">
      <div className="flex justify-end gap-2 mb-5">
        <button className="flex items-center gap-1.5 h-9 px-4 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
          <RefreshCw size={14} /> Reset Counter
        </button>
        <button className="flex items-center gap-1.5 h-9 px-4 text-sm font-medium bg-white border border-[#e5e7eb] rounded-lg hover:bg-gray-50">
          <Plus size={14} /> Add NAT
        </button>
      </div>

      {/* Default section */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-[#101828] mb-2">Default NAT Policies — Auto-generated by system</h3>
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden">
          <NatTable rows={DEFAULT_NAT} />
        </div>
      </div>

      {/* Custom section */}
      <div>
        <h3 className="text-sm font-bold text-[#101828] mb-2">Custom NAT Policies</h3>
        <div className="border border-[#e5e7eb] rounded-xl overflow-hidden">
          <NatTable rows={CUSTOM_NAT} />
        </div>
      </div>
    </div>
  );
}

/* ─── Root ──────────────────────────────────────────────────── */

export function NetworkPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Device');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Network"
        subtitle="Configure zones, interfaces, routes, and NAT policies"
      />

      {/* Main card */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex items-end border-b-2 border-[#e5e7eb] px-4 pt-2.5">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center justify-center h-9 px-2.5 text-sm font-medium shrink-0 transition-colors ${
                activeTab === tab
                  ? 'text-[#ff5d00] border-b-2 border-[#ff5d00] -mb-[2px]'
                  : 'text-[#6a7282] hover:text-[#364153]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Device'            && <DeviceTab />}
        {activeTab === 'Zones/Interfaces'  && <ZonesInterfacesTab />}
        {activeTab === 'Routes'            && <RoutesTab />}
        {activeTab === 'NAT'               && <NatTab />}
        {activeTab === 'WLB'               && (
          <div className="p-6 py-16 text-center text-sm text-[#6a7282]">WLB configuration</div>
        )}
      </div>
    </div>
  );
}
