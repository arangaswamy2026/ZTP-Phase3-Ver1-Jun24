import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Laptop, 
  Monitor, 
  Terminal, 
  Smartphone, 
  RefreshCw, 
  Copy, 
  Check, 
  Download,
  Mail,
  Shield
} from 'lucide-react';

interface ClientDeploymentProps {
  onContinue?: () => void;
  onCancel?: () => void;
}

export function ClientDeployment({ onContinue, onCancel }: ClientDeploymentProps) {
  const [inviteCode, setInviteCode] = useState('BIKRAM-PREVIEW');
  const [emailExemptions, setEmailExemptions] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Download Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Download and Install CSE App</h3>
        </div>
        <p className="text-sm text-gray-600">
          Use the CSE Desktop and Mobile Apps to register devices that can access corporate applications.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <DownloadCard 
            icon={Laptop} 
            os="MacOS" 
            type="desktop" 
          />
          <DownloadCard 
            icon={Monitor} 
            os="Windows" 
            type="desktop" 
          />
          <DownloadCard 
            icon={Terminal} 
            os="Linux" 
            type="desktop" 
          />
          <DownloadCard 
            icon={Smartphone} 
            os="iOS" 
            type="mobile" 
            store="App Store"
          />
          <DownloadCard 
            icon={Smartphone} 
            os="Android" 
            type="mobile" 
            store="Google Play"
          />
        </div>
      </div>

      {/* Invite Code Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Invite Code</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-sm text-gray-600">
            This code is required by users when registering their devices for the first time.
          </div>
          <div className="space-y-3">
            <Label htmlFor="invite-code">Invite code required by users registering devices to this tenant</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input 
                  id="invite-code" 
                  value={inviteCode} 
                  onChange={(e) => setInviteCode(e.target.value)}
                  className="font-mono pr-10"
                />
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                  onClick={handleCopyCode}
                >
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <Button className="bg-[#4F46E5] hover:bg-[#4338CA] whitespace-nowrap">
                Update Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">OTP-Based Email Verification</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-sm text-gray-600">
            Users are required to verify their email via a One-Time Password (OTP).
            You can exempt specific users or groups.
          </div>
          <div className="space-y-3">
            <Label htmlFor="otp-exempt">Users exempt from OTP-based email verification</Label>
            <Input 
              id="otp-exempt" 
              placeholder="None" 
              value={emailExemptions}
              onChange={(e) => setEmailExemptions(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
}

function DownloadCard({ icon: Icon, os, type, store }: { icon: any, os: string, type: 'desktop' | 'mobile', store?: string }) {
  return (
    <Card className="hover:border-blue-400 cursor-pointer transition-colors group">
      <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
        <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
          <Icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
        </div>
        <div className="space-y-1">
          <div className="text-xs text-gray-500">CSE App</div>
          <div className="font-semibold text-gray-900">for {os}</div>
        </div>
        {type === 'mobile' && store && (
          <Badge variant="secondary" className="mt-2 text-[10px] bg-black text-white hover:bg-gray-800">
            {store}
          </Badge>
        )}
        {type === 'desktop' && (
          <Badge variant="outline" className="mt-2 text-[10px]">
            Download
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
