import React from "react";
import Tips from "../Tips/Tips";
import Forecast from "../Forecast/Forecast";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex">
      <div className="flex flex-row xs:flex-col justify-evenly w-screen xs:h-full border h-80 bg-gray-50 ">
        <Forecast dayForecast={dayForecast} />
        <Tips />
      </div>
    </div>
  );
};

export default Sidebar;
