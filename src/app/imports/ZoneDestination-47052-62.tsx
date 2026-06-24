function Icon() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-plus">
        <div className="absolute border-[#5885cc] border-[1.5px] border-solid inset-[4.17%] rounded-[3px]" />
        <div className="absolute bottom-1/2 flex items-center justify-center left-1/4 right-1/4 top-1/2">
          <div className="flex-none h-[12px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[0_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
                  <path d="M0.75 0V12" id="Vector 247" stroke="var(--stroke-0, #5885CC)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-1/2 top-1/4">
          <div className="absolute inset-[0_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
              <path d="M0.75 0V12" id="Vector 246" stroke="var(--stroke-0, #5885CC)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Destination</p>
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Zone</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon1 />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Select Zones</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-30 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-pre">{`Subnet:  Ex:192.168.0.0`}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-minus">
        <div className="absolute border-[#5885cc] border-[1.5px] border-solid inset-[4.17%] rounded-[3px]" />
        <div className="absolute bottom-1/2 flex items-center justify-center left-1/4 right-1/4 top-1/2">
          <div className="flex-none h-[12px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[0_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
                  <path d="M0.75 0V12" id="Vector 247" stroke="var(--stroke-0, #5885CC)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0 w-full">
      <PrimitiveButton />
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[276px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan1 />
        <Icon2 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[353px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan2 />
      </div>
      <Icon3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function PolicyType() {
  return (
    <div className="relative shrink-0 w-[854px]" data-name="Policy type">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[245px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading />
        <PolicyType />
      </div>
    </div>
  );
}

export default function ZoneDestination() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="ZONE Destination">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}