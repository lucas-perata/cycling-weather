import React from "react";
import WeatherNow from "./WeatherNow";
import Navigation from "./Navigation";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex flex-col xs:flex-col justify-evenly w-2/6 xs:h-full border h-screen bg-gray-300 ">
      <WeatherNow dayForecast={dayForecast} />
      <Navigation />
    </div>
  );
};

export default Sidebar;
