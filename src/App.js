import "./App.css";
import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

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
        .then((res1) => res1.json())
        .then((result1) => {
          setData(result1);
        });
    };
    fetchData();
  }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res2) => res2.json())
        .then((result2) => {
          setForecast(result2);
        });
      console.log(forecast.cod);
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <main>
        <Hero />
        {typeof data.main != "undefined" && forecast.cod != 400 ? (
          <>
            <Weather weatherData={data} weatherForecast={forecast} />
            <Sidebar weatherForecast={forecast} />
          </>
        ) : (
          <div>Cargando</div>
        )}
      </main>
    </>
  );
}

export default App;
