import React, { useState } from "react";
import { Info, ChevronRight, HelpCircle, Shield, CheckCircle2, XCircle, Globe, AlertTriangle, Lock, Server, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface PolicyTemplatesProps {
  onSelectTemplate: (template: any) => void;
  onCustomPolicy: () => void;
  onBack?: () => void;
  onContinue?: () => void;
  onCancel?: () => void;
  title?: string;
  headerContent?: React.ReactNode;
}

export function PolicyTemplates({
  onContinue,
  onCancel,
  title = "Internet Access & Threat Protection",
  headerContent
}: PolicyTemplatesProps) {
  // Default configuration per "Final Recommended Default Setup"
  const [config, setConfig] = useState({
    categoryBlocking: true,
    appBlocking: true,
    appBypass: false,
    domainBlocking: true,
    domainBypass: false,
    geoBlocking: true,
    riskUrlBlocking: true,
    urlAllowlist: false,
  });

  // State for dynamic lists
  const [blockedCategories, setBlockedCategories] = useState([
    "Adult / Pornography",
    "Gambling & Illegal Downloads (P2P)",
    "Malicious Sites & Phishing",
    "Hacking Tools & Anonymizers (VPNs)"
  ]);

  const [blockedApps, setBlockedApps] = useState([
    "Torrents & File Sharing (uTorrent, etc.)",
    "Proxy / VPN Applications",
    "Hacking Tools",
    "Unauthorized Remote Access"
  ]);

  const [allowedUrls, setAllowedUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");

  const [bypassedApps, setBypassedApps] = useState<string[]>([]);
  const [blockedDomains, setBlockedDomains] = useState<string[]>([]);
  const [bypassedDomains, setBypassedDomains] = useState<string[]>([]);
  const [blockedCountries, setBlockedCountries] = useState<string[]>([
    'Russia', 'China', 'Iran', 'North Korea', 'Brazil (Fraud Risk)', 'Eastern Europe (Cybercrime)'
  ]);
  const [riskActions, setRiskActions] = useState({
    high: 'Block',
    medium: 'Warn',
    low: 'Allow'
  });



  const availableCategories = [
    "Social Media",
    "Streaming Media",
    "Online Shopping",
    "Games",
    "News & Media"
  ];

  const availableApps = [
    "Gaming Launchers (Steam, Epic)",
    "Crypto Mining",
    "Remote Desktop (TeamViewer)",
    "Social Apps (TikTok, Snapchat)"
  ];

  const addCategory = (category: string) => {
    if (!blockedCategories.includes(category)) {
      setBlockedCategories([...blockedCategories, category]);
    }
  };
  
  const removeCategory = (category: string) => {
    setBlockedCategories(blockedCategories.filter(c => c !== category));
  };

  const addApp = (app: string) => {
     if (!blockedApps.includes(app)) {
      setBlockedApps([...blockedApps, app]);
    }
  };

  const removeApp = (app: string) => {
    setBlockedApps(blockedApps.filter(a => a !== app));
  };

  const addUrl = () => {
    if (newUrl.trim() && !allowedUrls.includes(newUrl.trim())) {
      setAllowedUrls([...allowedUrls, newUrl.trim()]);
      setNewUrl("");
    }
  };

  const removeUrl = (url: string) => {
    setAllowedUrls(allowedUrls.filter(u => u !== url));
  };

  const toggleConfig = (key: keyof typeof config) => {
    setConfig((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const DynamicList = ({ 
    items, 
    setItems,
    placeholder 
  }: { 
    items: string[];
    setItems: (items: string[]) => void;
    placeholder: string;
  }) => {
    const [val, setVal] = useState("");
    const add = () => {
      if (val.trim() && !items.includes(val.trim())) {
        setItems([...items, val.trim()]);
        setVal("");
      }
    };
    const remove = (item: string) => setItems(items.filter(i => i !== item));

    return (
      <div className="space-y-3">
        {items.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {items.map((item, idx) => (
              <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 pr-1">
                {item}
                <button onClick={() => remove(item)} className="ml-1.5 text-gray-400 hover:text-gray-700 focus:outline-none">
                  <XCircle className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <Input 
            placeholder={placeholder} 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="h-8 text-xs"
            onKeyDown={(e) => e.key === 'Enter' && add()}
          />
          <Button size="sm" variant="outline" onClick={add} className="h-8 w-8 p-0 shrink-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  const RiskActionSelector = ({ 
    level, 
    action, 
    onChange 
  }: { 
    level: string; 
    action: string; 
    onChange: (a: string) => void;
  }) => {
    const config = {
      Block: { icon: XCircle, color: "text-red-600" },
      Warn: { icon: AlertTriangle, color: "text-yellow-600" },
      Allow: { icon: CheckCircle2, color: "text-green-600" },
    }[action] || { icon: HelpCircle, color: "text-gray-500" };
    
    const Icon = config.icon;
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="h-8 px-3 bg-white hover:bg-gray-50 text-gray-900 border-gray-200 shadow-sm"
          >
            <Icon className={`w-3.5 h-3.5 mr-2 ${config.color}`} />
            <span className="font-medium mr-1">{action}</span>
            <span className="text-gray-500 font-normal">{level}</span>
            <ChevronRight className="w-3.5 h-3.5 ml-2 rotate-90 opacity-40" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => onChange('Block')}>
            <XCircle className="w-3 h-3 mr-2 text-red-600" /> Block
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onChange('Warn')}>
            <AlertTriangle className="w-3 h-3 mr-2 text-yellow-600" /> Warn
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onChange('Allow')}>
            <CheckCircle2 className="w-3 h-3 mr-2 text-green-600" /> Allow
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const PolicyRow = ({ 
    title, 
    checked, 
    onChange, 
    icon: Icon,
    children 
  }: { 
    title: string; 
    checked: boolean; 
    onChange: () => void;
    icon?: any;
    children: React.ReactNode;
  }) => (
    <div className={`border rounded-lg overflow-hidden transition-all ${checked ? 'border-blue-200 bg-blue-50/10' : 'border-gray-200 bg-gray-50/50'}`}>
      <div className="flex items-start justify-between p-4">
        <div className="flex gap-3 w-full">
          {Icon && (
            <div className={`mt-0.5 p-1.5 rounded-md flex-shrink-0 h-fit ${checked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
              <Icon className="h-4 w-4" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-sm font-semibold ${checked ? 'text-blue-900' : 'text-gray-700'}`}>{title}</span>
              {checked && <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-[10px] h-5 px-1.5 hover:bg-blue-100">Active</Badge>}
            </div>
            <div className="text-sm text-gray-600 space-y-3 mt-2">
              {children}
            </div>
          </div>
        </div>
        <div className="pl-4">
          <Switch checked={checked} onCheckedChange={onChange} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="space-y-4 shrink-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {headerContent}
        </div>
        
        {/* Stepper */}
        <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
          <span className="flex items-center font-medium text-gray-900">
            <span className="flex items-center justify-center w-5 h-5 mr-1 text-xs text-white bg-gray-900 rounded-full">1</span>
            Security Profile
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 mr-1 text-xs border border-gray-300 rounded-full">2</span>
            Exceptions
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 mr-1 text-xs border border-gray-300 rounded-full">3</span>
            Review
          </span>
        </div>
      </div>

      {/* Content - Scrollable */}
      <ScrollArea className="flex-1 pr-4 -mr-4">
        <div className="space-y-6 pb-6">
          <div className="grid gap-4">
            {/* 1. Category Blocking */}
            <PolicyRow
              title="Category Blocking"
              checked={config.categoryBlocking}
              onChange={() => toggleConfig("categoryBlocking")}
              icon={Shield}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {blockedCategories.map((cat, idx) => (
                     <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 pr-1 group">
                        {cat}
                        <button 
                          onClick={() => removeCategory(cat)}
                          className="ml-1.5 text-gray-400 hover:text-gray-700 focus:outline-none"
                        >
                          <XCircle className="h-3 w-3" />
                        </button>
                     </Badge>
                  ))}
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="inline-flex items-center justify-center h-6 px-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                        <Plus className="w-3 h-3 mr-1" />
                        Add Category
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {availableCategories.filter(c => !blockedCategories.includes(c)).map(category => (
                        <DropdownMenuItem key={category} onClick={() => addCategory(category)}>
                          {category}
                        </DropdownMenuItem>
                      ))}
                      {availableCategories.filter(c => !blockedCategories.includes(c)).length === 0 && (
                        <div className="p-2 text-xs text-gray-500 text-center">No more categories</div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <p className="text-xs text-gray-400 italic">
                  Tip: Block "Social Media" for marketing roles, block for others.
                </p>
              </div>
            </PolicyRow>

            {/* 2. Application Blocking */}
            <PolicyRow
              title="Application Blocking"
              checked={config.appBlocking}
              onChange={() => toggleConfig("appBlocking")}
              icon={Lock}
            >
               <div className="space-y-3">
                 <div className="flex flex-wrap gap-2">
                   {blockedApps.map((app, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 pr-1">
                        {app}
                        <button 
                          onClick={() => removeApp(app)}
                          className="ml-1.5 text-gray-400 hover:text-gray-700 focus:outline-none"
                        >
                          <XCircle className="h-3 w-3" />
                        </button>
                      </Badge>
                   ))}

                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="inline-flex items-center justify-center h-6 px-2 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                        <Plus className="w-3 h-3 mr-1" />
                        Add Application
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {availableApps.filter(a => !blockedApps.includes(a)).map(app => (
                        <DropdownMenuItem key={app} onClick={() => addApp(app)}>
                          {app}
                        </DropdownMenuItem>
                      ))}
                       {availableApps.filter(a => !blockedApps.includes(a)).length === 0 && (
                        <div className="p-2 text-xs text-gray-500 text-center">No more apps</div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                 </div>
               </div>
            </PolicyRow>

            {/* 3. Application Bypass */}
            <PolicyRow
              title="Application Bypass"
              checked={config.appBypass}
              onChange={() => toggleConfig("appBypass")}
              icon={Server}
            >
              <div className="space-y-3">
                <p className="text-xs text-gray-600">
                  Use only when a trusted business app breaks due to security inspection (e.g., older dental x-ray apps, local EMR tunnels). 
                  <span className="font-medium block mt-1">Start with this DISABLED and add only if needed.</span>
                </p>
                <DynamicList 
                  items={bypassedApps} 
                  setItems={setBypassedApps} 
                  placeholder="Enter application name" 
                />
              </div>
            </PolicyRow>

            {/* 4. Domain Blocking */}
            <PolicyRow
              title="Domain Blocking"
              checked={config.domainBlocking}
              onChange={() => toggleConfig("domainBlocking")}
              icon={Globe}
            >
              <div className="space-y-3">
                <p className="text-xs text-gray-600">
                  Block known unsafe domains and high-risk TLDs (e.g., .xyz, .top, .click) along with malware-infected and scam domains.
                </p>
                <DynamicList 
                  items={blockedDomains} 
                  setItems={setBlockedDomains} 
                  placeholder="Enter domain to block" 
                />
              </div>
            </PolicyRow>

            {/* 5. Domain Bypass */}
            <PolicyRow
              title="Domain Bypass"
              checked={config.domainBypass}
              onChange={() => toggleConfig("domainBypass")}
              icon={Server}
            >
              <div className="space-y-3">
                <p className="text-xs text-gray-600">
                  Keep OFF unless required for specific local apps or obscure EMR backends.
                </p>
                <DynamicList 
                  items={bypassedDomains} 
                  setItems={setBypassedDomains} 
                  placeholder="Enter domain to bypass" 
                />
              </div>
            </PolicyRow>

            {/* 6. Geo-Blocking */}
            <PolicyRow
              title="Geo-Blocking"
              checked={config.geoBlocking}
              onChange={() => toggleConfig("geoBlocking")}
              icon={Globe}
            >
              <div className="space-y-3">
                <div className="text-xs text-gray-600">
                  <span className="font-semibold text-gray-700">Block High-Risk Regions:</span>
                </div>
                <DynamicList 
                  items={blockedCountries} 
                  setItems={setBlockedCountries} 
                  placeholder="Enter country or region" 
                />
              </div>
            </PolicyRow>

            {/* 7. Risk-Based URL Blocking */}
            <PolicyRow
              title="Risk-Based URL Blocking (AI/NLP)"
              checked={config.riskUrlBlocking}
              onChange={() => toggleConfig("riskUrlBlocking")}
              icon={AlertTriangle}
            >
               <div className="text-xs text-gray-600 space-y-2">
                 <p>AI-based classification to prevent phishing and typo-squatting.</p>
                 <div className="flex flex-wrap gap-4">
                   <RiskActionSelector 
                     level="High-Risk" 
                     action={riskActions.high} 
                     onChange={(a) => setRiskActions(prev => ({...prev, high: a}))} 
                   />
                   <RiskActionSelector 
                     level="Medium-Risk" 
                     action={riskActions.medium} 
                     onChange={(a) => setRiskActions(prev => ({...prev, medium: a}))} 
                   />
                   <RiskActionSelector 
                     level="Low-Risk" 
                     action={riskActions.low} 
                     onChange={(a) => setRiskActions(prev => ({...prev, low: a}))} 
                   />
                 </div>
                 <p className="text-[10px] text-gray-400">Note: Not supported on Linux/Chromebooks (safe to leave ON).</p>
               </div>
            </PolicyRow>

            {/* 8. URL Allowlist */}
            <PolicyRow
              title="URL Allowlist"
              checked={config.urlAllowlist}
              onChange={() => toggleConfig("urlAllowlist")}
              icon={CheckCircle2}
            >
              <div className="space-y-3">
                <p className="text-xs text-gray-600">
                  Add only business-critical domains to ensure inspection never interferes with operations.
                </p>
                
                {allowedUrls.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {allowedUrls.map((url, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 pr-1">
                        {url}
                        <button 
                          onClick={() => removeUrl(url)}
                          className="ml-1.5 text-gray-400 hover:text-gray-700 focus:outline-none"
                        >
                          <XCircle className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter domain (e.g. example.com)" 
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="h-8 text-xs"
                    onKeyDown={(e) => e.key === 'Enter' && addUrl()}
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={addUrl}
                    className="h-8 w-8 p-0 shrink-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </PolicyRow>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 shrink-0">
        <div className="text-xs text-gray-500">
          * Default profile based on small business best practices
        </div>
        <div className="flex gap-3">
          {onCancel && (
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          {onContinue && (
            <Button onClick={onContinue} className="bg-[#0066CC] hover:bg-[#0052A3]">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
