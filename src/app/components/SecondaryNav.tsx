import React from 'react';
import { appLabels, appIds } from './PrimaryNav';
import { appNavItems, allTenantsNavItems } from './navigationData';

interface SecondaryNavProps {
  activeApp: string;
  activePage: string;
  onNavigate: (pageId: string) => void;
  isAllTenantsView?: boolean;
}

export function SecondaryNav({ activeApp, activePage, onNavigate, isAllTenantsView }: SecondaryNavProps) {
  const appIndex = appIds.indexOf(activeApp);
  const appLabel = appIndex >= 0 ? appLabels[appIndex] : '';

  const navItems = isAllTenantsView
    ? allTenantsNavItems
    : (appNavItems[activeApp] || []).filter(
        (item) => !['apps', 'settings', 'tenants', 'overview', 'tenant-management'].includes(item.id)
      );

  const title = isAllTenantsView ? 'All Tenants' : (appLabel === 'Zero Trust' ? 'ZTP' : appLabel);

  return (
    <div className="w-48 bg-[#f8f9fa] border-r border-gray-200 flex flex-col h-screen sticky top-0 left-[60px] z-40">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-gray-900 uppercase tracking-wide">{title}</h2>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${
                isActive
                  ? 'bg-[#FF5D00] text-white shadow-md'
                  : 'text-gray-700 hover:bg-white/50'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{item.id === 'users' ? 'Users' : item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}