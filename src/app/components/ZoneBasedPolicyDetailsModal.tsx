import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, Edit2, Copy, Trash2, Shield, Laptop, Globe } from 'lucide-react';
import svgPaths from '../imports/svg-7hotspt58r';

interface ZoneBasedPolicy {
  id: string;
  name: string;
  description: string;
  sourceZone: string;
  destinationZone: string;
  action: 'allow' | 'deny';
  enabled: boolean;
  sourceAddress?: string;
  destinationAddress?: string;
  sourcePort?: string;
  destinationPort?: string;
  appliedProfiles?: string[];
  createdAt?: string;
  modifiedAt?: string;
}

interface ZoneBasedPolicyDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  policy: ZoneBasedPolicy | null;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
}

export function ZoneBasedPolicyDetailsModal({
  open,
  onOpenChange,
  policy,
  onEdit,
  onDelete,
  onDuplicate,
}: ZoneBasedPolicyDetailsModalProps) {
  if (!policy) return null;

  const isAllow = policy.action === 'allow';
  const actionText = isAllow ? 'ALLOWS' : 'BLOCKS';
  const actionColorClass = isAllow ? 'text-[#008236]' : 'text-[#c10007]';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[544px] p-0 gap-0 bg-white overflow-hidden flex flex-col" aria-describedby={undefined}>
        <DialogTitle className="sr-only">{policy.name}</DialogTitle>

        {/* Header Section */}
        <div className="p-6 pb-5 space-y-4">
          {/* Back Button */}
          <button 
            onClick={() => onOpenChange(false)}
            className="flex items-center gap-1.5 text-[#6a7282] hover:text-[#101828] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-medium text-sm">Back to Access Policies</span>
          </button>

          {/* Badges and Actions Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge className="bg-white border border-[#f97316] text-[#f97316] px-3.5 py-1 text-xs font-medium hover:bg-white rounded-full">
                Zone Policy
              </Badge>
              <Badge className="bg-[#f3f4f6] border border-[#e5e7eb] text-[#6a7282] px-2 py-0.5 text-[10px] font-medium hover:bg-[#f3f4f6] rounded-md tracking-[0.12px]">
                Default
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-1.5 h-8 px-3"
                onClick={() => onEdit?.(policy.id)}
              >
                <Edit2 className="w-4 h-4" />
                <span className="text-sm font-medium">Edit Policy</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-1.5 h-8 px-3 border-[#ffc9c9] text-[#e7000b] hover:bg-[#fff5f5]"
                onClick={() => {
                  onDelete?.(policy.id);
                  onOpenChange(false);
                }}
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm font-medium">Delete</span>
              </Button>
            </div>
          </div>

          {/* Title and Description */}
          <div>
            <h2 className="text-xl font-bold text-[#101828] leading-7 mb-1">
              {policy.name}
            </h2>
            <p className="text-sm text-[#6a7282] leading-5">
              {policy.description}
            </p>
          </div>

          {/* What this policy does */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-4">
            <p className="text-sm font-semibold text-[#101828] mb-1.5">What this policy does:</p>
            <p className="text-sm text-[#364153] leading-5">
              This policy <span className={`font-bold ${actionColorClass}`}>{actionText}</span> traffic initiated by{' '}
              <span className="font-semibold text-[#101828]">{policy.sourceZone}</span> targeting{' '}
              <span className="font-semibold text-[#101828]">{policy.destinationZone}</span>.
            </p>
          </div>
        </div>

        {/* Source and Destination Section */}
        <div className="px-6 pb-5">
          <div className="grid grid-cols-2 gap-8">
            {/* Source */}
            <div>
              <h3 className="text-sm font-bold text-[#101828] mb-3">Source</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">IP Range:</span>
                  <span className="text-xs text-[#364153] font-medium">
                    {policy.sourceAddress || '192.168.1.0/24'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">Protocol:</span>
                  <span className="text-xs text-[#364153]">All</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">Ports:</span>
                  <span className="text-xs text-[#364153]">{policy.sourcePort || 'Any'}</span>
                </div>
              </div>
            </div>

            {/* Allow Badge Center */}
            <div className="col-span-2 flex items-center justify-center -my-2">
              <div className="flex items-center gap-3">
                <div className={`h-px w-24 ${isAllow ? 'bg-[#22c55e]' : 'bg-[#dc2626]'}`}></div>
                <Badge className={`${isAllow ? 'bg-[#f0fdf4] border-[#b9f8cf] text-[#008236]' : 'bg-[#fee2e2] border-[#fca5a5] text-[#dc2626]'} border px-3 py-1 text-xs font-medium rounded-lg`}>
                  {policy.action === 'allow' ? 'Allow' : 'Deny'}
                </Badge>
                <div className={`h-px w-24 ${isAllow ? 'bg-[#22c55e]' : 'bg-[#dc2626]'}`}></div>
              </div>
            </div>

            {/* Destination */}
            <div className="col-start-2">
              <h3 className="text-sm font-bold text-[#101828] mb-3">Destination</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">IP Range:</span>
                  <span className="text-xs text-[#364153] font-medium">
                    {policy.destinationAddress || '192.168.1.0/24'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">Protocol:</span>
                  <span className="text-xs text-[#364153]">All</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#6a7282]">Ports:</span>
                  <span className="text-xs text-[#364153]">{policy.destinationPort || '22, 50-250'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Controls Section */}
        <div className="px-6 pb-6">
          <h3 className="text-sm font-bold text-[#101828] mb-4">Security Controls</h3>

          <div className="space-y-3">
            {/* Category Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">Category Blocking</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  Adult Issues
                </Badge>
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  Gambling
                </Badge>
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  Malicious Sites & Phishing
                </Badge>
              </div>
            </div>

            {/* Application Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Laptop className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">Application Blocking</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  BitTorrent
                </Badge>
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  NordVPN
                </Badge>
              </div>
            </div>

            {/* Application Bypass */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f9fafb] flex items-center justify-center">
                  <Laptop className="w-3.5 h-3.5 text-[#6a7282]" />
                </div>
                <span className="text-sm font-semibold text-[#6a7282]">Application Bypass</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2">No application bypass rules configured.</p>
            </div>

            {/* Domain Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">Domain Blocking</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  malware-domain.com
                </Badge>
                <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                  phishing-site.xyz
                </Badge>
              </div>
            </div>

            {/* Domain Bypass */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f9fafb] flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#6a7282]" />
                </div>
                <span className="text-sm font-semibold text-[#6a7282]">Domain Bypass</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2">No domain bypass rules configured.</p>
            </div>

            {/* Geo-Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">Geo-Blocking</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-[#364153]">Block High-Risk Regions:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                    Russia
                  </Badge>
                  <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                    China
                  </Badge>
                  <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                    Iran
                  </Badge>
                  <Badge variant="secondary" className="bg-[#f9fafb] border border-[#e5e7eb] text-[#364153] text-xs font-normal hover:bg-[#f9fafb]">
                    North Korea
                  </Badge>
                </div>
              </div>
            </div>

            {/* URL Blocking Header */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#101828] mb-1">URL Blocking</h4>
              <p className="text-xs text-[#9ca3af]">Risk based URL blocking is not supported on Linux and Chromebooks.</p>
            </div>

            {/* Risk-Based URL Blocking */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14.6773 13.3427">
                    <path d={svgPaths.p19ed2c80} stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#101828]">Risk-Based URL Blocking (AI/NLP)</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
              <p className="text-xs text-[#6a7282] mb-3">AI-based classification to prevent phishing and typo-squatting.</p>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-[#e5e7eb] rounded-md text-xs">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] flex items-center justify-center">
                    <span className="text-white text-[8px]">×</span>
                  </span>
                  <span className="font-medium text-[#101828]">Block</span>
                  <span className="text-[#9ca3af]">High-Risk</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-[#e5e7eb] rounded-md text-xs">
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b] flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">!</span>
                  </span>
                  <span className="font-medium text-[#101828]">Warn</span>
                  <span className="text-[#9ca3af]">Medium-Risk</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-[#e5e7eb] rounded-md text-xs">
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </span>
                  <span className="font-medium text-[#101828]">Allow</span>
                  <span className="text-[#9ca3af]">Low-Risk</span>
                </div>
              </div>
            </div>

            {/* URL Allowlist */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f9fafb] flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#6a7282]" />
                </div>
                <span className="text-sm font-semibold text-[#6a7282]">URL Allowlist</span>
              </div>
              <p className="text-xs italic text-[#9ca3af] mt-2">No URL allowlist rules configured.</p>
            </div>

            {/* Flood Protection */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">Flood Protection</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
            </div>

            {/* IPS */}
            <div className="border border-[#e5e7eb] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#f0fdf4] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <span className="text-sm font-semibold text-[#101828]">IPS</span>
                <Badge className="bg-[#dbeafe] border border-[#93c5fd] text-[#1e40af] px-2 py-0.5 text-[10px] font-medium hover:bg-[#dbeafe] ml-auto">
                  Active
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}