import React from 'react';
import { MOCK_POLICIES, Policy } from './PolicyData';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Plus, Shield, Globe, Lock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

interface PoliciesViewV1Props {
  onCreatePolicy: () => void;
  onEditPolicy: (id: string) => void;
}

export function PoliciesViewV1({ onCreatePolicy, onEditPolicy }: PoliciesViewV1Props) {
  const spaPolicies = MOCK_POLICIES.filter(p => p.type === 'SPA');
  const siaPolicies = MOCK_POLICIES.filter(p => p.type === 'SIA');

  const renderPolicyGroup = (title: string, policies: Policy[], icon: React.ReactNode) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Badge variant="secondary" className="ml-2">{policies.length}</Badge>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="col-span-4">Policy Name</div>
          <div className="col-span-2">Action</div>
          <div className="col-span-3">Users/Group</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1 text-right">Edit</div>
        </div>
        
        {policies.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">No policies found.</div>
        ) : (
            policies.map((policy) => (
            <div key={policy.id} className="grid grid-cols-12 gap-4 p-4 border-b last:border-0 hover:bg-gray-50 transition-colors items-center">
                <div className="col-span-4">
                <div className="font-medium text-gray-900">{policy.name}</div>
                <div className="text-xs text-gray-500 truncate">{policy.description}</div>
                </div>
                <div className="col-span-2">
                <Badge variant={policy.action === 'Allow' ? 'outline' : 'destructive'} className={policy.action === 'Allow' ? 'border-green-200 bg-green-50 text-green-700' : ''}>
                    {policy.action}
                </Badge>
                </div>
                <div className="col-span-3 text-sm text-gray-600 truncate">
                {policy.users}
                </div>
                <div className="col-span-2">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${policy.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className="text-sm text-gray-600">{policy.status}</span>
                    </div>
                </div>
                <div className="col-span-1 text-right">
                <Button variant="ghost" size="sm" onClick={() => onEditPolicy(policy.id)}>
                    Edit
                </Button>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-900">Policies (Split View)</h2>
        <p className="text-gray-500">Manage your security policies separated by access type.</p>
      </div>

      <Tabs defaultValue="spa" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="spa" className="flex items-center gap-2 px-6">
              <Lock className="w-4 h-4" />
              Secure Private Access (SPA)
            </TabsTrigger>
            <TabsTrigger value="sia" className="flex items-center gap-2 px-6">
              <Globe className="w-4 h-4" />
              Secure Internet Access (SIA)
            </TabsTrigger>
          </TabsList>
          
          <Button onClick={onCreatePolicy} className="bg-[#0066CC] hover:bg-[#0052A3]">
            <Plus className="w-4 h-4 mr-2" />
            Add Policy
          </Button>
        </div>

        <TabsContent value="spa" className="space-y-8">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3 mb-6">
                <Shield className="w-5 h-5 text-[#0066CC] mt-0.5" />
                <div>
                    <h4 className="font-semibold text-[#0066CC]">SPA Configuration</h4>
                    <p className="text-sm text-blue-700 mt-1">Control access to private applications and internal resources hosted in your data centers or private clouds.</p>
                </div>
            </div>

            {renderPolicyGroup(
                'Default Configuration', 
                spaPolicies.filter(p => p.source === 'Default'),
                <Shield className="w-5 h-5 text-gray-500" />
            )}
            
            {renderPolicyGroup(
                'Custom Policies', 
                spaPolicies.filter(p => p.source === 'User'),
                <User className="w-5 h-5 text-blue-500" />
            )}
        </TabsContent>

        <TabsContent value="sia" className="space-y-8">
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex items-start gap-3 mb-6">
                <Globe className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                    <h4 className="font-semibold text-purple-600">SIA Configuration</h4>
                    <p className="text-sm text-purple-700 mt-1">Protect users from internet-based threats and control access to public web categories and SaaS applications.</p>
                </div>
            </div>

            {renderPolicyGroup(
                'Default Configuration', 
                siaPolicies.filter(p => p.source === 'Default'),
                <Shield className="w-5 h-5 text-gray-500" />
            )}
            
            {renderPolicyGroup(
                'Custom Policies', 
                siaPolicies.filter(p => p.source === 'User'),
                <User className="w-5 h-5 text-blue-500" />
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
}