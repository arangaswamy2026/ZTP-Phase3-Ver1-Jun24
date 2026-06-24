import { Card } from './ui/card';
import { CheckCircle2, AlertCircle, Shield, Users } from 'lucide-react';
import { useTenant } from '../contexts/TenantContext';

function Globe({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 3C10 3 7 6.5 7 10C7 13.5 10 17 10 17M10 3C10 3 13 6.5 13 10C13 13.5 10 17 10 17M3 10H17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function SummaryCards() {
  const { getTenantData } = useTenant();
  const tenantData = getTenantData();
  
  const summaryData = [
    {
      title: 'Tenant Health',
      value: '98.5%',
      change: '+2.3%',
      positive: true,
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Clients',
      value: String(tenantData.dashboardMetrics.connectors),
      subtitle: `${tenantData.dashboardMetrics.connectors} active`,
      icon: Globe,
      color: 'text-[#0066CC]',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Policy Coverage',
      value: String(tenantData.dashboardMetrics.activePolicies),
      subtitle: 'Policies enforced',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'User sessions',
      value: String(tenantData.dashboardMetrics.activeUsers),
      subtitle: `${tenantData.dashboardMetrics.activeUsers} Active`,
      change: '+5%',
      positive: true,
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {summaryData.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="p-6 rounded-lg shadow-sm border-gray-200">
            {item.title === 'Tenant Health' ? (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-green-50">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
                <div className="space-y-1">
                  <div className="text-gray-600 text-sm">ZTC Health</div>
                  <div className="text-gray-900 text-2xl">Healthy</div>
                  <div className="text-xs text-gray-500">CPU: 15% · Mem: 42%</div>
                  <div className="h-12 w-full pt-2">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="memGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 25 C 20 28, 40 15, 60 20 C 80 25, 90 18, 100 22 L 100 40 L 0 40 Z" fill="url(#memGradient)" />
                      <path d="M0 25 C 20 28, 40 15, 60 20 C 80 25, 90 18, 100 22" stroke="#2563eb" strokeWidth="1" fill="none" />
                      <path d="M0 32 C 30 35, 50 30, 70 32 C 85 33, 90 28, 100 30 L 100 40 L 0 40 Z" fill="url(#cpuGradient)" />
                      <path d="M0 32 C 30 35, 50 30, 70 32 C 85 33, 90 28, 100 30" stroke="#16a34a" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-lg ${item.bgColor}`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  {item.change && (
                    <span className={`text-xs ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-gray-600 text-sm">{item.title}</div>
                  <div className="text-gray-900 text-2xl">{item.value}</div>
                  {item.subtitle && (
                    <div className="text-xs text-gray-500">{item.subtitle}</div>
                  )}
                </div>
              </>
            )}
          </Card>
        );
      })}
    </div>
  );
}