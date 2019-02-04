console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Dylan', 1, 'Dylan', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Dylan'));

// console.log(`7 + -9 = ${notes.add(7, -9)}`);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });
