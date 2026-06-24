import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Search, Filter, Shield, Plus, MoreHorizontal, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

interface ZoneRow {
  id: number;
  name: string;
  securityType: string;
  memberInterfaces: string[];
  interfaceTrust: boolean;
  gatewayAV: boolean;
  antiSpyware: boolean;
  ips: boolean;
  appControl: boolean;
  cfs: boolean;
  dns: boolean;
  enabled: boolean;
}

const DEFAULT_ZONES: ZoneRow[] = [
  { id: 1, name: 'Employee', securityType: 'Trusted', memberInterfaces: ['X0'], interfaceTrust: true, gatewayAV: true, antiSpyware: true, ips: true, appControl: true, cfs: true, dns: true, enabled: true },
  { id: 2, name: 'Internet', securityType: 'Untrusted', memberInterfaces: ['X1'], interfaceTrust: false, gatewayAV: true, antiSpyware: true, ips: true, appControl: true, cfs: true, dns: true, enabled: true },
  { id: 3, name: 'Guest', securityType: 'Public', memberInterfaces: ['X2'], interfaceTrust: true, gatewayAV: false, antiSpyware: false, ips: true, appControl: true, cfs: true, dns: true, enabled: true },
  { id: 4, name: 'VPN', securityType: 'Encrypted', memberInterfaces: [], interfaceTrust: false, gatewayAV: false, antiSpyware: false, ips: false, appControl: false, cfs: false, dns: false, enabled: false },
  { id: 5, name: 'SSLVPN', securityType: 'SSLVPN', memberInterfaces: [], interfaceTrust: false, gatewayAV: false, antiSpyware: false, ips: false, appControl: false, cfs: false, dns: false, enabled: false },
  { id: 6, name: 'MULTICAST', securityType: 'Untrusted', memberInterfaces: [], interfaceTrust: false, gatewayAV: false, antiSpyware: false, ips: false, appControl: false, cfs: false, dns: false, enabled: false },
];

const DEFAULT_AVAILABLE_INTERFACES = ['X0', 'X1', 'X2', 'X3', 'U0', 'U1'];

interface ZoneConfigurationProps {
  onContinue?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
  availableInterfaces?: string[];
}

export function ZoneConfiguration({ onContinue, onBack, onCancel, availableInterfaces }: ZoneConfigurationProps) {
  const [zones, setZones] = useState<ZoneRow[]>(DEFAULT_ZONES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Interface selection state
  const [editingZoneId, setEditingZoneId] = useState<number | null>(null);
  const [selectedInterfaces, setSelectedInterfaces] = useState<string[]>([]);
  
  // Add Zone state
  const [isAddZoneOpen, setIsAddZoneOpen] = useState(false);
  const [newZoneName, setNewZoneName] = useState('');
  const [newZoneType, setNewZoneType] = useState('Trusted');
  
  const interfaceList = availableInterfaces || DEFAULT_AVAILABLE_INTERFACES;

  const toggleZoneField = (id: number, field: keyof ZoneRow) => {
    setZones(zones.map(zone => {
      if (zone.id === id) {
        return { ...zone, [field]: !zone[field] };
      }
      return zone;
    }));
  };

  const handleAddZone = () => {
    const newId = Math.max(...zones.map(z => z.id)) + 1;
    const newZone: ZoneRow = {
      id: newId,
      name: newZoneName || `New Zone ${newId}`,
      securityType: newZoneType,
      memberInterfaces: [],
      interfaceTrust: newZoneType === 'Trusted',
      gatewayAV: true,
      antiSpyware: true,
      ips: true,
      appControl: true,
      cfs: true,
      dns: true,
      enabled: true,
    };
    setZones([...zones, newZone]);
    setIsAddZoneOpen(false);
    setNewZoneName('');
    setNewZoneType('Trusted');
  };

  const openInterfaceDialog = (zone: ZoneRow) => {
    if (!zone.enabled) return;
    setEditingZoneId(zone.id);
    setSelectedInterfaces([...zone.memberInterfaces]);
  };

  const toggleInterfaceSelection = (iface: string) => {
    if (selectedInterfaces.includes(iface)) {
      setSelectedInterfaces(selectedInterfaces.filter(i => i !== iface));
    } else {
      setSelectedInterfaces([...selectedInterfaces, iface]);
    }
  };

  const saveInterfaces = () => {
    if (editingZoneId !== null) {
      setZones(zones.map(zone => 
        zone.id === editingZoneId 
          ? { ...zone, memberInterfaces: selectedInterfaces } 
          : zone
      ));
      setEditingZoneId(null);
    }
  };

  const filteredZones = zones.filter(zone => 
    zone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Zones</h2>
          <p className="text-sm text-gray-500">Configure security zones and inspection services.</p>
        </div>
        
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">View: All</SelectItem>
                <SelectItem value="trusted">Trusted</SelectItem>
                <SelectItem value="untrusted">Untrusted</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button 
              className="bg-[#e65100] hover:bg-[#bf360c] text-white" 
              size="sm"
              onClick={() => setIsAddZoneOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Zone
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] text-center">ENABLED</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>SECURITY TYPE</TableHead>
              <TableHead>MEMBER INTERFACES</TableHead>
              <TableHead className="text-center">INTERFACE TRUST</TableHead>
              <TableHead className="text-center">GATEWAY AV</TableHead>
              <TableHead className="text-center">ANTI SPYWARE</TableHead>
              <TableHead className="text-center">IPS</TableHead>
              <TableHead className="text-center">APP CONTROL</TableHead>
              <TableHead className="text-center">CFS</TableHead>
              <TableHead className="text-center">DNS FILTERING</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredZones.map((zone) => (
              <TableRow key={zone.id} className={!zone.enabled ? "bg-gray-50/50" : ""}>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Switch
                      checked={zone.enabled}
                      onCheckedChange={() => toggleZoneField(zone.id, 'enabled')}
                      className="data-[state=checked]:bg-[#0066CC]"
                    />
                  </div>
                </TableCell>
                <TableCell className={`font-semibold text-gray-900 ${!zone.enabled ? "opacity-50" : ""}`}>{zone.name}</TableCell>
                <TableCell className={`text-gray-600 ${!zone.enabled ? "opacity-50" : ""}`}>{zone.securityType}</TableCell>
                <TableCell className={!zone.enabled ? "opacity-50" : ""}>
                  <div className="flex items-center flex-wrap gap-1.5 min-w-[120px]">
                    {zone.memberInterfaces.map(iface => (
                      <Badge key={iface} variant="secondary" className="text-xs px-1.5 py-0 font-normal">
                        {iface}
                      </Badge>
                    ))}
                    {zone.enabled && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-5 w-5 p-0 rounded-full bg-gray-100 hover:bg-gray-200"
                        onClick={() => openInterfaceDialog(zone)}
                      >
                        <Plus className="h-3 w-3 text-gray-600" />
                      </Button>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Checkbox 
                      checked={zone.interfaceTrust} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'interfaceTrust')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Checkbox 
                      checked={zone.gatewayAV} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'gatewayAV')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                     <Checkbox 
                      checked={zone.antiSpyware} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'antiSpyware')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                     <Checkbox 
                      checked={zone.ips} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'ips')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                     <Checkbox 
                      checked={zone.appControl} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'appControl')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                     <Checkbox 
                      checked={zone.cfs} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'cfs')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                     <Checkbox 
                      checked={zone.dns} 
                      onCheckedChange={() => toggleZoneField(zone.id, 'dns')}
                      disabled={!zone.enabled}
                      className="border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={!zone.enabled}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
              Continue
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

      {/* Interface Selection Dialog */}
      <Dialog open={editingZoneId !== null} onOpenChange={(open) => !open && setEditingZoneId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Interfaces</DialogTitle>
            <DialogDescription>
              Select interfaces to assign to this zone.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            {interfaceList.map((iface) => (
              <div key={iface} className="flex items-center space-x-2">
                <Checkbox 
                  id={`iface-${iface}`} 
                  checked={selectedInterfaces.includes(iface)}
                  onCheckedChange={() => toggleInterfaceSelection(iface)}
                />
                <Label htmlFor={`iface-${iface}`} className="cursor-pointer">{iface}</Label>
              </div>
            ))}
            {interfaceList.length === 0 && (
              <div className="col-span-2 text-center text-gray-500 py-4">
                No enabled interfaces available. Enable interfaces in Interface Settings first.
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingZoneId(null)}>Cancel</Button>
            <Button onClick={saveInterfaces} className="bg-[#0066CC] hover:bg-[#0052A3]">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Zone Dialog */}
      <Dialog open={isAddZoneOpen} onOpenChange={setIsAddZoneOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Zone</DialogTitle>
            <DialogDescription>
              Create a new security zone.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Zone Name</Label>
              <Input 
                id="name" 
                value={newZoneName} 
                onChange={(e) => setNewZoneName(e.target.value)}
                placeholder="e.g. Finance, Guest-Wi-Fi"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Security Type</Label>
              <Select value={newZoneType} onValueChange={setNewZoneType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Trusted">Trusted</SelectItem>
                  <SelectItem value="Untrusted">Untrusted</SelectItem>
                  <SelectItem value="Public">Public</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddZoneOpen(false)}>Cancel</Button>
            <Button onClick={handleAddZone} className="bg-[#e65100] hover:bg-[#bf360c] text-white">Create Zone</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
