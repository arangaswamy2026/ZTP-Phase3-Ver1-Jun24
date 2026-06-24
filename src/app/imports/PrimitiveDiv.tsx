import svgPaths from "./svg-0uu4is444f";

function Badge() {
  return (
    <div className="bg-[#fff7ed] h-[22px] relative rounded-[8px] shrink-0 w-[85.164px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#f54900] text-[12px]">Zone Policy</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#d4183d] h-[22px] relative rounded-[8px] shrink-0 w-[53.977px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PoliciesView() {
  return (
    <div className="h-[22px] relative shrink-0 w-[791.195px]" data-name="PoliciesView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Badge />
        <Badge1 />
      </div>
    </div>
  );
}

function PrimitiveH() {
  return (
    <div className="h-[32px] relative shrink-0 w-[791.195px]" data-name="Primitive.h2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">Block Guest to Employee Zone</p>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[20px] relative shrink-0 w-[791.195px]" data-name="Primitive.p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">Isolate Guest network from internal resources</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <PrimitiveH />
        <PrimitiveP />
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[118px] items-start left-[-0.4px] pl-[24px] pt-[24px] top-[-0.25px] w-[840px]" data-name="DialogHeader">
      <PoliciesView />
      <Frame />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.75px] left-0 not-italic text-[#101828] text-[14px] top-px tracking-[-0.1504px]">What this policy does:</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[73.23px] top-[3px] w-[57.297px]" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22.75px] not-italic relative shrink-0 text-[#c10007] text-[14px] tracking-[-0.1504px]">BLOCKS</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[251.4px] top-[3px] w-[77.477px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.75px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[-0.1504px]">Guest Zone</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[394.81px] top-[3px] w-[103.125px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.75px] not-italic relative shrink-0 text-[#101828] text-[14px] tracking-[-0.1504px]">Employee Zone</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px]">This policy</p>
      <Text />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[130.52px] not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px]">traffic initiated by</p>
      <Text1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[328.88px] not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px]">targeting</p>
      <Text2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[497.94px] not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px]">.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f9fafb] h-[87.5px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Traffic Flow</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24013_5375)" id="Icon">
          <path d={svgPaths.p2f327a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1cd74100} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe9cb400} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p345da6c0} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8V5.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24013_5375">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[16777200px] w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[66.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[33.5px] not-italic text-[#101828] text-[12px] text-center top-px">Guest Zone</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[41.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[21px] not-italic text-[#6a7282] text-[10px] text-center top-[0.5px] tracking-[0.1172px] uppercase">Source</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[71px] relative shrink-0 w-[252.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container5 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#fb2c36] h-[2px] shrink-0 w-[252.398px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="bg-[#ffe2e2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-[40.93px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[6px] not-italic text-[#c10007] text-[10px] top-[2.5px] tracking-[0.1172px]">DENY</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[25px] relative shrink-0 w-[252.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24013_5375)" id="Icon">
          <path d={svgPaths.p2f327a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1cd74100} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe9cb400} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p345da6c0} id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8V5.33333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24013_5375">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[16777200px] w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[88.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[44.5px] not-italic text-[#101828] text-[12px] text-center top-px">Employee Zone</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[67.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[34px] not-italic text-[#6a7282] text-[10px] text-center top-[0.5px] tracking-[0.1172px] uppercase">Destination</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[71px] relative shrink-0 w-[252.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Container10 />
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[105px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-px relative size-full">
          <Container4 />
          <Container6 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[137px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Policy Details</p>
    </div>
  );
}

function DefinitionTerm() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Source</p>
    </div>
  );
}

function DefinitionDescription() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Guest Zone</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-0 pt-[12px] px-[12px] rounded-[8px] top-0 w-[387.594px]" data-name="Container">
      <DefinitionTerm />
      <DefinitionDescription />
    </div>
  );
}

function DefinitionTerm1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Destination</p>
    </div>
  );
}

function DefinitionDescription1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Employee Zone</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[403.59px] pt-[12px] px-[12px] rounded-[8px] top-0 w-[387.602px]" data-name="Container">
      <DefinitionTerm1 />
      <DefinitionDescription1 />
    </div>
  );
}

function DefinitionTerm2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Source Address</p>
    </div>
  );
}

function DefinitionDescription2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Any</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-0 pt-[12px] px-[12px] rounded-[8px] top-[80px] w-[387.594px]" data-name="Container">
      <DefinitionTerm2 />
      <DefinitionDescription2 />
    </div>
  );
}

function DefinitionTerm3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Destination Address</p>
    </div>
  );
}

function DefinitionDescription3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Any</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[403.59px] pt-[12px] px-[12px] rounded-[8px] top-[80px] w-[387.602px]" data-name="Container">
      <DefinitionTerm3 />
      <DefinitionDescription3 />
    </div>
  );
}

function DefinitionTerm4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Source Port</p>
    </div>
  );
}

function DefinitionDescription4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Any</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-0 pt-[12px] px-[12px] rounded-[8px] top-[160px] w-[387.594px]" data-name="Container">
      <DefinitionTerm4 />
      <DefinitionDescription4 />
    </div>
  );
}

function DefinitionTerm5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Definition Term">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px uppercase">Destination Port</p>
    </div>
  );
}

function DefinitionDescription5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Definition Description">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Any</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[403.59px] pt-[12px] px-[12px] rounded-[8px] top-[160px] w-[387.602px]" data-name="Container">
      <DefinitionTerm5 />
      <DefinitionDescription5 />
    </div>
  );
}

function DefinitionList() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Definition List">
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[260px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <DefinitionList />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[580.5px] items-start pt-[11px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container11 />
    </div>
  );
}

function PoliciesView1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[596.5px] items-start left-0 overflow-clip px-[24px] top-[118.75px] w-[839.195px]" data-name="PoliciesView">
      <Container />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d4183d] h-[36px] relative rounded-[8px] shrink-0 w-[90.742px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57.5px] not-italic text-[14px] text-center text-white top-[8.5px] tracking-[-0.1504px]">Delete</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[71.195px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Close</p>
      </div>
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[85px] items-start justify-between left-[-0.4px] pt-[25px] px-[24px] top-[743.75px] w-[839.195px]" data-name="DialogFooter">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[807.2px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon3 />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <PoliciesView1 />
      <DialogFooter />
      <PrimitiveButton />
    </div>
  );
}