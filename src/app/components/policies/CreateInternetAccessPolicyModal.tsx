import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Globe, Shield, X, Plus, Minus } from 'lucide-react';

interface CreateInternetAccessPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (policy: any) => void;
}

interface SourceEntry {
  id: string;
  type: string;
  value: string;
}

interface DestinationEntry {
  id: string;
  type: string;
  value: string;
}

export function CreateInternetAccessPolicyModal({ isOpen, onClose, onCreate }: CreateInternetAccessPolicyModalProps) {
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');
  const [action, setAction] = useState('Allow');
  const [categories, setCategories] = useState<string[]>([]);
  const [applications, setApplications] = useState<string[]>([]);
  
  // Source entries - default to Groups
  const [sourceEntries, setSourceEntries] = useState<SourceEntry[]>([
    {
      id: '1',
      type: 'Groups',
      value: '',
    }
  ]);
  
  // Destination entries - default to Internet
  const [destEntries, setDestEntries] = useState<DestinationEntry[]>([
    {
      id: '1',
      type: 'Internet',
      value: 'Any',
    }
  ]);

  const addSourceEntry = () => {
    setSourceEntries([...sourceEntries, {
      id: Date.now().toString(),
      type: 'Groups',
      value: '',
    }]);
  };

  const removeSourceEntry = (id: string) => {
    if (sourceEntries.length > 1) {
      setSourceEntries(sourceEntries.filter(entry => entry.id !== id));
    }
  };

  const updateSourceEntry = (id: string, field: keyof SourceEntry, value: any) => {
    setSourceEntries(sourceEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const addDestEntry = () => {
    setDestEntries([...destEntries, {
      id: Date.now().toString(),
      type: 'Internet',
      value: 'Any',
    }]);
  };

  const removeDestEntry = (id: string) => {
    if (destEntries.length > 1) {
      setDestEntries(destEntries.filter(entry => entry.id !== id));
    }
  };

  const updateDestEntry = (id: string, field: keyof DestinationEntry, value: any) => {
    setDestEntries(destEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const handleCreate = () => {
    const newPolicy = {
      id: `sia-${Date.now()}`,
      name: policyName,
      description,
      action,
      type: 'SIA',
      source: sourceEntries.map(entry => entry.value),
      destination: destEntries.map(entry => entry.value),
      categories,
      applications,
    };
    onCreate?.(newPolicy);
    handleClose();
  };

  const handleClose = () => {
    setPolicyName('');
    setDescription('');
    setAction('Allow');
    setCategories([]);
    setApplications([]);
    setSourceEntries([
      {
        id: '1',
        type: 'Groups',
        value: '',
      }
    ]);
    setDestEntries([
      {
        id: '1',
        type: 'Internet',
        value: 'Any',
      }
    ]);
    onClose();
  };

  const isFormValid = policyName && sourceEntries.some(entry => entry.value);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="min-w-[60vw] w-[60vw] sm:max-w-[60vw] max-h-[90vh] p-0 gap-0 bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-5 space-y-5 shrink-0 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#ede9fe] text-[#7c3aed] border-[#c4b5fd] px-2.5 py-1 text-xs font-medium">
              Internet Access Policy
            </Badge>
          </div>
          <div>
            <DialogTitle className="text-2xl font-semibold text-[#101828] mb-0.5">
              Create New Internet Access Policy
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6a7282]">
              Configure a new policy to control user traffic to the public internet with category filtering and threat protection.
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-white">
          {/* Policy Name */}
          <div className="space-y-2">
            <Label htmlFor="policy-name" className="text-sm font-medium text-[#101828]">
              Policy Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="policy-name"
              placeholder="Enter policy name"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
              className="bg-white border-[#e5e7eb]"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-[#101828]">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter policy description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-white border-[#e5e7eb]"
            />
          </div>

          {/* Traffic Flow */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#101828]">Traffic Flow Configuration</h4>
            <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-4">
              <div className="flex items-center justify-between">
                {/* Source */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#4a5565]" />
                  </div>
                  <span className="text-[10px] text-[#6a7282] uppercase tracking-wide">Identity</span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1 flex-1">
                  <div className="h-0.5 w-full bg-[#e5e7eb]" />
                </div>

                {/* Destination */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#4a5565]" />
                  </div>
                  <span className="text-[10px] text-[#6a7282] uppercase tracking-wide">Internet</span>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#101828]">Policy Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="identity" className="text-sm font-medium text-[#101828]">
                  Identity (User/Group) <span className="text-red-500">*</span>
                </Label>
                <Select value={sourceEntries[0].value} onValueChange={(value) => updateSourceEntry(sourceEntries[0].id, 'value', value)}>
                  <SelectTrigger id="identity" className="bg-white border-[#e5e7eb]">
                    <SelectValue placeholder="Select identity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Users">All Users</SelectItem>
                    <SelectItem value="Engineering Team">Engineering Team</SelectItem>
                    <SelectItem value="Sales Team">Sales Team</SelectItem>
                    <SelectItem value="Marketing Team">Marketing Team</SelectItem>
                    <SelectItem value="Executives">Executives</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="action" className="text-sm font-medium text-[#101828]">
                  Action <span className="text-red-500">*</span>
                </Label>
                <Select value={action} onValueChange={setAction}>
                  <SelectTrigger id="action" className="bg-white border-[#e5e7eb]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Allow">Allow</SelectItem>
                    <SelectItem value="Block">Block</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Filters Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#101828]">Filtering & Protection</h4>
            
            <div className="bg-[#f9fafb] rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6a7282]" />
                <p className="text-sm font-medium text-[#101828]">Category Filtering</p>
              </div>
              <p className="text-xs text-[#6a7282]">
                Block specific website categories (e.g., Adult Content, Gambling, Social Media)
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white text-[#4a5565] hover:bg-white font-normal border border-[#e5e7eb]">
                  Adult / Pornography
                </Badge>
                <Badge variant="secondary" className="bg-white text-[#4a5565] hover:bg-white font-normal border border-[#e5e7eb]">
                  Gambling
                </Badge>
                <Badge variant="secondary" className="bg-white text-[#4a5565] hover:bg-white font-normal border border-[#e5e7eb]">
                  Social Media
                </Badge>
              </div>
            </div>

            <div className="bg-[#f9fafb] rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#6a7282]" />
                <p className="text-sm font-medium text-[#101828]">Application Control</p>
              </div>
              <p className="text-xs text-[#6a7282]">
                Control access to specific applications and services
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white text-[#4a5565] hover:bg-white font-normal border border-[#e5e7eb]">
                  Torrents & File Sharing
                </Badge>
                <Badge variant="secondary" className="bg-white text-[#4a5565] hover:bg-white font-normal border border-[#e5e7eb]">
                  Proxy / VPN Apps
                </Badge>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-xs text-green-800 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Threat Protection is enabled by default</span>
              </p>
              <p className="text-xs text-green-700 mt-1 ml-6">
                Protects against malware, phishing, and other security threats automatically.
              </p>
            </div>
          </div>

          {/* Preview */}
          {isFormValid && (
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-4 space-y-2">
              <p className="text-sm font-medium text-[#101828]">Policy Preview:</p>
              <p className="text-sm text-[#364153]">
                This policy will <span className={`font-bold ${action === 'Allow' ? 'text-[#008236]' : 'text-[#c10007]'}`}>{action.toUpperCase()}</span> internet access for{' '}
                <span className="font-semibold text-[#101828]">{sourceEntries.map(entry => entry.value).join(', ')}</span> with threat protection and content filtering enabled.
              </p>
            </div>
          )}
        </div>

        {/* Footer - Sticky */}
        <DialogFooter className="bg-[#f9fafb] border-t border-[#f3f4f6] px-6 py-6 flex flex-row justify-end items-center gap-3 shrink-0">
          <Button onClick={handleClose} variant="outline" className="border-[rgba(0,0,0,0.1)]">
            Cancel
          </Button>
          <Button 
            onClick={handleCreate} 
            disabled={!isFormValid}
            className="bg-[#d4183d] hover:bg-[#b01430] text-white"
          >
            Create Policy
          </Button>
        </DialogFooter>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 opacity-70 hover:opacity-100 rounded-sm p-0.5 z-10"
        >
          <X className="w-4 h-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
}