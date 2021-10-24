import React from "react";

import WeatherDetails from "./WeatherDetails";
import Input from "./Input";
import classes from "./MainWeatherCard.module.css";

const MainWeatherCard = (props) => {
  function handleAutoComplete(name) {
    props.handleInputAutoComplete(name);
  }

  function handleInput(event) {
    props.setInputValue(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    props.handleSearch();
  }
  return (
    <div id="main__card" className={classes.card__main}>
      <Input
        currentInput={props.currentInput}
        suggestions={props.autocomplete}
        handleInput={handleInput}
        handleSearch={handleSearch}
        handleAutoComplete={handleAutoComplete}
      />
      {!!Object.keys(props.currentSelectedWeather).length && (
        <WeatherDetails currentSelectedWeather={props.currentSelectedWeather} />
      )}
    </div>
  );
};

export default MainWeatherCard;
