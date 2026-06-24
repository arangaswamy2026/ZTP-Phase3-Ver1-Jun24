import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Globe, Edit, Trash2, Copy, CheckCircle2, Shield, AlertCircle } from 'lucide-react';

interface InternetAccessPolicy {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  threatProtection: {
    botsAndCryptomining: boolean;
    dangerousConfiguration: boolean;
    dangerous3rdParty: boolean;
    dangerousNameserver: boolean;
    maliciousSSL: boolean;
    malwareAndRansomware: boolean;
    malwareC2: boolean;
    phishing: boolean;
    riskyDNS: boolean;
    spamVoIP: boolean;
    otherKnownBad: boolean;
    newDomains: boolean;
  };
  filteringExceptions: {
    categoryBlocking: string[];
    applicationBlocking: string[];
    applicationBypass: string[];
    domainBlocking: string[];
    geoBlocking: string[];
    riskBasedBlocking: {
      block: string[];
      warn: string[];
      allow: string[];
    };
    urlAllowlist: string[];
  };
  createdAt?: string;
  modifiedAt?: string;
}

interface InternetAccessPolicyDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  policy: InternetAccessPolicy | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
}

export function InternetAccessPolicyDetailsModal({
  open,
  onOpenChange,
  policy,
  onEdit,
  onDelete,
  onDuplicate,
}: InternetAccessPolicyDetailsModalProps) {
  if (!policy) return null;

  const threatProtectionCount = Object.values(policy.threatProtection).filter(Boolean).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[700px] max-h-[90vh] overflow-y-auto p-0" aria-describedby={undefined}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#e5e7eb] px-[24px] py-[20px]">
          {/* Back Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-1.5 text-[#6a7282] hover:text-[#101828] transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M12.6667 8H3.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M8 12.6667L3.33333 8L8 3.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
            <span className="font-medium text-sm">Back to Access Policies</span>
          </button>

          <div className="flex items-start justify-between gap-[16px]">
            <div className="flex flex-col gap-[12px] flex-1">
              {/* Badges Row */}
              <div className="flex items-center gap-[8px]">
                <span className="inline-flex items-center rounded-full border border-[#c4b5fd] bg-[#ede9fe] px-[13px] py-[4px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#7c3aed]">
                  Internet Policy
                </span>
                <span className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f3f4f6] px-[9px] py-[3px] font-['Inter',sans-serif] font-medium text-[10px] leading-[15px] tracking-[0.12px] text-[#6a7282]">
                  Default
                </span>
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-[4px]">
                <DialogTitle className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                  {policy.name}
                </DialogTitle>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  {policy.description}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-[8px]">
              <Button
                variant="outline"
                size="sm"
                className="gap-[6px] rounded-[8px] border-black/10"
                onClick={() => {
                  onEdit?.(policy.id);
                  onOpenChange(false);
                }}
              >
                <Edit className="w-[14px] h-[14px]" />
                <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
                  Edit Policy
                </span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-[6px] rounded-[8px] border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => {
                  onDelete?.(policy.id);
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
        </div>

        {/* Content */}
        <div className="px-[24px] py-[24px] flex flex-col gap-[24px]">
          {/* Threat Protection */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
                Threat Protection
              </span>
              <span className="inline-flex items-center rounded-[6px] border border-[#b9f8cf] bg-[#dcfce7] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#008236]">
                {threatProtectionCount} Enabled
              </span>
            </div>
            <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[8px]">
              {Object.entries(policy.threatProtection).map(([key, enabled]) => {
                const labels: Record<string, string> = {
                  botsAndCryptomining: 'Bots / Cryptomining',
                  dangerousConfiguration: 'Dangerous Configuration / History',
                  dangerous3rdParty: 'Dangerous 3rd party infrastructure',
                  dangerousNameserver: 'Dangerous Nameserver',
                  maliciousSSL: 'Malicious SSL Cert',
                  malwareAndRansomware: 'Malware & Ransomware',
                  malwareC2: 'Malware C2',
                  phishing: 'Phishing',
                  riskyDNS: 'Risky DNS Transactions',
                  spamVoIP: 'Spam / VoIP fraud / Spyware',
                  otherKnownBad: 'Other Known Bad (Community Intelligence)',
                  newDomains: 'New Domains',
                };

                return (
                  <div key={key} className="flex items-center justify-between py-[6px]">
                    <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                      {labels[key]}
                    </span>
                    {enabled ? (
                      <CheckCircle2 className="w-[16px] h-[16px] text-[#16a34a]" />
                    ) : (
                      <div className="w-[16px] h-[16px] rounded-full border-2 border-[#d1d5db]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filtering & Exceptions */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
              Filtering & Exceptions
            </span>

            {/* Category Blocking */}
            {policy.filteringExceptions.categoryBlocking.length > 0 && (
              <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <Shield className="w-[16px] h-[16px] text-[#8200DB]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                    Category Blocking
                  </span>
                  <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#1e40af]">
                    Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-[6px] mt-[4px]">
                  {policy.filteringExceptions.categoryBlocking.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[2px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] mt-[4px]">
                  Tip: Block 'Social Media' tags for increasing focus. Block for others
                </span>
              </div>
            )}

            {/* Application Blocking */}
            {policy.filteringExceptions.applicationBlocking.length > 0 && (
              <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <Shield className="w-[16px] h-[16px] text-[#1447E6]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                    Application Blocking
                  </span>
                  <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#1e40af]">
                    Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-[6px] mt-[4px]">
                  {policy.filteringExceptions.applicationBlocking.map((app, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[2px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Geo-Blocking */}
            {policy.filteringExceptions.geoBlocking.length > 0 && (
              <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <Globe className="w-[16px] h-[16px] text-[#dc2626]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                    Geo-Blocking
                  </span>
                  <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#1e40af]">
                    Active
                  </span>
                </div>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  Block High-Risk Regions: {policy.filteringExceptions.geoBlocking.join(', ')}
                </span>
              </div>
            )}

            {/* Risk-Based URL Blocking (AHLR) */}
            {(policy.filteringExceptions.riskBasedBlocking.block.length > 0 ||
              policy.filteringExceptions.riskBasedBlocking.warn.length > 0) && (
              <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <AlertCircle className="w-[16px] h-[16px] text-[#f59e0b]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#101828]">
                    Risk-Based URL Blocking (AHLR)
                  </span>
                  <span className="inline-flex items-center rounded-[6px] border border-[#dbeafe] bg-[#eff6ff] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#1e40af]">
                    Active
                  </span>
                </div>
                <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                  AI-based classification to prevent harmful and risky capabilities with reputation
                </span>
                <div className="flex items-center gap-[12px]">
                  {policy.filteringExceptions.riskBasedBlocking.block.length > 0 && (
                    <div className="flex items-center gap-[6px]">
                      <input type="radio" checked readOnly className="w-[16px] h-[16px]" />
                      <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153]">
                        Block
                      </span>
                      <span className="inline-flex items-center rounded-[6px] border border-[#fca5a5] bg-[#fee2e2] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#dc2626]">
                        {policy.filteringExceptions.riskBasedBlocking.block.join(', ')}
                      </span>
                    </div>
                  )}
                  {policy.filteringExceptions.riskBasedBlocking.warn.length > 0 && (
                    <div className="flex items-center gap-[6px]">
                      <input type="radio" checked={false} readOnly className="w-[16px] h-[16px]" />
                      <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153]">
                        Warn
                      </span>
                      <span className="inline-flex items-center rounded-[6px] border border-[#fde68a] bg-[#fef9c3] px-[6px] py-[1px] font-['Inter',sans-serif] font-normal text-[11px] leading-[16px] text-[#a16207]">
                        {policy.filteringExceptions.riskBasedBlocking.warn.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="flex flex-col gap-[12px]">
            <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] tracking-[-0.31px] text-[#101828]">
              Additional Information
            </span>
            <div className="rounded-[10px] border border-[#e5e7eb] bg-white p-[16px] flex flex-col gap-[12px]">
              <div className="flex items-center justify-between">
                <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#6a7282]">
                  Created
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  {policy.createdAt || 'Feb 20, 2024'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#6a7282]">
                  Last Modified
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                  {policy.modifiedAt || 'Mar 2, 2024'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}