import { useNavigate } from 'react-router';
import { TenantManagement } from '../components/TenantManagement';
import { useTenant } from '../contexts/TenantContext';

export function TenantsPage() {
  const navigate = useNavigate();
  const { currentTenant } = useTenant();

  // When scope is "All tenants", show tenant management view
  // Otherwise, this page shouldn't be accessible in single-tenant scope
  return (
    <TenantManagement
      onActivateTenant={(tenantId) => {
        navigate('/activation');
      }}
      onSetupTenant={(tenantId) => {
        navigate('/policies');
      }}
    />
  );
}