import svgPaths from "./svg-y7enjfpp8u";

function Heading() {
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
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Users</p>
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
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon />
    </div>
  );
}

function Icon1() {
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

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[46px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Alice</p>
      <Button />
    </div>
  );
}

function Icon2() {
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

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[46px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">John</p>
      <Button1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Text />
      <Text1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame11 />
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

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[43px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-minus">
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
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative">
        <PrimitiveButton />
        <Frame7 />
        <Icon3 />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Groups</p>
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

function PrimitiveButton1() {
  return (
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan1 />
      <Icon4 />
    </div>
  );
}

function Icon5() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[53px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[71px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Design</p>
      <Button2 />
    </div>
  );
}

function Icon6() {
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

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[78.01px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[95px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Engineering</p>
      <Button3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame17 />
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
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame14 />
    </div>
  );
}

function Icon7() {
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

function Frame12() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative">
        <PrimitiveButton1 />
        <Frame13 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading />
        <Frame6 />
        <Frame12 />
      </div>
    </div>
  );
}

function SiaSpaSource() {
  return (
    <div className="bg-white h-[183px] relative rounded-[12px] shrink-0 w-[900px]" data-name="SIA SPA source">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Destination</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Applications</p>
      </div>
    </div>
  );
}

function Icon8() {
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
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan2 />
      <Icon8 />
    </div>
  );
}

function Icon9() {
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

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[53px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[71px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] w-[40.091px]">Envoy</p>
      <Button4 />
    </div>
  );
}

function Icon10() {
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

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[55px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Box</p>
      <Button5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function Icon11() {
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

function PrimitiveButton3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[43px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[579px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan3 />
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="opacity-50 overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute inset-0 overflow-clip" data-name="cybage-minus">
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
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[43px] items-start relative shrink-0 w-[657px]">
      <PrimitiveButton3 />
      <Icon12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <PrimitiveButton2 />
        <Frame3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start relative shrink-0 w-[803px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[40px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container5 />
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Internet</p>
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

function PrimitiveButton4() {
  return (
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan4 />
      <Icon13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <PrimitiveButton4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start relative shrink-0 w-[748px]" data-name="Container">
      <Frame1 />
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

function Frame5() {
  return (
    <div className="h-[40px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13px] h-full items-center relative">
        <Container6 />
        <Icon14 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative w-full">
        <Heading1 />
        <Frame4 />
        <Frame5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Container4 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <SiaSpaSource />
      <Container3 />
    </div>
  );
}