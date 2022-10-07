import React from "react";
import Card from "../Card/Card";
import moment from "moment/moment";
import DaysWeatherContainer from "../DaysWeatherContainer/DaysWeatherContainer";

const Weather = ({ weatherData, weatherForecast }) => {
  return (
    <>
      <section className="flex flex-row gap-8 m-10 justify-center">
        <Card
          type={`Clima de hoy en ${weatherData.name}`}
          subtype={moment().format("MMMM Do YYYY")}
          data={weatherData.main["temp"]}
          subData={weatherData.weather[0]["description"]}
          box1Title="Visibilidad"
          box1={weatherData.visibility}
          box2Title="Humedad"
          box2={`${weatherData.main["humidity"]} %`}
          box3Title="Presión"
          box3={weatherData.main["pressure"]}
          img="https://img.freepik.com/free-vector/horse-saddle-hanging-wooden-ranch-fence-scene_107791-11215.jpg?w=1800&t=st=1664942640~exp=1664943240~hmac=cea5d2cb7036217a9ebbfa7755c041199eff4a1c6ae724dd907f0f294e0d6481"
        />
        <Card
          type="Viento"
          subtype={""}
          data={weatherData.wind["speed"]}
          subData={""}
          box1Title="Ráfagas"
          box1={weatherData.wind["gust"]}
          box2Title="Inclinación"
          box2={weatherData.wind["deg"]}
          box3Title="Presión"
          box3={weatherData.main["pressure"]}
          img="https://img.freepik.com/free-vector/crop-duster-plane-flying-green-corn-field-farm-airplane-blue-cloudy-sky-agricultural-cropdus_107791-7514.jpg?w=1380&t=st=1664943121~exp=1664943721~hmac=36b0899aa98b8d359dda6f473481e96b8c912661d0f8a884d5ac9c6099c30347"
        />
        <DaysWeatherContainer dayForecast={weatherForecast} />
      </section>
    </>
  );
};

export default Weather;
