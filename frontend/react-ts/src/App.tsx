import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.scss";

function App() {
  const [selectedCity, setSelectedCity] = useState("Gliwice");

  return (
    <div className="weatherapp">
      <Header selectedCity={selectedCity} onCityChange={setSelectedCity} />
      <Main city={selectedCity} />
    </div>
  );
}

export default App;
