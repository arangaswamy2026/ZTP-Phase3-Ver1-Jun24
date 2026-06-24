function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[850px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-1px] whitespace-nowrap">Device Trust</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[850px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 whitespace-nowrap">{`Select the minimum trust level required. If a device's trust factors are not satisfied, consequences shown on each card applies.`}</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">High Trust Level</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[0.48px] top-[0.11px] w-[319px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 w-[297.153px]">Only devices with a high trust score are allowed.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[94px] items-start pl-[18px] pr-[2px] py-[18px] relative rounded-[8px] shrink-0 w-[417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container2 />
      <Paragraph1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">Medium Trust Level</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-[0.48px] top-[0.11px] w-[319px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 whitespace-nowrap">Devices with medium trust scores are allowed.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[94px] items-start pl-[18px] pr-[2px] py-[18px] relative rounded-[8px] shrink-0 w-[417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container3 />
      <Paragraph3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">Low Trust Level</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[0.48px] top-[0.11px] w-[319px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 w-[297.153px]">Devices with low trust scores are allowed.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[381px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[94px] items-start pl-[18px] pr-[2px] py-[18px] relative rounded-[8px] shrink-0 w-[417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container4 />
      <Paragraph5 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.469px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[15px] whitespace-nowrap">Ignore Trust Level</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[18px] left-[0.48px] top-[0.11px] w-[319px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#6a7282] text-[13px] top-0 w-[332.516px]">All trust levels allowed.</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[94px] items-start pl-[18px] pr-[2px] py-[18px] relative rounded-[8px] shrink-0 w-[417px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container5 />
      <Paragraph7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[850px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[17px] items-start relative w-full">
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[332px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] py-[20px] relative size-full">
        <Heading />
        <Paragraph />
        <Frame2 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}