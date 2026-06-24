import svgPaths from "./svg-dgokys17dd";

function Container3() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.344px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">Security Controls</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container3 />
        <H />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Category Blocking</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[142.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span />
        <Info />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-px py-px relative size-full">
        <SwitchPrimitiveThumb />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container6 />
        <Switch />
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#3b82f6] text-[13px] top-0 whitespace-nowrap">Select categories for blocking</p>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[81.08px] size-[12px] top-[6px]" data-name="button">
      <X />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-0 rounded-[6px] top-0 w-[103.078px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">Adult Issues</p>
      <Button />
    </div>
  );
}

function X1() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[65.59px] size-[12px] top-[6px]" data-name="button">
      <X1 />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[109.08px] rounded-[6px] top-0 w-[87.594px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">Gambling</p>
      <Button1 />
    </div>
  );
}

function X2() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[159.05px] size-[12px] top-[6px]" data-name="button">
      <X2 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[202.67px] rounded-[6px] top-0 w-[181.047px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">{`Malicious Sites & Phishing`}</p>
      <Button2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[26px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span1 />
        <Span2 />
        <Span3 />
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[11px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Plus">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[212.078px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Plus />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[116.5px] not-italic text-[#364153] text-[13px] text-center top-[9px] whitespace-nowrap">Select categories to Block</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[72px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <P />
        <Container8 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[168px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Application Blocking</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[156.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span4 />
        <Info1 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb1() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch1() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-px py-px relative size-full">
        <SwitchPrimitiveThumb1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container13 />
        <Switch1 />
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#3b82f6] text-[13px] top-0 whitespace-nowrap">Which applications would you like to block access to?</p>
      </div>
    </div>
  );
}

function X3() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[67.63px] size-[12px] top-[6px]" data-name="button">
      <X3 />
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-0 rounded-[6px] top-0 w-[89.625px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">BitTorrent</p>
      <Button4 />
    </div>
  );
}

function X4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64.67px] size-[12px] top-[6px]" data-name="button">
      <X4 />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[95.63px] rounded-[6px] top-0 w-[86.672px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">NordVPN</p>
      <Button5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[26px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span5 />
        <Span6 />
      </div>
    </div>
  );
}

function Plus1() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[11px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Plus">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[124.656px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Plus1 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[72.5px] not-italic text-[#364153] text-[13px] text-center top-[9px] whitespace-nowrap">Select Apps</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[72px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <P1 />
        <Container15 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[168px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">Application Bypass</p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span7 />
        <Info2 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb2() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch2() {
  return (
    <div className="bg-[#cbced4] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-px relative size-full">
        <SwitchPrimitiveThumb2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container20 />
        <Switch2 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Domain Blocking</p>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[131.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span8 />
        <Info3 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb3() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch3() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-px py-px relative size-full">
        <SwitchPrimitiveThumb3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container23 />
        <Switch3 />
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#3b82f6] text-[13px] top-0 whitespace-nowrap">Which domains would you like to block access to?</p>
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[12px]">Includes subdomains (e.g gambling.com would include bets.gambling.com)</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Enter domain (e.g. salesforce.com)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Plus2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Plus">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[36px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Plus2 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Input />
        <Button7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[36px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <P2 />
        <P3 />
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[160px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container22 />
        <Container24 />
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">Domain Bypass</p>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span9 />
        <Info4 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb4() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch4() {
  return (
    <div className="bg-[#cbced4] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-px relative size-full">
        <SwitchPrimitiveThumb4 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container29 />
        <Switch4 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Geo-Blocking</p>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span10 />
        <Info5 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb5() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch5() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-px py-px relative size-full">
        <SwitchPrimitiveThumb5 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container32 />
        <Switch5 />
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#3b82f6] text-[13px] top-0 whitespace-nowrap">Block traffic to high-risk regions</p>
      </div>
    </div>
  );
}

function X5() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48.81px] size-[12px] top-[6px]" data-name="button">
      <X5 />
    </div>
  );
}

function Span11() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-0 rounded-[6px] top-0 w-[70.813px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">Russia</p>
      <Button8 />
    </div>
  );
}

function X6() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44.47px] size-[12px] top-[6px]" data-name="button">
      <X6 />
    </div>
  );
}

function Span12() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[76.81px] rounded-[6px] top-0 w-[66.469px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">China</p>
      <Button9 />
    </div>
  );
}

function X7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33.44px] size-[12px] top-[6px]" data-name="button">
      <X7 />
    </div>
  );
}

function Span13() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[149.28px] rounded-[6px] top-0 w-[55.438px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">Iran</p>
      <Button10 />
    </div>
  );
}

function X8() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="X">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80.56px] size-[12px] top-[6px]" data-name="button">
      <X8 />
    </div>
  );
}

function Span14() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[210.72px] rounded-[6px] top-0 w-[102.563px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4px] whitespace-nowrap">North Korea</p>
      <Button11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[26px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span11 />
        <Span12 />
        <Span13 />
        <Span14 />
      </div>
    </div>
  );
}

function Plus3() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[11px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Plus">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[142.297px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Plus3 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[81.5px] not-italic text-[#364153] text-[13px] text-center top-[9px] whitespace-nowrap">Select Regions</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Button12 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[72px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <P4 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container31 />
        <Container33 />
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[842px]" data-name="h4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">URL Blocking</p>
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[842px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9ca3af] text-[12px] top-0 w-[828px]">Risk Based URL Blocking is not supported on Linux and Chromebooks. Linux based devices and Chromebooks will not be affected if this feature is enabled.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[68px] relative shrink-0 w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative size-full">
        <H1 />
        <P5 />
      </div>
    </div>
  );
}

function Span15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Risk-Based URL Blocking (AI/NLP)</p>
      </div>
    </div>
  );
}

function Info6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[248.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span15 />
        <Info6 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb6() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch6() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[15px] pr-px py-px relative size-full">
        <SwitchPrimitiveThumb6 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container40 />
        <Switch6 />
      </div>
    </div>
  );
}

function P6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#3b82f6] text-[13px] top-0 whitespace-nowrap">AI-based classification to prevent phishing and typo-squatting</p>
      </div>
    </div>
  );
}

function X9() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="X">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="X">
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Span16() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[34.188px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-0 whitespace-nowrap">Block</p>
    </div>
  );
}

function Span17() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[73.19px] top-[7.5px] w-[58.469px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-0 tracking-[0.0645px] whitespace-nowrap">High-Risk</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#fef2f2] h-[31.5px] relative rounded-[8px] shrink-0 w-[142.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <X9 />
        <Span16 />
        <Span17 />
      </div>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="AlertTriangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="AlertTriangle">
          <path d={svgPaths.p3ba1200} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Span18() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[32.188px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-0 whitespace-nowrap">Warn</p>
    </div>
  );
}

function Span19() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[71.19px] top-[7.5px] w-[75.906px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-0 tracking-[0.0645px] whitespace-nowrap">Medium-Risk</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#fffbeb] h-[31.5px] relative rounded-[8px] shrink-0 w-[158.094px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <AlertTriangle />
        <Span18 />
        <Span19 />
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="CheckCircle2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16935)" id="CheckCircle2">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16935">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span20() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[33.922px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-0 whitespace-nowrap">Allow</p>
    </div>
  );
}

function Span21() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[72.92px] top-[7.5px] w-[55.016px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-0 tracking-[0.0645px] whitespace-nowrap">Low-Risk</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f0fdf4] h-[31.5px] relative rounded-[8px] shrink-0 w-[138.938px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CheckCircle />
        <Span20 />
        <Span21 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <Container43 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <P6 />
        <Container42 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[127.5px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container39 />
        <Container41 />
      </div>
    </div>
  );
}

function Span22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">URL Allowlist</p>
      </div>
    </div>
  );
}

function Info7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_41015_16952)" id="Info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_41015_16952">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Span22 />
        <Info7 />
      </div>
    </div>
  );
}

function SwitchPrimitiveThumb7() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[16px]" data-name="SwitchPrimitive.Thumb" />;
}

function Switch7() {
  return (
    <div className="bg-[#cbced4] h-[18.391px] relative rounded-[33554400px] shrink-0 w-[32px]" data-name="Switch">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-px relative size-full">
        <SwitchPrimitiveThumb7 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container48 />
        <Switch7 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[1253.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[28px] py-[20px] relative size-full">
        <Container2 />
        <Container4 />
        <Container11 />
        <Container18 />
        <Container21 />
        <Container27 />
        <Container30 />
        <Container37 />
        <Container38 />
        <Container46 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}