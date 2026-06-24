import React from 'react';
import { Download, Monitor, Smartphone, Globe, Shield, Laptop, Apple } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function DownloadsView() {
  return (
     <div className="space-y-6">
        {/* Unified Client Section - Prominent */}
        <Card className="border-l-4 border-l-[#0066CC]">
           <CardHeader>
             <div className="flex items-start justify-between">
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#0066CC]">
                      <Shield className="w-6 h-6" />
                   </div>
                   <div>
                      <CardTitle className="text-xl">SonicWall Unified Client</CardTitle>
                      <CardDescription className="mt-1">
                         Secure remote access and endpoint protection in a single agent.
                         Supports ZTNA, VPN, and Endpoint Security capabilities.
                      </CardDescription>
                   </div>
                </div>
                <Badge variant="secondary">Latest: v3.5.0</Badge>
             </div>
           </CardHeader>
           <CardContent>
              <Tabs defaultValue="windows" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="windows" className="flex items-center gap-2">
                     <Monitor className="w-4 h-4" /> Windows
                  </TabsTrigger>
                  <TabsTrigger value="mac" className="flex items-center gap-2">
                     <Apple className="w-4 h-4" /> macOS
                  </TabsTrigger>
                  <TabsTrigger value="linux" className="flex items-center gap-2">
                     <Globe className="w-4 h-4" /> Linux
                  </TabsTrigger>
                  <TabsTrigger value="mobile" className="flex items-center gap-2">
                     <Smartphone className="w-4 h-4" /> Mobile
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="windows" className="space-y-4">
                   <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                         <div className="font-medium">Unified Client for Windows (MSI)</div>
                         <div className="text-sm text-gray-500">Version 3.5.0 • 64-bit • 85 MB</div>
                      </div>
                      <Button className="gap-2">
                         <Download className="w-4 h-4" /> Download MSI
                      </Button>
                   </div>
                   <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                         <div className="font-medium">Unified Client for Windows (EXE)</div>
                         <div className="text-sm text-gray-500">Version 3.5.0 • 64-bit • 82 MB</div>
                      </div>
                      <Button variant="outline" className="gap-2">
                         <Download className="w-4 h-4" /> Download EXE
                      </Button>
                   </div>
                </TabsContent>
                
                <TabsContent value="mac" className="space-y-4">
                   <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                         <div className="font-medium">Unified Client for macOS (PKG)</div>
                         <div className="text-sm text-gray-500">Version 3.5.0 • Universal • 92 MB</div>
                      </div>
                      <Button className="gap-2">
                         <Download className="w-4 h-4" /> Download PKG
                      </Button>
                   </div>
                </TabsContent>

                <TabsContent value="linux" className="space-y-4">
                   <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                         <div className="font-medium">Unified Client for Linux (DEB)</div>
                         <div className="text-sm text-gray-500">Version 3.5.0 • Ubuntu/Debian • 65 MB</div>
                      </div>
                      <Button className="gap-2">
                         <Download className="w-4 h-4" /> Download DEB
                      </Button>
                   </div>
                   <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                      <div>
                         <div className="font-medium">Unified Client for Linux (RPM)</div>
                         <div className="text-sm text-gray-500">Version 3.5.0 • RHEL/CentOS • 68 MB</div>
                      </div>
                      <Button variant="outline" className="gap-2">
                         <Download className="w-4 h-4" /> Download RPM
                      </Button>
                   </div>
                </TabsContent>

                 <TabsContent value="mobile" className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <a href="#" className="flex items-center p-4 border rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                              <Apple className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                             <div className="font-medium">App Store</div>
                             <div className="text-sm text-gray-500">Download for iOS</div>
                          </div>
                       </a>
                        <a href="#" className="flex items-center p-4 border rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                              <Smartphone className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                             <div className="font-medium">Google Play</div>
                             <div className="text-sm text-gray-500">Download for Android</div>
                          </div>
                       </a>
                   </div>
                </TabsContent>
              </Tabs>
           </CardContent>
        </Card>

        {/* Other Downloads Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Connector */}
           <Card>
              <CardHeader>
                 <CardTitle className="text-lg">Connector Images</CardTitle>
                 <CardDescription>Deploy Connectors to your private cloud or hypervisor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                 <div className="flex items-center justify-between text-sm py-2 border-b">
                    <span>OVA (VMware)</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> v2.1.0
                    </Button>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2 border-b">
                    <span>VHD (Hyper-V / Azure)</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> v2.1.0
                    </Button>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2 border-b">
                    <span>AMI (AWS)</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> v2.1.0
                    </Button>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2">
                    <span>KVM / QCOW2</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> v2.1.0
                    </Button>
                 </div>
              </CardContent>
           </Card>

           {/* Tools */}
           <Card>
              <CardHeader>
                 <CardTitle className="text-lg">Administrative Tools</CardTitle>
                 <CardDescription>Utilities for policy testing and diagnostics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                 <div className="flex items-center justify-between text-sm py-2 border-b">
                    <span>Policy Tester Tool</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> Windows
                    </Button>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2 border-b">
                    <span>Log Collector</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> Universal
                    </Button>
                 </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span>Certificate Bundle</span>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600">
                       <Download className="w-3.5 h-3.5" /> PEM
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </div>
     </div>
  );
}