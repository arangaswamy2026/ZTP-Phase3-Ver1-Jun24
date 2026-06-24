import { useState, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import { ActivationLanding } from './ActivationLanding';
import { ActivationTenantSetup } from './ActivationTenantSetup';
import { ActivationPostSuccess } from './ActivationPostSuccess';
import { ActivationReviewCard } from './ActivationReviewCard';
import { ActivationIDPSetup } from './ActivationIDPSetup';
import { ActivationIDPComplete } from './ActivationIDPComplete';

export type Step = 
  | 'landing' 
  | 'review'
  | 'tenant-setup'
  | 'idp-setup'
  | 'idp-complete'
  | 'post-success';

interface ActivationFlowProps {
  onComplete: () => void;
  onContinueToSetup?: () => void;
  onTenantCreated?: (tenantId: string, tenantName: string) => void;
  onActivate?: (tenantId: string) => void;
  onAdvancedSettings?: () => void;
  preselectedTenantId?: string; // From scope selector
  initialMode?: 'select' | 'create';
  initialStep?: Step;
}

const DEFAULT_TENANTS_LIST = [
  { id: 'tenant-1', name: 'Riverside Dental Office' },
  { id: 'tenant-2', name: 'State College University' },
  { id: 'tenant-3', name: 'Global Manufacturing Corp' },
  { id: 'tenant-4', name: 'Downtown Legal Group' },
];

export function ActivationFlow({ 
  onComplete, 
  onContinueToSetup,
  onTenantCreated,
  onActivate,
  onAdvancedSettings,
  preselectedTenantId,
  initialMode,
  initialStep
}: ActivationFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>(initialStep || 'landing');
  const [activationData, setActivationData] = useState({
    activationKey: '',
    tenantId: 'tenant-1', // Default tenant
    tenantName: 'Riverside Dental Office', // Default tenant
    dataCenter: 'North America',
  });

  // Handle preselection
  useEffect(() => {
    // If specific tenant (and not "all-tenants"), prefill data
    if (preselectedTenantId && preselectedTenantId !== 'all-tenants') {
       const tenant = DEFAULT_TENANTS_LIST.find(t => t.id === preselectedTenantId);
       if (tenant) {
         setActivationData(prev => ({
           ...prev,
           tenantId: tenant.id,
           tenantName: tenant.name
         }));
       }
    } 
  }, [preselectedTenantId]);

  const handleStart = (key: string) => {
    setActivationData(prev => ({ ...prev, activationKey: key }));
    setCurrentStep('review');
  };

  const handleTenantSelected = (tenantId: string, tenantName: string, isNew?: boolean, dataCenter?: string) => {
    setActivationData(prev => ({ 
      ...prev, 
      tenantId, 
      tenantName,
      dataCenter: dataCenter || 'North America'
    }));
    if (isNew && onTenantCreated) {
      onTenantCreated(tenantId, tenantName);
    }
    setCurrentStep('review');
  };

  const handleQuickSelectTenant = (tenantId: string, tenantName: string) => {
    setActivationData(prev => ({ ...prev, tenantId, tenantName }));
  };

  const handleActivate = () => {
    // Show success toast
    toast.success("Activation successful");
    
    // Notify parent to update scope
    if (onActivate) {
      onActivate(activationData.tenantId);
    }

    // Do NOT change step here. The Review Card handles the success state internally now.
    // The user will click "Configure IDP" to move to 'idp-setup'.
  };

  const handleContinueToIDP = () => {
    setCurrentStep('idp-setup');
  };

  const handleIDPComplete = () => {
    setCurrentStep('idp-complete');
  };

  const handleIDPFinalized = () => {
    // Return to dashboard
    onComplete();
  };

  const handleContinueToDay0 = () => {
    if (onContinueToSetup) {
      onContinueToSetup();
    } else {
      onComplete();
    }
  };

  const handleReturnToDashboard = () => {
    onComplete();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'landing':
        return <ActivationLanding onStart={handleStart} />;

      case 'review':
        return (
           <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
             <ActivationReviewCard 
                tenantName={activationData.tenantName}
                tenantId={activationData.tenantId}
                activationKey={activationData.activationKey}
                dataCenter={activationData.dataCenter}
                availableTenants={DEFAULT_TENANTS_LIST}
                onBack={() => setCurrentStep('landing')}
                onActivate={handleActivate}
                onConfigureIDP={handleContinueToIDP}
                onSelectTenant={handleQuickSelectTenant}
                onCreateTenant={() => setCurrentStep('tenant-setup')} // Goes to full creation flow
             />
           </div>
        );

      case 'tenant-setup':
        return (
           <ActivationTenantSetup 
             onNext={handleTenantSelected}
             onBack={() => setCurrentStep('review')}
             preselectedTenantId={undefined}
             initialMode='create' // Force create mode since select is now inline
           />
        );

      case 'idp-setup':
        return (
           <ActivationIDPSetup 
             onComplete={handleIDPComplete}
             onSkip={handleIDPComplete}
             onAdvancedSettings={onAdvancedSettings}
             tenantName={activationData.tenantName}
           />
        );

      case 'idp-complete':
        return (
           <ActivationIDPComplete 
             onDone={handleIDPFinalized}
             onAdvancedSettings={onAdvancedSettings}
           />
        );

      case 'post-success':
        return (
          <ActivationPostSuccess
            tenantName={activationData.tenantName}
            onContinueToSetup={handleContinueToDay0}
            onReturnToDashboard={handleReturnToDashboard}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
        {renderStep()}
    </div>
  );
}