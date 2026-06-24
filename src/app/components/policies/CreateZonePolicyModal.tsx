import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
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
import { Network, X, Plus, Minus } from 'lucide-react';

interface CreateZonePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (policy: any) => void;
}

interface SourceEntry {
  id: string;
  type: string;
  zone: string;
  ipRange: string;
  anyIp: boolean;
  protocol: string;
  port: string;
}

interface DestinationEntry {
  id: string;
  type: string;
  zone: string;
  ipRange: string;
  anyIp: boolean;
  protocol: string;
  port: string;
}

export function CreateZonePolicyModal({ isOpen, onClose, onCreate }: CreateZonePolicyModalProps) {
  const [policyName, setPolicyName] = useState('');
  const [description, setDescription] = useState('');
  const [action, setAction] = useState('Allow');
  
  // Source fields - now an array for multiple entries
  const [sourceEntries, setSourceEntries] = useState<SourceEntry[]>([
    {
      id: '1',
      type: 'Zone',
      zone: '',
      ipRange: '',
      anyIp: false,
      protocol: 'Any',
      port: '',
    }
  ]);
  
  // Destination fields - now an array for multiple entries
  const [destEntries, setDestEntries] = useState<DestinationEntry[]>([
    {
      id: '1',
      type: 'Zone',
      zone: '',
      ipRange: '',
      anyIp: false,
      protocol: 'Any',
      port: '',
    }
  ]);

  const addSourceEntry = () => {
    setSourceEntries([...sourceEntries, {
      id: Date.now().toString(),
      type: 'Zone',
      zone: '',
      ipRange: '',
      anyIp: false,
      protocol: 'Any',
      port: '',
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
      type: 'Zone',
      zone: '',
      ipRange: '',
      anyIp: false,
      protocol: 'Any',
      port: '',
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
      id: `zone-${Date.now()}`,
      name: policyName,
      description,
      action,
      sourceEntries,
      destEntries,
      type: 'Zone',
    };
    onCreate?.(newPolicy);
    handleClose();
  };

  const handleClose = () => {
    setPolicyName('');
    setDescription('');
    setAction('Allow');
    setSourceEntries([
      {
        id: '1',
        type: 'Zone',
        zone: '',
        ipRange: '',
        anyIp: false,
        protocol: 'Any',
        port: '',
      }
    ]);
    setDestEntries([
      {
        id: '1',
        type: 'Zone',
        zone: '',
        ipRange: '',
        anyIp: false,
        protocol: 'Any',
        port: '',
      }
    ]);
    onClose();
  };

  const isFormValid = policyName && 
    sourceEntries.every(entry => 
      (entry.type === 'Zone' && entry.zone) || (entry.type === 'IP Range' && (entry.ipRange || entry.anyIp))
    ) &&
    destEntries.every(entry => 
      (entry.type === 'Zone' && entry.zone) || (entry.type === 'IP Range' && (entry.ipRange || entry.anyIp))
    );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="min-w-[60vw] w-[60vw] sm:max-w-[60vw] max-h-[90vh] p-0 gap-0 bg-white rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-5 space-y-5 shrink-0 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#fff7ed] text-[#f54900] border-[#ffd6a7] px-2.5 py-1 text-xs font-medium">
              Zone Policy
            </Badge>
          </div>
          <div>
            <DialogTitle className="text-2xl font-semibold text-[#101828] mb-0.5">
              Create New Zone Policy
            </DialogTitle>
            <DialogDescription className="text-sm text-[#6a7282]">
              Configure a new policy to control traffic between network zones on the Zero Trust Connector.
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

          {/* Action */}
          <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
            <h4 className="text-base font-semibold text-[#101828] mb-4">Action</h4>
            <div className="space-y-2">
              <Label htmlFor="action" className="text-sm font-medium text-[#364153]">
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

          {/* Source */}
          <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-semibold text-[#101828]">Source</h4>
              <button 
                onClick={addSourceEntry}
                className="opacity-50 hover:opacity-100 size-[24px] rounded-[3px] border border-[#5885cc] flex items-center justify-center"
              >
                <Plus className="w-[12px] h-[12px] text-[#5885cc]" />
              </button>
            </div>
            <div className="space-y-4">
              {sourceEntries.map(entry => (
                <div key={entry.id} className="flex gap-2 items-center">
                  <div className="w-[148px]">
                    <Select value={entry.type} onValueChange={(value) => updateSourceEntry(entry.id, 'type', value)}>
                      <SelectTrigger className="bg-white border-[#e5e7eb]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Zone">Zone</SelectItem>
                        <SelectItem value="IP Range">IP Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {entry.type === 'Zone' ? (
                    <div className="w-[276px]">
                      <Select value={entry.zone} onValueChange={(value) => updateSourceEntry(entry.id, 'zone', value)}>
                        <SelectTrigger className="bg-white border-[#e5e7eb]">
                          <SelectValue placeholder="Select Zones" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Employee">Employee</SelectItem>
                          <SelectItem value="Guest">Guest</SelectItem>
                          <SelectItem value="IOT">IOT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <>
                      <div className="w-[276px]">
                        <Select value="select" disabled>
                          <SelectTrigger className="bg-white border-[#e5e7eb]">
                            <SelectValue placeholder="Select IP Range" />
                          </SelectTrigger>
                        </Select>
                      </div>
                    </>
                  )}

                  {entry.type === 'IP Range' && (
                    <div className="flex-1">
                      <Input
                        placeholder="Subnet:  Ex:192.168.0.0"
                        value={entry.ipRange}
                        onChange={(e) => updateSourceEntry(entry.id, 'ipRange', e.target.value)}
                        disabled={entry.anyIp}
                        className="bg-white border-[#e5e7eb] opacity-30"
                      />
                    </div>
                  )}

                  {entry.type === 'Zone' && (
                    <div className="flex-1">
                      <Input
                        placeholder="Subnet:  Ex:192.168.0.0"
                        disabled
                        className="bg-white border-[#e5e7eb] opacity-30"
                      />
                    </div>
                  )}
                  
                  <button
                    onClick={() => removeSourceEntry(entry.id)}
                    disabled={sourceEntries.length === 1}
                    className="opacity-50 hover:opacity-100 size-[24px] rounded-[3px] border border-[#5885cc] flex items-center justify-center disabled:opacity-25"
                  >
                    <Minus className="w-[12px] h-[12px] text-[#5885cc]" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Destination */}
          <div className="bg-white border border-[#e5e7eb] rounded-[12px] p-5 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-semibold text-[#101828]">Destination</h4>
              <button 
                onClick={addDestEntry}
                className="opacity-50 hover:opacity-100 size-[24px] rounded-[3px] border border-[#5885cc] flex items-center justify-center"
              >
                <Plus className="w-[12px] h-[12px] text-[#5885cc]" />
              </button>
            </div>
            <div className="space-y-4">
              {destEntries.map(entry => (
                <div key={entry.id} className="flex gap-2 items-center">
                  <div className="w-[148px]">
                    <Select value={entry.type} onValueChange={(value) => updateDestEntry(entry.id, 'type', value)}>
                      <SelectTrigger className="bg-white border-[#e5e7eb]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Zone">Zone</SelectItem>
                        <SelectItem value="IP Range">IP Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {entry.type === 'Zone' ? (
                    <div className="w-[276px]">
                      <Select value={entry.zone} onValueChange={(value) => updateDestEntry(entry.id, 'zone', value)}>
                        <SelectTrigger className="bg-white border-[#e5e7eb]">
                          <SelectValue placeholder="Select Zones" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Employee">Employee</SelectItem>
                          <SelectItem value="Guest">Guest</SelectItem>
                          <SelectItem value="IOT">IOT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ) : (
                    <>
                      <div className="w-[276px]">
                        <Select value="select" disabled>
                          <SelectTrigger className="bg-white border-[#e5e7eb]">
                            <SelectValue placeholder="Select IP Range" />
                          </SelectTrigger>
                        </Select>
                      </div>
                    </>
                  )}

                  {entry.type === 'IP Range' && (
                    <div className="flex-1">
                      <Input
                        placeholder="Subnet:  Ex:192.168.0.0"
                        value={entry.ipRange}
                        onChange={(e) => updateDestEntry(entry.id, 'ipRange', e.target.value)}
                        disabled={entry.anyIp}
                        className="bg-white border-[#e5e7eb] opacity-30"
                      />
                    </div>
                  )}

                  {entry.type === 'Zone' && (
                    <div className="flex-1">
                      <Input
                        placeholder="Subnet:  Ex:192.168.0.0"
                        disabled
                        className="bg-white border-[#e5e7eb] opacity-30"
                      />
                    </div>
                  )}
                  
                  <button
                    onClick={() => removeDestEntry(entry.id)}
                    disabled={destEntries.length === 1}
                    className="opacity-50 hover:opacity-100 size-[24px] rounded-[3px] border border-[#5885cc] flex items-center justify-center disabled:opacity-25"
                  >
                    <Minus className="w-[12px] h-[12px] text-[#5885cc]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
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