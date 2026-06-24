import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Edit2, Trash2, Shield, Laptop, Globe, AlertTriangle } from 'lucide-react';
import { MOCK_POLICIES, type Badge as PolicyBadge } from '../components/policies/PolicyData';
import { PageHeader } from '../components/PageHeader';

// Badge renderer component
function BadgeRenderer({ badge }: { badge: PolicyBadge }) {
  return (
    <div className="flex items-center border border-[#e5e7eb] rounded-lg overflow-hidden w-fit">
      <div className="bg-[#f9fafb] border-r border-l border-t border-b border-[#e5e7eb] px-2 py-[2px]">
        <span className="text-xs font-semibold text-[#6a7282] leading-[1.2]">{badge.type}:</span>
      </div>
      <div className="bg-[#f9fafb] px-2 py-[2px]">
        <span className="text-xs text-[#6a7282] leading-[1.2]">{badge.value}</span>
      </div>
    </div>
  );
}

export function ZonePolicyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const policy = MOCK_POLICIES.find((p) => p.id === id && p.type === 'Zone');

  if (!policy) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <span className="font-medium text-base text-[#6a7282]">
          Policy not found
        </span>
        <Button variant="outline" onClick={() => navigate('/access-policies')}>
          Back to Policies
        </Button>
      </div>
    );
  }

  const isAllow = policy.action === 'Allow';
  const actionText = isAllow ? 'ALLOWS' : 'BLOCKS';
  const actionColor = isAllow ? '#16a34a' : '#c10007';
  const actionBgColor = isAllow ? '#f0fdf4' : '#fee2e2';
  const actionBorderColor = isAllow ? '#b9f8cf' : '#fca5a5';
  const lineColor = isAllow ? '#008236' : '#c10007';

  return (
    <div className="flex flex-col gap-6 w-full max-w-[900px] px-6 py-6">
      <PageHeader
        title={policy.name}
        subtitle={policy.description}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(`/zone-policy/${policy.id}/edit`)}
              className="flex items-center gap-1.5 px-3 h-8 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-gray-50"
            >
              <Edit2 className="w-4 h-4" />
              <span className="text-sm font-medium">Edit Policy</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 h-8 bg-white border border-[#ffc9c9] rounded-lg hover:bg-[#fff5f5]">
              <Trash2 className="w-4 h-4 text-[#e7000b]" />
              <span className="text-sm font-medium text-[#e7000b]">Delete</span>
            </button>
          </div>
        }
      />

      {/* Main Header Card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="pl-7 pr-7 pt-6 pb-5 space-y-5">
          {/* Badges Row */}
          <div className="flex items-center gap-2">
            <div className="border border-[#f97316] rounded-full px-3.5 py-1">
              <span className="text-xs font-medium text-[#f97316]">Zone Policy</span>
            </div>
            <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-md px-2 py-0.5"><span className="text-[10px] font-medium text-[#6a7282] tracking-[0.12px]">{policy.source}</span></div>
          </div>
        </div>
      </div>

      {/* Source and Destination Card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-7 py-5">
          <div className="flex items-start gap-1">
            {/* Source */}
            <div className="flex flex-col gap-3 w-[172px]">
              <h3 className="text-[15px] font-bold text-[#101828] leading-5">Source</h3>
              <div className="flex flex-col gap-2">
                {policy.sourceBadges && policy.sourceBadges.length > 0 ? (
                  policy.sourceBadges.map((badge, index) => (
                    <BadgeRenderer key={index} badge={badge} />
                  ))
                ) : (
                  <span className="text-xs text-[#9ca3af] italic">No source defined</span>
                )}
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-5 relative mt-16">
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none" className="absolute">
                <line x1="10" y1="10" x2="162" y2="10" stroke={lineColor} strokeWidth="1" />
              </svg>
            </div>

            {/* Allow Badge */}
            <div className="flex-shrink-0 mt-16 -mx-4">
              <div 
                className="px-2 py-[2px] rounded-[10px] border"
                style={{ 
                  backgroundColor: actionBgColor, 
                  borderColor: actionBorderColor 
                }}
              >
                <span className="text-xs font-normal leading-[1.2]" style={{ color: actionColor }}>
                  {policy.action}
                </span>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="flex-shrink-0 w-[172px] h-5 relative mt-16">
              <svg width="172" height="20" viewBox="0 0 172 20" fill="none" className="absolute">
                <line x1="10" y1="10" x2="162" y2="10" stroke={lineColor} strokeWidth="1" />
              </svg>
            </div>

            {/* Destination */}
            <div className="flex flex-col gap-3 w-[220px]">
              <h3 className="text-[15px] font-bold text-[#101828] leading-5">Destination</h3>
              <div className="flex flex-col gap-2">
                {policy.destinationBadges && policy.destinationBadges.length > 0 ? (
                  policy.destinationBadges.map((badge, index) => (
                    <BadgeRenderer key={index} badge={badge} />
                  ))
                ) : (
                  <span className="text-xs text-[#9ca3af] italic">No destination defined</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Controls Card */}
      <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
        <div className="px-7 py-5">
          <h3 className="text-[15px] font-bold text-[#101828] mb-4">Security Controls</h3>

          <div className="space-y-3">
            {/* Category Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Category Blocking</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
              <div className="ml-9 flex flex-wrap gap-1.5">
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">Adult Issues</span>
                </div>
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">Gambling</span>
                </div>
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">Malicious Sites & Phishing</span>
                </div>
              </div>
            </div>

            {/* Application Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Laptop className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Application Blocking</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
              <div className="ml-9 flex flex-wrap gap-1.5">
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">BitTorrent</span>
                </div>
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">NordVPN</span>
                </div>
              </div>
            </div>

            {/* Application Bypass */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Laptop className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#6a7282]">Application Bypass</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2 ml-9">No application bypass rules configured.</p>
            </div>

            {/* Domain Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Domain Blocking</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
              <div className="ml-9 flex flex-wrap gap-1.5">
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">malware-domain.com</span>
                </div>
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                  <span className="text-xs text-[#364153]">phishing-site.xyz</span>
                </div>
              </div>
            </div>

            {/* Domain Bypass */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#6a7282]">Domain Bypass</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2 ml-9">No domain bypass rules configured.</p>
            </div>

            {/* Geo-Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Geo-Blocking</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
              <div className="ml-9">
                <p className="text-xs font-medium text-[#364153] mb-1.5">Block High-Risk Regions:</p>
                <div className="flex flex-wrap gap-1.5">
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                    <span className="text-xs text-[#364153]">Russia</span>
                  </div>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                    <span className="text-xs text-[#364153]">China</span>
                  </div>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                    <span className="text-xs text-[#364153]">Iran</span>
                  </div>
                  <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1">
                    <span className="text-xs text-[#364153]">North Korea</span>
                  </div>
                </div>
              </div>
            </div>

            {/* URL Blocking Section Header */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#101828] mb-0.5">URL Blocking</h4>
              <p className="text-xs text-[#9ca3af]">Risk based URL blocking is not supported on Linux and Chromebooks.</p>
            </div>

            {/* Risk-Based URL Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Risk-Based URL Blocking (AI/NLP)</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
              <p className="text-xs text-[#6a7282] ml-9 mb-2">
                AI-based classification to prevent phishing and typo-squatting.
              </p>
              <div className="ml-9 flex gap-2">
                <div className="flex items-center gap-2 px-2 py-1 bg-white border border-[#e5e7eb] rounded-md">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444] flex items-center justify-center">
                    <span className="text-white text-[8px]">×</span>
                  </div>
                  <span className="text-[13px] font-medium text-[#101828]">Block</span>
                  <span className="text-xs text-[#9ca3af]">High-Risk</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 bg-white border border-[#e5e7eb] rounded-md">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">!</span>
                  </div>
                  <span className="text-[13px] font-medium text-[#101828]">Warn</span>
                  <span className="text-xs text-[#9ca3af]">Medium-Risk</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 bg-white border border-[#e5e7eb] rounded-md">
                  <div className="w-3 h-3 rounded-full bg-[#22c55e] flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                  <span className="text-[13px] font-medium text-[#101828]">Allow</span>
                  <span className="text-xs text-[#9ca3af]">Low-Risk</span>
                </div>
              </div>
            </div>

            {/* URL Allowlist */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#6a7282]">URL Allowlist</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2 ml-9">No URL allowlist rules configured.</p>
            </div>

            {/* Flood Protection */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">Flood Protection</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
            </div>

            {/* IPS */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#f3f4f6] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#6a7282]" />
                </div>
                <span className="text-[13px] font-semibold text-[#101828]">IPS</span>
                <div className="bg-[#dbeafe] border border-[#93c5fd] rounded-md px-1.5 py-0.5">
                  <span className="text-[10px] font-medium text-[#1e40af]">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}