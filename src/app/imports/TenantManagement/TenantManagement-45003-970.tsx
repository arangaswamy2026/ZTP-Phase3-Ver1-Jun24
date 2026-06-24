import svgPaths from "./svg-vat1h4r9hl";

function Heading() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[45px] left-0 not-italic text-[#101828] text-[30px] top-px whitespace-nowrap">Tenant Management</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] whitespace-nowrap">Monitor activation status across all your managed tenants</p>
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

function Container() {
  return (
    <div className="content-stretch flex h-[77px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">All Activation Status</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[318px] px-[13px] py-px rounded-[10px] top-0 w-[224px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <PrimitiveSpan />
      <Icon />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[10px] top-0 w-[302px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Search tenants...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <Container3 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[240.172px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[18px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Tenant Name</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[240.17px] top-0 w-[233.375px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">ACTIVATION STATUS</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[473.55px] top-0 w-[122.219px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.02px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Licenses</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[595.77px] top-0 w-[109.938px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[29.59px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Policies</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[68.3px] size-[14px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_45003_2611)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_45003_2611">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[705.7px] top-0 w-[89.469px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[25.58px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Users</p>
      <Icon2 />
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[955.17px] top-0 w-[192.094px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Activation Date</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Activation Date</p>
      <div className="absolute flex items-center justify-center left-[116.83px] size-[16px] top-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex gap-[10px] items-start overflow-clip relative" data-name="Table / Arrow / Unit">
            <div className="relative shrink-0 size-[16px]" data-name="arrow-left">
              <div className="absolute bottom-[12.5%] flex items-center justify-center left-[29.17%] right-1/4 top-[12.5%]">
                <div className="flex-none h-[7.333px] rotate-90 w-[12px]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.33333">
                      <path d="M6 0L12 7.33333H0L6 0Z" fill="var(--fill-0, #68696B)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[1147.27px] top-0 w-[176.922px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Last Activity</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableHead">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[216.22px] not-italic text-[#6a7282] text-[11px] top-[13.75px] tracking-[0.5px] uppercase whitespace-nowrap">Actions</p>
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
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[40px] left-0 rounded-tl-[14px] rounded-tr-[14px] top-0 w-[1438px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[240.172px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[18px] not-italic text-[#0a0a0a] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">Acme Corporation</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45003_2727)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45003_2727">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#d1fae5] h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon3 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[240.17px] top-0 w-[233.375px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[473.55px] top-0 w-[122.219px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[60.63px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[595.77px] top-0 w-[109.938px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[55.14px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">8</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[705.7px] top-0 w-[89.469px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.84px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">6</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-[955.17px] top-0 w-[192.094px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">14 Oct 2026</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[1147.27px] top-0 w-[176.922px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">2 hrs ago</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-0 w-[1438px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[240.172px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[18px] not-italic text-[#0a0a0a] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">Enterprise Solutions</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45003_2727)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45003_2727">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#d1fae5] h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon4 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[240.17px] top-0 w-[233.375px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-[473.55px] top-0 w-[122.219px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[60.63px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[595.77px] top-0 w-[109.938px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.56px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">10</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[705.7px] top-0 w-[89.469px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.84px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">9</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[955.17px] top-0 w-[192.094px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">19 Sep 2026</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[1147.27px] top-0 w-[176.922px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">5 mins ago</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[49px] w-[1438px]" data-name="TableRow">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[240.172px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[18px] not-italic text-[#0a0a0a] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">Cloud Innovations</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45003_2717)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45003_2717">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TenantManagement1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[84.297px]" data-name="TenantManagement">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">Pending Setup</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#dbeafe] h-[22px] left-[8px] rounded-[8px] top-[13.5px] w-[118.297px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[9px] py-px relative rounded-[inherit] size-full">
        <Icon5 />
        <TenantManagement1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[240.17px] top-0 w-[233.375px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[473.55px] top-0 w-[122.219px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[60.63px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[595.77px] top-0 w-[109.938px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.92px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-[705.7px] top-0 w-[89.469px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.69px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[955.17px] top-0 w-[192.094px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">27 Oct 2026</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[1147.27px] top-0 w-[176.922px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2338cf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[115.67px] rounded-[8px] top-[8.5px] w-[150.141px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[88px] not-italic text-[14px] text-black text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">Continue Setup</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button2 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[98px] w-[1438px]" data-name="TableRow">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[240.172px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[18px] not-italic text-[#0a0a0a] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">Global Services LLC</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_45003_2727)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_45003_2727">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#d1fae5] h-[22px] left-[8px] rounded-[8px] top-[13.5px]" data-name="Badge">
      <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip px-[9px] py-px relative rounded-[inherit]">
        <Icon7 />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#065f46] text-[12px] whitespace-nowrap">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-[240.17px] top-0 w-[233.375px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[473.55px] top-0 w-[122.219px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[60.63px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">20</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[595.77px] top-0 w-[109.938px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[54.92px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[705.7px] top-0 w-[89.469px]" data-name="TableCell">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[44.69px] not-italic text-[#0a0a0a] text-[14px] text-center top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[955.17px] top-0 w-[192.094px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">2 Nov 2026</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-[1147.27px] top-0 w-[176.922px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#4a5565] text-[14px] top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">—</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid h-[49px] left-0 top-[147px] w-[1438px]" data-name="TableRow">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[244.5px] left-0 top-[40px] w-[1438px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
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

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[236.5px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Table />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#191c25] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Showing 1-5 of 10 records | 10 per page
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="arrow-down">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="arrow-down">
            <path d={svgPaths.p29764480} fill="var(--fill-0, #191C25)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function TenantManagement() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="TenantManagement">
      <Container />
      <Container2 />
      <Card />
      <div className="relative shrink-0 w-full" data-name="Table / Pagination">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[10px] py-[8px] relative w-full">
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}