import { useState } from 'react';
import { ChevronDown, ChevronUp, Info, ArrowRight, X } from 'lucide-react';
import { Button } from './ui/button';

// Trust level options
type TrustLevel = 'ALWAYS_DENY' | 'LOW_TL' | 'MEDIUM_TL' | 'NO_EFFECT';

// Trust factor definition
interface TrustFactor {
  name: string;
  description: string;
  enabledByDefault: boolean;
  requiresConfig: boolean;
  trustLevel: TrustLevel;
}

// All trust factors
const ALL_TRUST_FACTORS: TrustFactor[] = [
  {
    name: 'Application Check',
    description: 'Checks whether specific required applications are running on the device. If the process is left blank for an operating system, that operating system will not check for the app.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Auto Update',
    description: 'Checks that automatic software updates are enabled on the device to ensure security patches are applied promptly.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Disk Encryption',
    description: 'Checks that full disk encryption (e.g., BitLocker, FileVault) is enabled on the device to protect data at rest.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Firewall',
    description: 'Checks the device firewall is enabled and actively blocking unauthorized inbound connections.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Not Jailbroken',
    description: 'Checks that the device has not been jailbroken or rooted, which could compromise security controls.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Screen Lock',
    description: 'Checks that a screen lock (PIN, password, or biometric) is configured and active on the device.',
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Device Geolocation',
    description: "If the Device's location can't be determined, satisfy the Trust Factor anyways. If enabled, the Device's Trust Level will not be impacted on geolocation",
    enabledByDefault: true,
    requiresConfig: false,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'CSE App Version',
    description: 'Checks that the CSE app installed on the device meets the minimum required version for security compliance.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Chrome Browser Version',
    description: 'Checks that the Chrome browser installed on the device meets the minimum required version for security compliance.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Operating System Version',
    description: 'Checks that the device operating system meets the minimum required version for security compliance.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'File Check',
    description: 'Checks for specific files on the device as part of security compliance. If the process is left blank for an operating system,it will not check for the app.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Property list check',
    description: 'Checks specific property list (.plist) values on the device to ensure required configurations are set.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
  {
    name: 'Registry Check',
    description: 'Checks specific registry keys and values on the device to verify required security configurations.',
    enabledByDefault: false,
    requiresConfig: true,
    trustLevel: 'LOW_TL',
  },
];

// Trust level slider component
interface TrustLevelSliderProps {
  trustLevel: TrustLevel;
  onTrustLevelChange: (level: TrustLevel) => void;
  inactive?: boolean;
}

function TrustLevelSlider({ trustLevel, onTrustLevelChange, inactive = false }: TrustLevelSliderProps) {
  const levels: { value: TrustLevel; label: string; position: number }[] = [
    { value: 'ALWAYS_DENY', label: 'ALWAYS DENY', position: 0 },
    { value: 'LOW_TL', label: 'LOW TL', position: 33.33 },
    { value: 'MEDIUM_TL', label: 'MEDIUM TL', position: 66.66 },
    { value: 'NO_EFFECT', label: 'NO EFFECT', position: 100 },
  ];

  const getSliderPosition = () => {
    const level = levels.find((l) => l.value === trustLevel);
    return level ? level.position : 33.33;
  };

  const sliderPosition = getSliderPosition();

  // Use different colors for inactive state
  const activeColor = inactive ? '#364153' : '#1447e6';
  const activeBgColor = inactive ? '#eff6ff' : '#eff6ff';
  const activeTextColor = inactive ? '#364153' : '#1447e6';
  const activeBorderColor = inactive ? '#364153' : '#1447e6';

  return (
    <div className="flex flex-col gap-[12px] w-[351px]">
      {/* Label */}
      <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
        Select trust effect if the Trust factor check fails
      </p>

      {/* Slider */}
      <div className="relative h-[20px]">
        {/* Track background */}
        <div className="absolute top-[8px] left-[6px] w-[320px] h-[4px] bg-[#e5e7eb] rounded-full" />

        {/* Active track */}
        <div
          className="absolute top-[8px] left-[6px] h-[4px] rounded-full transition-all"
          style={{ 
            width: `${(sliderPosition / 100) * 320}px`,
            backgroundColor: activeColor
          }}
        />

        {/* Slider dots */}
        {levels.map((level, index) => {
          const left = 6 + (index * 320) / 3;
          const isActive = level.value === trustLevel;
          const isPassed = levels.findIndex((l) => l.value === trustLevel) >= index;

          return (
            <button
              key={level.value}
              onClick={() => onTrustLevelChange(level.value)}
              className={`absolute top-[4px] w-[12px] h-[12px] rounded-full border-2 transition-all ${
                isActive
                  ? 'bg-white w-[20px] h-[20px] top-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                  : isPassed
                  ? 'bg-white border-white'
                  : 'bg-white border-[#d1d5db]'
              }`}
              style={{
                left: isActive ? `${left - 4}px` : `${left}px`,
                borderColor: isActive ? activeColor : (isPassed ? activeColor : '#d1d5db'),
                backgroundColor: isActive ? 'white' : (isPassed ? activeColor : 'white'),
              }}
            />
          );
        })}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between gap-[31px]">
        {levels.map((level) => {
          const isSelected = level.value === trustLevel;
          return (
            <button
              key={level.value}
              onClick={() => onTrustLevelChange(level.value)}
              className={`flex items-center justify-center h-[24px] px-[8px] rounded-[4px] transition-all ${
                isSelected
                  ? 'bg-[#eff6ff]'
                  : 'bg-transparent'
              }`}
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: isSelected ? activeBorderColor : 'transparent',
              }}
            >
              <span
                className={`font-['Inter',sans-serif] font-medium text-[10px] leading-[14px] tracking-[0.3px] whitespace-nowrap ${
                  isSelected ? '' : 'text-[#9ca3af]'
                }`}
                style={{
                  color: isSelected ? activeTextColor : '#9ca3af',
                }}
              >
                {level.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Trust factor item component
interface TrustFactorItemProps {
  name: string;
  description: string;
  enabled: boolean;
  expanded: boolean;
  requiresConfig: boolean;
  trustLevel: TrustLevel;
  onToggle: (enabled: boolean) => void;
  onToggleExpand: () => void;
  onTrustLevelChange: (level: TrustLevel) => void;
}

function TrustFactorItem({
  name,
  description,
  enabled,
  expanded,
  requiresConfig,
  trustLevel,
  onToggle,
  onToggleExpand,
  onTrustLevelChange,
}: TrustFactorItemProps) {
  // State for Device Geolocation specific settings
  const [geoMode, setGeoMode] = useState<'allowed' | 'blocked'>('allowed');
  const [geoFallback, setGeoFallback] = useState<'enabled' | 'disabled'>('enabled');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['United States']);

  const removeCountry = (country: string) => {
    setSelectedCountries(selectedCountries.filter(c => c !== country));
  };

  return (
    <div className={`border border-[#e5e7eb] rounded-[8px] overflow-hidden ${
      enabled ? 'bg-white' : 'bg-[#f9fafb]'
    }`}>
      {/* Header - always visible */}
      <div className="flex items-center gap-[8px] px-[16px] py-[9px]">
        <button
          onClick={onToggleExpand}
          className="flex items-center justify-center w-[20px] h-[20px] shrink-0"
        >
          {expanded ? (
            <ChevronUp className="w-[16px] h-[16px] text-[#6A7282]" />
          ) : (
            <ChevronDown className="w-[16px] h-[16px] text-[#6A7282]" />
          )}
        </button>

        <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
          <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[21px] text-[#101828]">
            {name}
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#6a7282]">
            {description}
          </p>
        </div>

        {!enabled && requiresConfig && (
          <div className="flex items-center gap-[4px] bg-[#FFF9E6] border border-[#FFE08A] rounded-[6px] px-[8px] py-[4px] h-[24px] shrink-0">
            <Info className="w-[12px] h-[12px] text-[#FF9500]" />
            <span className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] text-[#9a6c00] uppercase tracking-[0.5px]">
              Requires Config
            </span>
          </div>
        )}

        <button
          onClick={() => onToggle(!enabled)}
          className={`relative w-[44px] h-[24px] rounded-full transition-colors shrink-0 ${
            enabled ? 'bg-[#1447e6]' : 'bg-[#d1d5db]'
          }`}
        >
          <div
            className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-transform ${
              enabled ? 'translate-x-[23px]' : 'translate-x-[3px]'
            }`}
          />
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-[#f3f4f6]">
          {name === 'Device Geolocation' ? (
            // Special expanded content for Device Geolocation
            <div className={`flex flex-col gap-[16px] px-[24px] py-[16px] ${
              !enabled ? 'opacity-50' : ''
            }`}>
              {/* Country selection section */}
              <div className="flex flex-col gap-[12px]">
                {/* Label and toggle */}
                <div className="flex items-center justify-between">
                  <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] text-[#364153]">
                    Select countries to block or allow:
                  </p>
                  <div className="bg-[#f3f4f6] flex gap-[4px] items-start pt-[2px] px-[2px] rounded-[4px] h-[28.5px]">
                    <button
                      onClick={() => setGeoMode('allowed')}
                      className={`flex items-center justify-center px-[12px] py-[4px] rounded-[4px] ${
                        geoMode === 'allowed' ? 'bg-[#1447e6]' : 'bg-transparent'
                      }`}
                    >
                      <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[16.5px] whitespace-nowrap ${
                        geoMode === 'allowed' ? 'text-white' : 'text-[#6a7282]'
                      }`}>
                        Allowed
                      </span>
                    </button>
                    <button
                      onClick={() => setGeoMode('blocked')}
                      className={`flex items-center justify-center px-[12px] py-[4px] rounded-[4px] ${
                        geoMode === 'blocked' ? 'bg-[#1447e6]' : 'bg-transparent'
                      }`}
                    >
                      <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[16.5px] whitespace-nowrap ${
                        geoMode === 'blocked' ? 'text-white' : 'text-[#6a7282]'
                      }`}>
                        Blocked
                      </span>
                    </button>
                  </div>
                </div>

                {/* Country chips */}
                <div className="flex items-center justify-between px-[8px] py-[4px] rounded-[8px] border border-[#d0cece]">
                  <div className="flex gap-[8px] flex-wrap">
                    {selectedCountries.map((country) => (
                      <div
                        key={country}
                        className="flex items-center gap-[6px] px-[9px] py-[1px] bg-white border border-[#e5e7eb] rounded-[8px] h-[32px]"
                      >
                        <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#364153] whitespace-nowrap">
                          {country}
                        </span>
                        <button
                          onClick={() => removeCountry(country)}
                          className="flex items-center justify-center pt-[2px] px-[2px] rounded-[4px] size-[16px]"
                        >
                          <X className="w-[12px] h-[12px] text-[#6a7282]" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Help text */}
                <p className="font-['Inter',sans-serif] font-normal italic text-[12px] leading-[18px] text-[#6a7282]">
                  To satisfy the Trust Factor, the device must be located in one of the selected countries.
                </p>
              </div>

              {/* Location fallback section */}
              <div className="flex flex-col pt-[9px]">
                <div className="flex items-center justify-between">
                  <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#364153]">
                    If the Device's location cannot be determined, satisfy the Trust Factor anyways. If enabled, the Device's Trust Level will not be impacted based on geolocation.
                  </p>
                  <div className="bg-[#f3f4f6] flex gap-[4px] items-start pt-[2px] px-[2px] rounded-[4px] h-[28.5px] ml-[16px] shrink-0">
                    <button
                      onClick={() => setGeoFallback('enabled')}
                      className={`flex items-center justify-center px-[12px] py-[4px] rounded-[4px] ${
                        geoFallback === 'enabled' ? 'bg-[#1447e6]' : 'bg-transparent'
                      }`}
                    >
                      <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[16.5px] whitespace-nowrap ${
                        geoFallback === 'enabled' ? 'text-white' : 'text-[#6a7282]'
                      }`}>
                        Enabled
                      </span>
                    </button>
                    <button
                      onClick={() => setGeoFallback('disabled')}
                      className={`flex items-center justify-center px-[12px] py-[4px] rounded-[4px] ${
                        geoFallback === 'disabled' ? 'bg-[#1447e6]' : 'bg-transparent'
                      }`}
                    >
                      <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[16.5px] whitespace-nowrap ${
                        geoFallback === 'disabled' ? 'text-white' : 'text-[#6a7282]'
                      }`}>
                        Disabled
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust level slider and info box */}
              <div className="flex items-start gap-[24px] py-[16px]">
                <TrustLevelSlider 
                  trustLevel={trustLevel} 
                  onTrustLevelChange={onTrustLevelChange}
                  inactive={!enabled}
                />
                <div className="flex flex-col gap-[12px] bg-[#f9fafb] px-[10px] py-[10px] rounded-[4px] w-[469px]">
                  <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#6a7282]">
                    If this Factor is not satisfied, the device's Trust Level will be set to low.
                  </p>
                  <div className="flex items-center gap-[16px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153]">
                      High Trust Level
                    </span>
                    <ArrowRight className="w-[16px] h-[16px] text-[#A1B3D5]" />
                    <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153]">
                      Low Trust Level
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Default expanded content for other trust factors
            <div
              className={`flex items-start gap-[24px] px-[24px] py-[16px] ${
                name === 'Application Check' && !enabled ? 'mix-blend-luminosity opacity-50' : ''
              } ${
                name === 'Auto Update' && !enabled ? 'opacity-50' : ''
              }`}
            >
              {/* Left side - Trust level slider */}
              <div className="flex flex-col gap-[16px]">
                {/* Unified Client tag - only show for Application Check */}
                {name === 'Application Check' && (
                  <div
                    className={`flex items-center h-[32px] px-[13px] py-[1px] bg-white border border-[#e5e7eb] rounded-[8px] w-fit ${
                      !enabled ? 'opacity-56' : ''
                    }`}
                  >
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[18px] text-[#364153] whitespace-nowrap">
                      Unified Client
                    </span>
                  </div>
                )}

                {/* Slider */}
                <TrustLevelSlider 
                  trustLevel={trustLevel} 
                  onTrustLevelChange={onTrustLevelChange}
                  inactive={name === 'Auto Update' && !enabled}
                />
              </div>

              {/* Right side - Info box */}
              <div className="flex flex-col gap-[12px] bg-[#f9fafb] px-[10px] py-[10px] rounded-[4px] w-[469px]">
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#6a7282]">
                  If this Factor is not satisfied, the device's Trust Level will be set to low.
                </p>
                <div className="flex items-center gap-[16px]">
                  <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153]">
                    High Trust Level
                  </span>
                  <ArrowRight className="w-[16px] h-[16px] text-[#A1B3D5]" />
                  <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[20px] text-[#364153]">
                    Low Trust Level
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Main component
interface DeviceTrustProfileProps {
  onSave: () => void;
  onCancel: () => void;
}

export function DeviceTrustProfile({ onSave, onCancel }: DeviceTrustProfileProps) {
  const [trustFactors, setTrustFactors] = useState<
    Array<{
      name: string;
      description: string;
      enabled: boolean;
      expanded: boolean;
      requiresConfig: boolean;
      trustLevel: TrustLevel;
    }>
  >(
    ALL_TRUST_FACTORS.map((tf) => ({
      name: tf.name,
      description: tf.description,
      enabled: tf.enabledByDefault,
      expanded: false,
      requiresConfig: tf.requiresConfig,
      trustLevel: tf.trustLevel,
    }))
  );

  const handleToggle = (index: number, enabled: boolean) => {
    const updated = [...trustFactors];
    updated[index].enabled = enabled;
    setTrustFactors(updated);
  };

  const handleToggleExpand = (index: number) => {
    const updated = [...trustFactors];
    updated[index].expanded = !updated[index].expanded;
    setTrustFactors(updated);
  };

  const handleTrustLevelChange = (index: number, level: TrustLevel) => {
    const updated = [...trustFactors];
    updated[index].trustLevel = level;
    setTrustFactors(updated);
  };

  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Info banner */}
      <div className="flex items-start gap-[8px] bg-[#eff6ff] border border-[#c7dfff] rounded-[10px] px-[12px] py-[8px]">
        <Info className="w-[16px] h-[16px] text-[#1c398e] shrink-0 mt-[2px]" />
        <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#1c398e]">
          Devices that pass all enabled checks are automatically treated as High Trust and get full access. Devices that fail are treated as Low Trust and may be restricted. You can customize what happens
        </p>
      </div>

      {/* Trust factors list */}
      <div className="flex flex-col gap-[8px]">
        {trustFactors.map((factor, index) => (
          <TrustFactorItem
            key={factor.name}
            name={factor.name}
            description={factor.description}
            enabled={factor.enabled}
            expanded={factor.expanded}
            requiresConfig={factor.requiresConfig}
            trustLevel={factor.trustLevel}
            onToggle={(enabled) => handleToggle(index, enabled)}
            onToggleExpand={() => handleToggleExpand(index)}
            onTrustLevelChange={(level) => handleTrustLevelChange(index, level)}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-end gap-[12px]">
        <Button
          variant="outline"
          onClick={onCancel}
          className="rounded-[8px] border-[#d1d5db] px-[20px]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
            Cancel
          </span>
        </Button>
        <Button
          onClick={onSave}
          className="rounded-[8px] bg-[#1447E6] hover:bg-[#0f35b3] px-[20px]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
            Update
          </span>
        </Button>
      </div>
    </div>
  );
}