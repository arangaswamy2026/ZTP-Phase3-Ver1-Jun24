import {
  LayoutDashboard,
  Shield,
  FileText,
  Activity,
  Settings,
  Server,
  Database,
  Users,
  Fingerprint,
  Stethoscope,
  Download,
  Building2,
  Layers,
  Box,
  Monitor,
  Network,
} from 'lucide-react';

export const allTenantsNavItems: { id: string; icon: any; label: string }[] = [
  { id: 'msp-dashboard',     icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'tenant-management', icon: Building2, label: 'Tenant Management' },
  { id: 'inventory',         icon: Box,       label: 'Inventory' },
  { id: 'all-tenants-system-status',   icon: Monitor,   label: 'System Status' },
];

// Sub-navigation items for each app
export const appNavItems: Record<string, { id: string; icon: any; label: string }[]> = {
  'dashboard': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
  ],
  'inventory': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'devices', icon: Server, label: 'Devices' },
  ],
  'admin-setting': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ],
  'ztp': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'users', icon: Users, label: 'IDP' },
    { id: 'access-policies', icon: FileText, label: 'Policies' },
    { id: 'profiles', icon: Layers, label: 'Profiles' },
    { id: 'connectors', icon: Server, label: 'System Status' },
    { id: 'apps', icon: Database, label: 'Private Apps' },
    { id: 'activity', icon: Activity, label: 'Activity' },
    { id: 'network', icon: Network, label: 'Network' },
    { id: 'tenant-management', icon: Building2, label: 'Tenant Management' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ],
  'firewall': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'rules', icon: FileText, label: 'Rules' },
    { id: 'zones', icon: Shield, label: 'Zones' },
  ],
  'capture-client': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'downloads', icon: Download, label: 'Downloads' },
  ],
  'rdp': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  ],
  'ap-switch': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  ],
  'mdr': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'threats', icon: Shield, label: 'Threats' },
  ],
  'cse': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  ],
  'sami': [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  ],
};