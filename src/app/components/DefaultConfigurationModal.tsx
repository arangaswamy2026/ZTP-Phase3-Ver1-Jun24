import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Check, Shield, Edit2 } from 'lucide-react';
import { Button } from "./ui/button";

interface DefaultConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit?: () => void;
  onAdvancedSettings?: () => void;
}

export function DefaultConfigurationModal({ isOpen, onClose, onEdit, onAdvancedSettings }: DefaultConfigurationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[60vw] sm:max-w-[60vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Default Configuration</DialogTitle>
          <DialogDescription>
            System profile and security policies applied by the Standard Template.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 w-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden">
           
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

        {(onEdit || onAdvancedSettings) && (
            <div className="flex justify-end mt-4 gap-2">
               {onAdvancedSettings && (
                   <Button onClick={onAdvancedSettings} variant="ghost" size="sm" className="text-gray-500 hover:text-gray-900">
                      Advanced Settings
                   </Button>
               )}
               {onEdit && (
                   <Button onClick={onEdit} variant="outline" size="sm" className="gap-2">
                      <Edit2 className="w-3.5 h-3.5" />
                      Edit Configuration
                   </Button>
               )}
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}