import { ReactNode } from 'react';
import { TenantProvider } from '../contexts/TenantContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <TenantProvider>
      {children}
    </TenantProvider>
  );
}
