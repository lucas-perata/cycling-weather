import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ClockLoader from "react-spinners/ClockLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaysWeatherContainer from "./components/ExtendedWeather/DaysWeatherContainer";
import WindMap from "./components/WindMap/WindMap";
import Tips from "./components/Tips/Tips";
import useWeatherApi from "./hooks/useWeatherApi";
import useForecastApi from "./hooks/useForecastApi";
import useMainWeather from "./hooks/useMainWeather";
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => setShow(true), 3500);
  }, []);

  function fetchData() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }

  fetchData();

  let data = useMainWeather(lat, long);
  let dailyForecast = useWeatherApi(lat, long);
  let forecast = useForecastApi(lat, long);

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
