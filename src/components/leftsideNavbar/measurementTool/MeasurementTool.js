import React, { useState } from "react";

const MeasurementTool = () => {
  const [unit, setUnit] = useState("M");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" absolute z-10 px-[24px] gap-[14px] pt-[70px] flex flex-col left-[70px] top-0 h-screen w-[360px]  outline outline-black outline-[1px]">
      <div className="text-[26px] font-[700] text-[#87318d]">
        Emergency helpline no.
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Disaster Management Services</span>-108
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">
          EARTHQUAKE / FLOOD / DISASTER N.D.R.F:
        </span>
        <br /> 011-24363260
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Disaster Management N.D.M.A</span>
        <br /> 011-26701728-1078
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Air Ambulance</span>-9540161344
      </div>
    </div>
  );
};

export default MeasurementTool;
