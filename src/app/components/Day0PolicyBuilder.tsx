import React from 'react';
import { PolicyBuilder } from './PolicyBuilder';

interface Day0PolicyBuilderProps {
  policyId?: string;
  onBack?: () => void;
  onSave?: () => void;
}

export function Day0PolicyBuilder({ policyId, onBack, onSave }: Day0PolicyBuilderProps) {
  // For now, this is a wrapper around PolicyBuilder
  // In the future, this could add Day-0 specific features
  return (
    <PolicyBuilder
      policyId={policyId}
      onBack={onBack}
      onSave={onSave}
    />
  );
}
