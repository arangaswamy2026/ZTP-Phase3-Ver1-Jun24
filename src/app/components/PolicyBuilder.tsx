import React from 'react';
import {
  ArrowLeft,
  Users,
  Shield,
  Globe,
  MapPin,
  Clock,
  AlertTriangle,
  X,
  Search,
  CheckCircle2,
  Server,
  Smartphone,
  Cloud,
  Lock,
  Network,
  ChevronDown,
  Info,
  Calendar as CalendarIcon,
  User
} from 'lucide-react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';

interface PolicyBuilderProps {
  policyId?: string;
  onBack: () => void;
  onSave: () => void;
}

export function PolicyBuilder({ policyId, onBack, onSave }: PolicyBuilderProps) {
  // --- State ---
  const [policyName, setPolicyName] = React.useState('');
  
  // Metadata
  const [isMetadataOpen, setIsMetadataOpen] = React.useState(false);
  const [metadata, setMetadata] = React.useState({
    owner: '',
    purpose: '',
    reviewDate: '',
    expiryDate: ''
  });

  // Section 1: Access Intent
  const [selectedGroups, setSelectedGroups] = React.useState<string[]>([]);
  const [selectedResources, setSelectedResources] = React.useState<string[]>([]);
  const [resourceType, setResourceType] = React.useState<'applications' | 'network' | 'services'>('applications');
  
  // Section 2: Trust Conditions
  const [managedDevice, setManagedDevice] = React.useState(false);
  const [complianceProfile, setComplianceProfile] = React.useState('any');
  const [trustLevel, setTrustLevel] = React.useState('any');
  const [riskBehavior, setRiskBehavior] = React.useState('warn');
  const [trustValidationFailed, setTrustValidationFailed] = React.useState(false);

  // Section 3: Enforcement & Scope
  const [enforcementLocations, setEnforcementLocations] = React.useState<string[]>(['ztc', 'cloud']);
  const [connectorBinding, setConnectorBinding] = React.useState('all');

  // Section 4: Security Controls (Legacy + Extras)
  const [conditions, setConditions] = React.useState<string[]>([]); // Location, Time, Risk
  const [location, setLocation] = React.useState('');
  const [timeWindow, setTimeWindow] = React.useState('');
  const [deviceHealth, setDeviceHealth] = React.useState({
    encrypted: false,
    noThreats: false,
    healthy: false,
  });


  // --- Mock Data ---
  const userGroups = ['All Users', 'Engineering', 'DevOps', 'Finance', 'HR', 'Marketing', 'Contractors', 'Executives'];
  const applications = ['Dev Portal', 'Staging API', 'Production Dashboard', 'ERP System', 'HR Portal', 'Salesforce', 'Jira'];
  const networkSegments = ['10.0.1.0/24 (Dev Network)', '10.0.2.0/24 (Staging)', '192.168.1.0/24 (Office)'];
  const services = ['SSH (Port 22)', 'HTTPS (Port 443)', 'RDP (Port 3389)', 'Database (Port 5432)'];
  
  const complianceProfiles = [
    { id: 'any', label: 'Any Compliance Profile' },
    { id: 'corp-standard', label: 'Corporate Standard (Win11/macOS 14+)' },
    { id: 'strict-financial', label: 'Strict Financial (Disk Encrypted + EDR)' },
    { id: 'byod-light', label: 'BYOD Light Check' },
  ];

  const availableConditions = [
    { id: 'location', label: 'Geo Location', icon: MapPin },
    { id: 'time', label: 'Time of Day', icon: Clock },
    { id: 'risk', label: 'User Risk Score', icon: AlertTriangle },
  ];

  // --- Handlers ---
  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
  };

  const toggleResource = (resource: string) => {
    setSelectedResources((prev) =>
      prev.includes(resource) ? prev.filter((r) => r !== resource) : [...prev, resource]
    );
  };

  const toggleEnforcement = (loc: string) => {
    setEnforcementLocations(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const toggleCondition = (conditionId: string) => {
    setConditions((prev) =>
      prev.includes(conditionId) ? prev.filter((c) => c !== conditionId) : [...prev, conditionId]
    );
  };

  const getResourceList = () => {
    switch (resourceType) {
      case 'applications': return applications;
      case 'network': return networkSegments;
      case 'services': return services;
      default: return [];
    }
  };

  // --- Derived State & Summary ---
  const getIntentSentence = () => {
    const who = selectedGroups.length > 0 
      ? (selectedGroups.includes('All Users') ? 'All Users' : (selectedGroups.length === 1 ? selectedGroups[0] : `${selectedGroups.length} Groups`))
      : '<Identity>';
    
    const what = selectedResources.length > 0 
      ? (selectedResources.length === 1 ? selectedResources[0] : `${selectedResources.length} Resources`) 
      : '<Resource>';

    return `${who} can access ${what}`;
  };

  const getTrustSummary = () => {
    const parts = [];
    if (managedDevice) parts.push('Managed Device');
    if (complianceProfile !== 'any') parts.push('Compliant OS');
    if (trustLevel !== 'any') parts.push(`${trustLevel} Trust`);
    return parts.length > 0 ? parts.join(' + ') : 'No trust requirements';
  };

  const getEnforcementSummary = () => {
     const locs = [];
     if (enforcementLocations.includes('ztc')) locs.push('ZTC');
     if (enforcementLocations.includes('cloud')) locs.push('Cloud');
     return locs.length > 0 ? locs.join(' & ') : 'None';
  };

  // --- Warnings Logic ---
  const warnings = React.useMemo(() => {
    const list = [];
    
    // 1. Identity = Any -> High Risk
    if (selectedGroups.includes('All Users')) {
        list.push({ type: 'high-risk', message: 'Allows "All Users" access (High Risk)' });
    }

    // 2. Enforcement = Cloud only for Private -> Potential Bypass
    // Assumption: All current resource types are "Private" for this context
    const isPrivateResource = resourceType !== 'services'; // Just an example, assuming services might be public or something, but let's stick to prompt
    // Better: If we have private apps selected.
    if (enforcementLocations.includes('cloud') && !enforcementLocations.includes('ztc') && selectedResources.length > 0) {
        list.push({ type: 'warning', message: 'Cloud-only enforcement for private resources may allow bypass' });
    }

    // 3. Trust = None -> Not Zero Trust
    if (!managedDevice && complianceProfile === 'any' && trustLevel === 'any') {
        list.push({ type: 'warning', message: 'No trust conditions set (Not Zero Trust compliant)' });
    }

    return list;
  }, [selectedGroups, enforcementLocations, managedDevice, complianceProfile, trustLevel, selectedResources, resourceType]);


  const handleSave = () => {
    // Validation
    // Removed blocking validation for Trust to allow "Not Zero Trust compliant" warning instead
    onSave();
  };

  return (
    <div className="flex gap-8 pb-24">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Policies
          </button>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{policyId ? 'Edit Policy' : 'Create Policy'}</h1>
            <div className="w-1/3">
                 <Input 
                    placeholder="Policy Name (e.g. Finance Access)" 
                    value={policyName} 
                    onChange={e => setPolicyName(e.target.value)}
                    className="bg-white"
                 />
            </div>
          </div>
          
          {/* Metadata Panel */}
          <Collapsible
            open={isMetadataOpen}
            onOpenChange={setIsMetadataOpen}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setIsMetadataOpen(!isMetadataOpen)}>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Info className="w-4 h-4 text-[#0066CC]" />
                    Policy Metadata <span className="text-gray-400 font-normal ml-2">{!isMetadataOpen ? '(Owner, Purpose, Expiry...)' : ''}</span>
                </div>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMetadataOpen ? 'rotate-180' : ''}`} />
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="owner">Policy Owner <span className="text-red-500">*</span></Label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                <Input 
                                    id="owner" 
                                    placeholder="email@company.com" 
                                    className="pl-9"
                                    value={metadata.owner}
                                    onChange={e => setMetadata({...metadata, owner: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="reviewDate">Next Review</Label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <Input 
                                        id="reviewDate" 
                                        type="date"
                                        className="pl-9"
                                        value={metadata.reviewDate}
                                        onChange={e => setMetadata({...metadata, reviewDate: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="expiryDate">Expiry Date</Label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <Input 
                                        id="expiryDate" 
                                        type="date"
                                        className="pl-9"
                                        value={metadata.expiryDate}
                                        onChange={e => setMetadata({...metadata, expiryDate: e.target.value})}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="purpose">Purpose / Justification</Label>
                        <Textarea 
                            id="purpose" 
                            placeholder="Why is this policy required?" 
                            className="h-[120px] resize-none"
                            value={metadata.purpose}
                            onChange={e => setMetadata({...metadata, purpose: e.target.value})}
                        />
                    </div>
                </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* SECTION 1: ACCESS INTENT */}
        <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
                    <Users className="h-5 w-5" />
                 </div>
                 <h2 className="font-bold text-gray-900">1. Access Intent</h2>
              </div>
              <div className="text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                 {getIntentSentence()}
              </div>
           </div>
           
           <div className="p-6 space-y-8">
              {/* Identity */}
              <div className="space-y-3">
                 <Label className="text-base">Identity (Who)</Label>
                 <div className="flex flex-wrap gap-2">
                    {userGroups.map((group) => (
                      <button
                        key={group}
                        onClick={() => toggleGroup(group)}
                        className={`px-3 py-1.5 text-sm rounded-md border transition-all ${
                          selectedGroups.includes(group)
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                        }`}
                      >
                        {group}
                        {selectedGroups.includes(group) && <CheckCircle2 className="inline-block ml-1.5 h-3.5 w-3.5" />}
                      </button>
                    ))}
                 </div>
              </div>
              
              <Separator />

              {/* Resource */}
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                     <Label className="text-base">Resource (What)</Label>
                     <Tabs value={resourceType} onValueChange={(v) => setResourceType(v as any)} className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-3 h-9">
                          <TabsTrigger value="applications">Apps</TabsTrigger>
                          <TabsTrigger value="network">Network</TabsTrigger>
                          <TabsTrigger value="services">Services</TabsTrigger>
                        </TabsList>
                      </Tabs>
                 </div>
                 
                 <div className="border border-gray-200 rounded-lg max-h-48 overflow-y-auto p-2 bg-gray-50/50">
                    {getResourceList().map((resource) => (
                      <div
                        key={resource}
                        className={`flex items-center space-x-3 p-2.5 rounded-md cursor-pointer transition-colors ${
                            selectedResources.includes(resource) ? 'bg-blue-50 border border-blue-100' : 'hover:bg-white'
                        }`}
                        onClick={() => toggleResource(resource)}
                      >
                        <Checkbox checked={selectedResources.includes(resource)} />
                        <span className="text-sm font-medium text-gray-700">{resource}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* SECTION 2: TRUST CONDITIONS */}
        <section className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-colors ${trustValidationFailed ? 'border-amber-300 ring-2 ring-amber-100' : 'border-gray-200'}`}>
           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-lg text-green-700">
                    <Shield className="h-5 w-5" />
                 </div>
                 <h2 className="font-bold text-gray-900">2. Trust Conditions</h2>
              </div>
              {trustValidationFailed && (
                  <span className="text-sm text-amber-600 font-medium flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4" /> Recommendation
                  </span>
              )}
           </div>

           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Device Posture */}
               <div className="space-y-4">
                   <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Device Posture</h3>
                   
                   <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white">
                      <div className="flex flex-col">
                          <span className="font-medium text-gray-900">Managed Device</span>
                          <span className="text-xs text-gray-500">Require MDM enrollment</span>
                      </div>
                      <Switch checked={managedDevice} onCheckedChange={setManagedDevice} />
                   </div>

                   <div className="space-y-1.5">
                       <Label className="text-xs text-gray-500">OS / Compliance Profile</Label>
                       <Select value={complianceProfile} onValueChange={setComplianceProfile}>
                          <SelectTrigger>
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                             {complianceProfiles.map(p => (
                                 <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>
                             ))}
                          </SelectContent>
                       </Select>
                   </div>
               </div>

               {/* Trust Level & Risk */}
               <div className="space-y-6">
                   <div className="space-y-2">
                       <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Trust Level</h3>
                       <div className="grid grid-cols-3 gap-2">
                           {['Low', 'Medium', 'High'].map((level) => (
                               <button
                                  key={level}
                                  onClick={() => setTrustLevel(level)}
                                  className={`py-2 px-3 text-sm font-medium rounded-lg border text-center transition-all ${
                                      trustLevel === level 
                                      ? 'bg-green-600 text-white border-green-600' 
                                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                                  }`}
                               >
                                   {level}
                               </button>
                           ))}
                       </div>
                   </div>

                   <div className="space-y-2">
                       <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Risk Behavior</h3>
                       <Select value={riskBehavior} onValueChange={setRiskBehavior}>
                          <SelectTrigger className={riskBehavior === 'block' ? 'border-red-200 bg-red-50 text-red-700' : ''}>
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="block">Block Access</SelectItem>
                             <SelectItem value="warn">Warn User</SelectItem>
                             <SelectItem value="mfa">Step-up Auth (MFA)</SelectItem>
                             <SelectItem value="isolate">Isolate Session</SelectItem>
                          </SelectContent>
                       </Select>
                   </div>
               </div>
           </div>
        </section>

        {/* SECTION 3: ENFORCEMENT & SCOPE */}
        <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                 <div className="bg-purple-100 p-2 rounded-lg text-purple-700">
                    <Server className="h-5 w-5" />
                 </div>
                 <h2 className="font-bold text-gray-900">3. Enforcement & Scope</h2>
              </div>
           </div>

           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Enforcement Location</h3>
                  <div className="flex gap-4">
                      <div 
                        className={`flex-1 p-4 border rounded-xl cursor-pointer transition-all ${enforcementLocations.includes('ztc') ? 'bg-purple-50 border-purple-200 ring-1 ring-purple-200' : 'bg-white border-gray-200 hover:border-purple-200'}`}
                        onClick={() => toggleEnforcement('ztc')}
                      >
                         <div className="flex items-center gap-2 mb-2">
                             <Smartphone className={`h-5 w-5 ${enforcementLocations.includes('ztc') ? 'text-purple-700' : 'text-gray-400'}`} />
                             <span className={`font-medium ${enforcementLocations.includes('ztc') ? 'text-purple-900' : 'text-gray-900'}`}>ZTC Device</span>
                         </div>
                         <p className="text-xs text-gray-500">Enforce on the endpoint via ZTC agent.</p>
                      </div>

                      <div 
                        className={`flex-1 p-4 border rounded-xl cursor-pointer transition-all ${enforcementLocations.includes('cloud') ? 'bg-purple-50 border-purple-200 ring-1 ring-purple-200' : 'bg-white border-gray-200 hover:border-purple-200'}`}
                        onClick={() => toggleEnforcement('cloud')}
                      >
                         <div className="flex items-center gap-2 mb-2">
                             <Cloud className={`h-5 w-5 ${enforcementLocations.includes('cloud') ? 'text-purple-700' : 'text-gray-400'}`} />
                             <span className={`font-medium ${enforcementLocations.includes('cloud') ? 'text-purple-900' : 'text-gray-900'}`}>Cloud Edge</span>
                         </div>
                         <p className="text-xs text-gray-500">Enforce via Cloud Secure Edge gateway.</p>
                      </div>
                  </div>
               </div>

               <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connector Binding</h3>
                  <RadioGroup value={connectorBinding} onValueChange={setConnectorBinding}>
                      <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                             <RadioGroupItem value="all" id="conn-all" />
                             <Label htmlFor="conn-all">All Connectors (Default)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                             <RadioGroupItem value="specific" id="conn-spec" />
                             <Label htmlFor="conn-spec">Select Specific Connectors...</Label>
                          </div>
                      </div>
                  </RadioGroup>
                  {connectorBinding === 'specific' && (
                      <div className="p-3 bg-gray-50 rounded border border-gray-200 text-sm text-gray-500 italic">
                          Connector selection would appear here...
                      </div>
                  )}
               </div>
           </div>
        </section>

        {/* SECTION 4: SECURITY CONTROLS */}
        <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
           <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                 <div className="bg-orange-100 p-2 rounded-lg text-orange-700">
                    <Lock className="h-5 w-5" />
                 </div>
                 <h2 className="font-bold text-gray-900">4. Security Controls</h2>
              </div>
           </div>

           <div className="p-6 space-y-6">
              {/* Extra Conditions */}
              <div className="flex flex-wrap gap-2">
                {availableConditions.map((condition) => {
                  const Icon = condition.icon;
                  const isSelected = conditions.includes(condition.id);
                  return (
                    <button
                      key={condition.id}
                      onClick={() => toggleCondition(condition.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-orange-50 text-orange-700 border-orange-300'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {condition.label}
                      {isSelected && <X className="h-3 w-3 ml-1" />}
                    </button>
                  );
                })}
              </div>

               {/* Condition Details */}
              {conditions.includes('location') && (
                <div className="space-y-2 p-4 bg-gray-50 rounded-lg animate-in fade-in slide-in-from-top-2">
                  <Label htmlFor="location">Geographic Location Blocking</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select allowed location..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States Only</SelectItem>
                      <SelectItem value="EU">European Union Only</SelectItem>
                      <SelectItem value="North America">North America Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {conditions.includes('time') && (
                <div className="space-y-2 p-4 bg-gray-50 rounded-lg animate-in fade-in slide-in-from-top-2">
                  <Label htmlFor="timeWindow">Time Window Restriction</Label>
                  <Select value={timeWindow} onValueChange={setTimeWindow}>
                    <SelectTrigger id="timeWindow">
                      <SelectValue placeholder="Select allowed time window..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business hours (9AM-5PM)">Business Hours Only (9AM-5PM)</SelectItem>
                      <SelectItem value="extended hours (7AM-7PM)">Extended Hours (7AM-7PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Separator />

              {/* Legacy Device Health Checks */}
              <div className="space-y-4">
                  <Label className="text-gray-700 font-medium">Additional Device Checks</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Checkbox 
                            id="enc" 
                            checked={deviceHealth.encrypted} 
                            onCheckedChange={(c) => setDeviceHealth({...deviceHealth, encrypted: !!c})} 
                        />
                        <label htmlFor="enc" className="text-sm font-medium text-gray-700 cursor-pointer">Require Encryption</label>
                     </div>
                     <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Checkbox 
                            id="threats" 
                            checked={deviceHealth.noThreats} 
                            onCheckedChange={(c) => setDeviceHealth({...deviceHealth, noThreats: !!c})} 
                        />
                        <label htmlFor="threats" className="text-sm font-medium text-gray-700 cursor-pointer">No Active Threats</label>
                     </div>
                  </div>
              </div>
           </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-12" />
      </div>

      {/* Sticky Sidebar - Effective Access Preview */}
      <div className="w-80 sticky top-8 self-start hidden xl:block">
        <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
             <Server className="w-4 h-4 text-gray-500" />
             Effective Access Preview
          </h3>
          
          <div className="space-y-0">
              {/* Identity */}
              <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-200 shrink-0">1</div>
                    <div className="flex-1 w-0.5 bg-gray-200 min-h-[16px]" />
                  </div>
                  <div className="pb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Who is Allowed</p>
                      <p className="text-sm font-medium text-gray-900">{selectedGroups.length > 0 ? (selectedGroups.includes('All Users') ? 'Everyone (High Risk)' : `${selectedGroups.length} Groups`) : 'None Selected'}</p>
                  </div>
              </div>

              {/* Resource */}
              <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold border border-blue-200 shrink-0">2</div>
                    <div className="flex-1 w-0.5 bg-gray-200 min-h-[16px]" />
                  </div>
                  <div className="pb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Access to What</p>
                      <p className="text-sm font-medium text-gray-900">{selectedResources.length > 0 ? `${selectedResources.length} Resources` : 'None Selected'}</p>
                  </div>
              </div>

              {/* Trust */}
              <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold border border-green-200 shrink-0">3</div>
                    <div className="flex-1 w-0.5 bg-gray-200 min-h-[16px]" />
                  </div>
                  <div className="pb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Trust Requirements</p>
                      <p className="text-sm font-medium text-gray-900">{getTrustSummary()}</p>
                  </div>
              </div>

              {/* Enforcement */}
              <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold border border-purple-200 shrink-0">4</div>
                    <div className="flex-1 w-0.5 bg-gray-200 min-h-[16px]" />
                  </div>
                  <div className="pb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase">Enforced At</p>
                      <p className="text-sm font-medium text-gray-900">{getEnforcementSummary()}</p>
                  </div>
              </div>

               {/* Failure Action */}
              <div className="flex gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${riskBehavior === 'block' ? 'bg-red-100 text-red-600 border-red-200' : 'bg-orange-100 text-orange-600 border-orange-200'}`}>5</div>
                  <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">On Trust Failure</p>
                      <p className="text-sm font-medium text-gray-900">
                          {riskBehavior === 'block' ? 'Block Access' : 
                           riskBehavior === 'warn' ? 'Warn User' : 
                           riskBehavior === 'mfa' ? 'Step-up MFA' : 'Isolate'}
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
             {warnings.map((w, i) => (
                 <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${w.type === 'high-risk' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                     <AlertTriangle className="w-4 h-4" />
                     {w.message}
                 </div>
             ))}
          </div>
          <div className="flex items-center gap-3">
              <Button variant="outline" onClick={onBack}>
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-[#0066CC] hover:bg-[#0052A3] min-w-[120px]">
                Save Policy
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}