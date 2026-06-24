import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  FileArchive, 
  Globe,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  Download,
  User,
  Smartphone,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// Mock data for the dashboard
const MOCK_DATA = {
  kpis: {
    blockedThreats: {
      value: 1247,
      change: 12.5,
      trend: 'up' as const,
      previousPeriod: 1110
    },
    malwareDetected: {
      value: 34,
      high: 8,
      medium: 15,
      low: 11,
      change: -5.2,
      trend: 'down' as const
    },
    filesQuarantined: {
      value: 89,
      timeline: [12, 8, 15, 22, 18, 14, 89], // Last 7 days
      change: 8.3,
      trend: 'up' as const
    },
    urlsBlocked: {
      value: 3892,
      sparkline: [45, 52, 48, 61, 55, 58, 62, 59, 67, 71, 68, 74],
      change: 15.7,
      trend: 'up' as const
    }
  },
  topUsers: [
    { name: 'john.smith@acme.com', activity: 2847, baseline: 1200, isOutlier: true },
    { name: 'sarah.jones@acme.com', activity: 1523, baseline: 1400, isOutlier: false },
    { name: 'mike.chen@acme.com', activity: 1342, baseline: 1100, isOutlier: false },
    { name: 'lisa.brown@acme.com', activity: 1187, baseline: 1150, isOutlier: false },
    { name: 'david.wilson@acme.com', activity: 1034, baseline: 1000, isOutlier: false }
  ],
  topApplications: [
    { name: 'Salesforce CRM', icon: '🔵', requests: 4521, trend: 5.2 },
    { name: 'Microsoft 365', icon: '📧', requests: 3892, trend: -2.1 },
    { name: 'Jira Software', icon: '🎯', requests: 2341, trend: 12.8 },
    { name: 'GitHub Enterprise', icon: '💻', requests: 1876, trend: 3.4 },
    { name: 'Slack Workspace', icon: '💬', requests: 1654, trend: -1.2 }
  ],
  topDomains: [
    { domain: 'salesforce.com', requests: 4521, risk: 'safe', classification: 'Known' },
    { domain: 'office365.com', requests: 3892, risk: 'safe', classification: 'Known' },
    { domain: 'github.com', requests: 1876, risk: 'safe', classification: 'Known' },
    { domain: 'suspicious-domain.xyz', requests: 234, risk: 'high', classification: 'Unknown' },
    { domain: 'cdn-tracker.io', requests: 156, risk: 'medium', classification: 'Unknown' }
  ],
  policyHits: [
    { name: 'Block Unauthorized Cloud Storage', hits: 847, policyType: 'SIA' },
    { name: 'Require MFA for Admin Access', hits: 234, policyType: 'SPA' },
    { name: 'Prevent Data Exfiltration', hits: 189, policyType: 'Zone' },
    { name: 'Block High-Risk Categories', hits: 156, policyType: 'SIA' },
    { name: 'Geo-Restriction Policy', hits: 98, policyType: 'Zone' }
  ],
  postureFailures: {
    total: 23,
    critical: 5,
    warning: 12,
    info: 6,
    devices: [
      { name: 'LAPTOP-JSmith', issues: ['Outdated AV', 'Missing Patch'], severity: 'critical' },
      { name: 'DESKTOP-MBrown', issues: ['Firewall Disabled'], severity: 'critical' },
      { name: 'MOBILE-SJones', issues: ['Jailbroken Device'], severity: 'critical' }
    ]
  },
  deploymentStatus: {
    agentsDeployed: { completed: 87, total: 100, percentage: 87 },
    policiesApplied: { completed: 95, total: 100, percentage: 95 },
    trafficInspected: { completed: 92, total: 100, percentage: 92 },
    threatsBlocked: { completed: 100, total: 100, percentage: 100 }
  }
};

export function ZeroTrustAnalytics() {
  const [timeRange, setTimeRange] = useState('7d');
  const [riskFilter, setRiskFilter] = useState('all');

  const maxActivity = Math.max(...MOCK_DATA.topUsers.map(u => u.activity));
  const maxRequests = Math.max(...MOCK_DATA.topApplications.map(a => a.requests));
  const maxDomainRequests = Math.max(...MOCK_DATA.topDomains.map(d => d.requests));
  const maxPolicyHits = Math.max(...MOCK_DATA.policyHits.map(p => p.hits));

  return (
    <div className="space-y-6 pb-10">
      {/* Global Controls - Sticky */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 -mx-6 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">Time Range</label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[140px] h-9 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">Last 24 hours</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-700">Risk Level</label>
              <Select value={riskFilter} onValueChange={setRiskFilter}>
                <SelectTrigger className="w-[140px] h-9 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export Snapshot
          </Button>
        </div>
      </div>

      {/* Summary KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Blocked Threats KPI */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Shield className="w-5 h-5 text-gray-600" />
            </div>
            {MOCK_DATA.kpis.blockedThreats.trend === 'up' ? (
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">{MOCK_DATA.kpis.blockedThreats.change}%</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <TrendingDown className="w-4 h-4" />
                <span className="font-medium">{MOCK_DATA.kpis.blockedThreats.change}%</span>
              </div>
            )}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {MOCK_DATA.kpis.blockedThreats.value.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Threats Prevented</div>
          <div className="text-xs text-gray-500 mt-2">
            IPS blocked exploits and attacks
          </div>
        </div>

        {/* Malware Detected KPI */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {MOCK_DATA.kpis.malwareDetected.value}
          </div>
          <div className="text-sm text-gray-600 mb-3">Malware Detected</div>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-600">High</span>
                <span className="font-medium text-gray-900">{MOCK_DATA.kpis.malwareDetected.high}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-800 rounded-full"
                  style={{ width: `${(MOCK_DATA.kpis.malwareDetected.high / MOCK_DATA.kpis.malwareDetected.value) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-600">Med</span>
                <span className="font-medium text-gray-900">{MOCK_DATA.kpis.malwareDetected.medium}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-600 rounded-full"
                  style={{ width: `${(MOCK_DATA.kpis.malwareDetected.medium / MOCK_DATA.kpis.malwareDetected.value) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-600">Low</span>
                <span className="font-medium text-gray-900">{MOCK_DATA.kpis.malwareDetected.low}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-400 rounded-full"
                  style={{ width: `${(MOCK_DATA.kpis.malwareDetected.low / MOCK_DATA.kpis.malwareDetected.value) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Files Quarantined KPI */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FileArchive className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">{MOCK_DATA.kpis.filesQuarantined.change}%</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {MOCK_DATA.kpis.filesQuarantined.value}
          </div>
          <div className="text-sm text-gray-600 mb-3">Files Quarantined</div>
          {/* Mini timeline */}
          <div className="flex items-end gap-0.5 h-8">
            {MOCK_DATA.kpis.filesQuarantined.timeline.map((val, idx) => {
              const maxVal = Math.max(...MOCK_DATA.kpis.filesQuarantined.timeline);
              const heightPercent = (val / maxVal) * 100;
              return (
                <div 
                  key={idx}
                  className="flex-1 bg-gray-300 rounded-sm transition-all hover:bg-gray-500"
                  style={{ height: `${heightPercent}%`, minHeight: '4px' }}
                  title={`${val} files`}
                />
              );
            })}
          </div>
          <div className="text-xs text-gray-500 mt-2">Last 7 days</div>
        </div>

        {/* URLs Blocked KPI */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Globe className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">{MOCK_DATA.kpis.urlsBlocked.change}%</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {MOCK_DATA.kpis.urlsBlocked.value.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 mb-3">URLs Blocked</div>
          {/* Sparkline */}
          <svg className="w-full h-8" viewBox="0 0 100 30" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#6b7280"
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
          <div className="text-xs text-gray-500 mt-2">Web protection active</div>
        </div>
      </div>

      {/* Activity & Usage Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Users */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Top Users</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
              View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {MOCK_DATA.topUsers.map((user, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded transition-colors"
                title={user.isOutlier ? "User activity significantly above tenant average" : ""}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-sm text-gray-900 truncate">{user.name}</span>
                    {user.isOutlier && (
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300 text-xs px-1.5 py-0">
                        Outlier
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{user.activity.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Applications */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Top Applications</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
              View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {MOCK_DATA.topApplications.map((app, idx) => (
              <div 
                key={idx}
                className="group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-base shrink-0">{app.icon}</span>
                    <span className="text-sm text-gray-900 truncate">{app.name}</span>
                    <div className={`flex items-center gap-0.5 text-xs ${app.trend > 0 ? 'text-gray-600' : 'text-gray-500'}`}>
                      {app.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span>{Math.abs(app.trend)}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{app.requests.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Domains */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Top Domains</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
              View All <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {MOCK_DATA.topDomains.map((domain, idx) => (
              <div 
                key={idx}
                className="group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${
                      domain.risk === 'safe' ? 'bg-green-500' :
                      domain.risk === 'medium' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <span className="text-sm text-gray-900 truncate">{domain.domain}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs px-1.5 py-0 ${
                        domain.classification === 'Known' 
                          ? 'bg-gray-50 text-gray-700 border-gray-200' 
                          : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }`}
                    >
                      {domain.classification}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{domain.requests.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat & Risk Signals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Policy Hits */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Policy Hits</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
              View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {MOCK_DATA.policyHits.map((policy, idx) => (
              <div 
                key={idx}
                className="group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Shield className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="text-sm text-gray-900 truncate">{policy.name}</span>
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
                  <span className="text-sm font-bold text-gray-900">{policy.hits.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Posture Failures */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900">Posture Failures</h3>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 h-8 px-2">
              Remediate <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-red-700">{MOCK_DATA.postureFailures.critical}</div>
              <div className="text-xs text-red-600 mt-1">Critical</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-yellow-700">{MOCK_DATA.postureFailures.warning}</div>
              <div className="text-xs text-yellow-600 mt-1">Warning</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-700">{MOCK_DATA.postureFailures.info}</div>
              <div className="text-xs text-blue-600 mt-1">Info</div>
            </div>
          </div>

          {/* Device List */}
          <div className="space-y-2">
            <div className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">
              Devices Requiring Attention
            </div>
            {MOCK_DATA.postureFailures.devices.map((device, idx) => (
              <div 
                key={idx}
                className="group cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors border border-gray-100"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{device.name}</span>
                  </div>
                  <Badge variant="destructive" className="text-xs px-2 py-0">
                    {device.severity}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1 ml-5">
                  {device.issues.map((issue, i) => (
                    <span key={i} className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      {issue}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment & Coverage Health */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-gray-900">Day-0 Deployment Status</h3>
            <p className="text-sm text-gray-600 mt-1">Onboarding and protection completeness</p>
          </div>
          <Button variant="outline" size="sm">
            View Full Status
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Agents Deployed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  MOCK_DATA.deploymentStatus.agentsDeployed.percentage === 100 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {MOCK_DATA.deploymentStatus.agentsDeployed.percentage === 100 ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Activity className="w-4 h-4" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">Agents Deployed</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {MOCK_DATA.deploymentStatus.agentsDeployed.completed}/{MOCK_DATA.deploymentStatus.agentsDeployed.total}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${MOCK_DATA.deploymentStatus.agentsDeployed.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600">
              {MOCK_DATA.deploymentStatus.agentsDeployed.percentage}% complete
            </div>
          </div>

          {/* Policies Applied */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  MOCK_DATA.deploymentStatus.policiesApplied.percentage === 100 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {MOCK_DATA.deploymentStatus.policiesApplied.percentage === 100 ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Activity className="w-4 h-4" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">Policies Applied</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {MOCK_DATA.deploymentStatus.policiesApplied.completed}/{MOCK_DATA.deploymentStatus.policiesApplied.total}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${MOCK_DATA.deploymentStatus.policiesApplied.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600">
              {MOCK_DATA.deploymentStatus.policiesApplied.percentage}% complete
            </div>
          </div>

          {/* Traffic Inspected */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  MOCK_DATA.deploymentStatus.trafficInspected.percentage === 100 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {MOCK_DATA.deploymentStatus.trafficInspected.percentage === 100 ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Activity className="w-4 h-4" />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">Traffic Inspected</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {MOCK_DATA.deploymentStatus.trafficInspected.completed}/{MOCK_DATA.deploymentStatus.trafficInspected.total}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${MOCK_DATA.deploymentStatus.trafficInspected.percentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-600">
              {MOCK_DATA.deploymentStatus.trafficInspected.percentage}% complete
            </div>
          </div>

          {/* Threats Blocked */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  MOCK_DATA.deploymentStatus.threatsBlocked.percentage === 100 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-gray-900">Threats Blocked</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {MOCK_DATA.deploymentStatus.threatsBlocked.completed}/{MOCK_DATA.deploymentStatus.threatsBlocked.total}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${MOCK_DATA.deploymentStatus.threatsBlocked.percentage}%` }}
              />
            </div>
            <div className="text-xs text-green-600 font-medium">
              Protection active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}