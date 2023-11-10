const convertToCelsius = function(temperature) {
  output = (temperature - 32) * 5 / 9;
  return Math.round(output * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  output = temperature * 9 / 5 + 32;
  return Math.round(output * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
