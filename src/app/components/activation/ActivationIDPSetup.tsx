import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Progress } from '../ui/progress';
import { 
  Cloud, 
  Chrome, 
  Disc, 
  Copy, 
  Globe,
  Loader2,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Info
} from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface ActivationIDPSetupProps {
  onComplete: () => void;
  onSkip: () => void;
  onAdvancedSettings?: () => void;
  tenantName: string;
}

const IDP_OPTIONS = [
  { id: 'entra', name: 'Microsoft Entra ID', icon: Cloud, color: 'text-[#0078D4]' },
  { id: 'google', name: 'Google Workspace', icon: Chrome, color: 'text-[#DB4437]' },
  { id: 'okta', name: 'Okta', icon: Disc, color: 'text-[#00297A]' },
  { id: 'other', name: 'Other / Custom', icon: Globe, color: 'text-gray-600' },
];

const PROVISIONING_STEPS = [
  "Preparing tenant resources...",
  "Applying configuration...",
  "Finalizing setup..."
];

export function ActivationIDPSetup({ onComplete, onSkip, onAdvancedSettings, tenantName }: ActivationIDPSetupProps) {
  const [selectedIDP, setSelectedIDP] = useState('entra');
  const [protocol, setProtocol] = useState('SAML');
  const [metadataMethod, setMetadataMethod] = useState('url');
  
  // Form State
  const [entityIssuer, setEntityIssuer] = useState(`urn:entity-user:${tenantName.toLowerCase().replace(/\s+/g, '-')}.portal.bnn.com`);
  const [metadataUrl, setMetadataUrl] = useState('');
  
  // Provisioning State
  const [isProvisioning, setIsProvisioning] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLongWait, setIsLongWait] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  
  const redirectUrl = `https://${tenantName.toLowerCase().replace(/\s+/g, '-')}.portal.bnn.com/v2/callback`;

  // Provisioning Effect
  useEffect(() => {
    // Start provisioning simulation on mount
    const startTime = Date.now();
    const DURATION = 6000; // 6 seconds for demo (set to > 60000 to test long wait)
    const LONG_WAIT_THRESHOLD = 60000; // 1 minute

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      // Update Step Text every 2 seconds
      const currentStep = Math.floor((elapsed / 2000) % PROVISIONING_STEPS.length);
      setStepIndex(currentStep);

      if (elapsed > LONG_WAIT_THRESHOLD) {
        setIsLongWait(true);
        // Stall at 90%
        setProgress(90);
      } else {
        // Calculate progress based on duration
        const newProgress = Math.min((elapsed / DURATION) * 100, 100);
        setProgress(newProgress);

        if (elapsed >= DURATION) {
          clearInterval(timer);
          setIsProvisioning(false);
          setProgress(100);
          toast.success("Tenant provisioning complete");
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Copied to clipboard");
      }).catch(() => {
        // Fallback or error handling
        toast.success("Copied to clipboard"); // Simulate success in restricted environment
      });
    } catch (e) {
      toast.success("Copied to clipboard"); // Simulate success in restricted environment
    }
  };

  const handleSave = () => {
    // In a real app, this would save the configuration
    toast.success("Identity Provider configured successfully");
    onComplete();
  };

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-2xl w-full">
        
        {/* Provisioning Status Card */}
        {isProvisioning && (
           <div className={`mb-6 rounded-xl border p-4 transition-all duration-300 ${isLongWait ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-100'}`}>
              <div className="flex items-start gap-3">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isLongWait ? 'bg-amber-100' : 'bg-blue-100'}`}>
                    {isLongWait ? (
                        <Mail className="w-4 h-4 text-amber-600" />
                    ) : (
                        <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    )}
                 </div>
                 <div className="flex-1 space-y-3">
                    <div>
                        <h4 className={`text-sm font-bold ${isLongWait ? 'text-amber-900' : 'text-blue-900'}`}>
                            {isLongWait ? 'Provisioning is taking longer than expected' : 'Provisioning in progress'}
                        </h4>
                        <p className={`text-xs mt-1 ${isLongWait ? 'text-amber-700' : 'text-blue-700'}`}>
                            {isLongWait 
                                ? "Provisioning usually completes in under a minute, but it’s taking a bit longer right now." 
                                : "This process is expected to take less than a minute."}
                        </p>
                    </div>
                    
                    <div className="space-y-1.5">
                        <Progress value={progress} className={`h-2 ${isLongWait ? 'bg-amber-200' : 'bg-blue-200'}`} />
                        <div className="flex justify-between items-center text-[10px] font-medium uppercase tracking-wider text-gray-500">
                            <span>{isLongWait ? 'Finalizing...' : PROVISIONING_STEPS[stepIndex]}</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {isLongWait && (
                        <div className="flex items-start gap-2 bg-white/50 rounded p-2 text-xs text-amber-800">
                             <Info className="w-4 h-4 text-amber-600 shrink-0" />
                             <p>We’ll send a confirmation email once provisioning is complete. You may safely leave this page.</p>
                        </div>
                    )}
                 </div>
              </div>
           </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-gray-900 font-bold text-xl mb-1">Configure Identity Provider</h2>
            <p className="text-gray-500 text-sm">
              Select your provider and configure authentication settings.
            </p>
          </div>

          {/* IDP Selector - Compact */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {IDP_OPTIONS.map((idp) => {
              const Icon = idp.icon;
              const isSelected = selectedIDP === idp.id;
              
              return (
                idp.id !== 'other' && (
                <button
                  key={idp.id}
                  onClick={() => setSelectedIDP(idp.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all
                    ${isSelected 
                      ? 'border-gray-900 bg-gray-50 text-gray-900 shadow-sm' 
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? idp.color : idp.color + ' opacity-70'}`} />
                  {idp.name}
                </button>
                )
              );
            })}
          </div>

          {/* Configuration Form - Simplified */}
          <div className="space-y-5">
            
            <div className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="protocol" className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
                    Protocol
                  </Label>
                  <Select value={protocol} onValueChange={setProtocol}>
                    <SelectTrigger id="protocol" className="bg-white h-9 border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAML">SAML</SelectItem>
                      <SelectItem value="OIDC">OIDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="metadata-method" className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
                    Configuration Method
                  </Label>
                  <Select value={metadataMethod} onValueChange={setMetadataMethod}>
                    <SelectTrigger id="metadata-method" className="bg-white h-9 border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="url">Metadata URL</SelectItem>
                      <SelectItem value="manual">Manual Entry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="redirect-url" className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
                Redirect URL
                </Label>
                <div className="relative">
                <Input 
                    id="redirect-url" 
                    value={redirectUrl} 
                    readOnly 
                    className="bg-gray-50 pr-10 font-mono text-xs h-9 text-gray-600 border-gray-200" 
                />
                <button 
                    onClick={() => handleCopy(redirectUrl)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0066CC] transition-colors"
                >
                    <Copy className="w-3.5 h-3.5" />
                </button>
                </div>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="entity-issuer" className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
                Entity Issuer <span className="text-gray-400 font-normal normal-case ml-1">(Optional)</span>
                </Label>
                <div className="relative">
                <Input 
                    id="entity-issuer" 
                    value={entityIssuer}
                    onChange={(e) => setEntityIssuer(e.target.value)}
                    className="bg-gray-50 pr-10 font-mono text-xs h-9 text-gray-600 border-gray-200"
                />
                <button 
                    onClick={() => handleCopy(entityIssuer)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0066CC] transition-colors"
                >
                    <Copy className="w-3.5 h-3.5" />
                </button>
                </div>
            </div>

            {metadataMethod === 'url' ? (
                <div className="space-y-2 p-4 bg-blue-50/50 rounded-lg border border-blue-100 ring-1 ring-blue-500/20">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="metadata-url" className="text-xs font-bold uppercase text-blue-900 tracking-wide flex items-center gap-2">
                        Cloud IDP Metadata URL
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">REQUIRED</span>
                    </Label>
                    <p className="text-[11px] text-blue-700">
                        Copy the App Federation Metadata URL from your Identity Provider and paste it below.
                    </p>
                  </div>
                  <Input 
                      id="metadata-url" 
                      placeholder="https://login.microsoftonline.com/..."
                      value={metadataUrl}
                      onChange={(e) => setMetadataUrl(e.target.value)}
                      className="h-10 border-blue-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 bg-white shadow-sm placeholder:text-gray-400"
                  />
                </div>
            ) : (
                <div className="p-6 bg-gray-50 border border-gray-100 border-dashed rounded-lg text-center text-sm text-gray-500">
                    Manual configuration fields would appear here
                </div>
            )}

          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col items-end gap-2">
                <Button
                    onClick={handleSave}
                    className="bg-[#0066CC] hover:bg-[#0052A3] h-9 px-6 text-sm shadow-sm"
                    disabled={(metadataMethod === 'url' && !metadataUrl) || isProvisioning}
                >
                    Save Configuration
                </Button>
                
                {isProvisioning && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Info className="w-3.5 h-3.5" />
                        <span>Save Configuration is disabled until provisioning is complete.</span>
                    </div>
                )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}