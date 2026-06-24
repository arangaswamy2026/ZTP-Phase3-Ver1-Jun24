import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Search, ChevronLeft, X, Shield } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

// ── DS tokens (design-system.html) ────────────────────────────────────────────
// text: #1a1a1a  muted: #717182  accent: #0066cc  accent-hover: #0052a6
// error: #d4183d  warning: #d97706  success: #16a34a
// border: rgba(0,0,0,0.1)  surface-subtle: #ececf0  nav: #001b50  nav-accent: #ff5d00
// radius-sm:4px  radius-md:8px  radius-lg:16px  font: Inter

interface ThreatRow {
  id: number;
  name: string;
  sub: string;
  severity: 'High' | 'Medium' | 'Low';
  tenant: string;
  endpoint: string;
  user: string;
  status: 'needs-action' | 'mitigated' | 'isolated';
  statusLabel: string;
  time: string;
  action: 'isolate' | 'quarantine' | 'done';
  detectedVia: string;
  ip: string;
  hash: string;
}

const THREATS_DATA: ThreatRow[] = [
  { id: 1,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'needs-action', statusLabel: 'Not Quarantined', time: '7 min ago',  action: 'isolate',    detectedVia: 'On Process Behavior', ip: '192.168.163.128', hash: '4bf0818…907afb7df' },
  { id: 2,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'needs-action', statusLabel: 'Not Quarantined', time: '8 min ago',  action: 'isolate',    detectedVia: 'In Memory',           ip: '192.168.163.128', hash: '362e8f0…bf09dfd39' },
  { id: 3,  name: 'cmd.exe',                sub: 'Suspicious Shell · Process Behavior', severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'needs-action', statusLabel: 'Not Quarantined', time: '9 min ago',  action: 'quarantine', detectedVia: 'On Process Behavior', ip: '192.168.163.128', hash: '16d9d5e…1b6cabc0' },
  { id: 4,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'mitigated',    statusLabel: 'Process Killed',  time: '13 min ago', action: 'done',       detectedVia: 'In Memory',           ip: '192.168.163.128', hash: '30308c2…4f4ce1f0fc' },
  { id: 5,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'mitigated',    statusLabel: 'Process Killed',  time: '14 min ago', action: 'done',       detectedVia: 'In Memory',           ip: '192.168.163.128', hash: 'e29ce61…1057c779d' },
  { id: 6,  name: 'harmless_md5_1.txt',     sub: 'Suspicious File · On Scan',          severity: 'Medium', tenant: 'QA',            endpoint: 'VTB280-PC1',       user: 'N/A',    status: 'mitigated',    statusLabel: 'Quarantined',     time: '23 min ago', action: 'done',       detectedVia: 'On Scan',             ip: '10.5.65.222',     hash: 'f9666ae…321f83fa37' },
  { id: 7,  name: 'ae1bc3bfec00e96fc4ab70', sub: 'PUA · On Download',                  severity: 'Low',    tenant: 'Yash Personal', endpoint: 'DESKTOP-M5K8HOU',  user: 'Theron', status: 'mitigated',    statusLabel: 'Quarantined',     time: '30 min ago', action: 'done',       detectedVia: 'On Download',         ip: '192.168.168.171', hash: 'ae1bc3b…345939627' },
  { id: 8,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'mitigated',    statusLabel: 'Process Killed',  time: '35 min ago', action: 'done',       detectedVia: 'In Memory',           ip: '192.168.163.128', hash: 'c25a08e…680c0e96' },
  { id: 9,  name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'mitigated',    statusLabel: 'Process Killed',  time: '36 min ago', action: 'done',       detectedVia: 'In Memory',           ip: '192.168.163.128', hash: 'b613751…3038ea7b' },
  { id: 10, name: 'Ransom.Malbazar',        sub: 'Ransomware · In Memory',             severity: 'High',   tenant: 'Gav-India',     endpoint: 'DESKTOP-CT7UT4D',  user: 'bob',    status: 'mitigated',    statusLabel: 'Process Killed',  time: '38 min ago', action: 'done',       detectedVia: 'In Memory',           ip: '192.168.163.128', hash: 'e3b0c4…7852b855' },
];

// DS .sev chip: radius-md (8px), uppercase, no border
const SEV_CHIP: Record<string, { bg: string; text: string }> = {
  High:   { bg: '#ffedd5', text: '#f97316' },
  Medium: { bg: '#fef3c7', text: '#d97706' },
  Low:    { bg: '#16a34a1a', text: '#16a34a' },
};

// DS .badge chip: radius-md (8px), NO border on colored variants, no dot
const STATUS_CHIP: Record<string, { bg: string; text: string }> = {
  'needs-action': { bg: '#d977061a', text: '#d97706' },
  mitigated:      { bg: '#16a34a1a', text: '#16a34a' },
  isolated:       { bg: '#0066cc1a', text: '#0066cc' },
};

type FilterKey = 'all' | 'needs-action' | 'high' | 'medium' | 'mitigated';

export function EndpointThreatsPage() {
  const navigate = useNavigate();
  const [search, setSearch]   = useState('');
  const [filter, setFilter]   = useState<FilterKey>('needs-action');
  const [rows, setRows]       = useState<ThreatRow[]>(THREATS_DATA);
  const [drawer, setDrawer]   = useState<ThreatRow | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => rows.filter(r => {
    if (filter === 'needs-action' && r.status !== 'needs-action') return false;
    if (filter === 'high'         && r.severity !== 'High')        return false;
    if (filter === 'medium'       && r.severity !== 'Medium')      return false;
    if (filter === 'mitigated'    && r.status !== 'mitigated')     return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      if (!r.name.toLowerCase().includes(q) &&
          !r.endpoint.toLowerCase().includes(q) &&
          !r.user.toLowerCase().includes(q) &&
          !r.tenant.toLowerCase().includes(q)) return false;
    }
    return true;
  }), [rows, filter, search]);

  function doAction(id: number, type: 'isolate' | 'quarantine') {
    const patch = {
      status:      (type === 'isolate' ? 'isolated' : 'mitigated') as ThreatRow['status'],
      statusLabel: type === 'isolate' ? 'Isolated' : 'Quarantined',
      action:      'done' as ThreatRow['action'],
    };
    setRows(prev => prev.map(r => r.id !== id ? r : { ...r, ...patch }));
    setDrawer(prev => prev?.id === id ? { ...prev, ...patch } : prev);
  }

  function bulkMitigate() {
    setRows(prev => prev.map(r =>
      selected.has(r.id) ? { ...r, status: 'mitigated', statusLabel: 'Quarantined', action: 'done' } : r
    ));
    setSelected(new Set());
  }

  const STATS: { label: string; value: string; filter: FilterKey; valueColor: string }[] = [
    { label: 'Total Threats',    value: '1,802', filter: 'all',          valueColor: '#1a1a1a' },
    { label: 'Needs Action',     value: '9',     filter: 'needs-action', valueColor: '#d97706' },
    { label: 'High Severity',    value: '1,112', filter: 'high',         valueColor: '#d4183d' },
    { label: 'Medium',           value: '160',   filter: 'medium',       valueColor: '#d97706' },
    { label: 'Auto-Mitigated',   value: '1,793', filter: 'mitigated',    valueColor: '#16a34a' },
    { label: 'Tenants Affected', value: '3',     filter: 'all',          valueColor: '#1a1a1a' },
  ];

  const COL_HEADERS = ['Threat Name', 'Severity', 'Tenant', 'Endpoint · User', 'Status', 'Time', 'Action'];

  return (
    <div className="space-y-5 pb-10">

      {/* Back link — DS accent blue */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0066cc] hover:text-[#0052a6] transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <PageHeader
        title="Endpoint Threats"
        subtitle="Threats detected by the endpoint security agent across all managed tenants"
      />

      {/* ── Stat tiles ─────────────────────────────────────────────────────────── */}
      <div className="flex gap-2.5 flex-wrap items-stretch">
        {STATS.map((s, i) => {
          const isActive = filter === s.filter && !(s.filter === 'all' && filter === 'all' && i > 0);
          return (
            <React.Fragment key={s.label}>
              {(i === 1 || i === 4) && (
                <div className="w-px self-stretch bg-[rgba(0,0,0,0.08)] my-1" />
              )}
              <div
                onClick={() => setFilter(s.filter)}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${isActive ? '#ff5d00' : 'rgba(0,0,0,0.1)'}`,
                  borderRadius: '8px',
                  boxShadow: isActive ? '0 0 0 2px rgba(255,93,0,0.12)' : '0 1px 2px rgba(0,0,0,0.06)',
                }}
                className="px-4 py-3 min-w-[112px] cursor-pointer transition-all hover:shadow-md"
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: isActive ? '#ff5d00' : '#717182',
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2, marginTop: '2px', color: s.valueColor }}>
                  {s.value}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* ── Table card ──────────────────────────────────────────────────────────── */}
      <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.06)', overflow: 'hidden' }}>

        {/* Toolbar */}
        <div className="flex items-center gap-2.5 flex-wrap px-5 py-3 border-b border-[rgba(0,0,0,0.08)]">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#717182]" />
            <input
              type="search"
              placeholder="Search threats, endpoints, users…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ height: '32px', paddingLeft: '32px', paddingRight: '12px', width: '240px', fontSize: '13px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', background: '#f8f9fa', color: '#1a1a1a', outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => { e.currentTarget.style.borderColor = '#0066cc'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,102,204,0.15)'; }}
              onBlur={e  => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
            />
          </div>

          {filter !== 'all' && (
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', height: '24px', padding: '0 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: '#d4183d1a', color: '#d4183d' }}
            >
              {STATS.find(s => s.filter === filter)?.label}
              <button onClick={() => setFilter('all')} style={{ opacity: 0.7, lineHeight: 1, background: 'none', border: 'none', color: '#d4183d', cursor: 'pointer', padding: 0 }}>
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <span style={{ fontSize: '12px', color: '#717182' }}>
            Showing {filtered.length} of 1,802
          </span>

          <div className="ml-auto flex items-center gap-2">
            <button
              style={{ height: '32px', padding: '0 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(0,0,0,0.1)', background: '#ffffff', color: '#1a1a1a', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'inherit' }}
            >
              <svg viewBox="0 0 12 12" width="12" height="12"><path d="M10 8v2H2V8M6 1v7M3.5 4.5L6 2l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              Export
            </button>
          </div>
        </div>

        {/* Bulk action banner */}
        {selected.size > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: '#eff6ff', borderBottom: '1px solid rgba(0,102,204,0.2)', fontSize: '13px', fontWeight: 600, color: '#001b50' }}>
            <span>{selected.size} selected</span>
            <button
              onClick={bulkMitigate}
              style={{ height: '28px', padding: '0 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, background: '#0066cc', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Quarantine All Selected
            </button>
            <button
              onClick={() => setSelected(new Set())}
              style={{ height: '28px', padding: '0 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, background: '#fff', color: '#717182', border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Clear
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#ececf0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <th style={{ width: '36px', padding: '10px 16px' }}>
                  <input
                    type="checkbox"
                    style={{ width: '14px', height: '14px', accentColor: '#0066cc', cursor: 'pointer' }}
                    checked={filtered.length > 0 && filtered.every(r => selected.has(r.id))}
                    onChange={e => setSelected(e.target.checked ? new Set(filtered.map(r => r.id)) : new Set())}
                  />
                </th>
                {COL_HEADERS.map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#717182', whiteSpace: 'nowrap', cursor: h !== 'Action' ? 'pointer' : 'default', fontFamily: 'inherit' }}>
                    {h}{h !== 'Action' && <span style={{ opacity: 0.4, marginLeft: '3px', fontSize: '9px' }}>⇅</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: '64px 16px', textAlign: 'center', fontSize: '13px', color: '#717182' }}>
                    No threats match the current filters.
                  </td>
                </tr>
              ) : filtered.map((row, i) => {
                const sev    = SEV_CHIP[row.severity];
                const status = STATUS_CHIP[row.status];
                const isLast = i === filtered.length - 1;
                return (
                  <tr
                    key={row.id}
                    style={{ background: '#ffffff', borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.1)', transition: 'background 0.12s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#ececf0')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
                  >
                    {/* Checkbox */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      <input
                        type="checkbox"
                        style={{ width: '14px', height: '14px', accentColor: '#0066cc', cursor: 'pointer' }}
                        checked={selected.has(row.id)}
                        onChange={e => {
                          const next = new Set(selected);
                          e.target.checked ? next.add(row.id) : next.delete(row.id);
                          setSelected(next);
                        }}
                      />
                    </td>

                    {/* Threat Name */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      <button
                        onClick={() => setDrawer(row)}
                        style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', fontFamily: 'inherit', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left', display: 'block' }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#0066cc'; e.currentTarget.style.textDecoration = 'underline'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.textDecoration = 'none'; }}
                      >
                        {row.name}
                      </button>
                      <div style={{ fontSize: '11px', color: '#717182', marginTop: '2px' }}>{row.sub}</div>
                    </td>

                    {/* Severity badge — DS .sev: radius-md, no border */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', background: sev.bg, color: sev.text, whiteSpace: 'nowrap' }}>
                        {row.severity}
                      </span>
                    </td>

                    {/* Tenant */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle', fontSize: '13px', color: '#1a1a1a' }}>
                      {row.tenant}
                    </td>

                    {/* Endpoint · User */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}>
                        {row.endpoint}
                      </div>
                      <div style={{ fontSize: '11px', color: '#717182', marginTop: '2px' }}>
                        {row.user}
                      </div>
                    </td>

                    {/* Status badge — DS .badge: radius-md, no border */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: status.bg, color: status.text, whiteSpace: 'nowrap' }}>
                        {row.statusLabel}
                      </span>
                    </td>

                    {/* Time */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle', fontSize: '13px', color: '#717182', whiteSpace: 'nowrap' }}>{row.time}</td>

                    {/* Action — DS .badge style for action chips */}
                    <td style={{ padding: '12px 16px', verticalAlign: 'middle' }}>
                      {row.action === 'done' ? (
                        <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: '#16a34a1a', color: '#16a34a', whiteSpace: 'nowrap' }}>
                          Mitigated
                        </span>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <button
                            onClick={() => doAction(row.id, row.action as 'isolate' | 'quarantine')}
                            style={{
                              padding: '3px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600,
                              background: row.action === 'isolate' ? '#d4183d1a' : '#0066cc1a',
                              color: row.action === 'isolate' ? '#d4183d' : '#0066cc',
                              border: 'none', cursor: 'pointer',
                              display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: 'inherit',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = row.action === 'isolate' ? '#d4183d' : '#0066cc'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = row.action === 'isolate' ? '#d4183d1a' : '#0066cc1a'; e.currentTarget.style.color = row.action === 'isolate' ? '#d4183d' : '#0066cc'; }}
                          >
                            {row.action === 'isolate' ? (
                              <><Shield style={{ width: '11px', height: '11px' }} />Isolate</>
                            ) : (
                              <>Quarantine</>
                            )}
                          </button>
                          <button
                            onClick={() => setDrawer(row)}
                            style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.1)', background: '#fff', color: '#717182', cursor: 'pointer' }}
                          >
                            <svg viewBox="0 0 16 16" width="12" height="12"><circle cx="8" cy="4" r="1.2" fill="currentColor"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/><circle cx="8" cy="12" r="1.2" fill="currentColor"/></svg>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table footer / pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <span style={{ fontSize: '13px', color: '#717182' }}>Showing 1–{filtered.length} of 1,802 threats</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            {['‹', '1', '2', '3', '…', '181', '›'].map((p, i) => (
              <button
                key={i}
                style={{
                  minWidth: '28px', height: '28px', padding: '0 6px',
                  borderRadius: '8px', fontSize: '13px', fontFamily: 'inherit',
                  background: p === '1' ? '#001b50' : '#ffffff',
                  border:     p === '1' ? '1px solid #001b50' : '1px solid rgba(0,0,0,0.1)',
                  color:      p === '1' ? '#ffffff' : '#717182',
                  fontWeight: p === '1' ? 700 : 400,
                  cursor: 'pointer',
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Detail Drawer ───────────────────────────────────────────────────────── */}
      {drawer && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 200 }}
            onClick={() => setDrawer(null)}
          />
          <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '420px', background: '#ffffff', borderLeft: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)', zIndex: 201, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#001b50', fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', wordBreak: 'break-all' }}>{drawer.name}</div>
                <div style={{ fontSize: '11px', color: '#717182', marginTop: '3px' }}>{drawer.sub}</div>
              </div>
              <button
                onClick={() => setDrawer(null)}
                style={{ width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', background: 'none', border: 'none', color: '#717182', cursor: 'pointer', flexShrink: 0 }}
              >
                <X style={{ width: '14px', height: '14px' }} />
              </button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', padding: '0 20px', borderBottom: '2px solid rgba(0,0,0,0.08)', flexShrink: 0 }}>
              {['Overview', 'Timeline', 'Related'].map((t, i) => (
                <div
                  key={t}
                  style={{
                    padding: '8px 14px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                    color:        i === 0 ? '#ff5d00' : '#717182',
                    borderBottom: i === 0 ? '2px solid #ff5d00' : '2px solid transparent',
                    marginBottom: '-2px',
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>

              {/* Threat details KV */}
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#717182', marginBottom: '8px' }}>Threat Details</div>
              <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                {([
                  ['Severity', (
                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.04em', background: SEV_CHIP[drawer.severity].bg, color: SEV_CHIP[drawer.severity].text }}>{drawer.severity}</span>
                  )],
                  ['Status', (
                    <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: STATUS_CHIP[drawer.status].bg, color: STATUS_CHIP[drawer.status].text }}>
                      {drawer.statusLabel}
                    </span>
                  )],
                  ['Detected via', drawer.detectedVia],
                  ['Time',         drawer.time],
                ] as [string, React.ReactNode][]).map(([k, v], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div style={{ padding: '9px 12px', background: '#f8f9fa', fontSize: '12px', color: '#717182', borderRight: '1px solid rgba(0,0,0,0.06)' }}>{k}</div>
                    <div style={{ padding: '9px 12px', fontSize: '13px', fontWeight: 500, color: '#1a1a1a' }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Endpoint KV */}
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#717182', marginBottom: '8px' }}>Endpoint</div>
              <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                {([
                  ['Tenant',   drawer.tenant],
                  ['Endpoint', <span style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: '12px' }}>{drawer.endpoint}</span>],
                  ['User',     drawer.user],
                  ['IP',       <span style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: '12px' }}>{drawer.ip}</span>],
                ] as [string, React.ReactNode][]).map(([k, v], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                    <div style={{ padding: '9px 12px', background: '#f8f9fa', fontSize: '12px', color: '#717182', borderRight: '1px solid rgba(0,0,0,0.06)' }}>{k}</div>
                    <div style={{ padding: '9px 12px', fontSize: '13px', fontWeight: 500, color: '#1a1a1a' }}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Hash */}
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#717182', marginBottom: '8px' }}>File Hash</div>
              <div style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', padding: '10px 12px', fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: '12px', color: '#717182', wordBreak: 'break-all' }}>
                {drawer.hash}
              </div>
            </div>

            {/* Footer actions */}
            {drawer.action !== 'done' && (
              <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
                {drawer.action === 'isolate' && (
                  <button
                    onClick={() => doAction(drawer.id, 'isolate')}
                    style={{ width: '100%', height: '36px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, background: '#d4183d', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontFamily: 'inherit' }}
                  >
                    <Shield style={{ width: '14px', height: '14px' }} />
                    Isolate Endpoint
                  </button>
                )}
                {drawer.action === 'quarantine' && (
                  <button
                    onClick={() => doAction(drawer.id, 'quarantine')}
                    style={{ width: '100%', height: '36px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, background: '#0066cc', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontFamily: 'inherit' }}
                  >
                    Quarantine File
                  </button>
                )}
                <button
                  onClick={() => setDrawer(null)}
                  style={{ width: '100%', height: '36px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: '#fff', color: '#717182', border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
