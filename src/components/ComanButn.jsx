import React from "react";

const ComanButn = (props) => {
  return (
    <div>
      <button
        className={`${props.textfom}  py-[11px] px-[11px]  border-[1px] border-white rounded-[40px] font-Montserrat text-base font-semibold`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ComanButn;
