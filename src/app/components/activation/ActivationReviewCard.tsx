import { useState } from 'react';
import svgPaths from "../../imports/svg-deaxz0tuqe";
import { Button } from "../ui/button";
import { Edit2, ChevronDown, Check, Plus, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";

interface ActivationReviewCardProps {
  tenantName: string;
  tenantId: string;
  activationKey: string;
  availableTenants: { id: string; name: string }[];
  dataCenter?: string;
  onBack: () => void;
  onActivate: () => void;
  onConfigureIDP: () => void;
  onSelectTenant: (tenantId: string, tenantName: string) => void;
  onCreateTenant: () => void;
}

export function ActivationReviewCard({
  tenantName,
  tenantId,
  activationKey,
  availableTenants,
  dataCenter,
  onBack,
  onActivate,
  onConfigureIDP,
  onSelectTenant,
  onCreateTenant,
}: ActivationReviewCardProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isActivating, setIsActivating] = useState(false);

  const handleConfirm = () => {
    setIsActivating(true);
    // Simulate a minor intentional delay (≈1200ms)
    setTimeout(() => {
        setIsActivating(false);
        onActivate();
        setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-[702px] w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
               {/* Shield Icon */}
               <div className="w-8 h-8">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p5e65600} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  </svg>
               </div>
            </div>
          </div>
          <h2 className="text-xl font-medium text-[#101828] mb-2 font-bold text-[24px]">Review & Activate</h2>
          <p className="text-[#4a5565] text-sm">Review the license and tenant details before activating</p>
        </div>

        <div className="space-y-6">
          {/* Tenant Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-[10px] border border-gray-200 flex items-center justify-center shrink-0">
                  {/* Building Icon */}
                  <div className="w-6 h-6">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.pfb16970} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p13754d00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p281e4940} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 6H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 10H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 14H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M10 18H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  </div>
              </div>
              <div>
                  <div className="text-[#6a7282] text-xs font-medium uppercase tracking-wide mb-1">Activating for Tenant</div>
                  <div className="text-[#101828] text-lg font-semibold">{tenantName}</div>
                  <div className="text-xs text-gray-500">ID: {tenantId} • Data Center: {dataCenter || 'North America'}</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 shrink-0 items-end">
               <Button variant="outline" size="sm" className="text-gray-400 border-gray-200 cursor-not-allowed opacity-50">
                   Change <ChevronDown className="w-3 h-3 ml-2" />
               </Button>
            </div>
          </div>

          {/* License Card */}
          <div className="bg-[#eff6ff4d] border border-gray-200 rounded-xl p-6">
             <div className="flex justify-between items-start">
               <div className="mb-6">
                 <h3 className="text-[#101828] text-lg font-bold mb-1">ZTC Enterprise Edition</h3>
                 <p className="text-[#4a5565] text-sm">SKU: ZTC-ENT-1000</p>
               </div>
               {/* Checkmark Icon */}
               <div className="w-6 h-6 text-[#0066CC] shrink-0">
                  <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1f023100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
               </div>
             </div>

             <div className="border-t border-[#bedbff80] pt-4 grid grid-cols-2 gap-4">
               <div>
                 <p className="text-[#6a7282] text-sm mb-1">License Capacity</p>
                 <div className="flex items-center gap-2">
                   {/* Users Icon */}
                   <div className="w-4 h-4">
                     <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                       <path d={svgPaths.p32887f80} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d={svgPaths.p3b6ee540} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d={svgPaths.p188b8380} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d={svgPaths.p3694d280} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     </svg>
                   </div>
                   <span className="text-[#101828] font-medium">20 Users</span>
                 </div>
               </div>
               <div>
                 <p className="text-[#6a7282] text-sm mb-1">Expiration</p>
                 <div className="flex items-center gap-2">
                   {/* Calendar Icon */}
                   <div className="w-4 h-4">
                     <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                       <path d="M5.33333 1.33333V4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d="M10.6667 1.33333V4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d={svgPaths.p3ee34580} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                       <path d="M2 6.66667H14" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     </svg>
                   </div>
                   <span className="text-[#101828] font-medium">10/29/2026</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Activation Key Verification */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
            <div>
              <div className="text-[#4a5565] text-xs mb-1">Activation Key</div>
              <div className="text-[#101828] text-sm font-medium tracking-wide font-mono">{activationKey || 'ABCD-1234-EFGH-5678'}</div>
            </div>
            <div className="bg-white border border-gray-200/50 rounded-lg px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">
              Verified
            </div>
          </div>

          {/* Inline Success Message and Actions */}
          <div className="animate-in fade-in slide-in-from-top-2 duration-500 space-y-4">
             <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-lg p-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-green-900">Activation Successful</h4>
                   <p className="text-xs text-green-700">The service has been successfully activated for this tenant.</p>
                </div>
             </div>
             
             {/* Provisioning Message */}
             <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center gap-3">
                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-blue-900">Provisioning in progress</h4>
                    <p className="text-xs text-blue-700">We’re setting up services for your tenant.</p>
                 </div>
             </div>
             
             <div className="pt-2">
               <Button 
                 onClick={onConfigureIDP}
                 className="w-full bg-[#0066CC] hover:bg-[#0052A3] h-11 text-base gap-2 shadow-sm"
               >
                 Configure Identity Provider
                 <div className="w-4 h-4">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                       <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                       <path d="M12 5L19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                 </div>
               </Button>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-[702px] w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
             {/* Shield Icon */}
             <div className="w-8 h-8">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p5e65600} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </svg>
             </div>
          </div>
        </div>
        <h2 className="text-xl font-medium text-[#101828] mb-2">Review & Activate</h2>
        <p className="text-[#4a5565] text-sm">Review the license and tenant details before activating</p>
      </div>

      <div className="space-y-6">
        {/* Tenant Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-[10px] border border-gray-200 flex items-center justify-center shrink-0">
                {/* Building Icon */}
                <div className="w-6 h-6">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.pfb16970} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p13754d00} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p281e4940} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10 6H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10 10H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10 14H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M10 18H14" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                </div>
            </div>
            <div>
                <div className="text-[#6a7282] text-xs font-medium uppercase tracking-wide mb-1">Activating for Tenant</div>
                <div className="text-[#101828] text-lg font-semibold">{tenantName}</div>
                <div className="text-xs text-gray-500">ID: {tenantId} • Data Center: {dataCenter || 'North America'}</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 shrink-0 items-end">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                        Change <ChevronDown className="w-3 h-3 ml-2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[280px]">
                    <DropdownMenuLabel>Select Tenant</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="max-h-[200px] overflow-y-auto">
                        {availableTenants.map(t => (
                            <DropdownMenuItem key={t.id} onClick={() => onSelectTenant(t.id, t.name)}>
                                <span className={`flex-1 ${t.id === tenantId ? "font-bold" : ""}`}>{t.name}</span>
                                {t.id === tenantId && <Check className="w-4 h-4 text-blue-600 ml-2" />}
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator />
                     <DropdownMenuItem onClick={onCreateTenant} className="text-[#0066CC] font-medium cursor-pointer">
                        <Plus className="w-4 h-4 mr-2" />
                        Create New Tenant
                    </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>

        {/* License Card */}
        <div className="bg-[#eff6ff4d] border border-gray-200 rounded-xl p-6">
           <div className="flex justify-between items-start">
             <div className="mb-6">
               <h3 className="text-[#101828] text-lg font-bold mb-1">ZTC Enterprise Edition</h3>
               <p className="text-[#4a5565] text-sm">SKU: ZTC-ENT-1000</p>
             </div>
             {/* Checkmark Icon */}
             <div className="w-6 h-6 text-[#0066CC] shrink-0">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1f023100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
             </div>
           </div>

           <div className="border-t border-[#bedbff80] pt-4 grid grid-cols-2 gap-4">
             <div>
               <p className="text-[#6a7282] text-sm mb-1">License Capacity</p>
               <div className="flex items-center gap-2">
                 {/* Users Icon */}
                 <div className="w-4 h-4">
                   <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                     <path d={svgPaths.p32887f80} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d={svgPaths.p3b6ee540} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d={svgPaths.p188b8380} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d={svgPaths.p3694d280} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                   </svg>
                 </div>
                 <span className="text-[#101828] font-medium">20 Users</span>
               </div>
             </div>
             <div>
               <p className="text-[#6a7282] text-sm mb-1">Expiration</p>
               <div className="flex items-center gap-2">
                 {/* Calendar Icon */}
                 <div className="w-4 h-4">
                   <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                     <path d="M5.33333 1.33333V4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d="M10.6667 1.33333V4" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d={svgPaths.p3ee34580} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                     <path d="M2 6.66667H14" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                   </svg>
                 </div>
                 <span className="text-[#101828] font-medium">10/29/2026</span>
               </div>
             </div>
           </div>
        </div>

        {/* Activation Key Verification */}
        <div className="space-y-2">
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-between">
            <div>
                <div className="text-[#4a5565] text-xs mb-1">Activation Key</div>
                <div className="text-[#101828] text-sm font-medium tracking-wide font-mono">{activationKey || 'ABCD-1234-EFGH-5678'}</div>
            </div>
            <div className="bg-white border border-gray-200/50 rounded-lg px-2 py-1 text-xs font-medium text-gray-900 shadow-sm">
                Verified
            </div>
            </div>
            
            {/* Inline Activation Status */}
            {isActivating && (
              <div className="flex items-center gap-2 px-1 animate-in fade-in slide-in-from-top-1 duration-300">
                <Loader2 className="w-3 h-3 text-[#0066CC] animate-spin" />
                <span className="text-xs text-[#0066CC] font-medium">Activation in progress. This usually takes a few seconds.</span>
              </div>
            )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <button 
            onClick={onBack}
            disabled={isActivating}
            className="flex-1 bg-white border border-gray-200 rounded-lg h-9 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button 
            onClick={handleConfirm}
            disabled={isActivating}
            className="flex-1 bg-[#0066CC] rounded-lg h-11 text-base font-medium text-white hover:bg-[#0052A3] transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isActivating && <Loader2 className="w-4 h-4 animate-spin" />}
            {isActivating ? 'Activating...' : 'Confirm & Activate'}
          </button>
        </div>
      </div>
    </div>
  );
}