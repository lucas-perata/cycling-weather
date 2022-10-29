import React from "react";
import WeatherNow from "./WeatherNow";
import Navigation from "./Navigation";

const Sidebar = ({ dayForecast }) => {
  return (
    <div
      style={{ width: "580px" }}
      className="flex flex-col xs:flex-col justify-evenly xs:h-full border h-screen bg-gray-300 "
    >
      <WeatherNow dayForecast={dayForecast} />
      <Navigation />
    </div>
  );
};

export default Sidebar;
