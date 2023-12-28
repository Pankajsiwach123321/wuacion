import React from "react";
import benefit1 from "../assets/image/benefit1.webp";
import benefit2 from "../assets/image/benefit2.webp";
import benefit3 from "../assets/image/benefit3.webp";
import benefiteliipes from "../assets/image/benefit-ellipes.png";
const beefitsdata = [
  {
    i:1,
    imgbenefits: benefit1,
    para: `Services, Products and Community All in one place!`,
  },
  {
    i:2,
    imgbenefits: benefit2,
    para: `Selling in crypto will no longer be complicated, it will be safe and reliable.`,
  },
  {
    i:3,
    imgbenefits: benefit3,
    para: `Buying and getting a real discount is possible? Join and check it out.`,
  },
];
const BeneFits = () => {
  const mydata = beefitsdata.map((b) => (
    <div className="md:w-1/3 sm:w-1/2 w-full px-3 pt-16" key={b.i}>
      <div className="flex justify-center flex-col items-center">
        <div className="bg-[#FBF3E6] p-2 animate-mywiggle">
          <img
            src={b.imgbenefits}
            alt="benefit1"
            className="w-full max-w-[370px] h-[287px]"
          />
        </div>
        <p className="text-[#4D4D4D] text-lg font-normal leading-8 text-center font-Montserrat pt-5 max-w-[272px]">
          {b.para}
        </p>
      </div>
    </div>
  ));
  return (
    <div className=" relative z-[1]">
      <div className="max-w-[1141px] mx-auto px-3 lg:mt-[50px] md:mt-20 mt-6">
        <h2 className=" font-Montserrat sm:text-[50px] text-[30px] font-bold leading-normal text-[#32352C] text-center">
          Benefits
        </h2>
        <div className="flex flex-row -mx-3 flex-wrap">{mydata}</div>
      </div>
      <img
        src={benefiteliipes}
        alt="benefiteliipes"
        className=" absolute left-[2%] bottom-3 md:bottom-[-6%] -z-[1] max-w-[269px] max-h-[239px]"
      />
    </div>
  );
};

export default BeneFits;
