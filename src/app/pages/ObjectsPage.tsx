import { ObjectsView } from '../components/ObjectsView';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';

export function ObjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Objects"
        subtitle="Define reusable objects for use in access policies and security rules"
        actions={
          <Button className="bg-[#FF5D00] hover:bg-[#FF5D00]/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Object
          </Button>
        }
      />
      <ObjectsView />
    </div>
  );
}
