import React from "react";
import BigCard from "../WeatherCards/BigCard";
import SmallCard from "../WeatherCards/SmallCard";
import setWindDirection from "../../hooks/setWindDirection";
import moment from "moment/moment";
import "moment/locale/es";
import { FiSunset, FiSunrise, FiCompass } from "react-icons/fi";

const TodayInfo = ({ weatherData }) => {
  return (
    <div className="bg-slate-900 flex flex-col">
      <h2 className="p-5 text-2xl">Detalles del día {moment().format("LL")}</h2>
      <section className="flex justify-center flex-wrap gap-5">
        <BigCard
          title={"Humedad"}
          info={`${weatherData.main["humidity"]}%`}
          details={
            <div class="w-full bg-gray-200 rounded-full">
              <div
                class="bg-fuchsia-900 text-xs h-3 font-medium text-blue-100 leading-none rounded-l-full"
                style={{ width: `${weatherData.main["humidity"]}%` }}
              ></div>
            </div>
          }
        />
        <BigCard
          title={"Viento"}
          info={`${(weatherData.wind["speed"] * 3.6).toFixed(0)} km/h`}
          details={setWindDirection(weatherData.wind["deg"])}
          icon={<FiCompass />}
        />
        <SmallCard
          title={"Amanecer"}
          info={moment.unix(weatherData.sys["sunrise"]).format("HH:mm")}
          icon={<FiSunrise />}
        />
        <SmallCard
          title={"Puesta del sol"}
          info={`${moment.unix(weatherData.sys["sunset"]).format("HH:mm")}`}
          icon={<FiSunset />}
        />
      </section>
    </div>
  );
};

export default TodayInfo;
