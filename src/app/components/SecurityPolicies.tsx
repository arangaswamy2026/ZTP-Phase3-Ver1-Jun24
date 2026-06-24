import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Shield, 
  Lock, 
  Globe, 
  Check, 
  AlertTriangle,
  Network,
  ShieldCheck,
  Laptop,
  ArrowRight,
  CheckCircle,
  XCircle,
  Smartphone,
  Pencil,
  RotateCcw,
  Save
} from 'lucide-react';

interface SecurityPoliciesProps {
  onNext: () => void;
  onBack: () => void;
}

interface ZoneFlowConfig {
  lanToWan: 'allow' | 'deny';
  wanToLan: 'allow' | 'deny';
  guestToLan: 'allow' | 'deny';
}

interface PolicyTemplate {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: React.ElementType;
  features: {
    label: string;
    value: string;
    detail: string;
    icon: React.ElementType;
    status: 'high' | 'medium' | 'low';
    visualType?: 'zone-flow' | 'none';
    flowConfig?: ZoneFlowConfig;
  }[];
}

const ZoneFlowDiagram = ({ config }: { config: ZoneFlowConfig }) => {
  const renderFlow = (
    sourceName: string, 
    sourceIcon: React.ReactNode, 
    destName: string, 
    destIcon: React.ReactNode,
    action: 'allow' | 'deny'
  ) => {
    const isAllow = action === 'allow';
    return (
      <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
         <div className="flex items-center gap-2 w-28">
            <div className={`p-1.5 rounded-md ${sourceName.includes('Guest') ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
              {sourceIcon}
            </div>
            <span className="text-sm font-semibold text-slate-700 truncate">{sourceName}</span>
         </div>
         
         <div className="flex-1 mx-2 flex flex-col items-center">
            <div className={`text-[10px] font-bold mb-0.5 uppercase tracking-wider ${isAllow ? 'text-emerald-600' : 'text-red-600'}`}>
              {action}
            </div>
            <div className="w-full flex items-center">
               <div className="flex-1 h-0.5 bg-slate-200" />
               <div className="bg-white px-1 shrink-0">
                  {isAllow ? (
                    <CheckCircle size={14} className="text-emerald-500 fill-emerald-50" />
                  ) : (
                    <XCircle size={14} className="text-red-500 fill-red-50" />
                  )}
               </div>
               <div className="flex-1 h-0.5 bg-slate-200" />
               <ArrowRight size={12} className="text-slate-400 shrink-0 -ml-1" />
            </div>
         </div>

         <div className="flex items-center gap-2 w-28 justify-end">
            <span className="text-sm font-semibold text-slate-700 truncate">{destName}</span>
            <div className={`p-1.5 rounded-md ${destName === 'WAN' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
              {destIcon}
            </div>
         </div>
      </div>
    );
  };

  return (
    <div className="mt-4 bg-slate-50 rounded-xl border border-slate-200 p-5">
      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Traffic Control Visualization</h4>
      <div className="space-y-3">
        {renderFlow('Employee Zone', <Laptop size={16} />, 'Internet', <Globe size={16} />, config.lanToWan)}
        {renderFlow('Internet', <Globe size={16} />, 'Employee Zone', <Laptop size={16} />, config.wanToLan)}
        {renderFlow('Guest', <Smartphone size={16} />, 'Employee Zone', <Laptop size={16} />, config.guestToLan)}
      </div>
    </div>
  );
};

const DEFAULT_TEMPLATES: Record<string, PolicyTemplate> = {
  standard: {
    id: 'standard',
    name: 'SonicWall Recommended',
    description: 'Balanced security posture suitable for most enterprise environments.',
    color: 'blue',
    icon: Shield,
    features: [
      { 
        label: 'Basic L3/L4 Policies', 
        value: 'Zone Isolation Enforced', 
        detail: 'Employee Zone → Internet allow, Internet → Employee Zone deny, Guest → Employee Zone deny',
        icon: Network, 
        status: 'medium',
        visualType: 'zone-flow',
        flowConfig: { lanToWan: 'allow', wanToLan: 'deny', guestToLan: 'deny' }
      },
      { 
        label: 'Default SWG Policies', 
        value: 'Content Filtering', 
        detail: 'Blocks Adult, Gambling, and Suspicious domains',
        icon: Globe, 
        status: 'medium' 
      },
      { 
        label: 'Default ZTNA Policies', 
        value: 'Identity & Posture', 
        detail: 'User + Device Posture verification required for app access',
        icon: ShieldCheck, 
        status: 'high' 
      },
    ]
  },
  strict: {
    id: 'strict',
    name: 'Strict Compliance',
    description: 'Maximum security settings for high-value segments.',
    color: 'purple',
    icon: Lock,
    features: [
      { 
        label: 'L3/L4 Policies', 
        value: 'Zero Trust Network', 
        detail: 'Implicit Deny All. Whitelist only.',
        icon: Network, 
        status: 'high',
        visualType: 'zone-flow',
        flowConfig: { lanToWan: 'deny', wanToLan: 'deny', guestToLan: 'deny' }
      },
      { 
        label: 'SWG Policies', 
        value: 'Business Only', 
        detail: 'Blocks all non-business categories and unrated sites',
        icon: Globe, 
        status: 'high' 
      },
      { 
        label: 'ZTNA Policies', 
        value: 'Strict Identity', 
        detail: 'MFA + Compliant Device required for all access',
        icon: ShieldCheck, 
        status: 'high' 
      },
    ]
  },
  guest: {
    id: 'guest',
    name: 'Guest / Public',
    description: 'Designed for untrusted networks. Isolates clients.',
    color: 'orange',
    icon: AlertTriangle,
    features: [
      { 
        label: 'L3/L4 Policies', 
        value: 'Client Isolation', 
        detail: 'Guest clients cannot communicate with each other or Employee Zone',
        icon: Network, 
        status: 'medium',
        visualType: 'zone-flow',
        flowConfig: { lanToWan: 'allow', wanToLan: 'deny', guestToLan: 'deny' }
      },
      { 
        label: 'SWG Policies', 
        value: 'Safe Browsing', 
        detail: 'Blocks Malicious, Phishing, and Adult content',
        icon: Globe, 
        status: 'low' 
      },
      { 
        label: 'ZTNA Policies', 
        value: 'Optional', 
        detail: 'No authentication required for internet access',
        icon: ShieldCheck, 
        status: 'low' 
      },
    ]
  }
};

export function SecurityPolicies({ onNext, onBack }: SecurityPoliciesProps) {
  const [policies, setPolicies] = useState(DEFAULT_TEMPLATES);
  const [selectedId, setSelectedId] = useState<string>('standard');
  const [isEditing, setIsEditing] = useState(false);

  const activePolicy = policies[selectedId];

  const handleUpdateFeature = (idx: number, updates: Partial<typeof activePolicy.features[0]>) => {
    setPolicies(prev => ({
      ...prev,
      [selectedId]: {
        ...prev[selectedId],
        features: prev[selectedId].features.map((f, i) => i === idx ? { ...f, ...updates } : f)
      }
    }));
  };

  const handleFlowUpdate = (key: keyof ZoneFlowConfig, value: 'allow' | 'deny') => {
    const featureIdx = 0; // Assuming L3/L4 is always first
    const currentConfig = activePolicy.features[featureIdx].flowConfig!;
    const newConfig = { ...currentConfig, [key]: value };
    
    // Auto-generate description based on config
    const desc = `Employee Zone → Internet ${newConfig.lanToWan}, Internet → Employee Zone ${newConfig.wanToLan}, Guest → Employee Zone ${newConfig.guestToLan}`;
    
    handleUpdateFeature(featureIdx, {
      flowConfig: newConfig,
      detail: desc
    });
  };

  const FlowToggle = ({ label, value, onChange }: { label: string, value: 'allow' | 'deny', onChange: (v: 'allow' | 'deny') => void }) => (
     <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <div className="flex bg-slate-200 rounded p-0.5">
           <button 
              onClick={() => onChange('allow')}
              className={`px-3 py-1 text-xs font-bold rounded shadow-sm transition-all ${value === 'allow' ? 'bg-emerald-500 text-white' : 'text-slate-500 hover:bg-slate-300'}`}
           >
              ALLOW
           </button>
           <button 
              onClick={() => onChange('deny')}
              className={`px-3 py-1 text-xs font-bold rounded shadow-sm transition-all ${value === 'deny' ? 'bg-red-500 text-white' : 'text-slate-500 hover:bg-slate-300'}`}
           >
              DENY
           </button>
        </div>
     </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Active Selection Preview */}
      <div className={`
        rounded-xl border-2 p-6 transition-all duration-300 group
        ${activePolicy.id === 'standard' ? 'bg-blue-50 border-blue-200' : ''}
        ${activePolicy.id === 'strict' ? 'bg-purple-50 border-purple-200' : ''}
        ${activePolicy.id === 'guest' ? 'bg-orange-50 border-orange-200' : ''}
      `}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
             <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center shrink-0
                ${activePolicy.id === 'standard' ? 'bg-blue-100 text-blue-600' : ''}
                ${activePolicy.id === 'strict' ? 'bg-purple-100 text-purple-600' : ''}
                ${activePolicy.id === 'guest' ? 'bg-orange-100 text-orange-600' : ''}
             `}>
                <activePolicy.icon className="w-6 h-6" />
             </div>
             <div>
                <div className="flex items-center gap-2.5 mb-1">
                   <h2 className="text-xl font-bold text-gray-900">{activePolicy.name}</h2>
                   {isEditing ? (
                      <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50">Editing Mode</Badge>
                   ) : (
                      <Badge className="bg-gray-900 hover:bg-gray-800">Active Selection</Badge>
                   )}
                </div>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                   {activePolicy.description}
                </p>
             </div>
          </div>
          {/* Edit Toggle */}
          <div className="shrink-0">
            <Button
               size="sm"
               variant={isEditing ? "default" : "outline"}
               className={isEditing ? "bg-slate-800 text-white" : "bg-white/50 border-slate-200 hover:bg-white"}
               onClick={() => setIsEditing(!isEditing)}
            >
               {isEditing ? <><Save className="w-4 h-4 mr-2" /> Done Editing</> : <><Pencil className="w-4 h-4 mr-2" /> Customize Policy</>}
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3">
           {activePolicy.features.map((feature, idx) => (
             <div key={idx} className="bg-white/80 rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 shrink-0 mt-0.5 border border-slate-100">
                     <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="text-sm font-bold text-gray-900">{feature.label}</div>
                           <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                           <div className="text-sm font-medium text-gray-600">{feature.value}</div>
                        </div>
                     </div>
                     
                     {/* Edit Mode vs View Mode */}
                     {isEditing ? (
                        <div className="mt-2 space-y-3 animate-in fade-in duration-300">
                           {feature.visualType === 'zone-flow' && feature.flowConfig ? (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                                 <FlowToggle 
                                    label="Employee Zone → Internet" 
                                    value={feature.flowConfig.lanToWan} 
                                    onChange={(v) => handleFlowUpdate('lanToWan', v)} 
                                 />
                                 <FlowToggle 
                                    label="Internet → Employee Zone" 
                                    value={feature.flowConfig.wanToLan} 
                                    onChange={(v) => handleFlowUpdate('wanToLan', v)} 
                                 />
                                 <FlowToggle 
                                    label="Guest → Employee Zone" 
                                    value={feature.flowConfig.guestToLan} 
                                    onChange={(v) => handleFlowUpdate('guestToLan', v)} 
                                 />
                              </div>
                           ) : (
                              <div className="space-y-1">
                                 <Label className="text-xs text-gray-500">Policy Details</Label>
                                 <Textarea 
                                    value={feature.detail}
                                    onChange={(e) => handleUpdateFeature(idx, { detail: e.target.value })}
                                    className="min-h-[60px] text-sm"
                                 />
                              </div>
                           )}
                        </div>
                     ) : (
                        <div className="text-sm text-gray-500 leading-relaxed">
                           {feature.detail}
                        </div>
                     )}
                     
                     {/* Visual Component Render (Always visible, updates in real-time) */}
                     {feature.visualType === 'zone-flow' && feature.flowConfig && (
                        <ZoneFlowDiagram config={feature.flowConfig} />
                     )}
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      <div className="border-t border-gray-100 my-6"></div>

      {/* Template Selection */}
      <div>
         <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Available Templates</h3>
            <Button 
               variant="ghost" 
               size="sm" 
               className="text-gray-500 hover:text-blue-600 h-8 text-xs"
               onClick={() => setPolicies(DEFAULT_TEMPLATES)}
            >
               <RotateCcw className="w-3 h-3 mr-1.5" /> Reset to Defaults
            </Button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(policies).map((template) => (
               <div 
                  key={template.id}
                  onClick={() => setSelectedId(template.id)}
                  className={`
                     relative cursor-pointer rounded-xl border p-4 transition-all hover:shadow-md
                     ${selectedId === template.id 
                        ? 'ring-2 ring-offset-1 ring-blue-600 border-transparent shadow-sm' 
                        : 'border-gray-200 hover:border-blue-300 bg-white'
                     }
                  `}
               >
                  <div className="flex items-center justify-between mb-3">
                     <div className={`p-2 rounded-lg ${selectedId === template.id ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'}`}>
                        <template.icon className="w-5 h-5" />
                     </div>
                     {selectedId === template.id && (
                        <div className="bg-blue-600 text-white rounded-full p-0.5">
                           <Check className="w-3 h-3" />
                        </div>
                     )}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{template.name}</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                     {template.description}
                  </p>
               </div>
            ))}
         </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-6">
         <Button 
            variant="outline"
            className="text-gray-700 border-gray-300 hover:bg-gray-50 px-6 h-10"
            onClick={onBack}
         >
            Back
         </Button>
         <Button 
            onClick={onNext} 
            className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-6 h-10 shadow-sm"
         >
            Apply & Continue
         </Button>
      </div>
    </div>
  );
}