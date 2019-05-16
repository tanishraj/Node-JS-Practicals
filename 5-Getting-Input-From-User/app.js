console.log("Starting the application.");

// Thrid party modules/packages
const fs = require('fs');
const _ = require('lodash');

// Custom modules/packages
const notes = require('./notes.js');

// getting input from user through command line argument
var command = process.argv[2];
console.log("command: ", command);

if(command === 'add'){
  console.log('Adding new note');
} else if(command === 'list'){
  console.log('Listing all notes');
} else if(command === 'read') {
  console.log('reading all notes');
} else if(command === 'remove') {
  console.log('removing note');
} else{
  console.log('command not recognized');
}
