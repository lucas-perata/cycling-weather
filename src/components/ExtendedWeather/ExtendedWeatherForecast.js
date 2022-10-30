import React from "react";

const ExtendedWeatherForecast = ({ dayForecast }) => {
  return (
    <div className="flex flex-row text-white text-lg p-7 gap-7 justify-evenly flex-wrap">
      {dayForecast.forecast["forecastday"].slice(1, 6).map((item) => {
        return (
          <div className=" text-slate-300 flex flex-col text-center w-2/5">
            <div className="bg-slate-800 hover:bg-slate-700 border border-slate-800 flex-col shadow-xl w-full justify-center h-56 rounded-xl flex xs:flex-col">
              <div className="bg-slate-900 shadow-md h-10 flex justify-center items-center">
                <p className=" text-slate-100">{`${item["date"]}`}</p>
              </div>
              <div className="flex mt-3 gap-5 justify-center  items-center">
                <img
                  className="w-20 h-20"
                  src={`http:${item["day"]["condition"]["icon"]}`}
                  alt=""
                />
                <div className="w-28">
                  <p>{`Max T  ${item["day"]["maxtemp_c"].toFixed(0)} C°`}</p>
                  <p>{`Min T ${item["day"]["mintemp_c"].toFixed(0)} C°`}</p>
                </div>
                <div className="w-28">
                  <p>{`V ${item["day"]["maxwind_kph"].toFixed(0)} km/h`}</p>
                  <p>{`¿Lluvia? ${item["day"]["daily_chance_of_rain"]}%`}</p>
                </div>
                <div className="w-32">
                  <p>{`UV ${item["day"]["uv"]}`}</p>
                  <p>{`Humedad ${item["day"]["avghumidity"]}%`}</p>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtendedWeatherForecast;
