import React from "react";

const ExtendedWeatherForecast = ({ dayForecast }) => {
  return (
    <div className="flex flex-col justify-center h-full xs:w-screen">
      <div className="flex p-1 flex-col gap-2">
        {dayForecast.forecast["forecastday"].slice(1, 4).map((item) => {
          return (
            <div className=" flex justify-center text-center">
              <p className="p-4 mt-4">{`${item["date"]}`}</p>
              <div
                className="bg-yellow-100 border w-full h-24 rounded-xl flex flex-row xs:flex-col"
                style={
                  item["day"]["maxtemp_c"] > 20
                    ? { backgroundColor: "yellow" }
                    : item["day"]["maxtemp_c"] < 20
                    ? { backgroundColor: "yellow" }
                    : item["day"]["maxtemp_c"] <= 10
                    ? { backgroundColor: "#F1BF98" }
                    : ""
                }
              >
                <div className="flex mt-3 gap-5">
                  <img
                    src={`http:${item["day"]["condition"]["icon"]}`}
                    alt=""
                  />
                  <div className=" w-28">
                    <p>{`Max T  ${item["day"]["maxtemp_c"].toFixed(0)} C°`}</p>
                    <p>{`Min T ${item["day"]["mintemp_c"].toFixed(0)} C°`}</p>
                  </div>
                  <div className="w-28">
                    <p>{`V ${item["day"]["maxwind_kph"].toFixed(0)} km/h`}</p>
                    <p>{`¿Lluvia? ${item["day"]["daily_chance_of_rain"]}%`}</p>
                  </div>
                  <div className="w-28">
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
    </div>
  );
};

export default DaysWeatherContainer;
