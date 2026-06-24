import svgPaths from "./svg-btwthg5q9h";
import imgBlondWoman32YearOldBlondWomanThatWorksInTech from "figma:asset/8eef0bd768a8c0bc831a14fb8ef9c191796ce82b.png";

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="Left">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#030404] text-[20px]">Choose how to install your Connector</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-neutral-800">This is how you connect your private resources.</p>
    </div>
  );
}

function SectionHeaders() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Section Headers">
      <Left />
    </div>
  );
}

function RadioIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Radio Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Radio Icon">
          <rect height="17" rx="8.5" stroke="var(--stroke-0, #0087F7)" width="17" x="0.5" y="0.5" />
          <circle cx="9" cy="9" fill="var(--fill-0, #0087F7)" id="Ellipse 17" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[#2f3243]" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[16px] text-nowrap whitespace-pre">Firewall</p>
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[12px] w-[233px]">SonicWall Gen7+ Firewall on SonicOS 7.1.2+</p>
    </div>
  );
}

function ItemLong() {
  return (
    <div className="basis-0 bg-[#e6f3fe] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Item Long">
      <div aria-hidden="true" className="absolute border border-[#0087f7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <RadioIcon />
          <Info />
        </div>
      </div>
    </div>
  );
}

function RadioIcon1() {
  return (
    <div className="relative rounded-[9px] shrink-0 size-[18px]" data-name="Radio Icon">
      <div aria-hidden="true" className="absolute border border-[#8e8e8e] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[53px] items-start justify-center leading-[normal] not-italic relative shrink-0" data-name="Info">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#2f3243] text-[16px] text-nowrap whitespace-pre">CSE Infrastructure</p>
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-[#1e2828] text-[12px] w-[233px]">Linux Install, Virtual Machine, Windows Executable</p>
    </div>
  );
}

function ItemLong1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Item Long">
      <div aria-hidden="true" className="absolute border border-[#8e8e8e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative w-full">
          <RadioIcon1 />
          <Info1 />
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Options">
      <ItemLong />
      <ItemLong1 />
    </div>
  );
}

function LeftText() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Left text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#030404] text-[20px] text-nowrap whitespace-pre">Choose a CSE-compatible firewall</p>
    </div>
  );
}

function SectionHeaders1() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between px-0 py-[8px] relative shrink-0 w-full" data-name="Section Headers">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LeftText />
    </div>
  );
}

function Search() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path d={svgPaths.p30519480} id="Icon" stroke="var(--stroke-0, #2F3243)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Search />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Buttons">
      <BadgeIcon />
    </div>
  );
}

function SearchBox() {
  return (
    <div className="content-stretch flex h-full items-start overflow-clip pl-[4px] pr-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[272px]" data-name="Search Box">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19px] not-italic relative shrink-0 text-[#9ca7c2] text-[14px] text-nowrap whitespace-pre">Search</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pl-[4px] pr-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Inputs">
      <div aria-hidden="true" className="absolute border border-[#9ca7c2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Buttons />
      <div className="flex flex-row items-center self-stretch">
        <SearchBox />
      </div>
    </div>
  );
}

function SearchWithFilter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Search with Filter">
      <Inputs />
    </div>
  );
}

function Refresh() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Refresh">
          <path d={svgPaths.p23d3d200} id="Icon" stroke="var(--stroke-0, #2F3243)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[26px]" data-name="Badge Icon">
      <Refresh />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name="Buttons">
      <BadgeIcon1 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0" data-name="Button Group">
      <Buttons1 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Toolbar">
      <SearchWithFilter />
      <ButtonGroup />
    </div>
  );
}

function TableHeadings() {
  return (
    <div className="bg-[#f9f9f9] h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[36px] items-end pl-0 pr-[20px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#7a849d] text-[12px]"> </p>
        </div>
      </div>
    </div>
  );
}

function RadioIcon2() {
  return (
    <div className="relative rounded-[9px] shrink-0 size-[18px]" data-name="Radio Icon">
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function CardTableBodyText() {
  return (
    <div className="bg-white content-stretch flex h-[50px] items-center pl-[12px] pr-[20px] py-0 relative shrink-0 w-[37px]" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <RadioIcon2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[37px]" data-name="Column">
      <TableHeadings />
      <CardTableBodyText />
    </div>
  );
}

function TableHeadings1() {
  return (
    <div className="bg-[#f9f9f9] h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[36px] items-end pl-[12px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#7a849d] text-[12px] uppercase">Firewall</p>
        </div>
      </div>
    </div>
  );
}

function CardTableBodyText1() {
  return (
    <div className="bg-white h-[50px] relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[50px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#2f3243] text-[12px]">Virginia Office TZ 570</p>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <TableHeadings1 />
      <CardTableBodyText1 />
    </div>
  );
}

function TableHeadings2() {
  return (
    <div className="bg-[#f9f9f9] h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[36px] items-end pl-0 pr-[20px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#7a849d] text-[12px] uppercase">serial number</p>
        </div>
      </div>
    </div>
  );
}

function CardTableBodyText2() {
  return (
    <div className="bg-white h-[50px] relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[50px] items-center pl-0 pr-[20px] py-0 relative w-full">
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#2f3243] text-[12px]">0040103D6709</p>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <TableHeadings2 />
      <CardTableBodyText2 />
    </div>
  );
}

function TableHeadings3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex h-[36px] items-end relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#7a849d] text-[12px] uppercase">CSE Network</p>
    </div>
  );
}

function ConnectionStatusContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Connection Status Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19px] not-italic relative shrink-0 text-[#585858] text-[14px] text-nowrap whitespace-pre">Not Connected</p>
    </div>
  );
}

function Inputs1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Inputs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] py-[2px] relative size-full">
          <ConnectionStatusContainer />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0" data-name="Component 2">
      <Inputs1 />
    </div>
  );
}

function Inputs2() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex h-[24px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inputs">
      <Component />
    </div>
  );
}

function CardTableBodyText3() {
  return (
    <div className="bg-white content-stretch flex h-[50px] items-center relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Inputs2 />
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <TableHeadings3 />
      <CardTableBodyText3 />
    </div>
  );
}

function DomainTable() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Domain Table">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p24587680} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons />
    </div>
  );
}

function Icons1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p3f953000} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons1 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p43eff00} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons2 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p103fa940} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Pagination">
      <BadgeIcon2 />
      <BadgeIcon3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Page 1 of 1</p>
      </div>
      <BadgeIcon4 />
      <BadgeIcon5 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-stretch flex items-center justify-end px-0 py-[4px] relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#bcbcbc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Pagination />
    </div>
  );
}

function Tables() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Tables">
      <DomainTable />
      <Pagination1 />
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="lightbulb-02">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 40, 40, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <g id="lightbulb-02">
            <rect fill="var(--fill-0, #1E2828)" height="26" rx="13" width="26" />
            <path d={svgPaths.p174d3d40} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Info">
      <Lightbulb />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[19px] leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-[959px]">
        <span>{`Don’t see your firewall? `}</span>
        <a className="[text-underline-position:from-font] cursor-pointer decoration-solid text-[#0087f7] underline" href="https://www.sonicwall.com/support/knowledge-base/how-to-transfer-products-to-another-tenant/220819063928817">
          <span className="[text-underline-position:from-font] decoration-solid leading-[normal]" href="https://www.sonicwall.com/support/knowledge-base/how-to-transfer-products-to-another-tenant/220819063928817">
            Register or transfer
          </span>
        </a>
        <span>{` your firewall to this tenant in MySonicWall and refresh the table. `}</span>
      </p>
    </div>
  );
}

function ShoutOut() {
  return (
    <div className="bg-neutral-100 relative rounded-[8px] shrink-0 w-full" data-name="Shout-out">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Info2 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Top">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-0 px-[12px] relative w-full">
          <SectionHeaders1 />
          <Toolbar />
          <Tables />
          <ShoutOut />
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_4.2px_0px_rgba(155,155,155,0.1)] shrink-0 w-full" data-name="Right side">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[12px] relative w-full">
          <SectionHeaders />
          <Options />
          <Top />
        </div>
      </div>
    </div>
  );
}

function LeftText1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Left text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#030404] text-[20px] text-nowrap whitespace-pre">Enable your Firewall Connector</p>
    </div>
  );
}

function SectionHeaders2() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between px-0 py-[8px] relative shrink-0 w-full" data-name="Section Headers">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LeftText1 />
    </div>
  );
}

function GuideDescriptionContainer() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[24px] pr-0 py-0 relative shrink-0" data-name="Guide Description Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2f3243] text-[14px] w-[388px]">If yes, follow the guide below; if not, select the Custom/CSE Infrastructure deployment model tab above.</p>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="top">
      <ul className="block font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2f3243] text-[16px] w-[366px]">
        <li className="ms-[24px]">
          <span className="leading-[normal]">Do you have a Gen 7 (or later version) firewall?</span>
        </li>
      </ul>
      <GuideDescriptionContainer />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative self-stretch shrink-0" data-name="Left">
      <Top1 />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2f3243] text-[16px] w-[360px]">
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">How to configure Cloud Secure Edge on a SonicWall firewall.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <ol className="list-decimal">
          <ol className="list-[lower-alpha]" start="1">
            <li className="mb-0 ms-[48px]">
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic">{`Login to your Gen7+ firewall on SonicOS 7.1.2 or later. `}</span>
            </li>
            <li className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] mb-0 ms-[48px] not-italic">
              <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/configuring-cse.htm">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] leading-[normal] not-italic" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/configuring-cse.htm">
                  Enable the CSE Connector
                </span>
              </a>
              .
            </li>
            <li className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] mb-0 ms-[48px] not-italic">
              ​
              <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/configuring-connector.htm">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] leading-[normal] not-italic" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/configuring-connector.htm">
                  Configure your published routes and private domains
                </span>
              </a>
              ​.
            </li>
            <li className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] ms-[48px] not-italic">
              ​
              <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/view-status-connector.htm">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] leading-[normal] not-italic" href="https://www.sonicwall.com/support/technical-documentation/docs/cloud_secure_edge-feature_guide/Content/Configuring-Firewall/view-status-connector.htm">
                  Verify Connector Stat
                </span>
              </a>
              us.
            </li>
          </ol>
        </ol>
      </div>
    </div>
  );
}

function ExampleDescriptionContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Example Description Container">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a6a6a] text-[14px] w-[388px]">- Above is an example of the instructions to your left.</p>
    </div>
  );
}

function Gif() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Gif">
      <div className="aspect-[654/315.212] relative shrink-0 w-full" data-name="msedge_yk6Nad3M8h 1">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[111.52%] left-0 max-w-none top-[-11.5%] w-full" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/e7d120648e9b443519b747d0ca4b3c03e2b50486" />
          </video>
        </div>
      </div>
      <ExampleDescriptionContainer />
    </div>
  );
}

function FieldLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Field Label">
      <Left1 />
      <Gif />
    </div>
  );
}

function AssignmentSettings() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Assignment Settings">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
          <SectionHeaders2 />
          <FieldLabel />
        </div>
      </div>
    </div>
  );
}

function StepForm() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_4.2px_0px_rgba(155,155,155,0.1)] shrink-0 w-full" data-name="step form">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <AssignmentSettings />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[378px] top-[185px] w-[1042px]" data-name="Main Content">
      <RightSide />
      <StepForm />
    </div>
  );
}

function IconMore() {
  return (
    <div className="absolute left-[calc(50%+17.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon - More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - More">
          <path clipRule="evenodd" d={svgPaths.p35109ec0} fill="var(--fill-0, #5F6368)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function RightLockedIcons() {
  return (
    <div className="absolute h-[22px] overflow-clip right-[14px] top-1/2 translate-y-[-50%] w-[51px]" data-name="Right Locked Icons">
      <IconMore />
      <div
        className="absolute left-[calc(50%-14.5px)] size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="blond woman
32 year old blond woman that works in tech"
      >
        <img alt="" className="block max-w-none size-full" height="22" src={imgBlondWoman32YearOldBlondWomanThatWorksInTech} width="22" />
      </div>
    </div>
  );
}

function IconFavorite() {
  return (
    <div className="absolute right-[10px] size-[16px] top-1/2 translate-y-[-50%]" data-name="Icon - Favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - Favorite">
          <path clipRule="evenodd" d={svgPaths.p127de900} fill="var(--fill-0, #5F6368)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function UrlTextContent() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center leading-[0] left-0 text-[14px] text-nowrap top-0 tracking-[0.25px]" data-name="URL Text Content">
      <a className="[white-space-collapse:collapse] flex flex-col justify-center relative shrink-0 text-white" href="http://edge.bnntest.com/" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-[normal] text-nowrap whitespace-pre">http://edge.bnntest.com</p>
      </a>
      <div className="flex flex-col justify-center relative shrink-0 text-[#86888a]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre">/00000</p>
      </div>
    </div>
  );
}

function UrlText() {
  return (
    <div className="absolute h-[16px] left-[33px] top-1/2 translate-y-[-50%] w-[165px]" data-name="URL Text">
      <UrlTextContent />
    </div>
  );
}

function IconSecure() {
  return (
    <div className="absolute left-[11px] size-[12px] top-1/2 translate-y-[-50%]" data-name="Icon - Secure">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon - Secure">
          <path clipRule="evenodd" d={svgPaths.p2503ec80} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function UrlBar() {
  return (
    <div className="absolute h-[28px] left-[134px] overflow-clip right-[81px] top-1/2 translate-y-[-50%]" data-name="URL Bar">
      <div className="absolute bg-[#202124] h-[28px] left-0 right-0 rounded-[14px] top-1/2 translate-y-[-50%]" data-name="URL Fill BG" />
      <IconFavorite />
      <UrlText />
      <IconSecure />
    </div>
  );
}

function IconHome() {
  return (
    <div className="absolute left-[calc(50%+46.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon - Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - Home">
          <path d={svgPaths.pc4d6100} fill="var(--fill-0, white)" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function IconRefresh() {
  return (
    <div className="absolute left-[calc(50%+15.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon - Refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - Refresh">
          <path clipRule="evenodd" d={svgPaths.p6e12800} fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function IconForward() {
  return (
    <div className="absolute left-[calc(50%-15.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon - Forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - Forward">
          <path clipRule="evenodd" d={svgPaths.p245be700} fill="var(--fill-0, #86888A)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function IconBack() {
  return (
    <div className="absolute left-[calc(50%-46.5px)] size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon - Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon - Back">
          <path clipRule="evenodd" d={svgPaths.p18d60780} fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function LeftLockedIcons() {
  return (
    <div className="absolute h-[16px] left-[12px] overflow-clip top-1/2 translate-y-[-50%] w-[109px]" data-name="Left Locked Icons">
      <IconHome />
      <IconRefresh />
      <IconForward />
      <IconBack />
    </div>
  );
}

function ToolbarUrlControls() {
  return (
    <div className="absolute h-[38px] left-0 overflow-clip right-0 top-0" data-name="Toolbar - URL Controls">
      <div className="absolute bg-[#35363a] inset-0" data-name="URL Controls BG">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#dadce0]" />
      </div>
      <RightLockedIcons />
      <UrlBar />
      <LeftLockedIcons />
    </div>
  );
}

function ToolbarUrlControls1() {
  return (
    <div className="absolute h-[38px] left-0 right-0 top-[42px]" data-name="Toolbar - URL Controls">
      <ToolbarUrlControls />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[7px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[9px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p100d2b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p14139500} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconBlack() {
  return (
    <div className="bg-white overflow-clip relative rounded-[2px] shrink-0 size-[15px]" data-name="Icon-Black">
      <Group />
    </div>
  );
}

function IconClose() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon - Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon - Close">
          <path clipRule="evenodd" d={svgPaths.p36a74680} fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
        </g>
      </svg>
    </div>
  );
}

function FaviconTextIcons() {
  return (
    <div className="bg-[#35363a] content-stretch flex gap-[9px] items-center overflow-clip p-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Favicon, Text, & Icons">
      <IconBlack />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">SonicWall CSE</p>
      </div>
      <IconClose />
    </div>
  );
}

function TabContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tab Content">
      <div className="h-[8px] relative shrink-0 w-[6px]" data-name="Curve L">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <path clipRule="evenodd" d={svgPaths.p2ea0ec00} fill="var(--fill-0, #35363A)" fillRule="evenodd" id="Curve L" />
        </svg>
      </div>
      <FaviconTextIcons />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[8px] relative w-[6px]" data-name="Curve R">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
              <path clipRule="evenodd" d={svgPaths.p2ea0ec00} fill="var(--fill-0, #35363A)" fillRule="evenodd" id="Curve R" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon - Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon - Plus">
          <path clipRule="evenodd" d={svgPaths.p2320e500} fill="var(--fill-0, #BDC1C6)" fillRule="evenodd" id="Icon - New Tab" />
        </g>
      </svg>
    </div>
  );
}

function BrowserTab() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[-6px] top-0" data-name="Browser Tab">
      <TabContent />
      <IconPlus />
    </div>
  );
}

function BrowserTabWithPlus() {
  return (
    <div className="absolute h-[34px] left-[8px] top-1/2 translate-y-[-50%] w-[131px]" data-name="Browser Tab / With Plus">
      <BrowserTab />
    </div>
  );
}

function TabPlus() {
  return (
    <div className="absolute h-[34px] left-[72px] top-[calc(50%+4px)] translate-y-[-50%] w-[167px]" data-name="Tab & Plus">
      <BrowserTabWithPlus />
    </div>
  );
}

function BrowserControls() {
  return (
    <div className="absolute h-[12px] left-[13px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[52px]" data-name="Browser Controls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 12">
        <g clipPath="url(#clip0_6003_6506)" id="Browser Controls">
          <circle cx="46" cy="6" fill="var(--fill-0, #27CA40)" id="Option - Expand" r="5.75" stroke="var(--stroke-0, #3EAF3F)" strokeWidth="0.5" />
          <circle cx="26" cy="6" fill="var(--fill-0, #FFC130)" id="Option - Minimize" r="5.75" stroke="var(--stroke-0, #E1A325)" strokeWidth="0.5" />
          <circle cx="6" cy="6" fill="var(--fill-0, #FF6058)" id="Option - Close" r="5.75" stroke="var(--stroke-0, #E14942)" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_6003_6506">
            <rect fill="white" height="12" width="52" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BroswerControlBar() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Broswer Control Bar">
      <div className="absolute bg-[#202124] inset-0 rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Broswer Control Bar BG" />
      <TabPlus />
      <BrowserControls />
    </div>
  );
}

function ToolbarBrowserControls() {
  return (
    <div className="absolute bottom-[47.5%] left-0 right-0 top-0" data-name="Toolbar - Browser Controls">
      <BroswerControlBar />
    </div>
  );
}

function BrowserUrlControls() {
  return (
    <div className="absolute h-[80px] left-0 overflow-clip right-0 top-0" data-name="Browser & URL Controls">
      <ToolbarUrlControls1 />
      <ToolbarBrowserControls />
    </div>
  );
}

function Bullet() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[5px] py-0 relative rounded-[17px] shrink-0 size-[22px]" data-name="Bullet">
      <div aria-hidden="true" className="absolute border border-[#0087f7] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#0087f7] text-[14px] text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Line() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-0 relative size-full">
          <div className="h-full relative shrink-0 w-0">
            <div className="absolute inset-[-2.13%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 49">
                <path d="M1 1V48" id="Vector 2" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center justify-center relative self-stretch shrink-0" data-name="bullet">
      <Bullet />
      <Line />
    </div>
  );
}

function SubTasks() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="sub tasks">
      <div className="flex h-0 items-center justify-center relative shrink-0 w-[9px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "9" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[9px] relative w-0">
            <div className="absolute inset-[-11.11%_-1px]" style={{ "--stroke-0": "rgba(209, 209, 209, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
                <path d="M1 1V10" id="Vector 2" stroke="var(--stroke-0, #D1D1D1)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2828] text-[14px]">Choose how to install your Connector</p>
    </div>
  );
}

function SubTasks1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="sub tasks">
      <div className="flex h-0 items-center justify-center relative shrink-0 w-[9px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "9" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[9px] relative w-0">
            <div className="absolute inset-[-11.11%_-1px]" style={{ "--stroke-0": "rgba(209, 209, 209, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
                <path d="M1 1V10" id="Vector 2" stroke="var(--stroke-0, #D1D1D1)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2828] text-[14px]">Enable your Firewall Connector</p>
    </div>
  );
}

function SectionTask() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="section task">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-full">Configure Network</p>
      <SubTasks />
      <SubTasks1 />
    </div>
  );
}

function TaskGroup() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Task Group">
      <div className="size-full">
        <div className="content-stretch flex gap-[14px] items-start p-[4px] relative w-full">
          <Bullet1 />
          <SectionTask />
        </div>
      </div>
    </div>
  );
}

function Bullet2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[5px] py-0 relative rounded-[17px] shrink-0 size-[22px]" data-name="Bullet">
      <div aria-hidden="true" className="absolute border border-[#a0a0a0] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Line1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-0 relative size-full">
          <div className="h-full relative shrink-0 w-0">
            <div className="absolute inset-[-11.11%_-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
                <path d="M1 1V10" id="Vector 2" stroke="var(--stroke-0, #DDDDDD)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bullet3() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center justify-center relative self-stretch shrink-0" data-name="bullet">
      <Bullet2 />
      <Line1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]">
      <div className="absolute bottom-0 left-[-11.11%] right-[-11.11%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16">
          <g id="Frame 2608657">
            <path d="M10 8L1 8" id="Vector 2" stroke="var(--stroke-0, #D1D1D1)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SubTasks2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="sub tasks">
      <Frame1 />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2828] text-[14px]">Invite First Users</p>
    </div>
  );
}

function SectionTask1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="section task">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-full">Add Users</p>
      <SubTasks2 />
    </div>
  );
}

function TaskGroup1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Task Group">
      <div className="size-full">
        <div className="content-stretch flex gap-[14px] items-start p-[4px] relative w-full">
          <Bullet3 />
          <SectionTask1 />
        </div>
      </div>
    </div>
  );
}

function Bullet4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[5px] py-0 relative rounded-[17px] shrink-0 size-[22px]" data-name="Bullet">
      <div aria-hidden="true" className="absolute border border-[#a0a0a0] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Bullet5() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="bullet">
      <Bullet4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[9px]">
      <div className="absolute bottom-0 left-[-11.11%] right-[-11.11%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16">
          <g id="Frame 2608657">
            <path d="M10 8L1 8" id="Vector 2" stroke="var(--stroke-0, #D1D1D1)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SubTasks3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="sub tasks">
      <Frame2 />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2828] text-[14px]">Download and Install CSE APP on Desktop and Mobile</p>
    </div>
  );
}

function SectionTask2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="section task">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-full">Deploy the Client App</p>
      <SubTasks3 />
    </div>
  );
}

function TaskGroup2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Task Group">
      <div className="size-full">
        <div className="content-stretch flex gap-[14px] items-start p-[4px] relative w-full">
          <Bullet5 />
          <SectionTask2 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] py-0 relative w-full">
          <TaskGroup />
          <TaskGroup1 />
          <TaskGroup2 />
        </div>
      </div>
    </div>
  );
}

function ListOfTasks() {
  return (
    <div className="relative shrink-0 w-full" data-name="List of Tasks">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[12px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-full">Getting started tasks</p>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ListOfTasks />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#bddbfa] content-stretch flex h-[32px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#424242] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Contact Support</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#bcbcbc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[14px] text-nowrap whitespace-pre">Need some help?</p>
          <Buttons2 />
        </div>
      </div>
    </div>
  );
}

function TaskListV() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[982px] items-start justify-between left-0 pb-0 pt-[24px] px-0 top-[80px] w-[358px]" data-name="Task List v3">
      <div aria-hidden="true" className="absolute border-[#bcbcbc] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <Frame />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#bddbfa] content-stretch flex h-[32px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#424242] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Leave Guided Setup</p>
      </div>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex h-[32px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-800 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-[#e3e3e3] content-stretch flex h-[32px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Buttons4 />
      <Buttons5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white left-[358px] top-[1138px] w-[1082px]" data-name="Footer">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[24px] py-[12px] relative rounded-[inherit] w-[1082px]">
        <Buttons3 />
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
    </div>
  );
}

function Back() {
  return <div className="content-stretch flex h-[24px] items-center shrink-0" data-name="Back" />;
}

function IdentifyingInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Identifying info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#030404] text-[24px] text-nowrap whitespace-pre">Configure Network</p>
    </div>
  );
}

function LeftHeaderContent() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Left Header Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[12px] relative size-full">
          <Back />
          <IdentifyingInfo />
        </div>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="User">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-800 text-nowrap text-right">
        <p className="leading-[normal] whitespace-pre">Bg Chou</p>
      </div>
    </div>
  );
}

function Icons4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons">
          <path d="M2.5 5L6.00057 8.206L9.5 5" id="Vector" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[20px]" data-name="Badge Icon">
      <Icons4 />
    </div>
  );
}

function User1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User">
      <User />
      <BadgeIcon6 />
    </div>
  );
}

function PageLevelTab() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-0 py-[4px] relative rounded-[30px] shrink-0" data-name="Page Level Tab">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-800 text-nowrap whitespace-pre">Org Name</p>
    </div>
  );
}

function TopRightTools() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative shrink-0" data-name="Top right tools">
      <User1 />
      <PageLevelTab />
    </div>
  );
}

function Icons5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icons">
          <path d={svgPaths.p18e73f00} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[26px]" data-name="Badge Icon">
      <Icons5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-800 text-nowrap">
        <p className="leading-[normal] whitespace-pre">CSE’s Status</p>
      </div>
      <BadgeIcon7 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons">
          <path d={svgPaths.p3fbf3f80} id="Icon" stroke="var(--stroke-0, #030404)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BadgeIcon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons6 />
    </div>
  );
}

function StatusLabel() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex gap-[4px] items-center pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Status Label">
      <BadgeIcon8 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#030404] text-[14px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Provisioning</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0">
      <Frame6 />
      <StatusLabel />
    </div>
  );
}

function Banner() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shadow-[-6px_4px_7px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Banner">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-between px-[24px] py-[12px] relative size-full">
          <TopRightTools />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Content">
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <LeftHeaderContent />
      </div>
      <div className="basis-0 flex flex-row grow items-end self-stretch shrink-0">
        <Banner />
      </div>
    </div>
  );
}

function HeaderOnboarding() {
  return (
    <div className="absolute bg-white left-[358px] top-[80px] w-[1082px]" data-name="Header Onboarding">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[1082px]">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ConfigureNetworkBeforeFirewallIsConnected() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Configure Network/Before firewall is connected">
      <MainContent />
      <BrowserUrlControls />
      <TaskListV />
      <Footer />
      <HeaderOnboarding />
    </div>
  );
}