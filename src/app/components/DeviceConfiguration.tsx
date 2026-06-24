import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent } from "./ui/dialog";
import { IdentityConfiguration } from "./IdentityConfiguration";
import { Day0SetupSinglePage } from './Day0SetupSinglePage';
import svgPaths from "../imports/svg-2if11dchog";
import { 
  Info, 
  Shield, 
  Network, 
  Plug, 
  Edit, 
  CheckCircle2, 
  XCircle,
  Settings,
  Users,
  Check,
  Edit2
} from 'lucide-react';

export function DeviceConfiguration() {
  const [showIdentityDialog, setShowIdentityDialog] = useState(false);
  const [identitySource, setIdentitySource] = useState('local');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 text-[24px] font-bold">Service Configuration</h1>
          <p className="text-gray-600 mt-1">
            Manage your Zero Trust Connector service settings and status
          </p>
        </div>
      </div>

      {/* Identity & Users Configuration */}
      <div className="w-full bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
         <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 shrink-0">
               <Users className="w-5 h-5" />
            </div>
            <div>
               <h4 className="text-sm font-semibold text-gray-900">Configure Identity & Users</h4>
               <p className="text-xs text-gray-500 max-w-sm">
                  Set up authentication methods and manage user access for your organization.
               </p>
            </div>
         </div>
         <Button 
           onClick={() => setShowIdentityDialog(true)} 
           variant="outline" 
           size="sm" 
           className="w-full md:w-auto text-xs gap-2"
         >
            Configure
         </Button>
      </div>

      <div className="w-full flex items-center gap-3">
         <div className="h-px bg-gray-200 flex-1"></div>
         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Default Configuration</h3>
         <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      {/* Default Configuration - Edit View */}
      <Day0SetupSinglePage showHeader={false} showFooter={false} />

      {/* Footer with Advance Configuration Button */}
      <div className="flex justify-end pt-4 border-t border-gray-200 mt-6">
        <Button variant="outline" className="gap-2 text-[#0066CC] border-[#0066CC] hover:bg-blue-50">
          <Settings className="w-4 h-4" />
          Advance Configuration
        </Button>
      </div>

      <Dialog open={showIdentityDialog} onOpenChange={setShowIdentityDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
             <div className="py-4">
               <div className="mb-6">
                 <h2 className="text-xl font-bold text-gray-900">Identity & Users</h2>
                 <p className="text-sm text-gray-500">Configure how users will access the platform</p>
               </div>
               <IdentityConfiguration 
                 identitySource={identitySource} 
                 onIdentitySourceChange={setIdentitySource}
                 onContinue={() => setShowIdentityDialog(false)}
                 onCancel={() => setShowIdentityDialog(false)}
               />
             </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DeviceInfoCard() {
  const infoItems = [
    { label: 'Name:', value: 'Fenson 2800' },
    { label: 'Friendly Name:', value: 'Demo Firewall' },
    { label: 'Unified Policy:', value: 'No' },
    { label: 'Model:', value: 'NSa 2800' },
    { label: 'Product Code:', value: '24505' },
    { label: 'Serial Number:', value: '18C24198E1CF' },
    { label: 'Authentication Code:', value: 'G9YVA-M9YM' },
    { label: 'Firmware Version:', value: 'SonicOS 6.0.3.3-8011' },
    { label: 'ROM Version:', value: '1.0.1.0' },
    { label: 'System Time:', value: '2025/11/06 18:19:21' },
    { label: 'Up Time:', value: '37 Days 21:24:42' },
    { label: 'Primary WAN:', value: 'X1' },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-5 h-5 text-[#001B50]" />
        <h3 className="text-lg font-bold text-gray-900">Device Info</h3>
      </div>

      <div className="space-y-3">
        {infoItems.map((item, index) => (
          <div key={index} className="flex justify-between items-start text-sm">
            <span className="text-gray-500 font-medium min-w-[140px]">{item.label}</span>
            <span className="text-gray-900 font-medium text-right">{item.value}</span>
          </div>
        ))}
        
        <div className="flex justify-between items-start text-sm pt-1">
          <span className="text-gray-500 font-medium min-w-[140px]">Connections:</span>
          <div className="text-right">
            <span className="text-gray-900 font-bold">Peak: 1854</span>
            <span className="text-gray-500">, Current: 374, Max: 800000</span>
          </div>
        </div>

        <div className="flex justify-between items-start text-sm pt-1">
          <span className="text-gray-500 font-medium min-w-[140px]">Last Modified By:</span>
          <span className="text-gray-900 font-medium text-right">admin 12/7.0.5.1341 2025/10/17 12:53:44</span>
        </div>

        <div className="flex justify-between items-start text-sm pt-1">
          <span className="text-gray-500 font-medium min-w-[140px]">External Storage:</span>
          <span className="text-gray-900 font-medium text-right">SNM FSC 78G021A92, 1.16 GB free of 128 ...</span>
        </div>
      </div>
    </Card>
  );
}

function SecurityServicesCard() {
  const services = [
    { name: 'Gateway Anti-Virus', status: 'On' },
    { name: 'Content Filter', status: 'On' },
    { name: 'Anti-Spyware', status: 'On' },
    { name: 'DNS Security', status: 'On' },
    { name: 'Intrusion Prevention & Detection', status: 'On' },
    { name: 'Anti-Spam', status: 'Off' },
    { name: 'Geo-IP Filter', status: 'On' },
    { name: 'Capture Client', status: 'Licensed' },
    { name: 'Botnet Filter', status: 'On' },
    { name: 'Advanced Protection', status: 'Licensed' },
    { name: 'Application Control', status: 'On' },
    { name: 'Capture ATP', status: 'On' },
    { name: 'DPI SSL', status: 'Off' },
    { name: 'DPI SSH', status: 'Off' },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-[#FF5D00]" />
        <h3 className="text-lg font-bold text-gray-900">Security Services</h3>
      </div>

      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center h-7">
            <span className="text-gray-600 text-sm">{service.name}</span>
            <Badge 
              variant="outline" 
              className={`
                min-w-[60px] justify-center border-0
                ${service.status === 'On' ? 'bg-[#22C55E] text-white hover:bg-[#22C55E]' : ''}
                ${service.status === 'Licensed' ? 'bg-[#22C55E] text-white hover:bg-[#22C55E]' : ''}
                ${service.status === 'Off' ? 'bg-[#CFD5E1] text-[#56657F] hover:bg-[#CFD5E1]' : ''}
              `}
            >
              {service.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ZonesNetworkCard() {
  const zones = [
    {
      name: 'Employee',
      type: 'Trusted',
      interfaces: 'X0',
      services: ['AV', 'IPS', 'App']
    },
    {
      name: 'Internet',
      type: 'Untrusted',
      interfaces: 'X1',
      services: ['AV', 'IPS', 'App']
    },
    {
      name: 'Guest',
      type: 'Public',
      interfaces: 'X2',
      services: ['IPS', 'App']
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Network className="w-5 h-5 text-[#3D4D6B]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Zones & Network</h3>
            <p className="text-sm text-gray-500">Configure network zones and subnets</p>
          </div>
        </div>
        <Button variant="ghost" className="text-[#0066CC] hover:text-[#0052A3] hover:bg-transparent px-0 h-auto font-medium">
          <Edit className="w-4 h-4 mr-1.5" />
          Edit
        </Button>
      </div>

      <div className="space-y-4">
        {zones.map((zone, index) => (
          <div key={index} className={`pb-4 ${index !== zones.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="font-bold text-gray-900">{zone.name}</div>
                <div className="text-xs text-gray-500">Type: {zone.type}</div>
                <div className="text-xs text-gray-500">Interfaces: {zone.interfaces}</div>
              </div>
              <div className="flex gap-1.5">
                {zone.services.map((svc) => (
                  <Badge 
                    key={svc}
                    variant="outline" 
                    className="bg-green-50 text-green-700 border-green-200 text-[10px] h-5 px-1.5"
                  >
                    {svc}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function InterfacesCard() {
  const interfaces = [
    { name: 'X0 Employee', ip: '192.168.168.168', active: true },
    { name: 'X1 Internet', ip: '203.0.113.5', active: true },
    { name: 'X2 Guest', ip: '10.0.3.1', active: true },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Plug className="w-5 h-5 text-[#3D4D6B]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Interfaces</h3>
            <p className="text-sm text-gray-500">Configure physical and virtual interfaces</p>
          </div>
        </div>
        <Button variant="ghost" className="text-[#0066CC] hover:text-[#0052A3] hover:bg-transparent px-0 h-auto font-medium">
          <Edit className="w-4 h-4 mr-1.5" />
          Edit
        </Button>
      </div>

      <div className="space-y-4">
        {interfaces.map((iface, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-gray-700">{iface.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-gray-900">{iface.ip}</span>
              {iface.active && <CheckCircle2 className="w-4 h-4 text-green-500" />}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
