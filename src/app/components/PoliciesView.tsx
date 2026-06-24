import React, { useState } from 'react';
import { MOCK_POLICIES, Policy } from './policies/PolicyData';
import { PolicyBuilder } from './PolicyBuilder';
import { Day0PolicyBuilder } from './Day0PolicyBuilder';
import { PolicyTemplates, PolicyTemplate } from './PolicyTemplates';
import { PolicyWorkflowGuide } from './PolicyWorkflowGuide';
import { SIAPolicyConfig } from './policies/SIAPolicyConfig';
import { ZonePolicyModal } from './policies/ZonePolicyModal';
import { PrivateAccessPolicyModal } from './policies/PrivateAccessPolicyModal';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription,
  SheetFooter
} from './ui/sheet';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from './ui/dialog';
import { Search, Plus, Shield, Globe, Lock, MoreHorizontal, Copy, Trash2, Edit, Network, CheckCircle2, XCircle, ArrowRight, Smartphone, Cloud, LayoutGrid, Eye } from 'lucide-react';
import { TooltipProvider } from './ui/tooltip';
import { SIAConfigurationPreview } from './policies/SIAConfigurationPreview';

export function PoliciesView() {
  // State for Policy Views
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [editingPolicyId, setEditingPolicyId] = useState<string | undefined>();
  const [showWorkflowGuide, setShowWorkflowGuide] = useState(false);
  const [useDay0Builder, setUseDay0Builder] = useState(true);
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<PolicyTemplate | undefined>();
  
  // Create SIA Policy Modal State
  const [isCreateSIAOpen, setIsCreateSIAOpen] = useState(false);
  
  // View SIA Configuration Policy (Read-Only)
  const [viewingConfigurationPolicy, setViewingConfigurationPolicy] = useState<Policy | null>(null);

  // State for Preview Sheet
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);

  const [searchTerm, setSearchTerm] = useState('');

  // Handlers for Views
  const handleCreatePolicy = () => {
    // For now, let's just assume the user wants to create a SIA policy or show the templates
    setEditingPolicyId(undefined);
    setShowTemplates(true);
  };
  
  const handleOpenSIAModal = () => {
    setIsCreateSIAOpen(true);
  };

  const handleSelectTemplate = (template: PolicyTemplate) => {
    setSelectedTemplate(template);
    setShowTemplates(false);
    setIsBuilderOpen(true);
  };

  const handleCustomPolicy = () => {
    setSelectedTemplate(undefined);
    setShowTemplates(false);
    setIsBuilderOpen(true);
  };

  const handleViewConfiguration = (policy: Policy) => {
    setViewingConfigurationPolicy(policy);
  };

  const handleEditPolicy = (policyId: string) => {
    setEditingPolicyId(policyId);
    setIsBuilderOpen(true);
    setSelectedPolicy(null); // Close sheet if editing
  };

  const handleClonePolicy = (policyId: string) => {
    console.log(`Cloning policy ${policyId}`);
  };

  const handleDeletePolicy = (policyId: string) => {
    console.log(`Deleting policy ${policyId}`);
  };

  const handleBack = () => {
    setIsBuilderOpen(false);
    setShowTemplates(false);
    setEditingPolicyId(undefined);
    setSelectedTemplate(undefined);
  };

  const handleSave = () => {
    console.log('Saving policy...');
    setIsBuilderOpen(false);
    setShowTemplates(false);
    setEditingPolicyId(undefined);
    setSelectedTemplate(undefined);
  };
  
  const handleRowClick = (policy: Policy) => {
    if (policy.id === 'sia-def-1') {
      handleViewConfiguration(policy);
      return;
    }
    setSelectedPolicy(policy);
  };

  const closeSheet = () => {
    setSelectedPolicy(null);
  };

  // Views Logic
  if (showWorkflowGuide) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => setShowWorkflowGuide(false)}>
            ← Back to Policies
          </Button>
        </div>
        <PolicyWorkflowGuide />
      </div>
    );
  }

  if (showTemplates) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => setShowTemplates(false)}>
            ← Back to Policies
          </Button>
        </div>
        <PolicyTemplates 
          onSelectTemplate={handleSelectTemplate}
          onCustomPolicy={handleCustomPolicy}
        />
      </div>
    );
  }

  if (isBuilderOpen) {
    if (useDay0Builder) {
      return (
        <Day0PolicyBuilder
          policyId={editingPolicyId}
          onBack={handleBack}
          onSave={handleSave}
        />
      );
    }
    return (
      <PolicyBuilder
        policyId={editingPolicyId}
        onBack={handleBack}
        onSave={handleSave}
      />
    );
  }

  // --- Main Policy List View ---

  // Filtering Logic
  const getFilteredPolicies = (type: 'Zone' | 'SIA' | 'SPA') => {
    return MOCK_POLICIES.filter(policy => {
      const matchesType = policy.type === type;
      const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            policy.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    }).sort((a, b) => {
        if (a.source === b.source) return 0;
        return a.source === 'User' ? -1 : 1;
    });
  };

  const zonePolicies = getFilteredPolicies('Zone');
  
  // Custom override for demo state
  const internetPolicies = MOCK_POLICIES.filter(p => p.id === 'sia-def-1');
  const privatePolicies = getFilteredPolicies('SPA');

  const getEnforcementIcon = (enforcement: string) => {
    if (enforcement === 'ZTC Device') return <Smartphone className="w-4 h-4 text-indigo-600" />;
    if (enforcement === 'Cloud Edge') return <Cloud className="w-4 h-4 text-sky-600" />;
    if (enforcement === 'ZTC + Cloud') return <LayoutGrid className="w-4 h-4 text-violet-600" />;
    return <Network className="w-4 h-4 text-orange-600" />;
  };

  const PolicyTable = ({ policies, type }: { policies: Policy[], type: 'Zone' | 'SIA' | 'SPA' }) => {
    const isZone = type === 'Zone';
    
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-[250px]">Policy Name</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isZone ? 'Source Zone' : 'Identity'}
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Filters and Exceptions
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                {isZone ? 'Destination Zone' : 'Destination'}
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {policies.map((policy) => (
              <tr 
                key={policy.id} 
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => handleRowClick(policy)}
              >
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-900">{policy.name}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[200px]">{policy.description}</div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {policy.identity}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {type === 'SIA' && policy.id === 'sia-def-1' ? (
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal border border-gray-200">Categories</Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal border border-gray-200">Applications</Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal border border-gray-200">Domains</Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal border border-gray-200">Geo</Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal border border-gray-200">Risk URL</Badge>
                      </div>
                  ) : (
                    policy.trustCondition && policy.trustCondition !== 'None' ? (
                       <Badge variant="outline" className="text-gray-600 border-gray-200 font-normal">{policy.trustCondition}</Badge>
                    ) : (
                       <span className="text-gray-400">-</span>
                    )
                  )}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {isZone ? policy.resource : policy.destination}
                </td>
                <td className="py-3 px-4">
                  <Badge 
                    variant={policy.action === 'Allow' ? 'outline' : 'destructive'} 
                    className={policy.action === 'Allow' ? 'border-green-200 bg-green-50 text-green-700 font-normal' : ''}
                  >
                    {policy.action}
                  </Badge>
                </td>
              </tr>
            ))}
            {policies.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No policies added.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const renderPolicyExplanation = (policy: Policy) => {
    const isAllow = policy.action === 'Allow';
    const actionText = isAllow ? 'ALLOWS' : 'BLOCKS';
    const actionColor = isAllow ? 'text-green-700' : 'text-red-700';
    
    return (
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm leading-relaxed">
        <p className="font-medium text-gray-900 mb-2">What this policy does:</p>
        <p className="text-gray-700">
          This policy <span className={`font-bold ${actionColor}`}>{actionText}</span> traffic 
          initiated by <span className="font-semibold text-gray-900">{policy.identity}</span> targeting <span className="font-semibold text-gray-900">{policy.resource || policy.destination}</span>.
        </p>
        {policy.trustCondition && policy.trustCondition !== 'None' && (
           <p className="text-gray-700 mt-2">
             Traffic is only allowed if the device/user meets the <span className="font-semibold text-indigo-700">"{policy.trustCondition}"</span> condition.
           </p>
        )}
      </div>
    );
  };

  const renderPolicyDetailsContent = (policy: Policy) => (
    <div className="py-6 space-y-6">
      {/* English Explanation */}
      {renderPolicyExplanation(policy)}

      {/* Flow Visualization */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-gray-900">Traffic Flow</h4>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white">
            <div className="flex flex-col items-center gap-1 text-center w-1/3">
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  {policy.type === 'Zone' ? <Network className="w-4 h-4"/> : <Shield className="w-4 h-4"/>}
               </div>
               <span className="text-xs font-medium text-gray-900">{policy.identity}</span>
               <span className="text-[10px] text-gray-500 uppercase">Source</span>
            </div>

            <div className="flex flex-col items-center gap-1 w-1/3">
               <div className={`h-0.5 w-full ${policy.action === 'Allow' ? 'bg-green-500' : 'bg-red-500'}`}></div>
               <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${policy.action === 'Allow' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {policy.action.toUpperCase()}
               </div>
            </div>

            <div className="flex flex-col items-center gap-1 text-center w-1/3">
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  {policy.type === 'SIA' ? <Globe className="w-4 h-4"/> : policy.type === 'SPA' ? <Lock className="w-4 h-4"/> : <Network className="w-4 h-4"/>}
               </div>
               <span className="text-xs font-medium text-gray-900">{policy.resource || policy.destination}</span>
               <span className="text-[10px] text-gray-500 uppercase">Destination</span>
            </div>
        </div>
      </div>

      {/* Detailed Fields */}
      <div className="space-y-4">
         <h4 className="text-sm font-bold text-gray-900">Policy Details</h4>
         <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="p-3 bg-gray-50 rounded-md">
               <dt className="text-xs font-medium text-gray-500 uppercase">Source</dt>
               <dd className="mt-1 text-sm font-medium text-gray-900">{policy.identity}</dd>
            </div>
            <div className="p-3 bg-gray-50 rounded-md">
               <dt className="text-xs font-medium text-gray-500 uppercase">Destination</dt>
               <dd className="mt-1 text-sm font-medium text-gray-900">{policy.resource || policy.destination}</dd>
            </div>

            {policy.type === 'Zone' ? (
              <>
                <div className="p-3 bg-gray-50 rounded-md">
                   <dt className="text-xs font-medium text-gray-500 uppercase">Source Address</dt>
                   <dd className="mt-1 text-sm font-medium text-gray-900">Any</dd>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                   <dt className="text-xs font-medium text-gray-500 uppercase">Destination Address</dt>
                   <dd className="mt-1 text-sm font-medium text-gray-900">Any</dd>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                   <dt className="text-xs font-medium text-gray-500 uppercase">Source Port</dt>
                   <dd className="mt-1 text-sm font-medium text-gray-900">Any</dd>
                </div>
                <div className="p-3 bg-gray-50 rounded-md">
                   <dt className="text-xs font-medium text-gray-500 uppercase">Destination Port</dt>
                   <dd className="mt-1 text-sm font-medium text-gray-900">Any</dd>
                </div>

              </>
            ) : (
              <>
                <div className="p-3 bg-gray-50 rounded-md">
                   <dt className="text-xs font-medium text-gray-500 uppercase">Trust Level</dt>
                   <dd className="mt-1 text-sm font-medium text-gray-900">
                     {(() => {
                        const condition = policy.trustCondition.toLowerCase();
                        if (condition.includes('high')) return 'High';
                        if (condition.includes('compliant') || condition.includes('managed')) return 'Medium';
                        if (condition === 'none') return 'None';
                        return 'Low';
                     })()}
                   </dd>
                </div>

              </>
            )}
         </dl>
      </div>
    </div>
  );

  const renderPolicyActions = (policy: Policy) => (
    <div className="flex w-full gap-2">
       <Button className="w-full" variant="outline" onClick={() => handleEditPolicy(policy.id)}>
          <Edit className="w-4 h-4 mr-2" /> Edit Policy
       </Button>
       <Button className="w-full text-red-600 hover:text-red-700 hover:bg-red-50" variant="ghost" onClick={() => handleDeletePolicy(policy.id)}>
          <Trash2 className="w-4 h-4 mr-2" /> Delete
       </Button>
    </div>
  );

  const defaultSIAPolicy = MOCK_POLICIES.find(p => p.id === 'sia-def-1');

  return (
    <TooltipProvider>
      <div className="space-y-8 pb-10">
        
        {/* Header & Controls */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-gray-900">Policies</h2>
              <p className="text-gray-500">Manage your security policies across all vectors.</p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative w-full md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                      placeholder="Search policies..." 
                      className="pl-9 h-9 bg-white" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               

            </div>
         </div>

         {/* Zone Based Policies Section */}
         <section className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="p-1.5 bg-orange-100 rounded-md text-orange-700">
                  <Network className="w-4 h-4" />
               </div>
               <h3 className="text-lg font-bold text-gray-900">Zone Based Policies</h3>
            </div>
            <div className="flex items-center gap-2 p-3 bg-orange-50 text-orange-800 rounded-md border border-orange-100 text-sm">
               <p>Controls traffic between network zones (e.g. Employee Zone, Internet, DMZ) on the Zero Trust Connector.</p>
            </div>
            <PolicyTable policies={zonePolicies} type="Zone" />
         </section>
         
         {/* Internet Access Policies Section */}
         <section className="space-y-4">
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
               <div className="p-1.5 bg-purple-100 rounded-md text-purple-700">
                  <Globe className="w-4 h-4" />
               </div>
               <h3 className="text-lg font-bold text-gray-900">Internet Access Policies</h3>
            </div>
            <div className="flex items-center gap-2 p-3 bg-purple-50 text-purple-800 rounded-md border border-purple-100 text-sm">
               <p>Controls user traffic destined for the public internet, including category filtering and threat protection.</p>
            </div>
            <PolicyTable policies={internetPolicies} type="SIA" />
         </section>
         
         {/* Private Access Policies Section */}
         <section className="space-y-4">
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
               <div className="p-1.5 bg-blue-100 rounded-md text-blue-700">
                  <Lock className="w-4 h-4" />
               </div>
               <h3 className="text-lg font-bold text-gray-900">Private Access Policies</h3>
            </div>
            <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-800 rounded-md border border-blue-100 text-sm">
               <p>Controls user access to internal applications and resources using Zero Trust principles.</p>
            </div>
            <PolicyTable policies={privatePolicies.filter(p => p.name === 'Policy to Access PCI Server')} type="SPA" />
         </section>


        
        {/* Create SIA Policy Modal */}
        <Dialog open={isCreateSIAOpen} onOpenChange={setIsCreateSIAOpen}>
           <DialogContent className="max-w-[1920px] w-[80vw] max-h-[90vh] p-0 overflow-y-auto flex flex-col">
              <DialogHeader className="p-6 pb-2 shrink-0">
                 <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Create Internet Access Policy
                 </DialogTitle>
                 <DialogDescription>
                    Configure Secure Internet Access (SIA) policy to protect users from web-based threats.
                 </DialogDescription>
              </DialogHeader>
              
              <div className="flex-1 min-h-0">
                 <SIAPolicyConfig 
                    onCancel={() => setIsCreateSIAOpen(false)} 
                    onSave={(policy) => {
                       console.log('Saved policy:', policy);
                       setIsCreateSIAOpen(false);
                    }} 
                 />
              </div>
           </DialogContent>
        </Dialog>

        {/* View SIA Configuration Read-Only Modal */}
        {viewingConfigurationPolicy && (
           <Dialog open={!!viewingConfigurationPolicy} onOpenChange={(open) => !open && setViewingConfigurationPolicy(null)}>
             <DialogContent className="min-w-[60vw] w-[60vw] sm:max-w-[60vw] max-h-[90vh] p-0 overflow-y-auto flex flex-col">
               <DialogHeader className="p-6 pb-2 shrink-0 border-b border-gray-100 bg-white sticky top-0 z-10">
                  <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-purple-600 bg-purple-50 border-purple-200">Internet Policy</Badge>
                      <Badge variant="default" className="bg-green-600 hover:bg-green-700">Active</Badge>
                   </div>
                   <DialogTitle className="text-xl">{viewingConfigurationPolicy.name}</DialogTitle>
                   <DialogDescription>
                     {viewingConfigurationPolicy.description}
                   </DialogDescription>
               </DialogHeader>
               
               <div className="flex-1 bg-white p-6">
                 <SIAConfigurationPreview />
               </div>

               <DialogFooter className="border-t border-gray-100 p-6 bg-gray-50 sticky bottom-0 z-10">
                  <Button variant="outline" onClick={() => setViewingConfigurationPolicy(null)}>
                     Close
                  </Button>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        )}

        {/* Policy Details Sheet (Internet only) - Side Panel */}
        <Sheet open={!!selectedPolicy && selectedPolicy.type !== 'Zone' && selectedPolicy.type !== 'SPA'} onOpenChange={(open) => !open && closeSheet()}>
          <SheetContent className="w-[600px] sm:w-[600px] sm:max-w-[600px] p-0 flex flex-col h-full bg-white border-l border-gray-200">
             {selectedPolicy && selectedPolicy.type !== 'Zone' && selectedPolicy.type !== 'SPA' && (
               <>
                 <SheetHeader className="p-6 pb-2 shrink-0 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                       <Badge variant="outline" className={
                           selectedPolicy.type === 'SPA' ? 'text-blue-600 bg-blue-50 border-blue-200' :
                           selectedPolicy.type === 'Zone' ? 'text-orange-600 bg-orange-50 border-orange-200' :
                           'text-purple-600 bg-purple-50 border-purple-200'
                       }>
                          {selectedPolicy.type === 'SPA' ? 'Private Access Policy' : 
                           selectedPolicy.type === 'Zone' ? 'Zone Policy' : 'Internet Policy'}
                       </Badge>
                       <Badge variant={selectedPolicy.action === 'Allow' ? 'outline' : 'destructive'} 
                              className={selectedPolicy.action === 'Allow' ? 'border-green-200 bg-green-50 text-green-700' : ''}>
                          {selectedPolicy.status}
                       </Badge>
                    </div>
                    <SheetTitle className="text-xl text-gray-900">{selectedPolicy.name}</SheetTitle>
                    <SheetDescription className="text-gray-500">
                       {selectedPolicy.description}
                    </SheetDescription>
                 </SheetHeader>
                 
                 <div className="flex-1 overflow-y-auto px-6">
                    {renderPolicyDetailsContent(selectedPolicy)}
                 </div>

                 <SheetFooter className="p-6 border-t border-gray-100 bg-gray-50 mt-auto">
                    {renderPolicyActions(selectedPolicy)}
                 </SheetFooter>
               </>
             )}
          </SheetContent>
        </Sheet>

        {/* Private Access Policy Details - Centered Modal */}
        <PrivateAccessPolicyModal
          policy={selectedPolicy && selectedPolicy.type === 'SPA' ? selectedPolicy : null}
          isOpen={!!selectedPolicy && selectedPolicy.type === 'SPA'}
          onClose={closeSheet}
          onDelete={handleDeletePolicy}
        />

        {/* Zone Policy Details - Centered Modal */}
        <ZonePolicyModal
          policy={selectedPolicy && selectedPolicy.type === 'Zone' ? selectedPolicy : null}
          isOpen={!!selectedPolicy && selectedPolicy.type === 'Zone'}
          onClose={closeSheet}
          onDelete={handleDeletePolicy}
        />
      </div>
    </TooltipProvider>
  );
}