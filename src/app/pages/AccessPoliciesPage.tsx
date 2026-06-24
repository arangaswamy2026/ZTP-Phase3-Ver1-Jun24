import { AccessPoliciesView } from '../components/AccessPoliciesView';
import { PageHeader } from '../components/PageHeader';

export function AccessPoliciesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Access Policies"
        subtitle="Manage and review all your access policies across Internet, Private, and Zone-based traffic."
      />
      <AccessPoliciesView />
    </div>
  );
}
