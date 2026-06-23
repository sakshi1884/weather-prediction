import * as React from "react";
import "./css/WeatherCard.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import { weatherAnimations } from "./weatherAnimations";
export default function WeatherCard({ weather }) {

  if (!weather) return null;
  console.log(weather);
const iconCode = weather.icon; 
  return (
    <div className="cardcontent">
      <Box>
        <Card
          sx={{
            width: "850px",
            maxWidth: "90vw",
            gap: "12px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "35px",
            color:"var(--color)",
            padding: "10px",
          }}
        >
          <CardContent className="weather-card-content">

        <div className="weather-top">

            <div className="weather-left">
            <h1 style={{fontSize:"60px"}}>{weather.city}</h1>
            <p>{weather.country}</p>

            <p className="condition">
                {weather.weather}
            </p>

            <h2 style={{fontSize:"70px"}}>{weather.temp}°C</h2>
            </div>

            <div className="weather-right">
            <DotLottieReact
                src={weatherAnimations[iconCode]}
                loop
                autoplay
            />
            </div>

        </div>

        <div className="weather-stats">
            <div className="stat-boxe">
            <h4>{weather.feelsLike}°C</h4>
            <ThermostatRoundedIcon sx={{ fontSize: 40 }}/>
            <p>Feels Like</p>
            
            </div>

            <div className="stat-boxe">
            <h4>{weather.humidity}%</h4>
            <AcUnitRoundedIcon sx={{ fontSize: 40 ,color:"var(--color)"}}/>
            <p>Humidity</p>
            </div>

            <div className="stat-boxe">
            <h4>{weather.windSpeed}</h4>
            <AirRoundedIcon sx={{ fontSize: 40 , color:"var(--color" }}/>
            <p>Wind Speed</p>
            </div>
        </div>

        </CardContent>
        </Card>
      </Box>
    </div>
  );
}