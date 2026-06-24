import { Button } from './ui/button';
import { 
  Server, 
  Database, 
  FileText, 
  Activity, 
  BarChart3,
  Settings,
  Plus,
  PlayCircle,
  BookOpen,
  Shield
} from 'lucide-react';

interface ZeroStateProps {
  onAction?: () => void;
  onSecondaryAction?: () => void;
}

export function ConnectorsZeroState({ onAction }: ZeroStateProps) {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
            <Server className="w-10 h-10 text-[#0066CC]" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">No Connectors Yet</h2>
        <p className="text-gray-600 mb-6">
          Deploy your first Zero Trust Connector to enable secure access to private applications. 
          Connectors act as lightweight agents that establish outbound-only connections to the cloud.
        </p>

      </div>
    </div>
  );
}

export function PrivateAppsZeroState({ onAction }: ZeroStateProps) {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center">
            <Database className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">No Private Apps Defined</h2>
        <p className="text-gray-600 mb-6">
          Define the internal applications and resources you want to protect with Zero Trust access. 
          Private apps can be web applications, SSH servers, RDP hosts, or any TCP/UDP service.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-[#0066CC] hover:bg-[#0052A3]"
            onClick={onAction}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Private App
          </Button>
          <Button variant="outline" className="border-gray-300">
            <PlayCircle className="w-4 h-4 mr-2" />
            Watch Tutorial
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Web Apps</p>
            <p className="text-gray-900">HTTP/HTTPS</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Remote Access</p>
            <p className="text-gray-900">SSH/RDP</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Custom</p>
            <p className="text-gray-900">TCP/UDP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PoliciesZeroState({ onAction, onSecondaryAction }: ZeroStateProps) {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="max-w-2xl text-center px-6">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
            <Shield className="w-12 h-12 text-[#0066CC]" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">Define Your First Access Policy</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Your Zero Trust Connector is activated! Now create access policies to control who can access 
          which private applications. Policies are based on user identity, device posture, location, 
          and other risk signals.
        </p>
        
        {/* Policy Examples */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-white rounded-lg border-2 border-gray-200 text-left hover:border-[#0066CC] transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-900 mb-2"><strong>Allow Policy</strong></p>
            <p className="text-xs text-gray-600">
              Grant specific users or groups access to applications with conditions
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg border-2 border-gray-200 text-left hover:border-[#0066CC] transition-colors">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-sm text-gray-900 mb-2"><strong>Conditional Access</strong></p>
            <p className="text-xs text-gray-600">
              Add device compliance, location, or time-based restrictions
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg border-2 border-gray-200 text-left hover:border-[#0066CC] transition-colors">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-sm text-gray-900 mb-2"><strong>Deny Policy</strong></p>
            <p className="text-xs text-gray-600">
              Block access to specific resources or deprecated services
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button 
            className="bg-[#0066CC] hover:bg-[#0052A3] h-12 px-8"
            onClick={onAction}
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Your First Policy
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 h-12 px-6"
            onClick={onSecondaryAction}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Learn About Policy Workflow
          </Button>
        </div>
        
        <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3 text-left">
            <FileText className="w-5 h-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-900 mb-2"><strong>Best Practice: Start with Least-Privilege</strong></p>
              <p className="text-xs text-gray-700 leading-relaxed">
                Begin by creating policies that grant access only to specific users and groups for specific applications. 
                Use the principle of least-privilege: give users the minimum access they need to do their jobs. 
                You can add more permissive policies later as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ActivityZeroState() {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <Activity className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">No Activity Data Yet</h2>
        <p className="text-gray-600 mb-6">
          Once users start accessing private applications through Zero Trust Connectors, 
          you'll see session logs, authentication events, and policy decisions here.
        </p>
        <div className="mt-8 bg-green-50 rounded-lg border border-green-100 p-6">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-xs text-gray-600 mb-2">Monitor</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• User sessions</li>
                <li>• Access attempts</li>
                <li>• Policy enforcement</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">Track</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Application usage</li>
                <li>• Authentication events</li>
                <li>• Security incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReportsZeroState() {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center">
            <BarChart3 className="w-10 h-10 text-indigo-600" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">No Reports Available</h2>
        <p className="text-gray-600 mb-6">
          Analytics and reports will appear here once your Zero Trust environment is active. 
          Track security posture, compliance metrics, and user behavior over time.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
            <BarChart3 className="w-6 h-6 text-gray-400 mb-2" />
            <p className="text-sm text-gray-900 mb-1">Usage Analytics</p>
            <p className="text-xs text-gray-600">Application and user metrics</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
            <Shield className="w-6 h-6 text-gray-400 mb-2" />
            <p className="text-sm text-gray-900 mb-1">Security Reports</p>
            <p className="text-xs text-gray-600">Policy violations and threats</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
            <Activity className="w-6 h-6 text-gray-400 mb-2" />
            <p className="text-sm text-gray-900 mb-1">Audit Logs</p>
            <p className="text-xs text-gray-600">Compliance and governance</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
            <FileText className="w-6 h-6 text-gray-400 mb-2" />
            <p className="text-sm text-gray-900 mb-1">Custom Reports</p>
            <p className="text-xs text-gray-600">Build your own dashboards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SettingsZeroState() {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <Settings className="w-10 h-10 text-gray-600" />
          </div>
        </div>
        <h2 className="text-gray-900 mb-3">Settings Configuration</h2>
        <p className="text-gray-600 mb-6">
          Configure your Zero Trust environment settings including identity providers, 
          authentication methods, network settings, and global security policies.
        </p>
        <div className="mt-8 grid gap-3">
          <Button variant="outline" className="border-gray-300 justify-start">
            <Settings className="w-4 h-4 mr-3" />
            <div className="text-left flex-1">
              <p className="text-sm text-gray-900">General Settings</p>
              <p className="text-xs text-gray-500">Organization and tenant configuration</p>
            </div>
          </Button>
          <Button variant="outline" className="border-gray-300 justify-start">
            <Shield className="w-4 h-4 mr-3" />
            <div className="text-left flex-1">
              <p className="text-sm text-gray-900">Identity & Authentication</p>
              <p className="text-xs text-gray-500">Configure SSO and MFA settings</p>
            </div>
          </Button>
          <Button variant="outline" className="border-gray-300 justify-start">
            <Server className="w-4 h-4 mr-3" />
            <div className="text-left flex-1">
              <p className="text-sm text-gray-900">Network Settings</p>
              <p className="text-xs text-gray-500">DNS, IP ranges, and connectivity</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
