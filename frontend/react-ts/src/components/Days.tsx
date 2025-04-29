import "../styles/days.scss";

type Props = {
  day: string;
  date: string;
  icon: string;
  tempDay: number;
  tempNight: number;
  description: string;
};

export const Days: React.FC<Props> = ({
  day,
  date,
  icon,
  tempDay,
  tempNight,
  description,
}) => {
  return (
    <div className="days__card">
      <div className="days__card-day">{day}</div>
      <div className="days__card-date">{date}</div>
      <img src={icon} alt="weather icon" className="days__card-icon" />
      <div className="days__card-temp">
        <span className="days__card-temp--day">+{tempDay}°</span>
        <span className="days__card-temp--night">+{tempNight}°</span>
      </div>
      <div className="days__card-desc">{description}</div>
    </div>
  );
};
