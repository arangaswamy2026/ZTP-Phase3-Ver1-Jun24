import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import {
  Edit,
  Trash2,
  CheckCircle2,
  Shield,
} from 'lucide-react';
import { MOCK_POLICIES } from '../components/policies/PolicyData';
import { PageHeader } from '../components/PageHeader';

// Enriched SPA policy data for the detail view
const SPA_POLICY_DETAILS: Record<string, {
  title: string;
  subtitle: string;
  action: 'Allow' | 'Deny';
  source: {
    users?: string;
    group?: string;
  };
  destination: {
    fqdn: string;
  };
  deviceTrust: {
    level: 'High Trust Only' | 'Medium or High Trust' | 'Any trust level' | 'No Trust';
    badge: string;
    badgeColor: string;
    consequence: string;
  };
  trustProfile: {
    name: string;
    status: string;
    description: string;
  };
}> = {
  'spa-def-1': {
    title: 'Allow Alice and John to Host IP 10.0.0.2',
    subtitle: 'Base access policy for verified corporate devices',
    action: 'Allow',
    source: {
      users: 'Alice, John',
      group: 'Engineering',
    },
    destination: {
      fqdn: '10.0.2.2',
    },
    deviceTrust: {
      level: 'High Trust Only',
      badge: 'Live',
      badgeColor: 'green',
      consequence: 'Deny & Low latent',
    },
    trustProfile: {
      name: 'Default Trust Profile',
      status: 'Active',
      description: 'Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.',
    },
  },
  'spa-fin-1': {
    title: 'Allow Finance Team to Finance Apps',
    subtitle: 'Secure access policy for financial systems',
    action: 'Allow',
    source: {
      group: 'Finance Team',
    },
    destination: {
      fqdn: 'finance.company.com',
    },
    deviceTrust: {
      level: 'High Trust Only',
      badge: 'Live',
      badgeColor: 'green',
      consequence: 'Deny & Low latent',
    },
    trustProfile: {
      name: 'Default Trust Profile',
      status: 'Active',
      description: 'Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.',
    },
  },
  'spa-dev-1': {
    title: 'Allow Engineering Team to Development Resources',
    subtitle: 'Development environment access policy',
    action: 'Allow',
    source: {
      group: 'Engineering Team',
    },
    destination: {
      fqdn: 'dev.company.com',
    },
    deviceTrust: {
      level: 'Medium or High Trust',
      badge: 'Medium',
      badgeColor: 'yellow',
      consequence: 'Drop to Low latent',
    },
    trustProfile: {
      name: 'Default Trust Profile',
      status: 'Active',
      description: 'Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.',
    },
  },
};

const DEFAULT_SPA_DETAILS = {
  title: 'Allow Alice and John to Host IP 10.0.0.2',
  subtitle: 'Base access policy for verified corporate devices',
  action: 'Allow' as const,
  source: {
    users: 'Alice, John',
    group: 'Engineering',
  },
  destination: {
    fqdn: '10.0.2.2',
  },
  deviceTrust: {
    level: 'High Trust Only' as const,
    badge: 'Live',
    badgeColor: 'green',
    consequence: 'Deny & Low latent',
  },
  trustProfile: {
    name: 'Default Trust Profile',
    status: 'Active',
    description: 'Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.',
  },
};

function TagBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[10px] py-[4px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#364153]">
      {children}
    </span>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-[12px]">
      <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#6a7282] min-w-[140px]">
        {label}:
      </span>
      <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#364153] flex-1">
        {value}
      </span>
    </div>
  );
}

export function PrivateAccessPolicyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const policy = MOCK_POLICIES.find((p) => p.id === id);

  if (!policy) {
    return (
      <div className="flex flex-col items-center justify-center gap-[16px] h-[400px]">
        <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#6a7282]">
          Policy not found
        </span>
        <Button variant="outline" onClick={() => navigate('/access-policies')}>
          Back to Policies
        </Button>
      </div>
    );
  }

  const details = SPA_POLICY_DETAILS[policy.id] || DEFAULT_SPA_DETAILS;

  const getTrustBadgeStyle = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-[#dcfce7] text-[#16a34a]';
      case 'yellow':
        return 'bg-[#fef3c7] text-[#ca8a04]';
      case 'purple':
        return 'bg-[#e0e7ff] text-[#4f46e5]';
      case 'grey':
        return 'bg-[#f3f4f6] text-[#6b7280]';
      default:
        return 'bg-[#f3f4f6] text-[#6b7280]';
    }
  };

  return (
    <div className="flex flex-col gap-[24px] w-full max-w-[900px] pb-[40px]">
      <PageHeader
        title={details.title}
        subtitle={details.subtitle}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
        actions={
          <div className="flex items-center gap-[8px]">
            <Button
              variant="outline"
              size="sm"
              className="gap-[6px] rounded-[8px] border-black/10"
              onClick={() => navigate(`/private-access-policy/${policy.id}/edit`)}
            >
              <Edit className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Edit Policy
              </span>
            </Button>
            <Button variant="outline" size="sm" className="gap-[6px] rounded-[8px] border-red-200 text-red-600 hover:bg-red-50">
              <Trash2 className="w-[14px] h-[14px]" />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                Delete
              </span>
            </Button>
          </div>
        }
      />

      {/* Header Card */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] pt-[24px] pb-[20px] flex flex-col gap-[20px]">
          {/* Badges */}
          <div className="flex items-center gap-[8px]">
            <span className="inline-flex items-center rounded-full border border-[#c4b5fd] bg-[#ede9fe] px-[12px] py-[3px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#7c3aed]">
              Private Policy
            </span>
            <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f3f4f6] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] tracking-[0.12px] text-[#6a7282]">
              {policy.source}
            </span>
          </div>
        </div>
      </div>

      {/* Source and Destination */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px]">
          <div className="flex items-center gap-[4px]">
            {/* Source */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">Source</h3>
              <div className="flex flex-col gap-[8px]">
                {details.source.users && (
                  <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                    <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">Users: </span>
                    </div>
                    <div className="px-[4px] py-[4px]">
                      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">{details.source.users}</span>
                    </div>
                  </div>
                )}
                {details.source.group && (
                  <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                    <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                      <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">Group:</span>
                    </div>
                    <div className="px-[4px] py-[4px]">
                      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">{details.source.group}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-[20px] relative" style={{ marginTop: '48px' }}>
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none">
                <line x1="10" y1="10" x2="162" y2="10" stroke="#008236" strokeWidth="1" />
              </svg>
            </div>

            {/* Allow Badge */}
            <div className="flex-shrink-0" style={{ marginTop: '48px' }}>
              <div 
                className="px-[8px] py-[4px] rounded-[10px] border border-[#b9f8cf] bg-[#f0fdf4]"
              >
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#008236]">
                  {details.action}
                </span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-[20px] relative" style={{ marginTop: '48px' }}>
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none">
                <line x1="10" y1="10" x2="162" y2="10" stroke="#008236" strokeWidth="1" />
              </svg>
            </div>

            {/* Destination */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">Destination</h3>
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center border border-[#e5e7eb] rounded-[8px] overflow-hidden bg-[#f9fafb]">
                  <div className="border-r border-[#e5e7eb] px-[8px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] text-[#6a7282]">FQDN:</span>
                  </div>
                  <div className="px-[4px] py-[4px]">
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">{details.destination.fqdn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Trust */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[12px]">
          <div className="flex items-center gap-[10px]">
            <Shield className="w-[16px] h-[16px] text-[#6a7282]" />
            <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
              Device Trust
            </h3>
          </div>
          <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
            Minimum trust level required for device access.
          </p>

          <div className="rounded-[10px] border border-[#e5e7eb] p-[16px] flex flex-col gap-[8px] bg-[#f9fafb]">
            <div className="flex items-center gap-[8px]">
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[18px] text-[#101828]">
                {details.deviceTrust.level}
              </span>
              <span className={`inline-flex items-center rounded-[6px] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[11px] ${getTrustBadgeStyle(details.deviceTrust.badgeColor)}`}>
                {details.deviceTrust.badge}
              </span>
            </div>
            <div className="flex items-center gap-[6px] pl-[24px]">
              <CheckCircle2 className="w-[14px] h-[14px] text-[#16a34a]" strokeWidth={2.5} />
              <span className="font-['Inter',sans-serif] font-normal text-[12px] text-[#6a7282]">
                If not satisfied → <span className="font-medium text-[#101828]">{details.deviceTrust.consequence}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Profile */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[8px]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
                  {details.trustProfile.name}
                </h3>
                <span className="inline-flex items-center rounded-[6px] bg-[#f3f4f6] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[11px] text-[#6b7280]">
                  {details.trustProfile.status}
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                {details.trustProfile.description}
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-[8px] border-[#d1d5db] px-[16px]"
              onClick={() => navigate('/profiles/default-trust-profile')}
            >
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
                View Profile
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}