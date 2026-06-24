import svgPaths from "./svg-jjv856u5sz";

function R() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.664px]" data-name="r9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[16.5px] not-italic text-[#0a0a0a] text-[14px] text-center top-[0.5px] tracking-[-0.3004px] whitespace-nowrap">Filter</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[264px] px-[13px] py-px rounded-[10px] top-0 w-[82.664px]" data-name="SlotClone">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <R />
      <Icon />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[10px] top-0 w-[256px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Search policies...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2b443300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
        <div className="absolute inset-[-23.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.20003 4.20003">
            <path d={svgPaths.p1654eb80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[10px] size-[16px] top-[10px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[256px]" data-name="Container">
      <TextInput />
      <Container2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <SlotClone />
      <Container1 />
    </div>
  );
}