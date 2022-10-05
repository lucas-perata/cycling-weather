import React from "react";
import Card from "../Card/Card";
import TempDay from "../TempDay/TempDay";
import Sidebar from "../Sidebar/Sidebar";

const Weather = ({ weatherData }) => {
  return (
    <>
      <section className="flex flex-row gap-8 m-10 justify-center">
        <Card
          props="today"
          img="https://img.freepik.com/free-vector/horse-saddle-hanging-wooden-ranch-fence-scene_107791-11215.jpg?w=1800&t=st=1664942640~exp=1664943240~hmac=cea5d2cb7036217a9ebbfa7755c041199eff4a1c6ae724dd907f0f294e0d6481"
        />
        <Card
          props="wind"
          img="https://img.freepik.com/free-vector/crop-duster-plane-flying-green-corn-field-farm-airplane-blue-cloudy-sky-agricultural-cropdus_107791-7514.jpg?w=1380&t=st=1664943121~exp=1664943721~hmac=36b0899aa98b8d359dda6f473481e96b8c912661d0f8a884d5ac9c6099c30347"
        />
        <TempDay />
      </section>
      <Sidebar />
    </>
  );
};

export default Weather;
