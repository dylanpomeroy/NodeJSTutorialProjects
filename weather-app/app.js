const request = require('request');

const secretManager = require('./secrets.js');

var secrets = secretManager.getSecrets();

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20streed%20philadelphia&key=${secrets.googleApiGeolocationKey}`,
    json: true,
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});