import React from "react";
import "../styles/weather-details.scss";
import tempIcon from "../icons/temperature.svg";
import pressureIcon from "../icons/pressure.svg";
import precipitationIcon from "../icons/precipitation.svg";
import windIcon from "../icons/wind.svg";
import cloudImg from "../images/cloud.png";

type Props = {
  feelsLike: number;
  pressure: number;
  precipitation: string;
  wind: string;
};

export const WeatherDetails: React.FC<Props> = ({
  feelsLike,
  pressure,
  precipitation,
  wind,
}) => {
  return (
    <div className="weather__details">
      <div className="weather__details--item">
        <img src={tempIcon} alt="temp" />
        <span>Feels like: {feelsLike}°C</span>
      </div>
      <div className="weather__details--item">
        <img src={pressureIcon} alt="pressure" />
        <span>Pressure: {pressure} mb</span>
      </div>
      <div className="weather__details--item">
        <img src={precipitationIcon} alt="precipitation" />
        <span>Precipitation: {precipitation}</span>
      </div>
      <div className="weather__details--item">
        <img src={windIcon} alt="wind" />
        <span>Wind: {wind}</span>
      </div>

      <img src={cloudImg} alt="cloud" className="weather__details--image" />
    </div>
  );
};
