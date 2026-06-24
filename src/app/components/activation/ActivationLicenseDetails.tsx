import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, Calendar, Shield, CheckCircle } from 'lucide-react';

interface ActivationLicenseDetailsProps {
  activationKey: string;
  onNext: () => void;
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
    'Custom Branding',
    'API Access',
  ],
});

export function ActivationLicenseDetails({ 
  activationKey, 
  onNext, 
  onBack 
}: ActivationLicenseDetailsProps) {
  const license = getLicenseInfo(activationKey);

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-gray-900 mb-2">License Details</h2>
            <p className="text-gray-600 text-sm">
              Review your license information below
            </p>
          </div>

          {/* License Summary Card */}
          <Card className="p-6 mb-6 border-2 border-[#0066CC] bg-blue-50/30">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-gray-900">{license.skuName}</h3>
                  <Badge className="bg-[#0066CC] text-white hover:bg-[#0052A3]">
                    {license.serviceLevel}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">SKU: {license.skuCode}</p>
              </div>
              <Shield className="w-8 h-8 text-[#0066CC]" />
            </div>
            <p className="text-sm text-gray-700 mb-4">{license.description}</p>
          </Card>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#0066CC]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">User Licenses</p>
                  <p className="text-gray-900">{license.licenseCount.toLocaleString()}</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Valid Until</p>
                  <p className="text-gray-900">
                    {new Date(license.expirationDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h4 className="text-gray-900 mb-4">Included Features</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {license.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activation Key Reference */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Activation Key</p>
                <code className="text-sm text-gray-900">{activationKey}</code>
              </div>
            </div>
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
              onClick={onNext}
              className="flex-1 bg-[#0066CC] hover:bg-[#0052A3]"
            >
              Continue to Authentication
            Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
