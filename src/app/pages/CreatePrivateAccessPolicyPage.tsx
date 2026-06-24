import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Textarea } from '../components/ui/textarea';
import {
  Plus,
  Minus,
  ChevronDown,
  X,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { toast } from 'sonner@2.0.3';

const USERS_LIST = ['Alice', 'John', 'Sarah', 'Michael', 'Emily', 'David'];
const GROUPS_LIST = ['Design', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];

type SourceRow = {
  id: string;
  type: 'Users' | 'Groups';
  selectedItems: string[];
};

type DestinationRow = {
  id: string;
  type: 'FQDN' | 'IP Ranges';
  fqdn?: string;
  ipRange?: string;
  protocols: string;
  ports: string;
  anyProtocol: boolean;
  anyPort: boolean;
  anyIP: boolean;
};

export function CreatePrivateAccessPolicyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  // General Info
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');

  // Action - toggle between Allow/Block
  const [action, setAction] = useState<'ALLOW' | 'BLOCK'>('ALLOW');

  // Source & Destination
  const [sourceRows, setSourceRows] = useState<SourceRow[]>([
    { id: '1', type: 'Groups', selectedItems: [] },
  ]);
  const [destinationRows, setDestinationRows] = useState<DestinationRow[]>([
    { id: '1', type: 'IP Ranges', fqdn: '', ipRange: '', protocols: 'Protocols', ports: '', anyProtocol: false, anyPort: false, anyIP: false },
  ]);

  // Dropdowns state
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // Device Trust
  const [deviceTrust, setDeviceTrust] = useState<'high' | 'medium' | 'low' | 'ignore'>('ignore');

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
  const addDestinationRow = (type: 'FQDN' | 'IP Ranges') => {
    const newRow: DestinationRow = {
      id: Date.now().toString(),
      type,
      fqdn: '',
      ipRange: '',
      protocols: 'Protocols',
      ports: '',
      anyProtocol: false,
      anyPort: false,
      anyIP: false,
    };
    setDestinationRows([...destinationRows, newRow]);
  };

  const removeDestinationRow = (rowId: string) => {
    if (destinationRows.length > 1) {
      setDestinationRows(destinationRows.filter((row) => row.id !== rowId));
    }
  };

  const updateDestinationRow = (rowId: string, updates: Partial<DestinationRow>) => {
    setDestinationRows(
      destinationRows.map((row) =>
        row.id === rowId ? { ...row, ...updates } : row
      )
    );
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getOptionsForSourceType = (type: 'Users' | 'Groups') => {
    return type === 'Users' ? USERS_LIST : GROUPS_LIST;
  };

  return (
    <div className="flex flex-col gap-[24px] w-full max-w-[900px]">
      <PageHeader
        title="Create Private Access Policy"
        back={{ label: 'Back to Access Policies', onClick: () => navigate('/access-policies') }}
      />

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

      {/* Action */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
            Action
          </h3>

          <div className="flex w-full border border-[#e5e7eb] rounded-[8px] overflow-hidden">
            <button
              onClick={() => setAction('ALLOW')}
              className={`flex-1 h-[40px] font-['Inter',sans-serif] font-medium text-[14px] transition-colors ${
                action === 'ALLOW'
                  ? 'bg-[#f9fafb] text-[#16a34a]'
                  : 'bg-white text-[#6a7282] hover:bg-[#f9fafb]'
              }`}
            >
              ALLOW
            </button>
            <button
              onClick={() => setAction('BLOCK')}
              className={`flex-1 h-[40px] font-['Inter',sans-serif] font-medium text-[14px] transition-colors border-l border-[#e5e7eb] ${
                action === 'BLOCK'
                  ? 'bg-[#f9fafb] text-[#dc2626]'
                  : 'bg-white text-[#6a7282] hover:bg-[#f9fafb]'
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
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSourceItem(row.id, item);
                          }}
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
              onClick={() => addDestinationRow('IP Ranges')}
              className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <Plus className="w-[12px] h-[12px] text-[#0b8aeb]" />
            </button>
          </div>

          {destinationRows.map((row, index) => (
            <div key={row.id} className="flex flex-col gap-[8px]">
              <div className="flex gap-[6px] items-center">
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
                          updateDestinationRow(row.id, {
                            type: 'FQDN',
                            fqdn: '',
                            ipRange: '',
                          });
                          toggleDropdown(`destination-type-${row.id}`);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                      >
                        FQDN
                      </div>
                      <div
                        onClick={() => {
                          updateDestinationRow(row.id, {
                            type: 'IP Ranges',
                            fqdn: '',
                            ipRange: '',
                          });
                          toggleDropdown(`destination-type-${row.id}`);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                      >
                        IP Ranges
                      </div>
                    </div>
                  )}
                </div>

                {/* FQDN/IP Input */}
                <Input
                  placeholder={
                    row.type === 'FQDN'
                      ? 'internal.myapp.com'
                      : '192.168.1.0/24'
                  }
                  value={row.type === 'FQDN' ? row.fqdn : row.ipRange}
                  onChange={(e) =>
                    updateDestinationRow(row.id, {
                      [row.type === 'FQDN' ? 'fqdn' : 'ipRange']: e.target.value,
                    })
                  }
                  disabled={row.type === 'IP Ranges' && row.anyIP}
                  className="flex-1 bg-white border-[#e5e7eb] rounded-[8px] h-[43px] font-['Inter',sans-serif] text-[14px] disabled:bg-[#f9fafb] disabled:text-[#9ca3af]"
                />

                {/* Protocols Dropdown */}
                <div className="relative w-[148px]">
                  <button
                    data-dropdown-trigger
                    onClick={() => toggleDropdown(`destination-protocol-${row.id}`)}
                    className="w-full bg-white border border-[#e5e7eb] rounded-[8px] h-[43px] px-[13px] flex items-center justify-between"
                  >
                    <span className="text-[14px] text-[#9ca3af]">{row.protocols}</span>
                    <ChevronDown className="w-[16px] h-[16px] text-[#717182] opacity-50" />
                  </button>
                  {openDropdowns[`destination-protocol-${row.id}`] && (
                    <div
                      data-dropdown-menu
                      className="absolute top-full mt-1 left-0 w-full bg-white border border-[#e5e7eb] rounded-[8px] shadow-lg z-50"
                    >
                      <div
                        onClick={() => {
                          updateDestinationRow(row.id, { protocols: 'TCP' });
                          toggleDropdown(`destination-protocol-${row.id}`);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                      >
                        TCP
                      </div>
                      <div
                        onClick={() => {
                          updateDestinationRow(row.id, { protocols: 'UDP' });
                          toggleDropdown(`destination-protocol-${row.id}`);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                      >
                        UDP
                      </div>
                      <div
                        onClick={() => {
                          updateDestinationRow(row.id, { protocols: 'All Protocols' });
                          toggleDropdown(`destination-protocol-${row.id}`);
                        }}
                        className="px-[13px] py-[8px] hover:bg-[#f9fafb] cursor-pointer text-[14px] text-[#364153]"
                      >
                        All Protocols
                      </div>
                    </div>
                  )}
                </div>

                {/* Ports Input */}
                <Input
                  placeholder="Ports: ex 22, 50-250"
                  value={row.ports}
                  onChange={(e) => updateDestinationRow(row.id, { ports: e.target.value })}
                  disabled={row.anyPort}
                  className="w-[200px] bg-white border-[#e5e7eb] rounded-[8px] h-[43px] font-['Inter',sans-serif] text-[14px] disabled:bg-[#f9fafb] disabled:text-[#9ca3af]"
                />

                {/* Remove Button */}
                <button
                  onClick={() => removeDestinationRow(row.id)}
                  className="w-[24px] h-[24px] border border-[#0b8aeb] rounded-[3px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity shrink-0"
                >
                  <Minus className="w-[12px] h-[12px] text-[#0b8aeb]" />
                </button>
              </div>

              {/* Checkboxes Row */}
              {row.type === 'FQDN' ? (
                // FQDN: Only show "Any" under Ports
                <div className="flex items-center gap-[24px] ml-[154px]">
                  {/* Empty space under IP/FQDN field */}
                  <div style={{ width: 'calc(100% - 148px - 200px - 48px)' }} />
                  {/* Empty space under Protocols */}
                  <div style={{ width: '148px' }} />
                  {/* "Any" checkbox under Ports */}
                  <div className="flex items-center gap-[8px]" style={{ width: '200px' }}>
                    <Checkbox
                      checked={row.anyPort}
                      onCheckedChange={(checked) =>
                        updateDestinationRow(row.id, { anyPort: checked as boolean })
                      }
                    />
                    <Label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153] cursor-pointer">
                      Any
                    </Label>
                  </div>
                </div>
              ) : (
                // IP Ranges: Show "Any" under IP field and under Ports
                <div className="flex items-center gap-[6px] ml-[154px]">
                  {/* "Any" checkbox under IP field */}
                  <div className="flex items-center gap-[8px]" style={{ width: 'calc(100% - 148px - 200px - 48px)' }}>
                    <Checkbox
                      checked={row.anyIP}
                      onCheckedChange={(checked) =>
                        updateDestinationRow(row.id, { anyIP: checked as boolean })
                      }
                    />
                    <Label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153] cursor-pointer">
                      Any
                    </Label>
                  </div>
                  {/* Empty space under Protocols */}
                  <div style={{ width: '148px' }} />
                  {/* "Any" checkbox under Ports */}
                  <div className="flex items-center gap-[8px]" style={{ width: '200px' }}>
                    <Checkbox
                      checked={row.anyPort}
                      onCheckedChange={(checked) =>
                        updateDestinationRow(row.id, { anyPort: checked as boolean })
                      }
                    />
                    <Label className="font-['Inter',sans-serif] font-medium text-[13px] text-[#364153] cursor-pointer">
                      Any
                    </Label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Device Trust */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px] flex flex-col gap-[16px]">
          <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
            Device Trust
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
            Select the minimum trust level required. If a device's trust factors are not satisfied, consequences shown on each card applies.
          </p>

          <div className="grid grid-cols-2 gap-[16px]">
            {/* High Trust Level */}
            <button
              onClick={() => setDeviceTrust('high')}
              className={`relative flex flex-col gap-[12px] pl-[18px] pr-[2px] py-[18px] rounded-[8px] border-2 transition-all text-left ${
                deviceTrust === 'high'
                  ? 'border-[#1447E6] bg-[#f0f7ff]'
                  : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
              }`}
            >
              <h4 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
                High Trust Level
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                Only devices with a high trust score are allowed.
              </p>
            </button>

            {/* Medium Trust Level */}
            <button
              onClick={() => setDeviceTrust('medium')}
              className={`relative flex flex-col gap-[12px] pl-[18px] pr-[2px] py-[18px] rounded-[8px] border-2 transition-all text-left ${
                deviceTrust === 'medium'
                  ? 'border-[#1447E6] bg-[#f0f7ff]'
                  : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
              }`}
            >
              <h4 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
                Medium Trust Level
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                Devices with medium trust scores are allowed.
              </p>
            </button>

            {/* Low Trust Level */}
            <button
              onClick={() => setDeviceTrust('low')}
              className={`relative flex flex-col gap-[12px] pl-[18px] pr-[2px] py-[18px] rounded-[8px] border-2 transition-all text-left ${
                deviceTrust === 'low'
                  ? 'border-[#1447E6] bg-[#f0f7ff]'
                  : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
              }`}
            >
              <h4 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
                Low Trust Level
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                Devices with low trust scores are allowed.
              </p>
            </button>

            {/* Ignore Trust Level */}
            <button
              onClick={() => setDeviceTrust('ignore')}
              className={`relative flex flex-col gap-[12px] pl-[18px] pr-[2px] py-[18px] rounded-[8px] border-2 transition-all text-left ${
                deviceTrust === 'ignore'
                  ? 'border-[#1447E6] bg-[#f0f7ff]'
                  : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
              }`}
            >
              <h4 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
                Ignore Trust Level
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                All trust levels allowed.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Default Trust Profile */}
      <div className="bg-white rounded-[12px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="px-[28px] py-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[8px]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-[#101828]">
                  Default Trust Profile
                </h3>
                <span className="inline-flex items-center rounded-[6px] bg-[#dcfce7] px-[8px] py-[2px] font-['Inter',sans-serif] font-medium text-[11px] text-[#16a34a]">
                  Active
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
                Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-[8px] border-[#d1d5db] px-[16px]"
              onClick={() => navigate('/profiles/default-trust-profile')}
            >
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
                View
              </span>
            </Button>
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