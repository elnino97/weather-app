import React from "react";

import classes from "./WeatherDetails.module.css";
import { supportIEDate } from "../Utils/DateTools";

import { ReactComponent as Clear } from "../Assets/WeatherIcons/LightIcons/clear.svg";
import { ReactComponent as ClearNight } from "../Assets/WeatherIcons/LightIcons/clear-night.svg";
import { ReactComponent as Fog } from "../Assets/WeatherIcons/LightIcons/fog.svg";
import { ReactComponent as HeavyRain } from "../Assets/WeatherIcons/LightIcons/heavy-rain.svg";
import { ReactComponent as HeavySnow } from "../Assets/WeatherIcons/LightIcons/heavy-snow.svg";
import { ReactComponent as IsolatedClouds } from "../Assets/WeatherIcons/LightIcons/isolated-clouds.svg";
import { ReactComponent as IsolatedCloudsNight } from "../Assets/WeatherIcons/LightIcons/isolated-clouds-night.svg";
import { ReactComponent as LightRain } from "../Assets/WeatherIcons/LightIcons/light-rain.svg";
import { ReactComponent as LightSnow } from "../Assets/WeatherIcons/LightIcons/light-snow.svg";
import { ReactComponent as ModerateRain } from "../Assets/WeatherIcons/LightIcons/moderate-rain.svg";
import { ReactComponent as ModerateSnow } from "../Assets/WeatherIcons/LightIcons/moderate-snow.svg";
import { ReactComponent as Overcast } from "../Assets/WeatherIcons/LightIcons/overcast.svg";
import { ReactComponent as ScatteredClouds } from "../Assets/WeatherIcons/LightIcons/scattered-clouds.svg";
import { ReactComponent as ScatteredCloudsNight } from "../Assets/WeatherIcons/LightIcons/scattered-clouds-night.svg";
import { ReactComponent as Sleet } from "../Assets/WeatherIcons/LightIcons/sleet.svg";

import { ReactComponent as WindSpeed } from "../Assets/WeatherIcons/windspeed.svg";
import { ReactComponent as WindGust } from "../Assets/WeatherIcons/windgust.svg";
import { ReactComponent as WindDirection } from "../Assets/WeatherIcons/winddirection.svg";
import { ReactComponent as CloudCover } from "../Assets/WeatherIcons/cloudcover.svg";
import { ReactComponent as SeaPressure } from "../Assets/WeatherIcons/seapressure.svg";
import { ReactComponent as Precipitation } from "../Assets/WeatherIcons/precipitation.svg";

const weatherCodes = {
  clear: <Clear />,
  "clear-night": <ClearNight />,
  fog: <Fog />,
  "heavy-rain": <HeavyRain />,
  "heavy-snow": <HeavySnow />,
  "isolated-clouds": <IsolatedClouds />,
  "isolated-clouds-night": <IsolatedCloudsNight />,
  "light-rain": <LightRain />,
  "light-snow": <LightSnow />,
  "moderate-rain": <ModerateRain />,
  "moderate-snow": <ModerateSnow />,
  overcast: <Overcast />,
  "scattered-clouds": <ScatteredClouds />,
  "scattered-cloud-night": <ScatteredCloudsNight />,
  sleet: <Sleet />,
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const WeatherDetails = (props) => {
  const date = supportIEDate(
    props.currentSelectedWeather.forecastTimeUtc
  ).toLocaleString(undefined, {
    weekday: "long",
    hourCycle: "h24",
    hour: "2-digit",
    minute: "2-digit",
  });

  const windDirectionStyle = {
    transform: `rotate(${+props.currentSelectedWeather.windDirection}deg)`,
  };

  return (
    <div className={classes["card__main-bottom"]}>
      <div className={"row " + classes.temperature}>
        {weatherCodes[props.currentSelectedWeather.conditionCode]}
        <p>{`${Math.floor(props.currentSelectedWeather.airTemperature)}°`}</p>
      </div>
      <div className={"row " + classes["data-condition"]}>
        <p>
          {date}{" "}
          {capitalizeFirstLetter(props.currentSelectedWeather.conditionCode)}
        </p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div className={classes.icon}>
          <WindSpeed />
        </div>
        <p>{`Wind speed: ${props.currentSelectedWeather.windSpeed}ms`}</p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div className={classes.icon}>
          <WindGust />
        </div>
        <p>{`Wind gust: ${props.currentSelectedWeather.windGust}ms`}</p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div style={windDirectionStyle} className={classes.icon}>
          <WindDirection />
        </div>
        <p>{`Wind direction: ${props.currentSelectedWeather.windDirection}°`}</p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div className={classes.icon}>
          <CloudCover />
        </div>
        <p>{`Cloud cover: ${props.currentSelectedWeather.cloudCover}%`}</p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div className={classes.icon}>
          <SeaPressure />
        </div>
        <p>{`Sea level pressure: ${props.currentSelectedWeather.seaLevelPressure}`}</p>
      </div>
      <div className={"row " + classes["weather-data"]}>
        <div className={classes.icon}>
          <Precipitation />
        </div>
        <p>{`Total precipitation: ${props.currentSelectedWeather.totalPrecipitation}`}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
