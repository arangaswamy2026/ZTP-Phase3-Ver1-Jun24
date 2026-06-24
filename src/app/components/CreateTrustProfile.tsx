import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  ArrowLeft,
  Ban,
  ArrowDown,
  Minus,
  ChevronUp,
  ChevronDown,
  Info,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

import svgPaths from "../imports/svg-t0fuyfnnfj";

// ── Trust Level Slider Steps ─────────────────────────────────────────
const TRUST_LEVELS = [
  { value: 'always-deny', label: 'ALWAYS DENY' },
  { value: 'low', label: 'LOW TL' },
  { value: 'medium', label: 'MEDIUM TL' },
  { value: 'no-effect', label: 'NO EFFECT' },
] as const;

function getTrustLevelIndex(level: string): number {
  const idx = TRUST_LEVELS.findIndex((tl) => tl.value === level);
  return idx >= 0 ? idx : 3;
}

function getConsequenceInfo(level: string) {
  switch (level) {
    case 'always-deny':
      return {
        title: 'Always Deny',
        description: "If this Factor is not satisfied, the device's access will be denied entirely.",
        dotColor: 'bg-[#364153]',
        titleColor: 'text-[#364153]',
      };
    case 'low':
      return {
        title: 'Low Trust Level',
        description: "If this Factor is not satisfied, the device's Trust Level will be set to low.",
        dotColor: 'bg-[#364153]',
        titleColor: 'text-[#364153]',
      };
    case 'medium':
      return {
        title: 'Medium Trust Level',
        description: "If this Factor is not satisfied, the device's Trust Level will be set to medium.",
        dotColor: 'bg-[#364153]',
        titleColor: 'text-[#364153]',
      };
    case 'no-effect':
      return {
        title: 'No Effect',
        description: 'If this Factor is not satisfied, it will have no impact on the Trust Level.',
        dotColor: 'bg-[#9ca3af]',
        titleColor: 'text-[#6a7282]',
      };
    default:
      return {
        title: 'No Effect',
        description: 'If this Factor is not satisfied, it will have no impact on the Trust Level.',
        dotColor: 'bg-[#9ca3af]',
        titleColor: 'text-[#6a7282]',
      };
  }
}

// ── Trust Level Slider ───────────────────────────────────────────────
interface TrustLevelSliderProps {
  value: string;
  onChange: (value: string) => void;
}

function TrustLevelSlider({ value, onChange }: TrustLevelSliderProps) {
  const currentIndex = getTrustLevelIndex(value);
  const totalSteps = TRUST_LEVELS.length - 1;
  const stepWidth = 320 / totalSteps; // fixed 320px width

  return (
    <div className="flex flex-col gap-[0px] w-[350px]">
      {/* Label */}
      <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282] mb-[12px]">
        Select trust effect if the Trust factor check fails
      </p>
      {/* Slider track */}
      <div className="relative h-[40px] flex items-center w-[320px] mx-[6px]">
        {/* Background track */}
        <div className="absolute left-0 right-0 h-[4px] bg-[#e5e7eb] rounded-full" />
        {/* Filled track */}
        <div
          className="absolute left-0 h-[4px] rounded-full bg-[#1447E6]"
          style={{ width: `${currentIndex * stepWidth}px` }}
        />
        {/* Clickable step markers */}
        {TRUST_LEVELS.map((level, idx) => {
          const left = idx * stepWidth;
          const isActive = idx <= currentIndex;
          return (
            <button
              key={level.value}
              onClick={() => onChange(level.value)}
              className={`absolute w-[12px] h-[12px] rounded-full border-2 transition-colors ${
                isActive
                  ? 'bg-[#1447E6] border-[#1447E6]'
                  : 'bg-white border-[#d1d5db]'
              }`}
              style={{ left: `${left}px`, transform: 'translateX(-50%)' }}
            />
          );
        })}
        {/* Draggable thumb */}
        <div
          className="absolute w-[20px] h-[20px] rounded-full bg-white border-2 border-[#1447E6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] cursor-grab"
          style={{ left: `${currentIndex * stepWidth}px`, transform: 'translateX(-50%)' }}
        />
      </div>
      {/* Labels beneath slider */}
      <div className="flex items-start justify-between w-[350px] mt-[4px]">
        {TRUST_LEVELS.map((level, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={level.value}
              onClick={() => onChange(level.value)}
              className="cursor-pointer flex flex-col items-center"
              style={{
                width: idx === 0 || idx === totalSteps ? 'auto' : undefined,
              }}
            >
              {isSelected ? (
                <div className="px-[8px] py-[7px] rounded-[4px] border border-[#1447e6] bg-[#eff6ff]">
                  <span className="font-['Inter',sans-serif] font-medium text-[10px] leading-[14px] text-[#1447e6] whitespace-nowrap">
                    {level.label}
                  </span>
                </div>
              ) : (
                <span className="font-['Inter',sans-serif] font-medium text-[10px] leading-[14px] tracking-[0.3px] text-[#9ca3af] whitespace-nowrap py-[7px]">
                  {level.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Trust Factor Card ───────────────────────────────────────────────
interface TrustFactorCardItemProps {
  name: string;
  description: string;
  enabled: boolean;
  trustLevel: string;
  expanded: boolean;
  requiresConfig: boolean;
  configNote?: string;
  onToggle: (enabled: boolean) => void;
  onTrustLevelChange: (level: string) => void;
  onToggleExpand: () => void;
}

function TrustFactorCardItem({
  name,
  description,
  enabled,
  trustLevel,
  expanded,
  requiresConfig,
  configNote,
  onToggle,
  onTrustLevelChange,
  onToggleExpand,
}: TrustFactorCardItemProps) {
  const consequence = getConsequenceInfo(trustLevel);

  return (
    <div
      className={`flex flex-col rounded-[8px] border transition-all ${
        enabled ? 'border-[#e5e7eb] bg-white' : 'border-[#e5e7eb] bg-[#f9fafb]'
      }`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-[16px] h-[56px]">
        <div className="flex items-center gap-[8px] flex-1 min-w-0">
          <button
            onClick={onToggleExpand}
            className="flex items-center justify-center shrink-0 size-[20px] text-[#6a7282] hover:text-[#101828]"
          >
            {expanded ? (
              <ChevronUp className="w-[16px] h-[16px]" />
            ) : (
              <ChevronDown className="w-[16px] h-[16px]" />
            )}
          </button>
          <div className="flex flex-col items-start min-w-0">
            <div className="flex items-center gap-[8px]">
              <span
                className={`font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] ${
                  enabled ? 'text-[#101828]' : 'text-[#9ca3af]'
                }`}
              >
                {name}
              </span>
              {requiresConfig && (
                <div className="flex items-center gap-[4px] px-[8px] py-[2px] rounded-[4px] bg-[#FFF9E6] border border-[#FFE08A]">
                  <Info className="w-[12px] h-[12px] text-[#FF9500]" />
                  <span className="font-['Inter',sans-serif] font-medium text-[10px] leading-[14px] text-[#FF9500] uppercase">
                    Requires Config
                  </span>
                </div>
              )}
            </div>
            <p className={`font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] truncate ${enabled ? 'text-[#6a7282]' : 'text-[#9ca3af]'}`}>
              {description}
            </p>
          </div>
        </div>
        {/* Toggle */}
        <button
          onClick={() => onToggle(!enabled)}
          className={`relative inline-flex h-[24px] w-[44px] items-center rounded-full transition-colors shrink-0 ml-[16px] ${
            enabled ? 'bg-[#1447E6]' : 'bg-[#d1d5db]'
          }`}
        >
          <span
            className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-[23px]' : 'translate-x-[3px]'
            }`}
          />
        </button>
      </div>

      {/* Expanded content */}
      {expanded && enabled && (
        <div className="border-t border-[#f3f4f6] pl-[16px] pt-[5px]">
          <div className="bg-white rounded-[8px]">
            <div className="flex gap-[12px] items-start pl-[16px] py-[16px]">
              {/* Left panel - consequence info */}
              <div className="bg-[#f9fafb] shrink-0 p-[10px]">
                <div className="flex flex-col gap-[12px] w-[435px]">
                  <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#6a7282]">
                    If this check fails, set device trust level to:
                  </p>
                  <div className="flex items-center h-[20px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153] whitespace-nowrap">
                      High Trust Level
                    </span>
                    <div className="flex items-center justify-center w-[54px]">
                      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p1eb4c200} fill="#A1B3D5" />
                      </svg>
                    </div>
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153] whitespace-nowrap">
                      {consequence.title}
                    </span>
                  </div>
                  <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#6a7282] w-[287px]">
                    {consequence.description}
                  </p>
                </div>
              </div>
              {/* Right panel - slider */}
              <TrustLevelSlider value={trustLevel} onChange={onTrustLevelChange} />
            </div>
          </div>
        </div>
      )}

      {/* Collapsed but disabled state */}
      {expanded && !enabled && (
        <div className="flex flex-col gap-[8px] px-[16px] pb-[16px] pt-[4px] border-t border-[#f3f4f6]">
          <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#9ca3af] italic">
            Enable this trust factor to configure its failure behavior.
          </span>
          {requiresConfig && configNote && (
            <div className="flex items-start gap-[8px] p-[12px] rounded-[6px] bg-[#FFF9E6] border border-[#FFE08A]">
              <Info className="w-[16px] h-[16px] text-[#FF9500] shrink-0 mt-[2px]" />
              <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#9a6c00]">
                {configNote}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── All Trust Factors with descriptions ──────────────────────────────
export const ALL_TRUST_FACTORS: Array<{ 
  name: string; 
  description: string; 
  enabledByDefault: boolean;
  defaultLevel: string;
  requiresConfig: boolean;
  configNote?: string;
}> = [
  {
    name: 'Disk Encryption',
    description:
      'Verifies that full disk encryption (e.g., BitLocker, FileVault) is enabled on the device to protect data at rest.',
    enabledByDefault: true,
    defaultLevel: 'low', // Critical - drops to low if fails
    requiresConfig: false,
  },
  {
    name: 'Antivirus Running',
    description:
      'Checks that an active antivirus or endpoint protection solution is running on the device.',
    enabledByDefault: true,
    defaultLevel: 'low', // Critical - drops to low if fails
    requiresConfig: false,
  },
  {
    name: 'Firewall',
    description:
      'Ensures the device firewall is enabled and actively blocking unauthorized inbound connections.',
    enabledByDefault: true,
    defaultLevel: 'low', // Critical - drops to low if fails
    requiresConfig: false,
  },
  {
    name: 'Not Jailbroken',
    description:
      'Verifies that the device has not been jailbroken or rooted, which could compromise security controls.',
    enabledByDefault: true,
    defaultLevel: 'always-deny', // Most critical - deny access if jailbroken
    requiresConfig: false,
  },
  {
    name: 'Operating System Version',
    description:
      'Validates that the device operating system meets the minimum required version for security compliance.',
    enabledByDefault: true,
    defaultLevel: 'medium', // Important but not critical
    requiresConfig: false,
  },
  {
    name: 'Auto Update',
    description:
      'Verifies that automatic software updates are enabled on the device to ensure security patches are applied promptly.',
    enabledByDefault: true,
    defaultLevel: 'medium', // Important but not critical
    requiresConfig: false,
  },
  {
    name: 'Screen Lock',
    description:
      'Checks that a screen lock (PIN, password, or biometric) is configured and active on the device.',
    enabledByDefault: true,
    defaultLevel: 'medium', // Important but not critical
    requiresConfig: false,
  },
  {
    name: 'Application Check',
    description:
      'Checks whether specific required applications are running on the device. If the process is left blank for an operating system, that operating system will not check for the app.',
    enabledByDefault: false, // Requires admin to specify which apps
    defaultLevel: 'medium',
    requiresConfig: true,
    configNote: 'Specify required applications before enabling',
  },
  {
    name: 'Multi-Factor Authentication',
    description:
      'Ensures the user has multi-factor authentication configured and active on their account.',
    enabledByDefault: false, // May require integration setup
    defaultLevel: 'low',
    requiresConfig: true,
    configNote: 'Configure MFA integration settings',
  },
  {
    name: 'Chrome Browser Version',
    description:
      'Checks that the Chrome browser installed on the device meets the minimum required version for security compliance.',
    enabledByDefault: false, // Optional - not all orgs use Chrome
    defaultLevel: 'no-effect',
    requiresConfig: false,
  },
];

// ── Trust Profile Modal ──────────────────────────────────────────────
interface TrustProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TrustProfileModal({ open, onOpenChange }: TrustProfileModalProps) {
  const [trustFactors, setTrustFactors] = useState<
    Array<{
      name: string;
      description: string;
      enabled: boolean;
      level: string;
      expanded: boolean;
    }>
  >(
    ALL_TRUST_FACTORS.map((tf) => ({
      name: tf.name,
      description: tf.description,
      enabled: tf.enabledByDefault,
      level: tf.defaultLevel,
      expanded: false,
    }))
  );

  const handleToggle = (index: number, enabled: boolean) => {
    const updated = [...trustFactors];
    updated[index].enabled = enabled;
    setTrustFactors(updated);
  };

  const handleTrustLevelChange = (index: number, level: string) => {
    const updated = [...trustFactors];
    updated[index].level = level;
    setTrustFactors(updated);
  };

  const handleToggleExpand = (index: number) => {
    const updated = [...trustFactors];
    updated[index].expanded = !updated[index].expanded;
    setTrustFactors(updated);
  };

  const enabledCount = trustFactors.filter((f) => f.enabled).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[80vw] max-h-[85vh] overflow-y-auto p-0 gap-0" aria-describedby={undefined}>
        <DialogTitle className="sr-only">Default Trust Profile</DialogTitle>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-[24px] pb-[16px] border-b border-[#e5e7eb] sticky top-0 bg-white z-10">
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-['Inter',sans-serif] font-bold text-[20px] leading-[28px] text-[#101828]">
              Default Trust Profile
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
              Configure which security checks to enforce and what happens when a device fails each check
            </p>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex items-center justify-center p-[8px] rounded-[8px] hover:bg-[#f3f4f6] transition-colors"
          >
            <X className="w-[20px] h-[20px] text-[#6a7282]" />
          </button>
        </div>

        {/* Trust Factors List */}
        <div className="flex flex-col gap-[16px] p-[24px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[22px] text-[#101828]">
                Trust Factors
              </h3>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                For each factor, choose what trust level the device drops to when the check is not satisfied
              </p>
            </div>
            <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#6a7282]">
              {enabledCount} of {trustFactors.length} enabled
            </span>
          </div>

          <div className="flex flex-col gap-[10px]">
            {trustFactors.map((factor, index) => (
              <TrustFactorCardItem
                key={factor.name}
                name={factor.name}
                description={factor.description}
                enabled={factor.enabled}
                trustLevel={factor.level}
                expanded={factor.expanded}
                requiresConfig={ALL_TRUST_FACTORS[index].requiresConfig}
                configNote={ALL_TRUST_FACTORS[index].configNote}
                onToggle={(enabled) => handleToggle(index, enabled)}
                onTrustLevelChange={(level) => handleTrustLevelChange(index, level)}
                onToggleExpand={() => handleToggleExpand(index)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] p-[24px] pt-[16px] border-t border-[#e5e7eb] sticky bottom-0 bg-white">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-[8px] border-[#d1d5db] px-[20px]"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
              Cancel
            </span>
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="rounded-[8px] bg-[#1447E6] hover:bg-[#0f35b3] px-[20px]"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
              Save Changes
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── Main Component ───────────────────────────────────────────────────
interface CreateTrustProfileProps {
  onBack: () => void;
  onComplete: () => void;
}

export function CreateTrustProfile({ onBack, onComplete }: CreateTrustProfileProps) {
  const [trustFactors, setTrustFactors] = useState<
    Array<{
      name: string;
      description: string;
      enabled: boolean;
      level: string;
      expanded: boolean;
    }>
  >(
    ALL_TRUST_FACTORS.map((tf) => ({
      name: tf.name,
      description: tf.description,
      enabled: tf.enabledByDefault,
      level: tf.defaultLevel,
      expanded: false,
    }))
  );

  const handleToggle = (index: number, enabled: boolean) => {
    const updated = [...trustFactors];
    updated[index].enabled = enabled;
    setTrustFactors(updated);
  };

  const handleTrustLevelChange = (index: number, level: string) => {
    const updated = [...trustFactors];
    updated[index].level = level;
    setTrustFactors(updated);
  };

  const handleToggleExpand = (index: number) => {
    const updated = [...trustFactors];
    updated[index].expanded = !updated[index].expanded;
    setTrustFactors(updated);
  };

  const enabledCount = trustFactors.filter((f) => f.enabled).length;

  const handleCreateProfile = () => {
    onComplete();
  };

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1200px] mx-auto p-[32px]">
      {/* Header with Back Button */}
      <div className="flex flex-col gap-[16px]">
        <button
          onClick={onBack}
          className="flex items-center gap-[8px] w-fit group"
        >
          <ArrowLeft className="w-[16px] h-[16px] text-[#364153]" />
          <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153] group-hover:underline">
            Back to Profiles
          </span>
        </button>
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-['Inter',sans-serif] font-bold text-[28px] leading-[36px] tracking-[-0.5px] text-[#101828]">Default Trust Profile</h1>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#6a7282]">
            Configure which security checks to enforce and what happens when a device fails each check
          </p>
        </div>
      </div>

      {/* Trust Factors */}
      <div className="flex flex-col gap-[24px]">
        {/* Trust Factors Section */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <h2 className="font-['Inter',sans-serif] font-bold text-[20px] leading-[26px] text-[#101828]">
                Trust Factors
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                For each factor, choose what trust level the device drops to when the check is not satisfied
              </p>
            </div>
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#6a7282]">
              {enabledCount} of {trustFactors.length} enabled
            </span>
          </div>

          {/* Trust Factor Cards */}
          <div className="flex flex-col gap-[12px]">
            {trustFactors.map((factor, index) => (
              <TrustFactorCardItem
                key={factor.name}
                name={factor.name}
                description={factor.description}
                enabled={factor.enabled}
                trustLevel={factor.level}
                expanded={factor.expanded}
                requiresConfig={ALL_TRUST_FACTORS[index].requiresConfig}
                configNote={ALL_TRUST_FACTORS[index].configNote}
                onToggle={(enabled) => handleToggle(index, enabled)}
                onTrustLevelChange={(level) => handleTrustLevelChange(index, level)}
                onToggleExpand={() => handleToggleExpand(index)}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-[12px] pt-[8px] border-t border-[#e5e7eb]">
          <Button
            variant="outline"
            size="lg"
            onClick={onBack}
            className="rounded-[8px] border-[#d1d5db] px-[20px]"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
              Cancel
            </span>
          </Button>
          <Button
            size="lg"
            onClick={handleCreateProfile}
            className="rounded-[8px] bg-[#1447E6] hover:bg-[#0f35b3] px-[20px]"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">Update            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}