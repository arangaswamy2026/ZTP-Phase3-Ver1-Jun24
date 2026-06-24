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
import { Lock, Shield, X, Plus, Minus } from 'lucide-react';

interface CreatePrivateAccessPolicyModalProps {
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

export function CreatePrivateAccessPolicyModal({ isOpen, onClose, onCreate }: CreatePrivateAccessPolicyModalProps) {
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');
  const [trustLevel, setTrustLevel] = useState('None');
  const [action, setAction] = useState('Allow');
  
  // Source entries - default to Groups
  const [sourceEntries, setSourceEntries] = useState<SourceEntry[]>([
    {
      id: '1',
      type: 'Groups',
      value: '',
    }
  ]);
  
  // Destination entries - default to IP Ranges
  const [destEntries, setDestEntries] = useState<DestinationEntry[]>([
    {
      id: '1',
      type: 'IP Ranges',
      value: '',
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
      type: 'IP Ranges',
      value: '',
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
      id: `spa-${Date.now()}`,
      name: policyName,
      description,
      identity: sourceEntries.map(entry => entry.value).filter(value => value),
      destination: destEntries.map(entry => entry.value).filter(value => value),
      trustCondition: trustLevel,
      action,
      type: 'SPA',
      source: 'User',
    };
    onCreate?.(newPolicy);
    handleClose();
  };

  const handleClose = () => {
    setPolicyName('');
    setDescription('');
    setTrustLevel('None');
    setAction('Allow');
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
        type: 'IP Ranges',
        value: '',
      }
    ]);
    onClose();
  };

  const isFormValid = policyName && sourceEntries.some(entry => entry.value) && destEntries.some(entry => entry.value);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="min-w-[60vw] w-[60vw] sm:max-w-[60vw] max-h-[90vh] p-0 gap-0 bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-5 space-y-5 shrink-0 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#eff6ff] text-[#155dfc] border-[#bedbff] px-2.5 py-1 text-xs font-medium">
              Private Access Policy
            </Badge>
          </div>
          <div>
            <DialogTitle className="text-2xl font-semibold text-[#101828] mb-0.5">
              Create New Private Access Policy
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6a7282]">
              Configure a new policy to control user access to internal applications and resources using Zero Trust principles.
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
                    <Lock className="w-4 h-4 text-[#4a5565]" />
                  </div>
                  <span className="text-[10px] text-[#6a7282] uppercase tracking-wide">Private Resource</span>
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
                    <SelectItem value="Finance Team">Finance Team</SelectItem>
                    <SelectItem value="HR Team">HR Team</SelectItem>
                    <SelectItem value="Executives">Executives</SelectItem>
                  </SelectContent>
                </Select>
                {sourceEntries.length > 1 && (
                  <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 cursor-pointer" onClick={() => removeSourceEntry(sourceEntries[0].id)} />
                    <Plus className="w-4 h-4 cursor-pointer" onClick={addSourceEntry} />
                  </div>
                )}
                {sourceEntries.length === 1 && (
                  <Plus className="w-4 h-4 cursor-pointer" onClick={addSourceEntry} />
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-sm font-medium text-[#101828]">
                  Destination Resource <span className="text-red-500">*</span>
                </Label>
                <Select value={destEntries[0].value} onValueChange={(value) => updateDestEntry(destEntries[0].id, 'value', value)}>
                  <SelectTrigger id="destination" className="bg-white border-[#e5e7eb]">
                    <SelectValue placeholder="Select resource" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PCI Server">PCI Server</SelectItem>
                    <SelectItem value="HR System">HR System</SelectItem>
                    <SelectItem value="Finance Database">Finance Database</SelectItem>
                    <SelectItem value="CRM Application">CRM Application</SelectItem>
                    <SelectItem value="Internal Wiki">Internal Wiki</SelectItem>
                    <SelectItem value="Dev Environment">Dev Environment</SelectItem>
                  </SelectContent>
                </Select>
                {destEntries.length > 1 && (
                  <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 cursor-pointer" onClick={() => removeDestEntry(destEntries[0].id)} />
                    <Plus className="w-4 h-4 cursor-pointer" onClick={addDestEntry} />
                  </div>
                )}
                {destEntries.length === 1 && (
                  <Plus className="w-4 h-4 cursor-pointer" onClick={addDestEntry} />
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="trust-level" className="text-sm font-medium text-[#101828]">
                  Trust Level Requirement
                </Label>
                <Select value={trustLevel} onValueChange={setTrustLevel}>
                  <SelectTrigger id="trust-level" className="bg-white border-[#e5e7eb]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="None">None (Default)</SelectItem>
                    <SelectItem value="Compliant, Managed Device">Compliant, Managed Device</SelectItem>
                    <SelectItem value="High Trust Score">High Trust Score</SelectItem>
                    <SelectItem value="Multi-Factor Authentication">Multi-Factor Authentication</SelectItem>
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

          {/* Zero Trust Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <p className="text-sm font-medium text-blue-900">Zero Trust Security</p>
            </div>
            <p className="text-xs text-blue-800 pl-6">
              Private Access policies enforce Zero Trust principles by verifying identity and device posture before granting access to sensitive resources. Trust levels add an additional layer of security by requiring specific device compliance or trust scores.
            </p>
          </div>

          {/* Preview */}
          {isFormValid && (
            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-4 space-y-2">
              <p className="text-sm font-medium text-[#101828]">Policy Preview:</p>
              <p className="text-sm text-[#364153]">
                This policy will <span className={`font-bold ${action === 'Allow' ? 'text-[#008236]' : 'text-[#c10007]'}`}>{action.toUpperCase()}</span> access for{' '}
                <span className="font-semibold text-[#101828]">{sourceEntries.map(entry => entry.value).filter(value => value).join(', ')}</span> to{' '}
                <span className="font-semibold text-[#101828]">{destEntries.map(entry => entry.value).filter(value => value).join(', ')}</span>
                {trustLevel !== 'None' && (
                  <span>
                    {' '}with <span className="font-semibold text-[#432dd7]">{trustLevel}</span> requirement
                  </span>
                )}.
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