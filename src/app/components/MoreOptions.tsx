import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, Settings, ChevronRight, ArrowLeft } from 'lucide-react';
import { IdentityConfiguration } from './IdentityConfiguration';
import { AdvancedOptions } from './AdvancedOptions';

interface MoreOptionsProps {
  onContinue?: () => void;
  onCancel?: () => void;
}

type OptionView = 'menu' | 'identity' | 'advanced';

export function MoreOptions({ onContinue, onCancel }: MoreOptionsProps) {
  const [currentView, setCurrentView] = useState<OptionView>('menu');

  const handleBackToMenu = () => {
    setCurrentView('menu');
  };

  if (currentView === 'identity') {
    return (
      <IdentityConfiguration
        onBack={handleBackToMenu}
        onContinue={handleBackToMenu}
        onCancel={onCancel}
      />
    );
  }

  if (currentView === 'advanced') {
    return (
      <AdvancedOptions
        onBack={handleBackToMenu}
        onContinue={handleBackToMenu}
        onCancel={onCancel}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">More Options</h2>
        <p className="text-gray-600">
          Configure additional settings, identity providers, and advanced networking
        </p>
      </div>

      {/* Options Menu */}
      <div className="grid gap-4">
        <Card
          className="cursor-pointer hover:border-blue-500 transition-colors group"
          onClick={() => setCurrentView('identity')}
        >
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Identity & SSO</h3>
                <p className="text-sm text-gray-600">
                  Configure Single Sign-On and authentication providers
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:border-blue-500 transition-colors group"
          onClick={() => setCurrentView('advanced')}
        >
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <Settings className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Advanced Networking</h3>
                <p className="text-sm text-gray-600">
                  DNS, NAT, Port Forwarding, and WAN Failover
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
          </CardContent>
        </Card>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4">
        <div /> {/* Spacer */}
        {onContinue && (
          <Button
            onClick={onContinue}
            className="bg-[#0066CC] hover:bg-[#0052A3]"
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
}
