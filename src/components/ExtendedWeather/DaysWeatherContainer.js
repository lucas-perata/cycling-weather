import React from "react";
import ExtendedWeatherForecast from "./ExtendedWeatherForecast";

const DaysWeatherContainer = ({ dayForecast }) => {
  return (
    <section className="flex text-white flex-col bg-slate-900 w-3/4 xs:flex-col xs:w-full xs:pb-4">
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
