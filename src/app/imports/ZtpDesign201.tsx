import svgPaths from "./svg-174fc0elo5";

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px]">Home</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px]">\</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px] tracking-[-0.1504px]">Dashboard</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] tracking-[-0.1504px]">\</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">System</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[196.758px]" data-name="Container">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24033_713)" id="Icon">
          <path d={svgPaths.p294e8e80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3dd52f00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d792300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24033_713">
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
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[36.5px] not-italic text-[#364153] text-[14px] text-center top-[0.5px] tracking-[-0.1504px]">All Tenants</p>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Container">
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
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.87%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52523 6.67062">
            <path d={svgPaths.p218e7780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Nathan K.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px">Admin</p>
    </div>
  );
}

function TopBar2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[48px] top-[4px] w-[64.789px]" data-name="TopBar">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[120.79px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#1e3a5f] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[16777200px] size-[32px] top-[6px]" data-name="Primitive.span">
      <Text6 />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute h-[44px] left-[104px] rounded-[10px] top-0 w-[144.789px]" data-name="SlotClone">
      <TopBar2 />
      <Icon3 />
      <PrimitiveSpan />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31962400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[16777200px] size-[8px] top-[4px]" data-name="Text" />;
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
    <div className="h-[44px] relative shrink-0 w-[248.789px]" data-name="Container">
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
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] top-0 w-[1476px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">Users</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px]">View your configured identity source and user directory</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[64px] relative shrink-0 w-[401.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[98px] not-italic text-[#0a0a0a] text-[14px] text-center top-[8.5px] tracking-[-0.1504px]">Reconfigure IDP</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[164.43px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12824f00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[1308.44px] rounded-[8px] top-[18px] w-[85.563px]" data-name="Button">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[57px] not-italic text-[#0a0a0a] text-[14px] text-center top-[5.5px] tracking-[-0.1504px]">Filter</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[448px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px]">Search users...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[16px] w-[448px]" data-name="Container">
      <Input />
      <Icon7 />
    </div>
  );
}

function IdpManagement1() {
  return (
    <div className="h-[69px] relative shrink-0 w-[1410px]" data-name="IDPManagement">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
        <Container9 />
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[150px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] top-[12.75px] tracking-[0.6px] uppercase">USER</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[150px] top-0 w-[250px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] top-[12.75px] tracking-[0.6px] uppercase">EMAIL</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[400px] top-0 w-[636.992px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] top-[12.75px] tracking-[0.6px] uppercase">ROLES</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] top-[12.75px] tracking-[0.6px] uppercase">DEVICE NAME</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[1230px] top-0 w-[180px]" data-name="TableHead">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[8px] not-italic text-[#6a7282] text-[12px] top-[12.75px] tracking-[0.6px] uppercase">LAST LOGIN</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[40px] left-0 top-0 w-[1410px]" data-name="TableRow">
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1410px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[37.828px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">victor</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">VI</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text8 />
    </div>
  );
}

function IdpManagement2() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container10 />
      <PrimitiveSpan1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement2 />
    </div>
  );
}

function IdpManagement3() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">victor@getbnn.com</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement3 />
    </div>
  );
}

function IdpManagement4() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[390px] whitespace-pre-wrap">Chromebook-ITP, role-device-ownership, auth-role-august</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement4 />
    </div>
  );
}

function IdpManagement5() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Victor-MacBook-Pro</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">8/12/2025, 4:09:42 PM</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-0 w-[1410px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[63.063px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">Vladyslav</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">VL</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text9 />
    </div>
  );
}

function IdpManagement6() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container11 />
      <PrimitiveSpan2 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement6 />
    </div>
  );
}

function IdpManagement7() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">vladyslav@banyansecurity.io</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement7 />
    </div>
  );
}

function IdpManagement8() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[306px] whitespace-pre-wrap">auth-role-mohini-2feb, role-device-ownership</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement8 />
    </div>
  );
}

function IdpManagement9() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Vlad-Windows-PC</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">6/16/2025, 8:03:04 AM</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[49px] w-[1410px]" data-name="TableRow">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[46.508px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">nicolas</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">NI</p>
      </div>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text10 />
    </div>
  );
}

function IdpManagement10() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container12 />
      <PrimitiveSpan3 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement10 />
    </div>
  );
}

function IdpManagement11() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">nicolas@getbnn.com</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement11 />
    </div>
  );
}

function IdpManagement12() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">role-device-ownership, auth-role-august-r...</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement12 />
    </div>
  );
}

function IdpManagement13() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Nicolas-Laptop</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">7/22/2025, 7:14:27 AM</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[98px] w-[1410px]" data-name="TableRow">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[31.195px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">syed</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">SY</p>
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text11 />
    </div>
  );
}

function IdpManagement14() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container13 />
      <PrimitiveSpan4 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement14 />
    </div>
  );
}

function IdpManagement15() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">syed@getbnn.com</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement15 />
    </div>
  );
}

function IdpManagement16() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">role-device-ownership, auth-role-august-r...</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement16 />
    </div>
  );
}

function IdpManagement17() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">-</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement17 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">-</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[147px] w-[1410px]" data-name="TableRow">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[47.625px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">suhaan</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">SU</p>
      </div>
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text12 />
    </div>
  );
}

function IdpManagement18() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container14 />
      <PrimitiveSpan5 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement18 />
    </div>
  );
}

function IdpManagement19() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">suhaan@getbnn.com</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement19 />
    </div>
  );
}

function IdpManagement20() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">role-device-ownership, auth-role-august-r...</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement20 />
    </div>
  );
}

function IdpManagement21() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Suhaan-Desktop</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement21 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">-</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[196px] w-[1410px]" data-name="TableRow">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[30.453px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">rohit</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">RO</p>
      </div>
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text13 />
    </div>
  );
}

function IdpManagement22() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container15 />
      <PrimitiveSpan6 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement22 />
    </div>
  );
}

function IdpManagement23() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">rohit@getbnn.com</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement23 />
    </div>
  );
}

function IdpManagement24() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Chromebook-ITP, role-device-ownership, a...</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement24 />
    </div>
  );
}

function IdpManagement25() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Rohit-Surface</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement25 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">-</p>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[245px] w-[1410px]" data-name="TableRow">
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[61.133px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">vaishnavi</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">VA</p>
      </div>
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text14 />
    </div>
  );
}

function IdpManagement26() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container16 />
      <PrimitiveSpan7 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement26 />
    </div>
  );
}

function IdpManagement27() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">vaishnavi.kawade+group@spryiq.co</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement27 />
    </div>
  );
}

function IdpManagement28() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[319px] whitespace-pre-wrap">auth-role-mohini-2feb, role-device-ownership...</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement28 />
    </div>
  );
}

function IdpManagement29() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Vaishnavi-MacBook-Air</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement29 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">1/14/2025, 12:15:52 AM</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[294px] w-[1410px]" data-name="TableRow">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[49.289px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">Sathish</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">SA</p>
      </div>
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text15 />
    </div>
  );
}

function IdpManagement30() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container17 />
      <PrimitiveSpan8 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement30 />
    </div>
  );
}

function IdpManagement31() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">satkumar@sonicwall.com</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement31 />
    </div>
  );
}

function IdpManagement32() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">auth-role-mohini-2feb, UnAuth-Sathish, r...</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement32 />
    </div>
  );
}

function IdpManagement33() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Sathish-Dell-XPS</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement33 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">10/26/2025, 11:47:31 PM</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[343px] w-[1410px]" data-name="TableRow">
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[49.289px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">Sathish</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">SA</p>
      </div>
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text16 />
    </div>
  );
}

function IdpManagement34() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container18 />
      <PrimitiveSpan9 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement34 />
    </div>
  );
}

function IdpManagement35() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">sathish@getbnn.com</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement35 />
    </div>
  );
}

function IdpManagement36() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">auth-role-mohini-2feb, Chromebook-ITP, ...</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement36 />
    </div>
  );
}

function IdpManagement37() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Sathish-Mobile</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement37 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">12/1/2025, 4:04:06 AM</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[392px] w-[1410px]" data-name="TableRow">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[33.461px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">gauri</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">GA</p>
      </div>
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text17 />
    </div>
  );
}

function IdpManagement38() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container19 />
      <PrimitiveSpan10 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[49px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement38 />
    </div>
  );
}

function IdpManagement39() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">gauri@getbnn.com</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[49px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement39 />
    </div>
  );
}

function IdpManagement40() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Chromebook-ITP, role-device-ownership, c...</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[49px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement40 />
    </div>
  );
}

function IdpManagement41() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Gauri-ThinkPad</p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[49px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement41 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[49px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">7/6/2025, 10:49:23 PM</p>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[#f3f4f6] border-b border-solid h-[49px] left-0 top-[441px] w-[1410px]" data-name="TableRow">
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[6px] w-[24.602px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1f2123] text-[14px] top-[0.5px] tracking-[-0.1504px]">dan</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#dbeafe] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px]">DA</p>
      </div>
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="absolute content-stretch flex items-start left-0 overflow-clip rounded-[16777200px] size-[32px] top-0" data-name="Primitive.span">
      <Text18 />
    </div>
  );
}

function IdpManagement42() {
  return (
    <div className="absolute h-[32px] left-[8px] top-[8.5px] w-[134px]" data-name="IDPManagement">
      <Container20 />
      <PrimitiveSpan11 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[150px]" data-name="TableCell">
      <IdpManagement42 />
    </div>
  );
}

function IdpManagement43() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[234px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">dan@getbnn.com</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[48.5px] left-[150px] top-0 w-[250px]" data-name="TableCell">
      <IdpManagement43 />
    </div>
  );
}

function IdpManagement44() {
  return (
    <div className="absolute h-[20px] left-[8px] overflow-clip top-[14.5px] w-[300px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Chromebook-ITP, role-device-ownership, a...</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[48.5px] left-[400px] top-0 w-[636.992px]" data-name="TableCell">
      <IdpManagement44 />
    </div>
  );
}

function IdpManagement45() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[14.5px] w-[177.008px]" data-name="IDPManagement">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">-</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[48.5px] left-[1036.99px] top-0 w-[193.008px]" data-name="TableCell">
      <IdpManagement45 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[48.5px] left-[1230px] top-0 w-[180px]" data-name="TableCell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] top-[15px] tracking-[-0.1504px]">-</p>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute h-[48.5px] left-0 top-[490px] w-[1410px]" data-name="TableRow">
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[538.5px] left-0 top-[40px] w-[1410px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
    </div>
  );
}

function Table() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1410px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function IdpManagement46() {
  return (
    <div className="bg-[#f9fafb] h-[53px] relative shrink-0 w-[1410px]" data-name="IDPManagement">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[705.3px] not-italic text-[#6a7282] text-[14px] text-center top-[17.5px] tracking-[-0.1504px] w-[158px] whitespace-pre-wrap">Showing 11 of 458 users</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[750.5px] items-start p-px relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <IdpManagement1 />
      <Table />
      <IdpManagement46 />
    </div>
  );
}

function IdpManagement() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[838.5px] items-start left-[32px] top-[96px] w-[1412px]" data-name="IDPManagement">
      <Container6 />
      <Card />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[996px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TopBar />
        <IdpManagement />
      </div>
    </div>
  );
}

function Section() {
  return <div className="h-[996px] shrink-0 w-0" data-name="Section" />;
}

function App() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex h-[996px] items-start left-0 pl-[252px] top-0 w-[1728px]" data-name="App">
      <Container />
      <Section />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[0.0508px] uppercase">ZTP</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[63px] relative shrink-0 w-[191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Dashboard</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon8 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3baa1080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Users</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ff5d00] h-[36px] relative rounded-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon9 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Policies</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon10 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24033_730)" id="Icon">
          <path d={svgPaths.p15f82200} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p375323f0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4H4.00667" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 12H4.00667" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24033_730">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">System Status</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon11 />
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24033_697)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24033_697">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.07px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Activity</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon12 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px]">Reports</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">
          <Icon13 />
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[191px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip pt-[12px] px-[12px] relative rounded-[inherit] size-full">
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function SecondaryNav() {
  return (
    <div className="absolute bg-[#f8f9fa] content-stretch flex flex-col h-[996px] items-start left-[60px] pr-px top-0 w-[192px]" data-name="SecondaryNav">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <Container21 />
      <Navigation />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute contents inset-[28%_20%_28%_23.33%]" data-name="Logo">
      <div className="absolute inset-[28%_20%_28%_23.33%]" data-name="Fill 10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 22">
          <path clipRule="evenodd" d={svgPaths.p9f48b00} fill="var(--fill-0, #FF5D00)" fillRule="evenodd" id="Fill 10" />
        </svg>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Logo1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 top-0 w-[60px]" data-name="Logo">
      <Icon14 />
    </div>
  );
}

function Union() {
  return (
    <div className="absolute contents inset-0" data-name="Union">
      <div className="absolute inset-[55%_55%_0_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p28b65070} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55%_0_0_55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p301c4280} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_55%_55%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p146d2980} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_55%_55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7998 10.7998">
          <path d={svgPaths.p37260100} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union />
    </div>
  );
}

function PrimaryNav1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon15 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] size-[24px] top-[14px]" data-name="Button">
      <PrimaryNav1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[60px]" data-name="Container">
      <Button11 />
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="bg-[#001b50] h-[52px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Union1() {
  return (
    <div className="absolute contents inset-[0_0.53%_1.92%_0]" data-name="Union">
      <div className="absolute inset-[48.36%_0.53%_1.92%_56.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4404 12.6782">
          <path clipRule="evenodd" d={svgPaths.p76dccf0} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_17.24%_16.92%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8707 21.1842">
          <path clipRule="evenodd" d={svgPaths.p27677940} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[25.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union1 />
    </div>
  );
}

function PrimaryNav2() {
  return (
    <div className="content-stretch flex flex-col h-[25.5px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon16 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.5px] items-start left-[15.58px] top-[14px] w-[28.844px]" data-name="Button">
      <PrimaryNav2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[53.5px] left-0 top-0 w-[60px]" data-name="Container">
      <Button12 />
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="bg-[#001b50] h-[53.5px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Union2() {
  return (
    <div className="absolute contents inset-[0_0.69%_0.64%_0]" data-name="Union">
      <div className="absolute inset-[53.19%_0.69%_0.64%_56.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4203 12.8438">
          <path clipRule="evenodd" d={svgPaths.p16a3fbc0} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.78%_32.24%_16.7%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.514 9.04796">
          <path d={svgPaths.p224ac200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_36.78%_58.25%_22.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6308 11.6164">
          <path d={svgPaths.p253582e0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[27.82px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union2 />
    </div>
  );
}

function PrimaryNav3() {
  return (
    <div className="content-stretch flex flex-col h-[27.82px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon17 />
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.82px] items-start left-[15.6px] top-[14px] w-[28.797px]" data-name="Button">
      <PrimaryNav3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[55.82px] left-0 top-0 w-[60px]" data-name="Container">
      <Button13 />
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="bg-[#001b50] h-[55.82px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <path clipRule="evenodd" d={svgPaths.p2bbc6200} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" id="Subtract" />
      </svg>
    </div>
  );
}

function PrimaryNav4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start left-[4px] top-[4px] w-[28px]" data-name="PrimaryNav">
      <Icon18 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8.08px] top-[13px] w-[19.836px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001b50] text-[10px] text-center">ZTP</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#ff5d00] h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <PrimaryNav4 />
      <Paragraph1 />
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38px] items-start left-[12px] top-[14px] w-[36px]" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#ff5d00] h-[26px] left-0 top-[20px] w-[3px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute h-[66px] left-0 top-0 w-[60px]" data-name="Container">
      <Button14 />
      <Container28 />
    </div>
  );
}

function NavigationTabItem3() {
  return (
    <div className="bg-[#001b50] h-[66px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Union3() {
  return (
    <div className="absolute contents inset-[0_2.52%_0.87%_0]" data-name="Union">
      <div className="absolute inset-[0_47.64%_0.87%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2889 22.5995">
          <path d={svgPaths.p11d9a400} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_31.62%_4.49%_46.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.10369 5.12336">
          <path d={svgPaths.p72ef200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_5.9%_4.49%_72.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.84766 5.12336">
          <path d={svgPaths.p382a0880} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.95%_5.91%_32.58%_51.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5307 5.12227">
          <path d={svgPaths.p53f0c00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.77%_2.52%_58.91%_41.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2035 8.96429">
          <path d={svgPaths.p22be6700} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.86%_5.91%_60.67%_63.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39852 5.12331">
          <path d={svgPaths.p11f02f70} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[22.797px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union3 />
    </div>
  );
}

function PrimaryNav5() {
  return (
    <div className="content-stretch flex flex-col h-[22.797px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon19 />
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.797px] items-start left-[16.35px] top-[14px] w-[27.289px]" data-name="Button">
      <PrimaryNav5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[50.797px] left-0 top-0 w-[60px]" data-name="Container">
      <Button15 />
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="bg-[#001b50] h-[50.797px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute contents inset-[0_0.87%_3.08%_0]" data-name="Subtract">
      <div className="absolute inset-[41.56%_0.87%_3.08%_29.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8002 13.9481">
          <path d={svgPaths.p3d495fe0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.87%_43.36%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5985 14.2708">
          <path d={svgPaths.p488e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[25.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Subtract />
    </div>
  );
}

function PrimaryNav6() {
  return (
    <div className="content-stretch flex flex-col h-[25.195px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon20 />
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.195px] items-start left-[18.6px] top-[14px] w-[22.797px]" data-name="Button">
      <PrimaryNav6 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[53.195px] left-0 top-0 w-[60px]" data-name="Container">
      <Button16 />
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="bg-[#001b50] h-[53.195px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Union4() {
  return (
    <div className="absolute contents inset-[0_0.71%_1.46%_0]" data-name="Union">
      <div className="absolute inset-[92.34%_49.09%_1.46%_14.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9119 1.77313">
          <path d={svgPaths.p255db00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.37%_34.55%_16.98%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4411 14.1861">
          <path d={svgPaths.p2cb39d80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.23%_12.73%_37.66%_69.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.95596 9.45741">
          <path clipRule="evenodd" d={svgPaths.pe214380} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.17%_7.65%_76.39%_64.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.27909 3.26919">
          <path d={svgPaths.p143d200} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.71%_84.98%_57.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8265 4.29094">
          <path d={svgPaths.p39c02c00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[28.57px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union4 />
    </div>
  );
}

function PrimaryNav7() {
  return (
    <div className="content-stretch flex flex-col h-[28.57px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon21 />
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.57px] items-start left-[13.62px] top-[14px] w-[32.758px]" data-name="Button">
      <PrimaryNav7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[56.57px] left-0 top-0 w-[60px]" data-name="Container">
      <Button17 />
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="bg-[#001b50] h-[56.57px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Union5() {
  return (
    <div className="absolute contents inset-[0_1.72%_0.41%_0]" data-name="Union">
      <div className="absolute inset-[56.4%_1.72%_0.41%_61.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6126 10.755">
          <path clipRule="evenodd" d={svgPaths.pd905080} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.5%_43.1%_10.06%_20.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2748 8.57441">
          <path d={svgPaths.p85efe00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_84.02%_35.2%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55289 16.1337">
          <path d={svgPaths.p15904b00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_74.76%_44.8%_12.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.65532 11.3531">
          <path d={svgPaths.p25754e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.33%_41.45%_46.76%_38.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66049 8.19511">
          <path d={svgPaths.p7e8ec00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_15.17%_48.4%_72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.6547 10.4571">
          <path d={svgPaths.p2a974180} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_2.76%_48.4%_81.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55212 12.847">
          <path d={svgPaths.p2741b000} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_65.48%_54.4%_24.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7622 6.57266">
          <path d={svgPaths.p9538e80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_27.58%_54.4%_62.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.76238 6.57269">
          <path d={svgPaths.p37abe440} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[24.898px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union5 />
    </div>
  );
}

function PrimaryNav8() {
  return (
    <div className="content-stretch flex flex-col h-[24.898px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon22 />
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24.898px] items-start left-[15.75px] top-[14px] w-[28.5px]" data-name="Button">
      <PrimaryNav8 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[52.898px] left-0 top-0 w-[60px]" data-name="Container">
      <Button18 />
    </div>
  );
}

function NavigationTabItem7() {
  return (
    <div className="bg-[#001b50] h-[52.898px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Union6() {
  return (
    <div className="absolute contents inset-[0_2.88%_1.11%_0]" data-name="Union">
      <div className="absolute inset-[50.11%_2.88%_1.11%_48.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0733 13.9855">
          <path clipRule="evenodd" d={svgPaths.p1d5da00} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.03%_40.51%_19.57%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4843 9.00337">
          <path d={svgPaths.p3382de80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_42.71%_59.68%_20.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3736 11.5591">
          <path d={svgPaths.p3d065400} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[28.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union6 />
    </div>
  );
}

function PrimaryNav9() {
  return (
    <div className="content-stretch flex flex-col h-[28.672px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon23 />
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.672px] items-start left-[14.46px] top-[14px] w-[31.07px]" data-name="Button">
      <PrimaryNav9 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[56.672px] left-0 top-0 w-[60px]" data-name="Container">
      <Button19 />
    </div>
  );
}

function NavigationTabItem8() {
  return (
    <div className="bg-[#001b50] h-[56.672px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Union7() {
  return (
    <div className="absolute contents inset-[0_0.68%_3.08%_0]" data-name="Union">
      <div className="absolute inset-[41.49%_31.72%_3.08%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6613 13.9657">
          <path d={svgPaths.p19dd800} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0.68%_27.31%_5.1%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1328 18.3154">
          <path d={svgPaths.p5d32a00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[25.195px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union7 />
    </div>
  );
}

function PrimaryNav10() {
  return (
    <div className="content-stretch flex flex-col h-[25.195px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon24 />
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.195px] items-start left-[15.6px] top-[14px] w-[28.797px]" data-name="Button">
      <PrimaryNav10 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[53.195px] left-0 top-0 w-[60px]" data-name="Container">
      <Button20 />
    </div>
  );
}

function NavigationTabItem9() {
  return (
    <div className="bg-[#001b50] h-[53.195px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Union8() {
  return (
    <div className="absolute contents inset-[0_2.5%_0.8%_0]" data-name="Union">
      <div className="absolute inset-[0_14.68%_0.8%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6153 30.5055">
          <path clipRule="evenodd" d={svgPaths.p1489a000} fill="var(--fill-0, #D4E3F9)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_91.86%_28.72%_0.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.53424 10.3146">
          <path d={svgPaths.pab21a00} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_2.5%_28.72%_89.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.53423 10.3146">
          <path d={svgPaths.p19560680} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[30.75px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union8 />
    </div>
  );
}

function PrimaryNav11() {
  return (
    <div className="content-stretch flex flex-col h-[30.75px] items-start relative shrink-0 w-full" data-name="PrimaryNav">
      <Icon25 />
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.75px] items-start left-[14.4px] top-[14px] w-[31.195px]" data-name="Button">
      <PrimaryNav11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[58.75px] left-0 top-0 w-[60px]" data-name="Container">
      <Button21 />
    </div>
  );
}

function NavigationTabItem10() {
  return (
    <div className="bg-[#001b50] h-[58.75px] relative shrink-0 w-[60px]" data-name="NavigationTabItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[946px] items-start left-0 overflow-clip top-[50px] w-[60px]" data-name="Container">
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
  );
}

function PrimaryNav() {
  return (
    <div className="absolute bg-[#001b50] h-[996px] left-0 top-0 w-[60px]" data-name="PrimaryNav">
      <Logo />
      <Container22 />
    </div>
  );
}

export default function ZtpDesign() {
  return (
    <div className="bg-white relative size-full" data-name="ZTP Design 2.01">
      <App />
      <SecondaryNav />
      <PrimaryNav />
    </div>
  );
}