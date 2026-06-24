import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { AlertCircle } from 'lucide-react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <AlertCircle className="w-16 h-16 text-gray-400 mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </Button>
    </div>
  );
}
