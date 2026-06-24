import svgPaths from "./svg-czykuvu5bl";

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start not-italic relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#101828] text-[24px] tracking-[0.0703px]">Reports</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] tracking-[-0.3125px]">Security posture, risk signals, and activity insights across your tenants</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[20px] items-center overflow-clip relative shrink-0 w-[72.992px]" data-name="Primitive.span">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">Last 7 days</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center px-[11px] py-[6px] relative">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[11px] py-[6px] relative">
        <Icon1 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">{`Export `}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[56px] relative shrink-0 w-[242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative size-full">
        <Container3 />
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3361">
            <path d={svgPaths.p30439e00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[41px] whitespace-pre-wrap">12.5%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon3 />
        <Text />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-between left-[21px] top-[21px] w-[217.5px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[21px] top-[69px] w-[217.5px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">1,247</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[21px] top-[109px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Threats Prevented</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[16px] left-[21px] top-[137px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">IPS blocked exploits and attacks</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container6 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
        <div className="absolute inset-[-5.55%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3466 16.6783">
            <path d={svgPaths.p31b4080} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 5">
            <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container14() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-between left-[21px] pr-[181.5px] top-[21px] w-[217.5px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[21px] top-[69px] w-[217.5px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">34</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-[21px] top-[109px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Malware Detected</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[26.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">High</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-px">8</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container21() {
  return <div className="bg-[#1e2939] h-[6px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container20() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[51.367px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">Med</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[13.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-px">15</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container25() {
  return <div className="bg-[#4a5565] h-[6px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container24() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[37.539px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">Low</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[11.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#101828] text-[12px] top-px">11</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container29() {
  return <div className="bg-[#99a1af] h-[6px] rounded-[16777200px] shrink-0 w-full" data-name="Container" />;
}

function Container28() {
  return (
    <div className="bg-[#f3f4f6] h-[6px] relative rounded-[16777200px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[45.438px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[26px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[26px] items-center left-[21px] pr-[0.008px] top-[141px] w-[217.5px]" data-name="Container">
      <Container18 />
      <Container22 />
      <Container26 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container13 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[58.33%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-100%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 2.5">
            <path d="M0.833333 1.66667V0.833333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[41.67%] right-[58.33%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 3.33333">
            <path d="M0.833333 2.5V0.833333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[70.83%] left-[41.67%] right-[58.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-100%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 2.5">
            <path d="M0.833333 1.66667V0.833333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p1d33bb00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3333">
            <path d={svgPaths.paf7ba90} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[33.33%] right-1/2 top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[35px] whitespace-pre-wrap">8.3%</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[54.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-between left-[21px] top-[21px] w-[217.5px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[21px] top-[69px] w-[217.5px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">89</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[20px] left-[21px] top-[109px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">Files Quarantined</p>
    </div>
  );
}

function Container37() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[4.313px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container38() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container39() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[5.391px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container40() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[7.906px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container41() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[6.469px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container42() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[5.031px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container43() {
  return <div className="bg-[#d1d5dc] flex-[1_0_0] h-[32px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[2px] h-[32px] items-end left-[21px] pr-[-0.016px] top-[141px] w-[217.5px]" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[16px] left-[21px] top-[181px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Last 7 days</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container31 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container44 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 18.3333">
            <path d={svgPaths.p39947b80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 1.66667">
            <path d="M0.833333 0.833333H17.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3155f180} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[40px] whitespace-pre-wrap">15.7%</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-between left-[21px] top-[21px] w-[217.5px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[21px] top-[69px] w-[217.5px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">3,892</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[20px] left-[21px] top-[109px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">URLs Blocked</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[32px] left-[21px] top-[141px] w-[217.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217.5 32">
        <g clipPath="url(#clip0_24012_1531)" id="Icon">
          <path d={svgPaths.p2ee84b80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeWidth="3.04631" />
        </g>
        <defs>
          <clipPath id="clip0_24012_1531">
            <rect fill="white" height="32" width="217.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[16px] left-[21px] top-[181px] w-[217.5px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Web protection active</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white col-[4] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container46 />
      <Container49 />
      <Container50 />
      <Icon9 />
      <Container51 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[218px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container12 />
      <Container30 />
      <Container45 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75.922px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Top Users</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center tracking-[-0.1504px]">View All</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[146.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">john.smith@acme.com</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#f3f4f6] h-[18px] relative rounded-[8px] shrink-0 w-[53.141px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">Outlier</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon10 />
        <Text9 />
        <Badge />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">2,847</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Text10 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[153.477px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">sarah.jones@acme.com</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon11 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,523</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Text12 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container60 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[145.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">mike.chen@acme.com</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon12 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.43px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,342</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Text14 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[144.852px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">lisa.brown@acme.com</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon13 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[33.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,187</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Text16 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container66 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p100e7280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p38a00300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[158.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">david.wilson@acme.com</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon14 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,034</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Text18 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start px-[-8px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container59 />
      <Container62 />
      <Container65 />
      <Container68 />
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white col-[1] h-[279px] relative rounded-[10px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[126.273px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Top Applications</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center tracking-[-0.1504px]">View All</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[102.742px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Salesforce CRM</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">4,521</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Text20 />
    </div>
  );
}

function Container74() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative w-full">
        <Container75 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.008px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Microsoft 365</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">3,892</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Text22 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative w-full">
        <Container78 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Jira Software</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.461px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">2,341</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Text24 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative w-full">
        <Container81 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.164px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">GitHub Enterprise</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,876</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Text26 />
    </div>
  );
}

function Container83() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative w-full">
        <Container84 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[110.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Slack Workspace</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text27 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.648px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,654</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Text28 />
    </div>
  );
}

function Container86() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative w-full">
        <Container87 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start px-[-8px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container77 />
      <Container80 />
      <Container83 />
      <Container86 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white col-[2] h-[279px] relative rounded-[10px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.086px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Top Domains</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center tracking-[-0.1504px]">View All</p>
    </div>
  );
}

function Container95() {
  return <div className="bg-[#00c950] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[97.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">salesforce.com</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[8px] shrink-0 w-[53.016px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">Known</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container95 />
        <Text29 />
        <Badge1 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">4,521</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Text30 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container93 />
      </div>
    </div>
  );
}

function Container99() {
  return <div className="bg-[#00c950] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">office365.com</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[8px] shrink-0 w-[53.016px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">Known</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container99 />
        <Text31 />
        <Badge2 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">3,892</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Text32 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="bg-[#00c950] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.617px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">github.com</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#f9fafb] h-[18px] relative rounded-[8px] shrink-0 w-[53.016px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px]">Known</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container103 />
        <Text33 />
        <Badge3 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[35.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">1,876</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Text34 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container101 />
      </div>
    </div>
  );
}

function Container107() {
  return <div className="bg-[#fb2c36] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[148.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">suspicious-domain.xyz</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#fefce8] h-[18px] relative rounded-[8px] shrink-0 w-[67.773px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px]">Unknown</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fff085] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container107 />
        <Text35 />
        <Badge4 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">234</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Text36 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container105 />
      </div>
    </div>
  );
}

function Container111() {
  return <div className="bg-[#f0b100] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">cdn-tracker.io</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#fefce8] h-[18px] relative rounded-[8px] shrink-0 w-[67.773px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a65f00] text-[12px]">Unknown</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fff085] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container110() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container111 />
        <Text37 />
        <Badge5 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">156</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Text38 />
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[6px] px-[8px] relative size-full">
        <Container109 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[181px] items-start px-[-8px] relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container96 />
      <Container100 />
      <Container104 />
      <Container108 />
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-white col-[3] h-[279px] relative rounded-[10px] row-[1] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container90 />
        <Container91 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[279px] relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container71 />
      <Container89 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80.063px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Policy Hits</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center tracking-[-0.1504px]">View All</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa5c9980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[222.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Block Unauthorized Cloud Storage</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#faf5ff] h-[18px] relative rounded-[8px] shrink-0 w-[33.539px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px]">SIA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container118() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon15 />
        <Text39 />
        <Badge6 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">847</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Text40 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Container117 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pa5c9980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[20px] relative shrink-0 w-[197.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Require MFA for Admin Access</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[#eff6ff] h-[18px] relative rounded-[8px] shrink-0 w-[37.352px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">SPA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container121() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon16 />
        <Text41 />
        <Badge7 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.539px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">234</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container121 />
      <Text42 />
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Container120 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3265d200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[156.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Prevent Data Exfiltration</p>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[#fff7ed] h-[18px] relative rounded-[8px] shrink-0 w-[43.195px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px]">Zone</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container124() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon17 />
        <Text43 />
        <Badge8 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">189</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Text44 />
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Container123 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3265d200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[176.82px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Block High-Risk Categories</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[#faf5ff] h-[18px] relative rounded-[8px] shrink-0 w-[33.539px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px]">SIA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container127() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon18 />
        <Text45 />
        <Badge9 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[25.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">156</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container127 />
      <Text46 />
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Container126 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3265d200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[144.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Geo-Restriction Policy</p>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[#fff7ed] h-[18px] relative rounded-[8px] shrink-0 w-[43.195px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[7px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px]">Zone</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container130() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon19 />
        <Text47 />
        <Badge10 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">98</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container130 />
      <Text48 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Container129 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[228px] items-start px-[-8px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container119 />
      <Container122 />
      <Container125 />
      <Container128 />
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container114 />
        <Container115 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[121.836px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Posture Failures</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#b3b3b3] text-[14px] text-center tracking-[-0.1504px]">View All</p>
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[64.88px] not-italic text-[#c10007] text-[24px] text-center top-0 tracking-[0.0703px]">5</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.59px] not-italic text-[#4a5565] text-[12px] top-px tracking-[-0.1504px]">Critical</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-white col-[1] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container135 />
        <Container136 />
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[64.77px] not-italic text-[#a65f00] text-[24px] text-center top-0 tracking-[0.0703px]">12</p>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[41.19px] not-italic text-[#4a5565] text-[12px] top-px tracking-[-0.1504px]">Warning</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container138 />
        <Container139 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[64.57px] not-italic text-[#1447e6] text-[24px] text-center top-0 tracking-[0.0703px]">6</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[53.8px] not-italic text-[#4a5565] text-[12px] top-px tracking-[-0.1504px]">Info</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-white col-[3] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[13px] px-[13px] relative size-full">
        <Container141 />
        <Container142 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[78px] relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <Container137 />
      <Container140 />
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[489px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-px tracking-[0.3px] uppercase">Devices Requiring Attention</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p94c4b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 10.5H7.00583" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text49() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">LAPTOP-JSmith</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[20px] relative shrink-0 w-[128.742px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon20 />
        <Text49 />
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[#d4183d] h-[18px] relative rounded-[8px] shrink-0 w-[57.227px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">critical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[8px] top-[8px] w-[487px]" data-name="Container">
      <Container147 />
      <Badge11 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute bg-[#fef2f2] h-[20px] left-0 rounded-[4px] top-0 w-[87.813px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#e7000b] text-[12px] top-[3px]">Outdated AV</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-[#fef2f2] h-[20px] left-[91.81px] rounded-[4px] top-0 w-[94.609px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#e7000b] text-[12px] top-[3px]">Missing Patch</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="absolute h-[20px] left-[28px] top-[32px] w-[467px]" data-name="Container">
      <Text50 />
      <Text51 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute border border-[#f3f4f6] border-solid h-[62px] left-[-8px] rounded-[4px] top-[24px] w-[505px]" data-name="Container">
      <Container146 />
      <Container148 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p94c4b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 10.5H7.00583" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text52() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">DESKTOP-MBrown</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon21 />
        <Text52 />
      </div>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-[#d4183d] h-[18px] relative rounded-[8px] shrink-0 w-[57.227px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">critical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[8px] top-[8px] w-[487px]" data-name="Container">
      <Container151 />
      <Badge12 />
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute bg-[#fef2f2] h-[20px] left-0 rounded-[4px] top-0 w-[111.484px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#e7000b] text-[12px] top-[3px]">Firewall Disabled</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="absolute h-[20px] left-[28px] top-[32px] w-[467px]" data-name="Container">
      <Text53 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute border border-[#f3f4f6] border-solid h-[62px] left-[-8px] rounded-[4px] top-[94px] w-[505px]" data-name="Container">
      <Container150 />
      <Container152 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p94c4b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 10.5H7.00583" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text54() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">MOBILE-SJones</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[20px] relative shrink-0 w-[129.172px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon22 />
        <Text54 />
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-[#d4183d] h-[18px] relative rounded-[8px] shrink-0 w-[57.227px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">critical</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container154() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[8px] top-[8px] w-[487px]" data-name="Container">
      <Container155 />
      <Badge13 />
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute bg-[#fef2f2] h-[20px] left-0 rounded-[4px] top-0 w-[115.891px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#e7000b] text-[12px] top-[3px]">Jailbroken Device</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute h-[20px] left-[28px] top-[32px] w-[467px]" data-name="Container">
      <Text55 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute border border-[#f3f4f6] border-solid h-[62px] left-[-8px] rounded-[4px] top-[164px] w-[505px]" data-name="Container">
      <Container154 />
      <Container156 />
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[226px] relative shrink-0 w-full" data-name="Container">
      <Container144 />
      <Container145 />
      <Container149 />
      <Container153 />
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-white col-[2] relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container132 />
        <Container133 />
        <Container143 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[410px] relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Container131 />
    </div>
  );
}

function ZeroTrustAnalytics() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="ZeroTrustAnalytics">
      <Container4 />
      <Container52 />
      <Container112 />
    </div>
  );
}

export default function ReportsPage() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="ReportsPage">
      <Container />
      <ZeroTrustAnalytics />
    </div>
  );
}