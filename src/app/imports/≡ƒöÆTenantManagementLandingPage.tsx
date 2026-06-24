import svgPaths from "./svg-z36xsanrbz";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">\</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">System</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[196.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text />
        <Text1 />
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_47084_2961)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2961">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#364153] text-[14px] text-center top-0 tracking-[-0.1504px] whitespace-nowrap">All Tenants</p>
      </div>
    </div>
  );
}

function TopBar1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.531px]" data-name="TopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <Text5 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#4381d2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <TopBar1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.88%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52523 6.67062">
            <path d={svgPaths.p3f45e600} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52px] pt-[8px] px-[8px] rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Nathan K.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px]">Admin</p>
    </div>
  );
}

function TopBar2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[4px] w-[64.797px]" data-name="TopBar">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[120.8px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#1e3a5f] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[33554400px] size-[32px] top-[6px]" data-name="Primitive.span">
      <Text6 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute h-[44px] left-[104px] rounded-[10px] top-0 w-[144.797px]" data-name="SlotClone">
      <TopBar2 />
      <Icon3 />
      <PrimitiveSpan />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[33554400px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-[4px]" data-name="Button">
      <Icon4 />
      <Text7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[44px] relative shrink-0 w-[248.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
        <SlotClone />
        <Button2 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px pl-[24px] pr-[24.016px] top-0 w-[1558px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

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

function Container7() {
  return (
    <div className="h-[77px] relative shrink-0 w-[574.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[77px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center tracking-[-0.1504px] whitespace-nowrap">All Activation Status</p>
      </div>
    </div>
  );
}

function Icon5() {
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
      <PrimitiveSpan1 />
      <Icon5 />
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

function Icon6() {
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

function Container9() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[302px]" data-name="Container">
      <Input />
      <Icon6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <Container9 />
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

function Icon7() {
  return (
    <div className="absolute left-[68.3px] size-[14px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_47084_2999)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2999">
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
      <Icon7 />
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

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_47084_2983)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2983">
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
        <Icon8 />
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

function Button3() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button3 />
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

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_47084_2983)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2983">
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
        <Icon9 />
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

function Button4() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button4 />
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

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_47084_2859)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2859">
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
        <Icon10 />
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

function Icon11() {
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

function Button5() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[115.67px] rounded-[8px] top-[8.5px] w-[150.141px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[88px] not-italic text-[14px] text-black text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">Continue Setup</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button5 />
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

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_47084_2983)" id="Icon">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_47084_2983">
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
        <Icon12 />
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

function Button6() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[32px] left-[158.69px] rounded-[8px] top-[8.5px] w-[107.125px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[53px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[1164.19px] top-0 w-[273.813px]" data-name="TableCell">
      <Button6 />
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

function TenantManagement() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[59px] top-[96px] w-[1440px]" data-name="TenantManagement">
      <Container6 />
      <Container8 />
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

function Container() {
  return (
    <div className="flex-[1558_0_0] h-[928px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TopBar />
        <TenantManagement />
      </div>
    </div>
  );
}

function RootLayoutContent() {
  return (
    <div className="bg-[#f9fafb] h-[928px] relative shrink-0 w-full" data-name="RootLayoutContent">
      <div className="content-stretch flex items-start pl-[60px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[928px] items-start left-0 top-0 w-[1639px]" data-name="Body">
      <RootLayoutContent />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[28%_20%_28%_23.33%]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p9f48b00} fill="var(--fill-0, #FF5D00)" fillRule="evenodd" id="Fill 10" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[50px] relative shrink-0 w-[60px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Logo1 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[50px] relative shrink-0 w-[60px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Union">
            <path d={svgPaths.p26816980} fill="var(--fill-0, #C4D1E5)" id="Vector" />
            <path d={svgPaths.p25948f70} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
            <path d={svgPaths.p146d2980} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
            <path d={svgPaths.p25c19371} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function PrimaryNav1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav1 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[11.5px] size-[24px] top-0" data-name="Button">
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[47_0_0] h-[24px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[52px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="bg-[#001b50] h-[52px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Union() {
  return (
    <div className="absolute inset-[0_0.53%_1.92%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6902 25.0096">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p15a77000} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33cf2700} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union />
      </div>
    </div>
  );
}

function PrimaryNav2() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav2 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[25.5px] items-center justify-center left-[9.08px] top-0 w-[28.844px]" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[47_0_0] h-[25.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button8 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[53.5px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="bg-[#001b50] h-[53.5px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Union1() {
  return (
    <div className="absolute inset-[0_0.69%_0.64%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5974 27.635">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p1da1ab00} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2635200} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p14d3f100} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union1 />
      </div>
    </div>
  );
}

function PrimaryNav3() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[27.813px] relative shrink-0 w-[28.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav3 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex h-[27.813px] items-center justify-center left-[9.09px] top-0 w-[28.797px]" data-name="Button">
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[47_0_0] h-[27.813px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button9 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[55.813px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="bg-[#001b50] h-[55.813px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#ff5d00] h-[26px] left-[5px] rounded-br-[6px] rounded-tr-[6px] top-[16px] w-[3px]" data-name="Container" />;
}

function CybageNavIcons1() {
  return (
    <div className="absolute contents inset-[7.09%_6.86%_5.41%_5.64%]" data-name="cybage nav icons">
      <div className="absolute inset-[7.09%_6.86%_5.41%_5.64%]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 26.25">
          <path d={svgPaths.p327ae200} fill="var(--fill-0, #D2DFF2)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <CybageNavIcons1 />
    </div>
  );
}

function CybageNavIcons() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start left-0 top-0 w-[28px]" data-name="CybageNavIcons">
      <Icon17 />
    </div>
  );
}

function PrimaryNav4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[28px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <CybageNavIcons />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-0 top-0 w-[28px]" data-name="Container">
      <PrimaryNav4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[4.08px] top-[9px] w-[19.844px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#ff5d00] text-[10px] text-center whitespace-nowrap">ZTP</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[30px] left-[9.5px] top-0 w-[28px]" data-name="Button">
      <Container23 />
      <Paragraph1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[30px] left-[8px] top-[14px] w-[47px]" data-name="Container">
      <Button10 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[58px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function NavigationTabItem3() {
  return (
    <div className="bg-[#001b50] h-[58px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Union2() {
  return (
    <div className="absolute inset-[0_2.52%_0.87%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5933 22.5994">
        <g id="Union">
          <path d={svgPaths.p2991bac0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p24efeb00} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p219e80} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
          <path d={svgPaths.p2ab04400} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p32d5d300} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
          <path d={svgPaths.p1728f000} fill="var(--fill-0, #C4D1E5)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union2 />
      </div>
    </div>
  );
}

function PrimaryNav5() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[22.797px] relative shrink-0 w-[27.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav5 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex h-[22.797px] items-center justify-center left-[9.86px] top-0 w-[27.281px]" data-name="Button">
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[47_0_0] h-[22.797px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[50.797px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="bg-[#001b50] h-[50.797px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute inset-[0_0.87%_3.08%_0]" data-name="Subtract">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5984 24.4127">
        <g id="Subtract">
          <path d={svgPaths.p2b457e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p19913000} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Subtract />
      </div>
    </div>
  );
}

function PrimaryNav6() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[22.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav6 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex h-[25.188px] items-center justify-center left-[12.09px] top-0 w-[22.797px]" data-name="Button">
      <Container29 />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[47_0_0] h-[25.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button12 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[53.188px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="bg-[#001b50] h-[53.188px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Union3() {
  return (
    <div className="absolute inset-[0_0.71%_1.46%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5164 28.1461">
        <g id="Union">
          <path d={svgPaths.p31c15b00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p892bb00} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pe219500} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p2969a100} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p2bb30e71} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union3 />
      </div>
    </div>
  );
}

function PrimaryNav7() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[28.563px] relative shrink-0 w-[32.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav7 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex h-[28.563px] items-center justify-center left-[7.13px] top-0 w-[32.75px]" data-name="Button">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[47_0_0] h-[28.563px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[56.563px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="bg-[#001b50] h-[56.563px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Union4() {
  return (
    <div className="absolute inset-[0_1.72%_0.41%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0086 24.7898">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p18940800} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1ced2900} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p3b25fa00} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
          <path d={svgPaths.p170b0c00} fill="var(--fill-0, #C4D1E5)" id="Vector_4" />
          <path d={svgPaths.p20d42780} fill="var(--fill-0, #C4D1E5)" id="Vector_5" />
          <path d={svgPaths.p121c9700} fill="var(--fill-0, #C4D1E5)" id="Vector_6" />
          <path d={svgPaths.p3f693300} fill="var(--fill-0, #C4D1E5)" id="Vector_7" />
          <path d={svgPaths.p3c8fc180} fill="var(--fill-0, #C4D1E5)" id="Vector_8" />
          <path d={svgPaths.p33c7d00} fill="var(--fill-0, #C4D1E5)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union4 />
      </div>
    </div>
  );
}

function PrimaryNav8() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24.891px] relative shrink-0 w-[28.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav8 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex h-[24.891px] items-center justify-center left-[9.25px] top-0 w-[28.5px]" data-name="Button">
      <Container35 />
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[47_0_0] h-[24.891px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button14 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[52.891px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function NavigationTabItem7() {
  return (
    <div className="bg-[#001b50] h-[52.891px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Union5() {
  return (
    <div className="absolute inset-[0_2.88%_1.11%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1669 28.3542">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p21d34600} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p3a6f3d80} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
          <path d={svgPaths.p208f6580} fill="var(--fill-0, #C4D1E5)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union5 />
      </div>
    </div>
  );
}

function PrimaryNav9() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[28.672px] relative shrink-0 w-[31.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav9 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex h-[28.672px] items-center justify-center left-[7.97px] top-0 w-[31.063px]" data-name="Button">
      <Container38 />
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[47_0_0] h-[28.672px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[56.672px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function NavigationTabItem8() {
  return (
    <div className="bg-[#001b50] h-[56.672px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Union6() {
  return (
    <div className="absolute inset-[0_0.68%_3.08%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6002 24.4117">
        <g id="Union">
          <path d={svgPaths.p23693100} fill="var(--fill-0, #C4D1E5)" id="Vector" />
          <path d={svgPaths.p36c0d180} fill="var(--fill-0, #C4D1E5)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union6 />
      </div>
    </div>
  );
}

function PrimaryNav10() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[25.188px] relative shrink-0 w-[28.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav10 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex h-[25.188px] items-center justify-center left-[9.09px] top-0 w-[28.797px]" data-name="Button">
      <Container41 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[47_0_0] h-[25.188px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button16 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[53.188px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container40 />
      </div>
    </div>
  );
}

function NavigationTabItem9() {
  return (
    <div className="bg-[#001b50] h-[53.188px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Union7() {
  return (
    <div className="absolute inset-[0_2.5%_0.8%_0]" data-name="Union">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4081 30.5055">
        <g id="Union">
          <path clipRule="evenodd" d={svgPaths.p3a020700} fill="var(--fill-0, #D4E3F9)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p38abf200} fill="var(--fill-0, #D4E3F9)" id="Vector_2" />
          <path d={svgPaths.p27ffaf00} fill="var(--fill-0, #D4E3F9)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Union7 />
      </div>
    </div>
  );
}

function PrimaryNav11() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="PrimaryNav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[30.75px] relative shrink-0 w-[31.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <PrimaryNav11 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex h-[30.75px] items-center justify-center left-[7.91px] top-0 w-[31.188px]" data-name="Button">
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[47_0_0] h-[30.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button17 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[58.75px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8px] pr-[5px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function NavigationTabItem10() {
  return (
    <div className="bg-[#001b50] h-[58.75px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1272_0_0] min-h-px min-w-px relative w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[inherit] size-full">
        <NavigationTabItem />
        <NavigationTabItem1 />
        <NavigationTabItem2 />
        <NavigationTabItem3 />
        <NavigationTabItem4 />
        <NavigationTabItem5 />
        <NavigationTabItem6 />
        <NavigationTabItem7 />
        <NavigationTabItem8 />
        <NavigationTabItem9 />
        <NavigationTabItem10 />
      </div>
    </div>
  );
}

function PrimaryNav() {
  return (
    <div className="absolute bg-[#001b50] content-stretch flex flex-col h-[928px] items-center left-0 top-0 w-[60px]" data-name="PrimaryNav">
      <Logo />
      <Container10 />
    </div>
  );
}

export default function TenantManagementLandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="🔒Tenant Management Landing Page">
      <Body />
      <PrimaryNav />
    </div>
  );
}