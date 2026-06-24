import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  Search,
  Settings,
  AlertTriangle,
  CircleCheck,
  Clock,
  Copy,
  X,
  MoreHorizontal,
  Download,
  RefreshCw,
  SlidersHorizontal,
  Users,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { TenantAvatar } from '../components/TenantAvatar';
import { StatusBadge as DSStatusBadge } from '../components/ds';
import { PageHeader } from '../components/PageHeader';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

// ── Unified tenant data (merges activation + inventory/licensing) ─────────────────

type Status = 'Active' | 'Pending Setup';
type Tier = 'Premier' | 'Advanced' | 'Essential';

interface Tenant {
  id: string;
  name: string;
  status: Status;
  tier: Tier | null;
  licensesUsed: number;
  licensesTotal: number;
  policies: number | null;
  users: number | null;
  supportExpiry: string | null;
  renewalDays: number | null; // days until support expiry; null when N/A
  expired?: boolean;
  firmware: string | null; // version string, or null when unknown
  firmwareOutdated?: boolean;
  activationDate: string;
  lastActivity: string | null;
  activationKey: string;
}

const TENANTS: Tenant[] = [
  {
    id: '1', name: 'Acme Corporation', status: 'Active', tier: 'Advanced',
    licensesUsed: 42, licensesTotal: 50, policies: 8, users: 6,
    supportExpiry: '09 Jul 2026', renewalDays: 35, firmware: '7.1.2',
    activationDate: '14 Oct 2026', lastActivity: '2 hrs ago', activationKey: 'ACME-9F2K-7QX4-7H8J',
  },
  {
    id: '2', name: 'Enterprise Solutions', status: 'Active', tier: 'Advanced',
    licensesUsed: 96, licensesTotal: 120, policies: 10, users: 9,
    supportExpiry: '18 Jun 2026', renewalDays: 14, firmware: '7.1.2',
    activationDate: '19 Sep 2026', lastActivity: '5 mins ago', activationKey: 'ENTP-4D8M-1ZR9-3K2P',
  },
  {
    id: '3', name: 'Global Services LLC', status: 'Active', tier: 'Advanced',
    licensesUsed: 64, licensesTotal: 80, policies: 14, users: 12,
    supportExpiry: '12 Aug 2026', renewalDays: 56, firmware: null,
    activationDate: '02 Nov 2026', lastActivity: '18 mins ago', activationKey: 'GLBL-2C7T-8WY5-9M4Q',
  },
  {
    id: '4', name: 'Riverside Dental Office', status: 'Active', tier: 'Essential',
    licensesUsed: 18, licensesTotal: 20, policies: 6, users: 5,
    supportExpiry: '02 May 2026', renewalDays: -46, expired: true, firmware: '7.0.9', firmwareOutdated: true,
    activationDate: '11 Aug 2026', lastActivity: '42 mins ago', activationKey: 'RVSD-6H1N-3PL2-5T8R',
  },
  {
    id: '5', name: 'Cloud Innovations', status: 'Pending Setup', tier: null,
    licensesUsed: 0, licensesTotal: 20, policies: null, users: null,
    supportExpiry: null, renewalDays: null, firmware: null,
    activationDate: '27 Oct 2026', lastActivity: null, activationKey: 'CLDI-8B3V-5KQ7-2W9X',
  },
];

// ── Shared atoms ──────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Status }) {
  if (status === 'Active') {
    return <DSStatusBadge variant="success" dot>Active</DSStatusBadge>;
  }
  return (
    <DSStatusBadge variant="info">
      <Clock className="w-3 h-3" />
      Pending Setup
    </DSStatusBadge>
  );
}

// Tier is a categorical (non-status) label; it uses neutral chip styling so it
// never competes with the semantic status colors.
const TIER_STYLE: Record<Tier, string> = {
  Premier: 'bg-action-subtle text-action',
  Advanced: 'bg-muted text-foreground',
  Essential: 'bg-muted text-muted-foreground',
};

function TierBadge({ tier }: { tier: Tier | null }) {
  if (!tier) return <span className="text-sm text-muted-foreground">—</span>;
  return <span className={`text-[11px] font-semibold uppercase tracking-[0.04em] px-2.5 py-0.5 rounded-full ${TIER_STYLE[tier]}`}>{tier}</span>;
}

function LicenseMeter({ used, total, compact = false }: { used: number; total: number; compact?: boolean }) {
  const pct = total === 0 ? 0 : Math.round((used / total) * 100);
  const color = pct >= 100 ? 'var(--destructive)' : pct >= 85 ? 'var(--warning)' : 'var(--action)';
  return (
    <div className={compact ? 'w-28' : 'w-36'}>
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm font-medium text-foreground tabular-nums">
          {used}<span className="text-muted-foreground font-normal"> / {total}</span>
        </span>
        <span className="text-[11px] text-muted-foreground tabular-nums">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${Math.min(100, pct)}%`, background: color }} />
      </div>
    </div>
  );
}

function RenewalPill({ tenant }: { tenant: Tenant }) {
  if (tenant.status === 'Pending Setup') return <span className="text-sm text-muted-foreground">—</span>;
  if (tenant.expired) {
    return (
      <div>
        <DSStatusBadge variant="error">Expired</DSStatusBadge>
        <div className="text-xs text-muted-foreground mt-1">{tenant.supportExpiry}</div>
      </div>
    );
  }
  const d = tenant.renewalDays ?? 999;
  const urgent = d <= 14;
  const soon = d <= 60;
  const variant = urgent ? 'error' : soon ? 'warning' : 'success';
  return (
    <div>
      <DSStatusBadge variant={variant}>{soon ? `${d}d left` : 'Active'}</DSStatusBadge>
      <div className="text-xs text-muted-foreground mt-1">{tenant.supportExpiry}</div>
    </div>
  );
}

function FirmwareCell({ tenant }: { tenant: Tenant }) {
  if (tenant.status === 'Pending Setup') return <span className="text-sm text-muted-foreground">—</span>;
  if (!tenant.firmware) {
    return <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">Unknown</span>;
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-foreground">
      {tenant.firmware}
      {tenant.firmwareOutdated && <DSStatusBadge variant="warning">Update</DSStatusBadge>}
    </span>
  );
}

function ColHead({ children, align = 'left', className = '' }: { children: ReactNode; align?: 'left' | 'center' | 'right'; className?: string }) {
  const a = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  return (
    <th className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground whitespace-nowrap ${a} ${className}`}>
      {children}
    </th>
  );
}

function DownloadUnifiedClientModal({ tenant, onClose }: { tenant: Tenant; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText('INV-8829-XJ4').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground text-left">Download Unified Client</h2>
            <p className="text-sm text-muted-foreground mt-1 text-left">Share these details with your users to get them started.</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Body */}
        <div className="px-6 pb-6 space-y-5">
          {/* Invite section */}
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-action shrink-0" />
              <span className="text-sm font-semibold text-action">Invite Users to Download Client App</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Share these following details with the users via email</p>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground mb-1.5">Invite Code</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-9 bg-background border border-input rounded-lg px-3 flex items-center text-sm font-mono text-foreground">
                  INV-8829-XJ4
                </div>
                <button
                  onClick={copy}
                  className="h-9 px-3 flex items-center gap-1.5 rounded-lg border border-input bg-background text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  {copied ? <CircleCheck className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
          {/* Download button */}
          <Button className="w-full gap-2 bg-[#0066cc] hover:bg-[#0052a6] text-white">
            <Download className="w-4 h-4" />
            Download Client Installer
          </Button>
        </div>
      </div>
    </div>
  );
}

function RowActions({ tenant, onViewDetails }: { tenant: Tenant; onViewDetails: () => void }) {
  const [showDownload, setShowDownload] = useState(false);

  if (tenant.status === 'Pending Setup') {
    return (
      <Button variant="outline" size="sm" className="h-8 rounded-lg gap-1.5">
        <Settings className="w-4 h-4" /> Continue Setup
      </Button>
    );
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="inline-flex items-center justify-center w-8 h-8 rounded-[10px] border border-black/10 bg-transparent text-foreground hover:bg-[var(--color-surface-subtle)] transition-colors cursor-pointer">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={onViewDetails} className="gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setShowDownload(true)} className="gap-2">
            <Download className="w-4 h-4" />
            Download Unified Client
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Renew
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {showDownload && (
        <DownloadUnifiedClientModal tenant={tenant} onClose={() => setShowDownload(false)} />
      )}
    </>
  );
}

// ── Aggregates ────────────────────────────────────────────────────────────────────

function useAggregates() {
  return useMemo(() => {
    const licUsed = TENANTS.reduce((s, t) => s + t.licensesUsed, 0);
    const licTotal = TENANTS.reduce((s, t) => s + t.licensesTotal, 0);
    const renewalsDue = TENANTS.filter((t) => t.status === 'Active' && !t.expired && t.renewalDays !== null && t.renewalDays <= 60).length;
    const expired = TENANTS.filter((t) => t.expired).length;
    const firmwareAttention = TENANTS.filter((t) => t.status === 'Active' && (t.firmwareOutdated || !t.firmware)).length;
    const pending = TENANTS.filter((t) => t.status === 'Pending Setup').length;
    return { licUsed, licTotal, renewalsDue, expired, firmwareAttention, pending };
  }, []);
}

// At-risk first: expired → renewal urgent → firmware → renewal soon → healthy → pending.
function urgencyRank(t: Tenant): number {
  if (t.status === 'Pending Setup') return 6;
  if (t.expired) return 0;
  if (t.renewalDays !== null && t.renewalDays <= 14) return 1;
  if (t.firmwareOutdated || !t.firmware) return 2;
  if (t.renewalDays !== null && t.renewalDays <= 60) return 3;
  return 4;
}
const byUrgency = (a: Tenant, b: Tenant) => urgencyRank(a) - urgencyRank(b) || a.name.localeCompare(b.name);

function TenantDetailModal({ tenant, onClose }: { tenant: Tenant; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-2xl shadow-xl w-full max-w-[560px] mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <TenantAvatar size={36} />
            <div>
              <div className="text-[15px] font-semibold text-foreground leading-tight">{tenant.name}</div>
              <div className="flex items-center gap-2 mt-0.5">
                <StatusBadge status={tenant.status} />
                <TierBadge tier={tenant.tier} />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="divide-y divide-border">
          {/* Licensing & Usage */}
          <div className="px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground mb-3">Licensing &amp; Usage</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              <Detail label="Licenses" value={tenant.status === 'Pending Setup' ? 'Not provisioned' : `${tenant.licensesUsed} / ${tenant.licensesTotal}`} />
              <Detail label="Policies" value={tenant.policies != null ? String(tenant.policies) : '—'} />
              <Detail label="Users" value={tenant.users != null ? String(tenant.users) : '—'} />
            </div>
          </div>

          {/* Health & Compliance */}
          <div className="px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground mb-3">Health &amp; Compliance</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Detail label="Firmware" value={tenant.firmware ?? 'Unknown'} flag={tenant.firmwareOutdated ? 'Update available' : undefined} />
              <Detail label="Support Expiry" value={tenant.supportExpiry ?? '—'} flag={tenant.expired ? 'Expired' : undefined} flagTone="red" />
            </div>
          </div>

          {/* Account */}
          <div className="px-5 py-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted-foreground mb-3">Account</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <Detail label="Activation Date" value={tenant.activationDate} />
              <Detail label="Last Activity" value={tenant.lastActivity ?? '—'} />
              <div className="col-span-2">
                <ActivationKey value={tenant.activationKey} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── OPTION B — Attention-first triage view ────────────────────────────────────────

function OptionB({ search }: { search: string }) {
  const agg = useAggregates();
  const [modalTenant, setModalTenant] = useState<Tenant | null>(null);

  const rows = TENANTS
    .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    .sort(byUrgency);

  return (
    <div className="space-y-5">
      {/* Attention banner */}
      <div className="bg-warning-subtle border border-warning/30 rounded-2xl px-5 py-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
        <div className="text-sm text-foreground">
          <span className="font-semibold">{agg.expired} contract expired</span> ·{' '}
          <span className="font-semibold">{agg.renewalsDue} renewals due within 60 days</span> ·{' '}
          <span className="font-semibold">{agg.firmwareAttention} firmware updates available</span>.
          <span className="text-muted-foreground"> Review the flagged tenants below to keep all accounts protected.</span>
        </div>
      </div>

      {/* Triage table */}
      <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <ColHead>Tenant</ColHead>
              <ColHead>Status</ColHead>
              <ColHead>Tier</ColHead>
              <ColHead>Licenses</ColHead>
              <ColHead>Support / Renewal</ColHead>
              <ColHead align="right">Actions</ColHead>
            </tr>
          </thead>
          <tbody>
            {rows.map((t) => (
              <tr
                key={t.id}
                className="border-b border-border transition-colors cursor-pointer hover:bg-muted/60"
                onClick={() => setModalTenant(t)}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <TenantAvatar size={32} />
                    <span className="text-[13px] font-medium text-foreground">{t.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4"><StatusBadge status={t.status} /></td>
                <td className="px-4 py-4"><TierBadge tier={t.tier} /></td>
                <td className="px-4 py-4">
                  {t.status === 'Pending Setup'
                    ? <span className="text-sm text-muted-foreground">—</span>
                    : <LicenseMeter used={t.licensesUsed} total={t.licensesTotal} compact />}
                </td>
                <td className="px-4 py-4"><RenewalPill tenant={t} /></td>
                <td className="px-4 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                  <RowActions tenant={t} onViewDetails={() => setModalTenant(t)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <div className="px-4 py-10 text-center text-sm text-muted-foreground">No tenants match your search.</div>
        )}
        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground flex items-center gap-1.5">
          <CircleCheck className="w-3.5 h-3.5 text-success" />
          {rows.length} of {TENANTS.length} tenants shown · click a row to view full detail
        </div>
      </div>

      {modalTenant && (
        <TenantDetailModal tenant={modalTenant} onClose={() => setModalTenant(null)} />
      )}
    </div>
  );
}

function ActivationKey({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const last4 = value.replace(/[^A-Za-z0-9]/g, '').slice(-4);
  const masked = `••••–••••–••••–${last4}`;
  const copy = () => {
    navigator.clipboard?.writeText(value)
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); })
      .catch(() => {});
  };
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">Activation Key</div>
      <div className="mt-1 flex items-center gap-2">
        <span className="font-mono text-sm text-foreground tracking-wide select-none">{showKey ? value : masked}</span>
        <button
          onClick={() => setShowKey(s => !s)}
          title={showKey ? 'Hide activation key' : 'Show activation key'}
          aria-label={showKey ? 'Hide activation key' : 'Show activation key'}
          className="flex items-center justify-center w-7 h-7 rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={copy}
          title="Copy activation key"
          aria-label="Copy activation key"
          className="flex items-center justify-center w-7 h-7 rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {copied ? <CircleCheck className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

function Detail({ label, value, flag, flagTone = 'amber' }: { label: string; value: string; flag?: string; flagTone?: 'amber' | 'red' }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.04em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm text-foreground flex items-center gap-2">
        {value}
        {flag && (
          <DSStatusBadge variant={flagTone === 'red' ? 'error' : 'warning'}>{flag}</DSStatusBadge>
        )}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────────

export function TenantManagementPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-7 w-full max-w-[1438px] pb-10">
      <PageHeader
        title="Tenant Management"
        subtitle="Monitor activation, licensing, support, and firmware across all your managed tenants."
      />

      {/* Search */}
      <div className="relative w-[302px]">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search tenants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-9 bg-muted border border-input rounded-md pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-action"
        />
      </div>

      <OptionB search={search} />
    </div>
  );
}
