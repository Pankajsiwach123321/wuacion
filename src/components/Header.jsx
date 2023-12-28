import React from "react";
import WuaoNavbar from "./WuaoNavbar";
import MainHeader from "./MainHeader";
import OurProject from "./OurProject";

const Header = () => {
  return (
    <div>
      <header className=" lg:bg-[url(./assets/image/headerimg.webp)] bg-no-repeat bg-100% h-full  ">
        <div className=" bg-ffb-orange  lg:bg-ffb-unset">
          <WuaoNavbar />
          <MainHeader />
        </div>
        <OurProject />
      </header>
    </div>
  );
};

export default Header;
