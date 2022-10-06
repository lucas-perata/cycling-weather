import React from "react";

const Forecast = ({ dayForecast }) => {
  return (
    <div className="flex flex-col w-1/2 justify-around h-full">
      <div className="ml-7">
        <p className=" text-2xl">Próximas horas</p>
      </div>
      <div className=" flex justify-around text-center">
        <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-around gap-5 p-5 flex-col">
          <div>
            <p className="text-xl p-1 ">
              {parseInt(dayForecast.list[0].dt_txt.slice(10, 16)) < 12
                ? dayForecast.list[0].dt_txt.slice(10, 16) + " am"
                : dayForecast.list[0].dt_txt.slice(10, 16) + " pm"}
            </p>
            <p>{dayForecast.list[0].weather[0]["description"]}</p>
          </div>
          <div className="">
            <div className="border shadow rounded-lg h-12 w-48 flex justify-center">
              <div className="flex w-full h-full justify-around mt-4">
                <p className="text-ls p-1">
                  {dayForecast.list[0].wind["speed"]}
                </p>
                <p className="text-ls p-1">{dayForecast.list[0].wind["deg"]}</p>
                <p className="text-ls p-1">
                  {dayForecast.list[0].wind["gust"]}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border shadow h-12 w-48 flex justify-center">
              <div className="flex w-full h-full justify-around mt-4">
                <p className="text-ls p-1">
                  {dayForecast.list[0].wind["speed"]}
                </p>
                <p className="text-ls p-1">{dayForecast.list[0].wind["deg"]}</p>
                <p className="text-ls p-1">
                  {dayForecast.list[0].wind["gust"]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-between gap-5 p-5 flex-col">
          <div>
            <p className="text-xl p-1 ">
              {parseInt(dayForecast.list[1].dt_txt.slice(10, 16)) < 12
                ? dayForecast.list[1].dt_txt.slice(10, 16) + " am"
                : dayForecast.list[1].dt_txt.slice(10, 16) + " pm"}
            </p>
            <p>{dayForecast.list[1].weather[0]["description"]}</p>
          </div>
          <div className="flex justify-around">
            <div>
              <p className="text-xs">temp</p>
              <p className="text-ls p-1">{dayForecast.list[1].main["temp"]}</p>
            </div>
            <div>
              <p className="text-xs">wind</p>
              <p className="text-ls p-1">{dayForecast.list[1].wind["speed"]}</p>
              <p className="text-ls p-1">{dayForecast.list[1].wind["deg"]}</p>
              <p className="text-ls p-1">{dayForecast.list[1].wind["gust"]}</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-between gap-5 p-5 flex-col">
          <div>
            <p className="text-xl p-1 ">
              {parseInt(dayForecast.list[2].dt_txt.slice(10, 16)) < 12
                ? dayForecast.list[2].dt_txt.slice(10, 16) + " am"
                : dayForecast.list[2].dt_txt.slice(10, 16) + " pm"}
            </p>
            <p>{dayForecast.list[2].weather[0]["description"]}</p>
          </div>
          <div className="flex justify-around">
            <div>
              <p className="text-xs">temp</p>
              <p className="text-ls p-1">{dayForecast.list[2].main["temp"]}</p>
            </div>
            <div>
              <p className="text-xs">wind</p>
              <p className="text-ls p-1">{dayForecast.list[2].wind["speed"]}</p>
              <p className="text-ls p-1">{dayForecast.list[2].wind["deg"]}</p>
              <p className="text-ls p-1">{dayForecast.list[2].wind["gust"]}</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-between gap-5 p-5 flex-col">
          <div>
            <p className="text-xl p-1 ">
              {parseInt(dayForecast.list[3].dt_txt.slice(10, 16)) < 12
                ? dayForecast.list[3].dt_txt.slice(10, 16) + " am"
                : dayForecast.list[3].dt_txt.slice(10, 16) + " pm"}
            </p>
            <p>{dayForecast.list[3].weather[0]["description"]}</p>
          </div>
          <div className="flex justify-around">
            <div>
              <p className="text-xs">temp</p>
              <p className="text-ls p-1">{dayForecast.list[3].main["temp"]}</p>
            </div>
            <div>
              <p className="text-xs">wind</p>
              <p className="text-ls p-1">{dayForecast.list[3].wind["speed"]}</p>
              <p className="text-ls p-1">{dayForecast.list[3].wind["deg"]}</p>
              <p className="text-ls p-1">{dayForecast.list[3].wind["gust"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forecast;
