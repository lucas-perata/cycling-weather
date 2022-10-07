import React from "react";
import DaysWeatherForecast from "../DaysWeatherForecast/DaysWeatherForecast";

const TempDay = ({ dayForecast }) => {
  return (
    <div className="container bg-white border h-80 w-1/3 rounded-xl xs:w-screen xs:h-full">
      <DaysWeatherForecast dayForecast={dayForecast} />
    </div>
  );
};

export default TempDay;
