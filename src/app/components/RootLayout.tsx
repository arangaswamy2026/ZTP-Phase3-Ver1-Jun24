import { Outlet, useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { TopBar, LifecycleStage } from './TopBar';
import { PrimaryNav } from './PrimaryNav';
import { SecondaryNav } from './SecondaryNav';
import { appNavItems } from './navigationData';
import { Toaster } from './ui/sonner';
import { ClientDownloadModal } from './ClientDownloadModal';
import { useTenant, TENANTS, TenantProvider } from '../contexts/TenantContext';

function RootLayoutContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentTenant, setCurrentTenant } = useTenant();
  
  const [activeApp, setActiveApp] = useState('ztp');
  const [lifecycleStage, setLifecycleStage] = useState<LifecycleStage>('operational');
  const [scopeHighlight, setScopeHighlight] = useState(false);
  const [customTenant, setCustomTenant] = useState<{ id: string; name: string } | undefined>();
  const [showClientDownloadModal, setShowClientDownloadModal] = useState(false);
  const [day0SetupType, setDay0SetupType] = useState<'wizard' | 'single-page' | 'hub'>('single-page');
  const [isAllTenantsView, setIsAllTenantsView] = useState(false);

  // Determine active page from current route
  const getActivePage = () => {
    const path = location.pathname.slice(1) || 'dashboard';
    return path;
  };

  const activePage = getActivePage();

  const handleNavigate = (pageId: string) => {
    // Only exit All Tenants view when navigating to a tenant-specific page
    const allTenantsPages = ['msp-dashboard', 'tenant-management', 'inventory', 'blocked-threats', 'all-tenants-system-status'];
    if (isAllTenantsView && !allTenantsPages.includes(pageId)) {
      setIsAllTenantsView(false);
    }
    navigate(`/${pageId}`);
  };

  const handleAppChange = (appId: string) => {
    if (appId === 'inventory') {
      window.open('/ZTP-phase-3-/product-inventory.html', '_blank');
      return;
    }
    if (appId === 'dashboard') {
      window.open('/ZTP-phase-3-/dashboard.html', '_blank');
      return;
    }

    setActiveApp(appId);

    const items = appNavItems[appId] || [];
    // Prefer dashboard if available (e.g. for ZTC), otherwise use first item
    const dashboardItem = items.find(i => i.id === 'dashboard');
    const targetItem = dashboardItem || items[0];

    if (targetItem) {
      navigate(`/${targetItem.id}`);
    }
  };

  const handleTenantChange = (newTenantId: string) => {
    // Check if "All Tenants" is selected
    if (newTenantId === 'all-tenants') {
      setIsAllTenantsView(true);
      navigate('/msp-dashboard');
      return;
    }
    
    // Reset all-tenants view
    setIsAllTenantsView(false);
    
    // Find the tenant in TENANTS
    const tenant = TENANTS.find(t => t.id === newTenantId);
    if (tenant) {
      setCurrentTenant(tenant);

      // Update lifecycle stage based on tenant status
      if (tenant.status === 'provisioning') {
        setLifecycleStage('pending-onboarding');
      } else {
        setLifecycleStage('operational');
      }
    }
    navigate('/dashboard');
  };

  const handleTenantCreated = (tenantId: string, tenantName: string) => {
    setCustomTenant({ id: tenantId, name: tenantName });
    const tenant = TENANTS.find(t => t.id === tenantId);
    if (tenant) {
      setCurrentTenant(tenant);
    }
    setScopeHighlight(true);
    setTimeout(() => setScopeHighlight(false), 2000);
  };

  const handleLifecycleDemo = (stage: LifecycleStage) => {
    setLifecycleStage(stage);
    navigate('/dashboard');
  };

  const handleDay0ViewDemo = (view: 'wizard' | 'single-page' | 'hub') => {
    setDay0SetupType(view);
    // You can store this in state and pass to Day0Setup component if needed
  };

  // Hide secondary nav only on activation page or no-activation lifecycle
  const hideSecondaryNav = activePage === 'activation' || lifecycleStage === 'no-activation';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Primary Navigation */}
      <PrimaryNav activeApp={activeApp} onAppChange={handleAppChange} />
      
      {/* Secondary Navigation - Hidden when in All Tenants view */}
      {!hideSecondaryNav && (
        <SecondaryNav
          activeApp={activeApp}
          activePage={activePage}
          onNavigate={handleNavigate}
          isAllTenantsView={isAllTenantsView}
        />
      )}
      
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar 
          selectedTenant={isAllTenantsView ? 'all-tenants' : (currentTenant?.id || 'acme')} 
          onTenantChange={handleTenantChange}
          highlightScope={scopeHighlight}
          customTenant={customTenant}
          activePage={activePage}
          onNavigate={handleNavigate}
          lifecycleStage={lifecycleStage}
          onLifecycleDemo={handleLifecycleDemo}
          onDay0ViewDemo={handleDay0ViewDemo}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-[1440px] mx-auto space-y-8">
            <Outlet context={{
              tenantScope: currentTenant?.id || 'acme',
              lifecycleStage,
              setLifecycleStage,
              onTenantCreated: handleTenantCreated,
              showClientDownloadModal,
              setShowClientDownloadModal,
              day0SetupType,
              setDay0SetupType,
              isAllTenantsView,
              onExitAllTenantsView: () => setIsAllTenantsView(false),
            }} />
          </div>
        </main>
      </div>
      
      <Toaster position="top-center" />
      <ClientDownloadModal 
        isOpen={showClientDownloadModal} 
        onClose={() => setShowClientDownloadModal(false)} 
      />
    </div>
  );
}

export function RootLayout() {
  return (
    <TenantProvider>
      <RootLayoutContent />
    </TenantProvider>
  );
}