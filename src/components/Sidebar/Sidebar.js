import React from "react";
import WeatherNow from "./WeatherNow";
import Navigation from "./Navigation";

const Sidebar = ({ dayForecast }) => {
  return (
    <section
      style={{ width: "580px" }}
      className="flex flex-col xs:flex-col justify-evenly xs:h-full h-screen bg-slate-800"
    >
      <WeatherNow dayForecast={dayForecast} />
      <Navigation />
    </section>
  );
};

export default Sidebar;
