import { useState } from 'react';
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ChevronRight, Edit2, Trash2, RotateCcw, Plus, Calendar } from "lucide-react";

export function AdvancedSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm min-h-[600px]">
        <Tabs defaultValue="device" className="w-full">
          <div className="border-b border-gray-200 px-4 pt-2">
            <TabsList className="bg-transparent h-auto p-0 gap-6">
              <TabsTrigger 
                value="device" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Device
              </TabsTrigger>
              <TabsTrigger 
                value="interfaces" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Interfaces
              </TabsTrigger>
              <TabsTrigger 
                value="routes" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Routes
              </TabsTrigger>
              <TabsTrigger 
                value="nat" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                NAT
              </TabsTrigger>
              <TabsTrigger 
                value="sdwan" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                SDWAN
              </TabsTrigger>
            </TabsList>
          </div>

          {/* DEVICE TAB */}
          <TabsContent value="device" className="p-6 space-y-8">
            {/* General Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">General</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-right text-gray-600">Name</Label>
                  <Input defaultValue="ZTC" className="max-w-xs" />
                </div>
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-right text-gray-600">Enable IPv6</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100" />

            {/* Administrator Name Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Administrator Name</h3>
              <div className="flex items-center gap-4 max-w-4xl">
                <Label className="w-32 text-right text-gray-600">Administrator Login Name</Label>
                <div className="flex items-center gap-3">
                   <Input defaultValue="admin" className="w-48" />
                   <Button variant="outline" className="text-blue-600 border-blue-200">Change Password</Button>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100" />

            {/* Time Settings Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Time Settings</h3>
              <div className="space-y-4 max-w-4xl">
                <div className="flex items-center gap-4">
                  <Label className="w-64 text-right text-gray-600">Set time automatically using NTP</Label>
                  <Switch />
                </div>
                
                <div className="flex items-center gap-4">
                   <Label className="w-64 text-right text-gray-600">Date / Time</Label>
                   <div className="relative">
                      <Input defaultValue="22/05/2018 12:30:00" className="w-48 pl-3 pr-8" />
                      <Calendar className="w-4 h-4 text-gray-400 absolute right-2 top-2.5" />
                   </div>
                </div>

                <div className="flex items-center gap-4">
                   <Label className="w-64 text-right text-gray-600">Time Zone</Label>
                   <Select defaultValue="pacific">
                     <SelectTrigger className="w-64">
                       <SelectValue placeholder="Select Time Zone" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="pacific">Pacific Time (US & Canada)</SelectItem>
                       <SelectItem value="eastern">Eastern Time (US & Canada)</SelectItem>
                       <SelectItem value="utc">UTC</SelectItem>
                     </SelectContent>
                   </Select>
                </div>

                <div className="flex items-center gap-4">
                  <Label className="w-64 text-right text-gray-600">Automatically adjust clock for daylight saving time</Label>
                  <Switch />
                </div>

                <div className="flex items-center justify-end gap-3 mt-8 pt-4">
                   <Button variant="outline">Cancel</Button>
                   <Button className="bg-[#415b76] hover:bg-[#34495e]">Accept</Button>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* INTERFACES TAB */}
          <TabsContent value="interfaces" className="p-6">
            <div className="flex justify-end gap-4 mb-4 text-sm text-gray-600">
               <button className="flex items-center gap-1 hover:text-blue-600"><Plus className="w-4 h-4" /> Add Zone</button>
               <button className="flex items-center gap-1 hover:text-blue-600"><RotateCcw className="w-4 h-4" /> Refresh</button>
            </div>

            <div className="space-y-6">
               {/* Employee */}
               <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3 flex items-center justify-between border-b border-gray-100">
                     <div className="flex items-center gap-2 font-semibold text-blue-600">
                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                        Employee
                     </div>
                     <Switch defaultChecked />
                  </div>
                  
                  <div className="bg-gray-50/50 p-2 flex justify-end gap-4 text-xs text-gray-500 border-b border-gray-200">
                     <button className="flex items-center gap-1 hover:text-blue-600"><Plus className="w-3 h-3" /> Add Interface</button>
                     <button className="flex items-center gap-1 hover:text-blue-600"><RotateCcw className="w-3 h-3" /> Refresh</button>
                  </div>

                  <Table>
                    <TableHeader className="bg-blue-50/50">
                      <TableRow>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Name</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">IP Address</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Subnet Mask</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">IP Assignment</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Status</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Comment</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Configure</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                         <TableCell className="font-medium">X0</TableCell>
                         <TableCell>192.168.168.1</TableCell>
                         <TableCell>255.255.255.0</TableCell>
                         <TableCell>Static IP</TableCell>
                         <TableCell className="text-green-600">1 Gbps Full Duplex</TableCell>
                         <TableCell>Default Employee</TableCell>
                         <TableCell>
                            <div className="flex gap-2 text-gray-400">
                               <Edit2 className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                               <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-600" />
                            </div>
                         </TableCell>
                      </TableRow>
                      <TableRow>
                         <TableCell className="font-medium">X3</TableCell>
                         <TableCell>192.168.100.1</TableCell>
                         <TableCell>255.255.255.0</TableCell>
                         <TableCell>Static IP</TableCell>
                         <TableCell className="text-green-600">1 Gbps Full Duplex</TableCell>
                         <TableCell></TableCell>
                         <TableCell>
                            <div className="flex gap-2 text-gray-400">
                               <Edit2 className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                               <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-600" />
                            </div>
                         </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
               </div>

               {/* OTHER ZONES COLLAPSED MOCK */}
               {['Internet', 'GUEST', 'IOT'].map((zone) => (
                 <div key={zone} className="border border-gray-200 rounded-md bg-white p-3 flex items-center justify-between">
                     <div className="flex items-center gap-2 font-semibold text-gray-600">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        {zone}
                     </div>
                     <Switch />
                  </div>
               ))}

               {/* UNASSIGNED */}
               <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div className="bg-white p-3 flex items-center justify-between border-b border-gray-100">
                     <div className="flex items-center gap-2 font-semibold text-blue-600">
                        <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                        UNASSIGNED
                     </div>
                  </div>
                  <Table>
                    <TableHeader className="bg-blue-50/50">
                      <TableRow>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Name</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">IP Address</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Subnet Mask</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">IP Assignment</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Status</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Comment</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Configure</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {['X9', 'X10', 'X11'].map((iface) => (
                        <TableRow key={iface}>
                           <TableCell className="font-medium">{iface}</TableCell>
                           <TableCell>0.0.0.0</TableCell>
                           <TableCell>0.0.0.0</TableCell>
                           <TableCell></TableCell>
                           <TableCell className="text-red-500">No Link</TableCell>
                           <TableCell></TableCell>
                           <TableCell>
                              <div className="flex gap-2 text-gray-400">
                                 <Edit2 className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                              </div>
                           </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
               </div>
            </div>
          </TabsContent>

          {/* SDWAN TAB */}
          <TabsContent value="sdwan" className="p-6">
             <Tabs defaultValue="ipv4" className="w-full">
                <TabsList className="bg-transparent h-auto p-0 gap-6 border-b border-gray-200 w-full justify-start rounded-none mb-4">
                   <TabsTrigger 
                     value="ipv4" 
                     className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-2 text-gray-500 font-medium"
                   >
                     IPv4
                   </TabsTrigger>
                   <TabsTrigger 
                     value="ipv6" 
                     className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[#f97316] data-[state=active]:text-[#f97316] rounded-none px-0 py-2 text-gray-500 font-medium"
                   >
                     IPv6
                   </TabsTrigger>
                </TabsList>
                
                <TabsContent value="ipv4" className="space-y-4">
                  <div className="flex justify-end gap-2 mb-2">
                     <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600"><RotateCcw className="w-3 h-3" /> Refresh</button>
                  </div>
                   <Table>
                    <TableHeader className="bg-blue-50/50">
                      <TableRow>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase w-8">#</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Name</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Type</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">IP Address</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Link Status</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">LB Status</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Main Target</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Alternate Target</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Configure</TableHead>
                        <TableHead className="text-xs font-bold text-blue-900 uppercase">Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="bg-gray-50/50 font-medium">
                         <TableCell><ChevronRight className="w-4 h-4 rotate-90" /></TableCell>
                         <TableCell>Default LB Group</TableCell>
                         <TableCell>Basic</TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell></TableCell>
                         <TableCell>
                            <div className="flex gap-2 text-gray-400">
                               <Edit2 className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                               <Plus className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                            </div>
                         </TableCell>
                         <TableCell>
                            <div className="w-4 h-4 border border-blue-200 rounded bg-blue-50" />
                         </TableCell>
                      </TableRow>
                      <TableRow className="pl-8">
                         <TableCell></TableCell>
                         <TableCell className="pl-8 text-sm">X1</TableCell>
                         <TableCell></TableCell>
                         <TableCell className="text-sm">10.206.27.179(Internet)</TableCell>
                         <TableCell className="text-sm">Link Up</TableCell>
                         <TableCell className="text-sm">Available</TableCell>
                         <TableCell className="text-sm text-yellow-600">Disabled</TableCell>
                         <TableCell className="text-sm text-yellow-600">Disabled</TableCell>
                         <TableCell>
                            <Edit2 className="w-4 h-4 cursor-pointer text-gray-400 hover:text-blue-600" />
                         </TableCell>
                         <TableCell>
                             <div className="w-4 h-4 border border-blue-200 rounded bg-blue-50" />
                         </TableCell>
                      </TableRow>
                    </TableBody>
                   </Table>
                   <div className="text-xs text-gray-500 mt-2">Totals: Group and Members: 1 + 1 Item(s)</div>
                </TabsContent>
             </Tabs>
          </TabsContent>

          {/* Placeholders for other tabs */}
          <TabsContent value="routes" className="p-12 text-center text-gray-500">
            Route configuration content would appear here
          </TabsContent>
          <TabsContent value="nat" className="p-12 text-center text-gray-500">
            NAT configuration content would appear here
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
