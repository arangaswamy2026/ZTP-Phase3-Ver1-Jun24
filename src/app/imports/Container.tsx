import svgPaths from "./svg-deaxz0tuqe";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p5e65600} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-blue-50 content-stretch flex items-center justify-center left-[319.5px] rounded-[3.35544e+07px] size-[64px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-[0.5px] top-[80px] w-[702px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[351.67px] not-italic text-[#101828] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">{`Review & Activate`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[0.5px] top-[112px] w-[702px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[351.36px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Review the license and tenant details before activating</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[132px] left-[31.5px] top-[32px] w-[703px]" data-name="Container">
      <Container />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pfb16970} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13754d00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p281e4940} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 6H14" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 10H14" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14H14" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 18H14" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[192.297px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[0.5496px] uppercase whitespace-pre">Activating for Tenant</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-0 top-[24px] w-[192.297px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-0 tracking-[-0.4395px] whitespace-pre">Riverside Dental Office</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-gray-200 h-[20px] left-0 rounded-[4px] top-[56px] w-[73.797px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[3px] whitespace-pre">tenant-1</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[76px] relative shrink-0 w-[192.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[76px] relative w-[192.297px]">
        <Paragraph1 />
        <Heading1 />
        <Text />
      </div>
    </div>
  );
}

function ActivationReviewConfirm() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[660px]" data-name="ActivationReviewConfirm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-full items-start relative w-[660px]">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(249,250,251,0.5)] place-self-stretch relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[21px] pr-px py-[21px] relative size-full">
          <ActivationReviewConfirm />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-px tracking-[-0.4395px] whitespace-pre">ZTC Enterprise Edition</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[135px]">SKU: ZTC-ENT-1000</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[55px] relative shrink-0 w-[192.969px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[55px] items-start relative w-[192.969px]">
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1f023100} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 11L12 14L22 4" id="Vector_2" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ActivationReviewConfirm1() {
  return (
    <div className="h-[55px] relative shrink-0 w-[650px]" data-name="ActivationReviewConfirm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[55px] items-start justify-between relative w-[650px]">
        <Container4 />
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">License Capacity</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b6ee540} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">20 Users</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Expiration</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon4 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">10/29/2026</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function ActivationReviewConfirm2() {
  return (
    <div className="h-[109px] relative shrink-0 w-[650px]" data-name="ActivationReviewConfirm">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(190,219,255,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[109px] pb-0 pt-[17px] px-0 relative w-[650px]">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:2_/_1] bg-[rgba(239,246,255,0.3)] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start pl-[26px] pr-[2px] py-[26px] relative w-full">
          <ActivationReviewConfirm1 />
          <ActivationReviewConfirm2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px]">Activation Key</p>
    </div>
  );
}

function Code() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Code">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap tracking-[0.35px] whitespace-pre">ABCD-1234-EFGH-5678</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[166.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9px] h-[44px] items-start relative w-[166.797px]">
        <Paragraph7 />
        <Code />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white h-[22px] relative rounded-[8px] shrink-0 w-[62.688px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[62.688px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Verified</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:3_/_1] bg-gray-50 content-stretch flex h-[78px] items-center justify-between px-[17px] py-px relative rounded-[10px] shrink-0 w-[702px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container7 />
      <Badge />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_118fr)_minmax(0px,_224fr)_minmax(0px,_1fr)] h-[496px] left-[31.5px] top-[196px] w-[702px]" data-name="Container">
      <Card />
      <Card1 />
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-center px-[17px] py-[9px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-neutral-950 text-nowrap tracking-[-0.1504px] whitespace-pre">Back</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#0066cc] grow h-[44px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.3125px] whitespace-pre">{`Confirm & Activate`}</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-start left-[32px] top-[781px] w-[702px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Container11() {
  return (
    <div className="bg-white border border-gray-200 border-solid relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <Container1 />
      <Container9 />
      <Container10 />
    </div>
  );
}