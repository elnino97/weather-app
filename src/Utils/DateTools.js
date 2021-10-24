const supportIEDate = (dateString) => {
  // Necessary because need to support Internet Explorer, I guess
  const str = dateString.replace(
    /^(.*-[0-9][0-9])(\ )([0-9][0-9]\:.*$)/,
    "$1T$3"
  );
  const d = new Date(Date.parse(str));
  return d;
};

const getDates = (date1, date2) => {
  // To store the first date entry and the last one in an object for further use
  const options = {
    month: "long",
    day: "numeric",
  };
  const first = supportIEDate(date1);
  const second = supportIEDate(date2);
  return {
    firstDate: first.toLocaleString(undefined, options),
    secondDate: second.toLocaleString(undefined, options),
  };
};

export { supportIEDate, getDates };
