import React from "react";
import ExtendedWeatherForecast from "./ExtendedWeatherForecast";

const DaysWeatherContainer = ({ dayForecast }) => {
  return (
    <section className=" bg-slate-900 h-screen w-9/12">
      <div className="flex flex-col justify-evenly h-full xs:w-screen">
        <div className=" text-center">
          <h2 style={{ fontSize: "3rem" }} className="text-white">
            Próximos días
          </h2>
        </div>
        <div>
          <ExtendedWeatherForecast dayForecast={dayForecast} />
        </div>
      </div>
    </section>
  );
};

export default DaysWeatherContainer;
