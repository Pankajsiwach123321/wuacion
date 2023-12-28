import React from "react";
import tokenomics from "../assets/image/tokenomics.png";
import tokenomicsleft from "../assets/image/tokenomicsleft.png";
import tokenomicright from "../assets/image/tokenomicsright.png";
import tokenomicarrow from "../assets/image/tokenomics-arrow.svg";

const TokeNomic = () => {
  return (
    <div className=" relative z-[1]">
      <div className=" max-w-[1141px] mx-auto px-3 mt-[100px]">
        <h2 className=" font-Montserrat sm:text-[50px] text-[30px] font-bold leading-normal text-[#32352C] text-center">
          Tokenomics
        </h2>
        <div className=" relative ">
          <img
            src={tokenomics}
            alt="tokenomics"
            className="w-full h-full max-w-[734px] max-h-[734px] mx-auto pt-6"
          />
          <div className="flex items-center justify-center flex-col gap-4">
            <p className="bg-[#D43871] border-[1px] cursor-pointer md:border-none hover:bg-transparent duration-300 border-[#D43871] hover:text-[#D43871] md:bg-transparent w-full md:w-max p-2 md:p-0 rounded-xl md:rounded-none text-center text-[#32352C] font-Montserrat text-xl font-bold leading-normal md:absolute top-[20%] lg:left-[22%] left-[15%]">
              Team
            </p>
            <p className="bg-[#FCA036] border-[1px] cursor-pointer md:border-none hover:bg-transparent duration-300 border-[#FCA036] hover:text-[#FCA036] md:bg-transparent w-full md:w-max p-2 md:p-0 rounded-xl md:rounded-none text-center text-[#32352C] font-Montserrat text-xl font-bold leading-normal md:max-w-[195px] md:absolute top-[13%] lg:top-[40%] lg:right-[3%] right-0">
              Buyers/holders/ community
            </p>
            <p className="bg-[#77C4D3] border-[1px] cursor-pointer md:border-none hover:bg-transparent duration-300 border-[#77C4D3] hover:text-[#77C4D3] md:bg-transparent w-full md:w-max p-2 md:p-0 rounded-xl md:rounded-none text-center text-[#32352C] font-Montserrat text-xl font-bold leading-normal  md:absolute top-[96%] lg:top-[94%] lg:right-[53%] right-[45%]">
              Workers
            </p>
            <p className="bg-[#8CC63F] border-[1px] cursor-pointer md:border-none hover:bg-transparent duration-300 border-[#8CC63F] hover:text-[#8CC63F] md:bg-transparent w-full md:w-max p-2 md:p-0 rounded-xl md:rounded-none text-center text-[#32352C] font-Montserrat md:text-end text-xl font-bold leading-normal md:max-w-[195px]  md:absolute lg:top-[56%] top-[38%] lg:left-[4%] left-[-34px]">
              Subdivided into 5% Founders
            </p>
          </div>
        </div>
      </div>
      <img
        src={tokenomicsleft}
        alt="tokenomicsleft"
        className="absolute left-0 -top-[10%] -z-[1]"
      />
      <img
        src={tokenomicright}
        alt="tokenomicright"
        className="absolute right-0 -bottom-[30%] max-h-[534px] -z-[1]"
      />
      <img
        src={tokenomicarrow}
        alt="tokenomicarrow"
        className="absolute left-[1%] bottom-[15%] max-h-[198px] -z-[1] lg:max-w-[217px] max-w-[140px]"
      />
    </div>
  );
};

export default TokeNomic;
