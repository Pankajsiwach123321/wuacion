import React from "react";
import timeline from "../assets/image/time-line.webp";
import timelinecircel from "../assets/image/time-line-circle.webp";
import ellipes from "../assets/image/ourprojectright.png";
const OurProject = () => {
  return (
    <div className=" relative z-[1]">
      <div className="max-w-[1141px] mx-auto px-3 lg:mt-[250px] md:mt-20 mt-6">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="md:w-1/2 w-full px-3">
            <div className=" relative">
              <img
                src={timelinecircel}
                alt="timelinecircel"
                className=" absolute left-[35%] w-[30%] top-[35%] animate-myspin "
              />
              <img src={timeline} alt="timeline" className="w-full h-full  " />
            </div>
          </div>
          <div className=" md:w-1/2 w-full px-3 flex flex-col justify-center">
            <h2 className=" font-Montserrat sm:text-[50px] md:text-start text-center text-[30px] font-bold leading-normal text-[#32352C]">
              Our Project
            </h2>
            <p className="md:max-w-[447px] font-Montserrat md:text-start text-center font-normal text-lg leading-[31px] pt-[18px]">
              Wuaocoin is the first project in the TechFi category that allows
              users multiple options to have utility and usability in the
              ecosystem, its time to change the way of seeing the purchases and
              sales of products and services within an multilateral electronic
              commerce platform using crypto technology.
            </p>
          </div>
        </div>
      </div>
      <img
        src={ellipes}
        alt="ellipes"
        className=" absolute  right-0 top-[5%] -z-[1] max-h-[530px]"
      />
    </div>
  );
};

export default OurProject;
