import React from "react";
import leftphone from "../assets/image/whitepaperleft.webp";
import rightphone from "../assets/image/whitepaperright.webp";
import whitearrow from "../assets/image/whitepaperarrow.svg";
import ComanButn from "./ComanButn";
const WhitePaper = () => {
  return (
    <div id="whitepaper">
      <div className="bg-[url(./assets/image/whitepaper-bg.png)] bg-cover bg-no-repeat pb-[101px] relative z-[1]">
        <div className="max-w-[1405px] mx-auto px-3 lg:mt-[158px] md:mt-20 mt-6">
          <div className="flex felx-row flex-wrap -mx-3 pt-10">
            <div className="w-1/4 sm:flex justify-start hidden  ">
              <img
                src={leftphone}
                alt="leftphone"
                className="md:w-full w-9/12"
              />
            </div>
            <div className="sm:w-2/4 w-full sm:pt-0 pt-10 px-3 flex justify-center items-center">
              <div>
                <h2 className=" text-white text-center font-Montserrat sm:text-[50px] text-4xl font-bold  leading-normal">
                  Whitepaper
                </h2>
                <p className="text-white font-Montserrat text-lg font-semibold leading-8 max-w-[577px] text-center pt-3">
                  We want you to know our vision we leave you our whitepaper and
                  now be a part of the digital transformation.
                </p>
                <ComanButn
                  text="Read WhitePaper"
                  textfom="text-orange-400 shadow-mybutton hover:shadow-inherit duration-300 hover:text-white flex justify-center mx-auto mt-[53px] "
                />
              </div>
            </div>
            <div className="w-1/4  sm:flex justify-end hidden  ">
              <img
                src={rightphone}
                alt="rightphone"
                className="md:w-full w-9/12"
              />
            </div>
          </div>
        </div>
        <img
          src={whitearrow}
          alt="whitearrow"
          className=" absolute sm:top-[62%] top-[59%] lg:left-[32%] md:left-[20%] left-[15%]"
        />
      </div>
    </div>
  );
};

export default WhitePaper;
