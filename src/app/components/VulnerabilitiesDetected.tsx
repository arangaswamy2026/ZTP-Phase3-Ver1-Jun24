import { Card } from './ui/card';
import { ShieldAlert, AlertTriangle, AlertCircle } from 'lucide-react';

const vulnerabilities = [
  { severity: 'Critical', count: 3, color: 'text-red-600', bg: 'bg-red-50', icon: ShieldAlert },
  { severity: 'High', count: 12, color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertTriangle },
  { severity: 'Medium', count: 45, color: 'text-yellow-600', bg: 'bg-yellow-50', icon: AlertCircle },
  { severity: 'Low', count: 128, color: 'text-blue-600', bg: 'bg-blue-50', icon: AlertCircle },
];

export function VulnerabilitiesDetected() {
  return (
    <Card className="p-6 rounded-lg shadow-sm border-gray-200 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-900 font-bold">Vulnerabilities</h3>
          <p className="text-sm text-gray-500">Detected security risks by severity</p>
        </div>
        <span className="text-xs text-[#0066CC] font-medium cursor-pointer hover:underline">View Report</span>
      </div>
      <div className="space-y-3">
        {vulnerabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.severity} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${item.bg}`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.severity}</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">{item.count}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}