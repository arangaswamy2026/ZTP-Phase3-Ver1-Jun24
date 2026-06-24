import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronRight, Info } from 'lucide-react';
import { Separator } from './ui/separator';

interface TrustCheck {
  id: string;
  name: string;
  enabled: boolean;
  configurable: boolean;
  config?: {
    minVersion?: string;
    required?: boolean;
  };
}

interface CreatePostureProfileFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (profile: any) => void;
}

export function CreatePostureProfileForm({
  open,
  onOpenChange,
  onSave,
}: CreatePostureProfileFormProps) {
  const [profileName, setProfileName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  
  const [checks, setChecks] = useState<TrustCheck[]>([
    {
      id: 'os-compliance',
      name: 'Operating System Compliance',
      enabled: false,
      configurable: true,
      config: { minVersion: '', required: true },
    },
    {
      id: 'antivirus',
      name: 'Antivirus Enabled',
      enabled: false,
      configurable: false,
    },
    {
      id: 'firewall',
      name: 'Firewall Enabled',
      enabled: false,
      configurable: false,
    },
    {
      id: 'disk-encryption',
      name: 'Disk Encryption Enabled',
      enabled: false,
      configurable: false,
    },
    {
      id: 'patch-level',
      name: 'Patch Level Up to Date',
      enabled: false,
      configurable: true,
      config: { minVersion: '', required: true },
    },
  ]);
  
  const [expandedChecks, setExpandedChecks] = useState<Set<string>>(new Set());
  
  const [trustLogic, setTrustLogic] = useState({
    allPass: 'high',
    someFail: 'medium',
    criticalFail: 'low',
  });

  const toggleCheck = (id: string) => {
    setChecks(checks.map(check =>
      check.id === id ? { ...check, enabled: !check.enabled } : check
    ));
  };

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedChecks);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedChecks(newExpanded);
  };

  const updateCheckConfig = (id: string, configKey: string, value: any) => {
    setChecks(checks.map(check =>
      check.id === id && check.config
        ? { ...check, config: { ...check.config, [configKey]: value } }
        : check
    ));
  };

  const handleSave = () => {
    const profile = {
      name: profileName,
      description,
      status: isActive ? 'active' : 'disabled',
      checks: checks.filter(c => c.enabled),
      trustLogic,
    };
    onSave?.(profile);
    onOpenChange(false);
    // Reset form
    setProfileName('');
    setDescription('');
    setIsActive(true);
    setChecks(checks.map(c => ({ ...c, enabled: false })));
  };

  const handleCancel = () => {
    onOpenChange(false);
    // Reset form
    setProfileName('');
    setDescription('');
    setIsActive(true);
    setChecks(checks.map(c => ({ ...c, enabled: false })));
  };

  const getTrustBadgeColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto flex flex-col">
        <SheetHeader>
          <SheetTitle>Create Posture Profile</SheetTitle>
          <SheetDescription>
            Configure device trust checks and rules to evaluate endpoint security posture
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 space-y-6 py-6">
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Basic Information</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="profile-name">Profile Name *</Label>
              <Input
                id="profile-name"
                placeholder="e.g., Corporate Standard"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose and scope of this profile..."
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="space-y-0.5">
                <Label>Status</Label>
                <p className="text-sm text-gray-500">
                  {isActive ? 'Profile is active' : 'Profile is disabled'}
                </p>
              </div>
              <Switch
                checked={isActive}
                onCheckedChange={setIsActive}
              />
            </div>
          </div>

          <Separator />

          {/* Section 2: Trust Factors / Device Checks */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Device Trust Checks</h3>
              <p className="text-sm text-gray-500">
                Select which security controls to validate on devices
              </p>
            </div>

            <div className="space-y-2">
              {checks.map((check) => (
                <div key={check.id} className="border rounded-lg">
                  <div className="flex items-start gap-3 p-4">
                    <Checkbox
                      id={check.id}
                      checked={check.enabled}
                      onCheckedChange={() => toggleCheck(check.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor={check.id}
                          className="font-medium cursor-pointer"
                        >
                          {check.name}
                        </Label>
                        {check.configurable && check.enabled && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(check.id)}
                            className="h-6 px-2"
                          >
                            {expandedChecks.has(check.id) ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </Button>
                        )}
                      </div>
                      
                      {/* Expanded Configuration */}
                      {check.configurable && check.enabled && expandedChecks.has(check.id) && (
                        <div className="mt-3 pt-3 border-t space-y-3">
                          {check.id === 'os-compliance' && (
                            <div className="space-y-2">
                              <Label className="text-sm">Minimum OS Version</Label>
                              <Input
                                placeholder="e.g., Windows 10, macOS 12.0"
                                value={check.config?.minVersion || ''}
                                onChange={(e) =>
                                  updateCheckConfig(check.id, 'minVersion', e.target.value)
                                }
                                className="h-8"
                              />
                              <p className="text-xs text-gray-500">
                                Specify the minimum acceptable OS version
                              </p>
                            </div>
                          )}
                          {check.id === 'patch-level' && (
                            <div className="space-y-2">
                              <Label className="text-sm">Maximum Days Since Last Update</Label>
                              <Input
                                type="number"
                                placeholder="e.g., 30"
                                value={check.config?.minVersion || ''}
                                onChange={(e) =>
                                  updateCheckConfig(check.id, 'minVersion', e.target.value)
                                }
                                className="h-8"
                              />
                              <p className="text-xs text-gray-500">
                                Devices must have received updates within this time frame
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Section 3: Trust Score Logic */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Trust Score Logic</h3>
              <p className="text-sm text-gray-500">
                Define how trust levels are assigned based on check results
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">All checks pass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Assign trust level:</span>
                  <Badge className={getTrustBadgeColor(trustLogic.allPass)}>
                    {trustLogic.allPass.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-sm font-medium">Some checks fail</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Assign trust level:</span>
                  <Badge className={getTrustBadgeColor(trustLogic.someFail)}>
                    {trustLogic.someFail.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-sm font-medium">Critical checks fail</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Assign trust level:</span>
                  <Badge className={getTrustBadgeColor(trustLogic.criticalFail)}>
                    {trustLogic.criticalFail.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
              <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-900">
                Trust levels can be used in Access Policies to control what resources users can access based on their device's security posture.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Save Actions - Sticky Bottom Bar */}
        <div className="border-t bg-white pt-4 mt-auto">
          <div className="flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!profileName.trim()}
              className="bg-[#FF5D00] hover:bg-[#FF5D00]/90"
            >
              Save Profile
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
