import React from "react";
import TodayInfo from "./TodayInfo";
import NextHours from "./NextHours";

const Weather = ({ weatherData, weatherForecast, dayForecast }) => {
  return (
    <>
      <section className="flex flex-col bg-black w-3/4 gap-4 xs:flex-col xs:w-screen">
        <NextHours dayForecast={dayForecast} />
        <TodayInfo weatherData={weatherData} />
      </section>
    </>
  );
};

export default Weather;
