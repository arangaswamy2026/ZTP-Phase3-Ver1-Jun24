import React from 'react';
import { Plus, Play, Search, MoreVertical, Edit, Copy, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { PoliciesZeroState } from './ZeroStates';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
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
import { Badge } from './ui/badge';

interface Policy {
  id: string;
  name: string;
  summary: string;
  scope: string;
  status: 'active' | 'inactive' | 'testing';
  lastTriggered: string;
}

interface PolicyListPageProps {
  onCreatePolicy: () => void;
  onEditPolicy: (policyId: string) => void;
  onShowWorkflowGuide?: () => void;
}

export function PolicyListPage({ onCreatePolicy, onEditPolicy, onShowWorkflowGuide }: PolicyListPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [policyType, setPolicyType] = React.useState('all');

  // Start with empty policies array - user needs to create policies after activation
  const policies: Policy[] = [
    {
      id: 'pol-default-001',
      name: 'Default Employee Access',
      summary: 'Standard access profile for all authenticated employees. Includes access to productivity suite and internal portal.',
      scope: 'All Users',
      status: 'active',
      lastTriggered: 'Just now'
    },
    {
      id: 'pol-default-002',
      name: 'Block Malicious Traffic',
      summary: 'Baseline security policy to block known malicious IPs, domains, and botnets.',
      scope: 'Global',
      status: 'active',
      lastTriggered: '5 mins ago'
    }
  ];

  const getStatusBadge = (status: Policy['status']) => {
    const variants: Record<Policy['status'], { label: string; className: string }> = {
      active: { label: 'Active', className: 'bg-green-50 text-green-700 border-green-200' },
      inactive: { label: 'Inactive', className: 'bg-gray-50 text-gray-600 border-gray-200' },
      testing: { label: 'Testing', className: 'bg-blue-50 text-blue-700 border-blue-200' },
    };
    const { label, className } = variants[status];
    return (
      <Badge variant="outline" className={className}>
        {label}
      </Badge>
    );
  };

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch = policy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         policy.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = policyType === 'all' || policy.status === policyType;
    return matchesSearch && matchesType;
  });

  // When there are no policies at all, show zero state without header
  if (policies.length === 0) {
    return <PoliciesZeroState onAction={onCreatePolicy} onSecondaryAction={onShowWorkflowGuide} />;
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900">Policies</h1>
        <div className="flex items-center gap-3">
          <Button onClick={onCreatePolicy} className="bg-[#0066CC] hover:bg-[#0052A3]">
            <Plus className="h-4 w-4 mr-2" />
            Create Policy
          </Button>
        </div>
      </div>

      {/* Filter Row */}
      {(
        <div className="flex items-center gap-4">
          <Select value={policyType} onValueChange={setPolicyType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Policy Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="testing">Testing</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search policies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      )}

      {/* Table or Empty State */}
      {filteredPolicies.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <p className="text-gray-600">No policies match your search criteria</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy Name</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Scope</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Triggered</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPolicies.map((policy) => (
                <TableRow 
                  key={policy.id} 
                  className="h-14 hover:bg-[#F8FAFC] cursor-pointer transition-colors"
                  onClick={() => onEditPolicy(policy.id)}
                >
                  <TableCell>
                    <span className="text-gray-900">{policy.name}</span>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="text-[#6B7280] truncate">{policy.summary}</p>
                  </TableCell>
                  <TableCell className="text-gray-900">{policy.scope}</TableCell>
                  <TableCell>{getStatusBadge(policy.status)}</TableCell>
                  <TableCell className="text-gray-600">{policy.lastTriggered}</TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
      )}
    </div>
  );
}