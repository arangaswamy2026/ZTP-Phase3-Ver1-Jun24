import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  FileArchive, 
  Globe,
  TrendingUp,
  User,
  Smartphone,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useTenant } from '../contexts/TenantContext';

// Tenant-specific report data
const getTenantReportData = (tenantId: string, totalUsers: number, threats: number) => {
  const baseData = {
    riverside: {
      kpis: {
        blockedThreats: { value: 23, change: 5.2, trend: 'up' as const },
        malwareDetected: { value: 2, high: 0, medium: 1, low: 1 },
        filesQuarantined: { value: 5, timeline: [0, 1, 0, 2, 1, 0, 1], change: 2.1 },
        urlsBlocked: { value: 156, sparkline: [10, 12, 8, 15, 11, 18, 14, 12, 16, 19, 15, 22], change: 8.3 },
      },
      topUsers: [
        { name: 'maria@riversidedental.com', activity: 142, isOutlier: true },
        { name: 'jessica@riversidedental.com', activity: 89, isOutlier: false },
        { name: 'mark@riversidedental.com', activity: 67, isOutlier: false },
      ],
      topApplications: [
        { name: 'Dentrix', requests: 234 },
        { name: 'Microsoft 365', requests: 187 },
        { name: 'QuickBooks', requests: 98 },
      ],
      topDomains: [
        { domain: 'office365.com', requests: 187, risk: 'safe', classification: 'Known' },
        { domain: 'dentrix.com', requests: 134, risk: 'safe', classification: 'Known' },
        { domain: 'quickbooks.com', requests: 98, risk: 'safe', classification: 'Known' },
      ],
      policyHits: [
        { name: 'Block Adult Content', hits: 12, policyType: 'SIA' },
        { name: 'Dentrix Access Policy', hits: 234, policyType: 'SPA' },
        { name: 'Guest WiFi Isolation', hits: 45, policyType: 'Zone' },
      ],
      endpoints: [
        { device: 'DENTAL-PC-01', user: 'Maria Chen', trust: 'High', status: 'Online' },
        { device: 'OFFICE-LAPTOP', user: 'Jessica Wong', trust: 'Medium', status: 'Online' },
        { device: 'RECEPTION-PC', user: 'Mark Johnson', trust: 'High', status: 'Online' },
        { device: 'HYGIENIST-TABLET', user: 'Sarah Davis', trust: 'Low', status: 'Offline' },
        { device: 'MANAGER-LAPTOP', user: 'Robert Lee', trust: 'High', status: 'Online' },
      ],
    },
    acme: {
      kpis: {
        blockedThreats: { value: 847, change: 12.5, trend: 'up' as const },
        malwareDetected: { value: 34, high: 8, medium: 15, low: 11 },
        filesQuarantined: { value: 89, timeline: [12, 8, 15, 22, 18, 14, 89], change: 8.3 },
        urlsBlocked: { value: 3892, sparkline: [45, 52, 48, 61, 55, 58, 62, 59, 67, 71, 68, 74], change: 15.7 },
      },
      topUsers: [
        { name: 'john.smith@acme.com', activity: 2847, isOutlier: true },
        { name: 'sarah.johnson@acme.com', activity: 1523, isOutlier: false },
        { name: 'michael.chen@acme.com', activity: 1342, isOutlier: false },
        { name: 'emily.rodriguez@acme.com', activity: 1187, isOutlier: false },
        { name: 'david.park@acme.com', activity: 1034, isOutlier: false },
      ],
      topApplications: [
        { name: 'Salesforce CRM', requests: 4521 },
        { name: 'Microsoft 365', requests: 3892 },
        { name: 'Jira Software', requests: 2341 },
        { name: 'GitHub Enterprise', requests: 1876 },
        { name: 'Slack Workspace', requests: 1654 },
      ],
      topDomains: [
        { domain: 'salesforce.com', requests: 4521, risk: 'safe', classification: 'Known' },
        { domain: 'office365.com', requests: 3892, risk: 'safe', classification: 'Known' },
        { domain: 'github.com', requests: 1876, risk: 'safe', classification: 'Known' },
        { domain: 'suspicious-domain.xyz', requests: 234, risk: 'high', classification: 'Unknown' },
        { domain: 'cdn-tracker.io', requests: 156, risk: 'medium', classification: 'Unknown' },
      ],
      policyHits: [
        { name: 'Block Social Media - Work Hours', hits: 847, policyType: 'SIA' },
        { name: 'Finance Team - ERP Access', hits: 534, policyType: 'SPA' },
        { name: 'Block Guest to Employee Zone', hits: 289, policyType: 'Zone' },
        { name: 'Block File Sharing Sites', hits: 156, policyType: 'SIA' },
        { name: 'DMZ to Database Access', hits: 98, policyType: 'Zone' },
      ],
      endpoints: [
        { device: 'LAPTOP-JSmith', user: 'John Smith', trust: 'Low', status: 'Online' },
        { device: 'DESKTOP-SJohnson', user: 'Sarah Johnson', trust: 'High', status: 'Online' },
        { device: 'MOBILE-MChen', user: 'Michael Chen', trust: 'Medium', status: 'Offline' },
        { device: 'LAPTOP-ERodriguez', user: 'Emily Rodriguez', trust: 'High', status: 'Online' },
        { device: 'WORKSTATION-DPark', user: 'David Park', trust: 'Medium', status: 'Online' },
      ],
    },
    enterprise: {
      kpis: {
        blockedThreats: { value: 2341, change: 18.7, trend: 'up' as const },
        malwareDetected: { value: 87, high: 21, medium: 42, low: 24 },
        filesQuarantined: { value: 234, timeline: [28, 31, 42, 38, 45, 32, 18], change: 12.4 },
        urlsBlocked: { value: 12456, sparkline: [102, 118, 124, 135, 128, 145, 152, 148, 167, 178, 184, 192], change: 22.3 },
      },
      topUsers: [
        { name: 'admin@enterprise.com', activity: 8234, isOutlier: true },
        { name: 'robert.williams@enterprise.com', activity: 4521, isOutlier: false },
        { name: 'jennifer.lee@enterprise.com', activity: 3892, isOutlier: false },
        { name: 'james.martinez@enterprise.com', activity: 2341, isOutlier: false },
        { name: 'patricia.taylor@enterprise.com', activity: 1876, isOutlier: false },
      ],
      topApplications: [
        { name: 'Microsoft 365', requests: 8234 },
        { name: 'ServiceNow', requests: 6521 },
        { name: 'SAP ERP', requests: 4892 },
        { name: 'GitLab Enterprise', requests: 3456 },
        { name: 'Confluence', requests: 2987 },
      ],
      topDomains: [
        { domain: 'office365.com', requests: 8234, risk: 'safe', classification: 'Known' },
        { domain: 'servicenow.com', requests: 6521, risk: 'safe', classification: 'Known' },
        { domain: 'sap.com', requests: 4892, risk: 'safe', classification: 'Known' },
        { domain: 'malicious-site.ru', requests: 567, risk: 'high', classification: 'Unknown' },
        { domain: 'tracking-ads.net', requests: 423, risk: 'medium', classification: 'Unknown' },
      ],
      policyHits: [
        { name: 'DLP - Sensitive Data', hits: 1834, policyType: 'SIA' },
        { name: 'DevOps - Infrastructure Access', hits: 1245, policyType: 'SPA' },
        { name: 'Block External to Internal', hits: 892, policyType: 'Zone' },
        { name: 'Block Cryptocurrency Sites', hits: 534, policyType: 'SIA' },
        { name: 'Customer Database Access', hits: 423, policyType: 'SPA' },
      ],
      endpoints: [
        { device: 'CORP-LAPTOP-245', user: 'Robert Williams', trust: 'Low', status: 'Online' },
        { device: 'WORKSTATION-JLee', user: 'Jennifer Lee', trust: 'High', status: 'Online' },
        { device: 'MOBILE-IPHONE-034', user: 'James Martinez', trust: 'Low', status: 'Offline' },
        { device: 'DESKTOP-PTaylor', user: 'Patricia Taylor', trust: 'Medium', status: 'Online' },
        { device: 'LAPTOP-ADMIN', user: 'Admin User', trust: 'High', status: 'Online' },
      ],
    },
  };

  return baseData[tenantId as keyof typeof baseData] || baseData.acme;
};

export default function Reports() {
  const [timeRange, setTimeRange] = useState('7d');
  const { currentTenant, getTenantData } = useTenant();
  const tenantData = getTenantData();
  
  const MOCK_DATA = getTenantReportData(
    currentTenant?.id || 'acme',
    tenantData.dashboardMetrics.totalUsers,
    tenantData.dashboardMetrics.threats
  );

  return (
    <div className="space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-[#101828] leading-9">Reports</h1>
          <p className="text-base text-[#4a5565] leading-6">Security posture, risk signals, and activity insights across your tenants</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px] h-8 bg-white border-[rgba(0,0,0,0.1)]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-8 gap-2 border-[rgba(0,0,0,0.1)]">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Blocked Threats KPI */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-[21px] relative">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-[#f3f4f6] rounded-[10px]">
              <Shield className="w-5 h-5 text-[#4a5565]" />
            </div>
            <div className="flex items-center gap-1 text-[#4a5565] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">{MOCK_DATA.kpis.blockedThreats.change}%</span>
            </div>
          </div>
          <div className="text-[30px] font-bold text-[#101828] leading-9 mb-1">
            {MOCK_DATA.kpis.blockedThreats.value.toLocaleString()}
          </div>
          <div className="text-sm text-[#4a5565] leading-5">Threats Prevented</div>
          <div className="text-xs text-[#6a7282] leading-4 mt-2">
            IPS blocked exploits and attacks
          </div>
        </div>

        {/* URLs Blocked KPI */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-[21px] relative">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-[#f3f4f6] rounded-[10px]">
              <Globe className="w-5 h-5 text-[#4a5565]" />
            </div>
            <div className="flex items-center gap-1 text-[#4a5565] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">{MOCK_DATA.kpis.urlsBlocked.change}%</span>
            </div>
          </div>
          <div className="text-[30px] font-bold text-[#101828] leading-9 mb-1">
            {MOCK_DATA.kpis.urlsBlocked.value.toLocaleString()}
          </div>
          <div className="text-sm text-[#4a5565] leading-5 mb-3">URLs Blocked</div>
          {/* Sparkline */}
          <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#d1d5dc"
              strokeWidth="2"
              points={MOCK_DATA.kpis.urlsBlocked.sparkline
                .map((val, idx) => {
                  const x = (idx / (MOCK_DATA.kpis.urlsBlocked.sparkline.length - 1)) * 100;
                  const maxVal = Math.max(...MOCK_DATA.kpis.urlsBlocked.sparkline);
                  const minVal = Math.min(...MOCK_DATA.kpis.urlsBlocked.sparkline);
                  const y = 30 - ((val - minVal) / (maxVal - minVal)) * 25;
                  return `${x},${y}`;
                })
                .join(' ')}
            />
          </svg>
          <div className="text-xs text-[#6a7282] leading-4 mt-2">Web protection active</div>
        </div>
      </div>

      {/* Activity & Usage Insights + Threat & Risk Signals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
        {/* Top User Requests */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#101828]">Top User Requests</h3>
            <button className="text-sm text-[#6a7282] hover:text-[#101828]">View All</button>
          </div>
          <div className="space-y-3 flex-1">
            {MOCK_DATA.topUsers.map((user, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <User className="w-4 h-4 text-[#6a7282] shrink-0" />
                  <span className="text-sm text-[#101828] truncate">{user.name}</span>
                  {user.isOutlier && (
                    <Badge variant="outline" className="bg-[#f3f4f6] text-[#4a5565] border-[#e5e7eb] text-xs px-1.5 py-0">
                      Outlier
                    </Badge>
                  )}
                </div>
                <span className="text-sm font-medium text-[#101828] ml-2">{user.activity.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Applications Accessed */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#101828]">Top Applications Accessed</h3>
            <button className="text-sm text-[#6a7282] hover:text-[#101828]">View All</button>
          </div>
          <div className="space-y-3 flex-1">
            {MOCK_DATA.topApplications.map((app, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-[#101828] flex-1 truncate">{app.name}</span>
                <span className="text-sm font-medium text-[#101828] ml-2">{app.requests.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Domains Accessed */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#101828]">Top Domains Accessed</h3>
            <button className="text-sm text-[#6a7282] hover:text-[#101828]">View All</button>
          </div>
          <div className="space-y-3 flex-1">
            {MOCK_DATA.topDomains.map((domain, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    domain.risk === 'safe' ? 'bg-green-500' :
                    domain.risk === 'medium' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <span className="text-sm text-[#101828] truncate">{domain.domain}</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs px-1.5 py-0 ${
                      domain.classification === 'Known' 
                        ? 'bg-[#f3f4f6] text-[#4a5565] border-[#e5e7eb]' 
                        : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                    }`}
                  >
                    {domain.classification}
                  </Badge>
                </div>
                <span className="text-sm font-medium text-[#101828] ml-2">{domain.requests.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Hits */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#101828]">Policy Hits</h3>
            <button className="text-sm text-[#6a7282] hover:text-[#101828]">View All</button>
          </div>
          <div className="space-y-3 flex-1">
            {MOCK_DATA.policyHits.map((policy, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Shield className="w-4 h-4 text-[#6a7282] shrink-0" />
                  <span className="text-sm text-[#101828] truncate">{policy.name}</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs px-1.5 py-0 ${
                      policy.policyType === 'SPA' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      policy.policyType === 'SIA' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      'bg-orange-50 text-orange-700 border-orange-200'
                    }`}
                  >
                    {policy.policyType}
                  </Badge>
                </div>
                <span className="text-sm font-bold text-[#101828] ml-2">{policy.hits.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Endpoints */}
        <div className="bg-white border border-[#e5e7eb] rounded-[10px] p-5 lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-[#101828]">Endpoints</h3>
            <button className="text-sm text-[#6a7282] hover:text-[#101828]">View All</button>
          </div>
          
          {/* Table */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb]">
                  <th className="text-left text-xs font-medium text-[#6a7282] uppercase tracking-wide pb-3">Device</th>
                  <th className="text-left text-xs font-medium text-[#6a7282] uppercase tracking-wide pb-3">User</th>
                  <th className="text-left text-xs font-medium text-[#6a7282] uppercase tracking-wide pb-3">Trust</th>
                  <th className="text-left text-xs font-medium text-[#6a7282] uppercase tracking-wide pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DATA.endpoints.map((endpoint, idx) => (
                  <tr key={idx} className="border-b border-[#e5e7eb] last:border-0">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-[#6a7282] shrink-0" />
                        <span className="text-sm text-[#101828] font-medium">{endpoint.device}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className="text-sm text-[#4a5565]">{endpoint.user}</span>
                    </td>
                    <td className="py-3">
                      <Badge 
                        variant="outline"
                        className={`text-xs px-2 py-0.5 ${
                          endpoint.trust === 'High' 
                            ? 'bg-green-50 text-green-700 border-green-200' :
                          endpoint.trust === 'Medium'
                            ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            'bg-red-50 text-red-700 border-red-200'
                        }`}
                      >
                        {endpoint.trust}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          endpoint.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                        <span className="text-sm text-[#4a5565]">{endpoint.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}