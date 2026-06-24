import { ConnectorsView } from '../components/ConnectorsView';
import { PageHeader } from '../components/PageHeader';

export function ConnectorsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Connectors"
        subtitle="Monitor the health and connectivity of your ZTP infrastructure"
      />
      <ConnectorsView />
    </div>
  );
}
