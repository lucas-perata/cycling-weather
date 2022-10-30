import React from "react";
import {
  RiWindyFill,
  RiTempHotLine,
  RiTempColdLine,
  RiCompass3Line,
} from "react-icons/ri";
import { WiHumidity, WiWindy } from "react-icons/wi";
import setWindDirection from "../../hooks/setWindDirection";
import "./NextHours.css";

const NextHours = ({ dayForecast }) => {
  return (
    <section className="flex flex-col h-min bg-slate-900 xs:w-screen xs:flex-wrap xs:overflow-scroll">
      <h2 className="text-2xl p-5">Próximas horas</h2>
      <div className=" flex gap-5 p-5 justify-around text-center">
        {dayForecast.list.slice(0, 4).map((day) => {
          return (
            <div className="bg-slate-800 hover:bg-slate-700 shadow-xl w-1/4 h-56 rounded-xl flex items-center justify-center gap-5 p-5 flex-col mobile-cards">
              <div>
                <p className="text-xl text-slate-200 p-1">
                  {parseInt(day.dt_txt.slice(10, 16)) < 12
                    ? day.dt_txt.slice(10, 16) + " am"
                    : day.dt_txt.slice(10, 16) + " pm"}
                </p>
                <p>{day.weather[0]["description"]}</p>
              </div>
              <div className="">
                <div className="shadow-2xl rounded-xl h-12 w-48 flex justify-center">
                  <div className="flex w-full h-full justify-around">
                    <div className="h-full flex flex-col items-center">
                      <RiTempHotLine />
                      <p className="text-ls p-1">
                        {`${day.main["temp_max"].toFixed(0)} C°`}
                      </p>
                    </div>
                    <div className="h-full flex flex-col items-center">
                      <RiTempColdLine />
                      <p className="text-ls p-1">
                        {`${day.main["temp_min"].toFixed(0)} C°`}
                      </p>
                    </div>
                    <div className="h-full flex flex-col items-center">
                      <WiHumidity />
                      <p className="text-ls p-1">{`${day.main["humidity"]}%`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-xl h-12 w-48 flex justify-center">
                <div className="flex w-full h-full justify-around">
                  <div className="h-full flex flex-col items-center">
                    <WiWindy />
                    <p className="text-ls p-1">
                      {(day.wind["speed"] * 3.6).toFixed(0)}
                    </p>
                  </div>
                  <div className="h-full flex flex-col items-center">
                    <RiWindyFill />
                    <p className="text-ls p-1">
                      {(day.wind["gust"] * 3.6).toFixed(0)}
                    </p>
                  </div>
                  <div className="h-full flex flex-col items-center">
                    <RiCompass3Line />
                    <p className="text-ls p-1">
                      {setWindDirection(day.wind["deg"])}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default NextHours;
