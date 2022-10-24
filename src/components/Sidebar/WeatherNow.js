import React from "react";
import "./WeatherNow.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import moment from "moment/moment";
import "moment/locale/es";

const WeatherNow = ({ dayForecast }) => {
  console.log(dayForecast.main);
  return (
    <section className="flex bg-red-500 flex-col h-full justify-between items-center p-5">
      <img
        src={`http://openweathermap.org/img/wn/${dayForecast.weather[0]["icon"]}@4x.png`}
        alt="weather-icon"
        width={"40%"}
      />
      <div className="flex justify-center">
        <p style={{ fontSize: "7rem" }}>
          {dayForecast.main["temp"].toFixed(0)}
        </p>
        <p className="mt-10" style={{ fontSize: "2rem" }}>
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
        <p> {moment().format("LL")}</p>
      </div>
    </section>
  );
};

export default WeatherNow;
