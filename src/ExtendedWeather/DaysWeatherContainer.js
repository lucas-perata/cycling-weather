import React from "react";
import ExtendedWeatherForecast from "./ExtendedWeatherForecast";

const DaysWeatherContainer = ({ dayForecast }) => {
  return (
    <div className="container bg-white border h-80 w-1/3 rounded-xl xs:w-screen xs:h-full">
      <ExtendedWeatherForecast dayForecast={dayForecast} />
    </div>
  );
};

export default DaysWeatherContainer;
