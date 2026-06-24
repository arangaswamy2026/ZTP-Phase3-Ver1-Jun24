import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  CheckCircle, 
  Key, 
  Building2, 
  Shield, 
  Users,
  Calendar,
  Loader2
} from 'lucide-react';
import { useState } from 'react';

interface ActivationConfirmationProps {
  activationKey: string;
  tenantName: string;
  selectedIDPs: string[];
  onConfirm: () => void;
  onBack: () => void;
}

const idpNames: Record<string, string> = {
  'azure-ad': 'Microsoft Entra ID',
  'okta': 'Okta',
  'google': 'Google Workspace',
  'onelogin': 'OneLogin',
  'ping': 'PingIdentity',
  'custom-saml': 'Custom SAML',
};

export function ActivationConfirmation({ 
  activationKey,
  tenantName,
  selectedIDPs,
  onConfirm,
  onBack,
}: ActivationConfirmationProps) {
  const [isActivating, setIsActivating] = useState(false);

  const handleConfirm = () => {
    setIsActivating(true);
    // Simulate activation process
    setTimeout(() => {
      onConfirm();
    }, 2500);
  };

  // Mock license data
  const licenseInfo = {
    skuName: 'ZTC Enterprise Edition',
    licenseCount: 1000,
    expirationDate: '2026-10-30',
  };

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#0066CC]" />
              </div>
            </div>
            <h2 className="text-gray-900 mb-2">Review & Confirm</h2>
            <p className="text-gray-600 text-sm">
              Please review your activation details before confirming
            </p>
          </div>

          {/* Summary Sections */}
          <div className="space-y-6 mb-8">
            {/* License Information */}
            <Card className="p-5 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#0066CC]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3">License Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">SKU</p>
                      <p className="text-gray-900">{licenseInfo.skuName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">License Count</p>
                      <p className="text-gray-900">
                        <Users className="w-4 h-4 inline mr-1" />
                        {licenseInfo.licenseCount.toLocaleString()} users
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Activation Key</p>
                      <code className="text-xs text-gray-900 bg-gray-50 px-2 py-1 rounded">
                        {activationKey}
                      </code>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Valid Until</p>
                      <p className="text-gray-900">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {new Date(licenseInfo.expirationDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tenant Information */}
            <Card className="p-5 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3">Tenant Assignment</h3>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Tenant Name</p>
                    <p className="text-gray-900">{tenantName}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Authentication Methods */}
            <Card className="p-5 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Key className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-3">Authentication Methods</h3>
                  {selectedIDPs.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedIDPs.map((idpId) => (
                        <Badge 
                          key={idpId}
                          variant="secondary"
                          className="bg-purple-50 text-purple-700 border border-purple-200"
                        >
                          {idpNames[idpId] || idpId}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">
                      No identity providers selected (can be configured later)
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900 mb-1">
                  <strong>Important:</strong>
                </p>
                <p className="text-sm text-gray-700">
                  Once activated, this license key will be permanently associated with this tenant. 
                  {selectedIDPs.length > 0 && ' You will need to complete IDP configuration after activation.'}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
              disabled={isActivating}
            >
              Back
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={isActivating}
              className="flex-1 bg-[#0066CC] hover:bg-[#0052A3] disabled:opacity-50"
            >
              {isActivating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Activating...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm & Activate
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            Your activation is secured with 256-bit encryption
          </p>
        </div>
      </div>
    </div>
  );
}
