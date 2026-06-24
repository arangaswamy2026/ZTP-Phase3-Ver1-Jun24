import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Save,
  Shield,
  AlertTriangle,
  CheckCircle2,
  X,
  Info,
  Plus,
  Minus,
  ChevronDown,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { MOCK_POLICIES } from '../components/policies/PolicyData';
import { toast } from 'sonner@2.0.3';

const THREAT_CATEGORIES = [
  'Bots / Cryptomining',
  'Dangerous Configuration / History',
  'Dangerous 3rd Party Infrastructure',
  'Dangerous Nameserver',
  'Malicious SSL Cert',
  'Malware & Ransomware',
  'Malware C2',
  'Phishing',
  'Risky DNS Transactions',
  'Spam / VoIP fraud / Spyware',
  'Other Known Bad (Community Intelligence)',
  'New Domains',
];

const USERS_LIST = ['Alice', 'John', 'Sarah', 'Michael', 'Emily', 'David'];
const GROUPS_LIST = ['Design', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];
const APPLICATIONS_LIST = ['Expiry', 'San', 'Envoy', 'Box', 'Dropbox', 'Slack', 'Teams'];
const CATEGORY_LIST = [
  'Adult Issues',
  'Gambling',
  'Malicious Sites & Phishing',
  'Social Media',
  'Shopping',
  'Streaming',
  'News',
  'Sports',
];
const APP_LIST = ['BitTorrent', 'NordVPN', 'Tor Browser', 'uTorrent', 'ExpressVPN'];
const GEO_LIST = ['Russia', 'China', 'Iran', 'North Korea', 'Syria', 'Cuba'];

type SourceRow = {
  id: string;
  type: 'Users' | 'Groups';
  selectedItems: string[];
};

type DestinationRow = {
  id: string;
  type: 'Applications' | 'Internet';
  selectedItems: string[];
};

export function CreateInternetPolicyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  // General Info
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');

  // Source & Destination
  const [sourceRows, setSourceRows] = useState<SourceRow[]>([
    { id: '1', type: 'Groups', selectedItems: [] },
  ]);
  const [destinationRows, setDestinationRows] = useState<DestinationRow[]>([
    { id: '1', type: 'Internet', selectedItems: [] },
  ]);

  // Dropdowns state
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown-trigger]') && !target.closest('[data-dropdown-menu]')) {
        setOpenDropdowns({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Threat Protection - all checked by default
  const [threatProtection, setThreatProtection] = useState<Record<string, boolean>>(
    THREAT_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  // Security Controls
  const [categoryBlockingEnabled, setCategoryBlockingEnabled] = useState(true);
  const [blockedCategories, setBlockedCategories] = useState<string[]>(['Adult Issues', 'Gambling', 'Malicious Sites & Phishing']);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const [appBlockingEnabled, setAppBlockingEnabled] = useState(true);
  const [blockedApps, setBlockedApps] = useState<string[]>([]);
  const [appBlockingDropdownOpen, setAppBlockingDropdownOpen] = useState(false);

  const [appBypassEnabled, setAppBypassEnabled] = useState(false);
  const [domainBlockingEnabled, setDomainBlockingEnabled] = useState(true);
  const [blockedDomains, setBlockedDomains] = useState<string[]>(['www.google.com/evil', 'www.google1.com']);
  const [newDomain, setNewDomain] = useState('');

  const [domainBypassEnabled, setDomainBypassEnabled] = useState(false);
  const [geoBlockingEnabled, setGeoBlockingEnabled] = useState(true);
  const [blockedRegions, setBlockedRegions] = useState<string[]>(['Russia', 'China', 'Iran', 'North Korea']);
  const [geoDropdownOpen, setGeoDropdownOpen] = useState(false);

  const [riskBlockingEnabled, setRiskBlockingEnabled] = useState(true);
  const [urlAllowlistEnabled, setUrlAllowlistEnabled] = useState(false);
  const [floodProtectionEnabled, setFloodProtectionEnabled] = useState(true);
  const [ipsEnabled, setIpsEnabled] = useState(true);

  // Pre-populate for edit mode
  useEffect(() => {
    if (isEdit && id) {
      const existing = MOCK_POLICIES.find((p) => p.id === id && p.type === 'SIA');
      if (existing) {
        setPolicyName(existing.name);
        setDescription(existing.description);
      }
    }
  }, [isEdit, id]);

  const isFormValid = policyName.trim();

  const handleSave = () => {
    toast.success(isEdit ? 'Policy updated successfully' : 'Policy created successfully');
    navigate('/access-policies');
  };

  const handleCancel = () => {
    navigate('/access-policies');
  };

  // Source row functions
  const addSourceRow = (type: 'Users' | 'Groups') => {
    const newRow: SourceRow = {
      id: Date.now().toString(),
      type,
      selectedItems: [],
    };
    setSourceRows([...sourceRows, newRow]);
  };

  const removeSourceRow = (rowId: string) => {
    if (sourceRows.length > 1) {
      setSourceRows(sourceRows.filter((row) => row.id !== rowId));
    }
  };

  const toggleSourceItem = (rowId: string, item: string) => {
    setSourceRows(
      sourceRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              selectedItems: row.selectedItems.includes(item)
                ? row.selectedItems.filter((i) => i !== item)
                : [...row.selectedItems, item],
            }
          : row
      )
    );
  };

  const removeSourceItem = (rowId: string, item: string) => {
    setSourceRows(
      sourceRows.map((row) =>
        row.id === rowId
          ? { ...row, selectedItems: row.selectedItems.filter((i) => i !== item) }
          : row
      )
    );
  };

  // Destination row functions
  const addDestinationRow = (type: 'Applications' | 'Internet') => {
    const newRow: DestinationRow = {
      id: Date.now().toString(),
      type,
      selectedItems: [],
    };
    setDestinationRows([...destinationRows, newRow]);
  };

  const removeDestinationRow = (rowId: string) => {
    if (destinationRows.length > 1) {
      setDestinationRows(destinationRows.filter((row) => row.id !== rowId));
    }
  };

  const toggleDestinationItem = (rowId: string, item: string) => {
    setDestinationRows(
      destinationRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              selectedItems: row.selectedItems.includes(item)
                ? row.selectedItems.filter((i) => i !== item)
                : [...row.selectedItems, item],
            }
          : row
      )
    );
  };

  const removeDestinationItem = (rowId: string, item: string) => {
    setDestinationRows(
      destinationRows.map((row) =>
        row.id === rowId
          ? { ...row, selectedItems: row.selectedItems.filter((i) => i !== item) }
          : row
      )
    );
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (cat: string) => {
    setBlockedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBlockedApp = (app: string) => {
    setBlockedApps((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };

  const toggleGeoRegion = (region: string) => {
    setBlockedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const addDomain = () => {
    if (newDomain.trim() && !blockedDomains.includes(newDomain.trim())) {
      setBlockedDomains([...blockedDomains, newDomain.trim()]);
      setNewDomain('');
    }
  };

  const removeDomain = (domain: string) => {
    setBlockedDomains(blockedDomains.filter((d) => d !== domain));
  };

  const getOptionsForSourceType = (type: 'Users' | 'Groups') => {
    return type === 'Users' ? USERS_LIST : GROUPS_LIST;
  };

  const getOptionsForDestinationType = (type: 'Applications' | 'Internet') => {
    return type === 'Applications' ? APPLICATIONS_LIST : [];
  };

  return (
    <div className="flex flex-col gap-[24px] w-full max-w-[900px]">
      <PageHeader
        title="Create Internet Policy"
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
      />

      {/* Info Banner */}
      <div className="flex items-center gap-[8px] bg-white border border-[#e5e7eb] rounded-[8px] px-[12px] py-[8px]">
        <Info className="w-[14px] h-[14px] text-[#3b82f6] shrink-0" />
        <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
          Internet access policy always allows traffic from selected sources to the destination.
        </span>
      </div>

      {/* General Information */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
            General Information
          </h3>

          <div className="flex flex-col gap-[6px]">
            <Label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153]">
              Policy Name <span className="text-[#fb2c36]">*</span>
            </Label>
            <Input
              placeholder="Enter Policy Name"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
              className="bg-white border-[#e5e7eb] rounded-[8px] h-[40px] font-['Inter',sans-serif] text-[14px]"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <Label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153]">
              Description
            </Label>
            <Textarea
              placeholder="Describe what this policy does..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white border-[#e5e7eb] rounded-[8px] min-h-[80px] font-['Inter',sans-serif] text-[14px]"
            />
          </div>
        </div>
      </div>

      {/* Source */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
              Source
            </h3>
            <button
              onClick={() => addSourceRow('Groups')}
              className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <Plus className="w-[12px] h-[12px] text-[#0b8aeb]" />
            </button>
          </div>

          {sourceRows.map((row, index) => (
            <div key={row.id} className="flex gap-[6px] items-center">
              {/* Type Dropdown */}
              <div className="relative">
                <button
                  data-dropdown-trigger
                  onClick={() => toggleDropdown(`source-type-${row.id}`)}
                  className="bg-white border border-[#e5e7eb] rounded-[8px] h-[43px] px-[13px] flex items-center justify-between w-[148px]"
                >
                  <span className="text-[14px] text-[#0a0a0a]">{row.type}</span>
                  <ChevronDown className="w-[16px] h-[16px] text-[#717182] opacity-50" />
                </button>
                {openDropdowns[`source-type-${row.id}`] && (
                  <div 
                    data-dropdown-menu
                    className="absolute top-full mt-1 left-0 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50"
                  >
                    <div
                      onClick={() => {
                        setSourceRows(
                          sourceRows.map((r) =>
                            r.id === row.id ? { ...r, type: 'Users', selectedItems: [] } : r
                          )
                        );
                        toggleDropdown(`source-type-${row.id}`);
                      }}
                      className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                    >
                      Users
                    </div>
                    <div
                      onClick={() => {
                        setSourceRows(
                          sourceRows.map((r) =>
                            r.id === row.id ? { ...r, type: 'Groups', selectedItems: [] } : r
                          )
                        );
                        toggleDropdown(`source-type-${row.id}`);
                      }}
                      className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                    >
                      Groups
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Items Container */}
              <div className="flex-1 relative">
                <div className="bg-white border border-[#e5e7eb] rounded-[8px] min-h-[43px] px-[13px] py-[8px] flex items-center justify-between">
                  <div className="flex flex-wrap gap-[5px]">
                    {row.selectedItems.map((item) => (
                      <div
                        key={item}
                        className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2 h-[26px]"
                      >
                        <span className="text-[12px] text-[#364153]">{item}</span>
                        <button
                          onClick={() => removeSourceItem(row.id, item)}
                          className="text-[#9ca3af] hover:text-[#6a7282]"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    data-dropdown-trigger
                    onClick={() => toggleDropdown(`source-items-${row.id}`)}
                    className="text-[#717182] opacity-50"
                  >
                    <ChevronDown className="w-[16px] h-[16px]" />
                  </button>
                </div>
                {openDropdowns[`source-items-${row.id}`] && (
                  <div 
                    data-dropdown-menu
                    className="absolute top-full mt-1 left-0 right-0 bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto"
                  >
                    {getOptionsForSourceType(row.type).map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          toggleSourceItem(row.id, item);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer flex items-center gap-2"
                      >
                        <Checkbox checked={row.selectedItems.includes(item)} />
                        <span className="text-[14px] text-[#364153]">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeSourceRow(row.id)}
                className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity shrink-0"
              >
                <Minus className="w-[12px] h-[12px] text-[#0b8aeb]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Destination */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
              Destination
            </h3>
            <button
              onClick={() => addDestinationRow('Internet')}
              className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <Plus className="w-[12px] h-[12px] text-[#0b8aeb]" />
            </button>
          </div>

          {destinationRows.map((row, index) => (
            <div key={row.id} className="flex gap-[6px] items-center">
              {/* Type Dropdown */}
              <div className="relative">
                <button
                  data-dropdown-trigger
                  onClick={() => toggleDropdown(`destination-type-${row.id}`)}
                  className="bg-white border border-[#e5e7eb] rounded-[8px] h-[43px] px-[13px] flex items-center justify-between w-[148px]"
                >
                  <span className="text-[14px] text-[#0a0a0a]">{row.type}</span>
                  <ChevronDown className="w-[16px] h-[16px] text-[#717182] opacity-50" />
                </button>
                {openDropdowns[`destination-type-${row.id}`] && (
                  <div 
                    data-dropdown-menu
                    className="absolute top-full mt-1 left-0 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50"
                  >
                    <div
                      onClick={() => {
                        setDestinationRows(
                          destinationRows.map((r) =>
                            r.id === row.id ? { ...r, type: 'Applications', selectedItems: [] } : r
                          )
                        );
                        toggleDropdown(`destination-type-${row.id}`);
                      }}
                      className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                    >
                      Applications
                    </div>
                    <div
                      onClick={() => {
                        setDestinationRows(
                          destinationRows.map((r) =>
                            r.id === row.id ? { ...r, type: 'Internet', selectedItems: [] } : r
                          )
                        );
                        toggleDropdown(`destination-type-${row.id}`);
                      }}
                      className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                    >
                      Internet
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Items Container - Only show for Applications */}
              {row.type === 'Applications' ? (
                <div className="flex-1 relative">
                  <div className="bg-white border border-[#e5e7eb] rounded-[8px] min-h-[43px] px-[13px] py-[8px] flex items-center justify-between">
                    <div className="flex flex-wrap gap-[5px]">
                      {row.selectedItems.map((item) => (
                        <div
                          key={item}
                          className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2 h-[26px]"
                        >
                          <span className="text-[12px] text-[#364153]">{item}</span>
                          <button
                            onClick={() => removeDestinationItem(row.id, item)}
                            className="text-[#9ca3af] hover:text-[#6a7282]"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      data-dropdown-trigger
                      onClick={() => toggleDropdown(`destination-items-${row.id}`)}
                      className="text-[#717182] opacity-50"
                    >
                      <ChevronDown className="w-[16px] h-[16px]" />
                    </button>
                  </div>
                  {openDropdowns[`destination-items-${row.id}`] && (
                    <div 
                      data-dropdown-menu
                      className="absolute top-full mt-1 left-0 right-0 bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto"
                    >
                      {getOptionsForDestinationType(row.type).map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            toggleDestinationItem(row.id, item);
                          }}
                          className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer flex items-center gap-2"
                        >
                          <Checkbox checked={row.selectedItems.includes(item)} />
                          <span className="text-[14px] text-[#364153]">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1" />
              )}

              {/* Remove Button */}
              <button
                onClick={() => removeDestinationRow(row.id)}
                className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity shrink-0"
              >
                <Minus className="w-[12px] h-[12px] text-[#0b8aeb]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Protection */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
            Threat Protection
          </h3>

          <div className="flex items-center gap-[8px] bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px] px-[12px] py-[8px]">
            <Info className="w-[14px] h-[14px] text-[#3b82f6] shrink-0" />
            <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
              All threat categories below are enabled by default and cannot be disabled.
            </span>
          </div>

          <div className="flex flex-wrap gap-[8px]">
            {THREAT_CATEGORIES.map((threat) => (
              <div
                key={threat}
                className="relative bg-[#f9fafb] border border-[#e5e7eb] rounded-[8px] px-[28px] py-[6px] h-[30px] flex items-center"
              >
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2">
                  <Shield className="w-[12px] h-[12px] text-[#6a7282]" />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#364153]">
                  {threat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Controls */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[20px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
            Security Controls
          </h3>

          {/* Category Blocking */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Category Blocking
              </h4>
              <button
                onClick={() => setCategoryBlockingEnabled(!categoryBlockingEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  categoryBlockingEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    categoryBlockingEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            {categoryBlockingEnabled && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                  Select categories for blocking
                </p>
                <div className="relative">
                  <button
                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[8px] h-[36px] px-[13px] flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#9ca3af]">Select categories to Block</span>
                    <Plus className="w-[16px] h-[16px] text-[#6a7282]" />
                  </button>
                  {categoryDropdownOpen && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto">
                      {CATEGORY_LIST.map((cat) => (
                        <div
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer flex items-center gap-2"
                        >
                          <Checkbox checked={blockedCategories.includes(cat)} />
                          <span className="text-[14px] text-[#364153]">{cat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {blockedCategories.length > 0 && (
                  <div className="flex flex-wrap gap-[6px] mt-2">
                    {blockedCategories.map((cat) => (
                      <div key={cat} className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2">
                        <span className="text-[12px] text-[#364153]">{cat}</span>
                        <button onClick={() => toggleCategory(cat)} className="text-[#9ca3af] hover:text-[#6a7282]">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Application Blocking */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Application Blocking
              </h4>
              <button
                onClick={() => setAppBlockingEnabled(!appBlockingEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  appBlockingEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    appBlockingEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            {appBlockingEnabled && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                  Which applications would you like to block access to?
                </p>
                <div className="relative">
                  <button
                    onClick={() => setAppBlockingDropdownOpen(!appBlockingDropdownOpen)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[8px] h-[36px] px-[13px] flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#9ca3af]">Select Apps</span>
                    <Plus className="w-[16px] h-[16px] text-[#6a7282]" />
                  </button>
                  {appBlockingDropdownOpen && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto">
                      {APP_LIST.map((app) => (
                        <div
                          key={app}
                          onClick={() => toggleBlockedApp(app)}
                          className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer flex items-center gap-2"
                        >
                          <Checkbox checked={blockedApps.includes(app)} />
                          <span className="text-[14px] text-[#364153]">{app}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {blockedApps.length > 0 && (
                  <div className="flex flex-wrap gap-[6px] mt-2">
                    {blockedApps.map((app) => (
                      <div key={app} className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2">
                        <span className="text-[12px] text-[#364153]">{app}</span>
                        <button onClick={() => toggleBlockedApp(app)} className="text-[#9ca3af] hover:text-[#6a7282]">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Application Bypass */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Application Bypass
              </h4>
              <button
                onClick={() => setAppBypassEnabled(!appBypassEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  appBypassEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    appBypassEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Domain Blocking */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Domain Blocking
              </h4>
              <button
                onClick={() => setDomainBlockingEnabled(!domainBlockingEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  domainBlockingEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    domainBlockingEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            {domainBlockingEnabled && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                  Which domains would you like to block access to?
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af]">
                  Includes subdomains (e.g gambling.com would include bets.gambling.com)
                </p>
                <div className="flex gap-[8px]">
                  <Input
                    placeholder="Enter domain (e.g. salesforce.com)"
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addDomain()}
                    className="flex-1 bg-white border-[#e5e7eb] rounded-[8px] h-[36px] font-['Inter',sans-serif] text-[13px]"
                  />
                  <button
                    onClick={addDomain}
                    className="bg-white border border-[#e5e7eb] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center hover:bg-[#f9fafb]"
                  >
                    <Plus className="w-[16px] h-[16px] text-[#6a7282]" />
                  </button>
                </div>
                {blockedDomains.length > 0 && (
                  <div className="flex flex-col gap-[6px] mt-2">
                    {blockedDomains.map((domain) => (
                      <div key={domain} className="flex items-center justify-between bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px]">
                        <span className="text-[12px] text-[#364153]">{domain}</span>
                        <button onClick={() => removeDomain(domain)} className="text-[#9ca3af] hover:text-[#6a7282]">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Domain Bypass */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Domain Bypass
              </h4>
              <button
                onClick={() => setDomainBypassEnabled(!domainBypassEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  domainBypassEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    domainBypassEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Geo-Blocking */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Geo-Blocking
              </h4>
              <button
                onClick={() => setGeoBlockingEnabled(!geoBlockingEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  geoBlockingEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    geoBlockingEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            {geoBlockingEnabled && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                  Select regions to block
                </p>
                <div className="relative">
                  <button
                    onClick={() => setGeoDropdownOpen(!geoDropdownOpen)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[8px] h-[36px] px-[13px] flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#9ca3af]">Select Regions</span>
                    <Plus className="w-[16px] h-[16px] text-[#6a7282]" />
                  </button>
                  {geoDropdownOpen && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50 max-h-[200px] overflow-y-auto">
                      {GEO_LIST.map((region) => (
                        <div
                          key={region}
                          onClick={() => toggleGeoRegion(region)}
                          className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer flex items-center gap-2"
                        >
                          <Checkbox checked={blockedRegions.includes(region)} />
                          <span className="text-[14px] text-[#364153]">{region}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {blockedRegions.length > 0 && (
                  <div className="flex flex-wrap gap-[6px] mt-2">
                    {blockedRegions.map((region) => (
                      <div key={region} className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2">
                        <span className="text-[12px] text-[#364153]">{region}</span>
                        <button onClick={() => toggleGeoRegion(region)} className="text-[#9ca3af] hover:text-[#6a7282]">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Risk-Based URL Blocking */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Risk-Based URL Blocking (AI/NLP)
              </h4>
              <button
                onClick={() => setRiskBlockingEnabled(!riskBlockingEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  riskBlockingEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    riskBlockingEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
            {riskBlockingEnabled && (
              <>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                  AI based URL/host classification to prevent phishing and typo-squatting
                </p>
                <div className="flex gap-[10px]">
                  <div className="flex items-center gap-[6px] px-[10px] py-[5px] border border-red-200 bg-red-50 rounded-[8px]">
                    <X className="w-[14px] h-[14px] text-red-600" />
                    <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#101828]">Block</span>
                    <span className="text-[11px] text-[#6a7282] border-l border-[#e5e7eb] pl-[6px] ml-[2px]">High-Risk</span>
                  </div>
                  <div className="flex items-center gap-[6px] px-[10px] py-[5px] border border-amber-200 bg-amber-50 rounded-[8px]">
                    <AlertTriangle className="w-[14px] h-[14px] text-amber-500" />
                    <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#101828]">Warn</span>
                    <span className="text-[11px] text-[#6a7282] border-l border-[#e5e7eb] pl-[6px] ml-[2px]">Medium-Risk</span>
                  </div>
                  <div className="flex items-center gap-[6px] px-[10px] py-[5px] border border-green-200 bg-green-50 rounded-[8px]">
                    <CheckCircle2 className="w-[14px] h-[14px] text-green-600" />
                    <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#101828]">Allow</span>
                    <span className="text-[11px] text-[#6a7282] border-l border-[#e5e7eb] pl-[6px] ml-[2px]">Low-Risk</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* URL Allowlist */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                URL Allowlist
              </h4>
              <button
                onClick={() => setUrlAllowlistEnabled(!urlAllowlistEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  urlAllowlistEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    urlAllowlistEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Flood Protection */}
          <div className="flex flex-col gap-[8px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                Flood Protection
              </h4>
              <button
                onClick={() => setFloodProtectionEnabled(!floodProtectionEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  floodProtectionEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    floodProtectionEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* IPS */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
                IPS
              </h4>
              <button
                onClick={() => setIpsEnabled(!ipsEnabled)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  ipsEnabled ? 'bg-[#1447e6]' : 'bg-[#e5e7eb]'
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform ${
                    ipsEnabled ? 'translate-x-[22px]' : 'translate-x-[2px]'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-end gap-[10px] pb-[8px]">
        <Button
          variant="outline"
          className="rounded-[8px] border-[#d1d5db] px-[20px]"
          onClick={handleCancel}
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
            Cancel
          </span>
        </Button>
        <Button
          className="gap-[6px] rounded-[8px] bg-[#d4183d] hover:bg-[#b01430] text-white px-[20px]"
          disabled={!isFormValid}
          onClick={handleSave}
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
            Create Policy
          </span>
        </Button>
      </div>
    </div>
  );
}