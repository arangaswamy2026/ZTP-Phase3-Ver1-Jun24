import { useState } from 'react';
import { Check, Shield, Download, Edit2, LayoutDashboard, Users } from 'lucide-react';
import { ConfigurationExplanation } from '../ConfigurationExplanation';
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { IdentityConfiguration } from "../IdentityConfiguration";
import svgPaths from "../../imports/svg-2if11dchog";

interface ActivationPostSuccessProps {
  tenantName: string;
  onContinueToSetup: () => void;
  onReturnToDashboard: () => void;
}

export function ActivationPostSuccess({ tenantName, onReturnToDashboard, onContinueToSetup }: ActivationPostSuccessProps) {
  const [showIdentityDialog, setShowIdentityDialog] = useState(false);
  const [identitySource, setIdentitySource] = useState('local');

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center p-8 min-h-[calc(100vh-200px)]">
      
      <div className="w-full max-w-[800px] flex flex-col items-center">
        
        {/* Success Header - Shared */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
             <div className="w-10 h-10">
               <svg className="block w-full h-full" fill="none" viewBox="0 0 48 48">
                 <path d={svgPaths.p1f337080} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                 <path d="M18 24L22 28L30 20" stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
               </svg>
             </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Activation Successful</h2>
          <div className="text-gray-500">
            Zero Trust Connector is active for <span className="font-semibold text-gray-900">{tenantName || 'Riverside Dental Office'}</span>
          </div>
        </div>

        {/* Identity & Users Configuration - Moved to Top */}
        <div className="w-full mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
           <ConfigurationExplanation variant="split" />
        </div>

        <div className="w-full flex items-center gap-3 mb-6">
           <div className="h-px bg-gray-200 flex-1"></div>
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Default Configuration</h3>
           <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Variation C: Split Card (Invoice Style) */}
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
           
           {/* Left Sidebar: Context */}
           <div className="w-full md:w-1/3 bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col gap-6">
              <div>
                 <h4 className="text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">System Profile</h4>
                 <div className="space-y-3">
                    <div className="flex justify-between md:block">
                       <div className="text-[10px] text-gray-500 uppercase">Serial Number</div>
                       <div className="text-sm font-medium text-gray-900">2CB8-1944-9122</div>
                    </div>
                    <div className="flex justify-between md:block">
                       <div className="text-[10px] text-gray-500 uppercase">Firmware</div>
                       <div className="text-sm font-medium text-gray-900">SonicOS 7.1.1</div>
                    </div>
                 </div>
              </div>

              <div className="h-px bg-gray-200 w-full"></div>

              <div>
                 <h4 className="text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Licenses</h4>
                 <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-600" /> Essential Protection</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-600" /> Content Filtering</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-600" /> Capture ATP</li>
                    <li className="flex items-center gap-2"><Check className="w-3 h-3 text-green-600" /> Gateway AV</li>
                 </ul>
              </div>
           </div>

           {/* Right Content: Configuration */}
           <div className="w-full md:w-2/3 p-6 space-y-8">
              
              {/* Interfaces */}
              <div>
                 <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-gray-900">Network Interfaces</h4>
                    <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">DHCP Mode</span>
                 </div>
                 <table className="w-full text-xs text-left">
                    <thead className="text-gray-500 border-b border-gray-100">
                       <tr>
                          <th className="pb-2 font-medium">Interface</th>
                          <th className="pb-2 font-medium">Zone</th>
                          <th className="pb-2 font-medium text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       <tr>
                          <td className="py-2 font-medium">X0</td>
                          <td className="py-2 text-gray-600">Employee <span className="text-gray-400 text-[10px]">(Trusted)</span></td>
                          <td className="py-2 text-right text-green-600">Active</td>
                       </tr>
                       <tr>
                          <td className="py-2 font-medium">X1</td>
                          <td className="py-2 text-gray-600">Guest <span className="text-gray-400 text-[10px]">(Untrust)</span></td>
                          <td className="py-2 text-right text-green-600">Active</td>
                       </tr>
                    </tbody>
                 </table>
              </div>

              {/* Security Rules */}
              <div>
                 <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-gray-900">Security Rules</h4>
                    <span className="text-xs bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md text-blue-700 font-medium flex items-center gap-1.5 shadow-sm">
                       <Shield className="w-3 h-3" />
                       Standard Profile
                    </span>
                 </div>
                 
                 <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-gray-50/50">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <div className="text-xs">
                             <span className="font-medium text-gray-900">Employee</span>
                             <span className="text-gray-400 mx-2">→</span>
                             <span className="font-medium text-gray-900">Guest</span>
                          </div>
                       </div>
                       <div className="text-xs font-bold text-green-700">ALLOW</div>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-gray-50/50">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="text-xs">
                             <span className="font-medium text-gray-900">Guest</span>
                             <span className="text-gray-400 mx-2">→</span>
                             <span className="font-medium text-gray-900">Employee</span>
                          </div>
                       </div>
                       <div className="text-xs font-bold text-red-700">BLOCK</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

        {/* Edit Button - Moved close to Default Config */}
        <div className="w-full flex justify-end mt-3 mb-6">
           <Button onClick={onContinueToSetup} variant="ghost" className="text-[#0066CC] hover:text-[#0052A3] hover:bg-blue-50 text-xs font-medium gap-2">
              <Edit2 className="w-3.5 h-3.5" />
              Edit Default Configuration
           </Button>
        </div>

        {/* Bottom Actions Section */}
        <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
           
           {/* Download Banner */}
           <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-3">
                 <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <Download className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-sm font-semibold text-gray-900">Download Unified Client</h4>
                    <p className="text-xs text-gray-500 max-w-sm">
                       Deploy the unified security agent to all trusted endpoints to ensure full zero-trust compliance.
                    </p>
                 </div>
              </div>
              <Button variant="outline" size="sm" className="w-full md:w-auto text-xs gap-2">
                 Download Installer
              </Button>
           </div>

           {/* Final Navigation Actions */}
           <div className="flex flex-col-reverse md:flex-row items-center justify-end gap-4 pt-4 border-t border-gray-200">
              <Button onClick={onReturnToDashboard} className="w-full md:w-auto gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white">
                 <LayoutDashboard className="w-4 h-4" />
                 Navigate to Dashboard
              </Button>
           </div>
        </div>

      </div>
      <Dialog open={showIdentityDialog} onOpenChange={setShowIdentityDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
             <div className="py-4">
               <div className="mb-6">
                 <h2 className="text-xl font-bold text-gray-900">Identity & Users</h2>
                 <p className="text-sm text-gray-500">Configure how users will access the platform</p>
               </div>
               <IdentityConfiguration 
                 identitySource={identitySource} 
                 onIdentitySourceChange={setIdentitySource}
                 onContinue={() => setShowIdentityDialog(false)}
                 onCancel={() => setShowIdentityDialog(false)}
               />
             </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}