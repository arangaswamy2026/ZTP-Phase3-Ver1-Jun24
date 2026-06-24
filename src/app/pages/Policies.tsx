import React, { useState, useEffect } from 'react';
import { MOCK_POLICIES, Policy } from '../components/policies/PolicyData';
import { ZonePolicyModal } from '../components/policies/ZonePolicyModal';
import { PrivateAccessPolicyModal } from '../components/policies/PrivateAccessPolicyModal';
import { CreateZonePolicyModal } from '../components/policies/CreateZonePolicyModal';
import { CreateInternetAccessPolicyModal } from '../components/policies/CreateInternetAccessPolicyModal';
import { CreatePrivateAccessPolicyModal } from '../components/policies/CreatePrivateAccessPolicyModal';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '../components/ui/dialog';
import { Search, Download, Eye, MoreVertical, Network, Globe, Lock, Shield, Edit, Trash2 } from 'lucide-react';
import { SIAConfigurationPreview } from '../components/policies/SIAConfigurationPreview';
import { useTenant } from '../contexts/TenantContext';
import svgPaths from '../imports/Container-4/svg-0uiu4wjgf2';

export default function Policies() {
  const { getTenantData, addTenantPolicy } = useTenant();
  const tenantData = getTenantData();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [viewingConfigurationPolicy, setViewingConfigurationPolicy] = useState<Policy | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [createZonePolicyOpen, setCreateZonePolicyOpen] = useState(false);
  const [createInternetPolicyOpen, setCreateInternetPolicyOpen] = useState(false);
  const [createPrivatePolicyOpen, setCreatePrivatePolicyOpen] = useState(false);

  const allPolicies = tenantData.policies;

  const handleRowClick = (policy: Policy) => {
    if (policy.id === 'sia-def-1') {
      setViewingConfigurationPolicy(policy);
    } else {
      setSelectedPolicy(policy);
    }
  };

  const closeSheet = () => {
    setSelectedPolicy(null);
  };

  const handleEditPolicy = (policyId: string) => {
    console.log(`Editing policy ${policyId}`);
  };

  const handleDeletePolicy = (policyId: string) => {
    console.log(`Deleting policy ${policyId}`);
  };

  const handleCreateZonePolicy = (policy: Policy) => {
    addTenantPolicy(policy);
  };

  const handleCreateInternetPolicy = (policy: Policy) => {
    addTenantPolicy(policy);
  };

  const handleCreatePrivatePolicy = (policy: Policy) => {
    addTenantPolicy(policy);
  };

  const getFilteredPolicies = (type: 'Zone' | 'SIA' | 'SPA') => {
    return allPolicies.filter(policy => {
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
  const internetPolicies = allPolicies.filter(p => p.id === 'sia-def-1' || p.type === 'SIA');
  const privatePolicies = getFilteredPolicies('SPA').filter(p => p.name === 'Policy to Access PCI Server' || p.source === 'User');

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <PageHeader
        title="Policies"
        subtitle="Manage your security policies across Internet, Private, and Zone-based traffic."
      />

      {/* Search row */}
      <div className="relative w-64">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#99a1af]" />
        <Input
          placeholder="Search policies..."
          className="pl-9 h-9 bg-white border-[rgba(0,0,0,0)] text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Zone Based Policies Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#fbead6] rounded-lg text-[#ca3500]">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#101828]">Zone Based Policies</h2>
              <p className="text-sm text-[#6a7282]">
                Controls traffic between network zones (e.g. Employee Zone, Internet, DMZ) on the Zero Trust Connector.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-[rgba(0,0,0,0.1)]" onClick={() => setCreateZonePolicyOpen(true)}>
            <Download className="w-4 h-4" />
            New Policy
          </Button>
        </div>

        {/* Zone Policies Table */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Policy Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Source Zone
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Filters and Exceptions
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Destination Zone
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {zonePolicies.map((policy) => (
                <tr 
                  key={policy.id} 
                  className="hover:bg-[#f9fafb] transition-colors cursor-pointer group"
                  onClick={() => handleRowClick(policy)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="font-medium text-[#101828] text-sm">{policy.name}</div>
                        <div className="text-xs text-[#6a7282] truncate max-w-[200px]">{policy.description}</div>
                      </div>
                      {policy.source === 'Default' && (
                        <Badge variant="secondary" className="bg-[#f3f4f6] text-[#6a7282] hover:bg-[#f3f4f6] font-medium border border-[#e5e7eb] text-[10px]">
                          Default
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#101828]">
                    {policy.identity}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#6a7282]">
                    -
                  </td>
                  <td className="py-4 px-4 text-sm text-[#101828]">
                    {policy.resource}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={policy.action === 'Allow' ? 'outline' : 'destructive'} 
                        className={
                          policy.action === 'Allow' 
                            ? 'border-[#bbf7d0] bg-[#dcfce7] text-[#16a34a] font-medium hover:bg-[#dcfce7]' 
                            : 'bg-[#fecaca] text-[#dc2626] border-[#fca5a5] hover:bg-[#fecaca]'
                        }
                      >
                        {policy.action}
                      </Badge>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Eye className="w-4 h-4 text-[#6a7282]" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <MoreVertical className="w-4 h-4 text-[#6a7282]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {zonePolicies.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#6a7282]">
                    No policies added.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Internet Access Policies Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#ede9fe] rounded-lg text-[#7c3aed]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#101828]">Internet Access Policies</h2>
              <p className="text-sm text-[#6a7282]">
                Controls user traffic destined for the public internet, including category filtering and threat protection.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-[rgba(0,0,0,0.1)]" onClick={() => setCreateInternetPolicyOpen(true)}>
            <Download className="w-4 h-4" />
            New Policy
          </Button>
        </div>

        {/* Internet Policies Table */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Policy Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Identity
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Filters and Exceptions
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Destination
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {internetPolicies.map((policy) => (
                <tr 
                  key={policy.id} 
                  className="hover:bg-[#f9fafb] transition-colors cursor-pointer group"
                  onClick={() => handleRowClick(policy)}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="font-medium text-[#101828] text-sm">{policy.name}</div>
                        <div className="text-xs text-[#6a7282] truncate max-w-[200px]">{policy.description}</div>
                      </div>
                      {policy.source === 'Default' && (
                        <Badge variant="secondary" className="bg-[#f3f4f6] text-[#6a7282] hover:bg-[#f3f4f6] font-medium border border-[#e5e7eb] text-[10px]">
                          Default
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#101828]">
                    {policy.identity}
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4a5565] hover:bg-[#f3f4f6] font-normal border border-[#e5e7eb]">
                        Categories
                      </Badge>
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4a5565] hover:bg-[#f3f4f6] font-normal border border-[#e5e7eb]">
                        Applications
                      </Badge>
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4a5565] hover:bg-[#f3f4f6] font-normal border border-[#e5e7eb]">
                        Domains
                      </Badge>
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4a5565] hover:bg-[#f3f4f6] font-normal border border-[#e5e7eb]">
                        +2
                      </Badge>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#101828]">
                    Any
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="outline"
                        className="border-[#bbf7d0] bg-[#dcfce7] text-[#16a34a] font-medium hover:bg-[#dcfce7]"
                      >
                        {policy.action}
                      </Badge>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Eye className="w-4 h-4 text-[#6a7282]" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <MoreVertical className="w-4 h-4 text-[#6a7282]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {internetPolicies.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-[#6a7282]">
                    No policies added.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Private Access Policies Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#dbeafe] rounded-lg text-[#2563eb]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#101828]">Private Access Policies</h2>
              <p className="text-sm text-[#6a7282]">
                Controls user access to internal applications and resources using Zero Trust principles.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 border-[rgba(0,0,0,0.1)]" onClick={() => setCreatePrivatePolicyOpen(true)}>
            <Download className="w-4 h-4" />
            New Policy
          </Button>
        </div>

        {/* Private Access Policies Table - UPDATED WITH FIGMA DESIGN */}
        <div className="bg-white rounded-[10px] border border-[#e5e7eb] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left py-3 px-9 text-xs font-medium text-[#6a7282] uppercase tracking-wider w-[333px]">
                  Policy Name
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider w-[297px]">
                  Source
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider w-[305px]">
                  Destination
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider w-[267px]">
                  Trust Level
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#6a7282] uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {/* Row 1: NEW - Allow Users and Groups to FQDN (From Figma Import Container-45041-60) */}
              <tr className="hover:bg-[#f9fafb] transition-colors cursor-pointer group">
                <td className="py-4 relative">
                  <div className="absolute left-0 top-[35px] w-10 h-5 flex flex-col items-start pl-2 pr-3">
                    <div className="w-full h-5 overflow-clip relative">
                      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 pl-9">
                    <div className="font-medium text-[#101828] text-base leading-6 tracking-[-0.6225px]">
                      Allow Users and Groups to FQDN
                    </div>
                    <div className="text-xs leading-4 text-[#6a7282] max-w-[278px]">
                      Allow user alice and john and engineering access to FDQN on the same network
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">Users:</span>
                    </div>
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">Alice: John</span>
                    </div>
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">Group:</span>
                    </div>
                    <div className="bg-[#f9fafb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">Engineering</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">FQDN:</span>
                    </div>
                    <div className="bg-[#f9fafb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">10.0.2.2</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm leading-5 tracking-[-0.3004px] text-[#364153]">High trust</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-[#f0fdf4] border border-[#b9f8cf] rounded-[10px] px-2 py-1">
                      <span className="text-xs leading-4 text-[#008236]">Allow</span>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <Edit className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <MoreVertical className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2: Allow Users and Groups to FQDN */}
              <tr className="hover:bg-[#f9fafb] transition-colors cursor-pointer group">
                <td className="py-4 relative">
                  <div className="absolute left-0 top-[35px] w-10 h-5 flex flex-col items-start pl-2 pr-3">
                    <div className="w-full h-5 overflow-clip relative">
                      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 pl-9">
                    <div className="font-medium text-[#101828] text-base leading-6 tracking-[-0.6225px]">
                      Allow Users and Groups to FQDN
                    </div>
                    <div className="text-xs leading-4 text-[#6a7282] max-w-[278px]">
                      Allow user alice and john and engineering access to FDQN on the same network
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">Users:</span>
                    </div>
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">Alice: John</span>
                    </div>
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">Group:</span>
                    </div>
                    <div className="bg-[#f9fafb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">Engineering</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">FQDN:</span>
                    </div>
                    <div className="bg-[#f9fafb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">10.0.2.2</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm leading-5 tracking-[-0.3004px] text-[#364153]">High trust</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-[#f0fdf4] border border-[#b9f8cf] rounded-[10px] px-2 py-1">
                      <span className="text-xs leading-4 text-[#008236]">Allow</span>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <Edit className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <MoreVertical className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3: Allow Alice and John to Host IP 10.0.0.2 */}
              <tr className="hover:bg-[#f9fafb] transition-colors cursor-pointer group">
                <td className="py-4 relative">
                  <div className="absolute left-0 top-[35px] w-10 h-5 flex flex-col items-start pl-2 pr-3">
                    <div className="w-full h-5 overflow-clip relative">
                      <div className="absolute inset-[45.83%_58.33%_45.83%_33.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[33.33%] right-[58.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[33.33%] right-[58.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[45.83%_33.33%_45.83%_58.33%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[16.67%] left-[58.33%] right-[33.33%] top-3/4">
                        <div className="absolute inset-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                            <path d={svgPaths.p3815c300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 pl-9">
                    <div className="font-medium text-[#101828] text-base leading-6 tracking-[-0.6225px]">
                      Allow Alice and John to Host IP 10.0.0.2
                    </div>
                    <div className="text-xs leading-4 text-[#6a7282] max-w-[278px]">
                      Allow user alice and john access from office to host ip 10.0.0.2 on port 22 on the same network
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                      <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                        <span className="font-semibold text-xs leading-4 text-[#6a7282]">Users:</span>
                      </div>
                      <div className="bg-[#f9fafb] px-2.5 py-1">
                        <span className="font-normal text-xs leading-4 text-[#6a7282]">Alice, John</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="inline-flex items-center overflow-hidden rounded-[8px] border border-[#e5e7eb]">
                    <div className="bg-[#f9fafb] border-r border-[#e5e7eb] px-2.5 py-1">
                      <span className="font-semibold text-xs leading-4 text-[#6a7282]">FQDN:</span>
                    </div>
                    <div className="bg-[#f9fafb] px-2.5 py-1">
                      <span className="font-normal text-xs leading-4 text-[#6a7282]">10.0.2.2</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm leading-5 tracking-[-0.3004px] text-[#364153]">High trust</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-[#f0fdf4] border border-[#b9f8cf] rounded-[10px] px-2 py-1">
                      <span className="text-xs leading-4 text-[#008236]">Allow</span>
                    </div>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <Edit className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-[10px] transition-colors border border-[rgba(0,0,0,0.1)]">
                      <MoreVertical className="w-4 h-4 text-[#0a0a0a]" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* View SIA Configuration Modal */}
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

      {/* Zone Policy Modal */}
      <ZonePolicyModal
        policy={selectedPolicy && selectedPolicy.type === 'Zone' ? selectedPolicy : null}
        isOpen={!!selectedPolicy && selectedPolicy.type === 'Zone'}
        onClose={closeSheet}
        onDelete={handleDeletePolicy}
      />

      {/* Private Access Policy Modal */}
      <PrivateAccessPolicyModal
        policy={selectedPolicy && selectedPolicy.type === 'SPA' ? selectedPolicy : null}
        isOpen={!!selectedPolicy && selectedPolicy.type === 'SPA'}
        onClose={closeSheet}
        onDelete={handleDeletePolicy}
      />

      {/* Create Zone Policy Modal */}
      <CreateZonePolicyModal
        isOpen={createZonePolicyOpen}
        onClose={() => setCreateZonePolicyOpen(false)}
        onCreate={handleCreateZonePolicy}
      />

      {/* Create Internet Access Policy Modal */}
      <CreateInternetAccessPolicyModal
        isOpen={createInternetPolicyOpen}
        onClose={() => setCreateInternetPolicyOpen(false)}
        onCreate={handleCreateInternetPolicy}
      />

      {/* Create Private Access Policy Modal */}
      <CreatePrivateAccessPolicyModal
        isOpen={createPrivatePolicyOpen}
        onClose={() => setCreatePrivatePolicyOpen(false)}
        onCreate={handleCreatePrivatePolicy}
      />
    </div>
  );
}