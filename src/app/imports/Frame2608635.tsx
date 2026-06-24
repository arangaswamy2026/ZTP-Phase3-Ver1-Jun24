import svgPaths from "./svg-pl7aiooof6";

function LeftText() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Left text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#030404] text-[20px] text-nowrap whitespace-pre">Invite Users</p>
    </div>
  );
}

function SectionHeaders() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-between px-0 py-[8px] relative shrink-0 w-full" data-name="Section Headers">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LeftText />
    </div>
  );
}

function Prompt() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0" data-name="Prompt">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#1e2828] text-[16px] w-full">User Name</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#585858] text-[14px] w-full">Users first and last name</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inputs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#202124] text-[14px] text-nowrap whitespace-pre">Breanna Chou</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function FramedInputs() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Framed Inputs">
      <Inputs />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative self-stretch shrink-0" data-name="Input">
      <FramedInputs />
    </div>
  );
}

function Inputs1() {
  return (
    <div className="content-stretch flex gap-[100px] items-start overflow-clip relative shrink-0 w-full" data-name="Inputs">
      <Prompt />
      <Input />
    </div>
  );
}

function FormItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form Items">
      <Inputs1 />
    </div>
  );
}

function Prompt1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0" data-name="Prompt">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#2f3243] text-[16px] w-full">User Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5d6882] text-[14px] w-full">Valid email address</p>
    </div>
  );
}

function Inputs2() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Inputs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#202124] text-[14px] text-nowrap whitespace-pre">bchou@sonicwall.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function FramedInputs1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Framed Inputs">
      <Inputs2 />
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative self-stretch shrink-0" data-name="Input">
      <FramedInputs1 />
    </div>
  );
}

function Inputs3() {
  return (
    <div className="content-stretch flex gap-[100px] items-start overflow-clip relative shrink-0 w-full" data-name="Inputs">
      <Prompt1 />
      <Input1 />
    </div>
  );
}

function FormItems1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form Items">
      <Inputs3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <FormItems />
      <FormItems1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#0087f7] content-stretch flex h-[32px] items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Add User</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Buttons />
    </div>
  );
}

function TableHeadings() {
  return (
    <div className="bg-neutral-50 h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[12px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#7a849d] text-[12px] uppercase">Email</p>
        </div>
      </div>
    </div>
  );
}

function CardTableBodyText() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#2f3243] text-[12px]"> </p>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <TableHeadings />
      <CardTableBodyText />
    </div>
  );
}

function TableHeadings1() {
  return (
    <div className="bg-neutral-50 h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-0 pr-[20px] py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#7a849d] text-[12px] uppercase">Name</p>
        </div>
      </div>
    </div>
  );
}

function CardTableBodyText1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-0 pr-[20px] py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#aaaaaa] text-[12px] text-center">No users</p>
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
    <div className="bg-neutral-50 h-[36px] relative shrink-0 w-full" data-name="TABLE HEADINGS">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-0 pr-[20px] py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#7a849d] text-[12px] uppercase">Temporary Password</p>
        </div>
      </div>
    </div>
  );
}

function CardTableBodyText2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Card Table Body Text">
      <div aria-hidden="true" className="absolute border-[#e2e8f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-0 pr-[20px] py-0 relative size-full">
          <p className="basis-0 font-['Red_Hat_Display:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#2f3243] text-[12px]"> </p>
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

function DomainTable() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Domain Table">
      <Column />
      <Column1 />
      <Column2 />
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

function BadgeIcon() {
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

function BadgeIcon1() {
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

function BadgeIcon2() {
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

function BadgeIcon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Badge Icon">
      <Icons3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[8px] relative shrink-0" data-name="Pagination">
      <BadgeIcon />
      <BadgeIcon1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Page 1 of 1</p>
      </div>
      <BadgeIcon2 />
      <BadgeIcon3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Footer">
      <Pagination />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <DomainTable />
      <Footer />
    </div>
  );
}

function Tables() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Tables">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1e2828] text-[16px] w-[360px]">User List</p>
      <Table />
    </div>
  );
}

function GeneralInfo() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="General Info">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <SectionHeaders />
          <Frame1 />
          <Frame2 />
          <Tables />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-[12px] shadow-[0px_4px_4.2px_0px_rgba(155,155,155,0.1)] size-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
          <GeneralInfo />
        </div>
      </div>
    </div>
  );
}