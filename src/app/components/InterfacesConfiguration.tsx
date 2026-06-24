import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
  Network,
  ChevronDown,
  ChevronUp,
  Cable,
  CheckCircle2,
  Info,
  Settings2,
  Server,
  Power
} from 'lucide-react';

export interface NetworkInterface {
  id: string;
  name: string;
  type: 'physical' | 'virtual';
  status: 'connected' | 'disconnected';
  ipAddress: string;
  subnetMask: string;
  zoneAssignment: string;
  enabled: boolean;
  // DHCP & Network settings moved from ZoneConfig
  dhcpEnabled: boolean;
  dhcpStart: string;
  dhcpEnd: string;
  gateway: string;
  dnsServers: string;
  expanded: boolean;
}

export const DEFAULT_INTERFACES: NetworkInterface[] = [
  {
    id: 'x0',
    name: 'X0 Employee',
    type: 'physical',
    status: 'connected',
    ipAddress: '192.168.168.168',
    subnetMask: '255.255.255.0',
    zoneAssignment: 'Employee',
    enabled: true,
    dhcpEnabled: false,
    dhcpStart: '192.168.168.100',
    dhcpEnd: '192.168.168.200',
    gateway: '192.168.168.168',
    dnsServers: '8.8.8.8, 8.8.4.4',
    expanded: true,
  },
  {
    id: 'x1',
    name: 'X1 Internet',
    type: 'physical',
    status: 'connected',
    ipAddress: '203.0.113.5',
    subnetMask: '255.255.255.248',
    zoneAssignment: 'Internet',
    enabled: true,
    dhcpEnabled: true,
    dhcpStart: '',
    dhcpEnd: '',
    gateway: '',
    dnsServers: '',
    expanded: false,
  },
  {
    id: 'x2',
    name: 'X2 Guest',
    type: 'physical',
    status: 'connected',
    ipAddress: '10.0.3.1',
    subnetMask: '255.255.255.0',
    zoneAssignment: 'Guest',
    enabled: true,
    dhcpEnabled: true,
    dhcpStart: '10.0.3.100',
    dhcpEnd: '10.0.3.200',
    gateway: '10.0.3.1',
    dnsServers: '8.8.8.8',
    expanded: false,
  },
  {
    id: 'x3',
    name: 'X3',
    type: 'physical',
    status: 'disconnected',
    ipAddress: '0.0.0.0',
    subnetMask: '0.0.0.0',
    zoneAssignment: 'Unassigned',
    enabled: false,
    dhcpEnabled: false,
    dhcpStart: '',
    dhcpEnd: '',
    gateway: '',
    dnsServers: '',
    expanded: false,
  },
];

interface InterfacesConfigurationProps {
  onContinue?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
  interfaces?: NetworkInterface[];
  onUpdateInterfaces?: (interfaces: NetworkInterface[]) => void;
}

export function InterfacesConfiguration({ 
  onContinue, 
  onBack, 
  onCancel,
  interfaces: controlledInterfaces,
  onUpdateInterfaces
}: InterfacesConfigurationProps) {
  const [internalInterfaces, setInternalInterfaces] = useState<NetworkInterface[]>(DEFAULT_INTERFACES);

  const interfaces = controlledInterfaces || internalInterfaces;
  const setInterfaces = (newInterfaces: NetworkInterface[]) => {
    if (onUpdateInterfaces) {
      onUpdateInterfaces(newInterfaces);
    } else {
      setInternalInterfaces(newInterfaces);
    }
  };

  const toggleInterfaceExpanded = (interfaceId: string) => {
    setInterfaces(interfaces.map(iface => 
      iface.id === interfaceId ? { ...iface, expanded: !iface.expanded } : iface
    ));
  };

  const updateInterface = (interfaceId: string, updates: Partial<NetworkInterface>) => {
    setInterfaces(interfaces.map(iface => 
      iface.id === interfaceId ? { ...iface, ...updates } : iface
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Interfaces Setup</h2>
        <p className="text-gray-600">
          Configure physical interfaces, IP assignments, and DHCP services.
        </p>
      </div>

      {/* Interface Cards */}
      <div className="space-y-4">
        {interfaces.map((iface) => (
          <Card key={iface.id} className={`border-2 transition-all ${iface.expanded ? 'border-blue-200 ring-2 ring-blue-50' : 'border-gray-200'} ${!iface.enabled ? 'opacity-75 bg-gray-50' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer flex-1" onClick={() => toggleInterfaceExpanded(iface.id)}>
                  <div className={`p-2 rounded-lg ${iface.status === 'connected' && iface.enabled ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <Cable className={`h-5 w-5 ${iface.status === 'connected' && iface.enabled ? 'text-blue-600' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {iface.name}
                      <Badge variant="secondary" className="text-xs font-normal">
                        {iface.zoneAssignment}
                      </Badge>
                      {!iface.enabled && (
                        <Badge variant="outline" className="text-xs font-normal bg-gray-100 text-gray-500 border-gray-200">
                          Disabled
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {iface.ipAddress} / {iface.subnetMask}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={iface.enabled}
                      onCheckedChange={(checked) => updateInterface(iface.id, { enabled: checked })}
                      className="data-[state=checked]:bg-green-600"
                    />
                    <Label className="text-sm text-gray-600 cursor-pointer">
                      {iface.enabled ? 'Enabled' : 'Disabled'}
                    </Label>
                  </div>

                  <div className="h-6 w-px bg-gray-200 mx-1" />

                  <Badge variant="outline" className={iface.status === 'connected' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50'}>
                    {iface.status === 'connected' ? 'Link Up' : 'Link Down'}
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => toggleInterfaceExpanded(iface.id)}
                  >
                    {iface.expanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>

            {iface.expanded && iface.enabled && (
              <CardContent className="pt-0 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Network Configuration */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900 border-b pb-2">
                      <Settings2 className="h-4 w-4" />
                      IP Configuration
                    </div>
                    
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-zone`}>Zone Assignment</Label>
                        <Select 
                          value={iface.zoneAssignment} 
                          onValueChange={(val) => updateInterface(iface.id, { zoneAssignment: val })}
                          disabled
                        >
                          <SelectTrigger id={`${iface.id}-zone`}>
                            <SelectValue placeholder="Select Zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Employee">Employee</SelectItem>
                            <SelectItem value="Internet">Internet</SelectItem>
                            <SelectItem value="Guest">Guest</SelectItem>
                            <SelectItem value="VPN">VPN</SelectItem>
                            <SelectItem value="Unassigned">Unassigned</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-mode`}>Mode</Label>
                        <Select 
                          value={iface.dhcpEnabled ? 'DHCP' : 'Static'} 
                          onValueChange={(val) => {
                            const isDhcp = val === 'DHCP';
                            updateInterface(iface.id, { 
                              dhcpEnabled: isDhcp,
                              // Clear fields if switching to DHCP
                              ...(isDhcp && !iface.dhcpEnabled ? {
                                dhcpStart: '',
                                dhcpEnd: '',
                                gateway: '',
                                dnsServers: ''
                              } : {})
                            });
                          }}
                          disabled
                        >
                          <SelectTrigger id={`${iface.id}-mode`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Static">Static</SelectItem>
                            <SelectItem value="DHCP">DHCP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-ip`}>IP Address</Label>
                        <Input
                          id={`${iface.id}-ip`}
                          value={iface.ipAddress}
                          onChange={(e) => updateInterface(iface.id, { ipAddress: e.target.value })}
                          placeholder="0.0.0.0"
                          disabled
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-mask`}>Subnet Mask</Label>
                        <Input
                          id={`${iface.id}-mask`}
                          value={iface.subnetMask}
                          onChange={(e) => updateInterface(iface.id, { subnetMask: e.target.value })}
                          placeholder="255.255.255.0"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* DHCP Configuration */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label htmlFor={`${iface.id}-dhcp-start`}>Range Start</Label>
                          <Input
                            id={`${iface.id}-dhcp-start`}
                            value={iface.dhcpStart}
                            onChange={(e) => updateInterface(iface.id, { dhcpStart: e.target.value })}
                            disabled
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor={`${iface.id}-dhcp-end`}>Range End</Label>
                          <Input
                            id={`${iface.id}-dhcp-end`}
                            value={iface.dhcpEnd}
                            onChange={(e) => updateInterface(iface.id, { dhcpEnd: e.target.value })}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-dns`}>DNS Servers</Label>
                        <Input
                          id={`${iface.id}-dns`}
                          value={iface.dnsServers}
                          onChange={(e) => updateInterface(iface.id, { dnsServers: e.target.value })}
                          placeholder="8.8.8.8, 8.8.4.4"
                          disabled
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor={`${iface.id}-gateway`}>Default Gateway</Label>
                        <Input
                          id={`${iface.id}-gateway`}
                          value={iface.gateway}
                          onChange={(e) => updateInterface(iface.id, { gateway: e.target.value })}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
            
            {iface.expanded && !iface.enabled && (
               <CardContent className="pt-0 pb-6">
                 <div className="py-8 text-center bg-gray-50 border border-dashed rounded-lg">
                   <p className="text-gray-500">Enable this interface to configure settings.</p>
                   <Button variant="outline" size="sm" className="mt-2" onClick={() => updateInterface(iface.id, { enabled: true })}>
                     Enable Interface
                   </Button>
                 </div>
               </CardContent>
            )}
          </Card>
        ))}
      </div>

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
              className="bg-[#0066CC] hover:bg-[#0052A3] ml-auto"
            >
              Save Interfaces
            </Button>
          )}
          {onCancel && (
            <Button
              onClick={onCancel}
              className="bg-red-500 hover:bg-red-600 ml-auto"
            >
              Cancel
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
