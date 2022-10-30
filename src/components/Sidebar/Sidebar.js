import React from "react";
import WeatherNow from "./WeatherNow";
import Navigation from "./Navigation";
import "./Sidebar.css";

const Sidebar = ({ dayForecast }) => {
  return (
    <section className="flex section flex-col justify-evenly bg-slate-800">
      <WeatherNow dayForecast={dayForecast} />
      <Navigation />
    </section>
  );
};

export default Sidebar;
