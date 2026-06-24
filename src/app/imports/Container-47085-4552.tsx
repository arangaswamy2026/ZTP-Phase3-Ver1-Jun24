function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[800px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">What this policy does:</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[800px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#364153] text-[0px] top-[0.5px] whitespace-nowrap">
          <span className="leading-[20px] text-[14px]">{`This policy `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[#16a34a] text-[14px]">ALLOWS</span>
          <span className="leading-[20px] text-[14px]">{` traffic initiated by `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[14px]">Employee Zone</span>
          <span className="leading-[20px] text-[14px]">{` targeting `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#101828] text-[14px]">Internet</span>
          <span className="leading-[20px] text-[14px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[61px] relative shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start pb-px relative size-full">
        <Text />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{`IP Range: `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">
        <span className="leading-[16px]">{` `}</span>
        <span className="leading-[16px]">192.168.1.0/24</span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Protocol:</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">All</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Ports:</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 w-[86px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container4 />
          <Container5 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="relative rounded-[8px] shrink-0 w-[79px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container6 />
          <Container7 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[24px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 w-[160px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container2 />
          <Container3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[81.57px] items-start relative shrink-0 w-[172px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[20px] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] w-full">Source</p>
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[171.82px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.82 20">
        <g id="Frame 1151556186">
          <path d="M10 10H161.82" id="Vector 1" stroke="var(--stroke-0, #008236)" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[30.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#008236] text-[12px] top-px whitespace-nowrap">Allow</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center px-[9px] py-[4px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[171.82px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.82 20">
        <g id="Frame 1151556186">
          <path d="M10 10H161.82" id="Vector 1" stroke="var(--stroke-0, #008236)" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{`IP Range: `}</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-pre">{`192.168.1.0/24   `}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Protocol:</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">All</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[9px] py-[4px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-l border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Ports:</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex items-center justify-center pl-[4px] pr-[9px] py-[4px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-pre">
        <span className="leading-[16px]">{` `}</span>
        <span className="leading-[16px]">{` 22, 50-250`}</span>
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 w-[86px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container11 />
          <Container12 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="relative rounded-[8px] shrink-0 w-[126px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container13 />
          <Container14 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[24px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[8px] shrink-0 w-[157px]">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Container9 />
          <Container10 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[81.57px] items-start relative shrink-0 w-[220px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[20px] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] w-full">Destination</p>
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-0 top-0">
      <Frame8 />
      <Frame1 />
      <Container8 />
      <Frame2 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] relative shrink-0 w-[752px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pl-[28px] py-[20px] relative size-full" data-name="Container">
      <Container1 />
      <Frame />
    </div>
  );
}