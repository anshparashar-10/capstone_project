import React from "react";

const AboutUs = () => {
  return (
    <div className=" absolute z-10 px-[24px] gap-[14px] pt-[40px] flex flex-col left-[70px] top-0 h-screen w-[360px]  outline outline-black outline-[1px] overflow-auto">
      <div className="text-[22px] text-center font-[700] text-[#802f52]">
        About Us{" "}
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Ansh Parashar 20BCG10106</span>
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Alan Varghese 20BCG10064</span>
      </div>
      <div className="text-[14px] font-[400]">
        <span className="font-[700]">Suraj Singh Chahar 20BCG10107</span>
      </div>
    </div>
  );
};

export default AboutUs;
