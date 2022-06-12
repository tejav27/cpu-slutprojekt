import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import sun from "../../assets/sun.gif"
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const Weather = () => {
  const [weather, setWeather] = useState({
    description: "",
    temp: 0,
    feelsLike: 0,
    minTemp: 0,
    maxTemp: 0,
    name: "",
  });

  useEffect(() => {
    const getWeather = async () => {
      // const response = await axios.get(
      //     "https://api.openweathermap.org/data/2.5/weather?q=liljeholmen&appid=f5d83d5afb5aa05f7dfcec59980e030f&&units=metric"
      //   );
      //   setWeather({
      //     description: response.data.weather[0].description,
      //     temp: response.data.main.temp,
      //     feels: response.data.main.feels_like,
      //     min: response.data.main.temp_min,
      //     max: response.data.main.temp_max,
      //     name: response.data.name,
      //   });
        setWeather({
          description:"sunny",
          temp: 18,
          feels: 12,
          min: 11,
          max: 17,
          name: "Fruängen",
        });
      };
    getWeather();
  }, []);


  return (
    <div className="weather-wrapper">
      <div className="main-weather">
        <img
          src={sun}
          alt="icon" width='40px'
          />
          <h5>{weather.name}</h5>
          <h6>{Math.ceil(weather.temp)}°c</h6>
          <h6>{weather.description}</h6>
      </div>

      <div className="other-info">
          <p>Feels Like : {Math.ceil(weather.feels)}°C</p>
          <p>Min Temp: {Math.ceil(weather.min)}°C</p>
          <p>Max Temp: {Math.ceil(weather.max)}°C</p>
      </div>

    </div>
  );
};