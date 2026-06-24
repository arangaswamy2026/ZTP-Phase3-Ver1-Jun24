import { useState } from 'react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Search, Info } from 'lucide-react';

type ActivationStatus = 'Active' | 'Pending Setup';

interface Tenant {
  id: string;
  name: string;
  activationStatus: ActivationStatus;
  licenses: number;
  policies?: number;
  users?: number;
  activationDate: string;
  lastActivity?: string;
}

// Mock data matching Figma design
const mockTenants: Tenant[] = [
  {
    id: 'tenant-1',
    name: 'Acme Corporation',
    activationStatus: 'Active',
    licenses: 20,
    policies: 8,
    users: 6,
    activationDate: '14 Oct 2026',
    lastActivity: '2 hrs ago',
  },
  {
    id: 'tenant-2',
    name: 'Enterprise Solutions',
    activationStatus: 'Active',
    licenses: 20,
    policies: 10,
    users: 9,
    activationDate: '19 Sep 2026',
    lastActivity: '5 mins ago',
  },
  {
    id: 'tenant-3',
    name: 'Cloud Innovations',
    activationStatus: 'Pending Setup',
    licenses: 20,
    activationDate: '27 Oct 2026',
  },
  {
    id: 'tenant-4',
    name: 'Global Services LLC',
    activationStatus: 'Active',
    licenses: 20,
    activationDate: '2 Nov 2026',
  },
];

interface TenantManagementProps {
  onActivateTenant?: (tenantId: string) => void;
  onSetupTenant?: (tenantId: string) => void;
  title?: string;
  description?: string;
}

export function TenantManagement({ onActivateTenant, onSetupTenant, title, description }: TenantManagementProps) {
  const [tenants] = useState<Tenant[]>(mockTenants);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Filter tenants
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || tenant.activationStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const renderActionButton = (tenant: Tenant) => {
    if (tenant.activationStatus === 'Pending Setup') {
      return (
        <button
          onClick={() => onSetupTenant?.(tenant.id)}
          className="bg-white border border-[#e5e7eb] rounded-[8px] h-[32px] px-[16px] flex items-center justify-center hover:bg-[#f9fafb]"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
            Continue Setup
          </span>
        </button>
      );
    }
    
    return (
      <button
        className="bg-white border border-[#e5e7eb] rounded-[8px] h-[32px] px-[16px] flex items-center justify-center hover:bg-[#f9fafb]"
      >
        <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
          View Details
        </span>
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-['Inter',sans-serif] font-medium text-[30px] leading-[45px] text-[#101828]">
          {title || 'Tenant Management'}
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] text-[#4a5565]">
          {description || 'Monitor activation status across all your managed tenants'}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-[16px]">
        <div className="relative w-[302px]">
          <Search className="w-[16px] h-[16px] absolute left-[12px] top-[10px] text-[#99A1AF]" />
          <Input
            placeholder="Search tenants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-[36px] pr-[12px] py-[4px] bg-[#f3f3f5] border border-[#e5e7eb] rounded-[10px] h-[36px] font-['Inter',sans-serif] text-[14px] tracking-[-0.1504px] text-[#717182] placeholder:text-[#717182]"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[224px] bg-[#f3f3f5] border border-[#e5e7eb] rounded-[10px] h-[36px] px-[13px] py-[1px]">
            <SelectValue placeholder="All Activation Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Activation Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Pending Setup">Pending Setup</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden w-full">
        <div className="w-full">
          {/* Header */}
          <div className="bg-[#f9fafb] border-b border-[#e5e7eb]">
            <div className="flex items-center px-[18px] py-[12px]">
              <div className="flex-1 min-w-[240px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Tenant Name
                </p>
              </div>
              <div className="w-[233px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Activation Status
                </p>
              </div>
              <div className="w-[122px] flex justify-center">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Licenses
                </p>
              </div>
              <div className="w-[110px] flex justify-center">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Policies
                </p>
              </div>
              <div className="w-[90px] flex items-center justify-center gap-[4px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Users
                </p>
                <Info className="w-[14px] h-[14px] text-[#9CA3AF]" />
              </div>
              <div className="w-[192px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Activation Date
                </p>
              </div>
              <div className="w-[177px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Last Activity
                </p>
              </div>
              <div className="w-[274px] flex justify-end pr-[8px]">
                <p className="font-['Inter',sans-serif] font-medium text-[11px] leading-[16px] tracking-[0.5px] uppercase text-[#6a7282]">
                  Actions
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            {filteredTenants.map((tenant, index) => (
              <div
                key={tenant.id}
                className={`flex items-center px-[18px] py-[14.5px] hover:bg-[#fafafa] ${
                  index !== filteredTenants.length - 1 ? 'border-b border-[rgba(0,0,0,0.1)]' : ''
                }`}
              >
                {/* Tenant Name */}
                <div className="flex-1 min-w-[240px]">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
                    {tenant.name}
                  </p>
                </div>

                {/* Activation Status */}
                <div className="w-[233px]">
                  {tenant.activationStatus === 'Active' ? (
                    <div className="inline-flex items-center gap-[4px] bg-[#d1fae5] rounded-[8px] px-[9px] py-[1px] h-[22px]">
                      <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip0)">
                          <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#10B981"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M4.5 6L5.5 7L7.5 5" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#065f46]">
                        Active
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-[4px] bg-[#dbeafe] rounded-[8px] px-[9px] py-[1px] h-[22px]">
                      <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip1)">
                          <path
                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                            stroke="#1447E6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M6 3.5V6.5" stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 8.5H6.005" stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip1">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#1447e6]">
                        Pending Setup
                      </span>
                    </div>
                  )}
                </div>

                {/* Licenses */}
                <div className="w-[122px] flex justify-center">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
                    {tenant.licenses}
                  </p>
                </div>

                {/* Policies */}
                <div className="w-[110px] flex justify-center">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
                    {tenant.policies !== undefined ? tenant.policies : '---'}
                  </p>
                </div>

                {/* Users */}
                <div className="w-[90px] flex justify-center">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#0a0a0a]">
                    {tenant.users !== undefined ? tenant.users : '---'}
                  </p>
                </div>

                {/* Activation Date */}
                <div className="w-[192px]">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#4a5565]">
                    {tenant.activationDate}
                  </p>
                </div>

                {/* Last Activity */}
                <div className="w-[177px]">
                  <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#4a5565]">
                    {tenant.lastActivity || '---'}
                  </p>
                </div>

                {/* Actions */}
                <div className="w-[274px] flex justify-end pr-[8px]">
                  {renderActionButton(tenant)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center">
        <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] text-[#6a7282]">
          Showing 1-5 of 10 records | 10 per page
        </p>
      </div>
    </div>
  );
}
