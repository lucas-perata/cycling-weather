import { useEffect } from "react";
import { useState } from "react";

const useForecastApi = (lat, long) => {
  const [forecast, setForecast] = useState([]);

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
  return forecast;
};

export default useForecastApi;
