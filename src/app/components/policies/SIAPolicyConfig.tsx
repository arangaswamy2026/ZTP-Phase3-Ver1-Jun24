import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Card, CardContent, CardHeader } from '../ui/card';
import { 
  Shield, 
  Lock, 
  Globe, 
  AlertTriangle, 
  X, 
  Plus, 
  Info,
  CheckCircle2,
  AlertOctagon,
  Users,
  Search,
  Server,
  Activity,
  Zap,
  Layout
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// Mock Data for Threat Protection
const THREAT_CATEGORIES = [
  "Bots / Cryptomining",
  "Dangerous Configuration / History",
  "Dangerous 3rd Party Infrastructure",
  "Dangerous Nameserver",
  "Malicious SSL Cert",
  "Malware & Ransomware",
  "Malware C2",
  "Phishing",
  "Risky DNS Transactions",
  "Spam / Ad Fraud / Spyware",
  "Other Known Bad (Community Intelligence)",
  "New Domains"
];

interface SIAPolicyConfigProps {
  onCancel: () => void;
  onSave: (policy: any) => void;
}

export function SIAPolicyConfig({ onCancel, onSave }: SIAPolicyConfigProps) {
  // --- Form State ---
  const [activeTab, setActiveTab] = useState("controls");
  
  // General Info
  const [policyName, setPolicyName] = useState("");
  const [description, setDescription] = useState("");
  const [assignedGroups, setAssignedGroups] = useState<string[]>([]);

  // Toggles for Sections
  const [categoryBlockingEnabled, setCategoryBlockingEnabled] = useState(true);
  const [appBlockingEnabled, setAppBlockingEnabled] = useState(true);
  const [appBypassEnabled, setAppBypassEnabled] = useState(false);
  const [domainBlockingEnabled, setDomainBlockingEnabled] = useState(true);
  const [domainBypassEnabled, setDomainBypassEnabled] = useState(false);
  const [geoBlockingEnabled, setGeoBlockingEnabled] = useState(true);
  const [riskBlockingEnabled, setRiskBlockingEnabled] = useState(true);
  const [urlAllowlistEnabled, setUrlAllowlistEnabled] = useState(false);

  // Lists/Tags
  const [blockedCategories, setBlockedCategories] = useState(["Adult / Pornography", "Gambling & Illegal Downloads (P2P)", "Malicious Sites & Phishing"]);
  const [blockedApps, setBlockedApps] = useState(["Torrents & File Sharing", "Proxy / VPN Applications"]);
  const [blockedCountries, setBlockedCountries] = useState(["Russia", "China", "Iran", "North Korea"]);
  const [bypassApps, setBypassApps] = useState<string[]>([]);
  const [blockedDomains, setBlockedDomains] = useState<string[]>([]);
  const [bypassDomains, setBypassDomains] = useState<string[]>([]);
  const [allowedUrls, setAllowedUrls] = useState<string[]>([]);

  // Threat Protection
  const [threats, setThreats] = useState<Record<string, boolean>>(
    THREAT_CATEGORIES.reduce((acc, threat) => ({ ...acc, [threat]: true }), {})
  );

  // Block Page
  const [blockPageMessage, setBlockPageMessage] = useState("Please contact your administrator if you have any questions.");

  // --- Handlers ---
  const handleAddTag = (list: string[], setList: (l: string[]) => void, item: string) => {
    if (item && !list.includes(item)) {
      setList([...list, item]);
    }
  };

  const handleRemoveTag = (list: string[], setList: (l: string[]) => void, item: string) => {
    setList(list.filter(i => i !== item));
  };

  const toggleThreat = (threat: string) => {
    setThreats(prev => ({ ...prev, [threat]: !prev[threat] }));
  };

  // --- Render Helpers ---

  const renderSectionHeader = (icon: React.ReactNode, title: string, isActive: boolean, onToggle: (val: boolean) => void) => (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
          {icon}
        </div>
        <div className="flex items-center gap-2">
           <h3 className="font-semibold text-gray-900">{title}</h3>
           {isActive && <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50 text-[10px] h-5">Active</Badge>}
        </div>
      </div>
      <Switch checked={isActive} onCheckedChange={onToggle} />
    </div>
  );

  const renderTagInput = (placeholder: string, list: string[], setList: (l: string[]) => void) => (
    <div className="space-y-3">
       <div className="flex flex-wrap gap-2 mb-2">
          {list.map((item) => (
            <Badge key={item} variant="secondary" className="gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700">
               {item}
               <X className="w-3 h-3 cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => handleRemoveTag(list, setList, item)} />
            </Badge>
          ))}
          {list.length === 0 && <span className="text-sm text-gray-400 italic">No items added</span>}
       </div>
       <div className="flex gap-2">
          <Input 
            placeholder={placeholder} 
            className="bg-gray-50 border-gray-200 h-9" 
            onKeyDown={(e) => {
               if (e.key === 'Enter') {
                  handleAddTag(list, setList, e.currentTarget.value);
                  e.currentTarget.value = '';
               }
            }}
          />
          <Button variant="outline" size="sm" className="h-9 w-9 p-0 shrink-0">
             <Plus className="w-4 h-4" />
          </Button>
       </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full bg-gray-50/50">
       
       {/* Scrollable Content */}
       <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-full mx-auto space-y-8 pb-10">
             
             {/* 1. General Information & Assignment */}
             <section className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                   <h2 className="text-lg font-bold text-gray-900">General Information</h2>
                </div>
                
                <Card className="border-gray-200 shadow-sm">
                   <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Policy Name</label>
                            <Input 
                               placeholder="e.g. Standard Internet Access" 
                               value={policyName} 
                               onChange={(e) => setPolicyName(e.target.value)} 
                            />
                         </div>
                         <div className="space-y-2">
                             <label className="text-sm font-medium text-gray-700">Description</label>
                             <Input 
                                placeholder="Optional description for admins" 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                             />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700">Assigned To</label>
                         <div className="p-3 border border-gray-200 rounded-md bg-white min-h-[42px] flex flex-wrap gap-2">
                            <Badge variant="default" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 gap-1">
                               <Users className="w-3 h-3" /> All Employees
                               <X className="w-3 h-3 cursor-pointer" />
                            </Badge>
                            <Badge variant="outline" className="text-gray-400 border-dashed border-gray-300 gap-1 hover:bg-gray-50 cursor-pointer">
                               <Plus className="w-3 h-3" /> Add Group
                            </Badge>
                         </div>
                         <p className="text-xs text-gray-500">Select users, groups, or network segments this policy applies to.</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                         <label className="text-sm font-medium text-gray-700">Block Page Message</label>
                         <Input 
                             value={blockPageMessage} 
                             onChange={(e) => setBlockPageMessage(e.target.value)} 
                         />
                         <p className="text-xs text-gray-500">This message appears when a user is blocked.</p>
                      </div>
                   </CardContent>
                </Card>
             </section>

             {/* 2. Security Controls */}
             <section className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                   <h2 className="text-lg font-bold text-gray-900">Security Controls</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                   {/* Category Blocking */}
                   <Card className={`border-l-4 transition-all ${categoryBlockingEnabled ? 'border-l-blue-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<Shield className="w-5 h-5" />, "Category Blocking", categoryBlockingEnabled, setCategoryBlockingEnabled)}
                         
                         {categoryBlockingEnabled && (
                            <div className="pl-[52px]">
                               <p className="text-sm text-gray-500 mb-4">Block access to specific web categories.</p>
                               {renderTagInput("Add category...", blockedCategories, setBlockedCategories)}
                               <div className="mt-2 text-xs text-gray-400 italic">Tip: Block "Social Media" for marketing roles, block for others.</div>
                            </div>
                         )}
                      </CardContent>
                   </Card>

                   {/* Application Blocking */}
                   <Card className={`border-l-4 transition-all ${appBlockingEnabled ? 'border-l-blue-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<Lock className="w-5 h-5" />, "Application Blocking", appBlockingEnabled, setAppBlockingEnabled)}
                         
                         {appBlockingEnabled && (
                            <div className="pl-[52px]">
                               <p className="text-sm text-gray-500 mb-4">Block network applications regardless of port.</p>
                               {renderTagInput("Add application...", blockedApps, setBlockedApps)}
                            </div>
                         )}
                      </CardContent>
                   </Card>

                   {/* Application Bypass */}
                   <Card className={`border-l-4 transition-all ${appBypassEnabled ? 'border-l-orange-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<Zap className="w-5 h-5" />, "Application Bypass", appBypassEnabled, setAppBypassEnabled)}
                         
                         {appBypassEnabled && (
                            <div className="pl-[52px]">
                               <p className="text-sm text-gray-500 mb-4">Bypass inspection for trusted apps that break with SSL inspection.</p>
                               {renderTagInput("Enter application name", bypassApps, setBypassApps)}
                            </div>
                         )}
                      </CardContent>
                   </Card>

                   {/* Domain Blocking */}
                   <Card className={`border-l-4 transition-all ${domainBlockingEnabled ? 'border-l-blue-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<Globe className="w-5 h-5" />, "Domain Blocking", domainBlockingEnabled, setDomainBlockingEnabled)}
                         
                         {domainBlockingEnabled && (
                            <div className="pl-[52px]">
                               <p className="text-sm text-gray-500 mb-4">Block known unsafe domains and high-risk TLDs.</p>
                               {renderTagInput("Enter domain to block", blockedDomains, setBlockedDomains)}
                            </div>
                         )}
                      </CardContent>
                   </Card>

                   {/* Geo Blocking */}
                   <Card className={`border-l-4 transition-all ${geoBlockingEnabled ? 'border-l-blue-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<Globe className="w-5 h-5" />, "Geo-Blocking", geoBlockingEnabled, setGeoBlockingEnabled)}
                         
                         {geoBlockingEnabled && (
                            <div className="pl-[52px]">
                               <p className="text-sm text-gray-500 mb-4">Block traffic to high-risk regions.</p>
                               {renderTagInput("Enter country or region", blockedCountries, setBlockedCountries)}
                            </div>
                         )}
                      </CardContent>
                   </Card>
                   
                   {/* Risk Based URL Blocking */}
                   <Card className={`border-l-4 transition-all ${riskBlockingEnabled ? 'border-l-blue-500 shadow-sm' : 'border-l-gray-200 opacity-80'}`}>
                      <CardContent className="p-5">
                         {renderSectionHeader(<AlertTriangle className="w-5 h-5" />, "Risk-Based URL Blocking (AI/NLP)", riskBlockingEnabled, setRiskBlockingEnabled)}
                         
                         {riskBlockingEnabled && (
                            <div className="pl-[52px] space-y-4">
                               <p className="text-sm text-gray-500">AI-based classification to prevent phishing and typo-squatting.</p>
                               
                               <div className="flex gap-4">
                                  <div className="flex items-center gap-2 px-3 py-2 border border-red-200 bg-red-50 rounded-md text-sm text-red-800">
                                     <X className="w-4 h-4" /> 
                                     <span className="font-semibold">Block</span> High-Risk
                                  </div>
                                  <div className="flex items-center gap-2 px-3 py-2 border border-amber-200 bg-amber-50 rounded-md text-sm text-amber-800">
                                     <AlertTriangle className="w-4 h-4" /> 
                                     <span className="font-semibold">Warn</span> Medium-Risk
                                  </div>
                                  <div className="flex items-center gap-2 px-3 py-2 border border-green-200 bg-green-50 rounded-md text-sm text-green-800">
                                     <CheckCircle2 className="w-4 h-4" /> 
                                     <span className="font-semibold">Allow</span> Low-Risk
                                  </div>
                               </div>
                            </div>
                         )}
                      </CardContent>
                   </Card>

                </div>
             </section>

             {/* 3. Threat Protection */}
             <section className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                   <h2 className="text-lg font-bold text-gray-900">Threat Protection</h2>
                </div>

                <Card className="border-gray-200 shadow-sm">
                   <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-md border border-gray-100">
                         <Info className="w-4 h-4 text-blue-500" />
                         Threats on this page are blocked by default. Disable specific signatures only if necessary.
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1">
                         {THREAT_CATEGORIES.map((threat) => (
                            <div key={threat} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                               <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-700">{threat}</span>
                                  <Info className="w-3 h-3 text-gray-300 cursor-help" />
                               </div>
                               <div className="flex items-center gap-2">
                                  <span className={`text-xs font-medium ${threats[threat] ? 'text-green-600' : 'text-gray-400'}`}>
                                     {threats[threat] ? 'Enabled' : 'Disabled'}
                                  </span>
                                  <Switch 
                                     checked={threats[threat]} 
                                     onCheckedChange={() => toggleThreat(threat)}
                                     className="scale-90"
                                  />
                               </div>
                            </div>
                         ))}
                      </div>
                   </CardContent>
                </Card>
             </section>

          </div>
       </div>

       {/* Sticky Footer */}
       <div className="border-t border-gray-200 bg-white p-4 flex justify-end gap-3 shrink-0 z-10">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 min-w-[140px]" onClick={() => onSave({})}>
             Create Policy
          </Button>
       </div>
    </div>
  );
}