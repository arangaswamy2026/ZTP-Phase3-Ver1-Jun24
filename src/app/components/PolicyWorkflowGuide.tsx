import React from 'react';
import {
  Shield,
  Users,
  Globe,
  Lock,
  GitBranch,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Network,
  Clock,
  MapPin,
  Smartphone,
  PlayCircle,
  FileText,
  TrendingUp,
  Settings,
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { PolicyFlowDiagram } from './PolicyFlowDiagram';

export function PolicyWorkflowGuide() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Zero Trust Policy Workflow</h1>
        <p className="text-gray-600">
          A comprehensive guide to creating and managing access policies in a Zero Trust architecture
        </p>
      </div>

      {/* Overview Section */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-start gap-4">
          <Shield className="h-8 w-8 text-[#0066CC] flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-gray-900 mb-2">What is a Zero Trust Policy?</h2>
            <p className="text-gray-700 mb-4">
              Zero Trust policies enforce the principle of "never trust, always verify" by defining granular
              access controls that specify <strong>who</strong> can access <strong>what</strong> resources,{' '}
              <strong>when</strong>, <strong>where</strong>, and <strong>how</strong>. Each policy is
              evaluated in real-time for every access request, ensuring continuous verification and minimal
              privilege access.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <Users className="h-5 w-5 text-blue-600 mb-2" />
                <p className="text-gray-900">Identity-Based</p>
                <p className="text-gray-600">Policies verify user and device identity</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <Lock className="h-5 w-5 text-blue-600 mb-2" />
                <p className="text-gray-900">Context-Aware</p>
                <p className="text-gray-600">Decisions based on real-time context</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mb-2" />
                <p className="text-gray-900">Least Privilege</p>
                <p className="text-gray-600">Minimal access rights by default</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Policy Evaluation Flow Diagram */}
      <div className="space-y-4">
        <h2 className="text-gray-900">How Policies Are Evaluated</h2>
        <PolicyFlowDiagram />
      </div>

      {/* Policy Lifecycle */}
      <div className="space-y-4">
        <h2 className="text-gray-900">Policy Lifecycle</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="p-4 border-2 border-blue-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-900 mb-1">1. Design</p>
              <p className="text-gray-600">Define policy requirements</p>
            </div>
          </Card>

          <Card className="p-4 border-2 border-purple-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-gray-900 mb-1">2. Configure</p>
              <p className="text-gray-600">Set up rules and conditions</p>
            </div>
          </Card>

          <Card className="p-4 border-2 border-orange-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <PlayCircle className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-900 mb-1">3. Test</p>
              <p className="text-gray-600">Simulate and validate</p>
            </div>
          </Card>

          <Card className="p-4 border-2 border-green-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-900 mb-1">4. Deploy</p>
              <p className="text-gray-600">Activate the policy</p>
            </div>
          </Card>

          <Card className="p-4 border-2 border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-gray-600" />
              </div>
              <p className="text-gray-900 mb-1">5. Monitor</p>
              <p className="text-gray-600">Track and optimize</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Policy Components */}
      <div className="space-y-4">
        <h2 className="text-gray-900">Core Policy Components</h2>

        {/* Source (Who) */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Source: Who can access?</h3>
              <p className="text-gray-600 mb-4">
                Define the identity of users or groups that the policy applies to. This is the "who" in your
                access decision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">User Groups</p>
                  <p className="text-gray-600">Engineering, Finance, Contractors</p>
                  <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700">
                    Recommended
                  </Badge>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">Individual Users</p>
                  <p className="text-gray-600">Specific user accounts or emails</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">All Users</p>
                  <p className="text-gray-600">Organization-wide policies</p>
                  <Badge variant="outline" className="mt-2 bg-orange-50 text-orange-700">
                    Use with caution
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Destination (What) */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Destination: What can be accessed?</h3>
              <p className="text-gray-600 mb-4">
                Specify the target resources, applications, or network segments that users are trying to
                access.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">Private Applications</p>
                  <p className="text-gray-600 mb-2">
                    Web applications published through Zero Trust Connectors
                  </p>
                  <div className="text-gray-700 space-y-1">
                    <p>• Application name or URL</p>
                    <p>• Specific paths or endpoints</p>
                    <p>• HTTP methods (GET, POST, etc.)</p>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 mb-1">Network Resources</p>
                  <p className="text-gray-600 mb-2">
                    Direct network access to IP addresses and ports
                  </p>
                  <div className="text-gray-700 space-y-1">
                    <p>• IP addresses or CIDR ranges</p>
                    <p>• Port numbers or ranges</p>
                    <p>• Protocols (TCP, UDP, ICMP)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Conditions (How/When/Where) */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Conditions: Under what circumstances?</h3>
              <p className="text-gray-600 mb-4">
                Add contextual requirements that must be satisfied before granting access. These create
                adaptive, risk-based access controls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Lock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Multi-Factor Authentication</p>
                      <p className="text-gray-600">
                        Require MFA challenge before access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Smartphone className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Device Compliance</p>
                      <p className="text-gray-600">
                        Check device posture (OS version, encryption, etc.)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Geographic Location</p>
                      <p className="text-gray-600">
                        Restrict by country or region
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Time-Based Access</p>
                      <p className="text-gray-600">
                        Allow access only during business hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Network className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Network Context</p>
                      <p className="text-gray-600">
                        Trusted vs. untrusted networks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Risk Score</p>
                      <p className="text-gray-600">
                        User or session risk assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Action */}
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
              <GitBranch className="h-6 w-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">Action: Allow or Deny?</h3>
              <p className="text-gray-600 mb-4">
                Determine what happens when all conditions are met. Policies are evaluated in priority order.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="text-green-900">Allow Access</p>
                  </div>
                  <p className="text-green-700 mb-2">
                    Grant access to the specified resources when conditions are met
                  </p>
                  <p className="text-green-600">
                    <strong>Use for:</strong> Enabling legitimate user access with appropriate controls
                  </p>
                </div>
                <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-900">Deny Access</p>
                  </div>
                  <p className="text-red-700 mb-2">
                    Block access regardless of other matching allow policies
                  </p>
                  <p className="text-red-600">
                    <strong>Use for:</strong> Explicit blocks, deprecated services, security restrictions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-gray-900">Policy Design Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Start with Groups, Not Users</p>
                <p className="text-gray-600">
                  Use role-based groups for scalability and easier management
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Use Descriptive Names</p>
                <p className="text-gray-600">
                  Name policies clearly: "Engineering-DevEnv-MFA" vs. "Policy-001"
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Test Before Deploying</p>
                <p className="text-gray-600">
                  Use simulation tools to validate policy logic and avoid blocking legitimate access
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Order Matters</p>
                <p className="text-gray-600">
                  Lower priority numbers are evaluated first. Place deny rules strategically
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Layer Conditions Thoughtfully</p>
                <p className="text-gray-600">
                  Balance security with user experience. Not every app needs MFA + compliance + geo-fencing
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-900 mb-1">Monitor and Iterate</p>
                <p className="text-gray-600">
                  Review policy analytics regularly to optimize rules and identify gaps
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="space-y-4">
        <h2 className="text-gray-900">Common Policy Patterns</h2>
        
        <div className="space-y-3">
          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge className="bg-blue-600 text-white">Pattern 1</Badge>
              <div className="flex-1">
                <p className="text-gray-900 mb-2">
                  <strong>Internal Employee Access</strong>
                </p>
                <p className="text-gray-600 mb-3">
                  Allow full-time employees to access internal apps from any location with MFA
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="text-blue-900">Source: Employee Group</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="text-purple-900">Target: Internal Apps</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-green-900">Condition: Require MFA</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-green-900">Action: Allow</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge className="bg-purple-600 text-white">Pattern 2</Badge>
              <div className="flex-1">
                <p className="text-gray-900 mb-2">
                  <strong>Contractor Limited Access</strong>
                </p>
                <p className="text-gray-600 mb-3">
                  Allow contractors to access specific project resources only during business hours with device compliance
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="text-blue-900">Source: Contractors</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="text-purple-900">Target: Project Portal</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-green-900">Condition: Device OK</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-green-900">Condition: 9AM-5PM</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-green-900">Action: Allow</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge className="bg-orange-600 text-white">Pattern 3</Badge>
              <div className="flex-1">
                <p className="text-gray-900 mb-2">
                  <strong>Geo-Restricted Sensitive Data</strong>
                </p>
                <p className="text-gray-600 mb-3">
                  Block access to financial systems from outside approved countries
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="text-blue-900">Source: All Users</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="text-purple-900">Target: Finance Apps</p>
                  </div>
                  <div className="p-2 bg-orange-50 rounded">
                    <p className="text-orange-900">Condition: Not US/UK</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="text-red-900">Action: Deny</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start gap-4">
              <Badge className="bg-red-600 text-white">Pattern 4</Badge>
              <div className="flex-1">
                <p className="text-gray-900 mb-2">
                  <strong>Deprecated Service Block</strong>
                </p>
                <p className="text-gray-600 mb-3">
                  Prevent access to legacy protocols or services being phased out
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="text-blue-900">Source: All Users</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="text-purple-900">Target: Legacy FTP</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded">
                    <p className="text-red-900">Action: Deny</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}