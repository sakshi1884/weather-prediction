import { useState, useEffect } from "react";
import * as React from "react";
import "./css/ForecastCard.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import { weatherAnimations } from "./weatherAnimations";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function ForecastCard({forecast}){

    if(!forecast){
        return null;
    }
    console.log(forecast);
     const iconCode = forecast.icon;    
    return (
        <>
        <Card  sx={{
    boxShadow: "none",
    maxWidth:"600px",
     background:"rgba(255,255,255,0.1)",
    backdropFilter:"blur(10px)",
    border:"1px solid rgba(255,255,255,0.15)",
    borderRadius:"15px",
    padding:"2px",
    margin:"10px"
  }}>
            <CardContent className="weather-card-content">

        <div className="weather-top">
           

            <div className="weather-left">
                

            <p className="condition">
                {forecast.weather}
            </p>
             <p style={{color:"white"}}>{forecast.date}</p>
           

            <h2>{forecast.temp}°C</h2>

            <DotLottieReact
                src={weatherAnimations[iconCode]}
                loop
                autoplay
            />
            </div>

            
          

        </div>

        <div className="weather-stats">
            <div className="stat-box">
            <h4>{forecast.feelsLike}°C</h4>
            <ThermostatRoundedIcon sx={{ fontSize: 30 }}/>
            <p>Feels Like</p>
            
            </div>

            <div className="stat-box">
            <h4>{forecast.humidity}%</h4>
            <AcUnitRoundedIcon sx={{ fontSize: 30 }}/>
            <p>Humidity</p>
            </div>

            <div className="stat-box">
            <h4>{forecast.windSpeed}</h4>
            <AirRoundedIcon sx={{ fontSize: 30 }}/>
            <p>Wind Speed</p>
            </div>
        </div>

        </CardContent>
        </Card>
        </>
    )
}