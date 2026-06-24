import { DownloadsView } from '../components/DownloadsView';
import { PageHeader } from '../components/PageHeader';

export function DownloadsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Downloads"
        subtitle="Download clients, agents, and tools for your ZTP deployment"
      />
      <DownloadsView />
    </div>
  );
}
