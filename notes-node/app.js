const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};
const bodyOptions = {
    describe: 'The body content to set for the note',
    demand: true,
    alias: 'b',
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions,
    })
    .command('list', 'List all existing notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions,
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    
    note === undefined ? 
        console.log('A note with that title aready exists')
        : notes.logNote(note);

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note))

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