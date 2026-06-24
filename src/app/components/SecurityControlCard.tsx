import React, { useState, useRef, useEffect } from 'react';
import { Switch } from './ui/switch';
import { Info, Plus, Search, X, Check } from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────

export const CATEGORY_LIST = [
  'AI & ML',
  'Adult Issues',
  'Advocacy, Trade and Business Groups',
  'Aggressive',
  'Anonymizer / Disguised Activity',
  'Arts',
  'Automotive',
  'Business',
  'Careers',
  'Chat / Instant Messaging',
  'Classifieds',
  'Cloud Infrastructure',
  'Computers / Internet',
  'Content Delivery Networks',
  'Cryptocurrency',
  'Dating',
  'Dynamic DNS',
  'Education',
  'Entertainment / Culture',
  'File Storage & Sharing',
  'Finance',
  'Freeware / Shareware',
  'Gambling',
  'Games',
  'Government & Legal',
  'Hacking',
  'Health',
  'Humor / Jokes',
  'Illegal Downloads (P2P)',
  'Job Search',
  'Malicious Sites & Phishing',
  'News & Media',
  'Nudity',
  'Personal Sites / Blogs',
  'Pornography',
  'Real Estate',
  'Religion',
  'Search Engines',
  'Shopping',
  'Social Networking',
  'Sports',
  'Streaming Media',
  'Technology',
  'Travel',
  'Weapons',
];

export const APP_LIST = [
  'Telegram',
  'Signal',
  'Box',
  'iCloud',
  'Facebook',
  'WeChat',
  'Skype',
  'Reddit',
  'Hudu',
  'Slack',
  'WhatsApp',
  'Zoom',
  'Microsoft Teams',
  'Dropbox',
  'Google Drive',
  'OneDrive',
  'TikTok',
  'Instagram',
  'Twitter / X',
  'LinkedIn',
  'Snapchat',
  'Discord',
  'Spotify',
  'Netflix',
  'YouTube',
  'Steam',
  'Epic Games',
  'BitTorrent',
  'uTorrent',
  'NordVPN',
  'ExpressVPN',
  'ProtonVPN',
  'Tor Browser',
  'TeamViewer',
  'AnyDesk',
  'LogMeIn',
];

export const GEO_LIST = [
  'Russia',
  'China',
  'Iran',
  'North Korea',
  'Syria',
  'Cuba',
  'Venezuela',
  'Belarus',
  'Myanmar',
  'Brazil (Fraud Risk)',
  'Eastern Europe (Cybercrime)',
  'Nigeria',
  'Ukraine',
  'Pakistan',
  'Vietnam',
];

// ── Searchable Multi-Select Dropdown ──────────────────────────────────

interface SearchableDropdownProps {
  options: string[];
  selected: string[];
  onSelect: (item: string) => void;
  buttonLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function SearchableDropdown({
  options,
  selected,
  onSelect,
  buttonLabel,
  open,
  onOpenChange,
}: SearchableDropdownProps) {
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOpenChange(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onOpenChange]);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => onOpenChange(!open)}
        className="inline-flex items-center gap-[6px] rounded-[8px] border border-[#d1d5db] bg-white hover:bg-[#f3f4f6] text-[#364153] px-[14px] py-[8px] font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] transition-colors"
      >
        <Plus className="w-[14px] h-[14px]" />
        {buttonLabel}
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+4px)] z-50 w-[280px] bg-white border border-[#e5e7eb] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] flex flex-col">
          {/* Search */}
          <div className="p-[8px] border-b border-[#e5e7eb]">
            <div className="flex items-center gap-[8px] border border-[#3b82f6] rounded-[6px] px-[10px] py-[6px] bg-white">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="flex-1 bg-transparent outline-none font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#101828] placeholder:text-[#9ca3af]"
                autoFocus
              />
              <Search className="w-[14px] h-[14px] text-[#9ca3af] shrink-0" />
            </div>
          </div>

          {/* Options list */}
          <div className="max-h-[240px] overflow-y-auto py-[4px]">
            {filtered.length === 0 ? (
              <div className="px-[12px] py-[8px] font-['Inter',sans-serif] font-normal text-[13px] text-[#9ca3af]">
                No results found
              </div>
            ) : (
              filtered.map((opt) => {
                const isSelected = selected.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => {
                      onSelect(opt);
                    }}
                    className="w-full flex items-center justify-between gap-[8px] text-left px-[12px] py-[8px] hover:bg-[#f3f4f6] font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#101828] transition-colors"
                  >
                    <span>{opt}</span>
                    {isSelected && (
                      <Check className="w-[14px] h-[14px] text-[#3b82f6] shrink-0" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Domain Input ──────────────────────────────────────────────────────

interface DomainInputProps {
  domains: string[];
  onAdd: (domain: string) => void;
  onRemove: (domain: string) => void;
}

function DomainInput({ domains, onAdd, onRemove }: DomainInputProps) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    const trimmed = value.trim();
    if (trimmed && !domains.includes(trimmed)) {
      onAdd(trimmed);
      setValue('');
    }
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-[8px]">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAdd();
            }
          }}
          placeholder="Enter domain (e.g. salesforce.com)"
          className="flex-1 border border-[#e5e7eb] rounded-[8px] px-[12px] py-[8px] font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#101828] placeholder:text-[#9ca3af] bg-white outline-none focus:border-[#3b82f6] transition-colors"
        />
        <button
          onClick={handleAdd}
          className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px] border border-[#e5e7eb] bg-white hover:bg-[#f3f4f6] text-[#6a7282] transition-colors shrink-0"
        >
          <Plus className="w-[16px] h-[16px]" />
        </button>
      </div>
      {domains.length > 0 && (
        <div className="flex flex-wrap gap-[6px]">
          {domains.map((d) => (
            <span
              key={d}
              className="inline-flex items-center gap-[4px] rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[4px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]"
            >
              {d}
              <button
                onClick={() => onRemove(d)}
                className="text-[#9ca3af] hover:text-[#364153] transition-colors"
              >
                <X className="w-[12px] h-[12px]" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Selected Items Chips ──────────────────────────────────────────────

interface ChipListProps {
  items: string[];
  onRemove: (item: string) => void;
}

function ChipList({ items, onRemove }: ChipListProps) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-[6px]">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-[4px] rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[4px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]"
        >
          {item}
          <button
            onClick={() => onRemove(item)}
            className="text-[#9ca3af] hover:text-[#364153] transition-colors"
          >
            <X className="w-[12px] h-[12px]" />
          </button>
        </span>
      ))}
    </div>
  );
}

// ── Security Control Card ─────────────────────────────────────────────

interface SecurityControlCardProps {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  /** Blue helper text shown when enabled */
  helperText?: string;
  /** Additional subtext (e.g. for Domain Blocking subdomain note) */
  subText?: string;
  /** If provided, renders a "+ Select" button with searchable dropdown */
  selectConfig?: {
    buttonLabel: string;
    options: string[];
    selected: string[];
    onSelect: (item: string) => void;
    onRemove: (item: string) => void;
  };
  /** If provided, renders a domain text input */
  domainConfig?: {
    domains: string[];
    onAdd: (domain: string) => void;
    onRemove: (domain: string) => void;
  };
  /** Custom content to render when enabled */
  children?: React.ReactNode;
}

export function SecurityControlCard({
  title,
  enabled,
  onToggle,
  helperText,
  subText,
  selectConfig,
  domainConfig,
  children,
}: SecurityControlCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setSearchValue('');
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Filter options based on search
  const filteredOptions = selectConfig
    ? selectConfig.options.filter((opt) =>
        opt.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div
      className={`rounded-[10px] border border-[#e5e7eb] flex flex-col transition-colors`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[16px] py-[14px]">
        <div className="flex items-center gap-[4px]">
          <span
            className={`font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] ${
              enabled ? 'text-[#101828]' : 'text-[#6a7282]'
            }`}
          >
            {title}
          </span>
          <Info className="w-[14px] h-[14px] text-[#9ca3af]" />
        </div>
        <Switch checked={enabled} onCheckedChange={onToggle} />
      </div>

      {/* Expanded content when enabled */}
      {enabled && (
        <div className="flex flex-col gap-[12px] px-[16px] pb-[16px]">
          {/* Helper text */}
          {helperText && (
            <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#707885]">
              {helperText}
            </p>
          )}

          {/* Sub text */}
          {subText && (
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af]">
              {subText}
            </p>
          )}

          {/* Searchable dropdown select */}
          {selectConfig && (
            <div className="relative" ref={containerRef}>
              {/* Input field with chips inside */}
              <div
                className="border border-[#e5e7eb] rounded-[8px] bg-white p-[8px] flex flex-wrap gap-[6px] items-center min-h-[42px] cursor-text"
                onClick={() => {
                  setDropdownOpen(true);
                  inputRef.current?.focus();
                }}
              >
                {/* Selected chips */}
                {selectConfig.selected.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-[4px] rounded-[6px] border border-[#e5e7eb] bg-[#f9fafb] px-[8px] py-[4px] font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#364153]"
                  >
                    {item}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        selectConfig.onRemove(item);
                      }}
                      className="text-[#9ca3af] hover:text-[#364153] transition-colors"
                    >
                      <X className="w-[12px] h-[12px]" />
                    </button>
                  </span>
                ))}

                {/* Search input */}
                <input
                  ref={inputRef}
                  type="text"
                  placeholder=""
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setDropdownOpen(true)}
                  className="flex-1 min-w-[20px] bg-transparent outline-none font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#101828] placeholder:text-[#9ca3af]"
                />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute left-0 top-[calc(100%+4px)] z-50 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] flex flex-col max-h-[280px] overflow-y-auto">
                  <div className="py-[4px]">
                    {filteredOptions.length === 0 ? (
                      <div className="px-[12px] py-[8px] font-['Inter',sans-serif] font-normal text-[13px] text-[#9ca3af]">
                        No results found
                      </div>
                    ) : (
                      filteredOptions.map((opt) => {
                        const isSelected = selectConfig.selected.includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              selectConfig.onSelect(opt);
                              setSearchValue('');
                              inputRef.current?.focus();
                            }}
                            className="w-full flex items-center justify-between gap-[8px] text-left px-[12px] py-[8px] hover:bg-[#f3f4f6] font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#101828] transition-colors"
                          >
                            <span>{opt}</span>
                            {isSelected && (
                              <Check className="w-[14px] h-[14px] text-[#3b82f6] shrink-0" />
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Domain input */}
          {domainConfig && (
            <DomainInput
              domains={domainConfig.domains}
              onAdd={domainConfig.onAdd}
              onRemove={domainConfig.onRemove}
            />
          )}

          {/* Custom children */}
          {children}
        </div>
      )}
    </div>
  );
}