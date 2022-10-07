import React from "react";
import Tips from "../Tips/Tips";
import Forecast from "../Forecast/Forecast";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row  justify-evenly w-screen  border h-80 bg-gray-50 ">
        <Forecast dayForecast={dayForecast} />
        <Tips />
      </div>
    </div>
  );
};

export default Sidebar;
