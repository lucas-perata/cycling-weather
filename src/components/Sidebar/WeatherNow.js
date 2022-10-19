import React from "react";

const WeatherNow = ({ dayForecast }) => {
  return (
    <div>
      WeatherNow
      <div>{`Clima de hoy en ${dayForecast.name}`}</div>
    </div>
  );
};

export default WeatherNow;
