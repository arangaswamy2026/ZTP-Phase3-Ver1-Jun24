import React from 'react';
import { Policy } from './PolicyData';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog';
import { Shield, Lock, Trash2, X } from 'lucide-react';

interface PrivateAccessPolicyModalProps {
  policy: Policy | null;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (policyId: string) => void;
}

export function PrivateAccessPolicyModal({ policy, isOpen, onClose, onDelete }: PrivateAccessPolicyModalProps) {
  if (!policy) return null;

  const isAllow = policy.action === 'Allow';
  const actionText = isAllow ? 'ALLOWS' : 'BLOCKS';
  const actionColorClass = isAllow ? 'text-[#008236]' : 'text-[#c10007]';
  const lineColorClass = isAllow ? 'bg-[#00c950]' : 'bg-[#fb2c36]';
  const badgeColorClass = isAllow ? 'bg-[#dcfce7] text-[#008236]' : 'bg-[#ffe2e2] text-[#c10007]';

  const getTrustLevelDisplay = (trustCondition: string) => {
    const condition = trustCondition.toLowerCase();
    if (condition.includes('high')) return 'High';
    if (condition.includes('compliant') || condition.includes('managed')) return 'Medium';
    if (condition === 'none') return 'None';
    return 'Low';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[60vw] w-[60vw] sm:max-w-[60vw] max-h-[90vh] p-0 gap-0 bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-5 space-y-5 shrink-0 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#eff6ff] text-[#155dfc] border-[#bedbff] px-2.5 py-1 text-xs font-medium">
              Private Access Policy
            </Badge>
            <Badge className="bg-[#f0fdf4] text-[#008236] border-[#b9f8cf] px-2.5 py-1 text-xs font-medium hover:bg-[#f0fdf4]">
              Active
            </Badge>
          </div>
          <div>
            <DialogTitle className="text-2xl font-semibold text-[#101828] mb-0.5">
              {policy.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6a7282]">
              {policy.description}
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-white">
          {/* What this policy does */}
          <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-4 space-y-2">
            <p className="text-sm font-medium text-[#101828]">What this policy does:</p>
            <p className="text-sm text-[#364153]">
              This policy <span className={`font-bold ${actionColorClass}`}>{actionText}</span> traffic initiated by{' '}
              <span className="font-semibold text-[#101828]">{policy.identity}</span> targeting{' '}
              <span className="font-semibold text-[#101828]">{policy.destination}</span>.
            </p>
            {policy.trustCondition && policy.trustCondition !== 'None' && (
              <p className="text-sm text-[#364153]">
                Traffic is only allowed if the device/user meets the{' '}
                <span className="font-semibold text-[#432dd7]">"{policy.trustCondition}"</span> condition.
              </p>
            )}
          </div>

          {/* Traffic Flow */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#101828]">Traffic Flow</h4>
            <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
              <div className="flex items-center justify-between">
                {/* Source */}
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#4a5565]" />
                  </div>
                  <span className="text-xs font-medium text-[#101828] text-center">{policy.identity}</span>
                  <span className="text-[10px] text-[#6a7282] uppercase tracking-wide">Source</span>
                </div>

                {/* Action */}
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div className={`h-0.5 w-full ${lineColorClass}`} />
                  <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${badgeColorClass} tracking-wide`}>
                    {policy.action.toUpperCase()}
                  </div>
                </div>

                {/* Destination */}
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                    <Lock className="w-4 h-4 text-[#4a5565]" />
                  </div>
                  <span className="text-xs font-medium text-[#101828] text-center">{policy.destination}</span>
                  <span className="text-[10px] text-[#6a7282] uppercase tracking-wide">Destination</span>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#101828]">Policy Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f9fafb] rounded-lg p-3 space-y-1">
                <p className="text-xs font-medium text-[#6a7282] uppercase">Source</p>
                <p className="text-sm font-medium text-[#101828]">{policy.identity}</p>
              </div>
              <div className="bg-[#f9fafb] rounded-lg p-3 space-y-1">
                <p className="text-xs font-medium text-[#6a7282] uppercase">Destination</p>
                <p className="text-sm font-medium text-[#101828]">{policy.destination}</p>
              </div>
              <div className="bg-[#f9fafb] rounded-lg p-3 space-y-1">
                <p className="text-xs font-medium text-[#6a7282] uppercase">Trust Level</p>
                <p className="text-sm font-medium text-[#101828]">
                  {getTrustLevelDisplay(policy.trustCondition)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Sticky */}
        <DialogFooter className="bg-[#f9fafb] border-t border-[#f3f4f6] px-6 py-6 flex flex-row justify-between items-center shrink-0">
          <Button
            onClick={() => onDelete && onDelete(policy.id)}
            className="bg-[#d4183d] hover:bg-[#b01430] text-white gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
          <Button onClick={onClose} variant="outline" className="border-[rgba(0,0,0,0.1)]">
            Close
          </Button>
        </DialogFooter>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 opacity-70 hover:opacity-100 rounded-sm p-0.5 z-10"
        >
          <X className="w-4 h-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
}