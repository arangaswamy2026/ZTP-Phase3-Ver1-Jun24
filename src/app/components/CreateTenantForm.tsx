import { useState } from 'react';
import { Building2, MapPin, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import svgPaths from '../imports/svg-tjrudfexdk';

interface CreateTenantFormProps {
  onBack?: () => void;
  onCreate?: (tenantData: TenantFormData) => void;
}

export interface TenantFormData {
  tenantName: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  additionalNotes: string;
  dataCenter: string;
}

function TenantIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.p837ff00} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p128a9480} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p28d96f80} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 8H18.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 13.3333H18.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 18.6667H18.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 24H18.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

export function CreateTenantForm({ onBack, onCreate }: CreateTenantFormProps) {
  const [formData, setFormData] = useState<TenantFormData>({
    tenantName: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    additionalNotes: '',
    dataCenter: 'north-america',
  });

  const handleInputChange = (field: keyof TenantFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (onCreate) {
      onCreate(formData);
    }
  };

  return (
    <div className="bg-white rounded-[10px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] p-[33px] max-w-[896px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-center">
          <div className="bg-[#eff6ff] rounded-full size-[64px] flex items-center justify-center">
            <TenantIcon />
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="font-['Inter'] font-bold text-[30px] leading-[45px] tracking-[0.3955px] text-[#101828] mb-2">
            Create New Tenant
          </h1>
          <p className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] text-[#4a5565]">
            Set up a new organization
          </p>
        </div>
      </div>

      {/* Preview Card */}
      <div className="bg-[rgba(239,246,255,0.3)] border-2 border-[#06c] rounded-[14px] p-[18px] mb-6">
        <div className="flex items-start gap-8">
          <div className="relative shrink-0 size-[20px] mt-[2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g clipPath="url(#clip0_preview)">
                <path d={svgPaths.p37143280} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1d7f0000} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p2b722f80} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 5H11.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 8.33333H11.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 11.6667H11.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M8.33333 15H11.6667" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
              <defs>
                <clipPath id="clip0_preview">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
          </div>
          
          <div className="flex flex-col gap-1">
            {formData.tenantName && (
              <p className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.3125px] text-[#101828]">
                {formData.tenantName}
              </p>
            )}
            
            {formData.city && (
              <div className="flex items-center gap-2">
                <MapPin className="size-3 text-[#4a5565]" />
                <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#4a5565]">
                  {formData.city}
                </p>
              </div>
            )}
            
            {formData.dataCenter && (
              <div className="flex items-center gap-2">
                <Globe className="size-3 text-[#4a5565]" />
                <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#4a5565]">
                  {formData.dataCenter === 'north-america' ? 'North America' : 
                   formData.dataCenter === 'europe' ? 'Europe' : 
                   formData.dataCenter === 'asia-pacific' ? 'Asia Pacific' : 'North America'}
                </p>
              </div>
            )}
            
            {!formData.tenantName && !formData.city && !formData.dataCenter && (
              <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.1504px] text-[#9ca3af] italic">
                Preview will appear as you fill in the form
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Tenant Name */}
        <div className="space-y-2">
          <Label htmlFor="tenantName" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
            Tenant Name <span className="text-[#fb2c36]">*</span>
          </Label>
          <Input
            id="tenantName"
            placeholder="Eg: Riverside dental office"
            value={formData.tenantName}
            onChange={(e) => handleInputChange('tenantName', e.target.value)}
            className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px] placeholder:font-bold placeholder:text-[#717182] placeholder:opacity-50"
          />
        </div>

        {/* Company Information Section */}
        <div className="pt-4">
          <h2 className="font-['Inter'] font-bold text-[19px] tracking-[-0.1504px] text-[#364153] mb-6">
            Company information
          </h2>

          <div className="space-y-6">
            {/* Company Name and Contact Name */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Company Name <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactName" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Contact Name <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => handleInputChange('contactName', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Email <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Phone <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="Eg: +1-123123462"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px] placeholder:text-[#717182] placeholder:opacity-50"
                />
              </div>
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <Label htmlFor="streetAddress" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                Street Address <span className="text-[#fb2c36]">*</span>
              </Label>
              <Input
                id="streetAddress"
                value={formData.streetAddress}
                onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  City <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  State <span className="text-[#fb2c36]">*</span>
                </Label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger className="h-[46px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="california">California</SelectItem>
                    <SelectItem value="texas">Texas</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="florida">Florida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Zip Code and Country */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Zip <span className="text-[#fb2c36]">*</span>
                </Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="h-[44px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                  Country <span className="text-[#fb2c36]">*</span>
                </Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger className="h-[46px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="united-states">United States</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="additionalNotes" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                placeholder="Brief description of this tenant's purpose..."
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="min-h-[64px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px] placeholder:text-[#717182]"
              />
            </div>
          </div>
        </div>

        {/* Data Center Location Section */}
        <div className="pt-4">
          <h2 className="font-['Inter'] font-bold text-[19px] tracking-[-0.1504px] text-[#364153] mb-6">
            Data center location
          </h2>

          <div className="space-y-2">
            <Label htmlFor="dataCenter" className="font-['Inter'] font-medium text-[14px] leading-[14px] tracking-[-0.1504px] text-[#364153]">
              Select data center <span className="text-[#fb2c36]">*</span>
            </Label>
            <Select value={formData.dataCenter} onValueChange={(value) => handleInputChange('dataCenter', value)}>
              <SelectTrigger className="h-[36px] bg-[#f3f3f5] border-0 rounded-[8px] font-['Inter'] text-[14px] tracking-[-0.1504px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-3 mt-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 h-[36px] bg-white border border-[rgba(0,0,0,0.1)] rounded-[8px] font-['Inter'] font-medium text-[14px] tracking-[-0.1504px] text-[#0a0a0a]"
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex-1 h-[36px] bg-[#06c] rounded-[8px] font-['Inter'] font-medium text-[14px] tracking-[-0.1504px] text-white hover:bg-[#0052a3]"
        >
          Create & Select Tenant
        </Button>
      </div>
    </div>
  );
}