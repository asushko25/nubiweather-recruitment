export type WeatherData = {
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    pressure_mb: number;
    precip_mm: number;
    wind_kph: number;
    condition: {
      icon: string;
    };
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          icon: string;
          text: string;
        };
      };
    }[];
  };
};
