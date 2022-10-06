import React from "react";

const TempDay = ({ dayForecast }) => {
  return (
    <div className="container bg-white border h-80 w-1/3 rounded-xl">
      <div className="flex flex-col justify-around h-full">
        <div className="ml-7">
          <p className=" text-2xl">Pronóstico extendido</p>
        </div>
        <div className="flex gap-2 justify-around">
          <div className=" flex justify-around text-center">
            <div className="bg-yellow-100 border w-40 h-48 rounded-xl flex justify-center flex-row flex-wrap"></div>
          </div>
          <div className=" flex justify-around text-center">
            <div className="bg-yellow-100 border w-40 h-48 rounded-xl flex justify-center flex-row flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDay;
