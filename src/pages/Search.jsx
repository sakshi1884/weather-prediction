import Navbar from "../components/Navbar";
import "./css/Search.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import Loader from "../components/Loader";
export default function Search() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const getWeather = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);

      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200 && jsonResponse.cod !== "200") {
        throw new Error("City not found");
      }

      return {
    city: jsonResponse.name,
    country: jsonResponse.sys.country,
    temp: jsonResponse.main.temp,
    feelsLike: jsonResponse.main.feels_like,
    humidity: jsonResponse.main.humidity,
    windSpeed: jsonResponse.wind.speed,
    weather: jsonResponse.weather[0].description,
    icon: jsonResponse.weather[0].icon,
  };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }finally{
        setLoading(false);
      }
  };
    useEffect(() => {
    const loadDefaultWeather = async () => {
        try {
        const data = await getWeather("Satara");
        setWeather(data);
        } catch (err) {
        console.error(err);
        }
    };

  loadDefaultWeather();
}, []);
  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

 const handleSubmit = async (evt) => {
  evt.preventDefault();

  try {
    setError(false);

    const newInfo = await getWeather(city);
    setWeather(newInfo);

    // setCity("");
  } catch (err) {
    setError(true);
  }
};

  return (
    <>
      <Navbar />
      <div className="content">
        <p className="explore">EXPLORE</p>

        <h1>Search any city</h1>

        <h4 style={{marginBottom:"50px"}}>Type a city and we'll pull the weather!</h4>

        <div className="search-container">
          <div className="search-box">
            <form onSubmit={handleSubmit} className="search-form">
              <div className="input-wrapper">
                <InputBase
                  fullWidth
                  placeholder="e.g. Satara,london etc"
                  value={city}
                  onChange={handleChange}
                  required
                  className="city-input"
                />
              </div>

              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          </div>
        </div>

        {error && <p className="error">No such place exists</p>}       
        {loading?(
                  <Loader/>
                ):(
                  weather && <WeatherCard weather={weather} />
                )}
        {weather && <ForecastCard weather={weather} />}
        <div className="bottom-btn">
            <button
  onClick={() =>
    navigate(`/forecast/${weather.city}`)
  }
>
  View Forecast
</button>
           
        </div>
      </div>
    </>
  );
}