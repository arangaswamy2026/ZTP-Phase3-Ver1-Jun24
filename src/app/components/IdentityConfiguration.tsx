import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Shield, Users, Globe, Key, CheckCircle2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface IdentityConfigurationProps {
  onContinue?: () => void;
  onCancel?: () => void;
  identitySource: string;
  onIdentitySourceChange: (source: string) => void;
}

interface LocalUser {
  name: string;
  email: string;
  tempPassword?: string;
}

export function IdentityConfiguration({ 
  onContinue, 
  onCancel,
  identitySource,
  onIdentitySourceChange
}: IdentityConfigurationProps) {
  const [idpType, setIdpType] = useState('azure-ad');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // External IdP Settings State
  const [settings, setSettings] = useState({
    domain: '',
    tenantId: '',
    clientId: '',
    clientSecret: '',
    metadataUrl: ''
  });
  const [tempSettings, setTempSettings] = useState(settings);

  // Local User Management State
  const [localUsers, setLocalUsers] = useState<LocalUser[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const openSettings = () => {
    setTempSettings(settings);
    setIsSettingsOpen(true);
  };

  const saveSettings = () => {
    setSettings(tempSettings);
    setIsSettingsOpen(false);
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    const tempPassword = Math.random().toString(36).slice(-8).toUpperCase();
    setLocalUsers([...localUsers, { ...newUser, tempPassword }]);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
          <RadioGroup value={identitySource} onValueChange={onIdentitySourceChange} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="local" id="local" className="peer sr-only" />
              <Label
                htmlFor="local"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#0066CC] peer-data-[state=checked]:text-[#0066CC] cursor-pointer h-full"
              >
                <Users className="mb-3 h-6 w-6" />
                <div className="text-center space-y-1">
                  <div className="font-semibold">Local Database</div>
                  <div className="text-xs text-gray-500 font-normal">
                    Manage users directly within the platform.
                  </div>
                </div>
              </Label>
            </div>

            <div>
              <RadioGroupItem value="external" id="external" className="peer sr-only" />
              <Label
                htmlFor="external"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#0066CC] peer-data-[state=checked]:text-[#0066CC] cursor-pointer h-full"
              >
                <Shield className="mb-3 h-6 w-6" />
                <div className="text-center space-y-1">
                  <div className="font-semibold">External IdP (SSO)</div>
                  <div className="text-xs text-gray-500 font-normal">
                    Integrate with Azure AD, Okta, or other SAML providers.
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>

          {/* Local User Management UI */}
          {identitySource === 'local' && (
             <div className="mt-6 space-y-8 border-t pt-6 animate-in fade-in slide-in-from-top-2">
                <div className="space-y-6">
                   <div className="flex items-center justify-between border-b pb-2">
                      <h3 className="text-lg font-bold text-gray-900">Invite Users</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <div className="space-y-2">
                         <Label className="text-base font-medium text-[#1e2828]">User Name</Label>
                         <p className="text-sm text-[#585858]">Users first and last name</p>
                         <Input 
                           value={newUser.name} 
                           onChange={e => setNewUser({...newUser, name: e.target.value})}
                           placeholder="e.g. Breanna Chou"
                           className="h-[32px]"
                         />
                      </div>
                      <div className="space-y-2">
                         <Label className="text-base font-medium text-[#2f3243]">User Email</Label>
                         <p className="text-sm text-[#5d6882]">Valid email address</p>
                         <Input 
                           value={newUser.email} 
                           onChange={e => setNewUser({...newUser, email: e.target.value})}
                           placeholder="e.g. bchou@sonicwall.com"
                           className="h-[32px]"
                         />
                      </div>
                   </div>
                   
                   <div className="flex justify-end">
                      <Button 
                        onClick={addUser} 
                        className="bg-[#0087f7] hover:bg-[#0070d0] text-white h-[32px] px-4"
                        disabled={!newUser.name || !newUser.email}
                      >
                        Add User
                      </Button>
                   </div>
                </div>

                <div className="space-y-4">
                   <h3 className="text-base font-bold text-[#1e2828]">User List</h3>
                   <div className="border-t border-[#e2e8f4]">
                      <Table>
                         <TableHeader className="bg-neutral-50 h-[36px]">
                            <TableRow className="hover:bg-neutral-50 border-b border-[#e2e8f4]">
                               <TableHead className="w-[40%] text-xs uppercase font-normal text-[#7a849d] h-9 pl-3">Email</TableHead>
                               <TableHead className="w-[30%] text-xs uppercase font-normal text-[#7a849d] h-9">Name</TableHead>
                               <TableHead className="text-xs uppercase font-normal text-[#7a849d] h-9">Temporary Password</TableHead>
                            </TableRow>
                         </TableHeader>
                         <TableBody>
                            {localUsers.length === 0 ? (
                               <TableRow className="border-b border-[#e2e8f4]">
                                  <TableCell colSpan={3} className="h-16 text-center text-[#aaaaaa] text-xs font-bold">
                                     No users
                                  </TableCell>
                               </TableRow>
                            ) : (
                               localUsers.map((user, i) => (
                                  <TableRow key={i} className="border-b border-[#e2e8f4]">
                                     <TableCell className="font-bold text-[#2f3243] text-xs pl-3 py-3">{user.email}</TableCell>
                                     <TableCell className="font-bold text-[#2f3243] text-xs py-3">{user.name}</TableCell>
                                     <TableCell className="font-bold text-[#2f3243] text-xs py-3">{user.tempPassword}</TableCell>
                                  </TableRow>
                               ))
                            )}
                         </TableBody>
                      </Table>
                   </div>
                   
                   <div className="flex items-center justify-center gap-2 py-2">
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-gray-100" disabled><ChevronsLeft className="h-4 w-4 text-gray-400" /></Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-gray-100" disabled><ChevronLeft className="h-4 w-4 text-gray-400" /></Button>
                      <span className="text-sm text-[#818181] px-2">Page 1 of 1</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-gray-100" disabled><ChevronRight className="h-4 w-4 text-gray-400" /></Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 rounded hover:bg-gray-100" disabled><ChevronsRight className="h-4 w-4 text-gray-400" /></Button>
                   </div>
                </div>
             </div>
          )}

          {identitySource === 'external' && (
            <div className="mt-6 space-y-4 border-t pt-4 animate-in fade-in slide-in-from-top-2">
               <div className="space-y-2">
                <Label>Select Identity Provider</Label>
                <Select value={idpType} onValueChange={setIdpType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="azure-ad">Microsoft Entra ID (Azure AD)</SelectItem>
                    <SelectItem value="okta">Okta</SelectItem>
                    <SelectItem value="google">Google Workspace</SelectItem>
                    <SelectItem value="ping">PingIdentity</SelectItem>
                    <SelectItem value="saml">Generic SAML 2.0</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-lg border bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3">
                        <div className={`mt-1 p-1.5 rounded-full ${settings.domain ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                           {settings.domain ? <CheckCircle2 className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                        </div>
                        <div className="space-y-0.5">
                           <div className="font-medium text-sm text-gray-900">Provider Settings</div>
                           <div className="text-xs text-gray-500">
                             {settings.domain 
                               ? `Configured for ${settings.domain}` 
                               : 'Connection details required'}
                           </div>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={openSettings}>
                      {settings.domain ? 'Edit Settings' : 'Configure'}
                    </Button>
                  </div>
              </div>
            </div>
          )}
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
        {onCancel && (
          <Button variant="outline" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        )}
        {onContinue && (
          <Button onClick={onContinue} size="sm" className="bg-[#0066CC] hover:bg-[#0052A3]">
            Save & Continue
          </Button>
        )}
      </div>

      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Configure {idpType === 'azure-ad' ? 'Entra ID' : 'Identity Provider'}</DialogTitle>
              <DialogDescription>
                Enter the connection details obtained from your Identity Provider.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
               <div className="space-y-2">
                  <Label htmlFor="domain">Domain Name</Label>
                  <Input 
                    id="domain" 
                    placeholder="e.g. acme.com" 
                    value={tempSettings.domain}
                    onChange={(e) => setTempSettings({...tempSettings, domain: e.target.value})}
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="tenant-id">Tenant ID</Label>
                  <Input 
                    id="tenant-id" 
                    placeholder="0000-0000-0000-0000" 
                    value={tempSettings.tenantId}
                    onChange={(e) => setTempSettings({...tempSettings, tenantId: e.target.value})}
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="client-id">Client ID / App ID</Label>
                  <Input 
                    id="client-id" 
                    placeholder="Application (client) ID" 
                    value={tempSettings.clientId}
                    onChange={(e) => setTempSettings({...tempSettings, clientId: e.target.value})}
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="client-secret">Client Secret</Label>
                   <div className="relative">
                      <Input 
                        id="client-secret" 
                        type="password" 
                        placeholder="Client Secret Value"
                        value={tempSettings.clientSecret}
                        onChange={(e) => setTempSettings({...tempSettings, clientSecret: e.target.value})}
                      />
                      <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 hover:bg-transparent">
                        <Key className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
               </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>Cancel</Button>
              <Button onClick={saveSettings}>Save Settings</Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>
  );
}