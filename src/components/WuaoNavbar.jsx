import React, { useState } from "react";
import logo from "../assets/image/logo.webp";
import telegram from "../assets/svg/telegram.svg";
import twitter from "../assets/svg/twitter.svg";
import discord from "../assets/svg/discord.svg";
import ino from "../assets/svg/in-svg.svg";
import earth from "../assets/svg/earth.svg";
const WuaoNavbar = () => {
  const [show, setshow] = useState(false);
  function showme() {
    setshow(!show);
  }
  return (
    <div>
      <div className=" max-w-[1141px] mx-auto px-3">
        <nav className=" flex justify-between items-center py-6">
          <ul>
            <li>
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </li>
          </ul>
          <ul className="flex lg:gap-[22px] gap-3 items-center">
            <li
              className={`flex items-center lg:gap-[31px] gap-3 max-xl:flex-col max-xl:justify-center max-xl:w-full max-xl:max-w-[475px] max-xl:min-h-full max-xl:fixed max-xl:bg-black max-xl:top-0 max-xl:z-[3]  max-xl:opacity-100 max-xl:duration-300 max-xl:shadow-mynav  ${
                show ? "left-0" : "max-xl:-left-[100%]"
              }`}
            >
              <a
                href="#ico"
                className=" after:bg-white after:absolute relative after:bottom-0 after:left-[50%] after:hover:left-0 after:w-0 after:hover:w-full after:duration-300 after:ease-in-out after:rounded-lg after:h-1 text-base font-semibold leading-normal font-Montserrat text-white"
              >
                ICO
              </a>
              <a
                href="#whitepaper"
                className=" after:bg-white after:absolute relative after:bottom-0 after:left-[50%] after:hover:left-0 after:w-0 after:hover:w-full after:duration-300 after:ease-in-out after:rounded-lg after:h-1 text-base font-semibold leading-normal font-Montserrat text-white"
              >
                WHITEPAPER
              </a>
              <span className=" flex items-center gap-3">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  className=" bg-white min-sm:hidden  inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
                >
                  <img src={discord} alt="discord" />
                </a>
                <a
                  href="https://twitter.com/account/access"
                  target="_blank"
                  className=" bg-white min-sm:hidden  inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://web.telegram.org/a/"
                  target="_blank"
                  className=" bg-white min-sm:hidden  inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
                >
                  <img src={telegram} alt="telegram" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className=" bg-white min-sm:hidden  inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
                >
                  <img src={ino} alt="ino" />
                </a>
              </span>
            </li>
            <li className=" flex items-center gap-3">
              <a
                href="https://discord.com/"
                target="_blank"
                className=" bg-white max-sm:hidden hover:-translate-y-2 inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
              >
                <img src={discord} alt="discord" />
              </a>
              <a
                href="https://twitter.com/account/access"
                target="_blank"
                className=" bg-white max-sm:hidden hover:-translate-y-2 inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
              >
                <img src={twitter} alt="twiiter" />
              </a>
              <a
                href="https://web.telegram.org/a/"
                target="_blank"
                className=" bg-white max-sm:hidden hover:-translate-y-2 inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
              >
                <img src={telegram} alt="telegram" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className=" bg-white max-sm:hidden hover:-translate-y-2 inline-block md:p-[7.5px] p-1 rounded-[17.5px]   group duration-300"
              >
                <img src={ino} alt="ino" />
              </a>
            </li>
            <li className="me-[32px]">
              <a
                href="#"
                className="border-[1px] border-white rounded-[167px] flex items-center gap-2 py-1 ps-[5px] pe-[7.5px]"
              >
                <img src={earth} alt="earth" />{" "}
                <select
                  name="langauge"
                  id="language"
                  className="border-0 !cursor-pointer outline-none bg-transparent w-full text-white font-normal font-Montserrat leading-normal"
                >
                  <option value="English" className=" text-black !cursor-pointer">
                    Eng
                  </option>
                  <option value="Hindi" className=" text-black !cursor-pointer">
                    Hi
                  </option>
                  <option value="Chines" className=" text-black !cursor-pointer">
                    言語
                  </option>
                </select>
              </a>
            </li>
          </ul>
          <label
            onClick={showme}
            htmlFor="navbar"
            className="w-[25px] h-[23px] max-xl:flex flex-col justify-between hidden   items-center absolute top-[38px] right-[12px] z-10"
          >
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
          </label>
        </nav>
      </div>
    </div>
  );
};

export default WuaoNavbar;
