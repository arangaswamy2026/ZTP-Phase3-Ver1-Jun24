import React from 'react';
import { Shield, Edit, Copy, Trash2, MoreVertical, Users, Network, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface Policy {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'error';
  priority: number;
  sourceGroups: string[];
  targetApps: string[];
  connectors: string[];
  action: 'allow' | 'deny';
  conditions: number;
  lastModified: string;
  sessions: number;
}

interface PolicyListProps {
  onCreatePolicy: () => void;
  onEditPolicy: (policyId: string) => void;
}

export function PolicyList({ onCreatePolicy, onEditPolicy }: PolicyListProps) {
  const [policies] = React.useState<Policy[]>([
    {
      id: 'pol-001',
      name: 'Engineering Team Access',
      description: 'Allow engineering team to access dev/staging environments',
      status: 'active',
      priority: 1,
      sourceGroups: ['Engineering', 'DevOps'],
      targetApps: ['Dev Portal', 'Staging API'],
      connectors: ['Connector-US-West', 'Connector-US-East'],
      action: 'allow',
      conditions: 3,
      lastModified: '2 hours ago',
      sessions: 1247,
    },
    {
      id: 'pol-002',
      name: 'Remote Contractor Access',
      description: 'Conditional access for contractors with device compliance',
      status: 'active',
      priority: 2,
      sourceGroups: ['Contractors'],
      targetApps: ['Project Portal'],
      connectors: ['Connector-US-West'],
      action: 'allow',
      conditions: 5,
      lastModified: '1 day ago',
      sessions: 342,
    },
    {
      id: 'pol-003',
      name: 'Finance Internal Apps',
      description: 'Restrict finance apps to office network only',
      status: 'active',
      priority: 3,
      sourceGroups: ['Finance'],
      targetApps: ['ERP System', 'Finance Dashboard'],
      connectors: ['Connector-HQ'],
      action: 'allow',
      conditions: 4,
      lastModified: '3 days ago',
      sessions: 856,
    },
    {
      id: 'pol-004',
      name: 'Block Legacy Protocols',
      description: 'Deny access to deprecated services',
      status: 'active',
      priority: 4,
      sourceGroups: ['All Users'],
      targetApps: ['Legacy FTP'],
      connectors: ['All Connectors'],
      action: 'deny',
      conditions: 1,
      lastModified: '1 week ago',
      sessions: 23,
    },
    {
      id: 'pol-005',
      name: 'Executive Team Access',
      description: 'Full access with MFA requirement',
      status: 'inactive',
      priority: 5,
      sourceGroups: ['Executives'],
      targetApps: ['All Apps'],
      connectors: ['All Connectors'],
      action: 'allow',
      conditions: 2,
      lastModified: '2 weeks ago',
      sessions: 0,
    },
  ]);

  const getStatusIcon = (status: Policy['status']) => {
    switch (status) {
      case 'active':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'inactive':
        return <XCircle className="h-4 w-4 text-gray-400" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusBadge = (status: Policy['status']) => {
    const variants: Record<Policy['status'], { label: string; className: string }> = {
      active: { label: 'Active', className: 'bg-green-50 text-green-700 border-green-200' },
      inactive: { label: 'Inactive', className: 'bg-gray-50 text-gray-600 border-gray-200' },
      error: { label: 'Error', className: 'bg-red-50 text-red-700 border-red-200' },
    };
    const { label, className } = variants[status];
    return (
      <Badge variant="outline" className={className}>
        {label}
      </Badge>
    );
  };

  const getActionBadge = (action: Policy['action']) => {
    return action === 'allow' ? (
      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
        Allow
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
        Deny
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Access Policies</h2>
          <p className="text-gray-600 mt-1">
            Define who can access what resources and under which conditions
          </p>
        </div>
        <Button onClick={onCreatePolicy} className="bg-[#0066CC] hover:bg-[#0052A3]">
          <Shield className="h-4 w-4 mr-2" />
          Create Policy
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Policies</p>
              <p className="text-gray-900 mt-1">{policies.length}</p>
            </div>
            <Shield className="h-8 w-8 text-gray-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Active</p>
              <p className="text-green-600 mt-1">
                {policies.filter((p) => p.status === 'active').length}
              </p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Allow Rules</p>
              <p className="text-blue-600 mt-1">
                {policies.filter((p) => p.action === 'allow').length}
              </p>
            </div>
            <Users className="h-8 w-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Deny Rules</p>
              <p className="text-orange-600 mt-1">
                {policies.filter((p) => p.action === 'deny').length}
              </p>
            </div>
            <XCircle className="h-8 w-8 text-orange-400" />
          </div>
        </div>
      </div>

      {/* Policy Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Policy Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Source Groups</TableHead>
              <TableHead>Target Apps</TableHead>
              <TableHead>Conditions</TableHead>
              <TableHead>Sessions</TableHead>
              <TableHead>Modified</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {policies.map((policy) => (
              <TableRow key={policy.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(policy.status)}
                    <span className="text-gray-600">{policy.priority}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <button
                      onClick={() => onEditPolicy(policy.id)}
                      className="text-gray-900 hover:text-[#0066CC] text-left"
                    >
                      {policy.name}
                    </button>
                    <p className="text-gray-600 mt-0.5">{policy.description}</p>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(policy.status)}</TableCell>
                <TableCell>{getActionBadge(policy.action)}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {policy.sourceGroups.slice(0, 2).map((group) => (
                      <Badge key={group} variant="outline" className="bg-gray-50 text-gray-700">
                        {group}
                      </Badge>
                    ))}
                    {policy.sourceGroups.length > 2 && (
                      <Badge variant="outline" className="bg-gray-50 text-gray-700">
                        +{policy.sourceGroups.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {policy.targetApps.slice(0, 2).map((app) => (
                      <Badge key={app} variant="outline" className="bg-blue-50 text-blue-700">
                        {app}
                      </Badge>
                    ))}
                    {policy.targetApps.length > 2 && (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        +{policy.targetApps.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    {policy.conditions} rules
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900">{policy.sessions.toLocaleString()}</TableCell>
                <TableCell className="text-gray-600">{policy.lastModified}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEditPolicy(policy.id)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Network className="h-4 w-4 mr-2" />
                        View Analytics
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-blue-900">Policy Priority Order</p>
            <p className="text-blue-700 mt-1">
              Policies are evaluated in priority order (1 = highest). The first matching policy determines
              the access decision. Drag policies to reorder or use the priority field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
