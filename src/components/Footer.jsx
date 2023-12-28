import React from "react";
import footerlogo from "../assets/image/footerlogo.webp";
import footerellipes1 from "../assets/image/footerleft.png";
import footerellipes2 from "../assets/image/footerright.png";
import telegram from "../assets/svg/telegram-footer.svg";
import twitter from "../assets/svg/footer-twitter.svg";
import discord from "../assets/svg/footer-discord.svg";
import ino from "../assets/svg/footer-in.svg";
import footerarrow from "../assets/image/footerbotm.png";
const Footer = () => {
  return (
    <div className=" relative z-[1]">
      <div className="max-w-[1141px] mx-auto px-3 pt-[100px]">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-7/12 sm:w-1/2 w-full px-3">
            <a href="https://discord.com/" target="_blank">
              <img src={footerlogo} alt="footerlogo" />
            </a>
            <p className=" font-Montserrat font-normal text-[#70726C] text-base leading-[27px] max-w-[252px] pt-6">
              Welcome to The Future of the Market. The world's first Global
              TechFi Platform
            </p>
            <div className=" flex items-center gap-[11px] pt-[23px]">
              <a
                href="https://discord.com/"
                target="_blank"
                className=" bg-white   inline-block   rounded-[17.5px]   group duration-300"
              >
                <img src={discord} alt="discord" />
              </a>
              <a
                href="https://twitter.com/account/access"
                target="_blank"
                className=" bg-white   inline-block  rounded-[17.5px]   group duration-300"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://web.telegram.org/a/"
                target="_blank"
                className=" bg-white   inline-block  rounded-[17.5px]   group duration-300"
              >
                <img src={telegram} alt="telegram" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className=" bg-white   inline-block  rounded-[17.5px]   group duration-300"
              >
                <img src={ino} alt="ino" />
              </a>
            </div>
          </div>
          <div className="lg:w-5/12 sm:w-1/2 w-full px-3 pt-5 sm:pt-0">
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="lg:w-1/3 w-1/2  px-3">
                <ul>
                  <li className="text-[#32352C] font-Montserrat text-lg font-semibold">
                    Documents
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat text-[#5B5D56] hover:text-black duration-300 font-normal leading-[34px]"
                    >
                      WhitePaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat text-[#5B5D56] hover:text-black duration-300 font-normal leading-[34px]"
                    >
                      Customers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat text-[#5B5D56] hover:text-black duration-300 font-normal leading-[34px]"
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 w-1/2  px-3">
                <ul>
                  <li className="text-[#32352C] font-Montserrat text-lg font-semibold">
                    Quick Links
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      ICO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      RoadMap
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black  duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      Partnership
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 w-1/2  px-3">
                <ul>
                  <li className="text-[#32352C] font-Montserrat text-lg font-semibold">
                    Documents
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      WUAOCOIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/"
                      target="_blank"
                      className=" text-base font-Montserrat hover:text-black duration-300 text-[#5B5D56] font-normal leading-[34px]"
                    >
                      WUAOSHOP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className=" font-Montserrat text-base font-normal text-center text-[#848680] mt-[73px] border-t-[1px] py-[25px] border-t-[#E3E3E3]">
        © Copyright 2022 - Wuaocoin
      </p>
      <img
        src={footerellipes1}
        alt="footerellipes1"
        className=" absolute left-0 top-[-33%]"
      />
      <img
        src={footerellipes2}
        alt="footerellipes1"
        className=" absolute right-0 bottom-[0%] max-w-[507px] max-h-[457px]"
      />
      <img
        src={footerarrow}
        alt="footerellipes1"
        className=" absolute md:right-[61%] bottom-[10%] md:bottom-[3%] max-w-[212px] max-h-[189px]"
      />
    </div>
  );
};

export default Footer;
