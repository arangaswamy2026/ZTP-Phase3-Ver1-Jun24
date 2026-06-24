import React from 'react';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { 
  Shield, 
  Globe, 
  Lock, 
  AlertTriangle, 
  Plus, 
  Info,
  Monitor,
  Ban,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

export function SIAConfigurationPreview() {
  const threatProtections = [
    "Bots / Cryptomining",
    "Dangerous Configuration / History",
    "Dangerous 3rd Party Infrastructure",
    "Dangerous Nameserver",
    "Malicious SSL Cert",
    "Malware & Ransomware",
    "Malware C2",
    "Phishing",
    "Risky DNS Transactions",
    "Spam / VoIP fraud / Spyware",
    "Other Known Bad (Community Intelligence)",
    "New Domains"
  ];

  return (
    <div className="space-y-6 p-1">
      <div className="space-y-8">
        {/* Threat Protection Section */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-900">Threat Protection</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-none text-[10px] px-2 h-5">Enabled</Badge>
          </div>
          
          <p className="text-sm text-gray-500">
            Threats on this page are blocked by default and shown for informational purposes only, highlighting what ZTP protects on your device.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-100">
              {threatProtections.map((threat) => (
                <div key={threat} className="flex items-center p-3 hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700 font-medium">{threat}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Protection against {threat.toLowerCase()}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filtering & Exceptions Section */}
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-900">Filtering & Exceptions</h2>

          {/* Category Blocking */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-600">
                <Shield className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm">Category Blocking</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none text-[10px] px-2 h-5">Active</Badge>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <div className="flex flex-wrap gap-2 mb-2">
              {['Adult / Pornography', 'Gambling & Illegal Downloads (P2P)', 'Malicious Sites & Phishing', 'Hacking Tools & Anonymizers (VPNs)'].map((cat) => (
                <div key={cat} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs text-gray-700">
                  {cat}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 italic">Tip: Block "Social Media" for marketing roles, block for others.</p>
          </div>
        </div>

        {/* Application Blocking */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-600">
                <Lock className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm">Application Blocking</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none text-[10px] px-2 h-5">Active</Badge>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <div className="flex flex-wrap gap-2">
              {['Torrents & File Sharing (uTorrent, etc.)', 'Proxy / VPN Applications', 'Hacking Tools', 'Unauthorized Remote Access'].map((app) => (
                <div key={app} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs text-gray-700">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Bypass */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                <Monitor className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-700 text-sm">Application Bypass</h3>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <p className="text-xs text-gray-500 mb-3">Use only when a trusted business app breaks due to security inspection.</p>
            <p className="text-xs text-gray-400 italic">No application bypass rules configured.</p>
          </div>
        </div>

        {/* Domain Blocking */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-600">
                <Globe className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm">Domain Blocking</h3>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <p className="text-xs text-gray-500 mb-3">Block known unsafe domains and high-risk TLDs (e.g., .xyz, .top).</p>
            <p className="text-xs text-gray-400 italic">No additional domain block rules configured.</p>
          </div>
        </div>

        {/* Geo Blocking */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-600">
                <Globe className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm">Geo-Blocking</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none text-[10px] px-2 h-5">Active</Badge>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <div className="flex items-center gap-2 mb-2 text-xs text-gray-700 font-medium">
              Block High-Risk Regions:
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {['Russia', 'China', 'Iran', 'North Korea', 'Brazil (Fraud Risk)', 'Eastern Europe (Cybercrime)'].map((region) => (
                <div key={region} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 px-2 py-1 rounded text-xs text-gray-700">
                  {region}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Based URL Blocking */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-600">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm">Risk-Based URL Blocking (AI/NLP)</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none text-[10px] px-2 h-5">Active</Badge>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <p className="text-xs text-gray-500 mb-3">AI-based classification to prevent phishing and typo-squatting.</p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm">
                <Ban className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-900">Block</span>
                <span className="text-xs text-gray-500 border-l border-gray-200 pl-2 ml-1">High-Risk</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-900">Warn</span>
                <span className="text-xs text-gray-500 border-l border-gray-200 pl-2 ml-1">Medium-Risk</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-900">Allow</span>
                <span className="text-xs text-gray-500 border-l border-gray-200 pl-2 ml-1">Low-Risk</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2">Note: Not supported on Linux/Chromebooks (safe to leave ON).</p>
          </div>
        </div>

        {/* URL Allowlist */}
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-700 text-sm">URL Allowlist</h3>
              </div>
            </div>
          </div>
          
          <div className="pl-11">
            <p className="text-xs text-gray-500 mb-3">Add only business-critical domains to ensure inspection never interferes with operations.</p>
            <p className="text-xs text-gray-400 italic">No URL allowlist rules configured.</p>
          </div>
        </div>
        </section>

        <div className="text-xs text-gray-500 pt-2">
          * Default profile based on small business best practices
        </div>
      </div>
    </div>
  );
}