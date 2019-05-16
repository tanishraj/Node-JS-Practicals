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
  notes.addNote(argv.title, argv.body);
} else if(command === 'list'){
  notes.getAll();
} else if(command === 'read') {
  notes.readNote(argv.title);
} else if(command === 'remove') {
  notes.removeNote(argv.title);
} else{
  console.log('command not recognized');
}
