import React from "react";
import Tips from "../Tips/Tips";
import Forecast from "../Forecast/Forecast";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex flex-row gap-9 justify-center">
      <div className="flex flex-row  justify-center w-screen gap-8 border h-80 bg-gray-50 ">
        <Forecast dayForecast={dayForecast} />
        <Tips />
      </div>
    </div>
  );
};

export default Sidebar;
