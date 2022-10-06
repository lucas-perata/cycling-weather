import "./App.css";
import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => setShow(true), 3500);
  }, []);

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
          console.log(result2);
        });
    };
    fetchData();
  }, [lat, long]);

  function goPage() {
    window.location.reload();
  }

  return (
    <>
      <main className="flex flex-col h-screen">
        <Hero />
        {typeof data.main !== "undefined" && parseInt(forecast.cod) !== 400 ? (
          <>
            <Weather weatherData={data} weatherForecast={forecast} />
            <Sidebar dayForecast={forecast} />
          </>
        ) : (
          <div className="h-full  w-screen flex justify-center align-middle">
            <div className="m-auto flex flex-col gap-5">
              <ClockLoader
                className="m-auto animate-pulse "
                color="rgba(220, 73, 0, 1)"
              />
              <p className="text-gray-400 animate-pulse ">
                Consiguiendo información sobre el clima en tu ubicación
              </p>
              {show && (
                <button className="" onClick={goPage}>
                  Intenta de nuevo
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
