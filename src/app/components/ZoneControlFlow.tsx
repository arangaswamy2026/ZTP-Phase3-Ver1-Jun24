import React from 'react';
import { Globe, Building2, Users, ArrowRight, ArrowLeft, ShieldAlert, ShieldCheck } from 'lucide-react';

export function ZoneControlFlow() {
  return (
    <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 mt-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-3xl mx-auto">
        
        {/* Guest Zone */}
        <div className="flex flex-col items-center gap-2 z-10">
          <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center border-2 border-orange-200 text-orange-600 shadow-sm">
            <Users className="w-8 h-8" />
          </div>
          <div className="text-center">
            <div className="font-bold text-slate-700">Guest</div>
            <div className="text-xs text-slate-500 font-medium bg-slate-200 px-2 py-0.5 rounded-full mt-1">Untrusted</div>
          </div>
        </div>

        {/* Guest <-> LAN Arrows */}
        <div className="flex-1 flex flex-row md:flex-col gap-3 items-center justify-center min-w-[120px]">
           {/* LAN -> Guest (Allow) */}
           <div className="flex items-center gap-2 w-full justify-center opacity-50 hover:opacity-100 transition-opacity group">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-1.5 py-0.5 rounded">Allow</span>
              <div className="relative h-0.5 bg-emerald-400 w-full max-w-[80px]">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 -mt-[3px] w-2 h-2 border-t-2 border-r-2 border-emerald-400 rotate-45 transform"></div>
                 {/* For horizontal flow (mobile: vertical needs change) - sticking to MD layout logic for simplicity first, but using flex-col on container implies vertical arrows? 
                     Wait, the main container is flex-col md:flex-row. 
                     So on desktop: Horizontal. 
                     LAN is Middle. Guest Left.
                     LAN -> Guest is Leftward arrow.
                 */}
              </div>
           </div>

           {/* Guest -> LAN (Deny) */}
           <div className="flex items-center gap-2 w-full justify-center group">
              <div className="relative h-0.5 bg-red-400 w-full max-w-[80px]">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 -mt-[3px] w-2 h-2 border-t-2 border-r-2 border-red-400 rotate-45 transform"></div>
              </div>
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 bg-slate-50" />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-1.5 py-0.5 rounded">Deny</span>
           </div>
        </div>

        {/* RE-THINKING ARROWS FOR HORIZONTAL LAYOUT (Guest ... LAN ... WAN) */}
        {/* Let's build a custom SVG based diagram for better control over arrows */}
      </div>

      <div className="py-8 flex items-center justify-between px-4 md:px-12">
          {/* Guest Node */}
          <div className="z-10 flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-white border-2 border-orange-200 text-orange-500 shadow-sm flex items-center justify-center">
                  <Users className="w-7 h-7" />
              </div>
              <span className="font-bold text-sm text-slate-700">Guest</span>
          </div>

          {/* Flow: Guest <-> LAN */}
          <div className="flex-1 flex flex-col gap-3 px-4 relative h-16 justify-center">
              {/* Guest -> LAN: DENY */}
              <div className="w-full flex items-center gap-2">
                  <div className="h-[2px] flex-1 bg-red-200 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-red-400 rotate-45"></div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-1">
                          <ShieldAlert className="w-4 h-4 text-red-500" />
                      </div>
                  </div>
              </div>
              {/* LAN -> Guest: ALLOW */}
              <div className="w-full flex items-center gap-2">
                   <div className="h-[2px] flex-1 bg-emerald-200 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b-2 border-l-2 border-emerald-400 rotate-45"></div>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-50 text-[9px] font-bold text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">
                        ALLOW
                      </span>
                  </div>
              </div>
          </div>

          {/* LAN Node (Center) */}
          <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-blue-600 border-2 border-blue-700 text-white shadow-md flex items-center justify-center ring-4 ring-blue-50">
                  <Building2 className="w-8 h-8" />
              </div>
              <span className="font-bold text-sm text-slate-900">LAN (Corp)</span>
          </div>

          {/* Flow: LAN <-> WAN */}
          <div className="flex-1 flex flex-col gap-3 px-4 relative h-16 justify-center">
               {/* LAN -> WAN: ALLOW */}
               <div className="w-full flex items-center gap-2">
                   <div className="h-[2px] flex-1 bg-emerald-200 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-emerald-400 rotate-45"></div>
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-50 text-[9px] font-bold text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">
                        ALLOW
                      </span>
                  </div>
              </div>
              {/* WAN -> LAN: DENY */}
              <div className="w-full flex items-center gap-2">
                  <div className="h-[2px] flex-1 bg-red-200 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-b-2 border-l-2 border-red-400 rotate-45"></div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-1">
                          <ShieldAlert className="w-4 h-4 text-red-500" />
                      </div>
                  </div>
              </div>
          </div>

          {/* WAN Node */}
          <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-white border-2 border-slate-200 text-purple-600 shadow-sm flex items-center justify-center">
                  <Globe className="w-7 h-7" />
              </div>
              <span className="font-bold text-sm text-slate-700">WAN</span>
          </div>
      </div>
      
      {/* Legend / Key */}
      <div className="flex items-center justify-center gap-6 mt-2 border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
           <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
           <span>Allowed Traffic</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
           <div className="w-2 h-2 rounded-full bg-red-500"></div>
           <span>Blocked Traffic</span>
        </div>
      </div>
    </div>
  );
}