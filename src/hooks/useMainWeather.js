import { useEffect } from "react";
import { useState } from "react";

const useMainWeather = (lat, long) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&lang=es&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res1) => res1.json())
        .then((result1) => {
          setData(result1);
        });
    };
    fetchData();
  }, [lat, long]);
  return data;
};

export default useMainWeather;
