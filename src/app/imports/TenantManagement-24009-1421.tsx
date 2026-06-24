import svgPaths from "./svg-za5q3f3ibn";

function Heading() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[45px] left-0 not-italic text-[#101828] text-[30px] top-px tracking-[0.3955px]">Tenant Management</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px]">Monitor activation status and ZTP provisioning across all your managed tenants</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[77px] relative shrink-0 w-[574.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#06c] h-[36px] relative rounded-[8px] shrink-0 w-[130.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[14px] text-center text-white top-[8px] tracking-[-0.1504px]">Add Tenant</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[77px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Button />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[64.547px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px]">All Stages</p>
      </div>
    </div>
  );
}

function Icon1() {
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
    <div className="bg-[#f3f3f5] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-[322px] top-0 w-[224px]" data-name="Container">
      <PrimitiveButton />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[302px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Search tenants...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[302px]" data-name="Container">
      <Input />
      <Icon2 />
    </div>
  );
}

function TenantManagement1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1406px]" data-name="TenantManagement">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[70px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[17px] pr-px py-[17px] relative size-full">
        <TenantManagement1 />
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[269.969px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[9.75px] tracking-[-0.1504px]">Tenant Name</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[269.97px] top-0 w-[182.594px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[9.75px] tracking-[-0.1504px]">Status</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[452.56px] top-0 w-[107.797px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[54.3px] not-italic text-[#0a0a0a] text-[14px] text-center top-[9.75px] tracking-[-0.1504px]">Licenses</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[560.36px] top-0 w-[134.563px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[67.47px] not-italic text-[#0a0a0a] text-[14px] text-center top-[9.75px] tracking-[-0.1504px]">Connectors</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[694.92px] top-0 w-[96.969px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[48.61px] not-italic text-[#0a0a0a] text-[14px] text-center top-[9.75px] tracking-[-0.1504px]">Policies</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[791.89px] top-0 w-[78.922px]" data-name="TableHead">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[39.8px] not-italic text-[#0a0a0a] text-[14px] text-center top-[9.75px] tracking-[-0.1504px]">Users</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[870.81px] top-0 w-[169.422px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[9.75px] tracking-[-0.1504px]">Activation Date</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[9.75px] tracking-[-0.1504px]">Last Activity</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableHead">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[234.13px] not-italic text-[#0a0a0a] text-[14px] text-right top-[9.75px] tracking-[-0.1504px]">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[40px] left-0 top-0 w-[1438px]" data-name="TableRow">
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1438px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">StartupHub Co</p>
      </div>
    </div>
  );
}

function TenantManagement2() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb95e00} id="Vector" stroke="var(--stroke-0, #A8A8A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 14.6667V8" id="Vector_2" stroke="var(--stroke-0, #A8A8A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p62bd0c0} id="Vector_3" stroke="var(--stroke-0, #A8A8A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5 2.84666L11 6.27999" id="Vector_4" stroke="var(--stroke-0, #A8A8A8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-white h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon3 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#a8a8a8] text-[12px]">Not Activated</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[53.97px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">15</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.23px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.44px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.41px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26265d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fd66140} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6f94800} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pcbc4a80} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e8e8e8] h-[32px] left-[83.42px] rounded-[8px] top-[8.5px] w-[150.297px]" data-name="Button">
      <Icon4 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[89.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[6px] tracking-[-0.1504px]">Start Activation</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[245px] w-[1438px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[129.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">Global Services LLC</p>
      </div>
    </div>
  );
}

function TenantManagement3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text1 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24009_1458)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #C10007)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #C10007)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24009_1458">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#fcdce5] h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon5 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#c10007] text-[12px]">Error</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.05px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">100</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.23px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.44px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.41px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2024-11-03</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[rgba(209,213,220,0)] border-solid h-[32px] left-[125.72px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px]">View Details</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[147px] w-[1438px]" data-name="TableRow">
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">Cloud Innovations</p>
      </div>
    </div>
  );
}

function TenantManagement4() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text2 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement4 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24009_1443)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24009_1443">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] mix-blend-luminosity rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon6 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">Pending Setup</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.25px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">30</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.23px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.44px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.41px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2024-10-28</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <rect fill="#E8E8E8" height="16" width="16" />
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#e8e8e8] h-[32px] left-[146.83px] rounded-[8px] top-[8.5px] w-[86.891px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53.5px] not-italic text-[14px] text-black text-center top-[6px] tracking-[-0.1504px]">Setup</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button3 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[98px] w-[1438px]" data-name="TableRow">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">TechStart Inc</p>
      </div>
    </div>
  );
}

function TenantManagement5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text3 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #8200DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[22px] left-[8px] mix-blend-luminosity rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon8 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px]">Awaiting Device</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[53.98px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">25</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.23px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.72px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">5</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.78px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">1</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2024-11-01</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">—</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border border-[rgba(209,213,220,0)] border-solid h-[32px] left-[125.72px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px]">View Details</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button4 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[196px] w-[1438px]" data-name="TableRow">
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">Acme Corporation</p>
      </div>
    </div>
  );
}

function TenantManagement6() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text4 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement6 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24009_1435)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24009_1435">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-white h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon9 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px]">Operational</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.31px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">50</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.45px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">3</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[49px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.66px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">12</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[49px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.58px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">6</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[49px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2024-10-15</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[49px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2 hours ago</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white border border-[rgba(209,213,220,0)] border-solid h-[32px] left-[126.59px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px]">View Details</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[49px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button5 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-0 w-[1438px]" data-name="TableRow">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[129.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[-0.1504px]">Enterprise Solutions</p>
      </div>
    </div>
  );
}

function TenantManagement7() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[18px] top-[8.5px] w-[253.969px]" data-name="TenantManagement">
      <Text5 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[269.969px]" data-name="TableCell">
      <TenantManagement7 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24009_1435)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #008236)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24009_1435">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-white h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit]">
        <Icon10 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px]">Operational</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[48.5px] left-[269.97px] top-0 w-[182.594px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[48.5px] left-[452.56px] top-0 w-[107.797px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.3px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">75</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[48.5px] left-[560.36px] top-0 w-[134.563px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[67.52px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">5</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[48.5px] left-[694.92px] top-0 w-[96.969px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[48.58px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">25</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[48.5px] left-[791.89px] top-0 w-[78.922px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[39.58px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px]">9</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[48.5px] left-[870.81px] top-0 w-[169.422px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">2024-09-20</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[48.5px] left-[1040.23px] top-0 w-[156.047px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px]">5 minutes ago</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white border border-[rgba(209,213,220,0)] border-solid h-[32px] left-[126.59px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px]">View Details</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[48.5px] left-[1196.28px] top-0 w-[241.719px]" data-name="TableCell">
      <Button6 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[48.5px] left-0 top-[49px] w-[1438px]" data-name="TableRow">
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[293.5px] left-0 top-[40px] w-[1438px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Table() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1438px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[335.5px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Table />
    </div>
  );
}

export default function TenantManagement() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="TenantManagement">
      <Container />
      <Card />
      <Card1 />
    </div>
  );
}