import React from "react";
import BigCard from "../WeatherCards/BigCard";
import SmallCard from "../WeatherCards/SmallCard";

const TodayInfo = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="bg-white flex flex-col">
      <h2>TodayInfo</h2>
      <section className="flex justify-center flex-wrap gap-5 p-5">
        <BigCard />
        <BigCard />
        <SmallCard />
        <SmallCard />
      </section>
    </div>
  );
};

export default TodayInfo;
