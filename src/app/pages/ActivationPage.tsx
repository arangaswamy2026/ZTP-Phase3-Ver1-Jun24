import { useNavigate, useOutletContext } from 'react-router';
import { ActivationFlow } from '../components/activation/ActivationFlow';
import { toast } from 'sonner@2.0.3';
import type { LifecycleStage } from '../components/TopBar';

interface OutletContext {
  setLifecycleStage: (stage: LifecycleStage) => void;
  onTenantCreated: (tenantId: string, tenantName: string) => void;
}

export function ActivationPage() {
  const navigate = useNavigate();
  const { setLifecycleStage, onTenantCreated } = useOutletContext<OutletContext>();

  const handleActivationComplete = () => {
    setLifecycleStage('pending-onboarding');
    navigate('/dashboard');
    toast.success("Service Activated Successfully", { 
      description: "Default configuration has been applied." 
    });
  };

  const handleContinueToSetup = () => {
    // Navigate to day 0 setup or configuration
    navigate('/dashboard');
  };

  const handleAdvancedSettings = () => {
    navigate('/advanced-settings');
  };

  return (
    <ActivationFlow 
      onComplete={handleActivationComplete}
      onContinueToSetup={handleContinueToSetup}
      onTenantCreated={onTenantCreated}
      onActivate={(tenantId) => {}}
      onAdvancedSettings={handleAdvancedSettings}
      initialMode="create"
      initialStep="landing"
    />
  );
}