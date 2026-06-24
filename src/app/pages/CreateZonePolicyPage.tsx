import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Network, Users, Save, Shield, AlertTriangle, CheckCircle2, X, Info, Plus, Minus } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { MOCK_POLICIES } from '../components/policies/PolicyData';
import { toast } from 'sonner@2.0.3';
import { SecurityControlCard, CATEGORY_LIST, APP_LIST, GEO_LIST } from '../components/SecurityControlCard';

const THREAT_CATEGORIES = [
  { name: 'Bots / Cryptomining', desc: 'Blocks bot networks and cryptocurrency mining scripts' },
  { name: 'Dangerous Configuration / History', desc: 'Blocks sites with known dangerous configurations' },
  { name: 'Dangerous 3rd Party Infrastructure', desc: 'Blocks domains hosted on compromised infrastructure' },
  { name: 'Dangerous Nameserver', desc: 'Blocks domains using malicious nameservers' },
  { name: 'Malicious SSL Cert', desc: 'Blocks sites using SSL certificates tied to threats' },
  { name: 'Malware & Ransomware', desc: 'Blocks malware or ransomware distribution' },
  { name: 'Malware C2', desc: 'Blocks command-and-control servers' },
  { name: 'Phishing', desc: 'Blocks phishing sites' },
  { name: 'Risky DNS Transactions', desc: 'Blocks DNS tunneling and suspicious DNS activity' },
  { name: 'Spam / VoIP fraud / Spyware', desc: 'Blocks spam, VoIP fraud, and spyware' },
  { name: 'Other Known Bad (Community Intelligence)', desc: 'Blocks community-sourced threats' },
  { name: 'New Domains', desc: 'Blocks recently registered domains' },
];
const ZONES = ['Employee', 'Guest', 'IOT'];

type SourceRow = {
  id: string;
  type: 'Zone' | 'IP Range';
  zones?: string[];
  ipRange?: string;
  anyIp?: boolean;
  protocol: string;
  port: string;
  anyPort?: boolean;
};

type DestinationRow = {
  id: string;
  type: 'Zone' | 'IP Range';
  zone?: string;
  subnet?: string;
  ipRange?: string;
  anyIp?: boolean;
  protocol: string;
  port: string;
  anyPort?: boolean;
};

export function CreateZonePolicyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');
  const [action, setAction] = useState<'Allow' | 'Deny'>('Allow');
  
  // Source rows - now supports multiple
  const [sourceRows, setSourceRows] = useState<SourceRow[]>([
    {
      id: '1',
      type: 'Zone',
      zones: [],
      protocol: 'Any',
      port: '',
      anyPort: true,
    },
  ]);
  
  // Destination rows - now supports multiple
  const [destinationRows, setDestinationRows] = useState<DestinationRow[]>([
    {
      id: '1',
      type: 'Zone',
      zone: '',
      subnet: '',
      protocol: 'Any',
      port: '',
      anyPort: true,
    },
  ]);

  // Zone multiselect dropdown state
  const [zoneDropdownOpen, setZoneDropdownOpen] = useState<string | null>(null);

  // Security Controls state
  const [categoryBlockingEnabled, setCategoryBlockingEnabled] = useState(true);
  const [appBlockingEnabled, setAppBlockingEnabled] = useState(true);
  const [appBypassEnabled, setAppBypassEnabled] = useState(false);
  const [domainBlockingEnabled, setDomainBlockingEnabled] = useState(true);
  const [domainBypassEnabled, setDomainBypassEnabled] = useState(false);
  const [geoBlockingEnabled, setGeoBlockingEnabled] = useState(true);
  const [riskBlockingEnabled, setRiskBlockingEnabled] = useState(true);
  const [urlAllowlistEnabled, setUrlAllowlistEnabled] = useState(false);
  const [floodProtectionEnabled, setFloodProtectionEnabled] = useState(false);
  const [ipsEnabled, setIpsEnabled] = useState(false);

  // Security Controls data
  const [blockedCategories, setBlockedCategories] = useState<string[]>([
    'Adult Issues',
    'Gambling',
    'Malicious Sites & Phishing',
  ]);
  const [blockedApps, setBlockedApps] = useState<string[]>([
    'BitTorrent',
    'NordVPN',
  ]);
  const [bypassApps, setBypassApps] = useState<string[]>([]);
  const [blockedDomains, setBlockedDomains] = useState<string[]>([]);
  const [bypassDomains, setBypassDomains] = useState<string[]>([]);
  const [blockedRegions, setBlockedRegions] = useState<string[]>([
    'Russia',
    'China',
    'Iran',
    'North Korea',
  ]);
  const [allowlistDomains, setAllowlistDomains] = useState<string[]>([]);

  // Pre-populate for edit mode
  useEffect(() => {
    if (isEdit && id) {
      const existing = MOCK_POLICIES.find((p) => p.id === id && p.type === 'Zone');
      if (existing) {
        setPolicyName(existing.name);
        setDescription(existing.description);
        setAction(existing.action);
      }
    }
  }, [isEdit, id]);

  const isFormValid = policyName.trim() && sourceRows.length > 0 && destinationRows.length > 0;

  const actionColor = action === 'Allow' ? '#16a34a' : '#dc2626';

  const handleSave = () => {
    toast.success(isEdit ? 'Policy updated successfully' : 'Policy created successfully');
    navigate('/access-policies');
  };

  const handleCancel = () => {
    if (isEdit && id) {
      navigate(`/zone-policy/${id}`);
    } else {
      navigate('/access-policies');
    }
  };

  // Source row management
  const addSourceRow = (type: 'Zone' | 'IP Range') => {
    const newRow: SourceRow = {
      id: Date.now().toString(),
      type,
      zones: type === 'Zone' ? [] : undefined,
      ipRange: type === 'IP Range' ? '' : undefined,
      anyIp: false,
      protocol: 'Any',
      port: '',
      anyPort: true,
    };
    setSourceRows([...sourceRows, newRow]);
  };

  const removeSourceRow = (id: string) => {
    if (sourceRows.length > 1) {
      setSourceRows(sourceRows.filter(row => row.id !== id));
    }
  };

  const updateSourceRow = (id: string, updates: Partial<SourceRow>) => {
    setSourceRows(sourceRows.map(row => row.id === id ? { ...row, ...updates } : row));
  };

  const toggleSourceZone = (rowId: string, zone: string) => {
    setSourceRows(sourceRows.map(row => {
      if (row.id === rowId && row.type === 'Zone') {
        const currentZones = row.zones || [];
        const newZones = currentZones.includes(zone)
          ? currentZones.filter(z => z !== zone)
          : [...currentZones, zone];
        return { ...row, zones: newZones };
      }
      return row;
    }));
  };

  // Destination row management
  const addDestinationRow = (type: 'Zone' | 'IP Range') => {
    const newRow: DestinationRow = {
      id: Date.now().toString(),
      type,
      zone: type === 'Zone' ? '' : undefined,
      subnet: type === 'Zone' ? '' : undefined,
      ipRange: type === 'IP Range' ? '' : undefined,
      anyIp: false,
      protocol: 'Any',
      port: '',
      anyPort: true,
    };
    setDestinationRows([...destinationRows, newRow]);
  };

  const removeDestinationRow = (id: string) => {
    if (destinationRows.length > 1) {
      setDestinationRows(destinationRows.filter(row => row.id !== id));
    }
  };

  const updateDestinationRow = (id: string, updates: Partial<DestinationRow>) => {
    setDestinationRows(destinationRows.map(row => row.id === id ? { ...row, ...updates } : row));
  };

  return (
    <div className="flex flex-col gap-[24px] w-full max-w-[900px]">
      <PageHeader
        title={isEdit ? 'Edit Zone Policy' : 'Create Zone Policy'}
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
      />

      {/* Policy Name & Description */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
            General Information
          </h3>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="policy-name" className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153]">
                Policy Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="policy-name"
                placeholder="e.g. Allow Employee Zone to Internet"
                value={policyName}
                onChange={(e) => setPolicyName(e.target.value)}
                className="bg-white border-[#e5e7eb] rounded-[8px] h-[40px] font-['Inter',sans-serif] text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <Label htmlFor="description" className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153]">
                Description
              </Label>
              <Input
                id="description"
                placeholder="Describe what this policy does..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-white border-[#e5e7eb] rounded-[8px] h-[40px] font-['Inter',sans-serif] text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action - Toggle Buttons */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
            Action
          </h3>
          <div className="bg-[#f3f4f6] rounded-[8px] border border-[#d1d5db] p-[5px] flex gap-[4px]">
            <button
              onClick={() => setAction('Allow')}
              className={`flex-1 py-[10px] px-[20px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] transition-all ${
                action === 'Allow'
                  ? 'bg-white text-[#008236] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]'
                  : 'bg-transparent text-[#6a7282]'
              }`}
            >
              ALLOW
            </button>
            <button
              onClick={() => setAction('Deny')}
              className={`flex-1 py-[10px] px-[20px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] transition-all ${
                action === 'Deny'
                  ? 'bg-white text-[#c10007] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]'
                  : 'bg-transparent text-[#6a7282]'
              }`}
            >
              BLOCK
            </button>
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
              onClick={() => addSourceRow('Zone')}
              className="w-[24px] h-[24px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="border-[1.5px] border-[#5885cc] rounded-[3px] w-full h-full flex items-center justify-center">
                <Plus className="w-3 h-3 text-[#5885cc]" />
              </div>
            </button>
          </div>
          
          {sourceRows.map((row, index) => (
            <div key={row.id} className="flex gap-[8px] items-start">
              {/* Type Selector */}
              <div className="w-[148px]">
                <Select 
                  value={row.type} 
                  onValueChange={(v) => {
                    const newType = v as 'Zone' | 'IP Range';
                    updateSourceRow(row.id, {
                      type: newType,
                      zones: newType === 'Zone' ? [] : undefined,
                      ipRange: newType === 'IP Range' ? '' : undefined,
                    });
                  }}
                >
                  <SelectTrigger className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Zone">Zone</SelectItem>
                    <SelectItem value="IP Range">IP Ranges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* IP Range or Zone selector */}
              {row.type === 'IP Range' ? (
                <>
                  <div className="flex-1 flex flex-col gap-[7px]">
                    <Input
                      placeholder="192.168.1.0/24"
                      value={row.ipRange || ''}
                      onChange={(e) => updateSourceRow(row.id, { ipRange: e.target.value })}
                      disabled={row.anyIp}
                      className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]"
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={`source-any-ip-${row.id}`}
                        checked={row.anyIp}
                        onCheckedChange={(checked) => updateSourceRow(row.id, { anyIp: checked as boolean })}
                      />
                      <Label 
                        htmlFor={`source-any-ip-${row.id}`}
                        className="text-[13px] font-normal text-[#191c25] cursor-pointer"
                      >
                        Any
                      </Label>
                    </div>
                  </div>

                  {/* Protocol */}
                  <div className="w-[125px]">
                    <Select 
                      value={row.protocol} 
                      onValueChange={(v) => updateSourceRow(row.id, { protocol: v })}
                    >
                      <SelectTrigger className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">All Protocols</SelectItem>
                        <SelectItem value="TCP">TCP</SelectItem>
                        <SelectItem value="UDP">UDP</SelectItem>
                        <SelectItem value="ICMP">ICMP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Ports */}
                  <div className="w-[291px] flex flex-col gap-[7px]">
                    <Input
                      placeholder="Ports: ex: 22, 50-250"
                      value={row.port}
                      onChange={(e) => updateSourceRow(row.id, { port: e.target.value })}
                      disabled={row.anyPort}
                      className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]"
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={`source-any-port-${row.id}`}
                        checked={row.anyPort}
                        onCheckedChange={(checked) => updateSourceRow(row.id, { anyPort: checked as boolean })}
                        className="data-[state=checked]:bg-[#5885cc]"
                      />
                      <Label 
                        htmlFor={`source-any-port-${row.id}`}
                        className="text-[13px] font-normal text-[#191c25] cursor-pointer"
                      >
                        Any
                      </Label>
                    </div>
                  </div>
                </>
              ) : (
                /* Zone type - only multiselect dropdown, no protocol or ports */
                <div className="flex-1 relative">
                  <button
                    onClick={() => setZoneDropdownOpen(zoneDropdownOpen === row.id ? null : row.id)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[8px] h-[43px] px-[13px] flex items-center justify-between"
                  >
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {row.zones && row.zones.length > 0 ? (
                        row.zones.map(zone => (
                          <div key={zone} className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] px-[8px] py-[4px] flex items-center gap-2">
                            <span className="text-[12px] text-[#364153]">{zone}</span>
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSourceZone(row.id, zone);
                              }}
                              className="text-[#9ca3af] hover:text-[#6a7282] cursor-pointer"
                            >
                              <X className="w-3 h-3" />
                            </span>
                          </div>
                        ))
                      ) : (
                        <span className="text-[14px] text-[#9ca3af]">Select zones</span>
                      )}
                    </div>
                    <svg className="w-4 h-4 text-[#717182] opacity-50" fill="none" viewBox="0 0 16 16">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {zoneDropdownOpen === row.id && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] z-50">
                      {ZONES.map(zone => {
                        const isSelected = row.zones?.includes(zone);
                        return (
                          <button
                            key={zone}
                            onClick={() => toggleSourceZone(row.id, zone)}
                            className={`w-full px-[13px] py-[8px] text-left text-[14px] hover:bg-[#f7f2f2] ${
                              isSelected ? 'bg-[#f7f2f2]' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span>{zone}</span>
                              {isSelected && (
                                <svg className="w-3 h-3 text-[#3b82f6] ml-auto" fill="none" viewBox="0 0 17 14">
                                  <path d="M1.5 7L6.5 12L15.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Remove button */}
              <button
                onClick={() => removeSourceRow(row.id)}
                className="w-[24px] h-[24px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity mt-[6px]"
              >
                <div className="border-[1.5px] border-[#5885cc] rounded-[3px] w-full h-full flex items-center justify-center">
                  <Minus className="w-3 h-3 text-[#5885cc]" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Destination */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
              Destination
            </h3>
            <button
              onClick={() => addDestinationRow('Zone')}
              className="w-[24px] h-[24px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="border-[1.5px] border-[#5885cc] rounded-[3px] w-full h-full flex items-center justify-center">
                <Plus className="w-3 h-3 text-[#5885cc]" />
              </div>
            </button>
          </div>
          
          {destinationRows.map((row, index) => (
            <div key={row.id} className="flex gap-[8px] items-start">
              {/* Type Selector */}
              <div className="w-[148px]">
                <Select 
                  value={row.type} 
                  onValueChange={(v) => {
                    const newType = v as 'Zone' | 'IP Range';
                    updateDestinationRow(row.id, {
                      type: newType,
                      zone: newType === 'Zone' ? '' : undefined,
                      subnet: newType === 'Zone' ? '' : undefined,
                      ipRange: newType === 'IP Range' ? '' : undefined,
                    });
                  }}
                >
                  <SelectTrigger className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Zone">Zone</SelectItem>
                    <SelectItem value="IP Range">IP Ranges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* IP Range or Zone selector */}
              {row.type === 'IP Range' ? (
                <div className="flex-1 flex flex-col gap-[7px]">
                  <Input
                    placeholder="192.168.1.0/24"
                    value={row.ipRange || ''}
                    onChange={(e) => updateDestinationRow(row.id, { ipRange: e.target.value })}
                    disabled={row.anyIp}
                    className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]"
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id={`dest-any-ip-${row.id}`}
                      checked={row.anyIp}
                      onCheckedChange={(checked) => updateDestinationRow(row.id, { anyIp: checked as boolean })}
                    />
                    <Label 
                      htmlFor={`dest-any-ip-${row.id}`}
                      className="text-[13px] font-normal text-[#191c25] cursor-pointer"
                    >
                      Any
                    </Label>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex gap-[6px]">
                  <Select 
                    value={row.zone || ''} 
                    onValueChange={(v) => updateDestinationRow(row.id, { zone: v })}
                  >
                    <SelectTrigger className="bg-white border-[#e5e7eb] rounded-[8px] h-[43px]">
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {ZONES.map(zone => (
                        <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Subnet: Ex:192.168.0.0"
                    value={row.subnet || ''}
                    onChange={(e) => updateDestinationRow(row.id, { subnet: e.target.value })}
                    className="bg-white border-[#e5e7eb] rounded-[8px] h-[43px]"
                  />
                </div>
              )}

              {/* For IP Range rows, show protocol and ports */}
              {row.type === 'IP Range' && (
                <>
                  {/* Protocol */}
                  <div className="w-[125px]">
                    <Select 
                      value={row.protocol} 
                      onValueChange={(v) => updateDestinationRow(row.id, { protocol: v })}
                    >
                      <SelectTrigger className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Any">All Protocols</SelectItem>
                        <SelectItem value="TCP">TCP</SelectItem>
                        <SelectItem value="UDP">UDP</SelectItem>
                        <SelectItem value="ICMP">ICMP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Ports */}
                  <div className="w-[291px] flex flex-col gap-[7px]">
                    <Input
                      placeholder="Ports: ex: 22, 50-250"
                      value={row.port}
                      onChange={(e) => updateDestinationRow(row.id, { port: e.target.value })}
                      disabled={row.anyPort}
                      className="bg-white border-[#e5e7eb] rounded-[8px] h-[36px]"
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={`dest-any-port-${row.id}`}
                        checked={row.anyPort}
                        onCheckedChange={(checked) => updateDestinationRow(row.id, { anyPort: checked as boolean })}
                        className="data-[state=checked]:bg-[#5885cc]"
                      />
                      <Label 
                        htmlFor={`dest-any-port-${row.id}`}
                        className="text-[13px] font-normal text-[#191c25] cursor-pointer"
                      >
                        Any
                      </Label>
                    </div>
                  </div>
                </>
              )}

              {/* Remove button */}
              <button
                onClick={() => removeDestinationRow(row.id)}
                className="w-[24px] h-[24px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity mt-[6px]"
              >
                <div className="border-[1.5px] border-[#5885cc] rounded-[3px] w-full h-full flex items-center justify-center">
                  <Minus className="w-3 h-3 text-[#5885cc]" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Controls */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="px-[28px] py-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#dbeafe] text-white w-[24px] h-[24px] rounded-full flex items-center justify-center font-['Inter',sans-serif] font-bold text-[12px] text-[#1447E6]">
              4
            </div>
            <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
              Security Controls
            </h3>
          </div>

          {/* Category Blocking */}
          <SecurityControlCard
            title="Category Blocking"
            enabled={categoryBlockingEnabled}
            onToggle={setCategoryBlockingEnabled}
            helperText="Select categories for blocking"
            selectConfig={{
              buttonLabel: 'Select categories to Block',
              options: CATEGORY_LIST,
              selected: blockedCategories,
              onSelect: (item) => setBlockedCategories((prev) => [...prev, item]),
              onRemove: (item) => setBlockedCategories((prev) => prev.filter((c) => c !== item)),
            }}
          />

          {/* Application Blocking */}
          <SecurityControlCard
            title="Application Blocking"
            enabled={appBlockingEnabled}
            onToggle={setAppBlockingEnabled}
            helperText="Which applications would you like to block access to?"
            selectConfig={{
              buttonLabel: 'Select Apps',
              options: APP_LIST,
              selected: blockedApps,
              onSelect: (item) => setBlockedApps((prev) => [...prev, item]),
              onRemove: (item) => setBlockedApps((prev) => prev.filter((a) => a !== item)),
            }}
          />

          {/* Application Bypass */}
          <SecurityControlCard
            title="Application Bypass"
            enabled={appBypassEnabled}
            onToggle={setAppBypassEnabled}
            helperText="Which applications should bypass this policy?"
            selectConfig={{
              buttonLabel: 'Select Apps',
              options: APP_LIST,
              selected: bypassApps,
              onSelect: (item) => setBypassApps((prev) => [...prev, item]),
              onRemove: (item) => setBypassApps((prev) => prev.filter((a) => a !== item)),
            }}
          />

          {/* Domain Blocking */}
          <SecurityControlCard
            title="Domain Blocking"
            enabled={domainBlockingEnabled}
            onToggle={setDomainBlockingEnabled}
            helperText="Which domains would you like to block access to?"
            subText="Includes subdomains (e.g gambling.com would include bets.gambling.com)"
            domainConfig={{
              domains: blockedDomains,
              onAdd: (d) => setBlockedDomains((prev) => [...prev, d]),
              onRemove: (d) => setBlockedDomains((prev) => prev.filter((x) => x !== d)),
            }}
          />

          {/* Domain Bypass */}
          <SecurityControlCard
            title="Domain Bypass"
            enabled={domainBypassEnabled}
            onToggle={setDomainBypassEnabled}
            helperText="Which domains should bypass this policy?"
            subText="Includes subdomains (e.g salesforce.com would include login.salesforce.com)"
            domainConfig={{
              domains: bypassDomains,
              onAdd: (d) => setBypassDomains((prev) => [...prev, d]),
              onRemove: (d) => setBypassDomains((prev) => prev.filter((x) => x !== d)),
            }}
          />

          {/* Geo-Blocking */}
          <SecurityControlCard
            title="Geo-Blocking"
            enabled={geoBlockingEnabled}
            onToggle={setGeoBlockingEnabled}
            helperText="Block traffic to high-risk regions"
            selectConfig={{
              buttonLabel: 'Select Regions',
              options: GEO_LIST,
              selected: blockedRegions,
              onSelect: (item) => setBlockedRegions((prev) => [...prev, item]),
              onRemove: (item) => setBlockedRegions((prev) => prev.filter((r) => r !== item)),
            }}
          />

          {/* URL Blocking */}
          <div className="flex flex-col gap-[8px] pt-[8px]">
            <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[20px] text-[#101828]">
              URL Blocking
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#9ca3af]">
              Risk Based URL Blocking is not supported on Linux and Chromebooks. Linux based devices and Chromebooks will not be affected if this feature is enabled.
            </p>
          </div>

          {/* Risk-Based URL Blocking */}
          <SecurityControlCard
            title="Risk-Based URL Blocking (AI/NLP)"
            enabled={riskBlockingEnabled}
            onToggle={setRiskBlockingEnabled}
            helperText="AI-based classification to prevent phishing and typo-squatting"
          >
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
          </SecurityControlCard>

          {/* URL Allowlist */}
          <SecurityControlCard
            title="URL Allowlist"
            enabled={urlAllowlistEnabled}
            onToggle={setUrlAllowlistEnabled}
            helperText="Add only business-critical domains to ensure inspection never interferes with operations"
            domainConfig={{
              domains: allowlistDomains,
              onAdd: (d) => setAllowlistDomains((prev) => [...prev, d]),
              onRemove: (d) => setAllowlistDomains((prev) => prev.filter((x) => x !== d)),
            }}
          />

          {/* Flood Protection */}
          <SecurityControlCard
            title="Flood Protection"
            enabled={floodProtectionEnabled}
            onToggle={setFloodProtectionEnabled}
            helperText=""
          />

          {/* IPS */}
          <SecurityControlCard
            title="IPS"
            enabled={ipsEnabled}
            onToggle={setIpsEnabled}
            helperText=""
          />
        </div>
      </div>

      {/* Preview */}
      {isFormValid && (
        <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="px-[28px] py-[20px] flex flex-col gap-[8px]">
            <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
              Policy Summary
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153]">
              This policy will{' '}
              <span className="font-bold" style={{ color: actionColor }}>
                {action.toUpperCase()}
              </span>{' '}
              traffic from{' '}
              <span className="font-semibold text-[#101828]">{sourceRows.map(row => row.type === 'Zone' ? row.zones?.join(', ') : row.ipRange).join(', ')}</span> to{' '}
              <span className="font-semibold text-[#101828]">{destinationRows.map(row => row.type === 'Zone' ? row.zone : row.ipRange).join(', ')}</span>
              .
            </p>
          </div>
        </div>
      )}

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
          <Save className="w-[14px] h-[14px]" />
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
            {isEdit ? 'Save Changes' : 'Create Policy'}
          </span>
        </Button>
      </div>
    </div>
  );
}