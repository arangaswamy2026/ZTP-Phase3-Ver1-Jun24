import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Policy } from '../components/policies/PolicyData';

export type TenantStatus = 'active' | 'provisioning' | 'inactive';

export interface TenantActivationState {
  zeroTrustConnectorActivated: boolean;
  identityProviderConfigured: boolean;
  usersProvisioned: boolean;
  policiesConfigured: boolean;
}

export interface Tenant {
  id: string;
  name: string;
  status: TenantStatus;
  activationState: TenantActivationState;
}

interface TenantData {
  policies: Policy[];
  users: any[];
  dashboardMetrics: {
    totalUsers: number;
    activeUsers: number;
    totalPolicies: number;
    activePolicies: number;
    threats: number;
    connectors: number;
  };
}

interface TenantContextType {
  currentTenant: Tenant | null;
  setCurrentTenant: (tenant: Tenant) => void;
  getTenantData: () => TenantData;
  updateActivationState: (state: Partial<TenantActivationState>) => void;
  addTenantPolicy: (policy: Policy) => void;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

// Tenant definitions
export const TENANTS: Tenant[] = [
  {
    id: 'riverside',
    name: 'Riverside Dental Office',
    status: 'provisioning',
    activationState: {
      zeroTrustConnectorActivated: false,
      identityProviderConfigured: false,
      usersProvisioned: false,
      policiesConfigured: false,
    },
  },
  {
    id: 'acme',
    name: 'Acme Corporation',
    status: 'active',
    activationState: {
      zeroTrustConnectorActivated: true,
      identityProviderConfigured: true,
      usersProvisioned: true,
      policiesConfigured: true,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    status: 'active',
    activationState: {
      zeroTrustConnectorActivated: true,
      identityProviderConfigured: true,
      usersProvisioned: true,
      policiesConfigured: true,
    },
  },
  {
    id: 'cloud-innovations',
    name: 'Cloud Innovations',
    status: 'active',
    activationState: {
      zeroTrustConnectorActivated: true,
      identityProviderConfigured: true,
      usersProvisioned: true,
      policiesConfigured: true,
    },
  },
  {
    id: 'global-services',
    name: 'Global Services LLC',
    status: 'active',
    activationState: {
      zeroTrustConnectorActivated: true,
      identityProviderConfigured: true,
      usersProvisioned: true,
      policiesConfigured: true,
    },
  },
  {
    id: 'techstart',
    name: 'TechStart Inc',
    status: 'active',
    activationState: {
      zeroTrustConnectorActivated: true,
      identityProviderConfigured: true,
      usersProvisioned: true,
      policiesConfigured: true,
    },
  },
];

// Default policies for all tenants
const DEFAULT_POLICIES: Policy[] = [
  {
    id: 'zone-1',
    name: 'Allow Employee Zone to Internet',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'Default',
    description: 'Allow outbound traffic from Employee Zone',
    action: 'Allow',
    status: 'Active',
    identity: 'Employee Zone',
    resource: 'Internet',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  {
    id: 'zone-def-2',
    name: 'Restrict Guest Zone to Employee Zone',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'Default',
    description: 'Prevents users in Guest Zone from accessing any devices or resources within Employee Zone. Enforces network segmentation between guest and corporate environments.',
    action: 'Deny',
    status: 'Active',
    identity: 'Guest Zone',
    resource: 'Employee Zone',
    trustCondition: 'None',
    destination: 'All Employee Zone Devices',
    enforcement: 'Firewall',
  },
  {
    id: 'spa-def-1',
    name: 'Initial Default SPA Configuration',
    type: 'SPA',
    accessScope: 'Private',
    source: 'Default',
    description: 'Base access policy for verified corporate devices',
    action: 'Allow',
    status: 'Active',
    identity: 'Verified Devices',
    resource: 'Employee Zone',
    trustCondition: 'managed device',
    destination: 'Network: Employee Zone',
    enforcement: 'ZTC Device',
  },
  {
    id: 'sia-def-1',
    name: 'Initial Default SIA Configuration',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'Default',
    description: 'Baseline internet security and threat protection',
    action: 'Allow',
    status: 'Active',
    identity: 'All Users',
    resource: 'Malicious Sites',
    trustCondition: 'basic threat protection',
    destination: 'Category: Malware, Phishing',
    enforcement: 'Cloud Edge',
  },
];

// Acme Corporation - fully activated with additional policies
const ACME_POLICIES: Policy[] = [
  ...DEFAULT_POLICIES,
  // Zone policies
  {
    id: 'acme-zone-2',
    name: 'Block Guest to Employee Zone',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Isolate Guest network from internal resources',
    action: 'Deny',
    status: 'Active',
    identity: 'Guest Zone',
    resource: 'Employee Zone',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  {
    id: 'acme-zone-3',
    name: 'DMZ to Database Access',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Allow DMZ servers to access database zone',
    action: 'Allow',
    status: 'Active',
    identity: 'DMZ Zone',
    resource: 'Database Zone',
    trustCondition: 'None',
    destination: 'Port 3306, 5432',
    enforcement: 'Firewall',
  },
  {
    id: 'acme-zone-4',
    name: 'Block Internet to Employee Direct',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Prevent direct internet access to employee zone',
    action: 'Deny',
    status: 'Active',
    identity: 'Internet',
    resource: 'Employee Zone',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  // SIA policies
  {
    id: 'acme-sia-2',
    name: 'Block Social Media - Work Hours',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Block social media during work hours',
    action: 'Deny',
    status: 'Active',
    identity: 'All Employees',
    resource: 'Social Networking',
    trustCondition: 'None',
    destination: 'Category: Social Networking',
    enforcement: 'Cloud Edge',
  },
  {
    id: 'acme-sia-3',
    name: 'Allow Cloud Services',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Allow access to approved cloud services',
    action: 'Allow',
    status: 'Active',
    identity: 'All Users',
    resource: 'Cloud Storage',
    trustCondition: 'None',
    destination: 'Category: Cloud Storage',
    enforcement: 'Cloud Edge',
  },
  {
    id: 'acme-sia-4',
    name: 'Block File Sharing Sites',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Prevent unauthorized file sharing',
    action: 'Deny',
    status: 'Active',
    identity: 'All Users',
    resource: 'File Sharing',
    trustCondition: 'None',
    destination: 'Category: File Sharing',
    enforcement: 'Cloud Edge',
  },
  // SPA policies
  {
    id: 'acme-spa-2',
    name: 'Finance Team - ERP Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Access to ERP system for finance team',
    action: 'Allow',
    status: 'Active',
    identity: 'Finance Team',
    resource: 'erp.acme.internal',
    trustCondition: 'High Trust',
    destination: 'App: SAP ERP',
    enforcement: 'ZTC Device',
  },
  {
    id: 'acme-spa-3',
    name: 'Developer Access - GitLab',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Developer access to internal GitLab',
    action: 'Allow',
    status: 'Active',
    identity: 'Developers',
    resource: 'gitlab.acme.internal',
    trustCondition: 'Compliant Device',
    destination: 'Service: GitLab',
    enforcement: 'ZTC + Cloud',
  },
  {
    id: 'acme-spa-4',
    name: 'HR Portal Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'HR team access to employee portal',
    action: 'Allow',
    status: 'Active',
    identity: 'HR Team',
    resource: 'hr-portal.acme.internal',
    trustCondition: 'Managed Device',
    destination: 'App: HR Portal',
    enforcement: 'ZTC Device',
  },
];

// Enterprise Solutions - fully activated with different policies
const ENTERPRISE_POLICIES: Policy[] = [
  ...DEFAULT_POLICIES,
  // Zone policies
  {
    id: 'ent-zone-2',
    name: 'Production to Staging Access',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Allow production zone access to staging',
    action: 'Allow',
    status: 'Active',
    identity: 'Production Zone',
    resource: 'Staging Zone',
    trustCondition: 'None',
    destination: 'Port 443',
    enforcement: 'Firewall',
  },
  {
    id: 'ent-zone-3',
    name: 'Block External to Internal',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Block external access to internal networks',
    action: 'Deny',
    status: 'Active',
    identity: 'External Zone',
    resource: 'Internal Zone',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  {
    id: 'ent-zone-4',
    name: 'Management Network Access',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Allow management network to all zones',
    action: 'Allow',
    status: 'Active',
    identity: 'Management Zone',
    resource: 'Any Zone',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  // SIA policies
  {
    id: 'ent-sia-2',
    name: 'DLP - Sensitive Data',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Data loss prevention for sensitive content',
    action: 'Deny',
    status: 'Active',
    identity: 'All Users',
    resource: 'File Upload Sites',
    trustCondition: 'DLP Scan',
    destination: 'Category: File Sharing',
    enforcement: 'Cloud Edge',
  },
  {
    id: 'ent-sia-3',
    name: 'Executive - No Restrictions',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Allow all internet access for executives',
    action: 'Allow',
    status: 'Active',
    identity: 'Executives',
    resource: 'Any',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Cloud Edge',
  },
  {
    id: 'ent-sia-4',
    name: 'Block Cryptocurrency Sites',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Block access to cryptocurrency trading',
    action: 'Deny',
    status: 'Active',
    identity: 'All Users',
    resource: 'Cryptocurrency',
    trustCondition: 'None',
    destination: 'Category: Cryptocurrency',
    enforcement: 'Cloud Edge',
  },
  // SPA policies
  {
    id: 'ent-spa-2',
    name: 'Customer Database Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Sales team access to CRM database',
    action: 'Allow',
    status: 'Active',
    identity: 'Sales Team',
    resource: 'crm.enterprise.internal',
    trustCondition: 'High Trust',
    destination: 'Database: CRM',
    enforcement: 'ZTC Device',
  },
  {
    id: 'ent-spa-3',
    name: 'Contractor - Limited Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Limited resource access for contractors',
    action: 'Allow',
    status: 'Active',
    identity: 'Contractors',
    resource: 'contractor-portal.enterprise.internal',
    trustCondition: 'MFA Required',
    destination: 'App: Contractor Portal',
    enforcement: 'ZTC + Cloud',
  },
  {
    id: 'ent-spa-4',
    name: 'DevOps - Infrastructure Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'DevOps team access to infrastructure',
    action: 'Allow',
    status: 'Active',
    identity: 'DevOps Team',
    resource: 'infra.enterprise.internal',
    trustCondition: 'Privileged Access',
    destination: 'Infrastructure: All Servers',
    enforcement: 'ZTC Device',
  },
];

// Riverside - only default policies (provisioning state)
const RIVERSIDE_POLICIES: Policy[] = [...DEFAULT_POLICIES];

// Riverside activated - small office policies
const RIVERSIDE_ACTIVATED_POLICIES: Policy[] = [
  ...DEFAULT_POLICIES,
  {
    id: 'riv-zone-2',
    name: 'Guest WiFi Isolation',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Isolate guest WiFi from office network',
    action: 'Deny',
    status: 'Active',
    identity: 'Guest WiFi',
    resource: 'Office Network',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  {
    id: 'riv-sia-2',
    name: 'Block Adult Content',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Block inappropriate websites for dental office',
    action: 'Deny',
    status: 'Active',
    identity: 'All Users',
    resource: 'Adult Content',
    trustCondition: 'None',
    destination: 'Category: Adult',
    enforcement: 'Cloud Edge',
  },
  {
    id: 'riv-spa-2',
    name: 'Dentrix Access Policy',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Access to dental practice management system',
    action: 'Allow',
    status: 'Active',
    identity: 'Dental Staff',
    resource: 'dentrix.riverside.local',
    trustCondition: 'Managed Device',
    destination: 'App: Dentrix',
    enforcement: 'ZTC Device',
  },
];

// Cloud Innovations - tech company policies
const CLOUD_INNOVATIONS_POLICIES: Policy[] = [
  ...DEFAULT_POLICIES,
  {
    id: 'cloud-zone-2',
    name: 'Dev to Production Isolation',
    type: 'Zone',
    accessScope: 'Zone',
    source: 'User',
    description: 'Prevent dev environment from accessing production',
    action: 'Deny',
    status: 'Active',
    identity: 'Development Zone',
    resource: 'Production Zone',
    trustCondition: 'None',
    destination: 'Any',
    enforcement: 'Firewall',
  },
  {
    id: 'cloud-spa-2',
    name: 'Cloud Infrastructure Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'DevOps team access to cloud infrastructure',
    action: 'Allow',
    status: 'Active',
    identity: 'DevOps Team',
    resource: 'cloud.internal',
    trustCondition: 'MFA Required',
    destination: 'Cloud Infrastructure',
    enforcement: 'ZTC + Cloud',
  },
];

// Global Services LLC - professional services policies
const GLOBAL_SERVICES_POLICIES: Policy[] = [
  ...DEFAULT_POLICIES,
  {
    id: 'global-spa-2',
    name: 'Client Portal Access',
    type: 'SPA',
    accessScope: 'Private',
    source: 'User',
    description: 'Staff access to client management portal',
    action: 'Allow',
    status: 'Active',
    identity: 'Staff',
    resource: 'clientportal.global.internal',
    trustCondition: 'Managed Device',
    destination: 'App: Client Portal',
    enforcement: 'ZTC Device',
  },
  {
    id: 'global-sia-2',
    name: 'Compliance - Block Unauthorized Cloud',
    type: 'SIA',
    accessScope: 'Internet',
    source: 'User',
    description: 'Block unauthorized cloud storage services',
    action: 'Deny',
    status: 'Active',
    identity: 'All Users',
    resource: 'Unauthorized Cloud Storage',
    trustCondition: 'None',
    destination: 'Category: File Sharing',
    enforcement: 'Cloud Edge',
  },
];

// TechStart Inc - startup policies
const TECHSTART_POLICIES: Policy[] = [...DEFAULT_POLICIES];

export function TenantProvider({ children }: { children: ReactNode }) {
  const [currentTenant, setCurrentTenantState] = useState<Tenant>(TENANTS[0]); // Default to Riverside
  const [tenantPolicies, setTenantPolicies] = useState<{ [tenantId: string]: Policy[] }>({
    riverside: [...RIVERSIDE_POLICIES],
    acme: [...ACME_POLICIES],
    enterprise: [...ENTERPRISE_POLICIES],
    'cloud-innovations': [...CLOUD_INNOVATIONS_POLICIES],
    'global-services': [...GLOBAL_SERVICES_POLICIES],
    techstart: [...TECHSTART_POLICIES],
  });
  const [tenantActivationStates, setTenantActivationStates] = useState<{ [tenantId: string]: TenantActivationState }>({
    riverside: TENANTS[0].activationState,
    acme: TENANTS[1].activationState,
    enterprise: TENANTS[2].activationState,
    'cloud-innovations': TENANTS[3].activationState,
    'global-services': TENANTS[4].activationState,
    techstart: TENANTS[5].activationState,
  });

  const setCurrentTenant = (tenant: Tenant) => {
    // Update current tenant with the stored activation state
    const updatedTenant = {
      ...tenant,
      activationState: tenantActivationStates[tenant.id],
    };
    setCurrentTenantState(updatedTenant);
  };

  const getTenantData = (): TenantData => {
    if (!currentTenant) {
      return {
        policies: [],
        users: [],
        dashboardMetrics: {
          totalUsers: 0,
          activeUsers: 0,
          totalPolicies: 0,
          activePolicies: 0,
          threats: 0,
          connectors: 0,
        },
      };
    }

    const policies = tenantPolicies[currentTenant.id] || [];

    // Tenant-specific data
    if (currentTenant.id === 'riverside') {
      // Check if Riverside has been activated
      const isActivated = currentTenant.activationState.zeroTrustConnectorActivated && 
                         currentTenant.activationState.identityProviderConfigured;
      
      if (isActivated) {
        return {
          policies,
          users: [
            { id: 1, name: 'Dr. Maria Henderson', email: 'maria@riversidedental.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-dental-staff', deviceName: 'Maria-MacBook-Pro', lastLogin: '2/2/2026, 9:15:23 AM' },
            { id: 2, name: 'Jessica Torres', email: 'jessica@riversidedental.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Jessica-Desktop', lastLogin: '2/3/2026, 8:42:11 AM' },
            { id: 3, name: 'Mark Stevens', email: 'mark@riversidedental.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Mark-Laptop', lastLogin: '2/1/2026, 3:22:45 PM' },
          ],
          dashboardMetrics: {
            totalUsers: 12,
            activeUsers: 9,
            totalPolicies: policies.length,
            activePolicies: policies.length,
            threats: 23,
            connectors: 1,
          },
        };
      }
      
      // Not activated yet - still show dashboard with initial/placeholder data
      return {
        policies,
        users: [
          { id: 1, name: 'Dr. Maria Henderson', email: 'maria@riversidedental.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-dental-staff', deviceName: 'Maria-MacBook-Pro', lastLogin: '2/2/2026, 9:15:23 AM' },
          { id: 2, name: 'Jessica Torres', email: 'jessica@riversidedental.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Jessica-Desktop', lastLogin: '2/3/2026, 8:42:11 AM' },
          { id: 3, name: 'Mark Stevens', email: 'mark@riversidedental.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Mark-Laptop', lastLogin: '2/1/2026, 3:22:45 PM' },
        ],
        dashboardMetrics: {
          totalUsers: 12,
          activeUsers: 9,
          totalPolicies: policies.length,
          activePolicies: policies.length,
          threats: 0,
          connectors: 0,
        },
      };
    }

    if (currentTenant.id === 'acme') {
      return {
        policies,
        users: [
          { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@acme.com', role: 'Admin', status: 'Active', roles: 'admin, role-manager, auth-role-executive', deviceName: 'Sarah-ThinkPad', lastLogin: '2/3/2026, 10:23:15 AM' },
          { id: 2, name: 'Michael Chen', email: 'michael.chen@acme.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Michael-Surface', lastLogin: '2/3/2026, 9:45:22 AM' },
          { id: 3, name: 'Emily Rodriguez', email: 'emily.rodriguez@acme.com', role: 'User', status: 'Active', roles: 'user, auth-role-sales', deviceName: 'Emily-MacBook-Air', lastLogin: '2/2/2026, 4:12:33 PM' },
          { id: 4, name: 'David Park', email: 'david.park@acme.com', role: 'Manager', status: 'Active', roles: 'manager, auth-role-engineering', deviceName: 'David-Desktop', lastLogin: '2/3/2026, 8:30:12 AM' },
          { id: 5, name: 'Lisa Anderson', email: 'lisa.anderson@acme.com', role: 'User', status: 'Inactive', roles: 'user, role-device-ownership', deviceName: '-', lastLogin: '-' },
        ],
        dashboardMetrics: {
          totalUsers: 248,
          activeUsers: 186,
          totalPolicies: 12,
          activePolicies: 11,
          threats: 847,
          connectors: 3,
        },
      };
    }

    if (currentTenant.id === 'enterprise') {
      return {
        policies,
        users: [
          { id: 1, name: 'Robert Williams', email: 'robert.williams@enterprise.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-it-team', deviceName: 'Robert-ThinkPad-X1', lastLogin: '2/3/2026, 11:05:42 AM' },
          { id: 2, name: 'Jennifer Lee', email: 'jennifer.lee@enterprise.com', role: 'Admin', status: 'Active', roles: 'admin, role-security-team', deviceName: 'Jennifer-MacBook-Pro', lastLogin: '2/3/2026, 9:22:18 AM' },
          { id: 3, name: 'James Martinez', email: 'james.martinez@enterprise.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'James-Desktop', lastLogin: '2/2/2026, 2:15:33 PM' },
          { id: 4, name: 'Patricia Taylor', email: 'patricia.taylor@enterprise.com', role: 'Manager', status: 'Active', roles: 'manager, auth-role-hr-team', deviceName: 'Patricia-Surface-Pro', lastLogin: '2/3/2026, 8:55:12 AM' },
          { id: 5, name: 'Christopher Brown', email: 'christopher.brown@enterprise.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Chris-Laptop', lastLogin: '2/1/2026, 5:42:28 PM' },
        ],
        dashboardMetrics: {
          totalUsers: 1842,
          activeUsers: 1456,
          totalPolicies: 12,
          activePolicies: 12,
          threats: 2341,
          connectors: 8,
        },
      };
    }

    if (currentTenant.id === 'cloud-innovations') {
      return {
        policies,
        users: [
          { id: 1, name: 'Alex Kim', email: 'alex.kim@cloudinnovations.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-devops', deviceName: 'Alex-MacBook-Pro', lastLogin: '2/3/2026, 10:12:30 AM' },
          { id: 2, name: 'Priya Sharma', email: 'priya.sharma@cloudinnovations.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Priya-ThinkPad', lastLogin: '2/3/2026, 9:05:15 AM' },
          { id: 3, name: 'Marcus Johnson', email: 'marcus.johnson@cloudinnovations.com', role: 'Manager', status: 'Active', roles: 'manager, auth-role-engineering', deviceName: 'Marcus-Desktop', lastLogin: '2/2/2026, 3:45:22 PM' },
        ],
        dashboardMetrics: {
          totalUsers: 1240,
          activeUsers: 982,
          totalPolicies: policies.length,
          activePolicies: policies.length,
          threats: 1456,
          connectors: 5,
        },
      };
    }

    if (currentTenant.id === 'global-services') {
      return {
        policies,
        users: [
          { id: 1, name: 'Catherine Walsh', email: 'catherine.walsh@globalservices.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-management', deviceName: 'Catherine-Surface', lastLogin: '2/3/2026, 11:22:45 AM' },
          { id: 2, name: 'Daniel Cooper', email: 'daniel.cooper@globalservices.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Daniel-Laptop', lastLogin: '2/3/2026, 8:30:12 AM' },
          { id: 3, name: 'Sophia Martinez', email: 'sophia.martinez@globalservices.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Sophia-MacBook-Air', lastLogin: '2/2/2026, 4:18:33 PM' },
        ],
        dashboardMetrics: {
          totalUsers: 560,
          activeUsers: 445,
          totalPolicies: policies.length,
          activePolicies: policies.length,
          threats: 892,
          connectors: 4,
        },
      };
    }

    if (currentTenant.id === 'techstart') {
      return {
        policies,
        users: [
          { id: 1, name: 'Jake Thompson', email: 'jake@techstart.com', role: 'Admin', status: 'Active', roles: 'admin, auth-role-founder', deviceName: 'Jake-MacBook-Pro', lastLogin: '2/3/2026, 9:45:20 AM' },
          { id: 2, name: 'Emma Davis', email: 'emma@techstart.com', role: 'User', status: 'Active', roles: 'user, role-device-ownership', deviceName: 'Emma-Laptop', lastLogin: '2/3/2026, 8:15:10 AM' },
        ],
        dashboardMetrics: {
          totalUsers: 45,
          activeUsers: 38,
          totalPolicies: policies.length,
          activePolicies: policies.length,
          threats: 67,
          connectors: 1,
        },
      };
    }

    return {
      policies: [],
      users: [],
      dashboardMetrics: {
        totalUsers: 0,
        activeUsers: 0,
        totalPolicies: 0,
        activePolicies: 0,
        threats: 0,
        connectors: 0,
      },
    };
  };

  const updateActivationState = (state: Partial<TenantActivationState>) => {
    if (!currentTenant) return;

    const updatedState = {
      ...tenantActivationStates[currentTenant.id],
      ...state,
    };

    setTenantActivationStates({
      ...tenantActivationStates,
      [currentTenant.id]: updatedState,
    });

    // Check if tenant is fully activated (connector + IDP configured)
    const isFullyActivated = updatedState.zeroTrustConnectorActivated && 
                             updatedState.identityProviderConfigured;
    
    // Update tenant status to active if fully activated
    const newStatus: TenantStatus = isFullyActivated ? 'active' : currentTenant.status;

    // If Riverside just became fully activated, update its policies
    if (currentTenant.id === 'riverside' && isFullyActivated) {
      setTenantPolicies({
        ...tenantPolicies,
        riverside: [...RIVERSIDE_ACTIVATED_POLICIES],
      });
    }

    // Update current tenant
    setCurrentTenantState({
      ...currentTenant,
      activationState: updatedState,
      status: newStatus,
    });
  };

  const addTenantPolicy = (policy: Policy) => {
    if (!currentTenant) return;

    setTenantPolicies({
      ...tenantPolicies,
      [currentTenant.id]: [...tenantPolicies[currentTenant.id], policy],
    });
  };

  return (
    <TenantContext.Provider
      value={{
        currentTenant,
        setCurrentTenant,
        getTenantData,
        updateActivationState,
        addTenantPolicy,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}