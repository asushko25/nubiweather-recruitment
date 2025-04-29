import React, { useEffect, useState } from "react";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherDetails } from "../components/WeatherDetails";
import { Days } from "../components/Days";
import "../styles/main.scss";
import { WeatherData } from "../types/weather";

type Props = {
  city: string;
};

const API_KEY = "b044f42c9e3b46f8b11222613252804";

const getWeatherUrl = (city: string): string => {
  return `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&aqi&days=7`;
};


export const Main: React.FC<Props> = ({ city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(getWeatherUrl(city))
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [city]);

  if (!weather) return <div>Loading...</div>;

  return (
    <main className="main">
      <div className="main__today">
        <WeatherCard
          temperature={weather.current.temp_c}
          time={weather.location.localtime.split(" ")[1]}
          city={weather.location.name}
          icon={`https:${weather.current.condition.icon}`}
        />
        <WeatherDetails
          feelsLike={weather.current.feelslike_c}
          pressure={weather.current.pressure_mb}
          precipitation={
            weather.current.precip_mm === 0
              ? "No precipitation"
              : `${weather.current.precip_mm} mm`
          }
          wind={`${weather.current.wind_kph} km/h`}
        />
      </div>

      <div className="main__week">
        {weather.forecast.forecastday.map((day, index) => {
          const dateObj = new Date(day.date);
          const dayName = dateObj.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <Days
              key={index}
              day={index === 0 ? "Today" : dayName}
              date={day.date.slice(5)}
              icon={`https:${day.day.condition.icon}`}
              tempDay={Math.round(day.day.maxtemp_c)}
              tempNight={Math.round(day.day.mintemp_c)}
              description={day.day.condition.text}
            />
          );
        })}
      </div>
    </main>
  );
};
