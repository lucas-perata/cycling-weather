import React from "react";
import "./WeatherNow.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

const WeatherNow = ({ dayForecast }) => {
  return (
    <section className="flex bg-slate-800 flex-col h-full justify-between items-center p-2 text-white">
      <img
        src={`http://openweathermap.org/img/wn/${dayForecast.weather[0]["icon"]}@4x.png`}
        alt="weather-icon"
        width={"40%"}
      />
      <div className="flex justify-center">
        <p className="text-slate-200" style={{ fontSize: "7rem" }}>
          {dayForecast.main["temp"].toFixed(0)}
        </p>
        <p className="mt-10 text-fuchsia-800" style={{ fontSize: "2rem" }}>
          °C
        </p>
      </div>

      <p style={{ fontSize: "1.8rem" }}>
        {dayForecast.weather[0]["description"]}
      </p>
      <div className="flex flex-col items-center gap-2">
        <div className="flex">
          <i className="text-2xl">
            <HiOutlineLocationMarker />
          </i>
          <p className="text-lg">{`${dayForecast.name}`}</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherNow;
