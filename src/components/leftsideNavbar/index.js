import React, { act, useEffect, useState } from "react";
import MapContent from "../mapContent";
import Layer from "./layer/Layer";
import Buffer from "./buffer/Buffer";
import MeasurementTool from "./measurementTool/MeasurementTool";
import AboutUs from "./about/AboutUs";

const LeftsideNavbar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  // const mapContainerStyle = {
  //   width: activeTab === "layer" ? "calc(100% - 360px)" : "100%",
  //   transition: "width 0.3s ease-in-out", // Add transition effect
  //   position: "fixed",
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  // };

  const [mapWidth, setMapWidth] = useState("100%");
  const [mapPosition, setMapPosition] = useState("4.7%");

  useEffect(() => {
    if (activeTab !== null) {
      setMapWidth("72%");
      setMapPosition("28%");
    } else {
      setMapWidth("100%");
      setMapPosition("4.7%");
    }
  }, [activeTab]);

  return (
    <div className="flex flex-row w-screen">
      <div className="flex py-[80px] gap-[40px] px-[24px] h-screen flex-col justify-start outline outline-black outline-[1px] items-start relative">
        <div
          onClick={() => {
            handleTabClick("layer");
          }}
          className="flex cursor-pointer w-full h-[20px]"
        >
          <img src="svgs/LAYER.svg" alt="" />
        </div>
        {activeTab === "layer" && <Layer />}
        <div
          onClick={() => {
            handleTabClick("compass");
          }}
          className="flex cursor-pointer w-full h-[20px]"
        >
          <img src="svgs/COMPASS.svg" alt="" />
        </div>
        {activeTab === "compass" && <Buffer />}
        <div
          onClick={() => {
            handleTabClick("measure");
          }}
          className="flex cursor-pointer w-full h-[20px]"
        >
          <img src="svgs/MEASURE_ICON.svg" alt="" />
        </div>
        {activeTab === "measure" && <MeasurementTool />}

        <div
          onClick={() => {
            handleTabClick("about");
          }}
          className="flex cursor-pointer w-full h-[20px]"
        >
          <img src="svgs/INFO_ICON.svg" alt="" />
        </div>
        {activeTab === "about" && <AboutUs />}
      </div>

      <MapContent mapWidth={mapWidth} mapPosition={mapPosition} />
    </div>
  );
};

export default LeftsideNavbar;
