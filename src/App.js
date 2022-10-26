import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ClockLoader from "react-spinners/ClockLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaysWeatherContainer from "./ExtendedWeather/DaysWeatherContainer";
import WindMap from "./components/WindMap/WindMap";
import Tips from "./components/Tips/Tips";
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
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
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&lang=es&APPID=${process.env.REACT_APP_API_KEY}`
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
        `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&lang=es&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res2) => res2.json())
        .then((result2) => {
          setForecast(result2);
        });
    };
    fetchData();
  }, [lat, long]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL_2}/forecast.json?key=${process.env.REACT_APP_API_KEY_2}&q=${lat}, ${long}&days=4`
      )
        .then((res3) => res3.json())
        .then((result3) => {
          setDailyForecast(result3);
        });
    };
    fetchData();
  }, [lat, long]);

  function goPage() {
    window.location.reload();
  }

  return (
    <>
      <BrowserRouter>
        <main className="flex w-screen h-screen">
          {typeof data.main !== "undefined" &&
          parseInt(forecast.cod) !== 400 &&
          typeof dailyForecast.location !== "undefined" ? (
            <>
              <Sidebar dayForecast={data} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Weather
                      weatherData={data}
                      weatherForecast={dailyForecast}
                      dayForecast={forecast}
                    />
                  }
                />
                <Route
                  path="/forecast"
                  element={<DaysWeatherContainer dayForecast={dailyForecast} />}
                />
                <Route path="/wind-map" element={<WindMap />} />
                <Route path="/tips" element={<Tips />} />
              </Routes>
              ;
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
      </BrowserRouter>
    </>
  );
}

export default App;
