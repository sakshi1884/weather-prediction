import "./css/Home.css"
import { useNavigate } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import Navbar from "../components/Navbar";
import {useState,useEffect} from 'react';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chevron_right" />
export default function Home(){
    const navigate =useNavigate();
    const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}?q=Satara&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        );

        const data = await response.json();

        setWeather({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          weather: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, []);
    return(

        <>
        <div>
            <Navbar />
            <div className="content">
            <div className="p">
            <p>Today's Sky</p>
            </div>
            <div className="infoh">
            <h3>The weather, <span className="highlight">beautifully</span> told.</h3>
            </div>
            <div className="p-1">
            <p>Atmos pulls live conditions from across the globe and renders them like the sky itself.<br></br> Start with Satara, then explore anywhere.</p>
            
            </div>
            </div>
        </div>
        <WeatherCard className="weatherCard" weather={weather} />
        <div className="bottom-btn">
            <button onClick={() => navigate("/search")}>
      Search another city       
      <span className="material-symbols-outlined">
      chevron_right
</span> 
    </button>
            <button onClick={() => navigate(`/forecast/${weather.city}`)}>
      View Forecast
      <span className="material-symbols-outlined"> chevron_right
      </span>
    </button>
        </div>


        </>
    )
}