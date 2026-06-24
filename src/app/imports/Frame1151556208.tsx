import svgPaths from "./svg-dxdydw95db";

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[842px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[15px] top-0 whitespace-nowrap">{`Action `}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" data-name="button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[175px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#008236] text-[14px] text-center w-full">ALLOW</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[153px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-center w-full">BLOCK</p>
        </div>
      </div>
    </button>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f4f6] h-[50px] relative rounded-[8px] shrink-0 w-[850px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">{`Source `}</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">IP Ranges</p>
      </div>
    </div>
  );
}

function Icon() {
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
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">192.168.1.0/24</p>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <div aria-hidden="true" className="absolute border border-[#9dafd3] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="shrink-0 size-[14px]" data-name="checkmark" />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[235px]">
      <PrimitiveButton1 />
      <Frame4 />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">All Protocols</p>
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

function PrimitiveSpan3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-30 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-pre">{`Ports:  ex: 22, 50-250`}</p>
      </div>
    </div>
  );
}

function Checkmark() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="checkmark">
      <div className="absolute inset-[0_-10.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9209 14">
          <g id="checkmark">
            <path d={svgPaths.p32187300} fill="var(--fill-0, white)" id="Vector 1 (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#5885cc] content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <Checkmark />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[291px]">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[291px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan3 />
      </div>
      <Frame7 />
    </div>
  );
}

function Icon2() {
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
    <div className="relative shrink-0 w-[854px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <PrimitiveButton />
        <Frame5 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[125px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan2 />
          <Icon1 />
        </div>
        <Frame6 />
        <Icon2 />
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">IP Ranges</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function PrimitiveButton2() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between opacity-0 px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan4 />
      <Icon3 />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">192.168.1.0/24</p>
      </div>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan5 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <div aria-hidden="true" className="absolute border border-[#9dafd3] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="shrink-0 size-[14px]" data-name="checkmark" />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[235px]">
      <PrimitiveButton3 />
      <Frame9 />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">All Protocols</p>
      </div>
    </div>
  );
}

function Icon4() {
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

function PrimitiveSpan7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-30 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-pre">{`Ports:  ex: 22, 50-250`}</p>
      </div>
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="checkmark">
      <div className="absolute inset-[0_-10.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9209 14">
          <g id="checkmark">
            <path d={svgPaths.p32187300} fill="var(--fill-0, white)" id="Vector 1 (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#5885cc] content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <Checkmark1 />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[291px]">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[291px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan7 />
      </div>
      <Frame11 />
    </div>
  );
}

function Icon5() {
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

function Frame1() {
  return (
    <div className="relative shrink-0 w-[854px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <PrimitiveButton2 />
        <Frame8 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[125px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan6 />
          <Icon4 />
        </div>
        <Frame10 />
        <Icon5 />
      </div>
    </div>
  );
}

function IpRanges() {
  return (
    <div className="relative shrink-0 w-[854px]" data-name="IP Ranges">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Zone</p>
      </div>
    </div>
  );
}

function Icon6() {
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

function PrimitiveButton4() {
  return (
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan8 />
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[11.989px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99337 6.99337">
            <path d={svgPaths.pfb2c400} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999053" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99337 6.99337">
            <path d={svgPaths.p1c574400} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999053" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[46px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Guest</p>
      <Button2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[655px]">
      <Text />
      <div className="h-[4px] relative shrink-0 w-[8px]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path d={svgPaths.p32098840} id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[43px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame18 />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Employee</p>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan9 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-[647.801px]">Guest</p>
        <div className="h-[6.413px] relative shrink-0 w-[9.328px]" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4936 7.57872">
              <path d={svgPaths.p3625fe80} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16596" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[#f7f2f2] h-[36px] relative shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan10 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">IOT</p>
      </div>
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan11 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <PrimitiveButton5 />
        <PrimitiveButton6 />
        <PrimitiveButton7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Container2 />
      <Frame17 />
    </div>
  );
}

function Icon8() {
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

function Frame19() {
  return (
    <div className="relative shrink-0 w-[855px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative w-full">
        <PrimitiveButton4 />
        <Frame20 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative w-full">
        <Heading1 />
        <IpRanges />
        <Frame19 />
      </div>
    </div>
  );
}

function ZoneSource() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[900px]" data-name="ZONE source">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Destination</p>
      </div>
    </div>
  );
}

function PrimitiveSpan12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">IP Ranges</p>
      </div>
    </div>
  );
}

function Icon9() {
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

function PrimitiveButton8() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan12 />
      <Icon9 />
    </div>
  );
}

function PrimitiveSpan13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">192.168.1.0/24</p>
      </div>
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan13 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <div aria-hidden="true" className="absolute border border-[#9dafd3] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="shrink-0 size-[14px]" data-name="checkmark" />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[235px]">
      <PrimitiveButton9 />
      <Frame13 />
    </div>
  );
}

function PrimitiveSpan14() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">All Protocols</p>
      </div>
    </div>
  );
}

function Icon10() {
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

function PrimitiveSpan15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-30 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-pre">{`Ports:  ex: 22, 50-250`}</p>
      </div>
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="checkmark">
      <div className="absolute inset-[0_-10.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9209 14">
          <g id="checkmark">
            <path d={svgPaths.p32187300} fill="var(--fill-0, white)" id="Vector 1 (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#5885cc] content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <Checkmark2 />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[291px]">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[291px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan15 />
      </div>
      <Frame15 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-plus">
        <div className="absolute border-[#0b8aeb] border-[1.5px] border-solid inset-[4.17%] rounded-[3px]" />
        <div className="absolute bottom-1/2 flex items-center justify-center left-1/4 right-1/4 top-1/2">
          <div className="flex-none h-[12px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[0_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
                  <path d="M0.75 0V12" id="Vector 247" stroke="var(--stroke-0, #0B8AEB)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-1/2 top-1/4">
          <div className="absolute inset-[0_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
              <path d="M0.75 0V12" id="Vector 246" stroke="var(--stroke-0, #0B8AEB)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[854px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative w-full">
        <PrimitiveButton8 />
        <Frame12 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[125px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan14 />
          <Icon10 />
        </div>
        <Frame14 />
        <Icon11 />
      </div>
    </div>
  );
}

function IpRanges1() {
  return (
    <div className="relative shrink-0 w-[854px]" data-name="IP Ranges">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function PrimitiveSpan16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Zone</p>
      </div>
    </div>
  );
}

function Icon12() {
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

function PrimitiveButton10() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan16 />
      <Icon12 />
    </div>
  );
}

function PrimitiveSpan17() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Guest</p>
      </div>
    </div>
  );
}

function Icon13() {
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-[276px]">
      <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
            <PrimitiveSpan17 />
            <Icon13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimitiveSpan18() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Ex:192.168.0.0</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-plus">
        <div className="absolute border-[#0b8aeb] border-[1.5px] border-solid inset-[4.17%] rounded-[3px]" />
        <div className="absolute bottom-1/2 flex items-center justify-center left-1/4 right-1/4 top-1/2">
          <div className="flex-none h-[12px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[0_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
                  <path d="M0.75 0V12" id="Vector 247" stroke="var(--stroke-0, #0B8AEB)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-1/2 top-1/4">
          <div className="absolute inset-[0_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 12">
              <path d="M0.75 0V12" id="Vector 246" stroke="var(--stroke-0, #0B8AEB)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <PrimitiveButton10 />
        <Frame16 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[235px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan18 />
        </div>
        <Icon14 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[853px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative w-full">
        <Heading2 />
        <IpRanges1 />
        <Container4 />
      </div>
    </div>
  );
}

function ZoneDestination() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[900px]" data-name="ZONE Destination">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative size-full">
      <div className="bg-white content-stretch flex flex-col gap-[16px] h-[137.5px] items-start pl-[29px] pr-px py-[21px] relative rounded-[12px] shrink-0 w-[898px]" data-name="Action">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Heading />
        <Container />
      </div>
      <ZoneSource />
      <ZoneDestination />
    </div>
  );
}