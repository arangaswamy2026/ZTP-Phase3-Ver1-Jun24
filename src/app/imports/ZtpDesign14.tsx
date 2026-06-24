import svgPaths from "./svg-i48dr8anb4";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Home</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">\</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Dashboard</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">System</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[196.758px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text />
        <Text1 />
        <Text2 />
        <Text1 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14007_813)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14007_813">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[76px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Riverside Dental Office</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[175.266px]" data-name="TopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <Text4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[576px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
        <TopBar />
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.87%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52523 6.67062">
            <path d={svgPaths.p218e7780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52px] pb-0 pt-[8px] px-[8px] rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Nathan K.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">Admin</p>
    </div>
  );
}

function TopBar1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[4px] w-[64.789px]" data-name="TopBar">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[120.79px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 bg-[#1e3a5f] grow h-[32px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[1.67772e+07px] size-[32px] top-[6px]" data-name="Primitive.span">
      <Text5 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute h-[44px] left-[104px] rounded-[10px] top-0 w-[144.789px]" data-name="SlotClone">
      <TopBar1 />
      <Icon3 />
      <PrimitiveSpan />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31962400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[1.67772e+07px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon4 />
      <Text6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[44px] relative shrink-0 w-[248.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <SlotClone />
        <Button2 />
      </div>
    </div>
  );
}

function TopBar2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px pt-0 px-[24px] top-0 w-[1476px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container />
      <Button />
      <Container3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center justify-center left-0 px-[17px] py-[9px] rounded-[8px] top-0 w-[154.32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center text-nowrap tracking-[-0.1504px]">← Back to Policies</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">{`Internet Access & Threat Protection`}</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[20px] top-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">1</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[125.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text7 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[#101828] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Security Profile</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">2</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text9 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Exceptions</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">3</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text11 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Review</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Icon5 />
      <Text10 />
      <Icon5 />
      <Text12 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1412px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading />
        <Container4 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6689">
            <path d={svgPaths.p8326c00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[124.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Category Blocking</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[8px] shrink-0 w-[44.68px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-nowrap tracking-[0.1172px]">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Badge />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[133.05px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon7 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-0 overflow-clip rounded-[8px] top-0 w-[151.047px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">Adult / Pornography</p>
      <PolicyTemplates />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[225.09px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon8 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[159.05px] overflow-clip rounded-[8px] top-0 w-[243.094px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">{`Gambling & Illegal Downloads (P2P)`}</p>
      <PolicyTemplates1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[169.44px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon9 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[410.14px] overflow-clip rounded-[8px] top-0 w-[187.438px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">{`Malicious Sites & Phishing`}</p>
      <PolicyTemplates2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[233.37px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon10 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[605.58px] overflow-clip rounded-[8px] top-0 w-[251.367px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">{`Hacking Tools & Anonymizers (VPNs)`}</p>
      <PolicyTemplates3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5V9.5" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#bedbff] border-solid h-[24px] left-[864.95px] rounded-[8px] top-0 w-[113.477px]" data-name="SlotClone">
      <Icon11 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[64px] not-italic text-[#155dfc] text-[12px] text-center text-nowrap top-[4px] translate-x-[-50%]">Add Category</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Badge1 />
      <Badge2 />
      <Badge3 />
      <Badge4 />
      <SlotClone1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[16px] left-0 text-[#99a1af] text-[12px] text-nowrap top-px">{`Tip: Block "Social Media" for marketing roles, block for others.`}</p>
    </div>
  );
}

function PolicyTemplates4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="PolicyTemplates">
      <Container8 />
      <Paragraph />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-[40px] top-0 w-[1290px]" data-name="Container">
      <Container7 />
      <PolicyTemplates4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return <div className="absolute bg-white left-[15px] rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton() {
  return (
    <div className="bg-[#030213] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[112px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container10 />
          <PrimitiveButton />
        </div>
      </div>
    </div>
  );
}

function PolicyRow() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.1)] h-[114px] left-0 rounded-[10px] top-0 w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 8.66667">
            <path d={svgPaths.p6134400} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7.33333">
            <path d={svgPaths.p1f3bec80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.43px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Application Blocking</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[8px] shrink-0 w-[44.68px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-nowrap tracking-[0.1172px]">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Badge5 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[239.7px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon13 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-0 overflow-clip rounded-[8px] top-0 w-[257.695px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">{`Torrents & File Sharing (uTorrent, etc.)`}</p>
      <PolicyTemplates5 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[160.93px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon14 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[265.7px] overflow-clip rounded-[8px] top-0 w-[178.93px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">Proxy / VPN Applications</p>
      <PolicyTemplates6 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[99.09px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon15 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[452.63px] overflow-clip rounded-[8px] top-0 w-[117.094px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">Hacking Tools</p>
      <PolicyTemplates7 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PolicyTemplates8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[187.98px] size-[12px] top-[5px]" data-name="PolicyTemplates">
      <Icon16 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[24px] left-[577.72px] overflow-clip rounded-[8px] top-0 w-[205.977px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[4px]">Unauthorized Remote Access</p>
      <PolicyTemplates8 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 2.5V9.5" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-[#eff6ff] border border-[#bedbff] border-solid h-[24px] left-[791.7px] rounded-[8px] top-0 w-[125.547px]" data-name="SlotClone">
      <Icon17 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[70px] not-italic text-[#155dfc] text-[12px] text-center text-nowrap top-[4px] translate-x-[-50%]">Add Application</p>
    </div>
  );
}

function PolicyTemplates9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="PolicyTemplates">
      <Badge6 />
      <Badge7 />
      <Badge8 />
      <Badge9 />
      <SlotClone2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[52px] items-start left-[40px] top-0 w-[1290px]" data-name="Container">
      <Container13 />
      <PolicyTemplates9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[52px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return <div className="absolute bg-white left-[15px] rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#030213] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container15 />
          <PrimitiveButton1 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow1() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.1)] h-[86px] left-0 rounded-[10px] top-[130px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 6.66667">
            <path d={svgPaths.p1a3d7800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_8.33%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 6.66667">
            <path d={svgPaths.p1a3d7800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-1/4 right-[74.96%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 right-[74.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[129.141px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Application Bypass</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[16px] left-0 top-[20px] w-[1290px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">Start with this DISABLED and add only if needed.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">Use only when a trusted business app breaks due to security inspection (e.g., older dental x-ray apps, local EMR tunnels).</p>
      <Text16 />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Enter application name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function DynamicList() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="DynamicList">
      <Input />
      <Button4 />
    </div>
  );
}

function PolicyTemplates10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[80px] items-start left-0 top-[28px] w-[1290px]" data-name="PolicyTemplates">
      <Paragraph1 />
      <DynamicList />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[108px] left-[40px] top-0 w-[1290px]" data-name="Container">
      <Text15 />
      <PolicyTemplates10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[108px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return <div className="absolute bg-white left-px rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#cbced4] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan3 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container19 />
          <PrimitiveButton2 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow2() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[142px] left-0 rounded-[10px] top-[232px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container20 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 14.6667">
            <path d={svgPaths.p1700eb00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 1.33333">
            <path d="M0.666667 0.666667H14" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Domain Blocking</p>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[8px] shrink-0 w-[44.68px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-nowrap tracking-[0.1172px]">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Badge10 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">Block known unsafe domains and high-risk TLDs (e.g., .xyz, .top, .click) along with malware-infected and scam domains.</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Enter domain to block</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function DynamicList1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="DynamicList">
      <Input1 />
      <Button5 />
    </div>
  );
}

function PolicyTemplates11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="PolicyTemplates">
      <Paragraph2 />
      <DynamicList1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[40px] top-0 w-[1290px]" data-name="Container">
      <Container22 />
      <PolicyTemplates11 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[88px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container23 />
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return <div className="absolute bg-white left-[15px] rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#030213] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container24 />
          <PrimitiveButton3 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow3() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.1)] h-[122px] left-0 rounded-[10px] top-[390px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 6.66667">
            <path d={svgPaths.p1a3d7800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_8.33%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 6.66667">
            <path d={svgPaths.p1a3d7800} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-1/4 right-[74.96%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 right-[74.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[103.859px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Domain Bypass</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">Keep OFF unless required for specific local apps or obscure EMR backends.</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Enter domain to bypass</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function DynamicList2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="DynamicList">
      <Input2 />
      <Button6 />
    </div>
  );
}

function PolicyTemplates12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[60px] items-start left-0 top-[28px] w-[1290px]" data-name="PolicyTemplates">
      <Paragraph3 />
      <DynamicList2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[88px] left-[40px] top-0 w-[1290px]" data-name="Container">
      <Text18 />
      <PolicyTemplates12 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[88px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return <div className="absolute bg-white left-px rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#cbced4] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan5 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container28 />
          <PrimitiveButton4 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow4() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[122px] left-0 rounded-[10px] top-[528px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 14.6667">
            <path d={svgPaths.p1700eb00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 1.33333">
            <path d="M0.666667 0.666667H14" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Geo-Blocking</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[8px] shrink-0 w-[44.68px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-nowrap tracking-[0.1172px]">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Badge11 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-0 top-px w-[148.734px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] text-nowrap">Block High-Risk Regions:</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[55.87px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon25 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-0 overflow-clip rounded-[8px] top-0 w-[73.867px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">Russia</p>
      <DynamicList3 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[51px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon26 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-[81.87px] overflow-clip rounded-[8px] top-0 w-[69px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">China</p>
      <DynamicList4 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40.12px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon27 />
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-[158.87px] overflow-clip rounded-[8px] top-0 w-[58.117px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">Iran</p>
      <DynamicList5 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[87.41px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon28 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-[224.98px] overflow-clip rounded-[8px] top-0 w-[105.414px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">North Korea</p>
      <DynamicList6 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[124.08px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon29 />
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-[338.4px] overflow-clip rounded-[8px] top-0 w-[142.078px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">Brazil (Fraud Risk)</p>
      <DynamicList7 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M3.5 0.5L0.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M0.5 0.5L3.5 3.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DynamicList8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[185.69px] size-[12px] top-[4px]" data-name="DynamicList">
      <Icon30 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-[#f3f4f6] border border-[#e5e7eb] border-solid h-[22px] left-[488.48px] overflow-clip rounded-[8px] top-0 w-[203.688px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#364153] text-[12px] text-nowrap top-[3px]">Eastern Europe (Cybercrime)</p>
      <DynamicList8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <Badge12 />
      <Badge13 />
      <Badge14 />
      <Badge15 />
      <Badge16 />
      <Badge17 />
    </div>
  );
}

function Input3() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Enter country or region</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Button7 />
    </div>
  );
}

function DynamicList9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[66px] items-start left-0 top-[28px] w-[1290px]" data-name="DynamicList">
      <Container32 />
      <Container33 />
    </div>
  );
}

function PolicyTemplates13() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="PolicyTemplates">
      <Text20 />
      <DynamicList9 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[122px] items-start left-[40px] top-0 w-[1290px]" data-name="Container">
      <Container31 />
      <PolicyTemplates13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[122px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container30 />
        <Container34 />
      </div>
    </div>
  );
}

function PrimitiveSpan6() {
  return <div className="absolute bg-white left-[15px] rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton5() {
  return (
    <div className="bg-[#030213] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan6 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[154px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container35 />
          <PrimitiveButton5 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow5() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.1)] h-[156px] left-0 rounded-[10px] top-[666px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6773 13.3427">
            <path d={svgPaths.p19ed2c80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
            <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
            <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[230.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1c398e] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Risk-Based URL Blocking (AI/NLP)</p>
      </div>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[8px] shrink-0 w-[44.68px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-[3px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[15px] not-italic relative shrink-0 text-[#1447e6] text-[10px] text-nowrap tracking-[0.1172px]">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Badge18 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">AI-based classification to prevent phishing and typo-squatting.</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14007_904)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6L6 10" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6L10 10" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14007_904">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RiskActionSelector() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[5px] w-[36.609px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[18.5px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Block</p>
    </div>
  );
}

function RiskActionSelector1() {
  return (
    <div className="absolute h-[20px] left-[86.61px] top-[5px] w-[63.406px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[32.5px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">High-Risk</p>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.4">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-0 rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[192.016px]" data-name="Button">
      <Icon33 />
      <RiskActionSelector />
      <RiskActionSelector1 />
      <div className="absolute flex items-center justify-center left-[148.02px] size-[16px] top-[7px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon34 />
        </div>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p293dc0c0} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function RiskActionSelector2() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[5px] w-[34.375px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[17.5px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Warn</p>
    </div>
  );
}

function RiskActionSelector3() {
  return (
    <div className="absolute h-[20px] left-[84.38px] top-[5px] w-[85.133px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[43px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Medium-Risk</p>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.4">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[208.02px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[211.508px]" data-name="Button">
      <Icon35 />
      <RiskActionSelector2 />
      <RiskActionSelector3 />
      <div className="absolute flex items-center justify-center left-[167.51px] size-[16px] top-[7px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon36 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14007_842)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14007_842">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RiskActionSelector4() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[5px] w-[35.742px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[18px] not-italic text-[#101828] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Allow</p>
    </div>
  );
}

function RiskActionSelector5() {
  return (
    <div className="absolute h-[20px] left-[85.74px] top-[5px] w-[59.25px]" data-name="RiskActionSelector">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[30px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Low-Risk</p>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.4">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[435.52px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[186.992px]" data-name="Button">
      <Icon37 />
      <RiskActionSelector4 />
      <RiskActionSelector5 />
      <div className="absolute flex items-center justify-center left-[142.99px] size-[16px] top-[7px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[13.328px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.333px] left-0 not-italic text-[#99a1af] text-[10px] text-nowrap top-[0.5px] tracking-[0.1172px]">Note: Not supported on Linux/Chromebooks (safe to leave ON).</p>
    </div>
  );
}

function PolicyTemplates14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[77.328px] items-start relative shrink-0 w-full" data-name="PolicyTemplates">
      <Paragraph4 />
      <Container39 />
      <Paragraph5 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[105.328px] items-start left-[40px] top-0 w-[1290px]" data-name="Container">
      <Container38 />
      <PolicyTemplates14 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[105.328px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function PrimitiveSpan7() {
  return <div className="absolute bg-white left-[15px] rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton6() {
  return (
    <div className="bg-[#030213] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan7 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[137.328px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container41 />
          <PrimitiveButton6 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow6() {
  return (
    <div className="absolute bg-[rgba(239,246,255,0.1)] h-[139.328px] left-0 rounded-[10px] top-[838px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container42 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 4">
            <path d={svgPaths.p207459c0} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 pb-0 pt-[6px] px-[6px] rounded-[8px] size-[28px] top-[2px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[88.633px]" data-name="Text">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">URL Allowlist</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px">Add only business-critical domains to ensure inspection never interferes with operations.</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="basis-0 bg-[#f3f3f5] grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Enter domain (e.g. example.com)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Input4 />
      <Button11 />
    </div>
  );
}

function PolicyTemplates15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[60px] items-start left-0 top-[28px] w-[1290px]" data-name="PolicyTemplates">
      <Paragraph6 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[88px] left-[40px] top-0 w-[1290px]" data-name="Container">
      <Text22 />
      <PolicyTemplates15 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[88px] relative shrink-0 w-[1330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container43 />
        <Container45 />
      </div>
    </div>
  );
}

function PrimitiveSpan8() {
  return <div className="absolute bg-white left-px rounded-[1.67772e+07px] size-[16px] top-[1.2px]" data-name="Primitive.span" />;
}

function PrimitiveButton7() {
  return (
    <div className="bg-[#cbced4] h-[18.398px] relative rounded-[1.67772e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PrimitiveSpan8 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between pb-0 pt-[16px] px-[16px] relative size-full">
          <Container46 />
          <PrimitiveButton7 />
        </div>
      </div>
    </div>
  );
}

function PolicyRow7() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] h-[122px] left-0 rounded-[10px] top-[993.33px] w-[1412px]" data-name="PolicyRow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container47 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function PolicyTemplates16() {
  return (
    <div className="h-[1115.328px] relative shrink-0 w-full" data-name="PolicyTemplates">
      <PolicyRow />
      <PolicyRow1 />
      <PolicyRow2 />
      <PolicyRow3 />
      <PolicyRow4 />
      <PolicyRow5 />
      <PolicyRow6 />
      <PolicyRow7 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1412px]" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PolicyTemplates16 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[16px] relative shrink-0 w-[314.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] text-nowrap top-px">* Default profile based on small business best practices</p>
      </div>
    </div>
  );
}

function Container49() {
  return <div className="shrink-0 size-0" data-name="Container" />;
}

function Container50() {
  return (
    <div className="h-[33px] relative shrink-0 w-[1412px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-0 pt-px px-0 relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function PolicyTemplates17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1292.328px] items-start left-0 top-[60px] w-[1412px]" data-name="PolicyTemplates">
      <Container5 />
      <PrimitiveDiv />
      <Container50 />
    </div>
  );
}

function PoliciesView() {
  return (
    <div className="absolute h-[1352.328px] left-[32px] top-[96px] w-[1412px]" data-name="PoliciesView">
      <Button3 />
      <PolicyTemplates17 />
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[1480.328px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TopBar2 />
        <PoliciesView />
      </div>
    </div>
  );
}

function Section() {
  return <div className="h-[1480.328px] shrink-0 w-0" data-name="Section" />;
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[1480.328px] items-start left-0 pl-[252px] pr-0 py-0 top-0 w-[1728px]" data-name="App">
      <Container51 />
      <Section />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[0.0508px] uppercase">ZTP</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[63px] relative shrink-0 w-[191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Dashboard</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon41 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3baa1080} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Users</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon42 />
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14007_894)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14007_894">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Connectors</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon43 />
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] tracking-[-0.1504px]">Policies</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#ff5d00] h-[36px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon44 />
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.33333 1.33333V2.66667" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p176c1660} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pe341ec0} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p227c2e00} id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Diagnostics</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon45 />
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Downloads</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon46 />
          <Text28 />
        </div>
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14007_789)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14007_789">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Activity</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon47 />
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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

function Text30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Reports</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <Icon48 />
          <Text30 />
        </div>
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[88px]">Device Configuration</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Icon49 />
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[191px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip pb-0 pt-[12px] px-[12px] relative rounded-[inherit] size-full">
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function SecondaryNav() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch flex flex-col h-[996px] items-start left-[60px] pl-0 pr-px py-0 top-0 w-[192px]" data-name="SecondaryNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container52 />
      <Navigation />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents inset-[28%_20%_28%_23.33%]" data-name="Logo">
      <div className="absolute inset-[28%_20%_28%_23.33%]" data-name="Fill 10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path clipRule="evenodd" d={svgPaths.p9f48b00} fill="var(--fill-0, #FF5D00)" fillRule="evenodd" id="Fill 10" />
        </svg>
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Logo />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 top-0 w-[60px]" data-name="Logo">
      <Icon50 />
    </div>
  );
}

function Union() {
  return (
    <div className="absolute contents inset-0" data-name="Union">
      <div className="absolute inset-[55%_55%_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p28b65070} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55%_0_0_55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p301c4280} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_55%_55%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p146d2980} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_55%_55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p37260100} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union />
    </div>
  );
}

function PrimaryNav() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] size-[24px] top-[14px]" data-name="PrimaryNav">
      <Icon51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[50px] opacity-0 rounded-[4px] top-[38px] w-[57.297px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[29px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Home</p>
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="absolute bg-[#001b50] h-[52px] left-0 top-0 w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav />
      <Container53 />
    </div>
  );
}

function Union1() {
  return (
    <div className="absolute contents inset-[0_0.53%_1.92%_0]" data-name="Union">
      <div className="absolute inset-[48.36%_0.53%_1.92%_56.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4404 12.6782">
          <path clipRule="evenodd" d={svgPaths.pa5bc730} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_17.24%_16.92%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8707 21.1842">
          <path clipRule="evenodd" d={svgPaths.p27677940} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon52() {
  return (
    <div className="h-[25.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union1 />
    </div>
  );
}

function PrimaryNav1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.5px] items-start left-[15.58px] top-[14px] w-[28.844px]" data-name="PrimaryNav">
      <Icon52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[52.42px] opacity-0 rounded-[4px] top-[39.5px] w-[66.891px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[33px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Firewall</p>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="absolute bg-[#001b50] h-[53.5px] left-0 top-[53px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav1 />
      <Container54 />
    </div>
  );
}

function Union2() {
  return (
    <div className="absolute contents inset-[0_0.69%_0.64%_0]" data-name="Union">
      <div className="absolute inset-[53.19%_0.69%_0.64%_56.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4203 12.8438">
          <path clipRule="evenodd" d={svgPaths.p16a3fbc0} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.78%_32.24%_16.7%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.514 9.04796">
          <path d={svgPaths.p224ac200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_36.78%_58.25%_22.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6308 11.6164">
          <path d={svgPaths.p253582e0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="h-[27.82px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union2 />
    </div>
  );
}

function PrimaryNav2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.82px] items-start left-[15.6px] top-[14px] w-[28.797px]" data-name="PrimaryNav">
      <Icon53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[52.4px] opacity-0 rounded-[4px] top-[41.82px] w-[48.617px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[24.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">VPN</p>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="absolute bg-[#001b50] h-[55.82px] left-0 top-[107.5px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav2 />
      <Container55 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <path clipRule="evenodd" d={svgPaths.p2bbc6200} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" id="Subtract" />
      </svg>
    </div>
  );
}

function PrimaryNav3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start left-[4px] top-[4px] w-[28px]" data-name="PrimaryNav">
      <Icon54 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8.08px] top-[13px] w-[19.836px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001b50] text-[10px] text-center text-nowrap">ZTP</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#ff5d00] h-[38px] left-0 rounded-[10px] top-0 w-[36px]" data-name="Container">
      <PrimaryNav3 />
      <Paragraph7 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[44px] opacity-0 rounded-[4px] top-[38px] w-[82.359px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[41.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Zero Trust</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute h-[38px] left-[12px] top-[14px] w-[36px]" data-name="Button">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-[#ff5d00] h-[26px] left-0 top-[20px] w-[3px]" data-name="Container" />;
}

function NavigationTabItem3() {
  return (
    <div className="absolute bg-[#001b50] h-[66px] left-0 top-[164.32px] w-[60px]" data-name="NavigationTabItem">
      <Button21 />
      <Container58 />
    </div>
  );
}

function Union3() {
  return (
    <div className="absolute contents inset-[0_2.52%_0.87%_0]" data-name="Union">
      <div className="absolute inset-[0_47.64%_0.87%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2889 22.5995">
          <path d={svgPaths.p11d9a400} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_31.62%_4.49%_46.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.10369 5.12336">
          <path d={svgPaths.p72ef200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_5.9%_4.49%_72.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.84766 5.12336">
          <path d={svgPaths.p382a0880} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.95%_5.91%_32.58%_51.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5307 5.12227">
          <path d={svgPaths.p53f0c00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.77%_2.52%_58.91%_41.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2035 8.96429">
          <path d={svgPaths.p22be6700} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.86%_5.91%_60.67%_63.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39852 5.12331">
          <path d={svgPaths.p11f02f70} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="h-[22.797px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union3 />
    </div>
  );
}

function PrimaryNav4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.797px] items-start left-[16.35px] top-[14px] w-[27.289px]" data-name="PrimaryNav">
      <Icon55 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[51.64px] opacity-0 rounded-[4px] top-[36.8px] w-[57.094px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[29px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Cloud</p>
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="absolute bg-[#001b50] h-[50.797px] left-0 top-[231.32px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav4 />
      <Container59 />
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute contents inset-[0_0.87%_3.08%_0]" data-name="Subtract">
      <div className="absolute inset-[41.56%_0.87%_3.08%_29.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8002 13.9481">
          <path d={svgPaths.p3d495fe0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.87%_43.36%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5985 14.2708">
          <path d={svgPaths.p488e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon56() {
  return (
    <div className="h-[25.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Subtract />
    </div>
  );
}

function PrimaryNav5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.195px] items-start left-[18.6px] top-[14px] w-[22.797px]" data-name="PrimaryNav">
      <Icon56 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[49.4px] opacity-0 rounded-[4px] top-[39.2px] w-[72.164px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[36px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Wireless</p>
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="absolute bg-[#001b50] h-[53.195px] left-0 top-[283.12px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav5 />
      <Container60 />
    </div>
  );
}

function Union4() {
  return (
    <div className="absolute contents inset-[0_0.71%_1.46%_0]" data-name="Union">
      <div className="absolute inset-[92.34%_49.09%_1.46%_14.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9119 1.77313">
          <path d={svgPaths.p255db00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.37%_34.55%_16.98%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4411 14.1861">
          <path d={svgPaths.p2cb39d80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.23%_12.73%_37.66%_69.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.95596 9.45741">
          <path clipRule="evenodd" d={svgPaths.pe214380} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.17%_7.65%_76.39%_64.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.27909 3.26919">
          <path d={svgPaths.p143d200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.71%_84.98%_57.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8265 4.29094">
          <path d={svgPaths.p39c02c00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon57() {
  return (
    <div className="h-[28.57px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union4 />
    </div>
  );
}

function PrimaryNav6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.57px] items-start left-[13.62px] top-[14px] w-[32.758px]" data-name="PrimaryNav">
      <Icon57 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[54.38px] opacity-0 rounded-[4px] top-[42.57px] w-[104.219px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[52.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Email Security</p>
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="absolute bg-[#001b50] h-[56.57px] left-0 top-[337.31px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav6 />
      <Container61 />
    </div>
  );
}

function Union5() {
  return (
    <div className="absolute contents inset-[0_1.72%_0.41%_0]" data-name="Union">
      <div className="absolute inset-[56.4%_1.72%_0.41%_61.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6126 10.755">
          <path clipRule="evenodd" d={svgPaths.pd905080} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.5%_43.1%_10.06%_20.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2748 8.57441">
          <path d={svgPaths.p85efe00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_84.02%_35.2%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55289 16.1337">
          <path d={svgPaths.p15904b00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_74.76%_44.8%_12.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.65532 11.3531">
          <path d={svgPaths.p25754e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.33%_41.45%_46.76%_38.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66049 8.19511">
          <path d={svgPaths.p7e8ec00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_15.17%_48.4%_72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.6547 10.4571">
          <path d={svgPaths.p2a974180} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_2.76%_48.4%_81.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55212 12.847">
          <path d={svgPaths.p2741b000} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_65.48%_54.4%_24.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7622 6.57266">
          <path d={svgPaths.p9538e80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_27.58%_54.4%_62.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.76238 6.57269">
          <path d={svgPaths.p37abe440} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="h-[24.898px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union5 />
    </div>
  );
}

function PrimaryNav7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24.898px] items-start left-[15.75px] top-[14px] w-[28.5px]" data-name="PrimaryNav">
      <Icon58 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[52.25px] opacity-0 rounded-[4px] top-[38.9px] w-[74.266px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[37.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Endpoint</p>
    </div>
  );
}

function NavigationTabItem7() {
  return (
    <div className="absolute bg-[#001b50] h-[52.898px] left-0 top-[394.88px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav7 />
      <Container62 />
    </div>
  );
}

function Union6() {
  return (
    <div className="absolute contents inset-[0_2.88%_1.11%_0]" data-name="Union">
      <div className="absolute inset-[50.11%_2.88%_1.11%_48.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0733 13.9855">
          <path clipRule="evenodd" d={svgPaths.p1d5da00} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.03%_40.51%_19.57%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4843 9.00337">
          <path d={svgPaths.pa4f7200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_42.71%_59.68%_20.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3736 11.5591">
          <path d={svgPaths.p3d065400} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="h-[28.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union6 />
    </div>
  );
}

function PrimaryNav8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.672px] items-start left-[14.46px] top-[14px] w-[31.07px]" data-name="PrimaryNav">
      <Icon59 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[53.53px] opacity-0 rounded-[4px] top-[42.67px] w-[61.953px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[31.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Switch</p>
    </div>
  );
}

function NavigationTabItem8() {
  return (
    <div className="absolute bg-[#001b50] h-[56.672px] left-0 top-[448.78px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav8 />
      <Container63 />
    </div>
  );
}

function Union7() {
  return (
    <div className="absolute contents inset-[0_0.68%_3.08%_0]" data-name="Union">
      <div className="absolute inset-[41.49%_31.72%_3.08%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6613 13.9657">
          <path d={svgPaths.p19dd800} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.68%_27.31%_5.1%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1328 18.3154">
          <path d={svgPaths.p5d32a00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="h-[25.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union7 />
    </div>
  );
}

function PrimaryNav9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.195px] items-start left-[15.6px] top-[14px] w-[28.797px]" data-name="PrimaryNav">
      <Icon60 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[52.4px] opacity-0 rounded-[4px] top-[39.2px] w-[75.586px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[38px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">Analytics</p>
    </div>
  );
}

function NavigationTabItem9() {
  return (
    <div className="absolute bg-[#001b50] h-[53.195px] left-0 top-[506.45px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav9 />
      <Container64 />
    </div>
  );
}

function Union8() {
  return (
    <div className="absolute contents inset-[0_2.5%_0.8%_0]" data-name="Union">
      <div className="absolute inset-[0_14.68%_0.8%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6153 30.5055">
          <path clipRule="evenodd" d={svgPaths.p1489a000} fill="var(--fill-0, #D4E3F9)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_91.86%_28.72%_0.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.53424 10.3146">
          <path d={svgPaths.pab21a00} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_2.5%_28.72%_89.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.53423 10.3146">
          <path d={svgPaths.p19560680} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="h-[30.75px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union8 />
    </div>
  );
}

function PrimaryNav10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.75px] items-start left-[14.4px] top-[14px] w-[31.195px]" data-name="PrimaryNav">
      <Icon61 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[#101828] h-[28px] left-[53.59px] opacity-0 rounded-[4px] top-[44.75px] w-[86.375px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[43.5px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] translate-x-[-50%]">MSP Portal</p>
    </div>
  );
}

function NavigationTabItem10() {
  return (
    <div className="absolute bg-[#001b50] h-[58.75px] left-0 top-[560.65px] w-[60px]" data-name="NavigationTabItem">
      <PrimaryNav10 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[946px] left-0 overflow-clip top-[50px] w-[60px]" data-name="Container">
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
  );
}

function PrimaryNav11() {
  return (
    <div className="absolute bg-[#001b50] h-[996px] left-0 top-0 w-[60px]" data-name="PrimaryNav">
      <Logo1 />
      <Container66 />
    </div>
  );
}

export default function ZtpDesign() {
  return (
    <div className="bg-white relative size-full" data-name="ZTP Design 1.4">
      <App />
      <SecondaryNav />
      <PrimaryNav11 />
    </div>
  );
}