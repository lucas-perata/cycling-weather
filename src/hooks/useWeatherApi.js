import { useEffect } from "react";
import { useState } from "react";

const useWeatherApi = (lat, long) => {
  const [dailyForecast, setDailyForecast] = useState([]);

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
  return dailyForecast;
};

export default useWeatherApi;
