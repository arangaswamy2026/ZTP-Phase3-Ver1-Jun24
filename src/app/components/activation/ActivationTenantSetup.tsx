import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Building2, Plus, CheckCircle, MapPin, Users, Network, ShieldCheck, AlertCircle, Globe } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  TooltipProvider,
} from '../ui/tooltip';
import { CreateTenantForm, type TenantFormData } from '../CreateTenantForm';

interface Tenant {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  location: string;
  userCount: number;
  connectorCount: number;
  industry: string;
  status: 'active' | 'available';
  hasZTC: boolean; // New: indicates if ZTC is already activated
  activatedDate?: string;
}

interface ActivationTenantSetupProps {
  onNext: (tenantId: string, tenantName: string, isNew?: boolean, dataCenter?: string) => void;
  onBack: () => void;
  preselectedTenantId?: string; // Pre-populate from scope selector
  initialMode?: 'select' | 'create';
}

// Mock existing tenants - some with ZTC already activated
const mockTenants: Tenant[] = [
  {
    id: 'tenant-1',
    name: 'Riverside Dental Office',
    initials: 'RD',
    avatarColor: 'bg-blue-500',
    location: 'Portland, OR',
    userCount: 24,
    connectorCount: 2,
    industry: 'Healthcare',
    status: 'available',
    hasZTC: false,
  },
  {
    id: 'tenant-2',
    name: 'State College University',
    initials: 'SC',
    avatarColor: 'bg-green-500',
    location: 'State College, PA',
    userCount: 1842,
    connectorCount: 12,
    industry: 'Education',
    status: 'available',
    hasZTC: true, // Already has ZTC
    activatedDate: '2024-09-15',
  },
  {
    id: 'tenant-3',
    name: 'Global Manufacturing Corp',
    initials: 'GM',
    avatarColor: 'bg-orange-500',
    location: 'Detroit, MI',
    userCount: 456,
    connectorCount: 8,
    industry: 'Manufacturing',
    status: 'available',
    hasZTC: false,
  },
  {
    id: 'tenant-4',
    name: 'Downtown Legal Group',
    initials: 'DL',
    avatarColor: 'bg-purple-500',
    location: 'San Francisco, CA',
    userCount: 67,
    connectorCount: 3,
    industry: 'Legal',
    status: 'available',
    hasZTC: true, // Already has ZTC
    activatedDate: '2024-10-22',
  },
];

export function ActivationTenantSetup({ onNext, onBack, preselectedTenantId, initialMode = 'select' }: ActivationTenantSetupProps) {
  const [mode, setMode] = useState<'select' | 'create'>(initialMode);
  const [selectedTenant, setSelectedTenant] = useState<string>(preselectedTenantId || '');
  const [newTenantName, setNewTenantName] = useState('Riverside Dental Office');
  const [newTenantLocation, setNewTenantLocation] = useState('Milpitas');
  const [dataCenter, setDataCenter] = useState('North America');
  const [newTenantDescription, setNewTenantDescription] = useState('');

  // Filter tenants based on preselection
  const effectiveTenants = preselectedTenantId 
    ? mockTenants.filter(t => t.id === preselectedTenantId) 
    : mockTenants;

  const availableTenants = effectiveTenants.filter(t => !t.hasZTC);
  const unavailableTenants = effectiveTenants.filter(t => t.hasZTC);
  const hasAvailableTenants = availableTenants.length > 0;

  // Auto-select if only one available tenant (e.g. preselected)
  useEffect(() => {
    if (preselectedTenantId && availableTenants.length === 1) {
      setSelectedTenant(availableTenants[0].id);
    }
  }, [preselectedTenantId, availableTenants]);

  const handleContinue = () => {
    if (mode === 'select' && selectedTenant) {
      const tenant = mockTenants.find(t => t.id === selectedTenant);
      if (tenant && !tenant.hasZTC) {
        onNext(tenant.id, tenant.name, false);
      }
    } else if (mode === 'create' && newTenantName.trim()) {
      const newId = `tenant-${Date.now()}`;
      toast.success("Tenant has been successfully created", {
        className: "bg-green-50 text-green-800 border-green-200"
      });
      onNext(newId, newTenantName, true, dataCenter);
    }
  };

  const canContinue = 
    (mode === 'select' && selectedTenant && !mockTenants.find(t => t.id === selectedTenant)?.hasZTC) || 
    (mode === 'create' && newTenantName.trim());

  return (
    <TooltipProvider>
      <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Header */}
            {mode === 'select' && (
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#0066CC]" />
                  </div>
                </div>
                <h2 className="text-gray-900 mb-2">Tenant Setup</h2>
                <p className="text-gray-600 text-sm">
                  {preselectedTenantId 
                    ? 'Confirm the organization for this Zero Trust Connector activation'
                    : 'Select which organization will use this Zero Trust Connector activation'
                  }
                </p>
              </div>
            )}

            {/* Select Existing Tenant - Primary */}
            {mode === 'select' && (
              <div className="space-y-5 mb-8">
                {!preselectedTenantId && (
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-gray-900 mb-1">Choose a Tenant</h3>
                      <p className="text-sm text-gray-600">Select from your existing tenants</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setMode('create')}
                      className="border-gray-300 text-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Create New
                    </Button>
                  </div>
                )}

                <RadioGroup value={selectedTenant} onValueChange={setSelectedTenant}>
                  <div className="space-y-3">
                    {/* Available Tenants */}
                    {availableTenants.map((tenant) => {
                      const isSelected = selectedTenant === tenant.id;
                      return (
                        <Card
                          key={tenant.id}
                          className={`p-5 transition-all cursor-pointer hover:shadow-md ${
                            isSelected
                              ? 'border-2 border-[#0066CC] bg-blue-50/30 shadow-sm'
                              : 'border border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedTenant(tenant.id)}
                        >
                          <div className="flex items-start gap-4">
                            <RadioGroupItem 
                              value={tenant.id} 
                              id={tenant.id}
                              className="mt-2"
                              // If preselected, we can disable the radio interaction or just let it be checked
                            />
                            <Avatar className="h-10 w-10 flex-shrink-0">
                              <AvatarFallback className={`${tenant.avatarColor} text-white`}>
                                {tenant.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Label 
                                  htmlFor={tenant.id}
                                  className="text-gray-900 cursor-pointer font-medium"
                                >
                                  {tenant.name}
                                </Label>
                                <Badge variant="secondary" className="text-xs">
                                  {tenant.industry}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5" />
                                  <span>{tenant.location}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Users className="w-3.5 h-3.5" />
                                  <span>{tenant.userCount.toLocaleString()} users</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Network className="w-3.5 h-3.5" />
                                  <span>{tenant.connectorCount} connectors</span>
                                </div>
                              </div>
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-1" />
                            )}
                          </div>
                        </Card>
                      );
                    })}

                    {/* Unavailable Tenants (Already have ZTC) */}
                    {unavailableTenants.length > 0 && (
                      <div className={preselectedTenantId ? "" : "pt-4"}>
                        {!preselectedTenantId && <p className="text-sm text-gray-500 mb-3">Already activated</p>}
                        {unavailableTenants.map((tenant) => {
                          return (
                            <Card
                              key={tenant.id}
                              className="p-5 bg-gray-50 border border-gray-200 mb-3 opacity-75"
                            >
                              <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 flex-shrink-0 grayscale">
                                  <AvatarFallback className={`${tenant.avatarColor} text-white`}>
                                    {tenant.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-gray-700 font-medium">{tenant.name}</span>
                                    <Badge variant="secondary" className="text-xs">
                                      {tenant.industry}
                                    </Badge>
                                    <Badge className="bg-green-100 text-green-700 text-xs hover:bg-green-100">
                                      <ShieldCheck className="w-3 h-3 mr-1" />
                                      ZTC Active
                                    </Badge>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5">
                                      <MapPin className="w-3.5 h-3.5" />
                                      <span>{tenant.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <Users className="w-3.5 h-3.5" />
                                      <span>{tenant.userCount.toLocaleString()} users</span>
                                    </div>
                                    {tenant.activatedDate && (
                                      <span className="text-xs">
                                        Activated {new Date(tenant.activatedDate).toLocaleDateString()}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {!preselectedTenantId && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="flex-shrink-0 border-[#0066CC] text-[#0066CC] hover:bg-blue-50"
                                  >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add New ZTC Device
                                  </Button>
                                )}
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Create New Tenant - Secondary */}
            {mode === 'create' && !preselectedTenantId && (
              <div className="-mt-8">
                <CreateTenantForm
                  onBack={() => setMode('select')}
                  onCreate={(formData: TenantFormData) => {
                    const newId = `tenant-${Date.now()}`;
                    toast.success("Tenant has been successfully created", {
                      className: "bg-green-50 text-green-800 border-green-200"
                    });
                    const dataCenterMapping: Record<string, string> = {
                      'north-america': 'North America',
                      'europe': 'Europe',
                      'asia-pacific': 'Asia Pacific',
                    };
                    onNext(newId, formData.tenantName, true, dataCenterMapping[formData.dataCenter] || 'North America');
                  }}
                />
              </div>
            )}

            {/* No Available Tenants State */}
            {mode === 'select' && !hasAvailableTenants && !preselectedTenantId && (
              <div className="text-center py-8 mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-[#0066CC]" />
                </div>
                <h3 className="text-gray-900 mb-2">No Available Tenants</h3>
                <p className="text-sm text-gray-600 mb-6">
                  All your tenants already have ZTC activated. Create a new tenant to continue.
                </p>
                <Button
                  onClick={() => setMode('create')}
                  className="bg-[#0066CC] hover:bg-[#0052A3]"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Tenant
                </Button>
              </div>
            )}

            {/* Empty State for Preselected Tenant if not found or active */}
            {preselectedTenantId && effectiveTenants.length === 0 && (
              <div className="text-center py-8 mb-8">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-gray-900 mb-2">Tenant Not Found</h3>
                <p className="text-sm text-gray-600">
                   The selected tenant could not be found.
                </p>
              </div>
            )}

            {/* Actions */}
            {mode === 'select' && (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onBack}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={!canContinue}
                  className="flex-1 bg-[#0066CC] hover:bg-[#0052A3] disabled:opacity-50"
                >
                  {mode === 'create' ? 'Create & Select Tenant' : 'Select Tenant'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}