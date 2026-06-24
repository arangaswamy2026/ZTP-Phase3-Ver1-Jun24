import React, { useState } from 'react';
import { MOCK_POLICIES, Policy } from './PolicyData';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { Search, Plus, Shield, Globe, Lock, MoreHorizontal, User } from 'lucide-react';

interface PoliciesViewV3Props {
  onCreatePolicy: () => void;
  onEditPolicy: (id: string) => void;
}

export function PoliciesViewV3({ onCreatePolicy, onEditPolicy }: PoliciesViewV3Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPolicies = MOCK_POLICIES.filter(policy => 
        policy.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        policy.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const spaPolicies = filteredPolicies.filter(p => p.type === 'SPA');
    const siaPolicies = filteredPolicies.filter(p => p.type === 'SIA');

    const renderCard = (policy: Policy) => (
        <Card key={policy.id} className={`group hover:shadow-md transition-shadow ${policy.source === 'Default' ? 'bg-gray-50/50' : 'bg-white'}`}>
            <CardHeader className="pb-3 pt-4 px-4 flex flex-row items-start justify-between space-y-0">
                 <div className="flex items-start gap-3">
                     <div className={`mt-0.5 p-1.5 rounded-md ${policy.type === 'SPA' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                         {policy.type === 'SPA' ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                     </div>
                     <div>
                         <CardTitle className="text-base font-semibold text-gray-900 leading-none mb-1.5">
                             {policy.name}
                         </CardTitle>
                         <div className="flex items-center gap-2">
                            {policy.source === 'Default' && (
                                <Badge variant="secondary" className="text-[10px] px-1.5 h-5 bg-gray-200 text-gray-700">Default</Badge>
                            )}
                            <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${policy.action === 'Allow' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {policy.action}
                            </span>
                         </div>
                     </div>
                 </div>
                 <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => onEditPolicy(policy.id)}>
                    <MoreHorizontal className="w-4 h-4" />
                 </Button>
            </CardHeader>
            <CardContent className="px-4 py-2">
                 <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-3">
                     {policy.description}
                 </p>
                 <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between py-1 border-b border-gray-100">
                        <span className="text-gray-400">Destination:</span>
                        <span className="font-medium truncate max-w-[150px]">{policy.destination}</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span className="text-gray-400">Applied To:</span>
                        <span className="font-medium truncate max-w-[150px]">{policy.users}</span>
                    </div>
                 </div>
            </CardContent>
            <CardFooter className="px-4 py-3 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${policy.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span className="text-xs font-medium text-gray-500">{policy.status}</span>
                </div>
            </CardFooter>
        </Card>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-gray-900">Policies (Card Grid)</h2>
            <p className="text-gray-500">Visual grid layout for quick policy scanning.</p>
        </div>
        <div className="flex items-center gap-3">
             <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input 
                    placeholder="Search..." 
                    className="pl-9 h-9" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <Button onClick={onCreatePolicy} size="sm" className="bg-[#0066CC] hover:bg-[#0052A3] h-9">
                <Plus className="w-4 h-4 mr-2" />
                Add Policy
            </Button>
        </div>
      </div>

      <div className="space-y-8">
         {/* SPA Section */}
         <div className="space-y-4">
             <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                 <Lock className="w-4 h-4 text-blue-600" />
                 <h3 className="font-semibold text-gray-800">Secure Private Access (SPA)</h3>
                 <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{spaPolicies.length}</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                 {spaPolicies.map(renderCard)}
             </div>
         </div>

         {/* SIA Section */}
         <div className="space-y-4">
             <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                 <Globe className="w-4 h-4 text-purple-600" />
                 <h3 className="font-semibold text-gray-800">Secure Internet Access (SIA)</h3>
                 <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{siaPolicies.length}</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                 {siaPolicies.map(renderCard)}
             </div>
         </div>
      </div>
    </div>
  );
}