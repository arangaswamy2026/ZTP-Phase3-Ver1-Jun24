import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Globe, 
  Lock, 
  Server,
  AlertCircle,
  Check,
  ListTodo,
  Download
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export type ExplanationVariant = 'split' | 'narrative' | 'checklist';

interface ConfigurationExplanationProps {
  variant?: ExplanationVariant;
  onAdvancedSettings?: () => void;
}

import { DefaultConfigurationModal } from './DefaultConfigurationModal';
import { IdentityUsersModal } from './IdentityUsersModal';
import { ClientDownloadModal } from './ClientDownloadModal';

export function ConfigurationExplanation({ variant: initialVariant = 'split', onAdvancedSettings }: ConfigurationExplanationProps) {
  const [variant, setVariant] = useState<ExplanationVariant>(initialVariant);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showIdentityModal, setShowIdentityModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <div className="mb-6 space-y-4">
      {variant === 'split' && (
        <SplitView 
          onOpenConfig={() => setShowConfigModal(true)} 
          onOpenIdentity={() => setShowIdentityModal(true)}
          onOpenDownload={() => setShowDownloadModal(true)}
        />
      )}
      {variant === 'narrative' && <NarrativeView />}
      {variant === 'checklist' && <ChecklistView />}
      <DefaultConfigurationModal 
        isOpen={showConfigModal} 
        onClose={() => setShowConfigModal(false)} 
        onAdvancedSettings={onAdvancedSettings}
      />
      <IdentityUsersModal isOpen={showIdentityModal} onClose={() => setShowIdentityModal(false)} />
      <ClientDownloadModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
    </div>
  );
}

function SplitView({ onOpenConfig, onOpenIdentity, onOpenDownload }: { onOpenConfig: () => void; onOpenIdentity: () => void; onOpenDownload: () => void }) {
  return (
    <Card className="bg-white border-blue-100 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left: What's Enabled */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-white border-r border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900">Enabled by Default</h3>
            </div>
            <Button 
               variant="ghost" 
               size="sm" 
               className="text-xs text-blue-600 hover:text-blue-700 h-8"
               onClick={onOpenConfig}
            >
               View Configuration
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The <strong>Standard Security Template</strong> is active. Your network is protected against external threats immediately.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Threat Protection</span>
                <p className="text-gray-500 text-xs">IPS, Anti-Virus,and App Control block malicious traffic.</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Secure Internet Access</span>
                <p className="text-gray-500 text-xs">Safe browsing via CFS, Botnet, and DNS filtering for all connected interfaces.</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Server className="w-4 h-4 text-green-600 mt-0.5" />
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Network Zones</span>
                <p className="text-gray-500 text-xs">Employee, Guest, and Internet zones are segmented.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: What's Needed */}
        <div className="p-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900">Required Next Steps</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            To enable full Zero Trust capabilities, you need to configure user identity and specific access rules.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <span className="font-semibold text-gray-900">Define Private Apps</span>
                <p className="text-gray-500 text-xs">Create policies to allow access to specific internal resources.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function NarrativeView() {
  return (
    <Card className="bg-gradient-to-r from-[#001B50] to-[#004080] text-white p-6 overflow-hidden">
      <div className="flex">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-green-500 hover:bg-green-600 text-white border-0">
              Active
            </Badge>
            <h3 className="text-xl font-bold">Standard Protection is Enabled</h3>
          </div>
          
          <p className="text-blue-100 mb-6 text-sm leading-relaxed">
            Your device is pre-configured with a <strong>baseline security policy</strong>. This means network segmentation (Zones) 
            and threat prevention (IPS/AV) are already active to protect your perimeter. You do <strong>not</strong> need to configure 
            basic firewall rules manually.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-[#001B50]" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">What you need to do now</h4>
                <p className="text-xs text-blue-100">
                  The default configuration protects the <strong>network</strong>, but Zero Trust requires protecting the <strong>user</strong>. 
                  Please proceed to <strong>Configure Identity</strong> to enable user authentication, then define granular access policies for your private applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Shield */}
        <div className="hidden md:flex items-start justify-end shrink-0 opacity-10 -mr-4 -mt-2">
          <Shield className="w-48 h-48" />
        </div>
      </div>
    </Card>
  );
}

function ChecklistView() {
  return (
    <Card className="bg-white p-6 border-l-4 border-l-[#0066CC]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Configuration Status</h3>
          <p className="text-sm text-gray-600 max-w-xl">
            We've applied a secure baseline to get you started. Follow the checklist to complete your Zero Trust setup.
          </p>
        </div>
        
        <div className="flex-1 max-w-lg bg-gray-50 rounded-lg p-4">
          <div className="space-y-3">
            {/* Completed Item */}
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-green-700" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-900 line-through">Base Network & Zones</span>
              </div>
              <Badge variant="outline" className="bg-gray-100 text-gray-600 text-[10px]">Done</Badge>
            </div>

            {/* Completed Item */}
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-green-700" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-900 line-through">Threat Prevention Rules</span>
              </div>
              <Badge variant="outline" className="bg-gray-100 text-gray-600 text-[10px]">Done</Badge>
            </div>

            {/* Active Item */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <div className="flex-1">
                <span className="text-sm font-bold text-gray-900">Identity & User Setup</span>
              </div>
              <Button size="sm" variant="outline" className="h-6 text-xs border-blue-200 text-blue-700 hover:bg-blue-50">
                Action Required
              </Button>
            </div>

            {/* Pending Item */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0">
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-500">Private App Policies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}