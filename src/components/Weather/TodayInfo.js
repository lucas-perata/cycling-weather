import React from "react";
import BigCard from "../WeatherCards/BigCard";
import SmallCard from "../WeatherCards/SmallCard";
import setWindDirection from "../../hooks/setWindDirection";

const TodayInfo = ({ weatherData }) => {
  return (
    <div className="bg-white flex flex-col">
      <h2>TodayInfo</h2>
      <section className="flex justify-center flex-wrap gap-5 p-5">
        <BigCard
          title={"Humedad"}
          info={weatherData.main["humidity"]}
          details={
            <div class="w-full bg-gray-200 rounded-full">
              <div
                class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                style={{ width: `${weatherData.main["humidity"]}%` }}
              >
                {weatherData.main["humidity"]}%
              </div>
            </div>
          }
        />
        <BigCard
          title={"Viento"}
          info={`${(weatherData.wind["speed"] * 3.6).toFixed(0)} km/h`}
          details={setWindDirection(weatherData.wind["deg"])}
        />
        <SmallCard />
        <SmallCard />
      </section>
    </div>
  );
};

export default TodayInfo;
