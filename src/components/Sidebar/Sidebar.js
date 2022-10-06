import React from "react";
import Tips from "../Tips/Tips";

const Sidebar = ({ dayForecast }) => {
  return (
    <div className="flex flex-row gap-9 justify-center">
      <div className="flex flex-row  justify-center w-screen h-80 bg-gray-100 rounded-xl">
        <div className="flex flex-col w-1/2 justify-around h-full">
          <div className="ml-7">
            <p className=" text-2xl">Próximas horas</p>
          </div>
          <div className=" flex justify-around text-center">
            <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-between gap-5 p-5 flex-col">
              <div>
                <p className="text-xl p-1 ">
                  {parseInt(dayForecast.list[0].dt_txt.slice(10, 16)) < 12
                    ? dayForecast.list[0].dt_txt.slice(10, 16) + " am"
                    : dayForecast.list[0].dt_txt.slice(10, 16) + " pm"}
                </p>
              </div>
              <div className="flex justify-around">
                <div>
                  <p className="text-xs">temp</p>
                  <p className="text-ls p-1">
                    {dayForecast.list[0].main["temp"]}
                  </p>
                </div>
                <div>
                  <p className="text-xs">wind</p>
                  <p className="text-ls p-1">
                    {dayForecast.list[0].wind["speed"]}
                  </p>
                  <p className="text-ls p-1">
                    {dayForecast.list[0].wind["deg"]}
                  </p>
                  <p className="text-ls p-1">
                    {dayForecast.list[0].wind["gust"]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tips />
      </div>
    </div>
  );
};

export default Sidebar;
