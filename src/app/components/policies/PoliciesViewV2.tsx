import React, { useState } from 'react';
import { MOCK_POLICIES, Policy } from './PolicyData';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Search, Filter, Plus, Shield, Globe, Lock } from 'lucide-react';

interface PoliciesViewV2Props {
  onCreatePolicy: () => void;
  onEditPolicy: (id: string) => void;
}

export function PoliciesViewV2({ onCreatePolicy, onEditPolicy }: PoliciesViewV2Props) {
  const [filterType, setFilterType] = useState<'ALL' | 'SPA' | 'SIA'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPolicies = MOCK_POLICIES.filter(policy => {
    const matchesType = filterType === 'ALL' || policy.type === filterType;
    const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6">
       <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-900">Policies (Unified List)</h2>
        <p className="text-gray-500">A unified view of all security policies with quick filtering.</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
         <div className="flex items-center gap-2 w-full md:w-auto">
             <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input 
                    placeholder="Search policies..." 
                    className="pl-9" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             
             <div className="flex bg-gray-100 p-1 rounded-md">
                <button 
                    onClick={() => setFilterType('ALL')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${filterType === 'ALL' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setFilterType('SPA')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all flex items-center gap-1 ${filterType === 'SPA' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    <Lock className="w-3 h-3" /> SPA
                </button>
                <button 
                    onClick={() => setFilterType('SIA')}
                    className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all flex items-center gap-1 ${filterType === 'SIA' ? 'bg-white shadow-sm text-purple-700' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    <Globe className="w-3 h-3" /> SIA
                </button>
             </div>
         </div>

         <Button onClick={onCreatePolicy} className="bg-[#0066CC] hover:bg-[#0052A3] w-full md:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Policy
          </Button>
      </div>

      {/* Unified Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">Type</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Name</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px]">Action</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">Status</th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {filteredPolicies.map((policy) => (
                    <tr key={policy.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4">
                            {policy.type === 'SPA' ? (
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 gap-1">
                                    <Lock className="w-3 h-3" /> SPA
                                </Badge>
                            ) : (
                                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 gap-1">
                                    <Globe className="w-3 h-3" /> SIA
                                </Badge>
                            )}
                        </td>
                        <td className="py-3 px-4">
                            <div className="font-medium text-gray-900">{policy.name}</div>
                            <div className="text-xs text-gray-500 truncate max-w-[250px]">{policy.description}</div>
                        </td>
                        <td className="py-3 px-4">
                             <Badge variant={policy.action === 'Allow' ? 'outline' : 'destructive'} className={policy.action === 'Allow' ? 'border-green-200 bg-green-50 text-green-700' : ''}>
                                {policy.action}
                            </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                            {policy.destination}
                        </td>
                        <td className="py-3 px-4">
                             {policy.source === 'Default' ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                    <Shield className="w-3 h-3" /> Default
                                </span>
                             ) : (
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Custom
                                </span>
                             )}
                        </td>
                        <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${policy.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                                <span className="text-sm text-gray-600">{policy.status}</span>
                            </div>
                        </td>
                         <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => onEditPolicy(policy.id)}>
                                <span className="sr-only">Edit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}