const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5/9);
  let roundNum = Math.round(celsius * 10) / 10;
  return roundNum;
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * (9/5)) + 32;
  let roundNum = Math.round(fahrenheit * 10) / 10;
  return roundNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
