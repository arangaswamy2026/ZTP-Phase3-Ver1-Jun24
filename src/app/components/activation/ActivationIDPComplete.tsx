import { Button } from '../ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface ActivationIDPCompleteProps {
  onDone: () => void;
  onAdvancedSettings?: () => void;
}

export function ActivationIDPComplete({ onDone, onAdvancedSettings }: ActivationIDPCompleteProps) {
  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text).then(() => {
        toast.success("Copied to clipboard");
      }).catch(() => {
        toast.success("Copied to clipboard");
      });
    } catch (e) {
      toast.success("Copied to clipboard");
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 text-green-600">
                <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-2">ZTP Setup Complete</h2>
            <p className="text-gray-500 mb-8 text-sm">
              Identity Provider has been successfully configured and your Zero Trust Platform setup is complete.
            </p>
            
            <div className="w-full bg-blue-50 border border-blue-100 rounded-lg p-5 mb-8 text-left">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-blue-900 mb-1">Invite Users to Download Client App</h4>
                  <p className="text-xs text-blue-700 mb-4">
                    Share these following details with the users via email
                  </p>
                  
                  <div className="space-y-4">
                    {/* Invite Code Field */}
                    <div>
                        <div className="text-[10px] font-bold text-blue-800 uppercase mb-1.5 tracking-wide">Invite Code</div>
                        <div className="flex items-center gap-2">
                            <code className="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm font-mono text-gray-800 tracking-wider">
                            INV-8829-XJ44
                            </code>
                            <Button variant="outline" size="sm" onClick={() => handleCopy("INV-8829-XJ44")} className="bg-white hover:bg-gray-50 text-blue-600 border-blue-200 h-[38px] w-[38px] p-0 shadow-sm">
                            <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Download URL Field */}
                    <div>
                        <div className="text-[10px] font-bold text-blue-800 uppercase mb-1.5 tracking-wide">Client Download URL</div>
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm text-gray-600 truncate select-all">
                                https://getcseapp.sonicwall.com/download_app/
                            </div>
                            <Button variant="outline" size="sm" onClick={() => handleCopy("https://getcseapp.sonicwall.com/download_app/")} className="bg-white hover:bg-gray-50 text-blue-600 border-blue-200 h-[38px] w-[38px] p-0 shadow-sm">
                            <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <Button 
                onClick={onDone}
                className="w-full bg-[#0066CC] hover:bg-[#0052A3] h-11 text-base shadow-sm"
              >
                Done
              </Button>
            </div>
          </div>
          
          {/* Footer with Advanced Settings */}
          {/* Advanced Settings removed as per user request */}
        </div>
      </div>
    </div>
  );
}