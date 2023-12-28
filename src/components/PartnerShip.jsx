import React from "react";
import unicef from "../assets/image/unicef.webp";
const PartnerShip = () => {
  return (
    <div>
      <div className="bg-[url(./assets/image/partnership-bg.png)] bg-cover bg-no-repeat py-[78px] mt-[100px]">
        <div className="max-w-[1141px] mx-auto px-3">
          <h2 className=" text-white  font-Montserrat sm:text-[50px] text-4xl font-bold  leading-normal text-center">
            Partnership
          </h2>
          <img
            src={unicef}
            alt="unicef"
            className="w-full h-full max-w-[453px] mx-auto pt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
