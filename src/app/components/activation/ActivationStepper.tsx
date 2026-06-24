import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
}

interface ActivationStepperProps {
  steps: Step[];
  currentStep: number;
}

export function ActivationStepper({ steps, currentStep }: ActivationStepperProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-[#0066CC] transition-all duration-500 -z-10"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center gap-2 relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#0066CC] text-white'
                    : isCurrent
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-200'
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`text-xs whitespace-nowrap transition-colors ${
                  isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
