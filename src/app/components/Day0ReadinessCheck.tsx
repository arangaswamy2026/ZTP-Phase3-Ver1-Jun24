import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  Rocket,
  RefreshCw,
  Server,
  Shield,
  Network,
  Users,
} from 'lucide-react';

interface Day0ReadinessCheckProps {
  onComplete?: () => void;
  onBack?: () => void;
  onCancel?: () => void;
}

interface ValidationCheck {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'pending' | 'checking' | 'success' | 'warning' | 'error';
  message?: string;
}

const INITIAL_CHECKS: ValidationCheck[] = [
  {
    id: 'zones',
    name: 'Zone Configuration',
    description: 'Verify all zones have valid subnet allocation',
    icon: Network,
    status: 'pending',
  },
  {
    id: 'policies',
    name: 'Security Policies',
    description: 'Validate required Day-0 security policies',
    icon: Shield,
    status: 'pending',
  },
  {
    id: 'identity',
    name: 'Identity Configuration',
    description: 'Verify SSO/IDP configuration if enabled',
    icon: Users,
    status: 'pending',
  },
  {
    id: 'ztc-connectivity',
    name: 'ZTC Connectivity',
    description: 'Check if ZTC device is reachable',
    icon: Server,
    status: 'pending',
  },
];

export function Day0ReadinessCheck({ onComplete, onBack, onCancel }: Day0ReadinessCheckProps) {
  const [checks, setChecks] = useState<ValidationCheck[]>(INITIAL_CHECKS);
  const [isRunning, setIsRunning] = useState(false);
  const [overallStatus, setOverallStatus] = useState<'idle' | 'running' | 'complete' | 'failed'>('idle');

  const runValidation = async () => {
    setIsRunning(true);
    setOverallStatus('running');

    // Reset all checks
    setChecks(INITIAL_CHECKS.map(check => ({ ...check, status: 'pending' as const })));

    // Simulate validation checks with delays
    for (let i = 0; i < INITIAL_CHECKS.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setChecks(prev => prev.map((check, idx) => {
        if (idx === i) {
          // Simulate different outcomes
          if (check.id === 'ztc-connectivity') {
            return {
              ...check,
              status: 'warning' as const,
              message: 'ZTC device not yet online. Configuration will be applied when device connects.'
            };
          } else if (check.id === 'identity') {
            return {
              ...check,
              status: 'success' as const,
              message: 'Identity configuration validated successfully'
            };
          } else {
            return {
              ...check,
              status: 'success' as const,
              message: 'Validation passed'
            };
          }
        }
        return check;
      }));
    }

    setIsRunning(false);
    setOverallStatus('complete');
  };

  useEffect(() => {
    // Auto-run validation on mount
    runValidation();
  }, []);

  const getStatusIcon = (status: ValidationCheck['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'checking':
        return <RefreshCw className="h-5 w-5 text-[#0066CC] animate-spin" />;
      case 'pending':
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: ValidationCheck['status']) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-100 text-green-700">Passed</Badge>;
      case 'warning':
        return <Badge className="bg-orange-100 text-orange-700">Warning</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-700">Failed</Badge>;
      case 'checking':
        return <Badge className="bg-blue-100 text-blue-700">Checking...</Badge>;
      case 'pending':
      default:
        return <Badge variant="outline" className="bg-gray-50">Pending</Badge>;
    }
  };

  const completedChecks = checks.filter(c => c.status === 'success' || c.status === 'warning' || c.status === 'error').length;
  const successCount = checks.filter(c => c.status === 'success').length;
  const warningCount = checks.filter(c => c.status === 'warning').length;
  const errorCount = checks.filter(c => c.status === 'error').length;
  const progressPercent = (completedChecks / checks.length) * 100;
  const canDeploy = errorCount === 0 && overallStatus === 'complete';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Day-0 Readiness Validation</h2>
        <p className="text-gray-600">
          Pre-flight checklist to ensure your configuration is ready to deploy
        </p>
      </div>

      {/* Progress */}
      {isRunning && (
        <Card className="border-[#0066CC]">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-gray-900">Running validation checks...</p>
                <span className="text-sm text-gray-600">
                  {completedChecks} of {checks.length} complete
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overall Status */}
      {overallStatus === 'complete' && (
        <Alert className={canDeploy ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'}>
          {canDeploy ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-orange-600" />
          )}
          <AlertDescription>
            <div className="space-y-2">
              <p className="text-gray-900">
                {canDeploy ? (
                  <strong>Ready to Deploy!</strong>
                ) : (
                  <strong>Configuration Complete with Warnings</strong>
                )}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-green-700">{successCount} passed</span>
                {warningCount > 0 && (
                  <span className="text-orange-700">{warningCount} warnings</span>
                )}
                {errorCount > 0 && (
                  <span className="text-red-700">{errorCount} errors</span>
                )}
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Validation Checks */}
      <div className="space-y-3">
        {checks.map((check) => {
          const CheckIcon = check.icon;
          return (
            <Card key={check.id} className="border-2">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <CheckIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusIcon(check.status)}
                        <p className="text-gray-900">{check.name}</p>
                      </div>
                      <p className="text-sm text-gray-600">{check.description}</p>
                      {check.message && (
                        <p className={`text-sm mt-2 ${
                          check.status === 'success' ? 'text-green-700' :
                          check.status === 'warning' ? 'text-orange-700' :
                          check.status === 'error' ? 'text-red-700' :
                          'text-gray-700'
                        }`}>
                          {check.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {getStatusBadge(check.status)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ZTC Status Detail */}
      {overallStatus === 'complete' && warningCount > 0 && (
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              ZTC Device Status
            </CardTitle>
            <CardDescription>
              Your configuration is ready, but the ZTC device is not yet online
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700">
              The Day-0 configuration will be automatically pushed to your ZTC device when it:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>Powers on and connects to the network</li>
              <li>Establishes connection to SonicPlatform</li>
              <li>Authenticates with the activation key</li>
            </ul>
            <Alert>
              <CheckCircle2 className="h-4 w-4 text-[#0066CC]" />
              <AlertDescription className="text-sm">
                You can safely complete Day-0 setup now. The configuration will be deployed automatically.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button variant="outline" onClick={onBack}>
              Back
            </Button>
          )}
          {overallStatus === 'complete' && (
            <Button
              variant="outline"
              onClick={runValidation}
              disabled={isRunning}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRunning ? 'animate-spin' : ''}`} />
              Re-run Validation
            </Button>
          )}
        </div>
        {onComplete && overallStatus === 'complete' && (
          <Button
            onClick={onComplete}
            className="bg-green-600 hover:bg-green-700"
          >
            <Rocket className="h-4 w-4 mr-2" />
            Complete Day-0 Setup
          </Button>
        )}
        {onCancel && (
          <Button
            onClick={onCancel}
            className="bg-red-600 hover:bg-red-700"
          >
            <XCircle className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}