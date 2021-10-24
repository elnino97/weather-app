import React from "react";

import classes from "./PrognosisCard.module.css";

import { ReactComponent as Clear } from "../Assets/WeatherIcons/DarkIcons/clear.svg";
import { ReactComponent as ClearNight } from "../Assets/WeatherIcons/DarkIcons/clear-night.svg";
import { ReactComponent as Fog } from "../Assets/WeatherIcons/DarkIcons/fog.svg";
import { ReactComponent as HeavyRain } from "../Assets/WeatherIcons/DarkIcons/heavy-rain.svg";
import { ReactComponent as HeavySnow } from "../Assets/WeatherIcons/DarkIcons/heavy-snow.svg";
import { ReactComponent as IsolatedClouds } from "../Assets/WeatherIcons/DarkIcons/isolated-clouds.svg";
import { ReactComponent as IsolatedCloudsNight } from "../Assets/WeatherIcons/DarkIcons/isolated-clouds-night.svg";
import { ReactComponent as LightRain } from "../Assets/WeatherIcons/DarkIcons/light-rain.svg";
import { ReactComponent as LightSnow } from "../Assets/WeatherIcons/DarkIcons/light-snow.svg";
import { ReactComponent as ModerateRain } from "../Assets/WeatherIcons/DarkIcons/moderate-rain.svg";
import { ReactComponent as ModerateSnow } from "../Assets/WeatherIcons/DarkIcons/moderate-snow.svg";
import { ReactComponent as Overcast } from "../Assets/WeatherIcons/DarkIcons/overcast.svg";
import { ReactComponent as ScatteredClouds } from "../Assets/WeatherIcons/DarkIcons/scattered-clouds.svg";
import { ReactComponent as ScatteredCloudsNight } from "../Assets/WeatherIcons/DarkIcons/scattered-clouds-night.svg";
import { ReactComponent as Sleet } from "../Assets/WeatherIcons/DarkIcons/sleet.svg";

import { ReactComponent as WindDirection } from "../Assets/WeatherIcons/windarrow.svg";

import { supportIEDate } from "../Utils/DateTools";

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

const PrognosisCard = (props) => {
  function handleClick() {
    props.handleClick(props.weatherIndex);
  }
  const date = supportIEDate(props.weatherData.forecastTimeUtc).toLocaleString(
    // Workaround needed to get dates to show in IE
    undefined,
    {
      hourCycle: "h24",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const windDirectionStyle = {
    transform: `rotate(${+props.weatherData.windDirection}deg)`,
  };

  return (
    <a
      href="#main__card"
      onClick={handleClick}
      className={`${classes.card} ${
        props.selectedIndex === props.weatherIndex ||
        (props.weatherIndex === 0 && !props.selectedIndex)
          ? classes.active
          : ""
      }`}
    >
      <div className={classes.card__top}>
        <p>{date}</p>
      </div>
      <div className={classes.card__bottom}>
        <div className={classes.condition__icon}>
          {weatherCodes[props.weatherData.conditionCode]}
        </div>
        <div className={classes.temperature}>{`${Math.floor(
          props.weatherData.airTemperature
        )}°`}</div>
        <div class={classes.winddirection}>
          <div style={windDirectionStyle}>
            <WindDirection />
          </div>
          <div>{`${props.weatherData.windSpeed} ms`}</div>
        </div>
      </div>
    </a>
  );
};

export default PrognosisCard;
