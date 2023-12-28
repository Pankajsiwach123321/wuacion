import React from "react";
import infinity from "../assets/image/infinity.webp";
import roadellipes1 from "../assets/image/roadmapleft.png"
import roadellipes2 from "../assets/image/roadmaprightbottom.png"
import roadellipes3 from "../assets/image/roadmapright.svg"
const roadmapdata = [
  {
    i:1,
    bg: "bg-ffb-yellow",
    number: "1",
    para: `Organizational concept (creations)`,
  },
  {
    i:2,
    bg: "bg-ffb-darkorange",
    number: "2",
    para: `Directional Process (Actions)`,
  },
  {
    i:3,
    bg: "bg-[#4D86DC]",
    number: "3",
    para: `Operational Development (technical team)`,
  },
  {
    i:4,
    bg: "bg-[#364EC6]",
    number: "4",
    para: `Strategic Opportunities (alliances)`,
  },
  {
    i:5,
    bg: "bg-ffb-purple",
    number: "5",
    para: `Stakeholders (benefits)`,
  },
  {
    i:6,
    bg: "bg-ffb-pink",
    number: "6",
    para: `Human Identity (social contribution)`,
  },
];
const RoadMap = () => {
  const myroad = roadmapdata.map((e) => (
    <div className="xl:w-1/6 lg:w-1/5 md:w-1/4 sm:w-1/3 w-full px-3 xl:pt-[56px] pt-5" key={e.i}>
      <div
        className={`${e.bg} cursor-grab pt-2 pb-[45px] px-[11px] rounded-[14px] h-full hover:shadow-mycard duration-500`}
      >
        <p className=" font-Montserrat text-[27px] leading-normal font-bold opacity-[0.5]  text-white">
          {e.number}
        </p>
        <p className=" font-Montserrat font-bold leading-normal text-white text-xl">
          {e.para}
        </p>
      </div>
    </div>
  ));
  return (
    <div className=" relative z-[1]">
      <div className="max-w-[1360px] mx-auto px-3 mt-[100px]">
        <h2 className=" font-Montserrat sm:text-[50px] text-[30px] font-bold leading-normal text-[#32352C] text-center">
          RoadMap
        </h2>
        <p className="text-[#4D4D4D]  text-center font-Montserrat text-lg mx-auto  font-normal leading-8 max-w-[672px] pt-[18px]">
          Knowing our values, understanding the business idea and then,
          gradually, presenting the plans to the public is our way of doing
          things.
        </p>
        <img
          src={infinity}
          alt="infinity"
          className="w-full mx-auto max-w-[592px] mt-[75px]"
        />
        <div className="flex flex-wrap -mx-3 flex-row">{myroad}</div>
      </div>
      <img
        src={roadellipes1}
        alt="roadellipes"
        className=" absolute left-[0%] top-[-10%] -z-[1]"
      />
      <img
        src={roadellipes2}
        alt="roadellipes"
        className=" absolute right-[0%] md:bottom-[-40%] bottom-0 -z-[1]"
      />
      <img
        src={roadellipes3}
        alt="roadellipes"
        className=" hidden sm:block  absolute right-[4%] top-[4%] -z-[1]"
      />
    </div>
  );
};

export default RoadMap;
