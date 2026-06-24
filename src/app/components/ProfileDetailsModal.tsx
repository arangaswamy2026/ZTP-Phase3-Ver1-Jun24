import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import {
  X,
  Edit,
  Trash2,
  Copy,
  Shield,
  Filter,
  Globe,
  AppWindow,
  Lock,
  AlertCircle,
  CheckCircle2,
  Activity,
} from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  category: string;
  description: string;
  trustLogic?: string;
  controls: string[];
  isDefault: boolean;
  policies: number;
  lastModified: string;
}

interface ProfileDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: Profile | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
}

// ── Section icon components ──────────────────────────────────────────

function PostureIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#ffedd4] size-[48px] shrink-0">
      <Shield className="w-[24px] h-[24px] text-[#CA3500]" />
    </div>
  );
}

function ContentFilterIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#f3e8ff] size-[48px] shrink-0">
      <Filter className="w-[24px] h-[24px] text-[#8200DB]" />
    </div>
  );
}

function DNSIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#dbeafe] size-[48px] shrink-0">
      <Globe className="w-[24px] h-[24px] text-[#1447E6]" />
    </div>
  );
}

function AppControlIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#d1fae5] size-[48px] shrink-0">
      <AppWindow className="w-[24px] h-[24px] text-[#059669]" />
    </div>
  );
}

function IPSIcon() {
  return (
    <div className="flex items-center justify-center rounded-[11px] bg-[#fee2e2] size-[48px] shrink-0">
      <Lock className="w-[24px] h-[24px] text-[#DC2626]" />
    </div>
  );
}

// ── Type badge ───────────────────────────────────────────────────────

function TypeBadge({ isDefault }: { isDefault: boolean }) {
  if (isDefault) {
    return (
      <span className="inline-flex items-center rounded-[6px] border border-[#d4d4d8] bg-[#fafafa] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#52525b]">
        Default
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#1e40af]">
        Custom
      </span>
  );
}

// ── Trust level badge ────────────────────────────────────────────────

function TrustBadge({ level }: { level: string }) {
  let bgClass = 'border-[#e5e7eb] bg-[#f3f4f6] text-[#4a5565]';
  if (level.includes('High')) bgClass = 'border-[#b9f8cf] bg-[#f0fdf4] text-[#008236]';
  if (level.includes('Medium')) bgClass = 'border-[#fde68a] bg-[#fefce8] text-[#a16207]';
  if (level.includes('Low')) bgClass = 'border-[#fca5a5] bg-[#fef2f2] text-[#dc2626]';

  return (
    <span
      className={`inline-flex items-center rounded-[8px] border px-[8px] py-[3px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] ${bgClass}`}
    >
      {level}
    </span>
  );
}

// ── Format date helper ───────────────────────────────────────────────

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ── Get icon by category ─────────────────────────────────────────────

function getIconByCategory(category: string) {
  if (category.includes('Posture')) return <PostureIcon />;
  if (category.includes('Content')) return <ContentFilterIcon />;
  if (category.includes('DNS')) return <DNSIcon />;
  if (category.includes('Application')) return <AppControlIcon />;
  if (category.includes('IPS')) return <IPSIcon />;
  return <DNSIcon />;
}

// ── Detailed control information ─────────────────────────────────────

const CONTROL_DETAILS: Record<string, { description: string; severity: 'high' | 'medium' | 'low' }> = {
  'Block Malicious Domains': {
    description: 'Prevents access to domains identified as hosting malware, ransomware, or other malicious content.',
    severity: 'high',
  },
  'Block Phishing': {
    description: 'Blocks domains used in phishing campaigns designed to steal credentials or sensitive information.',
    severity: 'high',
  },
  'Block C2 Servers': {
    description: 'Prevents communication with command and control servers used by botnets and advanced threats.',
    severity: 'high',
  },
  'OS Version': {
    description: 'Verifies that the device operating system meets minimum version requirements.',
    severity: 'medium',
  },
  'Disk Encryption': {
    description: 'Ensures full disk encryption is enabled to protect data at rest.',
    severity: 'high',
  },
  'Firewall Enabled': {
    description: 'Confirms that the device firewall is active and properly configured.',
    severity: 'medium',
  },
  'Antivirus': {
    description: 'Validates that antivirus software is installed, running, and up to date.',
    severity: 'high',
  },
  'Patch Level': {
    description: 'Checks that security patches are current and no critical updates are missing.',
    severity: 'medium',
  },
  'Screen Lock': {
    description: 'Requires automatic screen lock after a period of inactivity.',
    severity: 'low',
  },
  'Block Adult Content': {
    description: 'Restricts access to adult and inappropriate websites.',
    severity: 'medium',
  },
  'Block Malware Sites': {
    description: 'Prevents navigation to known malware distribution sites.',
    severity: 'high',
  },
  'Block Social Media': {
    description: 'Blocks access to social media platforms during work hours.',
    severity: 'low',
  },
  'Allow Office 365': {
    description: 'Permits access to Microsoft Office 365 cloud services.',
    severity: 'low',
  },
  'Allow Google Workspace': {
    description: 'Permits access to Google Workspace applications.',
    severity: 'low',
  },
  'Block File Sharing': {
    description: 'Prevents use of unauthorized file sharing and cloud storage services.',
    severity: 'medium',
  },
  'All Signatures': {
    description: 'Enables the complete IPS signature database for comprehensive threat detection.',
    severity: 'high',
  },
  'Block on Match': {
    description: 'Automatically blocks traffic when a signature match is detected.',
    severity: 'high',
  },
};

// ── Mock applied policies ────────────────────────────────────────────

const MOCK_APPLIED_POLICIES = [
  { id: '1', name: 'Corporate Network Access', type: 'Zone-Based' },
  { id: '2', name: 'Guest WiFi Policy', type: 'Internet Access SIA' },
  { id: '3', name: 'Remote Worker VPN', type: 'Private Access SPA' },
];

export function ProfileDetailsModal({
  open,
  onOpenChange,
  profile,
  onEdit,
  onDelete,
  onDuplicate,
}: ProfileDetailsModalProps) {
  if (!profile) return null;

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'text-[#DC2626]';
      case 'medium':
        return 'text-[#f59e0b]';
      case 'low':
        return 'text-[#6b7280]';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto p-0" aria-describedby={undefined}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#e5e7eb] px-[24px] py-[20px]">
          <div className="flex items-start justify-between gap-[16px]">
            <div className="flex items-start gap-[12px] flex-1">
              {getIconByCategory(profile.category)}
              <div className="flex flex-col gap-[6px] flex-1">
                <div className="flex items-center gap-[8px]">
                  <DialogTitle className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                    {profile.name}
                  </DialogTitle>
                  <TypeBadge isDefault={profile.isDefault} />
                </div>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#6a7282]">
                  {profile.category}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  {profile.description}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-[8px] mt-[16px]">
            <Button
              variant="outline"
              size="sm"
              className="gap-[6px] rounded-[8px] border-black/10"
              onClick={() => {
                onEdit?.(profile.id);
                onOpenChange(false);
              }}
            >
              <Edit className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Edit Profile
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-[6px] rounded-[8px] border-black/10"
              onClick={() => {
                onDuplicate?.(profile.id);
                onOpenChange(false);
              }}
            >
              <Copy className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Duplicate
              </span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-[6px] rounded-[8px] border-red-200 text-red-600 hover:bg-red-50"
              onClick={() => {
                onDelete?.(profile.id);
                onOpenChange(false);
              }}
            >
              <Trash2 className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Delete
              </span>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="px-[24px] py-[24px] flex flex-col gap-[24px]">
          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="rounded-[10px] border border-[#e5e7eb] bg-[#fafafa] p-[16px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <Activity className="w-[16px] h-[16px] text-[#6a7282]" />
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Applied Policies
                </span>
              </div>
              <span className="font-['Inter',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828]">
                {profile.policies}
              </span>
            </div>
            <div className="rounded-[10px] border border-[#e5e7eb] bg-[#fafafa] p-[16px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <CheckCircle2 className="w-[16px] h-[16px] text-[#6a7282]" />
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Active Checks
                </span>
              </div>
              <span className="font-['Inter',sans-serif] font-bold text-[24px] leading-[32px] text-[#101828]">
                {profile.controls.length}
              </span>
            </div>
            <div className="rounded-[10px] border border-[#e5e7eb] bg-[#fafafa] p-[16px] flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <AlertCircle className="w-[16px] h-[16px] text-[#6a7282]" />
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Last Modified
                </span>
              </div>
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#101828]">
                {formatDate(profile.lastModified)}
              </span>
            </div>
          </div>

          {/* Trust Logic (if applicable) */}
          {profile.trustLogic && (
            <div className="flex flex-col gap-[12px]">
              <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
                Trust Level Logic
              </span>
              <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex items-center justify-between">
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  This profile enforces a {profile.trustLogic.toLowerCase()} level for device compliance
                </span>
                <TrustBadge level={profile.trustLogic} />
              </div>
            </div>
          )}

          {/* Security Controls */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
              Security Controls ({profile.controls.length})
            </span>
            <div className="flex flex-col gap-[8px]">
              {profile.controls.map((control, index) => {
                const details = CONTROL_DETAILS[control] || {
                  description: 'Security control enabled for this profile.',
                  severity: 'medium' as const,
                };
                return (
                  <div
                    key={index}
                    className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex items-start gap-[12px]"
                  >
                    <CheckCircle2 className={`w-[20px] h-[20px] mt-[2px] shrink-0 ${getSeverityColor(details.severity)}`} />
                    <div className="flex flex-col gap-[4px] flex-1">
                      <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                        {control}
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                        {details.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Applied to Policies */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
              Applied to Policies ({MOCK_APPLIED_POLICIES.length})
            </span>
            <div className="rounded-[10px] border border-[#e5e7eb] bg-white overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                    <th className="px-[16px] py-[10px] text-left font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                      Policy Name
                    </th>
                    <th className="px-[16px] py-[10px] text-left font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_APPLIED_POLICIES.map((policy) => (
                    <tr key={policy.id} className="border-b border-[#f3f4f6] last:border-b-0">
                      <td className="px-[16px] py-[12px]">
                        <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                          {policy.name}
                        </span>
                      </td>
                      <td className="px-[16px] py-[12px]">
                        <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[2px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]">
                          {policy.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}