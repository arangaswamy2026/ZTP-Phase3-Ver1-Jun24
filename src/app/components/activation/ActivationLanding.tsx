import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Shield, CheckCircle, Lock, Zap, Loader2, AlertCircle, ArrowRight, Key } from 'lucide-react';

interface ActivationLandingProps {
  onStart: (key: string) => void;
}

export function ActivationLanding({ onStart }: ActivationLandingProps) {
  const [activationKey, setActivationKey] = useState('ABCD-1234-EFGH-5678');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const features = [
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Secure access to private applications with identity-based policies',
    },
    {
      icon: Lock,
      title: 'Identity-Aware Access',
      description: 'Integrate with your existing identity providers seamlessly',
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our guided activation flow',
    },
  ];

  const handleKeyChange = (value: string) => {
    // Auto-format with dashes
    let formatted = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (formatted.length > 0) {
      formatted = formatted.match(/.{1,4}/g)?.join('-') || formatted;
    }
    setActivationKey(formatted.substring(0, 19)); 
    setError('');
    setIsValid(false);
  };

  const validateKey = async () => {
    setError('');
    setIsValid(false);
    
    if (!activationKey.trim()) {
      setError('Please enter an activation key');
      return;
    }

    // Basic format validation
    const keyPattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!keyPattern.test(activationKey.toUpperCase())) {
      setError('Invalid key format. Expected format: XXXX-XXXX-XXXX-XXXX');
      return;
    }

    setIsValidating(true);

    // Simulate API validation
    setTimeout(() => {
      // Simulation logic
      if (activationKey.toUpperCase().startsWith('USED')) {
        setIsValidating(false);
        setError('This activation key has already been used.');
        return;
      }
      
      if (activationKey.toUpperCase().startsWith('INVA')) {
        setIsValidating(false);
        setError('The activation key entered is incorrect.');
        return;
      }

      setIsValid(true);
      setIsValidating(false);
      
      // Proceed to next step
      onStart(activationKey);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-lg p-8 min-h-[calc(100vh-300px)] flex items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Input Form */}
        <div>
           <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200 mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-gray-900 mb-4 text-[32px] font-bold leading-tight">
                Welcome to Zero Trust Platform
              </h1>
              <p className="text-gray-600 text-lg">
                Enter your license key to activate your service and secure your organization.
              </p>
           </div>

           <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <Label htmlFor="activation-key" className="text-gray-700 mb-2 block font-medium">
                Activation Key
              </Label>
              <div className="relative mb-2">
                 <Key className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                 <Input
                  id="activation-key"
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  value={activationKey}
                  onChange={(e) => handleKeyChange(e.target.value)}
                  className="pl-10 font-mono text-lg h-12 uppercase tracking-wide"
                  disabled={isValidating}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isValidating && activationKey.length >= 10) {
                      validateKey();
                    }
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mb-4">
                 Format: 16-character alphanumeric code
              </p>

              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                onClick={validateKey}
                disabled={isValidating || activationKey.length < 10}
                className="w-full bg-[#0066CC] hover:bg-[#0052A3] h-12 text-lg font-medium"
              >
                 {isValidating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Review & Activate <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
           </div>
        </div>

        {/* Right Side: Features */}
        <div className="hidden md:block">
            <div className="grid gap-6">
            {features.map((feature) => {
                const Icon = feature.icon;
                return (
                <div
                    key={feature.title}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50 shadow-sm"
                >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#0066CC]" />
                    </div>
                    <h3 className="text-gray-900 font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                );
            })}
            </div>
             <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-medium">Secure activation with 256-bit encryption</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}