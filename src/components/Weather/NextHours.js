import React from "react";
import {
  RiWindyFill,
  RiTempHotLine,
  RiTempColdLine,
  RiCompass3Line,
} from "react-icons/ri";
import { WiHumidity, WiWindy } from "react-icons/wi";

const NextHours = ({ dayForecast }) => {
  const directions = ["N", "NE", "E", "SU", "S", "SO", "O", "NO"];
  function convertDegreesToWindDirection(degrees) {
    degrees = (degrees * 8) / 360;
    degrees = Math.round(degrees, 0);
    degrees = (degrees + 8) % 8;
    return directions[degrees];
  }
  return (
    <div className="flex flex-col h-min mt-10 bg-white xs:w-screen xs:flex-wrap xs:overflow-scroll">
      <h2>Próximas horas</h2>
      <div className=" flex gap-10 p-2 justify-around text-center">
        {dayForecast.list.slice(0, 4).map((day) => {
          return (
            <div className="bg-yellow-100 border w-1/4 h-56 rounded-xl flex justify-around gap-5 p-5 flex-col">
              <div>
                <p className="text-xl p-1 ">
                  {parseInt(day.dt_txt.slice(10, 16)) < 12
                    ? day.dt_txt.slice(10, 16) + " am"
                    : day.dt_txt.slice(10, 16) + " pm"}
                </p>
                <p>{day.weather[0]["description"]}</p>
              </div>
              <div className="">
                <div className="border shadow rounded-lg h-12 w-48 flex justify-center">
                  <div className="flex w-full h-full justify-around">
                    <div className="h-full">
                      <RiTempHotLine />
                      <p className="text-ls p-1">
                        {`${day.main["temp_max"].toFixed(0)} C°`}
                      </p>
                    </div>
                    <div>
                      <RiTempColdLine />
                      <p className="text-ls p-1">
                        {`${day.main["temp_min"].toFixed(0)} C°`}
                      </p>
                    </div>
                    <div>
                      <WiHumidity />
                      <p className="text-ls p-1">{day.main["humidity"]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="border shadow h-12 w-48 flex justify-center">
                  <div className="flex w-full h-full justify-around">
                    <div>
                      <RiWindyFill />
                      <p className="text-ls p-1">
                        {(day.wind["speed"] * 3.6).toFixed(0)}
                      </p>
                    </div>
                    <div>
                      <WiWindy />
                      <p className="text-ls p-1">
                        {(day.wind["gust"] * 3.6).toFixed(0)}
                      </p>
                    </div>
                    <div>
                      <RiCompass3Line />
                      <p className="text-ls p-1">
                        {convertDegreesToWindDirection(day.wind["deg"])}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NextHours;
