const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20streed%20philadelphia&key=AIzaSyBwC6Gq0KSf4ZFZ5ItDxk-Rl72i0a-DiNc',
    json: true,
}, (error, response, body) => {
    console.log(body);
});