import svgPaths from "./svg-b4064wo633";

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
    <div className="h-[28px] relative shrink-0 w-[303.977px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[22px] top-[0.5px] tracking-[-0.5px] whitespace-nowrap">New Internet Access Policy</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ede9fe] h-[24px] relative rounded-[16777200px] shrink-0 w-[108.727px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#c4b5fd] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[13px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#7c3aed] text-[12px] whitespace-nowrap">Internet Policy</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[733.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Heading />
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[733.867px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] whitespace-nowrap">Configure a new policy to control user traffic to the public internet with category filtering and threat protection.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[52px] relative shrink-0 w-[733.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between pr-[166.133px] relative shrink-0 w-[900px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47006_3211)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47006_3211">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[421.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">Internet access policy always allows traffic from selected sources to the destination.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[34px] items-center pl-[13px] pr-px py-px relative rounded-[8px] shrink-0 w-[898px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center relative">
        <Container1 />
        <Container4 />
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

function CreatePrivateAccessPolicyPage() {
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
        <CreatePrivateAccessPolicyPage />
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

function Container6() {
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

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[850px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <PrimitiveLabel1 />
        <Textarea />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[267px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading2 />
        <Container6 />
        <Container7 />
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

function PrimitiveButton() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[850px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <PrimitiveSpan />
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[61.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <PrimitiveButton />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[151.5px] items-start pb-px pt-[25px] px-[25px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Heading3() {
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

function PrimitiveButton1() {
  return (
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan1 />
      <Icon3 />
    </div>
  );
}

function Icon4() {
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
      <Icon4 />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Alice</p>
      <Button1 />
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
    <div className="absolute content-stretch flex flex-col items-start left-[46px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">John</p>
      <Button2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame10 />
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
      <Frame9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame8 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex h-[43px] items-center opacity-50 overflow-clip relative shrink-0" data-name="Icon">
      <div className="overflow-clip shrink-0 size-[24px]" data-name="cybage-plus" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative">
        <PrimitiveButton1 />
        <Frame6 />
        <Icon6 />
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

function Icon7() {
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
      <Icon7 />
    </div>
  );
}

function Icon8() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[53px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[71px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Design</p>
      <Button3 />
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
    <div className="absolute content-stretch flex flex-col items-start left-[78.01px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[95px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Engineering</p>
      <Button4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-between relative shrink-0 w-[628px]">
      <Frame16 />
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

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[43px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[654px]">
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[652px]">
      <Frame13 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex h-[43px] items-center opacity-50 overflow-clip relative shrink-0" data-name="Icon">
      <div className="overflow-clip shrink-0 size-[24px]" data-name="cybage-plus" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start justify-center relative">
        <PrimitiveButton2 />
        <Frame12 />
        <Icon10 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[223px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading3 />
        <Frame5 />
        <Frame11 />
      </div>
    </div>
  );
}

function SiaSpaSource() {
  return (
    <div className="bg-white h-[183px] relative rounded-[12px] shrink-0 w-[900px]" data-name="SIA SPA source">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Destination</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Applications</p>
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
    <div className="bg-white content-stretch flex h-[43px] items-center justify-between px-[13px] py-px relative rounded-[8px] shrink-0 w-[148px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan3 />
      <Icon11 />
    </div>
  );
}

function Icon12() {
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
    <div className="absolute content-stretch flex flex-col items-start left-[53px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[71px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] w-[40.091px]">Envoy</p>
      <Button5 />
    </div>
  );
}

function Icon13() {
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

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[39px] size-[11.989px] top-[6.9px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#f9fafb] h-[26px] relative rounded-[6px] shrink-0 w-[55px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8.91px] not-italic text-[#364153] text-[12px] top-[4.9px] whitespace-nowrap">Box</p>
      <Button6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Frame17 />
      </div>
    </div>
  );
}

function Icon14() {
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
    <div className="bg-white content-stretch flex gap-[8px] h-[43px] items-center px-[13px] py-px relative rounded-[8px] shrink-0 w-[692px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan4 />
      <Icon14 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[43px] items-start relative shrink-0 w-[524px]">
      <PrimitiveButton4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <PrimitiveButton3 />
        <Frame2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[62px] items-start relative shrink-0 w-[680px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[40px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container15 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative w-full">
        <Heading4 />
        <Frame3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white h-[130px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[900px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <SiaSpaSource />
        <Container13 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.734px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[15px] top-0 whitespace-nowrap">Threat Protection</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47006_3211)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47006_3211">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[421.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap">All threat categories below are enabled by default and cannot be disabled.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f9fafb] h-[34px] relative rounded-[8px] shrink-0 w-[842px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-[13px] pr-px py-px relative size-full">
        <Icon15 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-0 rounded-[8px] top-0 w-[154.414px]" data-name="Text">
      <Icon16 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Bots / Cryptomining</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[162.41px] rounded-[8px] top-0 w-[236.195px]" data-name="Text">
      <Icon17 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Dangerous Configuration / History</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[406.61px] rounded-[8px] top-0 w-[240.82px]" data-name="Text">
      <Icon18 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Dangerous 3rd Party Infrastructure</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[655.43px] rounded-[8px] top-0 w-[175.438px]" data-name="Text">
      <Icon19 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Dangerous Nameserver</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-0 rounded-[8px] top-[38px] w-[148.078px]" data-name="Text">
      <Icon20 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Malicious SSL Cert</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[156.08px] rounded-[8px] top-[38px] w-[177.07px]" data-name="Text">
      <Icon21 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">{`Malware & Ransomware`}</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[341.15px] rounded-[8px] top-[38px] w-[108.117px]" data-name="Text">
      <Icon22 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Malware C2</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[457.27px] rounded-[8px] top-[38px] w-[89.102px]" data-name="Text">
      <Icon23 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Phishing</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[554.37px] rounded-[8px] top-[38px] w-[176.398px]" data-name="Text">
      <Icon24 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Risky DNS Transactions</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-0 rounded-[8px] top-[76px] w-[203.453px]" data-name="Text">
      <Icon25 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Spam / VoIP fraud / Spyware</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[211.45px] rounded-[8px] top-[76px] w-[288.016px]" data-name="Text">
      <Icon26 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">Other Known Bad (Community Intelligence)</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[10px] size-[12px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[30px] left-[507.47px] rounded-[8px] top-[76px] w-[118.984px]" data-name="Text">
      <Icon27 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#364153] text-[12px] top-[6.5px] whitespace-nowrap">New Domains</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <Text11 />
        <Text12 />
        <Text13 />
        <Text14 />
        <Text15 />
        <Text16 />
        <Text17 />
        <Text18 />
        <Text19 />
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[28px] py-[20px] relative size-full">
        <Container18 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white h-[238px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[15px] top-0 whitespace-nowrap">Security Controls</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">Category Blocking</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[142.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text22 />
        <Icon28 />
      </div>
    </div>
  );
}

function Text23() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container24() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container25 />
        <button className="bg-[#1447e6] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[23px] relative size-full">
            <Text23 />
          </div>
        </button>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px overflow-clip relative" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] text-left whitespace-nowrap">Select categories to Block</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <button className="bg-white cursor-pointer h-[36px] relative rounded-[8px] shrink-0 w-[278px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <TextInput1 />
        <Icon29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <TextInput />
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">Application Blocking</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[156.898px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text24 />
        <Icon30 />
      </div>
    </div>
  );
}

function Text25() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container27() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container28 />
        <button className="bg-[#1447e6] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[23px] relative size-full">
            <Text25 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">Which applications would you like to block access to?</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[67.63px] size-[12px] top-[6px]" data-name="Button">
      <Icon31 />
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-0 rounded-[6px] top-0 w-[89.625px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">BitTorrent</p>
      <Button7 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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
    <div className="absolute content-stretch flex flex-col items-start left-[64.67px] size-[12px] top-[6px]" data-name="Button">
      <Icon32 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[95.63px] rounded-[6px] top-0 w-[86.672px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">NordVPN</p>
      <Button8 />
    </div>
  );
}

function WC() {
  return (
    <div className="h-[26px] relative shrink-0 w-[808px]" data-name="wC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function YC() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[124.648px]" data-name="yC">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon33 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[72.5px] not-italic text-[#364153] text-[13px] text-center top-[9px] whitespace-nowrap">Select Apps</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <YC />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[72px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <WC />
        <Container31 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <Paragraph1 />
        <Container30 />
      </div>
    </div>
  );
}

function Vt() {
  return (
    <div className="h-[168px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container27 />
        <Container29 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] whitespace-nowrap">Application Bypass</p>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text28 />
        <Icon34 />
      </div>
    </div>
  );
}

function Text29() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container33 />
        <button className="bg-[#d1d5db] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-[23px] relative size-full">
            <Text29 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Vt1() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">Domain Blocking</p>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[131.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text30 />
        <Icon35 />
      </div>
    </div>
  );
}

function Text31() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container34() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container35 />
        <button className="bg-[#1447e6] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[23px] relative size-full">
            <Text31 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">Which domains would you like to block access to?</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9ca3af] text-[12px] top-[0.5px] whitespace-nowrap">Includes subdomains (e.g gambling.com would include bets.gambling.com)</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[13px] whitespace-nowrap">Enter domain (e.g. salesforce.com)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <TextInput2 />
        <Button9 />
      </div>
    </div>
  );
}

function Nc() {
  return (
    <div className="h-[36px] relative shrink-0 w-[808px]" data-name="NC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <Paragraph2 />
        <Paragraph3 />
        <Nc />
      </div>
    </div>
  );
}

function Vt2() {
  return (
    <div className="h-[160px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container34 />
        <Container36 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] whitespace-nowrap">Domain Bypass</p>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[122.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text32 />
        <Icon37 />
      </div>
    </div>
  );
}

function Text33() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container39 />
        <button className="bg-[#d1d5db] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-[23px] relative size-full">
            <Text33 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Vt3() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">Geo-Blocking</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text34 />
        <Icon38 />
      </div>
    </div>
  );
}

function Text35() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container40() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container41 />
        <button className="bg-[#1447e6] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[23px] relative size-full">
            <Text35 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">Block traffic to high-risk regions</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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
    <div className="absolute content-stretch flex flex-col items-start left-[48.8px] size-[12px] top-[6px]" data-name="Button">
      <Icon39 />
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-0 rounded-[6px] top-0 w-[70.805px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">Russia</p>
      <Button10 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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
    <div className="absolute content-stretch flex flex-col items-start left-[44.46px] size-[12px] top-[6px]" data-name="Button">
      <Icon40 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[76.8px] rounded-[6px] top-0 w-[66.461px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">China</p>
      <Button11 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33.43px] size-[12px] top-[6px]" data-name="Button">
      <Icon41 />
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[149.27px] rounded-[6px] top-0 w-[55.43px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">Iran</p>
      <Button12 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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

function Button13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80.56px] size-[12px] top-[6px]" data-name="Button">
      <Icon42 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute bg-[#f9fafb] border border-[#e5e7eb] border-solid h-[26px] left-[210.7px] rounded-[6px] top-0 w-[102.563px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] top-[4.5px] whitespace-nowrap">North Korea</p>
      <Button13 />
    </div>
  );
}

function WC1() {
  return (
    <div className="h-[26px] relative shrink-0 w-[808px]" data-name="wC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text36 />
        <Text37 />
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function YC1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[142.289px]" data-name="yC">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon43 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[81.5px] not-italic text-[#364153] text-[13px] text-center top-[9px] whitespace-nowrap">Select Regions</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <YC1 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[72px] relative shrink-0 w-[808px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <WC1 />
        <Container44 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[126px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <Paragraph4 />
        <Container43 />
      </div>
    </div>
  );
}

function Vt4() {
  return (
    <div className="h-[175px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container40 />
        <Container42 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[842px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">URL Blocking</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[842px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9ca3af] text-[12px] top-[0.5px] w-[828px]">Risk Based URL Blocking is not supported on Linux and Chromebooks. Linux based devices and Chromebooks will not be affected if this feature is enabled.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[68px] relative shrink-0 w-[842px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative size-full">
        <Heading7 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap">Risk-Based URL Blocking (AI/NLP)</p>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[248.289px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text40 />
        <Icon44 />
      </div>
    </div>
  );
}

function Text41() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container46() {
  return (
    <div className="h-[48px] relative shrink-0 w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container47 />
        <button className="bg-[#1447e6] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[23px] relative size-full">
            <Text41 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[808px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#364153] text-[13px] top-0 whitespace-nowrap">AI-based classification to prevent phishing and typo-squatting</p>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M10.5 3.5L3.5 10.5" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 3.5L10.5 10.5" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[34.188px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px whitespace-nowrap">Block</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[73.19px] top-[7.5px] w-[58.461px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">High-Risk</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[#fef2f2] h-[31.5px] relative rounded-[8px] shrink-0 w-[142.648px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon45 />
        <Text42 />
        <Text43 />
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3ba1200} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[32.18px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px whitespace-nowrap">Warn</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[71.18px] top-[7.5px] w-[75.898px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Medium-Risk</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[#fffbeb] h-[31.5px] relative rounded-[8px] shrink-0 w-[158.078px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon46 />
        <Text44 />
        <Text45 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[11px] size-[14px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1799)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1799">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[19.5px] left-[31px] top-[6px] w-[33.914px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#101828] text-[13px] top-px whitespace-nowrap">Allow</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute border-[#e5e7eb] border-l border-solid h-[16.5px] left-[72.91px] top-[7.5px] w-[55.016px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-[6px] not-italic text-[#6a7282] text-[11px] top-[0.5px] tracking-[0.0645px] whitespace-nowrap">Low-Risk</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f0fdf4] h-[31.5px] relative rounded-[8px] shrink-0 w-[138.93px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon47 />
        <Text46 />
        <Text47 />
      </div>
    </div>
  );
}

function Bd1() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-[808px]" data-name="Bd">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <Container49 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pl-[16px] relative size-full">
        <Paragraph6 />
        <Bd1 />
      </div>
    </div>
  );
}

function Vt5() {
  return (
    <div className="h-[127.5px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container46 />
        <Container48 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] whitespace-nowrap">URL Allowlist</p>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47004_1772)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47004_1772">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text48 />
        <Icon48 />
      </div>
    </div>
  );
}

function Text49() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[840px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
        <Container53 />
        <button className="bg-[#d1d5db] cursor-pointer h-[24px] relative rounded-[16777200px] shrink-0 w-[44px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end pr-[23px] relative size-full">
            <Text49 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Vt6() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-[842px]" data-name="vt">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[1253.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[28px] py-[20px] relative size-full">
        <Container23 />
        <div className="bg-white h-[110px] relative rounded-[10px] shrink-0 w-[842px]" data-name="selection drop down">
          <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
            <Container24 />
            <div className="relative shrink-0 w-[297px]">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[20px] relative w-full">
                <Container26 />
              </div>
            </div>
          </div>
        </div>
        <Vt />
        <Vt1 />
        <Vt2 />
        <Vt3 />
        <Vt4 />
        <Container45 />
        <Vt5 />
        <Vt6 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[1241px] relative rounded-[12px] shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container22 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Bd2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.297px]" data-name="Bd">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] not-italic text-[#364153] text-[14px] text-center top-[0.5px] whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[88.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Bd2 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Bd3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.789px]" data-name="Bd">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.5px] not-italic text-[14px] text-center text-white top-[0.5px] whitespace-nowrap">Create Policy</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#d4183d] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-[134.789px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center relative size-full">
        <Icon49 />
        <Bd3 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[44px] relative shrink-0 w-[900px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-end relative size-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Bd() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[2268px] items-center left-0 top-[96.43px] w-[1476px]" data-name="Bd">
      <Button />
      <Frame4 />
      <div className="bg-white h-[269px] relative rounded-[12px] shrink-0 w-[900px]" data-name="General info">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
          <Container5 />
          <Container8 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Frame1 />
      <Container16 />
      <Container21 />
      <Container54 />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-[24px] top-[21.5px] w-[219px]" data-name="Container">
      <Text50 />
      <Text51 />
      <Text52 />
      <Text53 />
      <Text54 />
    </div>
  );
}

function Icon50() {
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

function Button16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52px] pt-[8px] px-[8px] rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon50 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Nathan K.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Admin</p>
    </div>
  );
}

function T1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[4px] w-[64.789px]" data-name="T6">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Icon51() {
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

function Text55() {
  return (
    <div className="bg-[#1e3a5f] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[16777200px] size-[32px] top-[6px]" data-name="Primitive.span">
      <Text55 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute h-[44px] left-[104px] rounded-[10px] top-0 w-[144.789px]" data-name="SlotClone">
      <T1 />
      <Icon51 />
      <PrimitiveSpan5 />
    </div>
  );
}

function Icon52() {
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

function Text56() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[16777200px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button17() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon52 />
      <Text56 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[44px] left-[1203.21px] top-[9.5px] w-[248.789px]" data-name="Container">
      <Button16 />
      <SlotClone />
      <Button17 />
    </div>
  );
}

function Icon53() {
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

function Text57() {
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
        <Icon53 />
        <Text57 />
      </div>
    </div>
  );
}

function Icon54() {
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

function Button18() {
  return (
    <button className="absolute bg-white content-stretch cursor-pointer flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-0 w-[500px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <T2 />
      <Icon54 />
    </button>
  );
}

function T() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-b border-solid h-[64px] left-0 top-0 w-[1476px]" data-name="T6">
      <Container55 />
      <Container56 />
      <div className="absolute h-[378px] left-[473.11px] top-[14px] w-[500px]" data-name="Component 6">
        <Button18 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[2397px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Bd />
        <T />
      </div>
    </div>
  );
}

function Section() {
  return <div className="h-[2082.5px] shrink-0 w-0" data-name="Section" />;
}

function C() {
  return (
    <div className="bg-[#f9fafb] h-[2947px] relative shrink-0 w-full" data-name="c5">
      <div className="content-stretch flex items-start pl-[252px] relative size-full">
        <Container />
        <Section />
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <C />
    </div>
  );
}