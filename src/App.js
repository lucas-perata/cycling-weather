import "./App.css";
import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  useEffect(() => {
    const fetchPrediction = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((forecast) => {
          setForecast(forecast);
          console.log(forecast.list);
        });
    };
    fetchPrediction();
  }, [lat, long]);

  return (
    <>
      <main>
        <Hero />
        {typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div>Cargando</div>
        )}
      </main>
    </>
  );
}

export default App;
