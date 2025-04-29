import React from "react";
import "../styles/weather-card.scss";

type Props = {
  temperature: number;
  time: string;
  city: string;
  icon: string;
};

export const WeatherCard: React.FC<Props> = ({
  temperature,
  time,
  city,
  icon,
}) => {
  return (
    <div className="weather-card">
      <img src={icon} alt="weather icon" className="weather-card__picture" />

      <div className="weather-card__temperature">{temperature}°</div>
      <div className="weather-card__status">Today</div>
      <div className="weather-card__info">
        <div>Time: {time}</div>
        <div>City: {city}</div>
      </div>
    </div>
  );
};
