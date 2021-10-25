const formatWeatherData = (data) => {
  const timeRegex = /06:00|10:00|14:00|18:00|22:00|02:00/g; // to filter out specific weather times

  const filteredData = data.filter((i) => timeRegex.test(i.forecastTimeUtc));

  const dataFixedWeatherCodes = filteredData.map((i) => {
    return /22:00|02:00/g.test(i.forecastTimeUtc) &&
      /clear|isolated-clouds|scattered-clouds/.test(i.conditionCode)
      ? { ...i, conditionCode: i.conditionCode + "-night" }
      : i;
  });

  return dataFixedWeatherCodes;
};

export { formatWeatherData };
