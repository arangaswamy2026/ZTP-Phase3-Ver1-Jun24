import React, { useState } from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { SecurityPolicies } from './SecurityPolicies';
import { 
  ChevronLeft, 
  Check, 
  HelpCircle, 
  Monitor, 
  User, 
  Cpu, 
  CreditCard, 
  Printer, 
  Info,
  Pencil,
  Globe,
  Save,
  X
} from 'lucide-react';

interface Day0OnboardingProps {
  onComplete?: () => void;
  onBack?: () => void;
}

const STEPS = [
  { 
     id: 1, 
     title: "Zones & Network", 
     headerTitle: "Zone & Network Configuration",
     description: "Configure network zones, subnet allocation, and DHCP settings for your Zero Trust Connector",
     subtasks: [] 
  },
  { 
     id: 2, 
     title: "Security Policies", 
     headerTitle: "Security Policies",
     description: "Define access control policies",
     subtasks: ["Define access control policies"] 
  },
  { 
     id: 3, 
     title: "Identity & SSO", 
     headerTitle: "Identity & SSO",
     description: "Configure authentication",
     subtasks: ["Configure authentication"] 
  },
  { 
     id: 4, 
     title: "Advanced Options", 
     headerTitle: "Advanced Options",
     description: "Optional network settings",
     subtasks: ["Optional network settings"] 
  },
  { 
     id: 5, 
     title: "Bundle Assignment", 
     headerTitle: "Bundle Assignment",
     description: "Assign to devices and services",
     subtasks: ["Assign to devices and services"] 
  },
  { 
     id: 6, 
     title: "Validation", 
     headerTitle: "Validation",
     description: "Pre-flight readiness check",
     subtasks: ["Pre-flight readiness check"] 
  },
];

interface Zone {
  id: string;
  name: string;
  type: 'wan' | 'employee' | 'guest' | 'iot' | 'pos' | 'shared';
  enabled: boolean;
  // Network Config
  subnet: string;
  gateway: string;
  dhcpEnabled: boolean;
  dhcpStart: string;
  dhcpEnd: string;
  dns: string;
}

const DEFAULT_ZONES: Zone[] = [
  { 
    id: 'wan', 
    name: 'WAN', 
    type: 'wan', 
    enabled: true,
    subnet: 'Interface X1', 
    gateway: 'Dynamic',
    dhcpEnabled: false,
    dhcpStart: '',
    dhcpEnd: '',
    dns: 'Obtain automatically'
  },
  { 
    id: 'employee', 
    name: 'Employee', 
    type: 'employee', 
    enabled: true,
    subnet: '10.0.1.0/24',
    gateway: '10.0.1.1',
    dhcpEnabled: true,
    dhcpStart: '10.0.1.100',
    dhcpEnd: '10.0.1.200',
    dns: '8.8.8.8, 8.8.4.4'
  },
  { 
    id: 'guest', 
    name: 'Guest', 
    type: 'guest', 
    enabled: true,
    subnet: '10.0.2.0/24',
    gateway: '10.0.2.1',
    dhcpEnabled: true,
    dhcpStart: '10.0.2.100',
    dhcpEnd: '10.0.2.200',
    dns: '8.8.8.8, 8.8.4.4'
  },
  { 
    id: 'iot', 
    name: 'IoT', 
    type: 'iot', 
    enabled: false,
    subnet: '10.0.3.0/24',
    gateway: '10.0.3.1',
    dhcpEnabled: true,
    dhcpStart: '10.0.3.100',
    dhcpEnd: '10.0.3.200',
    dns: '8.8.8.8, 8.8.4.4'
  },
  { 
    id: 'pos', 
    name: 'PoS', 
    type: 'pos', 
    enabled: false,
    subnet: '10.0.4.0/24',
    gateway: '10.0.4.1',
    dhcpEnabled: true,
    dhcpStart: '10.0.4.100',
    dhcpEnd: '10.0.4.200',
    dns: '8.8.8.8, 8.8.4.4'
  },
  { 
    id: 'shared', 
    name: 'Shared', 
    type: 'shared', 
    enabled: false,
    subnet: '10.0.5.0/24',
    gateway: '10.0.5.1',
    dhcpEnabled: true,
    dhcpStart: '10.0.5.100',
    dhcpEnd: '10.0.5.200',
    dns: '8.8.8.8, 8.8.4.4'
  },
];

export function Day0Onboarding({ onComplete, onBack }: Day0OnboardingProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [zones, setZones] = useState<Zone[]>(DEFAULT_ZONES);

  const activeStepData = STEPS.find(s => s.id === activeStep) || STEPS[0];

  const handleContinue = () => {
    if (activeStep < STEPS.length) {
      setActiveStep(prev => prev + 1);
    } else {
      onComplete?.();
    }
  };

  const toggleZone = (id: string, enabled: boolean) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, enabled } : z));
  };

  const updateZone = (id: string, updates: Partial<Zone>) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, ...updates } : z));
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col shrink-0 z-10">
        <div className="flex-1 overflow-y-auto pt-6 pb-20">
          <div className="px-5 mb-3">
            <h2 className="text-[16px] font-bold text-gray-900">Default Configuration</h2>
          </div>
          
          <div className="px-2">
             {/* Task List */}
             <div className="flex flex-col gap-2">
                {STEPS.map((step, index) => (
                   <TaskItem 
                     key={step.id}
                     step={step.id} 
                     title={step.title} 
                     isActive={activeStep === step.id}
                     isCompleted={activeStep > step.id}
                     subtasks={step.subtasks}
                     isLast={index === STEPS.length - 1}
                     onClick={() => setActiveStep(step.id)}
                   />
                ))}
             </div>
          </div>
        </div>
        
        {/* Sidebar Footer */}
        <div className="p-5 border-t border-gray-200">
           <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Need some help?</span>
              <button className="bg-blue-100 hover:bg-blue-200 px-3 py-2 rounded text-sm font-medium text-blue-900 transition-colors">
                Contact Support
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[100px] bg-white border-b border-gray-200 shrink-0 flex items-center justify-between px-6">
           <div className="flex flex-col justify-center h-full">
              <h1 className="text-2xl font-bold text-gray-900">{activeStepData.headerTitle}</h1>
              <p className="text-gray-600 mt-1">{activeStepData.description}</p>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-sm">
                 <span className="font-medium text-gray-600">CSE's Status</span>
                 <span className="font-semibold text-gray-900">Provisioning</span>
                 <div className="w-2 h-2 rounded-full bg-yellow-500 ml-1"></div>
              </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
           <div className="max-w-[1042px] mx-auto space-y-6">
              
              {activeStep === 1 && (
                /* Step 1 Content: Zone & Network Configuration */
                <>
                  {/* Alert (Subtle) */}
                  <div className="flex gap-3 text-gray-600 px-1">
                     <div className="mt-0.5">
                        <Info className="w-5 h-5" />
                     </div>
                     <div className="text-sm">
                        <span className="font-semibold text-gray-900">Default Route:</span> All zones will route to WAN by default. Advanced routing can be configured in the next step.
                     </div>
                  </div>

                  {/* Zones Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {zones.map((zone) => (
                       <ZoneCard 
                         key={zone.id}
                         zone={zone}
                         onToggle={(enabled) => toggleZone(zone.id, enabled)}
                         onUpdate={(updates) => updateZone(zone.id, updates)}
                       />
                     ))}
                  </div>

                  {/* Action Buttons (Separated) */}
                  <div className="flex justify-between pt-4">
                     <Button 
                        variant="outline"
                        className="text-gray-700 border-gray-300 hover:bg-gray-50 px-6 h-10"
                        onClick={onBack}
                     >
                        Cancel
                     </Button>
                     <Button 
                        onClick={handleContinue} 
                        className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-6 h-10"
                     >
                        Continue to Security Policies
                     </Button>
                  </div>
                </>
              )}

              {activeStep === 2 && (
                 <SecurityPolicies 
                    onNext={handleContinue}
                    onBack={() => setActiveStep(1)}
                 />
              )}

              {activeStep > 2 && (
                /* Placeholder for other steps */
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#0066CC]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{activeStepData.headerTitle}</h2>
                  <p className="text-gray-600 mb-6">{activeStepData.description}</p>
                  <Button onClick={handleContinue} className="bg-[#0066CC] hover:bg-[#0052A3] text-white">
                    Continue to Next Step
                  </Button>
                </div>
              )}
              
           </div>
        </main>
      </div>
    </div>
  );
}

function TaskItem({ 
   step, 
   title, 
   isActive, 
   isCompleted, 
   subtasks,
   isLast,
   onClick
}: { 
   step: number; 
   title: string; 
   isActive: boolean; 
   isCompleted: boolean; 
   subtasks: string[];
   isLast?: boolean;
   onClick?: () => void;
}) {
   return (
      <div 
         className={`flex gap-3 group cursor-pointer ${isCompleted || isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
         onClick={onClick}
      >
         <div className="flex flex-col items-center">
            <div className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center z-10 text-xs font-medium bg-white transition-colors
               ${isActive || isCompleted ? 'border-[#0066CC] text-[#0066CC]' : 'border-gray-400 text-gray-400'}`}>
               {isCompleted ? <Check className="w-3.5 h-3.5" /> : step}
            </div>
            {/* Connecting line using border instead of absolute positioning */}
            {!isLast && (
               <div className="flex-1 w-[2px] border-l-2 border-dotted border-gray-300 min-h-[20px]" />
            )}
         </div>
         
         <div className="pb-6">
            <div className={`text-[16px] font-medium leading-none mb-2 ${isActive || isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
               {title}
            </div>
            {/* Subtasks - conditionally rendered if array has items */}
            {(isActive || isCompleted) && subtasks.length > 0 && (
               <div className="space-y-3">
                  {subtasks.map((task, i) => (
                     <div key={i} className="flex gap-2 items-start">
                        <div className="w-[9px] h-[16px] border-b border-l border-gray-300 rounded-bl-sm shrink-0 mt-[-8px] ml-[-6px]"></div>
                        <span className="text-sm text-gray-900 leading-tight">{task}</span>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

function ZoneCard({ 
  zone,
  onToggle,
  onUpdate
}: { 
  zone: Zone; 
  onToggle: (enabled: boolean) => void;
  onUpdate: (updates: Partial<Zone>) => void;
}) {
   const [isEditing, setIsEditing] = useState(false);
   const [editState, setEditState] = useState<Zone>(zone);

   React.useEffect(() => {
     if (isEditing) {
       setEditState(zone);
     }
   }, [isEditing, zone]);

   const getIcon = () => {
      switch(zone.type) {
         case 'wan': return <Globe className="w-4 h-4 text-gray-600" />;
         case 'employee': return <Monitor className="w-4 h-4 text-blue-600" />;
         case 'guest': return <User className="w-4 h-4 text-green-600" />;
         case 'iot': return <Cpu className="w-4 h-4 text-purple-600" />;
         case 'pos': return <CreditCard className="w-4 h-4 text-orange-600" />;
         case 'shared': return <Printer className="w-4 h-4 text-gray-600" />;
         default: return <Monitor className="w-4 h-4 text-gray-600" />;
      }
   };

   const getIconBg = () => {
      if (!zone.enabled) return 'bg-gray-100 opacity-50';
      switch(zone.type) {
         case 'wan': return 'bg-gray-100';
         case 'employee': return 'bg-blue-100';
         case 'guest': return 'bg-green-100';
         case 'iot': return 'bg-purple-100';
         case 'pos': return 'bg-orange-100';
         case 'shared': return 'bg-gray-100';
         default: return 'bg-gray-100';
      }
   };

   const handleSave = () => {
      onUpdate(editState);
      setIsEditing(false);
   };

   const handleCancel = () => {
      setEditState(zone);
      setIsEditing(false);
   };

   return (
      <div className={`bg-white rounded-xl shadow-sm border p-3 flex flex-col gap-3 transition-all relative
         ${zone.enabled ? 'border-gray-200 hover:border-[#0066CC]' : 'border-gray-100 opacity-70 hover:opacity-100'}
         ${isEditing ? 'ring-2 ring-blue-100 border-[#0066CC] row-span-2' : ''}
      `}>
         
         {/* Card Header */}
         <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
               <div className={`w-8 h-8 rounded-lg ${getIconBg()} flex items-center justify-center shrink-0 transition-colors`}>
                  {getIcon()}
               </div>
               <div className={`text-sm font-medium truncate max-w-[100px] ${zone.enabled ? 'text-gray-900' : 'text-gray-500'}`}>
                  {zone.name}
               </div>
            </div>
            
            <div className="flex items-center gap-2">
               <Switch 
                  checked={zone.enabled}
                  onCheckedChange={onToggle}
                  className="scale-75 data-[state=checked]:bg-[#0066CC]"
               />
               <button 
                  className={`w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors
                     ${zone.enabled ? 'text-gray-400 hover:text-[#0066CC] cursor-pointer' : 'text-gray-200 cursor-not-allowed'}`}
                  onClick={() => zone.enabled && setIsEditing(true)}
                  disabled={!zone.enabled}
               >
                  <Pencil className="w-3.5 h-3.5" />
               </button>
            </div>
         </div>

         {/* Card Content */}
         {isEditing ? (
            <div className="flex flex-col gap-3 pt-1">
               {/* Edit Mode */}
               <div>
                  <Label htmlFor={`name-${zone.id}`} className="text-xs">Name</Label>
                  <Input 
                     id={`name-${zone.id}`}
                     value={editState.name}
                     onChange={(e) => setEditState({...editState, name: e.target.value})}
                     className="h-7 text-sm mt-1"
                  />
               </div>

               {zone.type !== 'wan' && (
                  <div className="space-y-3">
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <Label htmlFor={`subnet-${zone.id}`} className="text-xs">Subnet</Label>
                           <Input 
                              id={`subnet-${zone.id}`}
                              value={editState.subnet}
                              onChange={(e) => setEditState({...editState, subnet: e.target.value})}
                              className="h-7 text-xs mt-1 bg-gray-50"
                           />
                        </div>
                        <div>
                           <Label htmlFor={`gateway-${zone.id}`} className="text-xs">Gateway</Label>
                           <Input 
                              id={`gateway-${zone.id}`}
                              value={editState.gateway}
                              onChange={(e) => setEditState({...editState, gateway: e.target.value})}
                              className="h-7 text-xs mt-1 bg-gray-50"
                           />
                        </div>
                     </div>

                     <div className="flex items-center justify-between">
                        <Label htmlFor={`dhcp-${zone.id}`} className="text-xs mb-0">DHCP Server</Label>
                        <Switch 
                           id={`dhcp-${zone.id}`}
                           checked={editState.dhcpEnabled}
                           onCheckedChange={(checked) => setEditState({...editState, dhcpEnabled: checked})}
                           className="scale-75"
                        />
                     </div>

                     {editState.dhcpEnabled && (
                        <div className="grid grid-cols-2 gap-2">
                           <div>
                              <Label htmlFor={`dhcpStart-${zone.id}`} className="text-xs">Pool Start</Label>
                              <Input 
                                 id={`dhcpStart-${zone.id}`}
                                 value={editState.dhcpStart}
                                 onChange={(e) => setEditState({...editState, dhcpStart: e.target.value})}
                                 className="h-7 text-xs mt-1 bg-gray-50"
                              />
                           </div>
                           <div>
                              <Label htmlFor={`dhcpEnd-${zone.id}`} className="text-xs">Pool End</Label>
                              <Input 
                                 id={`dhcpEnd-${zone.id}`}
                                 value={editState.dhcpEnd}
                                 onChange={(e) => setEditState({...editState, dhcpEnd: e.target.value})}
                                 className="h-7 text-xs mt-1 bg-gray-50"
                              />
                           </div>
                        </div>
                     )}

                     <div>
                        <Label htmlFor={`dns-${zone.id}`} className="text-xs">DNS Servers</Label>
                        <Input 
                           id={`dns-${zone.id}`}
                           value={editState.dns}
                           onChange={(e) => setEditState({...editState, dns: e.target.value})}
                           className="h-7 text-xs mt-1 bg-gray-50"
                        />
                     </div>
                  </div>
               )}

               <div className="flex justify-end gap-2 pt-2 mt-auto">
                  <Button variant="ghost" size="sm" onClick={handleCancel} className="h-7 text-xs px-2">Cancel</Button>
                  <Button size="sm" onClick={handleSave} className="bg-[#0066CC] hover:bg-[#0052A3] h-7 text-xs px-3">Save</Button>
               </div>
            </div>
         ) : (
            /* Read Mode - Compact Details */
            <div className="space-y-1.5 pt-1">
               <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Subnet</span>
                  <span className="font-medium text-gray-700 truncate max-w-[120px]" title={zone.subnet}>{zone.subnet}</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Gateway</span>
                  <span className="font-medium text-gray-700 truncate max-w-[120px]">{zone.gateway}</span>
               </div>
               <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">DHCP</span>
                  <div className="flex items-center gap-1.5">
                     <div className={`w-1.5 h-1.5 rounded-full ${zone.dhcpEnabled ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                     <span className={`font-medium ${zone.dhcpEnabled ? 'text-gray-700' : 'text-gray-400'}`}>
                        {zone.dhcpEnabled ? 'On' : 'Off'}
                     </span>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}