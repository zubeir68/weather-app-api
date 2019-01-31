const request = require("request");

let convertCelsius = num => (num - 32) / 1.8;

let getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/650e02cdf32d648a2cdc9dda02c9b10a/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let celsius = convertCelsius(body.currently.temperature);
        let apparentCelsius = convertCelsius(body.currently.apparentTemperature);
        callback(undefined, {
            celsius,
            apparentCelsius
        })
      } else {
        callback("Unable to fetch weather");
      }
    }
  );
};

module.exports = {
  getWeather,
  convertCelsius
};
