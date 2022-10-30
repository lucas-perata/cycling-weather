import React from "react";
import TodayInfo from "./TodayInfo";
import NextHours from "./NextHours";

const Weather = ({ weatherData, weatherForecast, dayForecast }) => {
  return (
    <>
      <section className="flex text-white flex-col bg-slate-900 w-3/4 xs:flex-col xs:w-full xs:pb-4">
        <NextHours dayForecast={dayForecast} />
        <TodayInfo weatherData={weatherData} />
      </section>
    </>
  );
};

export default Weather;
