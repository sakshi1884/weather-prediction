import Navbar from "../components/Navbar";
import ForecastCard from "../components/ForecastCard";
import "./css/Forecast.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";

export default function Forecast() {
  const [forecast, setForecast] = useState([]);
  const navigate = useNavigate();
   const { city } = useParams();

  console.log(city);
  

  const getForecast = async (city) => {
    try {
        
      const response = await fetch(
        `${import.meta.env.VITE_API_FORECAST}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );

      const jsonResponse = await response.json();

      if (jsonResponse.cod !== "200" && jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      const dailyForecast = jsonResponse.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        
        .map((item) => ({
            
          date: item.dt_txt,
          temp: item.main.temp,
          feelsLike: item.main.feels_like,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          weather: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      return dailyForecast;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const loadForecast = async () => {
      try {
        const data = await getForecast(city);
        setForecast(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (city) {
      loadForecast();
    }
  }, [city]);

  return (
    <>
      <Navbar />
      
        <h1 style={{paddingTop:"150px",paddingLeft:"25px",textTransform:"uppercase",color:"white",letterSpacing:"5px"}}>{city}</h1>
      <div className="forecast-container">
        
        {forecast.map((day, index) => (
          <ForecastCard key={index} forecast={day} />
        ))}
      </div>

      <div className="bottom-btn">
        <button onClick={() => navigate("/search")}>
          Search another city
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </button>
      </div>
    </>
  );
}