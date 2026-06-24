import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Users, Shield, Plus, Mail, Smartphone, Globe, Lock } from 'lucide-react';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';

interface IdentityUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

export function IdentityUsersModal({ isOpen, onClose, onSave }: IdentityUsersModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'local' | 'sso'>('local');
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [sendLink, setSendLink] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const handleAddUser = () => {
    if (inviteName && inviteEmail) {
      setUsers([...users, { name: inviteName, email: inviteEmail, status: 'Pending' }]);
      setInviteName('');
      setInviteEmail('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Identity & Users</DialogTitle>
          <DialogDescription>
            Configure how users will access the platform
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-8">
          {/* Identity Provider Selection */}
          <div className="grid grid-cols-2 gap-4">
            <Card 
              className={`p-4 flex flex-col items-center gap-3 cursor-pointer transition-all ${
                selectedMethod === 'local' 
                  ? 'border-2 border-blue-600 bg-blue-50/50 shadow-sm' 
                  : 'border border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod('local')}
            >
              <Users className={`w-8 h-8 ${selectedMethod === 'local' ? 'text-blue-600' : 'text-gray-400'}`} />
              <div className="text-center">
                <div className={`font-semibold text-sm ${selectedMethod === 'local' ? 'text-blue-700' : 'text-gray-900'}`}>Local Database</div>
                <div className="text-xs text-gray-500 mt-1 max-w-[150px]">Manage users directly within the platform.</div>
              </div>
              {selectedMethod === 'local' && (
                <div className="bg-blue-600 rounded-full p-1 mt-1">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              )}
            </Card>

            <Card 
              className={`p-4 flex flex-col items-center gap-3 cursor-pointer transition-all ${
                selectedMethod === 'sso' 
                  ? 'border-2 border-blue-600 bg-blue-50/50 shadow-sm' 
                  : 'border border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod('sso')}
            >
              <Shield className={`w-8 h-8 ${selectedMethod === 'sso' ? 'text-blue-600' : 'text-gray-400'}`} />
              <div className="text-center">
                <div className={`font-semibold text-sm ${selectedMethod === 'sso' ? 'text-blue-700' : 'text-gray-900'}`}>External IdP (SSO)</div>
                <div className="text-xs text-gray-500 mt-1 max-w-[150px]">Integrate with Azure AD, Okta, or other SAML providers.</div>
              </div>
              {selectedMethod === 'sso' && (
                <div className="bg-blue-600 rounded-full p-1 mt-1">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              )}
            </Card>
          </div>

          {/* Conditional Content based on Selection */}
          {selectedMethod === 'local' ? (
            <div className="space-y-6">
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Invite Users</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-gray-700">User Name</Label>
                      <Input 
                        placeholder="e.g. Breanna Chou" 
                        className="bg-white h-9" 
                        value={inviteName}
                        onChange={(e) => setInviteName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-medium text-gray-700">User Email</Label>
                      <Input 
                        placeholder="e.g. bchou@sonicwall.com" 
                        className="bg-white h-9" 
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="send-link" 
                        checked={sendLink} 
                        onCheckedChange={(c) => setSendLink(c as boolean)} 
                        className="data-[state=checked]:bg-blue-600"
                      />
                      <label
                        htmlFor="send-link"
                        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                      >
                        Send Client App Link (Email/SMS)
                      </label>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white h-8"
                      disabled={!inviteName || !inviteEmail}
                      onClick={handleAddUser}
                    >
                      Add User
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900">User List</h3>
                  <span className="text-xs text-gray-500">Page 1 of 1</span>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden min-h-[160px]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-900 font-medium border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2.5 text-xs font-medium w-[40%]">Email</th>
                        <th className="px-4 py-2.5 text-xs font-medium w-[30%]">Name</th>
                        <th className="px-4 py-2.5 text-xs font-medium w-[30%]">Client Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-4 py-12 text-center text-gray-500 text-sm">
                            No users added yet.
                          </td>
                        </tr>
                      ) : (
                        users.map((user, idx) => (
                          <tr key={idx} className="bg-white">
                            <td className="px-4 py-3 text-xs text-gray-900">{user.email}</td>
                            <td className="px-4 py-3 text-xs text-gray-600">{user.name}</td>
                            <td className="px-4 py-3 text-xs text-gray-500">
                              <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200 font-normal">Pending</Badge>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                <Lock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-amber-900">SSO Configuration Required</h4>
                  <p className="text-xs text-amber-700 mt-1">
                    To use External IdP, you need to configure the SAML integration settings. This will redirect users to your identity provider for authentication.
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 border-amber-300 text-amber-800 hover:bg-amber-100 h-8">
                    Configure SAML Settings
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="border-t border-gray-100 pt-4 gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose} className="h-9">Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9" onClick={() => {
             if (onSave) onSave();
             onClose();
          }}>
            Save & Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
