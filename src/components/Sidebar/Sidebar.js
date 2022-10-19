import React from "react";
import Tips from "./Tips";
import WeatherNow from "./WeatherNow";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex flex-col xs:flex-col justify-evenly w-2/6 xs:h-full border h-screen bg-gray-300 ">
      <WeatherNow dayForecast={dayForecast} />
      <Tips />
    </div>
  );
};

export default Sidebar;
