import React, { useState } from "react";

const Layer = () => {
  const [clicked, setClicked] = useState(null);

  const handleTabClick = (tab) => {
    setClicked(tab === clicked ? null : tab);
  };

  return (
    <div className=" absolute z-10 px-[32px] pt-[40px] flex flex-col gap-[10px] overflow-auto left-[70px] top-0 h-screen w-[365px]  outline outline-black outline-[1px] ">
      <div className="text-[26px] font-[700] text-[#2f802f]">
        Prediction Graphs...
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH1.jpeg" width={300} height={300} alt="" />
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH2.jpeg" width={300} height={300} alt="" />
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH3.jpeg" width={300} height={300} alt="" />
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH4.jpeg" width={300} height={300} alt="" />
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH5.jpeg" width={300} height={300} alt="" />
      </div>
      <div className="w-[280px] h-[200px] ">
        <img src="svgs/GRAPH6.jpeg" width={300} height={300} alt="" />
      </div>
    </div>
  );
};

export default Layer;
