import React from "react";
import nubisoftLogo from "../icons/nubisoft.svg";
import iconChoose from "../icons/choose.svg";
import "../styles/header.scss";

type Props = {
  selectedCity: string;
  onCityChange: (city: string) => void;
};

export const Header: React.FC<Props> = ({ selectedCity, onCityChange }) => {
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCityChange(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--left">
          <a
            href="https://nubisoft.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={nubisoftLogo}
              alt="Nubisoft logo"
              className="header__wrapper--icon"
            />
          </a>
          <h1 className="header__title">NubiWeather</h1>
        </div>

        <div className="header__wrapper--right">
          <div className="header__city">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="header__city--select"
            >
              <option className="header__city--name" value="Gliwice">
                Gliwice
              </option>
              <option className="header__city--name" value="Hamburg">
                Hamburg
              </option>
            </select>
            <img
              alt="choose icon"
              className="header__city--choose"
              src={iconChoose}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
