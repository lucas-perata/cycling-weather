import React from "react";
import TodayInfo from "./TodayInfo";
import NextHours from "./NextHours";

const Weather = ({ weatherData, weatherForecast, dayForecast }) => {
  return (
    <>
      <section className="flex flex-col bg-black w-3/4 gap-4 xs:flex-col xs:w-screen">
        <NextHours dayForecast={dayForecast} />
        <TodayInfo weatherData={weatherData} />
        <div className="flex justify-center w-full gap-10">
          <button className="bg-white">Pronóstico extendido</button>
          <button className="bg-white">Mapa de viento</button>
        </div>
      </section>
    </>
  );
};

export default Weather;
