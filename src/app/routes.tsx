import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { PoliciesPage } from "./pages/PoliciesPage";
import { ConnectorsPage } from "./pages/ConnectorsPage";
import { UsersPage } from "./pages/UsersPage";
import { TenantsPage } from "./pages/TenantsPage";
import { ActivationPage } from "./pages/ActivationPage";
import { AdvancedSettingsPage } from "./pages/AdvancedSettingsPage";
import { DownloadsPage } from "./pages/DownloadsPage";
import { ActivityPage } from "./pages/ActivityPage";
import { ReportsPage } from "./pages/ReportsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilesPage } from "./pages/ProfilesPage";
import { ObjectsPage } from "./pages/ObjectsPage";
import { AccessPoliciesPage } from "./pages/AccessPoliciesPage";
import { SecureAccessPolicyPage } from "./pages/SecureAccessPolicyPage";
import { DefaultTrustProfilePage } from "./pages/DefaultTrustProfilePage";
import { ZonePolicyDetailPage } from "./pages/ZonePolicyDetailPage";
import { CreateZonePolicyPage } from "./pages/CreateZonePolicyPage";
import { InternetPolicyDetailPage } from "./pages/InternetPolicyDetailPage";
import { CreateInternetPolicyPage } from "./pages/CreateInternetPolicyPage";
import { CreatePrivateAccessPolicyPage } from "./pages/CreatePrivateAccessPolicyPage";
import { PrivateAccessPolicyDetailPage } from "./pages/PrivateAccessPolicyDetailPage";
import { TenantManagementPage } from "./pages/TenantManagementPage";
import { InventoryPage } from "./pages/InventoryPage";
import { BlockedThreatsPage } from "./pages/BlockedThreatsPage";
import { EndpointsPage } from "./pages/EndpointsPage";
import { EndpointThreatsPage } from "./pages/EndpointThreatsPage";
import { TenantBlockedThreatsPage } from "./pages/TenantBlockedThreatsPage";
import { TenantTopDomainsPage } from "./pages/TenantTopDomainsPage";
import { TenantActivityLogPage } from "./pages/TenantActivityLogPage";
import { AllTenantsSystemStatusPage } from "./pages/AllTenantsSystemStatusPage";
import { NetworkPage } from "./pages/NetworkPage";
import { MspDashboardPage } from "./pages/MspDashboardPage";
import { MspTopDomainsPage } from "./pages/MspTopDomainsPage";
import { MspTrafficPage } from "./pages/MspTrafficPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "policies", Component: PoliciesPage },
      { path: "access-policies", Component: AccessPoliciesPage },
      { path: "secure-access-policy", Component: SecureAccessPolicyPage },
      { path: "profiles", Component: ProfilesPage },
      { path: "profiles/default-trust-profile", Component: DefaultTrustProfilePage },
      { path: "objects", Component: ObjectsPage },
      { path: "zone-policy/create", Component: CreateZonePolicyPage },
      { path: "zone-policy/:id", Component: ZonePolicyDetailPage },
      { path: "zone-policy/:id/edit", Component: CreateZonePolicyPage },
      { path: "internet-policy/create", Component: CreateInternetPolicyPage },
      { path: "internet-policy/:id", Component: InternetPolicyDetailPage },
      { path: "internet-policy/:id/edit", Component: CreateInternetPolicyPage },
      { path: "private-access-policy/create", Component: CreatePrivateAccessPolicyPage },
      { path: "private-access-policy/:id", Component: PrivateAccessPolicyDetailPage },
      { path: "private-access-policy/:id/edit", Component: CreatePrivateAccessPolicyPage },
      { path: "connectors", Component: ConnectorsPage },
      { path: "users", Component: UsersPage },
      { path: "tenants", Component: TenantsPage },
      { path: "msp-dashboard", Component: MspDashboardPage },
      { path: "msp-top-domains", Component: MspTopDomainsPage },
      { path: "msp-traffic", Component: MspTrafficPage },
      { path: "tenant-management", Component: TenantManagementPage },
      { path: "inventory", Component: InventoryPage },
      { path: "blocked-threats", Component: BlockedThreatsPage },
      { path: "endpoints", Component: EndpointsPage },
      { path: "endpoint-threats", Component: EndpointThreatsPage },
      { path: "tenant-blocked-threats", Component: TenantBlockedThreatsPage },
      { path: "tenant-top-domains", Component: TenantTopDomainsPage },
      { path: "tenant-activity-log", Component: TenantActivityLogPage },
      { path: "all-tenants-system-status", Component: AllTenantsSystemStatusPage },
      { path: "network", Component: NetworkPage },
      { path: "activation", Component: ActivationPage },
      { path: "advanced-settings", Component: AdvancedSettingsPage },
      { path: "downloads", Component: DownloadsPage },
      { path: "activity", Component: ActivityPage },
      { path: "reports", Component: ReportsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
], {
  // Match the Vite `base` so the app's root URL ("/ZTP-phase-3-/")
  // resolves to the index route — the Zero Trust Dashboard.
  basename: import.meta.env.BASE_URL.replace(/\/$/, ""),
});