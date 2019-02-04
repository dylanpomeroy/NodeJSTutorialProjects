console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    
    note === undefined ? 
        console.log('A note with that title aready exists')
        : notes.logNote(note);

} else if (command === 'list') {
    notes.getAll();

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    console.log(note === undefined ? `No notes with title "${argv.title}" are saved.`
        : notes.logNote(note));

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note with title "${argv.title}" removed.` : `Note with title "${argv.title}" does not exist.`
    console.log(message);
    
} else {
    console.log('Command not recognized');

}