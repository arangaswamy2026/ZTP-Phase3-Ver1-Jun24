import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Key, AlertCircle, CheckCircle, Loader2, Building2, Info } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ActivationKeyEntryProps {
  onNext: (key: string) => void;
  onBack: () => void;
  tenantId?: string;
  tenantName?: string;
  userEmail?: string;
}

export function ActivationKeyEntry({ onNext, onBack, tenantName }: ActivationKeyEntryProps) {
  const [manualKey, setManualKey] = useState('ABCD-1234-EFGH-5678');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateKey = async (keyToValidate: string) => {
    setError('');
    setIsValid(false);
    
    if (!keyToValidate.trim()) {
      setError('Please enter an activation key');
      return;
    }

    // Basic format validation (example: XXXX-XXXX-XXXX-XXXX)
    const keyPattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!keyPattern.test(keyToValidate.toUpperCase())) {
      setError('Invalid key format. Expected format: XXXX-XXXX-XXXX-XXXX');
      return;
    }

    setIsValidating(true);

    // Simulate API validation with specific error states
    setTimeout(() => {
      setIsValidating(false);

      // Simulation logic for demo purposes
      if (keyToValidate.toUpperCase().startsWith('USED')) {
        setError('This activation key has already been used. Please contact support.');
        return;
      }
      
      if (keyToValidate.toUpperCase().startsWith('INVA')) { // Matches INVALID...
        setError('The activation key entered is incorrect. Please check and try again.');
        return;
      }

      setIsValid(true);
      // Auto-advance after showing success
      setTimeout(() => {
        onNext(keyToValidate);
      }, 800);
    }, 1500);
  };

  const handleManualKeyChange = (value: string) => {
    // Auto-format with dashes
    let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (formatted.length > 0) {
      formatted = formatted.match(/.{1,4}/g)?.join('-') || formatted;
    }
    setManualKey(formatted.substring(0, 19)); // Max length with dashes
    setError('');
    setIsValid(false);
  };

  const handleContinue = () => {
    validateKey(manualKey);
  };

  const canContinue = manualKey.length > 0;

  return (
    <div className="bg-gray-50 rounded-lg flex items-center justify-center p-8 min-h-[calc(100vh-350px)]">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 pt-6 pb-8 px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Key className="w-8 h-8 text-[#0066CC]" />
              </div>
            </div>
            <h2 className="text-gray-900 mb-2">Enter Activation Key</h2>
            <p className="text-gray-600 text-sm">
              Enter the activation key from your purchase confirmation email
            </p>
            {tenantName && (
              <div className="flex items-center justify-center gap-2 mt-3">
                <Building2 className="w-4 h-4 text-gray-500" />
                <Badge variant="secondary" className="text-xs">
                  {tenantName}
                </Badge>
              </div>
            )}
          </div>

          {/* Manual Entry Section */}
          <div className="space-y-6 mb-6">
            <div>
              <Label htmlFor="activation-key" className="text-gray-700 mb-2 block">
                Activation Key
              </Label>
              <Input
                id="activation-key"
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={manualKey}
                onChange={(e) => handleManualKeyChange(e.target.value)}
                className="text-center tracking-wider text-lg h-14 uppercase"
                disabled={isValidating || isValid}
                aria-label="Activation key input"
                aria-invalid={!!error}
                aria-describedby={error ? "key-error" : undefined}
              />

            </div>

            {/* Help Text */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <strong>Need help?</strong> Your activation key is a 16-character code found in 
                  your purchase email. It should look like: ABCD-1234-EFGH-5678
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive" id="key-error" role="alert" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Success Message */}
          {isValid && (
            <Alert className="border-green-200 bg-green-50 text-green-800 mb-6">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>Activation key verified successfully!</AlertDescription>
            </Alert>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
              disabled={isValidating || isValid}
            >
              Back
            </Button>
            <Button
              onClick={handleContinue}
              className="flex-1 bg-[#0066CC] hover:bg-[#0052A3]"
              disabled={isValidating || isValid || !canContinue}
            >
              {isValidating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : isValid ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verified
                </>
              ) : (
                'Verify & Continue'
              )}
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an activation key?{' '}
            <a href="#" className="text-[#0066CC] hover:underline">
              Contact Sales
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}