import React from "react";

const DaysWeatherContainer = ({ dayForecast }) => {
  return (
    <div className="flex flex-col justify-evenly h-full">
      <div className="ml-7">
        <p className=" text-2xl">Pronóstico extendido</p>
      </div>
      <div className="flex p-5 flex-col gap-2">
        {dayForecast.forecast["forecastday"].slice(1, 4).map((item) => {
          {
            return (
              <div className=" flex justify-center text-center">
                <p className="p-4">{item["date"]}</p>
                <div className="bg-yellow-100 border w-full h-16 rounded-xl flex justify-center flex-row flex-wrap">
                  <div className="flex mt-1 gap-5">
                    <div>
                      <p>{`Max temp ${item["day"]["maxtemp_c"]}`}</p>
                      <p>{`Min temp ${item["day"]["mintemp_c"]}`}</p>
                    </div>
                    <div>
                      <p>{`Viento ${item["day"]["maxwind_kph"]} km/h`}</p>
                      <p>
                        {`¿Lluvia? ${item["day"]["daily_chance_of_rain"]}%`}
                      </p>
                    </div>
                    <div>
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
          }
        })}
      </div>
    </div>
  );
};

export default DaysWeatherContainer;
