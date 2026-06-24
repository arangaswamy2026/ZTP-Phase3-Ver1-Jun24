import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Textarea } from './ui/textarea';
import {
  X,
  Search,
  HardDrive,
  Chrome,
  CheckSquare,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ShieldAlert,
  ShieldMinus,
  ShieldOff,
  Ban,
  ArrowDown,
  Minus,
} from 'lucide-react';
import { CreateTrustProfile, TrustProfileModal } from './CreateTrustProfile';

// ── Access Action Card ───────────────────────────────────────────────

interface AccessActionCardProps {
  type: 'allow' | 'block';
  selected: boolean;
  onClick: () => void;
}

function AccessActionCard({ type, selected, onClick }: AccessActionCardProps) {
  const isAllow = type === 'allow';
  
  return (
    <button
      onClick={onClick}
      className={`flex flex-col gap-[12px] p-[20px] rounded-[12px] border-2 transition-all ${
        selected
          ? isAllow
            ? 'border-[#008236] bg-[#f0fdf4]'
            : 'border-[#d4183d] bg-[#fef2f2]'
          : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
      }`}
    >
      <div className="flex items-center gap-[12px]">
        {isAllow ? (
          <CheckCircle2 className={`w-[24px] h-[24px] ${selected ? 'text-[#008236]' : 'text-[#6a7282]'}`} />
        ) : (
          <XCircle className={`w-[24px] h-[24px] ${selected ? 'text-[#d4183d]' : 'text-[#6a7282]'}`} />
        )}
        <span className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">
          {isAllow ? 'Allow' : 'Block'}
        </span>
      </div>
      <p className="text-left font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
        {isAllow
          ? 'Allow specified traffic if conditions are met'
          : 'Block specified traffic'}
      </p>
    </button>
  );
}

// ── Source Type Option ───────────────────────────────────────────────

interface SourceTypeProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  count: number;
  selected: boolean;
  onClick: () => void;
}

function SourceTypeOption({ icon: Icon, label, count, selected, onClick }: SourceTypeProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between p-[12px] rounded-[8px] border transition-all ${
        selected
          ? 'border-[#1447E6] bg-[#eff6ff]'
          : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
      }`}
    >
      <div className="flex items-center gap-[10px]">
        <Icon className={`w-[18px] h-[18px] ${selected ? 'text-[#1447E6]' : 'text-[#6a7282]'}`} />
        <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
          {label}
        </span>
      </div>
      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#364153] border-none">
        {count}
      </Badge>
    </button>
  );
}

// ── Selected Tag ─────────────────────────────────────────────────────

interface SelectedTagProps {
  label: string;
  onRemove: () => void;
}

function SelectedTag({ label, onRemove }: SelectedTagProps) {
  return (
    <div className="inline-flex items-center gap-[6px] rounded-[6px] border border-[#d1d5db] bg-[#f9fafb] px-[10px] py-[6px]">
      <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#364153]">
        {label}
      </span>
      <button
        onClick={onRemove}
        className="flex items-center justify-center rounded-full hover:bg-[#e5e7eb] transition-colors"
      >
        <X className="w-[14px] h-[14px] text-[#6a7282]" />
      </button>
    </div>
  );
}

// ── Trust Factor Toggle ──────────────────────────────────────────────

interface TrustFactorToggleProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function TrustFactorToggle({ label, enabled, onChange }: TrustFactorToggleProps) {
  return (
    <div className="flex items-center justify-between py-[12px] border-b border-[#f3f4f6] last:border-b-0">
      <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153]">
        {label}
      </span>
      <Switch checked={enabled} onCheckedChange={onChange} />
    </div>
  );
}

// ── Segmented Control for Access Type ───────────────────────────────────
interface SegmentedControlProps {
  value: 'allow' | 'block';
  onChange: (value: 'allow' | 'block') => void;
}

function SegmentedControl({ value, onChange }: SegmentedControlProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="inline-flex rounded-[8px] border border-[#d1d5db] bg-[#f3f4f6] p-[4px]">
        <button
          onClick={() => onChange('allow')}
          className={`flex-1 px-[24px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
            value === 'allow'
              ? 'bg-white text-[#008236] shadow-sm'
              : 'text-[#6a7282] hover:text-[#364153]'
          }`}
        >
          ALLOW
        </button>
        <button
          onClick={() => onChange('block')}
          className={`flex-1 px-[24px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
            value === 'block'
              ? 'bg-white text-[#d4183d] shadow-sm'
              : 'text-[#6a7282] hover:text-[#364153]'
          }`}
        >
          BLOCK
        </button>
      </div>
      <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
        Choose whether the selected source can access the destination.
      </p>
    </div>
  );
}

// ── Destination Type Toggle ───────────────────────────────────
interface DestinationTypeToggleProps {
  value: 'ip' | 'fqdn';
  onChange: (value: 'ip' | 'fqdn') => void;
}

function DestinationTypeToggle({ value, onChange }: DestinationTypeToggleProps) {
  return (
    <div className="inline-flex rounded-[8px] border border-[#d1d5db] bg-[#f3f4f6] p-[4px]">
      <button
        onClick={() => onChange('ip')}
        className={`px-[20px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
          value === 'ip'
            ? 'bg-white text-[#364153] shadow-sm'
            : 'text-[#6a7282] hover:text-[#364153]'
        }`}
      >
        IP Ranges / IPs
      </button>
      <button
        onClick={() => onChange('fqdn')}
        className={`px-[20px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
          value === 'fqdn'
            ? 'bg-white text-[#364153] shadow-sm'
            : 'text-[#6a7282] hover:text-[#364153]'
        }`}
      >
        FQDNs
      </button>
    </div>
  );
}

// ── Source Type Toggle ───────────────────────────────────
interface SourceTypeToggleProps {
  value: 'users' | 'groups';
  onChange: (value: 'users' | 'groups') => void;
}

function SourceTypeToggle({ value, onChange }: SourceTypeToggleProps) {
  return (
    <div className="inline-flex rounded-[8px] border border-[#d1d5db] bg-[#f3f4f6] p-[4px]">
      <button
        onClick={() => onChange('users')}
        className={`px-[20px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
          value === 'users'
            ? 'bg-white text-[#364153] shadow-sm'
            : 'text-[#6a7282] hover:text-[#364153]'
        }`}
      >
        Users
      </button>
      <button
        onClick={() => onChange('groups')}
        className={`px-[20px] py-[10px] rounded-[6px] font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] transition-all ${
          value === 'groups'
            ? 'bg-white text-[#364153] shadow-sm'
            : 'text-[#6a7282] hover:text-[#364153]'
        }`}
      >
        Groups
      </button>
    </div>
  );
}

// ── Email Chip Input ───────────────────────────────────────────
interface EmailChipInputProps {
  emails: string[];
  onAdd: (email: string) => void;
  onRemove: (email: string) => void;
}

function EmailChipInput({ emails, onAdd, onRemove }: EmailChipInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        
        <Input
          type="email"
          placeholder="Enter email address and press Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="h-[40px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
        />
      </div>
      {emails.length > 0 && (
        <div className="flex flex-wrap gap-[8px]">
          {emails.map((email) => (
            <SelectedTag key={email} label={email} onRemove={() => onRemove(email)} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Checkbox List Item ───────────────────────────────────────
interface CheckboxListItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function CheckboxListItem({ id, label, checked, onChange }: CheckboxListItemProps) {
  return (
    <div className="flex items-center gap-[12px] p-[12px] rounded-[8px] border border-[#e5e7eb] bg-white hover:bg-[#f9fafb] transition-colors">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
      />
      <label
        htmlFor={id}
        className="flex-1 font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153] cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}

// ── Trust Factor Card ───────────────────────────────────────────
interface TrustFactorCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  trustLevel: 'High' | 'Medium' | 'Low';
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function TrustFactorCard({ icon: Icon, title, description, trustLevel, enabled, onChange }: TrustFactorCardProps) {
  const levelColors = {
    High: 'bg-[#008236] text-white',
    Medium: 'bg-[#FF9500] text-white',
    Low: 'bg-[#6a7282] text-white',
  };

  return (
    <div className={`flex flex-col gap-[12px] p-[16px] rounded-[12px] border-2 transition-all ${
      enabled ? 'border-[#1447E6] bg-[#f0f7ff]' : 'border-[#e5e7eb] bg-white'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[12px]">
          <div className={`flex items-center justify-center rounded-[8px] p-[8px] ${
            enabled ? 'bg-[#1447E6]' : 'bg-[#f3f4f6]'
          }`}>
            <Icon className={`w-[18px] h-[18px] ${enabled ? 'text-white' : 'text-[#6a7282]'}`} />
          </div>
          <div className="flex flex-col gap-[4px]">
            <h3 className="font-['Inter',sans-serif] font-bold text-[15px] leading-[20px] text-[#101828]">
              {title}
            </h3>
            <Badge className={`${levelColors[trustLevel]} hover:${levelColors[trustLevel]} w-fit border-none text-[11px] px-[8px] py-[2px]`}>
              {trustLevel}
            </Badge>
          </div>
        </div>
        <Switch checked={enabled} onCheckedChange={onChange} />
      </div>
      <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
        {description}
      </p>
    </div>
  );
}

// ── Security Profile Toggle ───────────────────────────────────
interface SecurityProfileToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function SecurityProfileToggle({ title, description, enabled, onChange }: SecurityProfileToggleProps) {
  return (
    <div className="flex items-center justify-between p-[16px] rounded-[8px] bg-white border border-[#e5e7eb]">
      <div className="flex flex-col gap-[4px] flex-1">
        <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
          {title}
        </span>
        <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
          {description}
        </span>
      </div>
      <Switch checked={enabled} onCheckedChange={onChange} />
    </div>
  );
}

// ── Role Creation Modal ───────────────────────────────────────
interface RoleCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateRole: (role: { name: string; description: string; scope: string }) => void;
}

function RoleCreationModal({ open, onOpenChange, onCreateRole }: RoleCreationModalProps) {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [scope, setScope] = useState('read');

  const handleCreate = () => {
    if (roleName.trim()) {
      onCreateRole({ name: roleName, description, scope });
      setRoleName('');
      setDescription('');
      setScope('read');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-['Inter',sans-serif] font-semibold text-[20px] leading-[28px] text-[#101828]">
            Create New Role
          </DialogTitle>
          <DialogDescription className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
            Define a new role with specific permissions and scope.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-[20px] py-[16px]">
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="role-name" className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
              Role Name
            </Label>
            <Input
              id="role-name"
              placeholder="e.g., Security Analyst"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="h-[40px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="role-description" className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
              Description
            </Label>
            <Textarea
              id="role-description"
              placeholder="Describe the role and responsibilities"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="role-scope" className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
              Permissions / Scope
            </Label>
            <Select value={scope} onValueChange={setScope}>
              <SelectTrigger id="role-scope" className="h-[40px] rounded-[8px] border-[#d1d5db]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="read">Read Only</SelectItem>
                <SelectItem value="write">Read & Write</SelectItem>
                <SelectItem value="admin">Full Admin Access</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
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
            onClick={handleCreate}
            disabled={!roleName.trim()}
            className="rounded-[8px] bg-[#1447E6] hover:bg-[#0f35b3] px-[20px]"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
              Create Role
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Main Component ───────────────────────────────────────────────────

export function SecureAccessPolicy() {
  const [accessAction, setAccessAction] = useState<'allow' | 'block'>('allow');
  const [policyName, setPolicyName] = useState('');
  const [policyDescription, setPolicyDescription] = useState('');
  
  // View state
  const [showTrustProfileCreation, setShowTrustProfileCreation] = useState(false);
  
  // Source tab state
  const [sourceTab, setSourceTab] = useState<'users' | 'groups'>('users');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isSourceSearchOpen, setIsSourceSearchOpen] = useState(false);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [selectedIdp, setSelectedIdp] = useState('microsoft'); // IDP selection
  const sourceSearchRef = useRef<HTMLDivElement>(null);
  
  // Destination state
  const [destinationRows, setDestinationRows] = useState<Array<{
    id: number;
    type: 'ip' | 'fqdn';
    value: string;
    protocol: string;
    ports: string;
    portsAny: boolean;
  }>>([
    { id: 1, type: 'ip', value: '', protocol: 'TCP', ports: '', portsAny: false }
  ]);
  
  // Device Trust state
  const [trustLevel, setTrustLevel] = useState('high-only');
  const [selectedTrustProfile, setSelectedTrustProfile] = useState('endpoint-compliance');
  
  // Security Profiles state
  const [securityProfiles, setSecurityProfiles] = useState({
    categoryBlocking: false,
    applicationBlocking: false,
    applicationBypass: false,
    domainBlocking: true,
    domainBypass: false,
    geoblocking: false,
  });

  const groups = ['Designers', 'Engineers', 'Marketing', 'Finance'];

  // IDP configuration
  const idpConfig: Record<string, { name: string; color: string; bgColor: string }> = {
    microsoft: { name: 'Microsoft Entra ID', color: '#00A4EF', bgColor: '#E3F2FD' },
    google: { name: 'Google Workspace', color: '#4285F4', bgColor: '#E8F0FE' },
    okta: { name: 'Okta', color: '#007DC1', bgColor: '#E3F2FD' },
  };

  const sourceResources: Record<string, string[]> = {
    users: ['john.doe@company.com', 'jane.smith@company.com', 'mike.chen@company.com', 'sarah.wilson@company.com', 'alex.kumar@company.com', 'emily.jones@company.com'],
    groups: groups,
  };

  const selectedSourceItems: Record<string, string[]> = {
    users: selectedUsers,
    groups: selectedGroups,
  };

  const toggleSourceItem = (item: string) => {
    if (sourceTab === 'users') {
      setSelectedUsers(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    } else {
      setSelectedGroups(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    }
  };

  const removeSourceItem = (item: string) => {
    if (sourceTab === 'users') {
      setSelectedUsers(prev => prev.filter(i => i !== item));
    } else {
      setSelectedGroups(prev => prev.filter(i => i !== item));
    }
  };

  const destinationResources = {
    Applications: ['Internal Dashboard', 'CRM Tool', 'Analytics Platform', 'HR Portal'],
    'Private Resources': ['Database Server', 'File Storage', 'Dev Environment', 'Staging Server'],
    'Private IP': ['10.0.1.0/24', '192.168.1.0/24', '172.16.0.0/16'],
  };

  const handleAddEmail = (email: string) => {
    if (!selectedUsers.includes(email)) {
      setSelectedUsers([...selectedUsers, email]);
    }
  };

  const handleRemoveEmail = (email: string) => {
    setSelectedUsers(selectedUsers.filter(e => e !== email));
  };

  const handleToggleGroup = (group: string) => {
    setSelectedGroups(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const handleTrustProfileComplete = () => {
    setShowTrustProfileCreation(false);
  };

  // Close source search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sourceSearchRef.current && !sourceSearchRef.current.contains(event.target as Node)) {
        setIsSourceSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1200px] mx-auto p-[32px]">
      {/* Page Header */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-['Inter',sans-serif] font-bold text-[28px] leading-[36px] tracking-[-0.5px] text-[#101828]">
          Private Access Policy
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#6a7282]">
          Configure access rules and security conditions for your organization
        </p>
      </div>

      {/* 1. Policy Name */}
      <div className="flex flex-col gap-[8px]">
        <Label htmlFor="policy-name" className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
          Policy Name
        </Label>
        <Input
          id="policy-name"
          placeholder="Enter policy name"
          value={policyName}
          onChange={(e) => setPolicyName(e.target.value)}
          className="h-[40px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
        />
      </div>

      {/* 2. Description */}
      <div className="flex flex-col gap-[8px]">
        <Label htmlFor="policy-description" className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
          Description
        </Label>
        <Textarea
          id="policy-description"
          placeholder="Enter policy description"
          value={policyDescription}
          onChange={(e) => setPolicyDescription(e.target.value)}
          className="min-h-[80px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
        />
      </div>

      {/* 3. Action (Segmented Control) */}
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">
            Action
          </h2>
        </div>
        <SegmentedControl value={accessAction} onChange={setAccessAction} />
      </div>

      {/* 4. FROM (Source) & 5. Destination - Side by Side */}
      <div className="flex flex-row gap-[24px] w-full">

      {/* FROM (Source) */}
      <div className="flex flex-col gap-[16px] flex-1 min-w-0">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">
            Source
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
            Select who can access the destination
          </p>
        </div>

        {/* Source Type Toggle */}
        <SourceTypeToggle
          value={sourceTab}
          onChange={(val) => { setSourceTab(val); setIsSourceSearchOpen(false); setUserSearchQuery(''); }}
        />

        {/* IDP Badge */}
        <div className="flex items-center gap-[8px]">
          <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
            Identity Provider:
          </span>
          <Badge
            className="border-none text-[12px] px-[8px] py-[2px]"
            style={{
              backgroundColor: idpConfig[selectedIdp].bgColor,
              color: idpConfig[selectedIdp].color
            }}
          >
            {idpConfig[selectedIdp].name}
          </Badge>
        </div>

        {/* Source Search & Select */}
        <div className="flex flex-col gap-[8px]" ref={sourceSearchRef}>
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] border border-[#d1d5db] bg-white">
              <Search className="w-[16px] h-[16px] text-[#6a7282] shrink-0" />
              <Input
                placeholder={`Search ${sourceTab.toLowerCase()}...`}
                className="h-[28px] border-none shadow-none focus-visible:ring-0 font-['Inter',sans-serif] text-[14px] p-0 flex-1"
                onFocus={() => setIsSourceSearchOpen(true)}
                value={userSearchQuery}
                onChange={(e) => setUserSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Selected Chips */}
          {selectedSourceItems[sourceTab]?.length > 0 && (
            <div className="flex flex-wrap gap-[8px]">
              {selectedSourceItems[sourceTab]?.map((item) => (
                <SelectedTag
                  key={item}
                  label={item}
                  onRemove={() => removeSourceItem(item)}
                />
              ))}
            </div>
          )}

          {/* Dropdown List */}
          {isSourceSearchOpen && (
            <div className="flex flex-col gap-[4px] max-h-[200px] overflow-y-auto p-[4px] rounded-[8px] border border-[#e5e7eb] bg-white shadow-sm">
              {sourceResources[sourceTab]
                ?.filter(item => 
                  !selectedSourceItems[sourceTab]?.includes(item) &&
                  item.toLowerCase().includes(userSearchQuery.toLowerCase())
                )
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      toggleSourceItem(item);
                      setUserSearchQuery('');
                    }}
                    className="flex items-center px-[12px] py-[10px] rounded-[6px] hover:bg-[#f9fafb] transition-colors text-left"
                  >
                    <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#364153]">
                      {item}
                    </span>
                  </button>
                ))}
              {sourceTab === 'roles' && (
                <button
                  onClick={() => setIsRoleModalOpen(true)}
                  className="flex items-center gap-[6px] px-[12px] py-[10px] rounded-[6px] text-[#1447E6] hover:bg-[#eff6ff] transition-colors"
                >
                  <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px]">
                    + Create New Role
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 5. Destination */}
      <div className="flex flex-col gap-[16px] flex-1 min-w-0">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">
            Destination
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
            Configure destination IP ranges, FQDNs, protocols, and ports
          </p>
        </div>

        {/* Destination Rows */}
        <div className="flex flex-col gap-[12px]">
          {destinationRows.map((row, index) => (
            <div key={row.id} className="flex flex-col gap-[12px] p-[16px] rounded-[8px] border border-[#e5e7eb] bg-white">
              {/* Toggle */}
              <DestinationTypeToggle
                value={row.type}
                onChange={(value) => {
                  setDestinationRows(prev => prev.map(r => r.id === row.id ? { ...r, type: value } : r));
                }}
              />

              {/* Input Field */}
              <Input
                placeholder={row.type === 'ip' ? 'Comma separated ex: 192.168.0.0/24, 10.0.4.5' : 'Comma separated ex: example.com, api.example.com'}
                value={row.value}
                onChange={(e) => {
                  setDestinationRows(prev => prev.map(r => r.id === row.id ? { ...r, value: e.target.value } : r));
                }}
                className="h-[40px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
              />

              {/* Protocol and Ports Row */}
              <div className="flex items-center gap-[12px]">
                {/* Protocol Dropdown */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <Label className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                    Protocol
                  </Label>
                  <Select
                    value={row.protocol}
                    onValueChange={(value) => {
                      setDestinationRows(prev => prev.map(r => r.id === row.id ? { ...r, protocol: value } : r));
                    }}
                  >
                    <SelectTrigger className="h-[40px] rounded-[8px] border-[#d1d5db]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TCP">TCP</SelectItem>
                      <SelectItem value="UDP">UDP</SelectItem>
                      <SelectItem value="ICMP">ICMP</SelectItem>
                      <SelectItem value="ANY">ANY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Ports Field */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <Label className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153]">
                    Ports
                  </Label>
                  <Input
                    placeholder={row.portsAny ? 'Any' : 'e.g., 80, 443, 8080-8090'}
                    value={row.portsAny ? '' : row.ports}
                    onChange={(e) => {
                      setDestinationRows(prev => prev.map(r => r.id === row.id ? { ...r, ports: e.target.value } : r));
                    }}
                    disabled={row.portsAny}
                    className="h-[40px] rounded-[8px] border-[#d1d5db] font-['Inter',sans-serif] text-[14px]"
                  />
                </div>

                {/* Any Checkbox */}
                <div className="flex items-center gap-[8px] pt-[24px]">
                  <Checkbox
                    id={`ports-any-${row.id}`}
                    checked={row.portsAny}
                    onCheckedChange={(checked) => {
                      setDestinationRows(prev => prev.map(r => r.id === row.id ? { ...r, portsAny: !!checked, ports: checked ? '' : r.ports } : r));
                    }}
                  />
                  <label
                    htmlFor={`ports-any-${row.id}`}
                    className="font-['Inter',sans-serif] font-medium text-[13px] leading-[18px] text-[#364153] cursor-pointer"
                  >
                    Any
                  </label>
                </div>

                {/* Remove Row Button (only show if more than 1 row) */}
                {destinationRows.length > 1 && (
                  <button
                    onClick={() => {
                      setDestinationRows(prev => prev.filter(r => r.id !== row.id));
                    }}
                    className="flex items-center justify-center w-[32px] h-[32px] rounded-[6px] hover:bg-[#fef2f2] transition-colors mt-[24px]"
                  >
                    <X className="w-[16px] h-[16px] text-[#d4183d]" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Add Another Row Button */}
          <button
            onClick={() => {
              const newId = Math.max(...destinationRows.map(r => r.id)) + 1;
              setDestinationRows(prev => [...prev, { id: newId, type: 'ip', value: '', protocol: 'TCP', ports: '', portsAny: false }]);
            }}
            className="flex items-center justify-center gap-[8px] py-[12px] rounded-[8px] border border-dashed border-[#d1d5db] hover:border-[#1447E6] hover:bg-[#eff6ff] transition-all"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#1447E6]">
              + Add Another Row
            </span>
          </button>
        </div>
      </div>

      </div> {/* End side-by-side wrapper */}

      {/* 6. Device Trust */}
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">Device Trust</h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
            Select the minimum trust level required. If a device's trust factors are not satisfied, the consequence shown on each card applies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[12px]">
          {/* High Trust Only */}
          <button
            onClick={() => setTrustLevel('high-only')}
            className={`flex flex-col gap-[12px] p-[20px] rounded-[12px] border-2 transition-all text-left ${
              trustLevel === 'high-only'
                ? 'border-[#008236] bg-[#f0fdf4]'
                : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
            }`}
          >
            <div className="flex items-center gap-[10px]">
              <div className={`flex items-center justify-center rounded-[8px] p-[8px] ${
                trustLevel === 'high-only' ? 'bg-[#008236]' : 'bg-[#f3f4f6]'
              }`}>
                <ShieldCheck className={`w-[20px] h-[20px] ${trustLevel === 'high-only' ? 'text-white' : 'text-[#6a7282]'}`} />
              </div>
              <Badge className={`${
                trustLevel === 'high-only' ? 'bg-[#008236] text-white hover:bg-[#008236]' : 'bg-[#e5e7eb] text-[#364153] hover:bg-[#e5e7eb]'
              } border-none text-[11px] px-[8px] py-[2px]`}>
                High
              </Badge>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                High Trust Only
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                Only devices with a high trust score are allowed access.
              </span>
            </div>
            <div className={`flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] mt-auto ${
              trustLevel === 'high-only' ? 'bg-[#dcfce7]' : 'bg-[#f3f4f6]'
            }`}>
              <Ban className={`w-[14px] h-[14px] shrink-0 ${trustLevel === 'high-only' ? 'text-[#d4183d]' : 'text-[#9ca3af]'}`} />
              <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[14px] ${trustLevel === 'high-only' ? 'text-[#364153]' : 'text-[#6a7282]'}`}>
                If not satisfied → Access Denied
              </span>
            </div>
          </button>

          {/* Medium or High Trust */}
          <button
            onClick={() => setTrustLevel('medium-high')}
            className={`flex flex-col gap-[12px] p-[20px] rounded-[12px] border-2 transition-all text-left ${
              trustLevel === 'medium-high'
                ? 'border-[#FF9500] bg-[#fffbeb]'
                : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
            }`}
          >
            <div className="flex items-center gap-[10px]">
              <div className={`flex items-center justify-center rounded-[8px] p-[8px] ${
                trustLevel === 'medium-high' ? 'bg-[#FF9500]' : 'bg-[#f3f4f6]'
              }`}>
                <ShieldAlert className={`w-[20px] h-[20px] ${trustLevel === 'medium-high' ? 'text-white' : 'text-[#6a7282]'}`} />
              </div>
              <Badge className={`${
                trustLevel === 'medium-high' ? 'bg-[#FF9500] text-white hover:bg-[#FF9500]' : 'bg-[#e5e7eb] text-[#364153] hover:bg-[#e5e7eb]'
              } border-none text-[11px] px-[8px] py-[2px]`}>
                Medium
              </Badge>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                Medium or High Trust
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                Devices with medium or high trust scores are allowed access.
              </span>
            </div>
            <div className={`flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] mt-auto ${
              trustLevel === 'medium-high' ? 'bg-[#fef3c7]' : 'bg-[#f3f4f6]'
            }`}>
              <ArrowDown className={`w-[14px] h-[14px] shrink-0 ${trustLevel === 'medium-high' ? 'text-[#d4183d]' : 'text-[#9ca3af]'}`} />
              <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[14px] ${trustLevel === 'medium-high' ? 'text-[#364153]' : 'text-[#6a7282]'}`}>
                If not satisfied → Drops to Low, denied
              </span>
            </div>
          </button>

          {/* Any Trust Level */}
          <button
            onClick={() => setTrustLevel('any')}
            className={`flex flex-col gap-[12px] p-[20px] rounded-[12px] border-2 transition-all text-left ${
              trustLevel === 'any'
                ? 'border-[#1447E6] bg-[#eff6ff]'
                : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
            }`}
          >
            <div className="flex items-center gap-[10px]">
              <div className={`flex items-center justify-center rounded-[8px] p-[8px] ${
                trustLevel === 'any' ? 'bg-[#1447E6]' : 'bg-[#f3f4f6]'
              }`}>
                <ShieldMinus className={`w-[20px] h-[20px] ${trustLevel === 'any' ? 'text-white' : 'text-[#6a7282]'}`} />
              </div>
              <Badge className={`${
                trustLevel === 'any' ? 'bg-[#1447E6] text-white hover:bg-[#1447E6]' : 'bg-[#e5e7eb] text-[#364153] hover:bg-[#e5e7eb]'
              } border-none text-[11px] px-[8px] py-[2px]`}>
                Any
              </Badge>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                Any Trust Level
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                All trust levels allowed except devices set to 'Always Deny'.
              </span>
            </div>
            <div className={`flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] mt-auto ${
              trustLevel === 'any' ? 'bg-[#dbeafe]' : 'bg-[#f3f4f6]'
            }`}>
              <ArrowDown className={`w-[14px] h-[14px] shrink-0 ${trustLevel === 'any' ? 'text-[#FF9500]' : 'text-[#9ca3af]'}`} />
              <span className={`font-['Inter',sans-serif] font-medium text-[11px] leading-[14px] ${trustLevel === 'any' ? 'text-[#364153]' : 'text-[#6a7282]'}`}>
                If not satisfied → Trust decreases, still allowed
              </span>
            </div>
          </button>

          {/* No Trust */}
          <button
            onClick={() => setTrustLevel('none')}
            className={`flex flex-col gap-[12px] p-[20px] rounded-[12px] border-2 transition-all text-left ${
              trustLevel === 'none'
                ? 'border-[#6a7282] bg-[#f9fafb]'
                : 'border-[#e5e7eb] bg-white hover:border-[#d1d5db]'
            }`}
          >
            <div className="flex items-center gap-[10px]">
              <div className={`flex items-center justify-center rounded-[8px] p-[8px] ${
                trustLevel === 'none' ? 'bg-[#6a7282]' : 'bg-[#f3f4f6]'
              }`}>
                <ShieldOff className={`w-[20px] h-[20px] ${trustLevel === 'none' ? 'text-white' : 'text-[#6a7282]'}`} />
              </div>
              <Badge className={`${
                trustLevel === 'none' ? 'bg-[#6a7282] text-white hover:bg-[#6a7282]' : 'bg-[#e5e7eb] text-[#364153] hover:bg-[#e5e7eb]'
              } border-none text-[11px] px-[8px] py-[2px]`}>
                None
              </Badge>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[20px] text-[#101828]">
                No Trust
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
                Ignore TrustScore entirely. No device trust verification required.
              </span>
            </div>
            <div className={`flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] mt-auto bg-[#f3f4f6]`}>
              <Minus className="w-[14px] h-[14px] shrink-0 text-[#9ca3af]" />
              <span className="font-['Inter',sans-serif] font-medium text-[11px] leading-[14px] text-[#6a7282]">
                If not satisfied → No impact, checks skipped
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* 7. Trust Profile */}
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-['Inter',sans-serif] font-bold text-[18px] leading-[24px] text-[#101828]">
            Trust Profile
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] text-[#6a7282]">
            This policy uses the default trust profile. Click to view or modify the trust factors.
          </p>
        </div>

        {/* Default Trust Profile Card */}
        <button
          onClick={() => setShowTrustProfileCreation(true)}
          className="flex items-start gap-[12px] p-[16px] rounded-[8px] border border-[#e5e7eb] bg-white text-left hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-all w-full"
        >
          <div className="flex items-center justify-center rounded-[8px] p-[8px] bg-[#f3f4f6] shrink-0">
            <ShieldCheck className="w-[18px] h-[18px] text-[#6a7282]" />
          </div>
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex items-center gap-[8px]">
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
                Default Trust Profile
              </span>
              <Badge className="bg-[#f3f4f6] text-[#6a7282] hover:bg-[#f3f4f6] border-none text-[10px] px-[6px] py-[1px]">
                Active
              </Badge>
            </div>
            <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[18px] text-[#6a7282]">
              Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.
            </span>
          </div>
        </button>
      </div>

      {/* Trust Profile Modal */}
      <TrustProfileModal
        open={showTrustProfileCreation}
        onOpenChange={setShowTrustProfileCreation}
      />

      {/* 8. Security Profiles */}
      

      {/* Bottom Actions */}
      <div className="flex items-center justify-end gap-[12px] pt-[8px] border-t border-[#e5e7eb]">
        <Button
          variant="outline"
          size="lg"
          className="rounded-[8px] border-[#d1d5db] px-[20px]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153]">
            Cancel
          </span>
        </Button>
        <Button
          size="lg"
          className="rounded-[8px] bg-[#1447E6] hover:bg-[#0f35b3] px-[20px]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] text-white">
            Create Policy
          </span>
        </Button>
      </div>
    </div>
  );
}