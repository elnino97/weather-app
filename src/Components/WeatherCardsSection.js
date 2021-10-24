import React from "react";
import PrognosisCard from "./PrognosisCard";
import classes from "./WeatherCardsSection.module.css";

import { Ellipsis as Loading } from "react-awesome-spinners";

const WeatherCardsSection = (props) => {
  function handleClick(index) {
    props.setCurrentSelectedWeather(index);
  }
  const sectionContent = (
    <>
      <h2
        className={classes.monthday__heading}
      >{`${props.monthDay.firstDate} - ${props.monthDay.secondDate}`}</h2>
      <div className={classes.cards__container}>
        {props.weatherData.map((i, key) => (
          <PrognosisCard
            selectedIndex={props.currentSelectedIndex}
            handleClick={handleClick}
            weatherIndex={key}
            key={key}
            weatherData={i}
          />
        ))}
      </div>
    </>
  );
  const sectionClasses = `${classes.section__weather} ${
    props.loading ? classes["section__weather-hide"] : ""
  }`;

  return (
    <section className={sectionClasses}>
      {!props.loading && props.weatherData.length ? sectionContent : null}
      {props.loading && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
    </section>
  );
};

export default WeatherCardsSection;
