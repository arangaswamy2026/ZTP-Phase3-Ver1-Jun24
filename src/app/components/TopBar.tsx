import { Search, ChevronDown, Bell, HelpCircle, Building2, Check, MapPin, Users, Layers, CheckCircle2, FlaskConical, Clock, Activity, LayoutList, LayoutGrid, Workflow, BookOpen, Settings, Rocket } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";
import { useTenant, TENANTS } from '../contexts/TenantContext';

const tenantsForDisplay = [
  { value: 'all-tenants', label: 'All Tenants', icon: Layers, isAllOption: true, location: 'Global View', userCount: null },
  { value: 'acme', label: 'Acme Corporation', icon: Building2, location: 'Portland, OR', userCount: 248 },
  { value: 'enterprise', label: 'Enterprise Solutions', icon: Building2, location: 'State College, PA', userCount: 1842 },
  { value: 'riverside', label: 'Riverside Dental Office', icon: Building2, location: 'Seattle, WA', userCount: 0 },
  { value: 'cloud-innovations', label: 'Cloud Innovations', icon: Building2, location: 'San Jose, CA', userCount: 1240 },
  { value: 'global-services', label: 'Global Services LLC', icon: Building2, location: 'New York, NY', userCount: 560 },
];

export type LifecycleStage = 
  | 'no-activation'
  | 'activated'
  | 'pending-onboarding'
  | 'awaiting-device'
  | 'operational';

interface TopBarProps {
  selectedTenant?: string;
  onTenantChange?: (tenantId: string) => void;
  highlightScope?: boolean;
  customTenant?: { id: string; name: string };
  
  activePage?: string;
  onNavigate?: (pageId: string) => void;
  lifecycleStage?: LifecycleStage;
  
  onLifecycleDemo?: (stage: LifecycleStage) => void;
  onDay0ViewDemo?: (view: 'wizard' | 'single-page' | 'hub') => void;
  onWorkflowGuideDemo?: () => void;
}

export function TopBar({ 
  selectedTenant = 'tenant-1', 
  onTenantChange,
  highlightScope,
  customTenant,
  activePage,
  onNavigate,
  lifecycleStage,
  onLifecycleDemo,
  onDay0ViewDemo,
  onWorkflowGuideDemo
}: TopBarProps) {
  const [open, setOpen] = useState(false);

  let selectedTenantData = tenantsForDisplay.find(t => t.value === selectedTenant);
  
  if (!selectedTenantData && customTenant && customTenant.id === selectedTenant) {
    selectedTenantData = {
      value: customTenant.id,
      label: customTenant.name,
      icon: Building2,
      location: 'New Location',
      userCount: 0,
      isAllOption: false
    };
  }

  const selectedTenantLabel = selectedTenantData?.label || 'Select tenant';
  const SelectedIcon = selectedTenantData?.icon;

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#0066CC] hover:underline cursor-pointer" onClick={() => onNavigate?.('dashboard')}>Home</span>
        <span className="text-gray-400">\</span>
        <span className="text-[#0066CC] hover:underline cursor-pointer" onClick={() => onNavigate?.('dashboard')}>Dashboard</span>
        <span className="text-gray-400">\</span>
        <span className="text-gray-700">System</span>
      </div>

      {/* Center: Searchable Tenant Selector */}
      <div className="flex items-center gap-3 flex-1 max-w-xl mx-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={`w-full justify-between h-9 border-gray-300 hover:border-[#0066CC] focus:border-[#0066CC] ${
                highlightScope ? 'ring-2 ring-[#0066CC] ring-offset-2 transition-all duration-300' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                {SelectedIcon && <SelectedIcon className="w-4 h-4 text-gray-500" />}
                <span className="text-gray-700">{selectedTenantLabel}</span>
              </div>
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[500px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search tenants..." className="h-9" />
              <CommandList>
                <CommandEmpty>No tenant found.</CommandEmpty>
                
                {/* Individual Tenant Options */}
                <CommandGroup heading="Organizations">
                  {tenantsForDisplay.map((tenant) => {
                      const Icon = tenant.icon;
                      return (
                        <CommandItem
                          key={tenant.value}
                          value={tenant.value}
                          keywords={[tenant.label, tenant.value, tenant.location || '']}
                          onSelect={() => {
                            onTenantChange?.(tenant.value);
                            setOpen(false);
                          }}
                          className="flex items-center justify-between cursor-pointer py-3"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {Icon && <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-gray-900">{tenant.label}</div>
                              {tenant.location && (
                                <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{tenant.location}</span>
                                  </div>
                                  {tenant.userCount && (
                                    <div className="flex items-center gap-1">
                                      <Users className="w-3 h-3" />
                                      <span>{tenant.userCount.toLocaleString()} users</span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          {selectedTenant === tenant.value && (
                            <Check className="h-4 w-4 text-[#0066CC] flex-shrink-0 ml-2" />
                          )}
                        </CommandItem>
                      );
                    })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Right: Notifications, Help, User Avatar */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
        </button>

        {/* Help */}
        <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>

        {/* User Avatar with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg transition-colors outline-none">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-[#1e3a5f] text-white text-xs">NK</AvatarFallback>
              </Avatar>
              <div className="text-left hidden md:block">
                 <div className="text-sm font-medium text-gray-700">Nathan K.</div>
                 <div className="text-xs text-gray-500">Admin</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {/* Navigation Group - Only visible if props provided */}
            {onNavigate && (
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-normal text-gray-500">Navigation</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onNavigate('activation')}>
                   <Rocket className="w-4 h-4 mr-2" />
                   Activate Service
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('advanced-settings')}>
                   <Settings className="w-4 h-4 mr-2" />
                   Advanced Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('dashboard')}>Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('policies')}>Policies</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('connectors')}>Connectors</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('identity')}>Identity</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('users')}>Users</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('diagnostics')}>Diagnostics</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('device-config')}>Device Config</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('downloads')}>Downloads</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('activity')}>Activity</DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('reports')}>Reports</DropdownMenuItem>
              </DropdownMenuGroup>
            )}

             {/* Demo Controls Group */}
            {(onLifecycleDemo || onDay0ViewDemo) && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="text-xs font-normal text-gray-500 flex items-center gap-2">
                     <FlaskConical className="h-3 w-3" /> Demo Controls
                  </DropdownMenuLabel>
                  
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Lifecycle State</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => onLifecycleDemo?.('no-activation')}>
                         Reset (No Activation)
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onLifecycleDemo?.('pending-onboarding')}>
                        <Clock className="w-4 h-4 mr-2" /> Pending Day 0
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onLifecycleDemo?.('awaiting-device')}>
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Pending Device
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => onLifecycleDemo?.('operational')}>
                        <Activity className="w-4 h-4 mr-2" /> Operational
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                     <DropdownMenuSubTrigger>Day 0 View</DropdownMenuSubTrigger>
                     <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => onDay0ViewDemo?.('wizard')}>
                           <Workflow className="w-4 h-4 mr-2" /> Wizard
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onDay0ViewDemo?.('single-page')}>
                           <LayoutGrid className="w-4 h-4 mr-2" /> Single Page
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onDay0ViewDemo?.('hub')}>
                           <LayoutList className="w-4 h-4 mr-2" /> Setup Hub
                        </DropdownMenuItem>
                     </DropdownMenuSubContent>
                  </DropdownMenuSub>

                </DropdownMenuGroup>
              </>
            )}
            
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}