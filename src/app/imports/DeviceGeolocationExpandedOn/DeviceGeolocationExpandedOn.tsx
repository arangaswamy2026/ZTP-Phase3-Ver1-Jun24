import svgPaths from "./svg-62z9glspm2";

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-180 w-full">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-[143px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-0 w-[143.003px]">Device Geolocation</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[874_0_0] h-[41px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{`Verifies that the device is connecting from an administrator-approved country. `}</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-white h-[18px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute bg-[#1447e6] content-stretch flex flex-col h-[24px] items-start left-[36px] pl-[23px] pr-[3px] pt-[3px] rounded-[33554400px] top-0 w-[44px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Button />
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#364153] text-[12px] top-0 whitespace-nowrap">Select countries to block or allow:</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1447e6] flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Allowed</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24.5px] relative rounded-[4px] shrink-0 w-[63.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-center whitespace-nowrap">Blocked</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f3f4f6] h-[28.5px] relative rounded-[4px] shrink-0 w-[135.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pt-[2px] px-[2px] relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[28.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[32px] items-center px-[9px] py-px relative rounded-[8px] shrink-0 w-[118.234px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">United States</p>
      <Button4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d0cece] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[18px] left-0 text-[#6a7282] text-[12px] top-0 whitespace-nowrap">To satisfy the Trust Factor, the device must be located in one of the selected countries.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[102.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container9 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[829.656px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#364153] text-[12px] top-0 whitespace-nowrap">{`If the Device's location cannot be determined, satisfy the Trust Factor anyways. If enabled, the Device's Trust Level will not be impacted based on geolocation.`}</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1447e6] h-[24.5px] relative rounded-[4px] shrink-0 w-[63.828px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Enabled</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="flex-[1_0_0] h-[24.5px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-center whitespace-nowrap">Disabled</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f3f4f6] h-[28.5px] relative rounded-[4px] shrink-0 w-[139.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pt-[2px] px-[2px] relative size-full">
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[28.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[37.5px] items-start pt-[9px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container6 />
      <Container11 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-px top-[-0.5px] w-[350px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Select trust effect if the Trust factor check fails</p>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[74.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[37.5px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">ALWAYS DENY</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#eff6ff] h-[24px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1447e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[28px] not-italic text-[#1447e6] text-[10px] text-center top-[5px] whitespace-nowrap">LOW TL</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-px relative shrink-0 w-[55px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[58.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[29.5px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">MEDIUM TL</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[58.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[29px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">NO EFFECT</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[31px] h-[24px] items-start left-[0.92px] pr-[0.031px] top-[56.06px] w-[350px]" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#e5e7eb] h-[4px] left-[6.08px] rounded-[33554400px] top-[8.44px] w-[320px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[#1447e6] h-[4px] left-[6.08px] rounded-[33554400px] top-[8.44px] w-[136.656px]" data-name="Container" />;
}

function Button11() {
  return <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[0.08px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button12() {
  return <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[127.73px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button13() {
  return <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[213.41px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button14() {
  return <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[320.08px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Container19() {
  return <div className="absolute bg-white border-2 border-[#1447e6] border-solid left-[122.73px] rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[20px] top-[0.44px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[21px] left-[0.92px] top-[28.06px] w-[333px]" data-name="Container">
      <Container17 />
      <Container18 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Container19 />
    </div>
  );
}

function TrustLevelSlider() {
  return (
    <div className="h-[81px] relative shrink-0 w-[351px]" data-name="TrustLevelSlider">
      <Paragraph3 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[425.156px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">{`If this Factor is not satisfied, the device's Trust Level will be set to low.`}</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[117.453px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">High Trust Level</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1eb4c200} fill="var(--fill-0, #A1B3D5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-[117.45px] px-[19px] top-[2px] w-[54px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[171.45px] top-0 w-[142.25px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">Low Trust Level</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[21px] relative shrink-0 w-[314px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text3 />
        <Container22 />
        <Text4 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] h-[90px] items-start pl-[10px] py-[10px] relative shrink-0 w-[469px]" data-name="Container">
      <Paragraph4 />
      <Container21 />
    </div>
  );
}

function TrustEffect() {
  return (
    <div className="content-stretch flex gap-[24px] items-start py-[16px] relative shrink-0 w-full" data-name="Trust Effect">
      <div aria-hidden="true" className="absolute border-0 border-[#f3f4f6] border-solid inset-0 pointer-events-none" />
      <TrustLevelSlider />
      <Container20 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[249px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[25px] relative size-full">
        <Frame />
        <TrustEffect />
      </div>
    </div>
  );
}

export default function DeviceGeolocationExpandedOn() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[8px] size-full" data-name="Device Geolocation expanded ON">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
      <Container5 />
    </div>
  );
}