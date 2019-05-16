console.log("Starting the application.");

// Thrid party modules/packages
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Custom modules/packages
const notes = require('./notes.js');

const argv = yargs.argv;
console.log(argv);

// getting input from user through command line argument
var command = argv._[0];
console.log("command: ", command);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  console.log(note);
  if(note){
    console.log("Note created.");
    console.log("-------------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else{
    console.log("Note title already taken.");
  }
} else if(command === 'list'){
  let allNotes = notes.getAll();
  console.log("------------------------")
  console.log("      All the Notes     ");
  console.log("------------------------")

  allNotes.map((item) => {
    console.log(`Title: ${item.title}; Body: ${item.body}`);
  })
  console.log("------------------------");
} else if(command === 'read') {
  var noteRead = notes.readNote(argv.title);
  var message = noteRead ? 'Note was read.' : 'Note not found.';
  console.log(message);
} else if(command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
  console.log(message);
} else{
  console.log('command not recognized');
}
