import React from "react";
import ComanButn from "./ComanButn";
import shopstall from "../assets/image/shopingstall.webp";
import arrow1 from "../assets/image/arrow1header.png";
import arrowbtn from "../assets/image/arrowbtn.png";
import arrow2 from "../assets/image/lowerarrow2header.png";
import arrow3 from "../assets/image/arrow3header.png";
import bgstall from "../assets/image/bg-stall.png";
const MainHeader = () => {
  return (
    <div className="lg:pt-[260px] py-[50px] relative z-[1]">
      <div className="max-w-[1141px] mx-auto px-3">
        <div className="flex flex-wrap flex-row -mx-3 ">
          <div className="lg:w-1/2 w-full px-3 flex flex-col justify-center">
            <p className=" font-Montserrat text-white font-semibold text-xl leading-normal">
              Welcome to
            </p>
            <p className=" font-Montserrat text-white font-black sm:text-[65px] text-[40px] sm:leading-[73px] leading-[40px] lg:max-w-[513px]">
              The Future of E-Commerce{" "}
            </p>
            <p className=" text-lg font-medium pt-[6px] font-Montserrat text-white lg:max-w-[384px]">
              A multi-purpose token to improve digital sales and purchases
            </p>
            <div className=" flex items-center gap-4 mt-10">
              <ComanButn
                text="How To Buy"
                textfom="text-orange-400 shadow-mybutton hover:shadow-inherit duration-300 hover:text-white"
              />
              <ComanButn
                text="How To Buy"
                textfom="bg-transparent text-white hover:shadow-mybutton duration-300 hover:text-orange-400"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-3 flex flex-col justify-center items-center pt-6 lg:pt-0">
            <div>
              <img
                src={shopstall}
                alt="shopstall"
                className="w-full h-[518px] max-w-[654px]"
              />
              <img src={bgstall} alt="bg-stall" className=" top-[40%]  sm:top-[43%] right-[0%]   min-h-[800px] -z-[1]  absolute lg:hidden" />
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow1}
        alt="arrow1"
        className=" hidden sm:block sm:absolute top-[21%]  lg:top-[11%] lg:left-[34%] left-[69%] w-full max-w-[147px] max-h-[134px] -z-[1]"
      />
      <img
        src={arrowbtn}
        alt="arrowbtn"
        className=" absolute left-[3%] -z-[1] bottom-[12%] max-w-[98px] max-h-[90px]"
      />
      <img
        src={arrow2}
        alt="arrowbtn"
        className=" hidden lg:block absolute left-[35%] -z-[1] bottom-[-14%] max-w-[98px] max-h-[90px]"
      />
      <img
        src={arrow3}
        alt="arrowbtn"
        className=" hidden lg:block absolute right-[9%] -z-[1] bottom-[-39%] max-w-[217px] max-h-[198px]"
      />
    </div>
  );
};

export default MainHeader;
