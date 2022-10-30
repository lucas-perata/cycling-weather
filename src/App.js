import Weather from "./components/Weather/Weather";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ClockLoader from "react-spinners/ClockLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaysWeatherContainer from "./components/ExtendedWeather/DaysWeatherContainer";
import Tips from "./components/Tips/Tips";
import useWeatherApi from "./hooks/useWeatherApi";
import useForecastApi from "./hooks/useForecastApi";
import useMainWeather from "./hooks/useMainWeather";
function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [show, setShow] = useState();

  useEffect(() => {
    setTimeout(() => setShow(true), 4000);
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
        <main className="flex xs:flex-col w-screen h-screen">
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
                <Route path="/tips" element={<Tips />} />
              </Routes>
              ;
            </>
          ) : (
            <section className="h-full bg-slate-900 text-slate-200 w-screen flex justify-center align-middle">
              <div className="m-auto flex h-1/3 flex-col">
                <div>
                  <ClockLoader
                    className="m-auto mb-5 animate-pulse "
                    color="rgba(220, 73, 0, 1)"
                  />
                  <p className="animate-pulse ">
                    Consiguiendo información sobre el clima en tu ubicación
                  </p>
                </div>
                {show && (
                  <button
                    className="border text-sm m-auto p-1 rounded-xl text-slate-300 hover:bg-slate-800"
                    onClick={goPage}
                  >
                    Intenta de nuevo
                  </button>
                )}
              </div>
            </section>
          )}
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
