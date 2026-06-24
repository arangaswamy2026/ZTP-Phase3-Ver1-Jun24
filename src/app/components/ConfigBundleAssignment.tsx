import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Checkbox } from './ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Package,
  Building2,
  Server,
  Shield,
  CheckCircle2,
  Info,
  ArrowRight,
} from 'lucide-react';

interface ConfigBundleAssignmentProps {
  onContinue?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
}

interface ZTCDevice {
  id: string;
  name: string;
  serialNumber: string;
  status: 'pending' | 'ready' | 'offline';
}

interface CloudService {
  id: string;
  name: string;
  type: 'ZTNA' | 'SWG';
  enabled: boolean;
}

const MOCK_ZTC_DEVICES: ZTCDevice[] = [
  { id: 'ztc-001', name: 'ZTC-HQ-Primary', serialNumber: 'SN001234567', status: 'ready' },
  { id: 'ztc-002', name: 'ZTC-Branch-01', serialNumber: 'SN001234568', status: 'pending' },
];

const CLOUD_SERVICES: CloudService[] = [
  { id: 'ztna-1', name: 'Zero Trust Network Access (ZTNA)', type: 'ZTNA', enabled: true },
  { id: 'swg-1', name: 'Secure Web Gateway (SWG)', type: 'SWG', enabled: true },
];

export function ConfigBundleAssignment({ onContinue, onBack, onCancel }: ConfigBundleAssignmentProps) {
  const [selectedTenant, setSelectedTenant] = useState('tenant-001');
  const [selectedZTC, setSelectedZTC] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>(['ztna-1', 'swg-1']);

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const isValid = selectedTenant && selectedZTC && selectedServices.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Configuration Bundle Assignment</h2>
        <p className="text-gray-600">
          Assign this Day-0 configuration to your ZTC devices and cloud services
        </p>
      </div>

      {/* Info Alert */}
      <Alert className="border-[#0066CC] bg-blue-50">
        <Info className="h-4 w-4 text-[#0066CC]" />
        <AlertDescription>
          This configuration bundle will be automatically deployed to selected devices when they come online and connect to SonicPlatform.
        </AlertDescription>
      </Alert>

      {/* Tenant Selection */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-[#0066CC]" />
            <CardTitle>Tenant Assignment</CardTitle>
          </div>
          <CardDescription>
            Select the tenant this configuration applies to
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Select value={selectedTenant} onValueChange={setSelectedTenant}>
              <SelectTrigger>
                <SelectValue placeholder="Select tenant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tenant-001">
                  <div className="flex items-center gap-2">
                    <span>Acme Corporation</span>
                    <Badge variant="outline" className="text-xs">Primary</Badge>
                  </div>
                </SelectItem>
                <SelectItem value="tenant-002">
                  Branch Office - West Coast
                </SelectItem>
                <SelectItem value="tenant-003">
                  Branch Office - East Coast
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Selected Tenant:</strong> Acme Corporation
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Tenant ID: tenant-001 • Region: US-West-2
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ZTC Device Selection */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-[#0066CC]" />
            <CardTitle>Zero Trust Connector (ZTC)</CardTitle>
          </div>
          <CardDescription>
            Select the ZTC device(s) to receive this configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {MOCK_ZTC_DEVICES.map((device) => (
              <div
                key={device.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedZTC === device.id
                    ? 'border-[#0066CC] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedZTC(device.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectedZTC === device.id}
                      onCheckedChange={() => setSelectedZTC(device.id)}
                    />
                    <div>
                      <p className="text-gray-900">{device.name}</p>
                      <p className="text-sm text-gray-600">Serial: {device.serialNumber}</p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      device.status === 'ready'
                        ? 'bg-green-50 text-green-700'
                        : device.status === 'pending'
                        ? 'bg-orange-50 text-orange-700'
                        : 'bg-gray-50 text-gray-700'
                    }
                  >
                    {device.status === 'ready' && 'Ready'}
                    {device.status === 'pending' && 'Pending Activation'}
                    {device.status === 'offline' && 'Offline'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {!selectedZTC && (
            <Alert>
              <Info className="h-4 w-4 text-gray-600" />
              <AlertDescription className="text-sm text-gray-600">
                Select a ZTC device to continue
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Cloud Services */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#0066CC]" />
            <CardTitle>Cloud Services</CardTitle>
          </div>
          <CardDescription>
            Select which cloud services should use this configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {CLOUD_SERVICES.map((service) => (
              <div
                key={service.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedServices.includes(service.id)
                    ? 'border-[#0066CC] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                    />
                    <div>
                      <p className="text-gray-900">{service.name}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {service.type}
                      </Badge>
                    </div>
                  </div>
                  {service.enabled && (
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Enabled
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      {isValid && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-gray-900">Ready to Assign Configuration</p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>• <strong>Tenant:</strong> Acme Corporation</p>
                  <p>• <strong>ZTC Device:</strong> {MOCK_ZTC_DEVICES.find(d => d.id === selectedZTC)?.name}</p>
                  <p>• <strong>Cloud Services:</strong> {selectedServices.length} selected</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      {(onContinue || onBack || onCancel) && (
        <div className="flex items-center justify-between pt-4">
          {onBack && (
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
          )}
          {onContinue && (
            <Button
              onClick={onContinue}
              disabled={!isValid}
              className="bg-[#0066CC] hover:bg-[#0052A3] ml-auto"
            >
              Continue to Validation
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
          {onCancel && (
            <Button
              onClick={onCancel}
              className="bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </Button>
          )}
        </div>
      )}
    </div>
  );
}