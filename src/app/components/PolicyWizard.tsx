import React from 'react';
import {
  Shield,
  Users,
  Globe,
  Settings,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  X,
  Plus,
  Search,
  Lock,
  Clock,
  MapPin,
  Smartphone,
  Network,
  PlayCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface PolicyWizardProps {
  isOpen: boolean;
  onClose: () => void;
  policyId?: string;
}

interface PolicyFormData {
  name: string;
  description: string;
  enabled: boolean;
  action: 'allow' | 'deny';
  sourceType: 'groups' | 'users' | 'all';
  selectedGroups: string[];
  selectedUsers: string[];
  targetType: 'apps' | 'resources' | 'all';
  selectedApps: string[];
  selectedResources: string[];
  conditions: {
    requireMfa: boolean;
    requireCompliance: boolean;
    allowedLocations: string[];
    timeRestrictions: boolean;
    timeSchedule: string;
  };
  connectors: string[];
  priority: number;
}

export function PolicyWizard({ isOpen, onClose, policyId }: PolicyWizardProps) {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<PolicyFormData>({
    name: '',
    description: '',
    enabled: true,
    action: 'allow',
    sourceType: 'groups',
    selectedGroups: [],
    selectedUsers: [],
    targetType: 'apps',
    selectedApps: [],
    selectedResources: [],
    conditions: {
      requireMfa: false,
      requireCompliance: false,
      allowedLocations: [],
      timeRestrictions: false,
      timeSchedule: 'business_hours',
    },
    connectors: [],
    priority: 1,
  });

  const steps = [
    { number: 1, title: 'Basic Info', icon: Shield },
    { number: 2, title: 'Source', icon: Users },
    { number: 3, title: 'Destination', icon: Globe },
    { number: 4, title: 'Conditions', icon: Settings },
    { number: 5, title: 'Review', icon: CheckCircle },
  ];

  // Mock data
  const availableGroups = [
    'Engineering',
    'DevOps',
    'Finance',
    'HR',
    'Marketing',
    'Sales',
    'Contractors',
    'Executives',
  ];
  const availableApps = [
    'Dev Portal',
    'Staging API',
    'Production Dashboard',
    'ERP System',
    'Finance Dashboard',
    'HR Portal',
    'CRM System',
  ];
  const availableConnectors = [
    'Connector-US-West',
    'Connector-US-East',
    'Connector-EU-Central',
    'Connector-HQ',
  ];
  const availableLocations = ['United States', 'United Kingdom', 'Germany', 'Canada', 'Australia'];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Creating policy:', formData);
    // Here you would submit the policy to your backend
    onClose();
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Policy Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Engineering Team Access"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose of this policy..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Action *</Label>
              <RadioGroup
                value={formData.action}
                onValueChange={(value) =>
                  setFormData({ ...formData, action: value as 'allow' | 'deny' })
                }
              >
                <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="allow" id="allow" />
                  <label htmlFor="allow" className="flex-1 cursor-pointer">
                    <p className="text-gray-900">Allow Access</p>
                    <p className="text-gray-600">Grant access to matching users</p>
                  </label>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="deny" id="deny" />
                  <label htmlFor="deny" className="flex-1 cursor-pointer">
                    <p className="text-gray-900">Deny Access</p>
                    <p className="text-gray-600">Block access for matching users</p>
                  </label>
                  <X className="h-5 w-5 text-red-600" />
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Input
                id="priority"
                type="number"
                min="1"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) })}
              />
              <p className="text-gray-600">Lower numbers = higher priority (evaluated first)</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-gray-900">Enable Policy</p>
                <p className="text-gray-600">Activate this policy immediately after creation</p>
              </div>
              <Switch
                checked={formData.enabled}
                onCheckedChange={(checked) => setFormData({ ...formData, enabled: checked })}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-2">Who can access? (Source)</h3>
              <p className="text-gray-600">
                Define which users or groups this policy applies to
              </p>
            </div>

            <div className="space-y-2">
              <Label>Source Type</Label>
              <Select
                value={formData.sourceType}
                onValueChange={(value) =>
                  setFormData({ ...formData, sourceType: value as any })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="groups">User Groups</SelectItem>
                  <SelectItem value="users">Individual Users</SelectItem>
                  <SelectItem value="all">All Users</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.sourceType === 'groups' && (
              <div className="space-y-3">
                <Label>Select Groups</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search groups..." className="pl-9" />
                </div>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2 max-h-64 overflow-y-auto">
                  {availableGroups.map((group) => (
                    <div
                      key={group}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          selectedGroups: toggleArrayItem(formData.selectedGroups, group),
                        })
                      }
                    >
                      <Checkbox
                        checked={formData.selectedGroups.includes(group)}
                        onCheckedChange={() => {}}
                      />
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">{group}</span>
                    </div>
                  ))}
                </div>
                {formData.selectedGroups.length > 0 && (
                  <div className="flex flex-wrap gap-2 p-3 bg-blue-50 rounded-lg">
                    {formData.selectedGroups.map((group) => (
                      <Badge
                        key={group}
                        variant="outline"
                        className="bg-white text-blue-700 border-blue-300"
                      >
                        {group}
                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedGroups: formData.selectedGroups.filter((g) => g !== group),
                            })
                          }
                          className="ml-1 hover:text-blue-900"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {formData.sourceType === 'all' && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-900">
                  This policy will apply to all users in your organization
                </p>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-2">What can be accessed? (Destination)</h3>
              <p className="text-gray-600">
                Define which applications or resources this policy grants access to
              </p>
            </div>

            <div className="space-y-2">
              <Label>Destination Type</Label>
              <Select
                value={formData.targetType}
                onValueChange={(value) =>
                  setFormData({ ...formData, targetType: value as any })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apps">Private Applications</SelectItem>
                  <SelectItem value="resources">Network Resources</SelectItem>
                  <SelectItem value="all">All Resources</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.targetType === 'apps' && (
              <div className="space-y-3">
                <Label>Select Applications</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search applications..." className="pl-9" />
                </div>
                <div className="border border-gray-200 rounded-lg p-4 space-y-2 max-h-64 overflow-y-auto">
                  {availableApps.map((app) => (
                    <div
                      key={app}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          selectedApps: toggleArrayItem(formData.selectedApps, app),
                        })
                      }
                    >
                      <Checkbox
                        checked={formData.selectedApps.includes(app)}
                        onCheckedChange={() => {}}
                      />
                      <Globe className="h-4 w-4 text-gray-400" />
                      <div className="flex-1">
                        <p className="text-gray-900">{app}</p>
                        <p className="text-gray-600">https://{app.toLowerCase().replace(/\s+/g, '-')}.internal</p>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.selectedApps.length > 0 && (
                  <div className="flex flex-wrap gap-2 p-3 bg-blue-50 rounded-lg">
                    {formData.selectedApps.map((app) => (
                      <Badge
                        key={app}
                        variant="outline"
                        className="bg-white text-blue-700 border-blue-300"
                      >
                        {app}
                        <button
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedApps: formData.selectedApps.filter((a) => a !== app),
                            })
                          }
                          className="ml-1 hover:text-blue-900"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {formData.targetType === 'resources' && (
              <div className="space-y-3">
                <Label>Define Network Resources</Label>
                <div className="space-y-2">
                  <Input placeholder="IP Address or CIDR (e.g., 10.0.0.0/24)" />
                  <Input placeholder="Port or Port Range (e.g., 443, 8000-9000)" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Protocol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tcp">TCP</SelectItem>
                      <SelectItem value="udp">UDP</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Resource
                  </Button>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-2">Access Conditions</h3>
              <p className="text-gray-600">
                Add additional requirements that must be met for access
              </p>
            </div>

            <div className="space-y-4">
              {/* MFA Requirement */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Require Multi-Factor Authentication</p>
                    <p className="text-gray-600">Users must complete MFA challenge before access</p>
                  </div>
                </div>
                <Switch
                  checked={formData.conditions.requireMfa}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      conditions: { ...formData.conditions, requireMfa: checked },
                    })
                  }
                />
              </div>

              {/* Device Compliance */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-900">Require Device Compliance</p>
                    <p className="text-gray-600">
                      Device must meet security posture requirements
                    </p>
                  </div>
                </div>
                <Switch
                  checked={formData.conditions.requireCompliance}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      conditions: { ...formData.conditions, requireCompliance: checked },
                    })
                  }
                />
              </div>

              {/* Location Restrictions */}
              <div className="space-y-3 p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-gray-900">Geographic Restrictions</p>
                    <p className="text-gray-600">Allow access only from specific countries</p>
                  </div>
                </div>
                <Select
                  value={formData.conditions.allowedLocations[0]}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      conditions: { ...formData.conditions, allowedLocations: [value] },
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select allowed countries" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time-based Access */}
              <div className="space-y-3 p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-900">Time-Based Access</p>
                      <p className="text-gray-600">Restrict access to specific time windows</p>
                    </div>
                  </div>
                  <Switch
                    checked={formData.conditions.timeRestrictions}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        conditions: { ...formData.conditions, timeRestrictions: checked },
                      })
                    }
                  />
                </div>
                {formData.conditions.timeRestrictions && (
                  <Select
                    value={formData.conditions.timeSchedule}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        conditions: { ...formData.conditions, timeSchedule: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business_hours">Business Hours (9AM-5PM)</SelectItem>
                      <SelectItem value="extended_hours">Extended Hours (7AM-7PM)</SelectItem>
                      <SelectItem value="weekdays">Weekdays Only</SelectItem>
                      <SelectItem value="custom">Custom Schedule</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            {/* Connector Assignment */}
            <div className="space-y-3">
              <Label>Assign Connectors *</Label>
              <p className="text-gray-600">
                Select which connectors will enforce this policy
              </p>
              <div className="border border-gray-200 rounded-lg p-4 space-y-2">
                {availableConnectors.map((connector) => (
                  <div
                    key={connector}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        connectors: toggleArrayItem(formData.connectors, connector),
                      })
                    }
                  >
                    <Checkbox
                      checked={formData.connectors.includes(connector)}
                      onCheckedChange={() => {}}
                    />
                    <Network className="h-4 w-4 text-gray-400" />
                    <div className="flex-1">
                      <p className="text-gray-900">{connector}</p>
                      <p className="text-gray-600">Active • 12 policies</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Online
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-2">Review & Create</h3>
              <p className="text-gray-600">
                Review your policy configuration before creating
              </p>
            </div>

            {/* Summary Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-3">Basic Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="text-gray-900">{formData.name || 'Untitled Policy'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Action:</span>
                    <Badge
                      variant="outline"
                      className={
                        formData.action === 'allow'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-orange-50 text-orange-700'
                      }
                    >
                      {formData.action.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority:</span>
                    <span className="text-gray-900">{formData.priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge
                      variant="outline"
                      className={
                        formData.enabled
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-50 text-gray-700'
                      }
                    >
                      {formData.enabled ? 'Enabled' : 'Disabled'}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-3">Source (Who)</h4>
                {formData.sourceType === 'groups' && formData.selectedGroups.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedGroups.map((group) => (
                      <Badge key={group} variant="outline" className="bg-white">
                        {group}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">All Users</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-3">Destination (What)</h4>
                {formData.targetType === 'apps' && formData.selectedApps.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedApps.map((app) => (
                      <Badge key={app} variant="outline" className="bg-white">
                        {app}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">All Resources</p>
                )}
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-3">Conditions</h4>
                <div className="space-y-2">
                  {formData.conditions.requireMfa && (
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Multi-Factor Authentication Required
                    </div>
                  )}
                  {formData.conditions.requireCompliance && (
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Device Compliance Required
                    </div>
                  )}
                  {formData.conditions.allowedLocations.length > 0 && (
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Geographic Restrictions Enabled
                    </div>
                  )}
                  {formData.conditions.timeRestrictions && (
                    <div className="flex items-center gap-2 text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Time-Based Access Restrictions
                    </div>
                  )}
                  {!formData.conditions.requireMfa &&
                    !formData.conditions.requireCompliance &&
                    formData.conditions.allowedLocations.length === 0 &&
                    !formData.conditions.timeRestrictions && (
                      <p className="text-gray-600">No additional conditions</p>
                    )}
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-gray-900 mb-3">Connectors</h4>
                {formData.connectors.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {formData.connectors.map((connector) => (
                      <Badge key={connector} variant="outline" className="bg-white">
                        {connector}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No connectors assigned</p>
                )}
              </div>
            </div>

            {/* Test Policy */}
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-start gap-3">
                <PlayCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-purple-900">Test Policy Before Activation</p>
                  <p className="text-purple-700 mt-1">
                    Run a simulation to see which users and scenarios would match this policy
                  </p>
                  <Button variant="outline" className="mt-3" size="sm">
                    Run Simulator
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {policyId ? 'Edit Policy' : 'Create New Policy'}
          </DialogTitle>
          <DialogDescription>
            Configure access policies to control who can access your resources
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between py-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      isActive
                        ? 'bg-[#0066CC] border-[#0066CC] text-white'
                        : isCompleted
                        ? 'bg-green-600 border-green-600 text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <StepIcon className="h-6 w-6" />
                    )}
                  </div>
                  <p
                    className={`mt-2 ${
                      isActive ? 'text-gray-900' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="py-6">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {currentStep < steps.length ? (
              <Button
                onClick={handleNext}
                className="bg-[#0066CC] hover:bg-[#0052A3]"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-[#0066CC] hover:bg-[#0052A3]"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Create Policy
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
