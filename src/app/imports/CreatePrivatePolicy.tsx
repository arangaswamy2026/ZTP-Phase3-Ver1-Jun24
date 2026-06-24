import svgPaths from "./svg-m6iyphznyt";

function CursorPointer() {
  return (
    <div className="absolute left-[1259px] size-[72px] top-[1612.21px]" data-name="Cursor/Pointer">
      <div className="absolute inset-[-19.44%_0_0_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 86">
          <g id="Cursor/Pointer">
            <g id="Ellipse 1">
              <circle cx="27" cy="27" fill="var(--fill-0, #FFC32B)" r="13" />
              <circle cx="27" cy="27" r="20" stroke="var(--stroke-0, #FFC32B)" strokeOpacity="0.4" strokeWidth="14" />
            </g>
            <g filter="url(#filter0_d_47006_3957)" id="pointing">
              <path d={svgPaths.p3a602600} fill="var(--fill-0, white)" id="Shape" />
              <path d={svgPaths.p3f3b1bf0} id="Shape_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.25" />
              <path d={svgPaths.p2ccac80} fill="var(--fill-0, black)" id="Shape_3" />
              <path d={svgPaths.p3668bf00} fill="var(--fill-0, black)" id="Shape_4" />
              <path d={svgPaths.p24316200} fill="var(--fill-0, black)" id="Shape_5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="57.8266" id="filter0_d_47006_3957" width="54.4884" x="12.449" y="23.9104">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="1.2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_47006_3957" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_47006_3957" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[79px] not-italic text-[#6a7282] text-[14px] text-center top-0 whitespace-nowrap">Back to Access Policies</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative shrink-0 w-[900px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[273px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[22px] top-px tracking-[-0.5px] whitespace-nowrap">New Private Access Policy</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative rounded-[16777200px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#1447e6] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[13px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">Private Policy</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Heading />
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[900px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-0 whitespace-nowrap">Configure access rules and security conditions for your organization</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">General Information</p>
      </div>
    </div>
  );
}

function CreatePrivateAccessPolicyPage1() {
  return (
    <div className="absolute h-[19.5px] left-[84.95px] top-0 w-[6.797px]" data-name="CreatePrivateAccessPolicyPage">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#fb2c36] text-[13px] top-0 whitespace-nowrap">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[850px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">{`Policy Name `}</p>
        <CreatePrivateAccessPolicyPage1 />
      </div>
    </div>
  );
}

function Input() {
  return (
    <button className="bg-white cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[850px]" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-left whitespace-nowrap">Enter Policy Name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function Container4() {
  return (
    <div className="h-[65.5px] relative shrink-0 w-[850px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <PrimitiveLabel />
        <Input />
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[850px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] not-italic relative shrink-0 text-[#364153] text-[13px] whitespace-nowrap">Description</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[850px]" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">Describe what this policy does...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[850px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <PrimitiveLabel1 />
        <Textarea />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[267px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading2 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-2px] whitespace-nowrap">Type</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[850px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">
          <span className="leading-[19.5px]">{`Type `}</span>
          <span className="leading-[19.5px] text-[#fb2c36]">*</span>
        </p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[21px] relative shrink-0 w-[143px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#717182] text-[14px] text-center whitespace-nowrap">Select Policy Type</p>
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
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[850px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <PrimitiveSpan />
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[61.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <PrimitiveButton />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[151.5px] items-start pb-px pt-[25px] px-[25px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[842px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[15px] top-0 whitespace-nowrap">{`Action `}</p>
      </div>
    </div>
  );
}

function Button1() {
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

function Button2() {
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

function Container8() {
  return (
    <div className="bg-[#f3f4f6] h-[50px] relative rounded-[8px] shrink-0 w-[850px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">{`Source `}</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Users</p>
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

function PrimitiveButton1() {
  return (
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan1 />
      <Icon2 />
    </div>
  );
}

function Icon3() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[46px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Alice</p>
      <Button3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame15 />
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

function Container10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[43px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame13 />
    </div>
  );
}

function Icon4() {
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

function Frame10() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center relative">
        <PrimitiveButton1 />
        <Frame11 />
        <Icon4 />
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Groups</p>
      </div>
    </div>
  );
}

function Icon5() {
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
      <Icon5 />
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

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[53px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[71px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Design</p>
      <Button4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Text3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame21 />
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

function Container11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[43px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame20 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame19 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame18 />
    </div>
  );
}

function Icon7() {
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

function Frame16() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center relative">
        <PrimitiveButton2 />
        <Frame17 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading4 />
        <Frame10 />
        <Frame16 />
      </div>
    </div>
  );
}

function SiaSpaSource() {
  return (
    <div className="bg-white h-[183px] relative rounded-[12px] shrink-0 w-[900px]" data-name="SIA SPA source">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Destination</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">FQDN</p>
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

function PrimitiveButton3() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan3 />
      <Icon8 />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">internal.myapp.com</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Protocols</p>
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

function PrimitiveSpan6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-30 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-pre">{`Ports:  ex: 22, 50-250`}</p>
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[36px] items-start relative shrink-0 w-[291px]">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[291px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan6 />
      </div>
      <Frame4 />
    </div>
  );
}

function Icon10() {
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

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <PrimitiveButton3 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[235px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan4 />
        </div>
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[125px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan5 />
          <Icon9 />
        </div>
        <Frame6 />
        <Icon10 />
      </div>
    </div>
  );
}

function Fdqn() {
  return (
    <div className="h-[61.5px] relative shrink-0 w-[853px]" data-name="FDQN">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">IP Ranges</p>
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

function PrimitiveButton4() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan7 />
      <Icon11 />
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">192.168.1.0/24</p>
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
          <PrimitiveSpan8 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
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
    <div className="content-stretch flex flex-col gap-[7px] h-[36px] items-start relative shrink-0 w-[235px]">
      <PrimitiveButton5 />
      <Frame7 />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-50 relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">All Protocols</p>
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

function PrimitiveSpan10() {
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#5885cc] content-stretch flex items-center justify-center p-[2.5px] relative rounded-[3px] shrink-0" data-name="Form / Checkbox / Unit">
        <Checkmark />
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap">Any</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[36px] items-start relative shrink-0 w-[291px]">
      <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[291px]" data-name="Primitive.button">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <PrimitiveSpan10 />
      </div>
      <Frame9 />
    </div>
  );
}

function Icon13() {
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

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[854px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <PrimitiveButton4 />
        <Frame5 />
        <div className="bg-white content-stretch flex gap-[8px] h-[36px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[125px]" data-name="Primitive.button">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <PrimitiveSpan9 />
          <Icon12 />
        </div>
        <Frame8 />
        <Icon13 />
      </div>
    </div>
  );
}

function IpRanges() {
  return (
    <div className="h-[62px] relative shrink-0 w-[854px]" data-name="IP Ranges">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[245px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading5 />
        <Fdqn />
        <IpRanges />
      </div>
    </div>
  );
}

function SpaDestination() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[900px]" data-name="SPA destination">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-[900px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <SiaSpaSource />
        <SpaDestination />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Device Trust</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[850px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 whitespace-nowrap">{`Select the minimum trust level required. If a device's trust factors are not satisfied, consequences shown on each card applies.`}</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] text-left whitespace-nowrap">Any trust level</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[18px] left-[0.48px] top-[0.11px] w-[319px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] text-left top-[-9px] w-[297.153px]">All cloud levels allowed except devices fail to Always Deny.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[172.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#6a7282] text-[0px] text-left top-0 whitespace-nowrap">
          <span className="leading-[18px] text-[12px]">{`If not satisfied → `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#101828] text-[12px]">Always Deny</span>
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon14 />
        <Text4 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <button className="bg-white col-1 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[18px] pr-[2px] py-[18px] relative size-full">
        <Container15 />
        <Paragraph2 />
        <Container16 />
      </div>
    </button>
  );
}

function Heading8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[62.016px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] text-left whitespace-nowrap">No Trust</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading8 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] text-left top-0 w-[331px]">Ignore Trust/rules entirely. No device trust verification required.</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[253.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#6a7282] text-[0px] text-left top-0 whitespace-nowrap">
          <span className="leading-[18px] text-[12px]">{`If not satisfied → `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#101828] text-[12px]">No impact, checks skipped</span>
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon15 />
        <Text5 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <button className="bg-white col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1447e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[18px] pr-[2px] py-[18px] relative size-full">
        <Container17 />
        <Paragraph4 />
        <Container18 />
      </div>
    </button>
  );
}

function Container14() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__fit-content(100%)_0.00px] h-[146.5px] relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] text-left whitespace-nowrap">High Trust Only</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading9 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] text-left top-0 whitespace-nowrap">Only devices with a high trust score are allowed.</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[202.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#6a7282] text-[0px] text-left top-0 whitespace-nowrap">
          <span className="leading-[18px] text-[12px]">{`If not satisfied → `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#101828] text-[12px]">{`Deny `}</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon16 />
        <Text6 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <button className="bg-white col-1 h-[128.894px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[18px] pr-[2px] py-[18px] relative size-full">
        <Container20 />
        <Paragraph5 />
        <Container21 />
      </div>
    </button>
  );
}

function Heading10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[156.391px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] text-left whitespace-nowrap">Medium or High Trust</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading10 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] text-left top-0 whitespace-nowrap">Devices with medium or high trust scores are allowed.</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[204.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#6a7282] text-[0px] text-left top-0 whitespace-nowrap">
          <span className="leading-[18px] text-[12px]">{`If not satisfied → `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#101828] text-[12px]">Drop to Low trust</span>
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Icon17 />
        <Text7 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <button className="bg-white col-2 h-[128.894px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[18px] pr-[2px] py-[18px] relative size-full">
        <Container22 />
        <Paragraph6 />
        <Container23 />
      </div>
    </button>
  );
}

function Container19() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__fit-content(100%)_1.11px] relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[276px] relative shrink-0 w-[850px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch cursor-pointer flex flex-col gap-px items-start relative size-full">
        <Container14 />
        <Container19 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[382px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading6 />
        <Paragraph1 />
        <Frame />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.391px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Default Trust Profile</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#f3f4f6] h-[20.5px] relative rounded-[6px] shrink-0 w-[49.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] py-[2px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6b7280] text-[11px] whitespace-nowrap">Active</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[561.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading11 />
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[561.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 whitespace-nowrap">Enforces 10 trust factors including disk encryption, antivirus, firewall, OS version, and more.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[46px] relative shrink-0 w-[561.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container27 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function CreatePrivateAccessPolicyPage2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.047px]" data-name="CreatePrivateAccessPolicyPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[17px] not-italic text-[#364153] text-[14px] text-center top-0 whitespace-nowrap">View</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[67.047px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <CreatePrivateAccessPolicyPage2 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Button9 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[88px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-[21px] px-[25px] relative rounded-[inherit] size-full">
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CreatePrivateAccessPolicyPage3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.297px]" data-name="CreatePrivateAccessPolicyPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] not-italic text-[#364153] text-[14px] text-center top-0 whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[88.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <CreatePrivateAccessPolicyPage3 />
      </div>
    </div>
  );
}

function CreatePrivateAccessPolicyPage4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.797px]" data-name="CreatePrivateAccessPolicyPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.5px] not-italic text-[14px] text-center text-white top-0 whitespace-nowrap">Create Policy</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#d4183d] h-[40px] opacity-50 relative rounded-[8px] shrink-0 w-[128.797px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <CreatePrivateAccessPolicyPage4 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <button className="cursor-pointer h-[40px] relative shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Button10 />
        <Button11 />
      </div>
    </button>
  );
}

function CreatePrivateAccessPolicyPage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1513px] items-center left-0 top-[96px] w-[1284px]" data-name="CreatePrivateAccessPolicyPage">
      <Button />
      <Container1 />
      <div className="bg-white h-[269px] relative rounded-[12px] shrink-0 w-[900px]" data-name="General info">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <Container3 />
          <Container6 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="bg-white h-[137.5px] relative rounded-[12px] shrink-0 w-[898px]" data-name="Action">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[29px] pr-px py-[21px] relative size-full">
          <Heading3 />
          <Container8 />
        </div>
      </div>
      <Frame3 />
      <div className="bg-white h-[393px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <Container13 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Container24 />
      <Container28 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[24px] top-[21.5px] w-[219px]" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.88%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52523 6.67062">
            <path d={svgPaths.p3f45e600} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52px] pt-[8px] px-[8px] rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon18 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Nathan K.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Admin</p>
    </div>
  );
}

function T1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[4px] w-[64.789px]" data-name="T6">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[120.79px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#1e3a5f] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[16777200px] size-[32px] top-[6px]" data-name="Primitive.span">
      <Text14 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute h-[44px] left-[104px] rounded-[10px] top-0 w-[144.789px]" data-name="SlotClone">
      <T1 />
      <Icon19 />
      <PrimitiveSpan11 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[16777200px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button13() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon20 />
      <Text15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[44px] left-[1012.21px] top-[9.5px] w-[248.789px]" data-name="Container">
      <Button12 />
      <SlotClone />
      <Button13 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47004_1713)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1713">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[76px] not-italic text-[#364153] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Riverside Dental Office</p>
      </div>
    </div>
  );
}

function T2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.266px]" data-name="T6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon21 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <button className="absolute bg-white content-stretch cursor-pointer flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-0 w-[500px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <T2 />
      <Icon22 />
    </button>
  );
}

function T() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b border-solid h-[64px] left-[0.5px] top-0 w-[1281px]" data-name="T6">
      <Container29 />
      <Container30 />
      <div className="absolute h-[378px] left-[390.5px] top-[17.5px] w-[500px]" data-name="Component 6">
        <Button14 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[1641.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CreatePrivateAccessPolicyPage />
        <T />
      </div>
    </div>
  );
}

function Section() {
  return <div className="h-[1641.5px] shrink-0 w-0" data-name="Section" />;
}

function RootLayoutContent() {
  return (
    <div className="bg-[#f9fafb] h-[1836px] relative shrink-0 w-full" data-name="RootLayoutContent">
      <div className="content-stretch flex items-start pl-[252px] relative size-full">
        <Container />
        <Section />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1836px] items-start left-0 top-[-0.29px] w-[1728px]" data-name="Body">
      <RootLayoutContent />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-[-2px] tracking-[0.5px] uppercase whitespace-nowrap">ZTP</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[63px] relative shrink-0 w-[191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading12 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon23 />
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Users</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon24 />
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-left whitespace-nowrap">Policies</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <button className="cursor-pointer h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon25 />
          <Text19 />
        </div>
      </div>
    </button>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47004_1708)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1708">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Profiles</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon26 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47004_1764)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1764">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">System Status</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon27 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47004_1803)" id="Icon">
          <path d={svgPaths.p3227a460} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1803">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Activity</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon28 />
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Reports</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon29 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[191px]" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[12px] relative size-full">
          <Button15 />
          <Button16 />
          <Button17 />
          <Button18 />
          <Button19 />
          <Button20 />
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function SecondaryNav() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch flex flex-col h-[896px] items-start left-[60px] pr-px top-0 w-[192px]" data-name="SecondaryNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Navigation />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[28%_20%_28%_23.33%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p9f48b00} fill="var(--fill-0, #FF5D00)" fillRule="evenodd" id="Fill 10" />
        </g>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[50px] relative shrink-0 w-[60px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Logo1 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[50px] relative shrink-0 w-[60px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container36() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Union">
            <path d={svgPaths.p26816980} fill="var(--fill-0, #C4D1E5)" id="Vector" />
            <path d={svgPaths.p25948f70} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
            <path d={svgPaths.p146d2980} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
            <path d={svgPaths.p25c19371} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PrimaryNav1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav1 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11.5px] size-[24px] top-0" data-name="Button">
      <Container38 />
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button22 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[52px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="bg-[#001b50] h-[52px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union() {
  return (
    <div className="absolute inset-[0_0.53%_1.92%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6902 25.0098">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p15a77000} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33cf2700} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union />
      </div>
    </div>
  );
}

function PrimaryNav2() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav2 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex h-[25.5px] items-center justify-center left-[9.08px] top-0 w-[28.844px]" data-name="Button">
      <Container42 />
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] h-[25.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button23 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[53.5px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="bg-[#001b50] h-[53.5px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Container44() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union1() {
  return (
    <div className="absolute inset-[0_0.69%_0.64%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5974 27.635">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p1da1ab00} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2635200} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p14d3f100} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union1 />
      </div>
    </div>
  );
}

function PrimaryNav3() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav3 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex h-[27.813px] items-center justify-center left-[9.09px] top-0 w-[28.797px]" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] h-[27.813px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button24 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[55.813px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="bg-[#001b50] h-[55.813px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-[#ff5d00] h-[26px] left-[5px] rounded-br-[6px] rounded-tr-[6px] top-[16px] w-[3px]" data-name="Container" />;
}

function CybageNavIcons1() {
  return (
    <div className="absolute contents inset-[7.09%_6.86%_5.41%_5.64%]" data-name="cybage nav icons">
      <div className="absolute inset-[7.09%_6.86%_5.41%_5.64%]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 26.25">
          <path d={svgPaths.p327ae200} fill="var(--fill-0, #D2DFF2)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <CybageNavIcons1 />
    </div>
  );
}

function CybageNavIcons() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start left-0 top-0 w-[28px]" data-name="CybageNavIcons">
      <Icon34 />
    </div>
  );
}

function PrimaryNav4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[28px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CybageNavIcons />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-0 top-0 w-[28px]" data-name="Container">
      <PrimaryNav4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[4.08px] top-[9px] w-[19.844px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff5d00] text-[10px] text-center whitespace-nowrap">ZTP</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute h-[30px] left-[9.5px] top-0 w-[28px]" data-name="Button">
      <Container50 />
      <Paragraph8 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[30px] left-[8px] top-[14px] w-[47px]" data-name="Container">
      <Button25 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[58px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function NavigationTabItem3() {
  return (
    <div className="bg-[#001b50] h-[58px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container52() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union2() {
  return (
    <div className="absolute inset-[0_2.52%_0.87%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5933 22.5994">
        <g id="Union">
          <path d={svgPaths.p2991bac0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p24efeb00} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p219e80} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
          <path d={svgPaths.p2ab04400} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p32d5d300} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
          <path d={svgPaths.p1728f000} fill="var(--fill-0, #C4D1E5)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union2 />
      </div>
    </div>
  );
}

function PrimaryNav5() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav5 />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute content-stretch flex h-[22.797px] items-center justify-center left-[9.86px] top-0 w-[27.281px]" data-name="Button">
      <Container54 />
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[22.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button26 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[50.797px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="bg-[#001b50] h-[50.797px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container51 />
      </div>
    </div>
  );
}

function Container56() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Subtract() {
  return (
    <div className="absolute inset-[0_0.87%_3.08%_0]" data-name="Subtract">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5986 24.4127">
        <g id="Subtract">
          <path d={svgPaths.p2b457e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p19913000} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Subtract />
      </div>
    </div>
  );
}

function PrimaryNav6() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav6 />
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute content-stretch flex h-[25.188px] items-center justify-center left-[12.09px] top-0 w-[22.797px]" data-name="Button">
      <Container58 />
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] h-[25.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button27 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[53.188px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="bg-[#001b50] h-[53.188px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container60() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union3() {
  return (
    <div className="absolute inset-[0_0.71%_1.46%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5164 28.1462">
        <g id="Union">
          <path d={svgPaths.p31c15b00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p892bb00} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pe219500} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p2969a100} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p2bb30e71} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union3 />
      </div>
    </div>
  );
}

function PrimaryNav7() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav7 />
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute content-stretch flex h-[28.563px] items-center justify-center left-[7.13px] top-0 w-[32.75px]" data-name="Button">
      <Container62 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[28.563px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button28 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[56.563px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="bg-[#001b50] h-[56.563px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container64() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union4() {
  return (
    <div className="absolute inset-[0_1.72%_0.41%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0086 24.7898">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p18940800} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1ced2900} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p3b25fa00} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
          <path d={svgPaths.p170b0c00} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p20d42780} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
          <path d={svgPaths.p121c9700} fill="var(--fill-0, #C4D1E5)" id="Vector_6" />
          <path d={svgPaths.p3f693300} fill="var(--fill-0, #C4D1E5)" id="Vector_7" />
          <path d={svgPaths.p3c8fc180} fill="var(--fill-0, #C4D1E5)" id="Vector_8" />
          <path d={svgPaths.p33c7d00} fill="var(--fill-0, #C4D1E5)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union4 />
      </div>
    </div>
  );
}

function PrimaryNav8() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav8 />
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute content-stretch flex h-[24.891px] items-center justify-center left-[9.25px] top-0 w-[28.5px]" data-name="Button">
      <Container66 />
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[1_0_0] h-[24.891px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button29 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[52.891px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function NavigationTabItem7() {
  return (
    <div className="bg-[#001b50] h-[52.891px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Container68() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union5() {
  return (
    <div className="absolute inset-[0_2.88%_1.11%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1669 28.3542">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p21d34600} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p3a6f3d80} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p208f6580} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union5 />
      </div>
    </div>
  );
}

function PrimaryNav9() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav9 />
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute content-stretch flex h-[28.672px] items-center justify-center left-[7.97px] top-0 w-[31.063px]" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[1_0_0] h-[28.672px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button30 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[56.672px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function NavigationTabItem8() {
  return (
    <div className="bg-[#001b50] h-[56.672px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container67 />
      </div>
    </div>
  );
}

function Container72() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union6() {
  return (
    <div className="absolute inset-[0_0.68%_3.08%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6002 24.4117">
        <g id="Union">
          <path d={svgPaths.p23693100} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p36c0d180} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union6 />
      </div>
    </div>
  );
}

function PrimaryNav10() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav10 />
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute content-stretch flex h-[25.188px] items-center justify-center left-[9.09px] top-0 w-[28.797px]" data-name="Button">
      <Container74 />
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] h-[25.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button31 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[53.188px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function NavigationTabItem9() {
  return (
    <div className="bg-[#001b50] h-[53.188px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container76() {
  return <div className="h-0 shrink-0 w-[3px]" data-name="Container" />;
}

function Union7() {
  return (
    <div className="absolute inset-[0_2.5%_0.8%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4081 30.5055">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p3a020700} fill="var(--fill-0, #D4E3F9)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p38abf200} fill="var(--fill-0, #D4E3F9)" id="Vector_2" />
          <path d={svgPaths.p27ffaf00} fill="var(--fill-0, #D4E3F9)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union7 />
      </div>
    </div>
  );
}

function PrimaryNav11() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon41 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav11 />
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute content-stretch flex h-[30.75px] items-center justify-center left-[7.91px] top-0 w-[31.188px]" data-name="Button">
      <Container78 />
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[1_0_0] h-[30.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button32 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[58.75px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function NavigationTabItem10() {
  return (
    <div className="bg-[#001b50] h-[58.75px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container75 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[inherit] size-full">
        <NavigationTabItem />
        <NavigationTabItem1 />
        <NavigationTabItem2 />
        <NavigationTabItem3 />
        <NavigationTabItem4 />
        <NavigationTabItem5 />
        <NavigationTabItem6 />
        <NavigationTabItem7 />
        <NavigationTabItem8 />
        <NavigationTabItem9 />
        <NavigationTabItem10 />
      </div>
    </div>
  );
}

function PrimaryNav() {
  return (
    <div className="absolute bg-[#001b50] content-stretch flex flex-col h-[896px] items-center left-0 top-0 w-[60px]" data-name="PrimaryNav">
      <Logo />
      <Container34 />
    </div>
  );
}

export default function CreatePrivatePolicy() {
  return (
    <div className="bg-white relative size-full" data-name="Create Private policy">
      <CursorPointer />
      <Body />
      <SecondaryNav />
      <PrimaryNav />
    </div>
  );
}