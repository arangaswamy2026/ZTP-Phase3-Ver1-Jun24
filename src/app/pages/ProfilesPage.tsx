import { ProfilesView } from '../components/ProfilesView';
import { PageHeader } from '../components/PageHeader';

export function ProfilesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security Profiles"
        subtitle="Create and manage reusable security profiles to apply to access policies."
      />
      <ProfilesView />
    </div>
  );
}
