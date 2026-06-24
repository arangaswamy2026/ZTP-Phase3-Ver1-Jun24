import svgPaths from "./svg-8o43cn0va9";

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]">
        <div className="flex-none h-[5px] rotate-180 w-[10px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
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
    <div className="h-[21px] relative shrink-0 w-[123.891px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Application Check</p>
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
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">Checks whether specific required applications are running on the device. If the process is left blank for an operating system, that operating system will not check for the app.</p>
      </div>
    </div>
  );
}

function Text() {
  return <div className="bg-white rounded-[33554400px] shrink-0 size-[18px]" data-name="Text" />;
}

function Button1() {
  return (
    <div className="absolute bg-[#d1d5db] content-stretch flex h-[24px] items-center left-[36px] pl-[3px] rounded-[33554400px] top-0 w-[44px]" data-name="Button">
      <Text />
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

function Container5() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center opacity-56 px-[13px] py-px relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Unified Client</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-px top-0 w-[350px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Select trust effect if the Trust factor check fails</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[74.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[37.5px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">ALWAYS DENY</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] h-[24px] relative rounded-[4px] shrink-0 w-[55px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1447e6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[28px] not-italic text-[#1447e6] text-[10px] text-center top-[5px] whitespace-nowrap">LOW TL</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-px relative shrink-0 w-[55px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[58.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[29.5px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">MEDIUM TL</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[58.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[14px] left-[29px] not-italic text-[#9ca3af] text-[10px] text-center top-[4px] tracking-[0.3px] whitespace-nowrap">NO EFFECT</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[31px] h-[24px] items-start left-[0.92px] pr-[0.031px] top-[56.56px] w-[350px]" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#e5e7eb] h-[4px] left-[6.08px] rounded-[33554400px] top-[8.44px] w-[320px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[#1447e6] h-[4px] left-[6.08px] rounded-[33554400px] top-[8.44px] w-[136.656px]" data-name="Container" />;
}

function Button6() {
  return <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[0.08px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button7() {
  return <div className="absolute bg-[#1447e6] border-2 border-[#1447e6] border-solid left-[127.73px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button8() {
  return <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[213.41px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Button9() {
  return <div className="absolute bg-white border-2 border-[#d1d5db] border-solid left-[320.08px] rounded-[33554400px] size-[12px] top-[4.44px]" data-name="Button" />;
}

function Container11() {
  return <div className="absolute bg-white border-2 border-[#1447e6] border-solid left-[122.73px] rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[20px] top-[0.44px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[21px] left-[0.92px] top-[28.56px] w-[333px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Container11 />
    </div>
  );
}

function TrustLevelSlider() {
  return (
    <div className="h-[90px] relative shrink-0 w-[351px]" data-name="TrustLevelSlider">
      <Paragraph />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[425.156px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[13px] whitespace-nowrap">{`If this Factor is not satisfied, the device's Trust Level will be set to low.`}</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[0.5px] w-[117.453px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">High Trust Level</p>
    </div>
  );
}

function Icon1() {
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

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-[117.45px] px-[19px] top-[2.5px] w-[54px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[171.45px] top-[0.5px] w-[142.25px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[15px] whitespace-nowrap">Low Trust Level</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[314px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <Container14 />
        <Text5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] h-[90px] items-start pl-[10px] py-[10px] relative shrink-0 w-[469px]" data-name="Container">
      <Paragraph1 />
      <Container13 />
    </div>
  );
}

function TrustEffect() {
  return (
    <div className="content-stretch flex gap-[24px] items-start mix-blend-luminosity opacity-50 py-[16px] relative shrink-0 w-full" data-name="Trust Effect">
      <div aria-hidden="true" className="absolute border-[rgba(243,244,246,0)] border-solid border-t inset-0 pointer-events-none" />
      <TrustLevelSlider />
      <Container12 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[249px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">
        <Container5 />
        <TrustEffect />
      </div>
    </div>
  );
}

export default function ApplicationCheckExpandedOff() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[8px] size-full" data-name="ApplicationCheck expanded OFF">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
      <Container4 />
    </div>
  );
}