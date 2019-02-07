const request = require('request');
const secretManager = require('../secrets.js');

var secrets = secretManager.getSecrets();

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${secrets.darkSkyApiKey}/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports = {
    getWeather,
};
