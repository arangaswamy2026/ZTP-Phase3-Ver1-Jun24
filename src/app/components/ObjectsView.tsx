import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Shield,
  Users,
  Network,
  AppWindow
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

// Mock data for objects
const MOCK_OBJECTS = {
  zones: [
    { 
      id: '1', 
      name: 'Employee Zone', 
      type: 'Trusted',
      members: ['192.168.1.0/24', '10.0.1.0/24'],
      policies: 8
    },
    { 
      id: '2', 
      name: 'Guest Zone', 
      type: 'Untrusted',
      members: ['172.16.0.0/16'],
      policies: 3
    },
    { 
      id: '3', 
      name: 'Server Zone', 
      type: 'Trusted',
      members: ['10.0.2.0/24'],
      policies: 12
    },
  ],
  userGroups: [
    { 
      id: '4', 
      name: 'Engineering', 
      type: 'AD Group',
      members: 45,
      policies: 6
    },
    { 
      id: '5', 
      name: 'DevOps', 
      type: 'AD Group',
      members: 12,
      policies: 8
    },
    { 
      id: '6', 
      name: 'Contractors', 
      type: 'Local Group',
      members: 8,
      policies: 2
    },
  ],
  networkObjects: [
    { 
      id: '7', 
      name: 'Dev Network', 
      type: 'Subnet',
      value: '10.0.1.0/24',
      policies: 5
    },
    { 
      id: '8', 
      name: 'Production Servers', 
      type: 'IP Range',
      value: '10.0.2.10-10.0.2.50',
      policies: 10
    },
    { 
      id: '9', 
      name: 'Database Server', 
      type: 'Host',
      value: '10.0.2.100',
      policies: 15
    },
  ],
  applications: [
    { 
      id: '10', 
      name: 'Salesforce', 
      type: 'SaaS',
      category: 'CRM',
      policies: 12
    },
    { 
      id: '11', 
      name: 'Internal ERP', 
      type: 'Private App',
      category: 'Business',
      policies: 8
    },
    { 
      id: '12', 
      name: 'Office 365', 
      type: 'SaaS',
      category: 'Productivity',
      policies: 20
    },
  ],
};

interface ObjectsViewProps {
  onCreateObject?: (type: string) => void;
  onEditObject?: (id: string) => void;
}

export function ObjectsView({ onCreateObject, onEditObject }: ObjectsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('zones');

  const getObjects = (type: string) => {
    const objects = MOCK_OBJECTS[type as keyof typeof MOCK_OBJECTS] || [];
    if (!searchQuery) return objects;
    return objects.filter(obj => 
      obj.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const getIconForTab = (tab: string) => {
    switch (tab) {
      case 'zones': return <Shield className="w-4 h-4" />;
      case 'userGroups': return <Users className="w-4 h-4" />;
      case 'networkObjects': return <Network className="w-4 h-4" />;
      case 'applications': return <AppWindow className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search objects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="zones" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Zones
          </TabsTrigger>
          <TabsTrigger value="userGroups" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            User Groups
          </TabsTrigger>
          <TabsTrigger value="networkObjects" className="flex items-center gap-2">
            <Network className="w-4 h-4" />
            Network Objects
          </TabsTrigger>
          <TabsTrigger value="applications" className="flex items-center gap-2">
            <AppWindow className="w-4 h-4" />
            Applications
          </TabsTrigger>
        </TabsList>

        {/* Zones Tab */}
        <TabsContent value="zones" className="mt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zone Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Members
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used in Policies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getObjects('zones').map((zone) => (
                  <tr key={zone.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{zone.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={zone.type === 'Trusted' ? 'default' : 'secondary'}>
                        {zone.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {zone.members.slice(0, 2).map((member, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {member}
                          </Badge>
                        ))}
                        {zone.members.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{zone.members.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {zone.policies} policies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onEditObject?.(zone.id)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* User Groups Tab */}
        <TabsContent value="userGroups" className="mt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Group Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Members
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used in Policies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getObjects('userGroups').map((group) => (
                  <tr key={group.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{group.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {group.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {group.members} users
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {group.policies} policies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onEditObject?.(group.id)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Network Objects Tab */}
        <TabsContent value="networkObjects" className="mt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Object Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used in Policies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getObjects('networkObjects').map((obj) => (
                  <tr key={obj.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{obj.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {obj.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{obj.value}</code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {obj.policies} policies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onEditObject?.(obj.id)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications" className="mt-6">
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Used in Policies
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getObjects('applications').map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <AppWindow className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{app.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={app.type === 'SaaS' ? 'default' : 'secondary'}>
                        {app.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {app.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {app.policies} policies
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => onEditObject?.(app.id)}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
