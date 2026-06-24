import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, Calendar, Shield, CheckCircle, Building2, MapPin } from 'lucide-react';

interface ActivationReviewConfirmProps {
  activationKey: string;
  tenantName: string;
  tenantId: string;
  onConfirm: () => void;
  onBack: () => void;
}

// Mock license data based on activation key
const getLicenseInfo = (key: string) => ({
  skuName: 'ZTC Enterprise Edition',
  skuCode: 'ZTC-ENT-1000',
  description: 'Full-featured Zero Trust Connector with advanced policy controls, unlimited private apps, and premium support.',
  licenseCount: 1000,
  serviceLevel: 'Enterprise',
  expirationDate: '2026-10-30',
  features: [
    'Unlimited Private Applications',
    'Advanced Policy Engine',
    'Premium Support (24/7)',
    'Multi-tenant Management',
  ],
});

export function ActivationReviewConfirm({ 
  activationKey, 
  tenantName,
  tenantId,
  onConfirm, 
  onBack 
}: ActivationReviewConfirmProps) {
  const license = getLicenseInfo(activationKey);

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#0066CC]" />
              </div>
            </div>
            <h2 className="text-gray-900 mb-2">Review & Activate</h2>
            <p className="text-gray-600 text-sm">
              Review the license and tenant details before activating
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-6">
            {/* Tenant Context */}
            <Card className="p-5 border border-gray-200 bg-gray-50/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Activating for Tenant</p>
                  <h3 className="text-lg text-gray-900 font-semibold">{tenantName || 'Selected Tenant'}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <span className="font-mono text-xs bg-gray-200 px-2 py-0.5 rounded">{tenantId || 'ID: N/A'}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* License Summary */}
            <Card className="p-6 border-2 border-[#0066CC] bg-blue-50/30">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-gray-900 font-bold">{license.skuName}</h3>
                    
                  </div>
                  <p className="text-sm text-gray-600">SKU: {license.skuCode}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-[#0066CC]" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-blue-200/50">
                <div>
                  <p className="text-sm text-gray-500">License Capacity</p>
                  <p className="text-base font-medium text-gray-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    20 Users
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiration</p>
                  <p className="text-base font-medium text-gray-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {new Date(license.expirationDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 bg-white">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Includes Features</p>
              <div className="grid grid-cols-2 gap-3">
                {license.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0066CC]" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Activation Key Reference */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-600 mb-1">Activation Key</p>
              <code className="text-sm text-gray-900 font-medium tracking-wide">{activationKey}</code>
            </div>
            <Badge variant="outline" className="bg-white">Verified</Badge>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 bg-[#0066CC] hover:bg-[#0052A3] h-11 text-base"
            >
              Confirm & Activate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}