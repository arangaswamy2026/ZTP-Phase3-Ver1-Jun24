import React from 'react';
import { IDPManagement } from '../components/IDPManagement';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/button';
import { Settings } from 'lucide-react';

export function UsersPage() {
  const [isReconfiguring, setIsReconfiguring] = React.useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        subtitle="View your configured identity source and user directory"
        actions={
          <Button variant="outline" onClick={() => setIsReconfiguring(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Reconfigure IDP
          </Button>
        }
      />
      <IDPManagement isReconfiguring={isReconfiguring} onReconfigureClose={() => setIsReconfiguring(false)} />
    </div>
  );
}
