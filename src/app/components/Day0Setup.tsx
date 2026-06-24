import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ZoneConfiguration } from './ZoneConfiguration';
import { PolicyTemplates } from './PolicyTemplates';
import { IdentityConfiguration } from './IdentityConfiguration';
import { ClientDeployment } from './ClientDeployment';
import { Day0ReadinessCheck } from './Day0ReadinessCheck';
import { Day0SetupSinglePage } from './Day0SetupSinglePage';
import {
  CheckCircle2,
  Circle,
  Network,
  Shield,
  Users,
  Rocket,
  Download,
} from 'lucide-react';

interface Day0SetupProps {
  onComplete?: () => void;
  onCancel?: () => void;
  setupType?: 'wizard' | 'single-page';
  onViewChange?: (view: 'wizard' | 'single-page') => void;
}

type SetupStep = 
  | 'zones'
  | 'policies'
  | 'identity'
  | 'deployment'
  | 'validation';

interface Step {
  id: SetupStep;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  optional: boolean;
}

const SETUP_STEPS: Step[] = [
  {
    id: 'zones',
    name: 'Zones & Network',
    description: 'Configure network zones and subnets',
    icon: Network,
    optional: false,
  },
  {
    id: 'policies',
    name: 'Security Policies',
    description: 'Define access control policies',
    icon: Shield,
    optional: false,
  },
  {
    id: 'identity',
    name: 'Identity & SSO',
    description: 'Configure authentication',
    icon: Users,
    optional: true,
  },
  {
    id: 'deployment',
    name: 'Client Deployment',
    description: 'Download apps and configure enrollment',
    icon: Download,
    optional: false,
  },
  {
    id: 'validation',
    name: 'Validation',
    description: 'Pre-flight readiness check',
    icon: Rocket,
    optional: false,
  },
];

export function Day0Setup({ onComplete, onCancel, setupType = 'wizard', onViewChange }: Day0SetupProps) {
  const [currentStep, setCurrentStep] = useState<SetupStep>('zones');
  const [completedSteps, setCompletedSteps] = useState<SetupStep[]>([]);
  const [currentSetupType, setCurrentSetupType] = useState<'wizard' | 'single-page'>(setupType);

  useEffect(() => {
    setCurrentSetupType(setupType);
  }, [setupType]);

  const handleViewChange = (view: 'wizard' | 'single-page') => {
    setCurrentSetupType(view);
    onViewChange?.(view);
  };

  // If single-page type is selected, render the single-page component
  if (currentSetupType === 'single-page') {
    return (
      <Day0SetupSinglePage 
        onComplete={onComplete} 
        onCancel={onCancel} 
        activeView={currentSetupType}
        onViewChange={handleViewChange}
      />
    );
  }

  const currentStepIndex = SETUP_STEPS.findIndex(s => s.id === currentStep);
  const progress = ((currentStepIndex + 1) / SETUP_STEPS.length) * 100;

  const handleNext = () => {
    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    // Move to next step
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < SETUP_STEPS.length) {
      setCurrentStep(SETUP_STEPS[nextIndex].id);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(SETUP_STEPS[prevIndex].id);
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const getStepStatus = (stepId: SetupStep) => {
    if (completedSteps.includes(stepId)) return 'complete';
    if (stepId === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className="space-y-6">
      {/* Header with inline progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl text-gray-900">Default Configuration</h1>
          <div className="flex items-center gap-4">
            {/* Compact Progress Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Step {currentStepIndex + 1} of {SETUP_STEPS.length}
              </span>
              <Badge variant="outline" className="bg-gray-50 text-xs">
                {SETUP_STEPS[currentStepIndex].name}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={progress} className="h-1.5 w-32" />
              <span className="text-xs text-gray-500 min-w-[45px]">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">
          Complete the initial setup to configure your Zero Trust Connector
        </p>
      </div>

      {/* Step Navigation */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-5 gap-3">
            {SETUP_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              const status = getStepStatus(step.id);
              const isClickable = completedSteps.includes(step.id) || step.id === currentStep;

              return (
                <button
                  key={step.id}
                  onClick={() => isClickable && setCurrentStep(step.id)}
                  disabled={!isClickable}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    status === 'active'
                      ? 'border-[#0066CC] bg-blue-50'
                      : status === 'complete'
                      ? 'border-green-200 bg-green-50 hover:border-green-300'
                      : 'border-gray-200 bg-white opacity-50'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <div className={`p-1.5 rounded ${
                      status === 'active'
                        ? 'bg-blue-100'
                        : status === 'complete'
                        ? 'bg-green-100'
                        : 'bg-gray-100'
                    }`}>
                      {status === 'complete' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <StepIcon className={`h-4 w-4 ${
                          status === 'active' ? 'text-[#0066CC]' : 'text-gray-400'
                        }`} />
                      )}
                    </div>
                  </div>
                  <p className={`text-sm ${
                    status === 'active' ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.name}
                  </p>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div>
        {currentStep === 'zones' && (
          <ZoneConfiguration
            onContinue={handleNext}
            onCancel={onCancel}
          />
        )}

        {currentStep === 'policies' && (
          <PolicyTemplates
            onSelectTemplate={(template) => {
              console.log('Selected template:', template);
            }}
            onCustomPolicy={() => {
              console.log('Create custom policy');
            }}
            onBack={handleBack}
            onContinue={handleNext}
            onCancel={onCancel}
          />
        )}

        {currentStep === 'identity' && (
          <IdentityConfiguration
            onBack={handleBack}
            onContinue={handleNext}
            onCancel={onCancel}
          />
        )}

        {currentStep === 'deployment' && (
          <ClientDeployment
            onContinue={handleNext}
            onCancel={onCancel}
          />
        )}

        {currentStep === 'validation' && (
          <Day0ReadinessCheck
            onBack={handleBack}
            onComplete={handleComplete}
            onCancel={onCancel}
          />
        )}
      </div>
    </div>
  );
}