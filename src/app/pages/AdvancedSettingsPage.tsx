import { useNavigate } from 'react-router';
import { AdvancedSettings } from '../components/AdvancedSettings';
import { PageHeader } from '../components/PageHeader';

export function AdvancedSettingsPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Advanced Settings"
        subtitle="Configure advanced ZTP deployment options"
        back={{ label: 'Back to Settings', onClick: () => navigate(-1) }}
      />
      <AdvancedSettings />
    </div>
  );
}
