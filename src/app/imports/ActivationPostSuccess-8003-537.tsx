import svgPaths from "./svg-2if11dchog";

function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p1f337080} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M18 24L22 28L30 20" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-green-100 content-stretch flex items-center justify-center left-[311px] rounded-[3.35544e+07px] size-[80px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-0 top-[96px] w-[702px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-[351.16px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-0 tracking-[0.0703px] translate-x-[-50%] whitespace-pre">Activation Successful!</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[361.59px] top-[2px] w-[177.531px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22.857px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap tracking-[-0.3125px] whitespace-pre">Riverside Dental Office</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.844px] left-[63px] top-[140px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.857px] left-[189.36px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[3px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Zero Trust Connector has been activated for</p>
      <BoldText />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[162.844px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[228.844px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[228.844px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[702px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-[351.22px] not-italic text-[#101828] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%] whitespace-pre">Complete Day 0 Configuration</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[336.42px] not-italic text-[#4a5565] text-[14px] text-center top-0 tracking-[-0.1504px] translate-x-[-50%] w-[632px]">Before you can access the dashboard, you need to configure policies and deploy connectors. This ensures your Zero Trust environment is properly set up and ready to protect your resources.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#0066cc] relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Define Zones and Networks</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Define who can access which resources and under what conditions</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#0066cc] relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Define Policy</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Set up connectors to protect your private applications and resources</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#0066cc] relative rounded-[3.35544e+07px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[24px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">{`Add users `}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Enable real-time monitoring and alerts for your environment</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[40px] items-start relative w-full">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[66px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[12px] h-[66px] items-start pb-px pt-[13px] px-[13px] relative w-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function ActivationPostSuccess() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[230px] items-start relative shrink-0 w-[650px]" data-name="ActivationPostSuccess">
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[208.98px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[425.02px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0066cc] h-[48px] relative rounded-[8px] shrink-0 w-[650px]" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[325.48px] not-italic text-[14px] text-center text-nowrap text-white top-[14px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Start Day 0 Configuration</p>
      <Icon2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph1 />
      <ActivationPostSuccess />
      <Button />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8003_545)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8003_545">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 opacity-50 top-px w-[160.391px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">Configuration Required</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[40px] left-0 top-[24px] w-[636px]" data-name="Paragraph">
      <div className="absolute flex h-[46.66px] items-center justify-center left-[0.42px] top-[-1.26px] w-[630.651px]" style={{ "--transform-inner-width": "630.25", "--transform-inner-height": "40" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.394deg]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic opacity-[0.57] relative text-[#364153] text-[13px] tracking-[-0.1504px] w-[630.264px]">Dashboard access and monitoring features will be available after completing the Day 0 configuration. Your ZTC device will be ready to deploy once setup is complete.</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[64px] left-[32px] top-0 w-[636px]" data-name="Container">
      <BoldText1 />
      <Paragraph8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-amber-50 h-[98px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#fee685] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[98px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[33px] py-[40px] relative w-full">
          <Container12 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[768px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-[768px]">
        <Container2 />
        <Container16 />
      </div>
    </div>
  );
}

export default function ActivationPostSuccess1() {
  return (
    <div className="bg-gray-50 content-stretch flex items-center justify-center relative rounded-[10px] size-full" data-name="ActivationPostSuccess">
      <Container17 />
    </div>
  );
}