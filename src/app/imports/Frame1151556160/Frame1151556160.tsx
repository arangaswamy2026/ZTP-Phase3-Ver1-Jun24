import svgPaths from "./svg-sla0z75gch";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[50.5px] not-italic text-[#364153] text-[14px] text-center top-[0.5px] tracking-[-0.15px] whitespace-nowrap">Back to Profiles</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-[124.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex h-[36px] items-start left-0 top-[calc(50%+0.06px)]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[28px] tracking-[-0.5px] whitespace-nowrap">Device Trust Profile</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[33px] relative shrink-0 w-[1136px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[1136px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#6a7282] text-[16px] w-[min-content]">Define the security checks every user’s device must pass. Devices that fail will have their access automatically restricted.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Container1 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Info">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_45006_3590)" id="Info">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3590">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative rounded-[10px] shrink-0 w-[1136px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c7dfff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Info />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#1c398e] text-[14px]">Devices that pass all enabled checks are automatically treated as High Trust and get full access. Devices that fail are treated as Low Trust and may be restricted. You can customize what happens</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </button>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Application Check</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks if specific required applications are running on the device. If the process is left blank for an operating system,it will not check for the app.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container7 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button1 />
      <Container6 />
    </div>
  );
}

function Text2() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text2 />
        </button>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </button>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Auto Update</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks that automatic software updates are enabled on the device to ensure security patches are applied promptly.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button2 />
      <Container10 />
    </div>
  );
}

function Text4() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text4 />
        </button>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </button>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Disk Encryption</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks that full disk encryption (e.g., BitLocker, FileVault) is enabled on the device to protect data at rest.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button3 />
      <Container14 />
    </div>
  );
}

function Text6() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text6 />
        </button>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </button>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Firewall</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks the device firewall is enabled and actively blocking unauthorized inbound connections.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container19 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button4 />
      <Container18 />
    </div>
  );
}

function Text8() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text8 />
        </button>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </button>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Not Jailbroken</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks that the device has not been jailbroken or rooted, which could compromise security controls.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container23 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button5 />
      <Container22 />
    </div>
  );
}

function Text10() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text10 />
        </button>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </button>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Screen Lock</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks that a screen lock (PIN, password, or biometric) is configured and active on the device.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container27 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button6 />
      <Container26 />
    </div>
  );
}

function Text12() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text12 />
        </button>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <button className="cursor-pointer relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </button>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Device Geolocation</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text13 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[862px]">{`If the Device's location can’t be determined, satisfy the Trust Factor anyways. If enabled, the Device's Trust Level will not be impacted on geolocation`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container31 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button7 />
      <Container30 />
    </div>
  );
}

function Text14() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <button className="absolute bg-[#1447e6] content-stretch cursor-pointer flex h-[24px] items-center left-[1074px] pl-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text14 />
        </button>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">CSE App Version</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[648.602px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] whitespace-nowrap">Checks that the CSE app installed on the device meets the minimum required version for security compliance.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container35 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button8 />
      <Container34 />
    </div>
  );
}

function Text16() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon9 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text16 />
        </button>
        <Container36 />
      </div>
    </div>
  );
}

function Lh() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Chrome Browser Version</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[668px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] whitespace-nowrap">Checks that the Chrome browser installed on the device meets the minimum required version for security compliance.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container40 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button9 />
      <Container39 />
    </div>
  );
}

function Text18() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon11 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container38 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text18 />
        </button>
        <Container41 />
      </div>
    </div>
  );
}

function Lh1() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Operating System Version</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text19 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[648.602px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] whitespace-nowrap">Checks that the device operating system meets the minimum required version for security compliance.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container45 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button10 />
      <Container44 />
    </div>
  );
}

function Text20() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon13 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container43 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text20 />
        </button>
        <Container46 />
      </div>
    </div>
  );
}

function Lh2() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">File Check</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text21 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks for specific files on the device as part of security compliance. If the process is left blank for an operating system,it will not check for the app.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container50 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button11 />
      <Container49 />
    </div>
  );
}

function Text22() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon15 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container48 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text22 />
        </button>
        <Container51 />
      </div>
    </div>
  );
}

function Lh3() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Property list check</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[849px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks specific property list (.plist) values on the device to ensure required configurations are set.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container55 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button12 />
      <Container54 />
    </div>
  );
}

function Text24() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon17 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text24 />
        </button>
        <Container56 />
      </div>
    </div>
  );
}

function Lh4() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-0 whitespace-nowrap">Registry Check</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Text25 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[847px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.44px] w-[866.708px]">Checks specific registry keys and values on the device to verify required security configurations.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] h-[38px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container60 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[38px] items-center left-[16px] top-[9px] w-[1042px]" data-name="Container">
      <Button13 />
      <Container59 />
    </div>
  );
}

function Text26() {
  return <div className="bg-white rounded-[16777200px] shrink-0 size-[18px]" data-name="Text" />;
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45006_3578)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #FF9500)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45006_3578">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#fff9e6] content-stretch flex gap-[4px] h-[20px] items-center left-[931px] px-[9px] py-px rounded-[4px] top-[18.56px] w-[123px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffe08a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon19 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#ff9500] text-[10px] uppercase whitespace-nowrap">Requires Config</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1134px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container58 />
        <button className="absolute bg-[#d1d5db] content-stretch cursor-pointer flex h-[24px] items-center justify-end left-[1074px] pr-[23px] rounded-[16777200px] top-[16px] w-[44px]" data-name="Button">
          <Text26 />
        </button>
        <Container61 />
      </div>
    </div>
  );
}

function Lh5() {
  return (
    <div className="bg-[#f9fafb] h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Lh">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
        <Container57 />
      </div>
    </div>
  );
}

function CC() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.297px]" data-name="cC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] not-italic text-[#364153] text-[14px] text-center top-[0.5px] whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <button className="bg-white cursor-pointer h-[40px] relative rounded-[8px] shrink-0 w-[88.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <CC />
      </div>
    </button>
  );
}

function CC1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.047px]" data-name="cC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[25px] not-italic text-[14px] text-center text-white top-[0.5px] whitespace-pre">{`Update            `}</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#1447e6] h-[40px] relative rounded-[8px] shrink-0 w-[89.047px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <CC1 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-[1136px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end relative w-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Application Check (config required)">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container4 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="No config checks">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container8 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="No config checks">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container12 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="No config checks">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container16 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="No config checks">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container20 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="No config checks">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container24 />
        </div>
      </div>
      <div className="bg-white h-[58px] relative rounded-[8px] shrink-0 w-[1136px]" data-name="Device Geolocation (config required)">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-px relative size-full">
          <Container28 />
        </div>
      </div>
      <Lh />
      <Lh1 />
      <Lh2 />
      <Lh3 />
      <Lh4 />
      <Lh5 />
      <Container62 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative size-full">
      <Container />
      <Container2 />
      <Container3 />
    </div>
  );
}