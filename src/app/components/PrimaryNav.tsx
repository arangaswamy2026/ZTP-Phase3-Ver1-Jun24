import React from 'react';
import svgPaths from '../imports/svg-jcj2bsmqk9';
import CybageNavIcons from '../imports/CybageNavIcons';

export const appIds = [
  'dashboard',
  'inventory',
  'admin-setting',
  'ztp',
  'firewall',
  'capture-client',
  'rdp',
  'ap-switch',
  'mdr',
  'cse',
  'sami'
];

export const appLabels = [
  'Dashboard',
  'Inventory', 
  'Admin Setting',
  'ZTP',
  'Firewall',
  'Capture Client',
  'RDP',
  'AP & Switch',
  'MDR',
  'CSE',
  'SAMI'
];

function Logo() {
  return (
    <div className="flex items-center justify-center h-[50px] shrink-0 w-[60px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 50">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.pe185b00} fill="#FF5D00" fillRule="evenodd" id="Fill 10" />
        </g>
      </svg>
    </div>
  );
}

function NavigationTabItem({ 
  svgContent, 
  isActive, 
  onClick, 
  label,
  showZTCLabel = false
}: { 
  svgContent: React.ReactNode; 
  isActive: boolean; 
  onClick: () => void;
  label: string;
  showZTCLabel?: boolean;
}) {
  return (
    <div className="bg-[#001b50] shrink-0 w-full" data-name="Navigation/Tab">
      <style>{`
        .nav-icon-active svg path {
          fill: #FF5D00 !important;
        }
      `}</style>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-[5px] py-[14px] w-full gap-0">
          {/* Orange Highlight Bar */}
          {isActive ? (
            <div className="bg-[#ff5d00] h-[26px] w-[3px] shrink-0 self-center rounded-r-sm" />
          ) : (
            <div className="w-[3px] shrink-0" />
          )}
          
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={onClick}
              className="relative group flex items-center justify-center"
              title={label}
            >
              <div className={`flex items-center justify-center ${isActive ? 'nav-icon-active' : ''}`}>
                {svgContent}
                
                {/* ZTP Label overlay when active */}
                {showZTCLabel && isActive && (
                  <p className="absolute font-['Inter'] font-bold leading-[normal] left-1/2 -translate-x-1/2 not-italic text-[#FF5D00] text-[10px] text-nowrap top-1/2 -translate-y-1/2 whitespace-pre">
                    ZTP
                  </p>
                )}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                {label}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PrimaryNavProps {
  activeApp: string;
  onAppChange: (appId: string) => void;
}

export function PrimaryNav({ activeApp, onAppChange }: PrimaryNavProps) {
  // SVG icon configurations for each tab
  const navigationTabs = [
    // Tab 0 - Home (Dashboard grid)
    <div className="flex items-center justify-center shrink-0 size-[24px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Union">
          <path d={svgPaths.p26816980} fill="#C4D1E5" />
          <path d={svgPaths.p25948f70} fill="#C4D1E5" />
          <path d={svgPaths.p146d2980} fill="#C4D1E5" />
          <path d={svgPaths.p25c19371} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 1 - Firewall
    <div className="flex items-center justify-center h-[25.5px] shrink-0 w-[28.846px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p39d5f800} fill="#C4D1E5" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p54b6f70} fill="#C4D1E5" fillRule="evenodd" />
        </g>
      </svg>
    </div>,
    
    // Tab 2 - VPN
    <div className="flex items-center justify-center h-[27.821px] shrink-0 w-[28.799px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 28">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p1246d380} fill="#C4D1E5" fillRule="evenodd" />
          <path d={svgPaths.p295b3800} fill="#C4D1E5" />
          <path d={svgPaths.p1cd385b0} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 3 - ZTC (Zero Trust Connector)
    <div className="flex items-center justify-center h-[30px] shrink-0 w-[28px]" data-name="Subtract">
      <CybageNavIcons />
    </div>,
    
    // Tab 4 - Cloud
    <div className="flex items-center justify-center h-[22.801px] shrink-0 w-[27.294px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23">
        <g id="Union">
          <path d={svgPaths.p802acb1} fill="#C4D1E5" />
          <path d={svgPaths.p11efd480} fill="#C4D1E5" />
          <path d={svgPaths.p1456a500} fill="#C4D1E5" />
          <path d={svgPaths.p3b115240} fill="#C4D1E5" />
          <path d={svgPaths.p3f6a4c00} fill="#C4D1E5" />
          <path d={svgPaths.p20d02df0} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 5 - Wireless
    <div className="flex items-center justify-center h-[25.2px] shrink-0 w-[22.8px]" data-name="Subtract">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
        <g id="Subtract">
          <path d={svgPaths.p1c18bb80} fill="#C4D1E5" />
          <path d={svgPaths.pa65e780} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 6 - Email Security
    <div className="flex items-center justify-center h-[28.577px] shrink-0 w-[32.765px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 29">
        <g id="Union">
          <path d={svgPaths.p124ec610} fill="#C4D1E5" />
          <path d={svgPaths.p4b05500} fill="#C4D1E5" />
          <path clipRule="evenodd" d={svgPaths.p803bb00} fill="#C4D1E5" fillRule="evenodd" />
          <path d={svgPaths.p2fa74c00} fill="#C4D1E5" />
          <path d={svgPaths.pbb96400} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 7 - Endpoint
    <div className="flex items-center justify-center h-[24.899px] shrink-0 w-[28.5px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 25">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p2c071e00} fill="#C4D1E5" fillRule="evenodd" />
          <path d={svgPaths.p1d094d00} fill="#C4D1E5" />
          <path d={svgPaths.p3a600680} fill="#C4D1E5" />
          <path d={svgPaths.p1061c0} fill="#C4D1E5" />
          <path d={svgPaths.p3dfd6f00} fill="#C4D1E5" />
          <path d={svgPaths.p33570f80} fill="#C4D1E5" />
          <path d={svgPaths.p3f361800} fill="#C4D1E5" />
          <path d={svgPaths.p2a51bc00} fill="#C4D1E5" />
          <path d={svgPaths.p1c30c100} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 8 - Switch
    <div className="flex items-center justify-center h-[28.679px] shrink-0 w-[31.077px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 29">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p2b3ba3c0} fill="#C4D1E5" fillRule="evenodd" />
          <path d={svgPaths.p39d92500} fill="#C4D1E5" />
          <path d={svgPaths.p256ddd00} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 9 - Analytics
    <div className="flex items-center justify-center h-[25.199px] shrink-0 w-[28.802px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Union">
          <path d={svgPaths.p117e8a00} fill="#C4D1E5" />
          <path d={svgPaths.p6f9e500} fill="#C4D1E5" />
        </g>
      </svg>
    </div>,
    
    // Tab 10 - MSP Portal
    <div className="flex items-center justify-center h-[30.754px] shrink-0 w-[31.2px]" data-name="Union">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 31">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p13e19100} fill="#D4E3F9" fillRule="evenodd" />
          <path d={svgPaths.p37415370} fill="#D4E3F9" />
          <path d={svgPaths.p33f09d00} fill="#D4E3F9" />
        </g>
      </svg>
    </div>,
  ];

  return (
    <div className="w-[60px] h-screen bg-[#001b50] flex flex-col items-center sticky top-0 left-0 z-50">
      {/* Logo */}
      <div className="shrink-0">
        <Logo />
      </div>
      
      {/* Navigation Items */}
      <div className="flex-1 flex flex-col gap-px w-full overflow-y-auto overflow-x-hidden no-scrollbar">
        {navigationTabs.map((tabContent, index) => (
          <NavigationTabItem
            key={appIds[index]}
            svgContent={tabContent}
            isActive={activeApp === appIds[index]}
            onClick={() => onAppChange(appIds[index])}
            label={appLabels[index]}
            showZTCLabel={appIds[index] === 'ztp'}
          />
        ))}
      </div>
    </div>
  );
}