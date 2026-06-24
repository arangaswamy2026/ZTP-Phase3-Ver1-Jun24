import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { ActivityTable } from '../components/ActivityTable';

export function TenantActivityLogPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 w-full pb-10">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1 text-[13px] font-medium text-[#0066cc] hover:text-[#0052a6] transition-colors self-start"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <ActivityTable />
    </div>
  );
}
