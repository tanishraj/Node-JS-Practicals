// Third party modules/packages
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Custom modules/packages
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all the notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

// getting input from user through command line argument
var command = argv._[0];
console.log("command: ", command);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log(note);
    if (note) {
        console.log("Note created.");
        console.log("-------------");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log("Note title already taken.");
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log("------------------------")
    console.log("      All the Notes     ");
    console.log("------------------------")

    allNotes.map((item) => {
        console.log(`Title: ${item.title}; Body: ${item.body}`);
    })
    console.log("------------------------");
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found.');
        notes.logNote(note);
    } else {
        console.log('Note not found.');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);
} else {
    console.log('command not recognized');
}
