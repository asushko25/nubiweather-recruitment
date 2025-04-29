import React from "react";
import { Days } from "./Days";

type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      icon: string;
      text: string;
    };
  };
};

type Props = {
  forecast: ForecastDay[];
};

export const DaysList: React.FC<Props> = ({ forecast }) => {
  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="days__list">
      {forecast.map((day) => (
        <Days
          key={day.date}
          day={getDayName(day.date)}
          date={day.date}
          icon={`https:${day.day.condition.icon}`}
          tempDay={Math.round(day.day.maxtemp_c)}
          tempNight={Math.round(day.day.mintemp_c)}
          description={day.day.condition.text}
        />
      ))}
    </div>
  );
};
