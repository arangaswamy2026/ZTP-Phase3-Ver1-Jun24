import svgPaths from "./svg-0eeovw92m3";

export default function TablePagination() {
  return (
    <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative size-full" data-name="Table / Pagination">
      <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Showing 1-10 of 1267 records | 10 per page
        </p>
        <div className="relative shrink-0 size-[16px]" data-name="arrow-down">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="arrow-down">
              <path d={svgPaths.p29764480} fill="var(--fill-0, #191C25)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[297px]" data-name="Table / Slider">
        <div className="content-stretch flex gap-[4px] h-[29px] items-center relative shrink-0 w-full" data-name="Slider">
          <div className="relative shrink-0 size-[12px]" data-name="Table / Slider / Endpoint">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" id="Ellipse 12" r="5.5" stroke="var(--stroke-0, #555555)" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[29px] items-start justify-center min-h-px min-w-px py-px relative" data-name="Slider">
            <div className="bg-white h-[4px] relative rounded-[23px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[#d5dbe5] border-solid inset-0 pointer-events-none rounded-[23px]" />
            </div>
            <div className="absolute bg-[#e4e4e4] content-stretch flex flex-col items-end justify-center left-0 pl-[37px] rounded-[32px] top-[12.5px]" data-name="Table / Slider / Bar">
              <div className="h-[4px] rounded-[23px] shrink-0 w-[12px]" />
            </div>
            <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-0 pl-[34px] top-1/2" data-name="Move">
              <div className="bg-[#d5dbe5] content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[4px] relative rounded-[88px] shrink-0 w-[104px]" data-name="Table / Slider / Ball">
                <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[13px] whitespace-nowrap">
                  <p className="leading-[normal]">Page 1</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-name="arrow-down">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g id="arrow-down">
                      <path d="M6 9.5L10.5 4L1.5 4L6 9.5Z" fill="var(--fill-0, #555555)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[12px]" data-name="Table / Slider / Endpoint">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--fill-0, #E4E4E4)" id="Ellipse 13" r="5.5" stroke="var(--stroke-0, #999999)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}