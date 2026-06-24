import { useState, useMemo } from 'react';
import { Search, Copy, ArrowLeft, MoreVertical, RefreshCw, AlertTriangle, Info, Package } from 'lucide-react';
import { StatusBadge, DataTable, THead, TH, TR, TD } from '../components/ds';
import { PageHeader } from '../components/PageHeader';

/* ── Data model ── */
type Tier = 'Essential' | 'Advanced' | 'Premier';
type ExpStatus = 'active' | 'expiring' | 'expired';

interface TenantRecord {
  id: string;
  name: string;
  friendly: string;
  hasZTP: boolean;
  key?: string;
  count?: number;
  tier?: Tier;
  reg?: string;
  expiry?: string;
  expDays?: number;
  firmware?: string;
  firmwareSeen?: string;
  stale?: boolean;
}

const INVENTORY: TenantRecord[] = [
  { id: 'acme', name: 'Acme Corporation', friendly: 'ZTP — Acme Corporation',
    hasZTP: true, key: 'A1B2-C3D4-E5F6-7H8J', count: 50, tier: 'Premier',
    reg: '14 Oct 2024', expiry: '09 Jul 2026', expDays: 41, firmware: '7.1.2', stale: false },
  { id: 'enterprise', name: 'Enterprise Solutions', friendly: 'ZTP — Enterprise Solutions',
    hasZTP: true, key: 'K9L8-M7N6-P5Q4-R3S2', count: 120, tier: 'Advanced',
    reg: '10 Sep 2024', expiry: '18 Jun 2026', expDays: 20, firmware: '7.1.2', stale: false },
  { id: 'global', name: 'Global Services LLC', friendly: 'ZTP — Global Services LLC',
    hasZTP: true, key: 'T1U2-V3W4-X5Y6-Z7A8', count: 80, tier: 'Advanced',
    reg: '02 Nov 2025', expiry: '12 Aug 2026', expDays: 75,
    firmware: 'Unknown', firmwareSeen: 'last seen 21 May 2026', stale: false },
  { id: 'cloud', name: 'Cloud Innovations', friendly: 'ZTP — Cloud Innovations',
    hasZTP: true, key: 'B2C3-D4E5-F6G7-H8J9', count: 0, tier: 'Essential',
    reg: '27 Oct 2025', expiry: '02 May 2026', expDays: -27, firmware: '7.0.9', stale: true },
  { id: 'riverside', name: 'Riverside Dental', friendly: '—', hasZTP: false },
];

/* ── Helpers ── */
function maskKey(k: string) {
  return '••••-••••-••••-' + k.slice(-4);
}

function copyToClipboard(text: string, setCopied: (v: boolean) => void) {
  navigator.clipboard?.writeText(text);
  setCopied(true);
  setTimeout(() => setCopied(false), 1800);
}

// Tier is categorical (not a status); neutral chip styling keeps it clear of
// the semantic status colors.
function tierStyle(tier: Tier): string {
  if (tier === 'Premier') return 'bg-action-subtle text-action';
  if (tier === 'Advanced') return 'bg-muted text-foreground';
  return 'bg-muted text-muted-foreground';
}

function expiryStatus(t: TenantRecord): ExpStatus {
  if (!t.expDays && t.expDays !== 0) return 'active';
  if (t.expDays < 0) return 'expired';
  if (t.expDays <= 60) return 'expiring';
  return 'active';
}

/* ── Sub-components ── */
function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className={`text-[11px] font-semibold uppercase tracking-[0.04em] px-2.5 py-0.5 rounded-full ${tierStyle(tier)}`}>
      {tier}
    </span>
  );
}

function ExpiryCell({ t }: { t: TenantRecord }) {
  const status = expiryStatus(t);
  if (status === 'expired') {
    return (
      <div>
        <StatusBadge variant="error">Support Expired</StatusBadge>
        <div className="text-[11px] text-muted-foreground mt-0.5">{t.expiry}</div>
      </div>
    );
  }
  if (status === 'expiring') {
    return (
      <div>
        <span className="text-sm font-semibold text-foreground">{t.expiry}</span>
        <div className="text-[11px] text-warning font-semibold mt-0.5">
          Renew · {t.expDays}d left
        </div>
      </div>
    );
  }
  return <span className="text-sm text-foreground">{t.expiry}</span>;
}

function FirmwareCell({ t }: { t: TenantRecord }) {
  if (t.firmware === 'Unknown') {
    return (
      <div>
        <span className="text-sm text-muted-foreground">Unknown</span>
        {t.firmwareSeen && (
          <div className="text-[11px] text-muted-foreground mt-0.5">{t.firmwareSeen}</div>
        )}
      </div>
    );
  }
  return <span className="font-mono text-[13px] text-foreground">{t.firmware}</span>;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => { e.stopPropagation(); copyToClipboard(value, setCopied); }}
      className="w-6 h-6 rounded-md border border-border bg-card flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
      title={copied ? 'Copied!' : 'Copy activation key'}
    >
      <Copy className="w-3 h-3" />
    </button>
  );
}

/* ── Detail panel ── */
function DetailField({
  label, value, note, source,
}: { label: string; value: React.ReactNode; note?: string; source?: string }) {
  return (
    <div className="p-4 border-b border-border last:border-0">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.04em]">{label}</span>
        {source && (
          <span className="text-[11px] font-semibold text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
            {source}
          </span>
        )}
      </div>
      <div className="text-sm font-semibold text-foreground flex items-center gap-2">{value}</div>
      {note && <div className="text-[11px] text-muted-foreground mt-1">{note}</div>}
    </div>
  );
}

function SolutionDetail({
  tenant,
  onBack,
}: { tenant: TenantRecord; onBack: () => void }) {
  const [copiedKey, setCopiedKey] = useState(false);
  const status = expiryStatus(tenant);

  return (
    <div>
      <PageHeader
        title={tenant.friendly}
        subtitle="Complete ZTP subscription & licensing record for this tenant"
        back={{ label: 'Back to Inventory', onClick: onBack }}
        actions={
          <button
            onClick={() => copyToClipboard(tenant.key!, setCopiedKey)}
            className="h-8 px-3 text-sm border border-border rounded-lg bg-card hover:bg-muted font-medium text-foreground transition-colors"
          >
            {copiedKey ? 'Copied!' : 'Copy Activation Key'}
          </button>
        }
      />

      {/* Renewal CTA */}
      {status === 'expiring' && (
        <div className="flex items-center gap-3 bg-warning-subtle border border-warning/30 rounded-2xl p-4 mb-5">
          <div className="size-9 bg-warning/15 rounded-lg flex items-center justify-center shrink-0">
            <RefreshCw className="w-4 h-4 text-warning" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground">
              Support expires in {tenant.expDays} days
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              Renew now to avoid a service lapse.
            </div>
          </div>
          <button className="h-8 px-3 text-sm bg-action text-action-foreground rounded-lg font-semibold hover:bg-action-hover transition-colors">
            Request Renewal
          </button>
        </div>
      )}

      {/* Stale banner */}
      {tenant.stale && (
        <div className="flex items-center gap-3 bg-muted border border-border rounded-2xl p-3 mb-5 text-sm text-muted-foreground">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          Licensing API unavailable — showing cached data <strong className="text-foreground ml-1">as of 29 May 2026, 08:12 UTC</strong>.
        </div>
      )}

      {/* Field record */}
      <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <StatusBadge variant="info">ZTP</StatusBadge>
            <span className="text-sm font-medium text-foreground">Solution Record</span>
          </div>
          {status === 'expired' ? (
            <StatusBadge variant="error">Support Expired</StatusBadge>
          ) : (
            <StatusBadge variant="success" dot>Active</StatusBadge>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:border-r md:border-border">
            <DetailField
              label="Subscription Activation Key"
              source="Licensing API"
              value={
                <span className="inline-flex items-center gap-2">
                  <span className="font-mono text-[13px]">{maskKey(tenant.key!)}</span>
                  <CopyButton value={tenant.key!} />
                </span>
              }
              note="Last 4 digits visible. Full key via Copy button."
            />
            <DetailField
              label="Product Type"
              source="System"
              value={<StatusBadge variant="info">ZTP</StatusBadge>}
            />
            <DetailField
              label="License Count"
              source="Licensing API"
              value={
                tenant.count === 0
                  ? <span className="text-warning">0 seats (no seats allocated)</span>
                  : <span>{tenant.count} seats</span>
              }
            />
            <DetailField
              label="Support Expiry Date"
              source="Licensing API"
              value={<ExpiryCell t={tenant} />}
              note={tenant.expDays !== undefined && tenant.expDays <= 60 && tenant.expDays >= 0
                ? 'Renewal recommended — within 60-day window'
                : 'Red highlight within 30 days of expiry'}
            />
          </div>
          <div>
            <DetailField
              label="Friendly Name"
              source="MSP"
              value={tenant.friendly}
              note="MSP-defined label"
            />
            <DetailField
              label="Registration Date"
              source="Licensing API"
              value={tenant.reg!}
            />
            <DetailField
              label="License Tier"
              source="Licensing API"
              value={<TierBadge tier={tenant.tier!} />}
              note="Color-coded by tier"
            />
            <DetailField
              label="Firmware Version"
              source="Device telemetry"
              value={<FirmwareCell t={tenant} />}
              note="Sourced from device telemetry · updated on device check-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Empty state for tenants without ZTP ── */
function NoZTPState({ name, onBack }: { name: string; onBack: () => void }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Inventory
      </button>
      <h1 className="text-2xl font-bold text-foreground mb-1">{name}</h1>
      <p className="text-sm text-muted-foreground mb-5">ZTP solution inventory</p>
      <div className="bg-card border rounded-2xl shadow-sm py-14 text-center text-muted-foreground">
        <Package className="w-10 h-10 mx-auto mb-3 text-muted-foreground/40" />
        <div className="text-sm font-semibold text-foreground">No ZTP subscription for this tenant</div>
        <div className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
          This tenant has no active ZTP subscription — no record is shown.
        </div>
      </div>
    </div>
  );
}

/* ── Main Inventory page ── */
export function InventoryPage() {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<'all' | Tier>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | ExpStatus>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openKebab, setOpenKebab] = useState<string | null>(null);
  const [, setCopied] = useState(false);

  const rows = useMemo(() => {
    return INVENTORY.filter((t) => t.hasZTP).filter((t) => {
      const q = search.toLowerCase();
      if (q && !t.name.toLowerCase().includes(q) && !t.friendly.toLowerCase().includes(q)) return false;
      if (tierFilter !== 'all' && t.tier !== tierFilter) return false;
      const s = expiryStatus(t);
      if (statusFilter !== 'all' && s !== statusFilter) return false;
      return true;
    });
  }, [search, tierFilter, statusFilter]);

  const anyStale = rows.some((t) => t.stale);
  const selectedTenant = selectedId ? INVENTORY.find((t) => t.id === selectedId) : null;

  // Detail / no-ZTP views
  if (selectedTenant && !selectedTenant.hasZTP) {
    return <NoZTPState name={selectedTenant.name} onBack={() => setSelectedId(null)} />;
  }
  if (selectedTenant) {
    return <SolutionDetail tenant={selectedTenant} onBack={() => setSelectedId(null)} />;
  }

  return (
    <div className="space-y-5 pb-10">
      <PageHeader
        title="ZTP Solution Inventory"
        subtitle="Subscription & licensing details for all managed tenants — manage audits, renewals, and tier upgrades in one place."
      />

      {/* Stale data banner */}
      {anyStale && (
        <div className="flex items-center gap-3 bg-muted border border-border rounded-2xl p-3 text-sm text-muted-foreground">
          <AlertTriangle className="w-4 h-4 shrink-0 text-muted-foreground" />
          <span>
            Licensing API is currently unavailable. Showing cached data{' '}
            <strong className="text-foreground">as of 29 May 2026, 08:12 UTC</strong>.
          </span>
        </div>
      )}

      {/* Table card */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        {/* Table header / filters */}
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <div className="text-base font-medium text-foreground">Managed Tenants</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              ZTP subscription record per tenant · Licensing API is the ground-truth source
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tenants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-8 pl-8 pr-3 text-sm border border-input rounded-lg bg-muted focus:outline-none focus:border-action focus:bg-card w-52"
              />
            </div>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value as any)}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="all">All Tiers</option>
              <option value="Essential">Essential</option>
              <option value="Advanced">Advanced</option>
              <option value="Premier">Premier</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="h-8 px-2.5 text-sm border border-input rounded-lg bg-card focus:outline-none cursor-pointer text-foreground"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="expiring">Expiring soon</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <DataTable>
            <THead>
              <tr>
                {['Tenant / Friendly Name', 'Product', 'Activation Key', 'Licenses', 'Tier', 'Support Expiry', 'Firmware', 'Actions'].map((col, i) => (
                  <TH key={col} className={i === 7 ? 'text-right' : ''}>{col}</TH>
                ))}
              </tr>
            </THead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={8}>
                    <div className="text-center py-12 text-sm text-muted-foreground">
                      No matching records — adjust your search or filters.
                    </div>
                  </td>
                </tr>
              ) : rows.map((t) => (
                <TR
                  key={t.id}
                  onClick={() => { setOpenKebab(null); setSelectedId(t.id); }}
                  className="cursor-pointer"
                >
                  {/* Tenant name */}
                  <TD>
                    <div className="font-semibold text-[13px] text-foreground">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{t.friendly}</div>
                  </TD>

                  {/* Product */}
                  <TD>
                    <StatusBadge variant="info">ZTP</StatusBadge>
                  </TD>

                  {/* Activation key */}
                  <TD>
                    <span className="inline-flex items-center gap-2">
                      <span className="font-mono text-[13px] text-muted-foreground">{maskKey(t.key!)}</span>
                      <CopyButton value={t.key!} />
                    </span>
                  </TD>

                  {/* Licenses */}
                  <TD>
                    {t.count === 0
                      ? <span className="text-sm text-warning font-medium">0 seats</span>
                      : <span className="text-sm text-foreground">{t.count} seats</span>
                    }
                  </TD>

                  {/* Tier */}
                  <TD>
                    <TierBadge tier={t.tier!} />
                  </TD>

                  {/* Expiry */}
                  <TD>
                    <ExpiryCell t={t} />
                  </TD>

                  {/* Firmware */}
                  <TD>
                    <FirmwareCell t={t} />
                  </TD>

                  {/* Actions */}
                  <TD className="text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="relative inline-block">
                      <button
                        onClick={(e) => { e.stopPropagation(); setOpenKebab(openKebab === t.id ? null : t.id); }}
                        className="w-7 h-7 rounded-lg border border-transparent hover:border-border hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {openKebab === t.id && (
                        <div className="absolute right-0 top-full mt-1 bg-card border rounded-2xl shadow-lg w-48 z-20 overflow-hidden p-1">
                          <button
                            onClick={() => { setOpenKebab(null); setSelectedId(t.id); }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg text-left"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => { copyToClipboard(t.key!, setCopied); setOpenKebab(null); }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg text-left"
                          >
                            Copy Activation Key
                          </button>
                        </div>
                      )}
                    </div>
                  </TD>
                </TR>
              ))}
            </tbody>
          </DataTable>
        </div>

        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground">
          Showing {rows.length} ZTP subscription record{rows.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-start gap-3 bg-action-subtle border border-action/20 rounded-2xl p-3.5 text-sm text-foreground">
        <Info className="w-4 h-4 shrink-0 mt-0.5 text-action" />
        <span>
          Tenants without an active ZTP subscription do not appear in this inventory.
          Firmware version is sourced from device telemetry and updates on device check-in.
        </span>
      </div>
    </div>
  );
}
