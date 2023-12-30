import React, { useEffect, useState } from "react";
import ComanButn from "./ComanButn";

const Timeperiod = () => {
  const [time, setTime] = useState({});

  function dateDifference(date1, date2) {
    const difference = {};
    let tmp = date2 - date1;
    difference.days = Math.floor(tmp / 86400000);
    tmp -= difference.days * 86400000;
    difference.hours = Math.floor(tmp / 3600000);
    tmp -= difference.hours * 3600000;
    difference.minutes = Math.floor(tmp / 60000);
    tmp -= difference.minutes * 60000;
    difference.seconds = Math.floor(tmp / 1000);
    return difference;
  }

  useEffect(() => {
    setInterval(() => {
      let timeTaken = dateDifference(
        new Date(Date.now()),
        new Date(`2024-03-22T02:00:00.000Z`)
      );
      timeTaken.seconds =
        timeTaken.seconds < 10 ? `0${timeTaken.seconds}` : timeTaken.seconds;
      timeTaken.minutes =
        timeTaken.minutes < 10 ? `0${timeTaken.minutes}` : timeTaken.minutes;
      setTime(timeTaken);
    }, 0);
  }, []);
  function clear() {
      return () => {
        console.clear();
      };
  }
  clear();
  return (
    <div id="ico">
      <div className=" bg-[url(./assets/image/publicsale.png)] bg-100 bg-no-repeat py-[85px] mt-[100px]">
        <div className="max-w-[610px] px-3 mx-auto">
          <h2 className="text-white  text-center font-Montserrat font-bold sm:text-[30px] text-2xl leading-[56px] max-w-[609px]">
            Public Sale 5% in ERC20 & BEP20, 100% for the Community
          </h2>
          <div className="flex items-center justify-center sm:gap-[14px] gap-2 mt-[58px]">
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 py-2 sm:pb-[9px] sm:ps-[20px]">
                <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.days}
                </p>
              </div>
              <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
                Days
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
                <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.hours}
                </p>
              </div>
              <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
                hours
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
                <p className="text-white font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center ">
                  {time && time.minutes}
                </p>
              </div>
              <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
                Minute
              </p>
            </div>
            <p className=" mb-[2.5rem] text-white font-Montserrat sm:text-[50px] text-[18px] font-normal sm:leading-[87px] leading-[30px] text-center">
              :
            </p>
            <div>
              <div className=" border-white rounded-[10px] border-[1px] sm:pt-[10px] sm:pe-[21px] px-2 sm:ps-[20px] py-2 sm:pb-[9px]">
                <p
                  id="zero"
                  className="text-white second font-Montserrat sm:text-[50px] text-[18px] font-bold sm:leading-[87px] leading-[30px] text-center "
                >
                  {time.seconds}
                </p>
              </div>
              <p className="text-center text-white font-Montserrat sm:text-lg text-[12px] font-medium leading-[31px] pt-[5px]">
                Second
              </p>
            </div>
          </div>
          <ComanButn
            text="BUY WUAO"
            textfom="text-orange-400 shadow-mybutton hover:shadow-inherit duration-300 hover:text-white flex mx-auto mt-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeperiod;
