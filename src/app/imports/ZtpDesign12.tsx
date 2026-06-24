import svgPaths from "./svg-9namepjc15";

function Logo() {
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

function Icon() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Logo />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 top-0 w-[60px]" data-name="Logo">
      <Icon />
    </div>
  );
}

function Union() {
  return (
    <div className="absolute contents inset-0" data-name="Union">
      <div className="absolute bottom-0 left-0 right-[55%] top-[55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p28b65070} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[55%] right-0 top-[55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p301c4280} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[55%] left-0 right-[55%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p146d2980} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[55%] left-[55%] right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p37260100} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] size-[24px] top-[14px]" data-name="Sidebar">
      <Icon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[50px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[38px] w-[57.297px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Home</p>
    </div>
  );
}

function NavigationTabItem() {
  return (
    <div className="absolute bg-[#001b50] h-[52px] left-0 top-0 w-[60px]" data-name="NavigationTabItem">
      <Sidebar />
      <Container />
    </div>
  );
}

function Union1() {
  return (
    <div className="absolute bottom-[1.92%] contents left-0 right-[0.53%] top-0" data-name="Union">
      <div className="absolute inset-[48.36%_0.53%_1.92%_56.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path clipRule="evenodd" d={svgPaths.pa5bc730} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.92%] left-0 right-[17.24%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
          <path clipRule="evenodd" d={svgPaths.p27677940} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[25.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union1 />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.5px] items-start left-[15.58px] top-[14px] w-[28.844px]" data-name="Sidebar">
      <Icon2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[52.42px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[39.5px] w-[66.891px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Firewall</p>
    </div>
  );
}

function NavigationTabItem1() {
  return (
    <div className="absolute bg-[#001b50] h-[53.5px] left-0 top-[53px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar1 />
      <Container1 />
    </div>
  );
}

function Union2() {
  return (
    <div className="absolute bottom-[0.64%] contents left-0 right-[0.69%] top-0" data-name="Union">
      <div className="absolute inset-[53.19%_0.69%_0.64%_56.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path clipRule="evenodd" d={svgPaths.p12774080} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.7%] left-0 right-[32.24%] top-[50.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 10">
          <path d={svgPaths.p1726e600} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[58.25%] left-[22.83%] right-[36.78%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p31df8700} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[27.813px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union2 />
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.813px] items-start left-[15.59px] top-[14px] w-[28.797px]" data-name="Sidebar">
      <Icon3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[52.39px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[41.81px] w-[48.625px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">VPN</p>
    </div>
  );
}

function NavigationTabItem2() {
  return (
    <div className="absolute bg-[#001b50] h-[55.813px] left-0 top-[107.5px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar2 />
      <Container2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 30">
        <path clipRule="evenodd" d={svgPaths.p2bbc6200} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" id="Subtract" />
      </svg>
    </div>
  );
}

function Sidebar3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-start left-[4px] top-[4px] w-[28px]" data-name="Sidebar">
      <Icon4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[8.08px] top-[13px] w-[19.844px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#001b50] text-[10px] text-center text-nowrap whitespace-pre">ZTP</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#ff5d00] h-[38px] left-0 rounded-[10px] top-0 w-[36px]" data-name="Container">
      <Sidebar3 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[44px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[38px] w-[82.359px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Zero Trust</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[38px] left-[12px] top-[14px] w-[36px]" data-name="Button">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#ff5d00] h-[26px] left-0 top-[20px] w-[3px]" data-name="Container" />;
}

function NavigationTabItem3() {
  return (
    <div className="absolute bg-[#001b50] h-[66px] left-0 top-[164.31px] w-[60px]" data-name="NavigationTabItem">
      <Button />
      <Container5 />
    </div>
  );
}

function Union3() {
  return (
    <div className="absolute bottom-[0.87%] contents left-0 right-[2.52%] top-0" data-name="Union">
      <div className="absolute bottom-[0.87%] left-0 right-[47.64%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 23">
          <path d={svgPaths.p384c1500} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_31.62%_4.49%_46.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path d={svgPaths.p2872eb80} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.04%_5.9%_4.49%_72.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <path d={svgPaths.p286a6800} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.95%_5.91%_32.58%_51.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
          <path d={svgPaths.p3b0c7440} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.77%_2.52%_58.91%_41.77%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <path d={svgPaths.p27131f00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.86%_5.91%_60.67%_63.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
          <path d={svgPaths.p2c38fb0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[22.797px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union3 />
    </div>
  );
}

function Sidebar4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[22.797px] items-start left-[16.36px] top-[14px] w-[27.281px]" data-name="Sidebar">
      <Icon5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[51.64px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[36.8px] w-[57.094px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Cloud</p>
    </div>
  );
}

function NavigationTabItem4() {
  return (
    <div className="absolute bg-[#001b50] h-[50.797px] left-0 top-[231.31px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar4 />
      <Container6 />
    </div>
  );
}

function Subtract() {
  return (
    <div className="absolute bottom-[3.08%] contents left-0 right-[0.87%] top-0" data-name="Subtract">
      <div className="absolute inset-[41.56%_0.87%_3.08%_29.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path d={svgPaths.p3d824cc0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[43.36%] left-0 right-[0.87%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 15">
          <path d={svgPaths.p106ec300} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[25.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Subtract />
    </div>
  );
}

function Sidebar5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.188px] items-start left-[18.59px] top-[14px] w-[22.797px]" data-name="Sidebar">
      <Icon6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[49.39px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[39.19px] w-[72.172px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Wireless</p>
    </div>
  );
}

function NavigationTabItem5() {
  return (
    <div className="absolute bg-[#001b50] h-[53.188px] left-0 top-[283.11px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar5 />
      <Container7 />
    </div>
  );
}

function Union4() {
  return (
    <div className="absolute bottom-[1.46%] contents left-0 right-[0.71%] top-0" data-name="Union">
      <div className="absolute inset-[92.34%_49.09%_1.46%_14.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 2">
          <path d={svgPaths.pe217280} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[16.98%] left-0 right-[34.55%] top-[33.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
          <path d={svgPaths.p215a1a00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.23%_12.73%_37.66%_69.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
          <path clipRule="evenodd" d={svgPaths.p712080} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.17%_7.65%_76.39%_64.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 4">
          <path d={svgPaths.p20cf1dc0} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[84.98%] left-[57.08%] right-[0.71%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 5">
          <path d={svgPaths.p4c66b00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[28.563px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union4 />
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.563px] items-start left-[13.63px] top-[14px] w-[32.75px]" data-name="Sidebar">
      <Icon7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[54.38px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[42.56px] w-[104.219px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Email Security</p>
    </div>
  );
}

function NavigationTabItem6() {
  return (
    <div className="absolute bg-[#001b50] h-[56.563px] left-0 top-[337.3px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar6 />
      <Container8 />
    </div>
  );
}

function Union5() {
  return (
    <div className="absolute bottom-[0.41%] contents left-0 right-[1.72%] top-0" data-name="Union">
      <div className="absolute inset-[56.4%_1.72%_0.41%_61.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path clipRule="evenodd" d={svgPaths.p1c5600} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.5%_43.1%_10.06%_20.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <path d={svgPaths.p1610c900} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[35.2%] left-0 right-[84.02%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 17">
          <path d={svgPaths.p25b2e640} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_74.76%_44.8%_12.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 12">
          <path d={svgPaths.p1e134c40} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[20.33%_41.45%_46.76%_38.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
          <path d={svgPaths.p25f97e00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[9.6%_15.17%_48.4%_72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
          <path d={svgPaths.p3afd9000} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[48.4%] left-[81.27%] right-[2.76%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 13">
          <path d={svgPaths.p7f4b080} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_65.48%_54.4%_24.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p224a6800} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.2%_27.58%_54.4%_62.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path d={svgPaths.p3b6800} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24.891px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union5 />
    </div>
  );
}

function Sidebar7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24.891px] items-start left-[15.75px] top-[14px] w-[28.5px]" data-name="Sidebar">
      <Icon8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[52.25px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[38.89px] w-[74.266px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Endpoint</p>
    </div>
  );
}

function NavigationTabItem7() {
  return (
    <div className="absolute bg-[#001b50] h-[52.891px] left-0 top-[394.86px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar7 />
      <Container9 />
    </div>
  );
}

function Union6() {
  return (
    <div className="absolute bottom-[1.11%] contents left-0 right-[2.88%] top-0" data-name="Union">
      <div className="absolute inset-[50.11%_2.88%_1.11%_48.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path clipRule="evenodd" d={svgPaths.p8389280} fill="var(--fill-0, #C4D1E5)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[19.57%] left-0 right-[40.51%] top-[49.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 9">
          <path d={svgPaths.pf80ce00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[59.68%] left-[20.69%] right-[42.71%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.pb3f4140} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[28.672px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union6 />
    </div>
  );
}

function Sidebar8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28.672px] items-start left-[14.47px] top-[14px] w-[31.063px]" data-name="Sidebar">
      <Icon9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[53.53px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[42.67px] w-[61.953px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Switch</p>
    </div>
  );
}

function NavigationTabItem8() {
  return (
    <div className="absolute bg-[#001b50] h-[56.672px] left-0 top-[448.75px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar8 />
      <Container10 />
    </div>
  );
}

function Union7() {
  return (
    <div className="absolute bottom-[3.08%] contents left-0 right-[0.68%] top-0" data-name="Union">
      <div className="absolute bottom-[3.08%] left-0 right-[31.72%] top-[41.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
          <path d={svgPaths.p2cb7df00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[27.31%] left-[5.1%] right-[0.68%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 19">
          <path d={svgPaths.p37a4dc00} fill="var(--fill-0, #C4D1E5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[25.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union7 />
    </div>
  );
}

function Sidebar9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[25.188px] items-start left-[15.59px] top-[14px] w-[28.797px]" data-name="Sidebar">
      <Icon10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[52.39px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[39.19px] w-[75.594px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Analytics</p>
    </div>
  );
}

function NavigationTabItem9() {
  return (
    <div className="absolute bg-[#001b50] h-[53.188px] left-0 top-[506.42px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar9 />
      <Container11 />
    </div>
  );
}

function Union8() {
  return (
    <div className="absolute bottom-[0.8%] contents left-0 right-[2.5%] top-0" data-name="Union">
      <div className="absolute bottom-[0.8%] left-0 right-[14.68%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 31">
          <path clipRule="evenodd" d={svgPaths.p3a020700} fill="var(--fill-0, #D4E3F9)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_91.86%_28.72%_0.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
          <path d={svgPaths.p1ecf9000} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.74%_2.5%_28.72%_89.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
          <path d={svgPaths.p7293800} fill="var(--fill-0, #D4E3F9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[30.75px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Union8 />
    </div>
  );
}

function Sidebar10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.75px] items-start left-[14.41px] top-[14px] w-[31.188px]" data-name="Sidebar">
      <Icon11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[28px] items-start left-[53.59px] opacity-0 px-[12px] py-[6px] rounded-[4px] top-[44.75px] w-[86.375px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">MSP Portal</p>
    </div>
  );
}

function NavigationTabItem10() {
  return (
    <div className="absolute bg-[#001b50] h-[58.75px] left-0 top-[560.61px] w-[60px]" data-name="NavigationTabItem">
      <Sidebar10 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[1272px] left-0 top-[50px] w-[60px]" data-name="Container">
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

function Sidebar11() {
  return (
    <div className="bg-[#001b50] h-[1322px] relative shrink-0 w-[60px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[1322px] relative w-[60px]">
        <Logo1 />
        <Container13 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[0.0508px] uppercase whitespace-pre">ZTP</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[63px] relative shrink-0 w-[191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[63px] items-start pb-px pt-[16px] px-[16px] relative w-[191px]">
        <Heading1 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pa912b80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[52.359px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Activate</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[36px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon12 />
          <Text />
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
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[70.438px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[36px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon13 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3baa1080} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[40px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] w-[85px]">Tenant Management</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-0 relative w-full">
          <Icon14 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
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

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[49.391px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Policies</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[36px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon15 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6005_652)" id="Icon">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6005_652">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[48.078px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Activity</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[36px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon16 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
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

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[50.453px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Reports</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[36px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[36px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <Icon17 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[40px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] w-[88px]">Device Configuration</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] h-[56px] items-center px-[12px] py-0 relative w-full">
          <Icon18 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[191px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-full items-start overflow-clip pb-0 pt-[12px] px-[12px] relative rounded-[inherit] w-[191px]">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Sidebar12() {
  return (
    <div className="bg-[#f8f9fa] h-[1322px] relative shrink-0 w-[192px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[1322px] items-start pl-0 pr-px py-0 relative w-[192px]">
        <Container14 />
        <Navigation />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[38.25px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0066cc] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[4.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[4.125px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">\</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0066cc] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[47.844px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">System</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[196.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[20px] items-center relative w-[196.781px]">
        <Text7 />
        <Text8 />
        <Text9 />
        <Text8 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6005_591)" id="Icon">
          <path d={svgPaths.p294e8e80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3dd52f00} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d792300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6005_591">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[35px] not-italic text-[#364153] text-[14px] text-center text-nowrap top-0 tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">All tenants</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.109px]" data-name="TopBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[20px] items-center relative w-[94.109px]">
        <Icon19 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon20() {
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

function Button8() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[576px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-[576px]">
        <TopBar />
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p147ca400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.15%_37.83%_45.83%_37.87%]" data-name="Vector">
        <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p218e7780} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[52px] pb-0 pt-[8px] px-[8px] rounded-[10px] size-[36px] top-[2px]" data-name="Button">
      <Icon21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[48px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 bg-[#1e3a5f] grow h-[32px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">NK</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] overflow-clip rounded-[3.35544e+07px] size-[32px] top-[4px]" data-name="Primitive.span">
      <Text12 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[40px] left-[104px] rounded-[10px] top-0 w-[72px]" data-name="Button">
      <Icon22 />
      <PrimitiveSpan />
    </div>
  );
}

function Icon23() {
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

function Text13() {
  return <div className="absolute bg-[#ff6900] left-[24px] rounded-[3.35544e+07px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button11() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-[2px]" data-name="Button">
      <Icon23 />
      <Text13 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-[176px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[40px] relative w-[176px]">
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function TopBar1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px pt-0 px-[24px] top-0 w-[1227px]" data-name="TopBar">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container15 />
      <Button8 />
      <Container16 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[265.563px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-start relative w-[265.563px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] text-nowrap tracking-[0.3955px] whitespace-pre">Day-0 Configuration</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14020580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28fb3b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4448ef0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#0066cc] h-[32px] relative rounded-[8px] shrink-0 w-[92.234px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[92.234px]">
        <Icon24 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[59px] not-italic text-[14px] text-center text-nowrap text-white top-[6px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Wizard</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[125.406px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[125.406px]">
        <Icon25 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[76px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[6px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Single Page</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 2.66667H14" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 6H14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 10H14" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 13.3333H14" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[117.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[117.844px]">
        <Icon26 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[72px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[6px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Setup Hub</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[32px] items-center pl-0 pr-px py-0 relative w-full">
        <Button12 />
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[69.375px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[70px]">Step 1 of 6</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">{`Zones & Network`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[22px] relative shrink-0 w-[194.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[22px] items-center relative w-[194.891px]">
        <Text14 />
        <Badge />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[16px] left-[136px] top-0 w-[45px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 w-[24px]">17%</p>
    </div>
  );
}

function Container19() {
  return <div className="bg-[#030213] h-[6px] shrink-0 w-full" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="absolute bg-[rgba(3,2,19,0.2)] content-stretch flex flex-col h-[6px] items-start left-0 overflow-clip pr-[106.667px] py-0 rounded-[3.35544e+07px] top-[5px] w-[128px]" data-name="Primitive.div">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[181px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[16px] relative w-[181px]">
        <Text15 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[32px] relative shrink-0 w-[776.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-[32px] items-center relative w-[776.375px]">
        <Container17 />
        <Container18 />
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container21 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Complete the initial setup to configure your Zero Trust Connector</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Paragraph1 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[66.67%_8.33%_8.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p39924700} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_66.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p39924700} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_37.5%_66.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p39924700} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 4">
            <path d={svgPaths.p684e200} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 3.33333V0.666667" id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex flex-col items-start left-[14px] pb-0 pt-[6px] px-[6px] rounded-[4px] size-[28px] top-[14px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[50px] w-[147.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">{`Zones & Network`}</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="[grid-area:1_/_1] bg-blue-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#0066cc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container24 />
      <Paragraph2 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
            <path d={svgPaths.p8326c00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex flex-col items-start left-[14px] pb-0 pt-[6px] px-[6px] rounded-[4px] size-[28px] top-[14px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[50px] w-[147.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Security Policies</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="[grid-area:1_/_2] bg-white opacity-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container25 />
      <Paragraph3 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
            <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 7">
            <path d={svgPaths.p39a2ea10} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6">
            <path d={svgPaths.p234883c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gray-100 relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-[28px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[66.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[66.844px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Optional</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Badge1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">{`Identity & SSO`}</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="[grid-area:1_/_3] bg-white opacity-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2px] pt-[14px] px-[14px] relative size-full">
          <Container27 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
            <path d={svgPaths.p36e96300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gray-100 relative rounded-[4px] shrink-0 size-[28px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-[28px]">
        <Icon30 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[22px] relative rounded-[8px] shrink-0 w-[66.844px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[66.844px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Optional</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Badge2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Advanced Options</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="[grid-area:1_/_4] bg-white opacity-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[2px] pt-[14px] px-[14px] relative size-full">
          <Container29 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
            <path d={svgPaths.p32640e00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-10%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
            <path d="M0.666667 7.33333V0.666667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-5.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5">
            <path d={svgPaths.p290cb600} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-19.42%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
            <path d={svgPaths.p683da00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex flex-col items-start left-[14px] pb-0 pt-[6px] px-[6px] rounded-[4px] size-[28px] top-[14px]" data-name="Container">
      <Icon31 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[50px] w-[147.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Bundle Assignment</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="[grid-area:1_/_5] bg-white opacity-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container30 />
      <Paragraph6 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[66.61%_66.59%_10.42%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-18.14%_-18.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p3b9cc70} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.33%_37.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p3f795100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[54.17%] top-[31.33%]" data-name="Vector">
        <div className="absolute inset-[-22.32%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p27584d40} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-1/2 right-[31.33%] top-[54.17%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-22.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
            <path d={svgPaths.p193d4a00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex flex-col items-start left-[14px] pb-0 pt-[6px] px-[6px] rounded-[4px] size-[28px] top-[14px]" data-name="Container">
      <Icon32 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[14px] top-[50px] w-[147.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Validation</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="[grid-area:1_/_6] bg-white opacity-50 place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container31 />
      <Paragraph7 />
    </div>
  );
}

function Day0Setup() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1113px]" data-name="Day0Setup">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[12px] grid grid-cols-[repeat(6,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-full relative w-[1113px]">
        <Button15 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[134px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[134px] items-start pl-[25px] pr-px py-[25px] relative w-full">
          <Day0Setup />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">{`Zone & Network Configuration`}</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Configure network zones, subnet allocation, and DHCP settings for your Zero Trust Connector</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph8 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6005_537)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333V10" id="Vector_2" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 6.66667H10.0083" id="Vector_3" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_6005_537">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Automatic Configuration</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Use recommended default settings for all zones</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[44px] relative shrink-0 w-[340.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[340.563px]">
        <Icon33 />
        <Container33 />
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="bg-white relative rounded-[3.35544e+07px] shrink-0 size-[16px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-[16px]" />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#030213] h-[18.391px] relative rounded-[3.35544e+07px] shrink-0 w-[32px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[18.391px] items-center pl-[15px] pr-px py-px relative w-[32px]">
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function ZoneConfiguration() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1129px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1129px]">
        <Container34 />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[86px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#0066cc] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[86px] items-start pb-px pl-[17px] pr-px pt-[17px] relative w-full">
          <ZoneConfiguration />
        </div>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6005_531)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6005_531">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ZoneConfiguration1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[98.766px]" data-name="ZoneConfiguration">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Default Route:</p>
    </div>
  );
}

function AlertDescription() {
  return (
    <div className="absolute h-[44px] left-[45px] top-[13px] w-[1101px]" data-name="AlertDescription">
      <ZoneConfiguration1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[24px] tracking-[-0.1504px] whitespace-pre">All zones will route to WAN by default. Advanced routing can be configured in the next step.</p>
    </div>
  );
}

function Alert() {
  return (
    <div className="bg-white h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon34 />
      <AlertDescription />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-blue-100 relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon35 />
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Employee</p>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Trusted employee devices and workstations</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <CardTitle />
        <CardDescription />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[44px] relative shrink-0 w-[330.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[330.406px]">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">10.0.1.0/24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[128.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[32px] items-center relative w-[128.313px]">
        <Badge3 />
        <Button21 />
      </div>
    </div>
  );
}

function ZoneConfiguration2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1111px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1111px]">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[90px] items-start pb-[2px] pl-[26px] pr-[2px] pt-[26px] relative w-full">
          <ZoneConfiguration2 />
        </div>
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[16.67%] left-1/2 right-[49.96%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_8.33%_63.25%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-26.18%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 5">
            <path d={svgPaths.pebb6950} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_20.83%_46.42%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-34.98%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 5">
            <path d={svgPaths.p2240240} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_35.42%_31.55%_35.42%]" data-name="Vector">
        <div className="absolute inset-[-69.96%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 3">
            <path d={svgPaths.pbc80040} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-green-100 relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon37 />
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Guest</p>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Visitor and guest network access</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <CardTitle1 />
        <CardDescription1 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[44px] relative shrink-0 w-[261.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[261.688px]">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">10.0.2.0/24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon38 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[32px] relative shrink-0 w-[130.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[32px] items-center relative w-[130.344px]">
        <Badge4 />
        <Button22 />
      </div>
    </div>
  );
}

function ZoneConfiguration3() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1111px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1111px]">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[90px] items-start pb-[2px] pl-[26px] pr-[2px] pt-[26px] relative w-full">
          <ZoneConfiguration3 />
        </div>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[83.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_29.17%_8.33%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_83.33%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[8.33%] right-[83.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_83.33%_70.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[83.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_29.17%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.833333 0.833333H2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_70.83%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_70.83%_83.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.833333 0.833333V2.5" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p2756d800} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.paa8f200} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-purple-100 relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon39 />
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">IoT</p>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Internet of Things devices and sensors</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <CardTitle2 />
        <CardDescription2 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[44px] relative shrink-0 w-[298.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[298.313px]">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">10.0.3.0/24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon40 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[32px] relative shrink-0 w-[130.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[32px] items-center relative w-[130.203px]">
        <Badge5 />
        <Button23 />
      </div>
    </div>
  );
}

function ZoneConfiguration4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1111px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1111px]">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[90px] items-start pb-[2px] pl-[26px] pr-[2px] pt-[26px] relative w-full">
          <ZoneConfiguration4 />
        </div>
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
            <path d={svgPaths.pac6c580} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
            <path d="M0.833333 0.833333H17.5" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#ffedd4] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon41 />
      </div>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">PoS</p>
    </div>
  );
}

function CardDescription3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Point of Sale systems and payment terminals</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <CardTitle3 />
        <CardDescription3 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[44px] relative shrink-0 w-[337.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[337.016px]">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">10.0.4.0/24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon42 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[32px] relative shrink-0 w-[130.563px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[32px] items-center relative w-[130.563px]">
        <Badge6 />
        <Button24 />
      </div>
    </div>
  );
}

function ZoneConfiguration5() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1111px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1111px]">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[90px] items-start pb-[2px] pl-[26px] pr-[2px] pt-[26px] relative w-full">
          <ZoneConfiguration5 />
        </div>
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 10">
            <path d={svgPaths.p12149d80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[62.5%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
            <path d={svgPaths.p30ab3100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
            <path d={svgPaths.p27407800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-gray-100 relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon43 />
      </div>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="CardTitle">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">Shared</p>
    </div>
  );
}

function CardDescription4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CardDescription">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Shared resources (printers, NAS, common resources)</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[44px] items-start relative w-full">
        <CardTitle4 />
        <CardDescription4 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[44px] relative shrink-0 w-[392.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[44px] items-center relative w-[392.813px]">
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[22px] items-center justify-center px-[9px] py-[3px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">10.0.5.0/24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[32px] items-center justify-center relative w-[36px]">
        <Icon44 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[32px] relative shrink-0 w-[130.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-[32px] items-center relative w-[130.078px]">
        <Badge7 />
        <Button25 />
      </div>
    </div>
  );
}

function ZoneConfiguration6() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1111px]" data-name="ZoneConfiguration">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[44px] items-center justify-between relative w-[1111px]">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[90px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[90px] items-start pb-[2px] pl-[26px] pr-[2px] pt-[26px] relative w-full">
          <ZoneConfiguration6 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[514px] items-start relative shrink-0 w-full" data-name="Container">
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[#0066cc] h-[36px] relative rounded-[8px] shrink-0 w-[221.438px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[221.438px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Continue to Security Policies</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#fb2c36] h-[36px] relative rounded-[8px] shrink-0 w-[77.359px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[77.359px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[52px] items-center justify-between pl-[432.094px] pr-[0.016px] py-0 relative w-full">
          <Button26 />
          <Button27 />
        </div>
      </div>
    </div>
  );
}

function ZoneConfiguration7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[882px] items-start relative shrink-0 w-full" data-name="ZoneConfiguration">
      <Container32 />
      <Card1 />
      <Alert />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Day0Setup1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1132px] items-start left-[32px] top-[96px] w-[1163px]" data-name="Day0Setup">
      <Container23 />
      <Card />
      <ZoneConfiguration7 />
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow h-[1322px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[1322px] relative w-full">
        <TopBar1 />
        <Day0Setup1 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex h-[1322px] items-start left-0 top-0 w-[1479px]" data-name="App">
      <Sidebar11 />
      <Sidebar12 />
      <Container57 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[18px] left-0 top-[-20000px] w-[7.563px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-neutral-950 text-nowrap top-0 whitespace-pre">0</p>
    </div>
  );
}

export default function ZtpDesign() {
  return (
    <div className="bg-white relative size-full" data-name="ZTP Design 1.2">
      <App />
      <Text16 />
    </div>
  );
}