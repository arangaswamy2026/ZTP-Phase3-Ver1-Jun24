import svgPaths from "./svg-t0fuyfnnfj";

export default function Container({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col h-[241px] items-start p-px relative rounded-[8px] w-[1007px]"} data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="h-[66px] relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
          <div className="content-stretch flex h-[56px] items-center justify-between px-[16px] relative shrink-0 w-[1005px]" data-name="Container">
            <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                    <div className="relative shrink-0 size-[16px]" data-name="ChevronUp">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="ChevronUp">
                          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-[20px] relative shrink-0 w-[649px]" data-name="span">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start not-italic relative size-full">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">Disk Encryption</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#6a7282] text-[13px] w-full">Verifies that full disk encryption (e.g., BitLocker, FileVault) is enabled on the device to protect data at rest.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[24px] relative shrink-0 w-[44px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <div className="absolute bg-[#1447e6] content-stretch flex h-[24px] items-center left-0 pl-[23px] rounded-[33554400px] top-0 w-[44px]" data-name="button">
                  <div className="bg-white rounded-[33554400px] shrink-0 size-[18px]" data-name="span" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[174px] relative shrink-0 w-[1005px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] pt-[5px] relative size-full">
          <div className="bg-white h-[169px] relative rounded-[8px] shrink-0 w-[973px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pl-[16px] py-[16px] relative size-full">
              <div className="bg-[#f9fafb] h-[123px] relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start p-[10px] relative">
                  <div className="content-stretch flex flex-col gap-[12px] h-[104px] items-start relative shrink-0 w-[435px]">
                    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="h-[16px] relative shrink-0 w-full" data-name="span">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[13px]">If this check fails, set device trust level to:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-[320px]" data-name="span">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">High Trust Level</p>
                      <div className="relative shrink-0 w-[54px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                          <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g id="arrow-left2">
                                <path d={svgPaths.p1eb4c200} fill="var(--fill-0, #A1B3D5)" id="Vector" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">Low Trust Level</p>
                    </div>
                    <div className="h-[36px] relative shrink-0 w-[320px]" data-name="span">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[287px]">{`If this Factor is not satisfied, the device's Trust Level will be set to low.`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[70px] relative shrink-0 w-[441px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <div className="absolute content-stretch flex items-start justify-between left-[6px] pr-[0.016px] top-[72px] w-[350px]" data-name="Container">
                    <div className="h-[14px] relative shrink-0 w-[74.719px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-0 not-italic text-[#9ca3af] text-[10px] top-0 tracking-[0.3px] whitespace-nowrap">ALWAYS DENY</p>
                      </div>
                    </div>
                    <div className="h-[14px] relative shrink-0 w-[39.328px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute bg-[#eff6ff] border border-[#1447e6] border-solid h-[30px] left-[-20.39px] rounded-[4px] top-[-8px] w-[55.531px]" data-name="Container">
                          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[8px] not-italic text-[#1447e6] text-[10px] top-[7px] whitespace-nowrap">LOW TL</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[14px] relative shrink-0 w-[58.781px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[29.5px] not-italic text-[#9ca3af] text-[10px] text-center top-0 tracking-[0.3px] whitespace-nowrap">MEDIUM TL</p>
                      </div>
                    </div>
                    <div className="h-[14px] relative shrink-0 w-[58.141px]" data-name="button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[59px] not-italic text-[#9ca3af] text-[10px] text-right top-0 tracking-[0.3px] whitespace-nowrap">NO EFFECT</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[40px] left-[12px] top-[19px] w-[320px]" data-name="Container">
                    <div className="absolute bg-[#e5e7eb] h-[4px] left-0 rounded-[33554400px] top-[18px] w-[320px]" data-name="Container" />
                    <div className="absolute bg-[#1447e6] h-[4px] left-0 rounded-[33554400px] top-[18px] w-[106.656px]" data-name="Container" />
                    <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[-6px] rounded-[33554400px] size-[12px] top-[14px]" data-name="button" />
                    <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[100.66px] rounded-[33554400px] size-[12px] top-[14px]" data-name="button" />
                    <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[207.33px] rounded-[33554400px] size-[12px] top-[14px]" data-name="button" />
                    <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[314px] rounded-[33554400px] size-[12px] top-[14px]" data-name="button" />
                    <div className="absolute bg-white border-2 border-[#1447e6] border-solid left-[96.66px] rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[20px] top-[10px]" data-name="Container" />
                  </div>
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[6px] not-italic text-[#6a7282] text-[12px] top-[7px] w-[435px]">Select trust effect if the Trust factor check fails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}