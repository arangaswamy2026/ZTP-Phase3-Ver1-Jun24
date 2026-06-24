import React, { useState } from 'react';
import { Card } from './ui/card';
import { 
  CheckCircle2, 
  X, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight, 
  Layout, 
  Activity,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ConfigurationExplanation } from './ConfigurationExplanation';
import { DefaultConfigurationModal } from './DefaultConfigurationModal';

interface DashboardVariantsProps {
  variant: 'standard' | 'sidebar';
  onDismissOnboarding?: () => void;
  showOnboarding?: boolean;
  onAdvancedSettings?: () => void;
}

export function DashboardVariants({ variant, onDismissOnboarding, showOnboarding = true, onAdvancedSettings }: DashboardVariantsProps) {
  if (variant === 'sidebar') {
    return <SidebarVariant showOnboarding={showOnboarding} onDismiss={onDismissOnboarding} onAdvancedSettings={onAdvancedSettings} />;
  }
  return <StandardVariant showOnboarding={showOnboarding} onDismiss={onDismissOnboarding} onAdvancedSettings={onAdvancedSettings} />;
}

// ----------------------------------------------------------------------
// Variant 1: Standard Dashboard (Stacked Cards)
// ----------------------------------------------------------------------
function StandardVariant({ showOnboarding, onDismiss, onAdvancedSettings }: { showOnboarding: boolean, onDismiss?: () => void, onAdvancedSettings?: () => void }) {
  return (
    <div className="space-y-6">
      {/* Onboarding Section - Dismissible */}
      {showOnboarding && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col">
            <div className="flex justify-end pb-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onDismiss} 
                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600 hover:bg-white/50"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
            <ConfigurationExplanation variant="split" onAdvancedSettings={onAdvancedSettings} />
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <SummaryCards />
    </div>
  );
}

// ----------------------------------------------------------------------
// Variant 2: Sidebar Dashboard (Split View)
// ----------------------------------------------------------------------
function SidebarVariant({ showOnboarding, onDismiss, onAdvancedSettings }: { showOnboarding: boolean, onDismiss?: () => void, onAdvancedSettings?: () => void }) {
  const [showConfigModal, setShowConfigModal] = useState(false);

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Main Dashboard Area */}
      <div className="flex-1 space-y-6">
         <SummaryCards />
      </div>

      {/* Right Sidebar - Onboarding Context */}
      {showOnboarding && (
        <div className="xl:w-[400px] shrink-0 animate-in fade-in slide-in-from-right-4 duration-500">
          <Card className="bg-white border-blue-100 overflow-hidden h-full">
            <div className="p-4 border-b border-blue-100 bg-blue-50/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0066CC]" />
                <h3 className="font-bold text-gray-900">Security Status</h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onDismiss} 
                className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-5 space-y-6">
              {/* Enabled Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Active
                    </Badge>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Enabled by Default</span>
                  </div>
                  <Button 
                    variant="link" 
                    className="h-auto p-0 text-[10px] text-blue-600 hover:text-blue-700 font-medium"
                    onClick={() => setShowConfigModal(true)}
                  >
                    View Config
                  </Button>
                </div>
                <div className="space-y-3 pl-1">
                   <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Threat Protection</p>
                        <p className="text-xs text-gray-500">IPS & Anti-Virus blocking threats</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Secure Internet</p>
                        <p className="text-xs text-gray-500">Safe browsing on X0/X1</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Next Steps Section */}
              <div>
                 <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Required
                  </Badge>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Next Steps</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex gap-3 mb-3">
                    <Users className="w-5 h-5 text-[#0066CC]" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Connect Identity</h4>
                      <p className="text-xs text-gray-600 mt-0.5">Setup SSO for user-based access</p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-[#0066CC] hover:bg-[#0052A3] h-8 text-xs">
                    Configure Identity
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
      <DefaultConfigurationModal 
        isOpen={showConfigModal} 
        onClose={() => setShowConfigModal(false)} 
        onAdvancedSettings={onAdvancedSettings}
      />
    </div>
  );
}

// ----------------------------------------------------------------------
// Shared Summary Cards — composed card patterns from design system
// ----------------------------------------------------------------------
function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Service Health — status-list card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-base font-semibold text-gray-900 leading-tight m-0">Service Health</p>
        </div>
        <div>
          {[
            { label: 'ZT Connector', value: 'Online' },
            { label: 'Cloud connectivity', value: 'Connected' },
            { label: 'Global edge network', value: 'Online' },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className={`flex items-center justify-between py-[7px] text-sm ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <span className="font-medium text-gray-900">{row.label}</span>
              <span className="font-medium text-gray-500">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Web Traffic — metric-stack card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-[#0066CC]" />
          </div>
          <p className="text-base font-semibold text-gray-900 leading-tight m-0">
            Web traffic
            <span className="text-gray-400 font-normal text-sm ml-1.5">Last 30 days</span>
          </p>
        </div>
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">Allowed</div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 leading-none">3,084,358</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-900 rounded-full px-2 py-0.5">
              <TrendingUp className="w-2.5 h-2.5" />+32%
            </span>
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-500 mb-1">Non-Compliance Blocks</div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 leading-none">82,487</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 text-gray-900 rounded-full px-2 py-0.5">
              <TrendingUp className="w-2.5 h-2.5" />+18,690%
            </span>
          </div>
        </div>
      </div>

      {/* Policies — compact stat card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-base font-semibold text-gray-900 leading-tight m-0">Policies</p>
        </div>
        <div className="text-[2.5rem] font-bold leading-none mb-0.5 text-[#0066CC]">3</div>
        <div className="text-sm text-gray-500">Policies enforced</div>
      </div>

      {/* Endpoints — compact stat card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-base font-semibold text-gray-900 leading-tight m-0">Endpoints</p>
        </div>
        <div className="text-[2.5rem] font-bold leading-none mb-0.5 text-[#0066CC]">7</div>
        <div className="text-sm text-gray-500">↑ 5% vs prior period</div>
      </div>

    </div>
  );
}