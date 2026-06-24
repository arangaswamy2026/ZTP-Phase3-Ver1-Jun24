import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  ChevronDown,
  ChevronUp,
  Network,
  Wifi,
  Globe,
  Settings,
} from 'lucide-react';

interface AdvancedOptionsProps {
  onContinue?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
}

export function AdvancedOptions({ onContinue, onBack, onCancel }: AdvancedOptionsProps) {
  const [portForwardingExpanded, setPortForwardingExpanded] = useState(false);
  const [natExpanded, setNatExpanded] = useState(false);
  const [wanExpanded, setWanExpanded] = useState(false);
  const [dnsExpanded, setDnsExpanded] = useState(false);

  const [dnsProvider, setDnsProvider] = useState('cloud-security');
  const [customDns, setCustomDns] = useState('');
  const [wanFailoverEnabled, setWanFailoverEnabled] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Advanced Options</h2>
        <p className="text-gray-600">
          Optional advanced networking configurations (can be configured later)
        </p>
      </div>

      {/* DNS Configuration */}
      <Card>
        <CardHeader
          className="cursor-pointer"
          onClick={() => setDnsExpanded(!dnsExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="h-5 w-5 text-[#0066CC]" />
              </div>
              <div>
                <CardTitle>DNS Configuration</CardTitle>
                <CardDescription>Configure DNS resolution for your network</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Cloud Security DNS (Default)
              </Badge>
              {dnsExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
        </CardHeader>

        {dnsExpanded && (
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dns-provider">DNS Provider</Label>
              <Select value={dnsProvider} onValueChange={setDnsProvider}>
                <SelectTrigger id="dns-provider">
                  <SelectValue placeholder="Select DNS provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cloud-security">
                    Cloud Security DNS (Recommended)
                  </SelectItem>
                  <SelectItem value="google">Google DNS (8.8.8.8)</SelectItem>
                  <SelectItem value="cloudflare">Cloudflare DNS (1.1.1.1)</SelectItem>
                  <SelectItem value="custom">Custom DNS Servers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {dnsProvider === 'custom' && (
              <div className="space-y-2">
                <Label htmlFor="custom-dns">Custom DNS Servers</Label>
                <Input
                  id="custom-dns"
                  value={customDns}
                  onChange={(e) => setCustomDns(e.target.value)}
                  placeholder="8.8.8.8, 8.8.4.4"
                />
                <p className="text-xs text-gray-500">Comma-separated IP addresses</p>
              </div>
            )}

            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Cloud Security DNS</strong> provides
                integrated threat protection, content filtering, and malware blocking at
                the DNS layer.
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      {/* WAN Failover */}
      <Card>
        <CardHeader
          className="cursor-pointer"
          onClick={() => setWanExpanded(!wanExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Wifi className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <CardTitle>WAN Failover</CardTitle>
                <CardDescription>Configure backup WAN connectivity</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-gray-50">
                Optional
              </Badge>
              {wanExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
        </CardHeader>

        {wanExpanded && (
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="wan-failover">Enable WAN Failover</Label>
                <p className="text-sm text-gray-600">
                  Automatically switch to backup WAN if primary fails
                </p>
              </div>
              <Switch
                id="wan-failover"
                checked={wanFailoverEnabled}
                onCheckedChange={setWanFailoverEnabled}
              />
            </div>

            {wanFailoverEnabled && (
              <div className="space-y-4 pl-6">
                <div className="space-y-2">
                  <Label htmlFor="primary-wan">Primary WAN Interface</Label>
                  <Select defaultValue="wan1">
                    <SelectTrigger id="primary-wan">
                      <SelectValue placeholder="Select primary WAN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wan1">WAN 1 (Primary)</SelectItem>
                      <SelectItem value="wan2">WAN 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backup-wan">Backup WAN Interface</Label>
                  <Select defaultValue="wan2">
                    <SelectTrigger id="backup-wan">
                      <SelectValue placeholder="Select backup WAN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wan2">WAN 2</SelectItem>
                      <SelectItem value="lte">LTE/Cellular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="failover-mode">Failover Mode</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger id="failover-mode">
                      <SelectValue placeholder="Select failover mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatic (Link Detection)</SelectItem>
                      <SelectItem value="health">Health Check Based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Port Forwarding */}
      <Card>
        <CardHeader
          className="cursor-pointer"
          onClick={() => setPortForwardingExpanded(!portForwardingExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Network className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <CardTitle>Port Forwarding</CardTitle>
                <CardDescription>Configure inbound port forwarding rules</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-gray-50">
                Optional
              </Badge>
              {portForwardingExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
        </CardHeader>

        {portForwardingExpanded && (
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <Network className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No port forwarding rules configured</p>
              <Button variant="outline" size="sm" className="mt-4">
                Add Port Forwarding Rule
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Custom NAT Rules */}
      <Card>
        <CardHeader
          className="cursor-pointer"
          onClick={() => setNatExpanded(!natExpanded)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Settings className="h-5 w-5 text-orange-700" />
              </div>
              <div>
                <CardTitle>Custom NAT Rules</CardTitle>
                <CardDescription>Configure Network Address Translation rules</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-gray-50">
                Optional
              </Badge>
              {natExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
        </CardHeader>

        {natExpanded && (
          <CardContent>
            <div className="text-center py-8 text-gray-500">
              <Settings className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p className="text-sm">No custom NAT rules configured</p>
              <Button variant="outline" size="sm" className="mt-4">
                Add NAT Rule
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

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
              Continue to Bundle Assignment
            </Button>
          )}
          {onCancel && (
            <Button
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-600 ml-auto"
            >
              Cancel
            </Button>
          )}
        </div>
      )}
    </div>
  );
}