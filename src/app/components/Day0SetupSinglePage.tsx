import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import {
  CheckCircle2,
  Circle,
  Network,
  Shield,
  Users,
  Settings,
  Rocket,
  ChevronDown,
  ChevronRight,
  Edit2,
  AlertTriangle,
  Clock,
  RefreshCw,
  XCircle,
  Server,
  Cable,
  LayoutGrid,
  Workflow,
  MoreHorizontal,
  UserPlus,
  Download,
  Eye,
  ArrowRight,
  Wifi,
  Monitor,
  Laptop,
  Terminal,
  Smartphone,
  Copy
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ZoneConfiguration } from './ZoneConfiguration';
import { InterfacesConfiguration, DEFAULT_INTERFACES, NetworkInterface } from './InterfacesConfiguration';
import { PolicyTemplates } from './PolicyTemplates';
import { ResourceSelector, ResourceItem } from './ResourceSelector';

interface Day0SetupSinglePageProps {
  onComplete?: () => void;
  onCancel?: () => void;
  activeView?: 'wizard' | 'single-page';
  onViewChange?: (view: 'wizard' | 'single-page') => void;
}

type SetupSection = 
  | 'zones'
  | 'interfaces'
  | 'policies';

interface Section {
  id: SetupSection;
  name: string;
  description: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  optional: boolean;
  status: 'incomplete' | 'in-progress' | 'complete';
}

const PolicyScopeEditor = ({ 
  initialSource = [], 
  initialDestination = [] 
}: { 
  initialSource?: ResourceItem[], 
  initialDestination?: ResourceItem[] 
}) => {
  const [sources, setSources] = useState<ResourceItem[]>(initialSource);
  const [destinations, setDestinations] = useState<ResourceItem[]>(initialDestination);

  return (
    <div className="flex flex-row gap-4 p-4 border rounded-lg bg-gray-50/50 w-full">
      <div className="flex-1">
        <ResourceSelector 
          label="From (Source)" 
          selectedItems={sources} 
          onChange={setSources}
          placeholder="Select sources..."
        />
      </div>
      <div className="flex items-center justify-center pt-6">
        <ArrowRight className="h-5 w-5 text-gray-400" />
      </div>
      <div className="flex-1">
        <ResourceSelector 
          label="To (Destination)" 
          selectedItems={destinations} 
          onChange={setDestinations}
          placeholder="Select destinations..."
        />
      </div>
    </div>
  );
};

const DEFAULT_SECTIONS: Section[] = [
  {
    id: 'zones',
    name: 'Zones & Network',
    description: 'Configure network zones and subnets',
    summary: '5 zones configured',
    icon: Network,
    optional: false,
    status: 'complete',
  },
  {
    id: 'interfaces',
    name: 'Interfaces',
    description: 'Configure physical and virtual interfaces',
    summary: 'X0, X1 configured',
    icon: Cable,
    optional: false,
    status: 'incomplete',
  },
  {
    id: 'policies',
    name: 'Security Policies',
    description: 'Define access control policies',
    summary: 'Standard Security template',
    icon: Shield,
    optional: false,
    status: 'complete',
  },
];

export function Day0SetupSinglePage({ onComplete, onCancel, activeView = 'single-page', onViewChange, showHeader = true, showFooter = true }: Day0SetupSinglePageProps & { showHeader?: boolean; showFooter?: boolean }) {
  // Lifted state for Interfaces
  const [interfaces, setInterfaces] = useState<NetworkInterface[]>(DEFAULT_INTERFACES);
  
  // State for specific policy viewing
  const [viewingPolicyDetail, setViewingPolicyDetail] = useState<'private' | 'internet' | null>(null);

  // Derive available (enabled) interfaces for Zone Configuration
  // Assumes interface ID "x0" maps to "X0"
  const availableInterfaces = interfaces
    .filter(i => i.enabled)
    .map(i => i.id.toUpperCase());

  // Update sections summary when interfaces change
  useEffect(() => {
    const enabledCount = interfaces.filter(i => i.enabled).length;
    setSections(prev => prev.map(s => {
      if (s.id === 'interfaces') {
        const enabledNames = interfaces.filter(i => i.enabled).map(i => i.id.toUpperCase()).join(', ');
        return {
          ...s,
          summary: enabledNames ? `${enabledNames} configured` : 'No interfaces enabled'
        };
      }
      return s;
    }));
  }, [interfaces]);

  const [sections, setSections] = useState<Section[]>(DEFAULT_SECTIONS);

  const [editingSection, setEditingSection] = useState<SetupSection | null>(null);
  const [validationStatus, setValidationStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const [validationResults, setValidationResults] = useState<any[]>([]);

  const completedCount = sections.filter(s => s.status === 'complete').length;
  const totalRequired = sections.filter(s => !s.optional).length;
  const requiredCompleted = sections.filter(s => !s.optional && s.status === 'complete').length;
  const progressPercent = (completedCount / sections.length) * 100;

  const openEditor = (sectionId: SetupSection) => {
    setEditingSection(sectionId);
  };

  const closeEditor = () => {
    setEditingSection(null);
    setViewingPolicyDetail(null);
  };

  const handleSectionComplete = (sectionId: SetupSection) => {
    setSections(sections.map(s => 
      s.id === sectionId ? { ...s, status: 'complete' as const } : s
    ));
    closeEditor();
  };

  const runValidation = async () => {
    setValidationStatus('running');
    
    // Simulate validation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setValidationResults([
      { name: 'Zone Configuration', status: 'success', message: 'All zones validated' },
      { name: 'Interface Configuration', status: 'success', message: 'Interfaces validated' },
      { name: 'Security Policies', status: 'success', message: 'Policies validated' },
      { name: 'ZTC Connectivity', status: 'warning', message: 'Device not yet online' },
    ]);
    
    setValidationStatus('complete');
  };

  const getStatusIcon = (status: Section['status']) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'incomplete':
      default:
        return <Circle className="h-5 w-5 text-gray-300" />;
    }
  };

  const canDeploy = requiredCompleted === totalRequired && validationStatus === 'complete';

  const isDirty = 
    JSON.stringify(interfaces) !== JSON.stringify(DEFAULT_INTERFACES) ||
    JSON.stringify(sections) !== JSON.stringify(DEFAULT_SECTIONS);

  const handleReset = () => {
    setInterfaces(DEFAULT_INTERFACES);
    setSections(DEFAULT_SECTIONS);
  };

  const changeCount = interfaces.reduce((acc, curr) => {
    const def = DEFAULT_INTERFACES.find(d => d.id === curr.id);
    if (!def) return acc;
    
    // Compare all properties except 'expanded'
    const isChanged = (Object.keys(def) as Array<keyof NetworkInterface>).some(key => {
      if (key === 'expanded') return false;
      return curr[key] !== def[key];
    });
    
    return isChanged ? acc + 1 : acc;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header with inline progress */}
      {showHeader && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl text-gray-900">Default Configuration</h1>
            
            <div className="flex items-center gap-4">
              {changeCount > 0 && (
                <span className="text-sm font-medium text-gray-500">
                  {changeCount} change{changeCount !== 1 ? 's' : ''}
                </span>
              )}

              {/* View Toggle */}
              {onViewChange && (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onViewChange('wizard')}>
                        <Workflow className="mr-2 h-4 w-4" />
                        <span>Wizard</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onViewChange('single-page')}>
                        <LayoutGrid className="mr-2 h-4 w-4" />
                        <span>Single Page</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <Card 
              key={section.id} 
              className={`border-2 transition-all group h-full flex flex-col ${
                editingSection === section.id 
                  ? 'border-blue-400 shadow-md bg-white cursor-default'
                  : 'cursor-pointer hover:border-blue-400'
              }`}
              onClick={() => {
                if (editingSection !== section.id) openEditor(section.id);
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-50">
                      <SectionIcon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg transition-colors group-hover:text-[#0066CC]">
                        {section.name}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2 mt-1">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center text-[#0066CC] text-sm font-medium">
                    <Edit2 className="h-3.5 w-3.5 mr-1.5" />
                    Edit
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pt-2">
                <div className="rounded-md p-3 text-sm border shadow-sm bg-white/50 border-gray-100/50">
                  {section.id === 'zones' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-gray-900 font-medium">Employee</span>
                          <span className="text-gray-500 text-[10px]">Type: Trusted</span>
                          <span className="text-gray-500 text-[10px]">Interfaces: X0</span>
                        </div>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">AV</Badge>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">IPS</Badge>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">App</Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-gray-900 font-medium">Internet</span>
                          <span className="text-gray-500 text-[10px]">Type: Untrusted</span>
                          <span className="text-gray-500 text-[10px]">Interface: X1</span>
                        </div>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">AV</Badge>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">IPS</Badge>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">App</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-gray-900 font-medium">Guest</span>
                          <span className="text-gray-500 text-[10px]">Type: Public</span>
                          <span className="text-gray-500 text-[10px]">Interfaces: X2</span>
                        </div>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">IPS</Badge>
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 border-green-200 bg-green-50 text-green-700">App</Badge>
                        </div>
                      </div>


                    </div>
                  )}
                  
                  {section.id === 'interfaces' && (
                    <div className="space-y-2">
                      {interfaces.filter(i => i.enabled).slice(0, 3).map(iface => (
                        <div key={iface.id} className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 font-medium">{iface.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-mono">{iface.ipAddress}</span>
                            {iface.status === 'connected' ? (
                              <CheckCircle2 className="h-3 w-3 text-green-600" aria-label="Connected" />
                            ) : (
                              <XCircle className="h-3 w-3 text-gray-300" aria-label="Disconnected" />
                            )}
                          </div>
                        </div>
                      ))}
                      {interfaces.filter(i => i.enabled).length === 0 && (
                        <div className="text-xs text-gray-500 italic">No interfaces enabled</div>
                      )}
                      {interfaces.filter(i => i.enabled).length > 3 && (
                        <div className="text-xs text-gray-500 italic pt-1 text-center">
                          + {interfaces.filter(i => i.enabled).length - 3} more
                        </div>
                      )}
                    </div>
                  )}

                  {section.id === 'policies' && (
                    <div className="space-y-3">
                      {/* Private Access Policy Row */}
                      <div 
                        className="flex items-center justify-between text-xs p-1.5 -mx-1.5 rounded hover:bg-gray-100 cursor-pointer group/item transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewingPolicyDetail('private');
                        }}
                      >
                         <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-900 font-medium">Private Access</span>
                              <Badge variant="outline" className="text-[10px] px-1.5 border-green-200 bg-green-50 text-green-700">Allow</Badge>
                            </div>
                            <div className="text-gray-500 text-[10px] flex items-center gap-1">
                              Internal Resources
                              <span className="text-gray-300 mx-0.5">|</span>
                              <span className="text-gray-400">Employee Zone, DMZ, VPN</span>
                            </div>
                         </div>
                         <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>

                      {/* Internet Access Policy Row */}
                      <div 
                        className="flex items-center justify-between text-xs p-1.5 -mx-1.5 rounded hover:bg-gray-100 cursor-pointer group/item transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewingPolicyDetail('internet');
                        }}
                      >
                         <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-900 font-medium">Internet Access</span>
                              <Badge variant="outline" className="text-[10px] px-1.5 border-blue-200 bg-blue-50 text-blue-700">Secure</Badge>
                            </div>
                             <div className="text-gray-500 text-[10px] flex items-center gap-1">
                              Threat Protection
                              <span className="text-gray-300 mx-0.5">|</span>
                              <span className="text-gray-400">IPS, AV, App Control</span>
                            </div>
                         </div>
                         <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>


                    </div>
                  )}
                </div>
                
                {/* Edit button moved to header */}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Validation Section */}
      {requiredCompleted === totalRequired && (
        <div className="bg-white border rounded-lg p-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Configuration Validation</h3>
              <p className="text-sm text-gray-500">
                Validate your configuration before deploying to the device.
              </p>
            </div>
            {validationStatus === 'idle' && (
              <Button onClick={runValidation} className="bg-blue-600 hover:bg-blue-700">
                <Shield className="h-4 w-4 mr-2" />
                Run Validation
              </Button>
            )}
             {validationStatus === 'running' && (
              <Button disabled className="bg-blue-600">
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Validating...
              </Button>
            )}
             {validationStatus === 'complete' && (
              <Badge className="bg-green-100 text-green-700 border-green-200 h-9 px-4 text-sm">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Validation Passed
              </Badge>
            )}
          </div>

          {(validationStatus === 'running' || validationStatus === 'complete') && (
             <div className="space-y-2">
               {/* Progress Bar */}
               {validationStatus === 'running' && <Progress value={66} className="h-2" />}
               
               {/* Results List */}
               {validationResults.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                   {validationResults.map((result, idx) => (
                     <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded border animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="flex items-center gap-2">
                          {result.status === 'success' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : result.status === 'warning' ? (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm font-medium text-gray-700">{result.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{result.message}</span>
                     </div>
                   ))}
                 </div>
               )}
             </div>
          )}
        </div>
      )}

      {/* Footer Actions */}
      {showFooter && (
        <div className="flex items-center justify-between pt-4 pb-8 border-t">
          <div className="flex items-center gap-3">
            {isDirty && (
              <Button 
                variant="ghost" 
                onClick={handleReset}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Reset to Defaults
              </Button>
            )}
          </div>
          {onComplete && (
            <Button
              onClick={onComplete}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Done
            </Button>
          )}
        </div>
      )}

      {/* Edit Dialogs */}
      <Dialog open={editingSection === 'zones'} onOpenChange={() => editingSection === 'zones' && closeEditor()}>
        <DialogContent className="min-w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Zones & Network Configuration</DialogTitle>
            <DialogDescription>
              Configure zones, subnets, and DHCP settings.
            </DialogDescription>
          </DialogHeader>
          <ZoneConfiguration
            onContinue={() => handleSectionComplete('zones')}
            onCancel={closeEditor}
            availableInterfaces={availableInterfaces}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={editingSection === 'interfaces'} onOpenChange={() => editingSection === 'interfaces' && closeEditor()}>
        <DialogContent className="min-w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Interface Configuration</DialogTitle>
            <DialogDescription>
              Configure physical and virtual network interfaces.
            </DialogDescription>
          </DialogHeader>
          <InterfacesConfiguration
            onContinue={() => handleSectionComplete('interfaces')}
            onCancel={closeEditor}
            interfaces={interfaces}
            onUpdateInterfaces={setInterfaces}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={editingSection === 'policies'} onOpenChange={() => editingSection === 'policies' && closeEditor()}>
        <DialogContent className="min-w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Security Policies</DialogTitle>
            <DialogDescription>
              Apply security templates or customize specific policies.
            </DialogDescription>
          </DialogHeader>
          <PolicyTemplates
            onSelectTemplate={(template) => {
              console.log('Selected template:', template);
              handleSectionComplete('policies');
            }}
            onCustomPolicy={() => {
              console.log('Create custom policy');
            }}
            onContinue={() => handleSectionComplete('policies')}
            onCancel={closeEditor}
          />
        </DialogContent>
      </Dialog>
      
      {/* Specific Policy View: Private Access */}
      <Dialog open={viewingPolicyDetail === 'private'} onOpenChange={() => setViewingPolicyDetail(null)}>
        <DialogContent className="min-w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Private Access Policy</DialogTitle>
            <DialogDescription>Configure Private Access Policy settings</DialogDescription>
          </DialogHeader>
           {/* Note: Header is handled inside PolicyTemplates with custom content */}
          <PolicyTemplates 
            title="Private Access Policy"
            headerContent={
              <PolicyScopeEditor 
                initialSource={[{ id: 'any', name: 'Any', count: 0, type: 'network' }]}
                initialDestination={[{ id: 'lan', name: 'Employee Zone Subnets', count: 4, type: 'network' }]}
              />
            }
            onContinue={() => setViewingPolicyDetail(null)}
            onCancel={() => setViewingPolicyDetail(null)}
            onSelectTemplate={() => {}}
            onCustomPolicy={() => {}}
          />
        </DialogContent>
      </Dialog>

      {/* Specific Policy View: Internet Access */}
      <Dialog open={viewingPolicyDetail === 'internet'} onOpenChange={() => setViewingPolicyDetail(null)}>
        <DialogContent className="min-w-[60vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Internet Access Policy</DialogTitle>
            <DialogDescription>Configure Internet Access Policy settings</DialogDescription>
          </DialogHeader>
          <PolicyTemplates 
            title="Internet Access Policy"
            headerContent={
              <PolicyScopeEditor 
                initialSource={[{ id: 'any', name: 'Any', count: 0, type: 'network' }]}
                initialDestination={[{ id: 'internet', name: 'Any (Internet)', count: 0, type: 'network' }]}
              />
            }
            onContinue={() => setViewingPolicyDetail(null)}
            onCancel={() => setViewingPolicyDetail(null)}
            onSelectTemplate={() => {}}
            onCustomPolicy={() => {}}
          />
        </DialogContent>
      </Dialog>




    </div>
  );
}