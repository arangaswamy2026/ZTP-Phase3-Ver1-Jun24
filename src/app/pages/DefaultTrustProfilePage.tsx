import { useNavigate } from 'react-router';
import { DeviceTrustProfile } from '../components/DeviceTrustProfile';
import { PageHeader } from '../components/PageHeader';

export function DefaultTrustProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1136px] mx-auto pb-[40px]">
      <PageHeader
        title="Default Trust Profile"
        subtitle="Configure device trust requirements for your default security posture"
        back={{ label: 'Back to Security Profiles', onClick: () => navigate('/profiles') }}
      />
      <DeviceTrustProfile
        onSave={() => navigate('/profiles')}
        onCancel={() => navigate('/profiles')}
      />
    </div>
  );
}