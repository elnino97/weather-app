import { useState } from "react";
import "./App.css";
import MainWeatherCard from "./Components/MainWeatherCard";
import WeatherCardsSection from "./Components/WeatherCardsSection";
import Header from "./Components/Header";

import { getDates } from "./Utils/DateTools";
import { places } from "./places";
import { formatWeatherData } from "./Utils/formatWeatherData";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [currentSelectedWeather, setCurrentSelectedWeather] = useState("");
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [monthDay, setMonthDay] = useState("");

  function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&"); // Replace special characters so fetch API doesn't fail
  }

  async function fetchWeatherData(event) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://floating-beyond-21381.herokuapp.com/https://api.meteo.lt/v1/places/${input}/forecasts/long-term` // Have to use cors-anywhere otherwise the API refuses to send data over
      );
      const data = await response.json();
      const formattedData = formatWeatherData(data.forecastTimestamps);
      const weatherDates = getDates(
        formattedData[0].forecastTimeUtc,
        formattedData[formattedData.length - 1].forecastTimeUtc
      );
      setIsLoading(false);
      setCurrentSelectedWeather(formattedData[0]);
      setMonthDay(weatherDates);
      setWeatherData(formattedData);
      setSuggestions([]);
      setCurrentSelectedIndex(0);
    } catch (e) {
      console.log(e);
    }
  }

  function setInputValue(value) {
    setInput(value);
    const regex = new RegExp(escapeRegExp(value), "gi");
    const autocompleteSuggestions = places.filter((i) => regex.test(i.name)); // Filter places that match regex pattern for autocomplete
    setSuggestions(autocompleteSuggestions.slice(0, 6));
  }

  function setDisplayWeather(index) {
    const selectedWeather = weatherData[index];
    setCurrentSelectedWeather(selectedWeather);
    setCurrentSelectedIndex(index);
  }

  function handleInputAutoComplete(name) {
    setInput(name);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainWeatherCard
          handleInputAutoComplete={handleInputAutoComplete}
          currentInput={input}
          autocomplete={suggestions}
          setInputValue={setInputValue}
          handleSearch={fetchWeatherData}
          currentSelectedWeather={currentSelectedWeather}
        />
        <WeatherCardsSection
          currentSelectedIndex={currentSelectedIndex}
          loading={isLoading}
          monthDay={monthDay}
          setCurrentSelectedWeather={setDisplayWeather}
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default App;
