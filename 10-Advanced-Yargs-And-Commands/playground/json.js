// var obj = {
//   name: "Tanish"
// }
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name":"Tanish", "age":"22"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some Title',
  body: 'Some Body'
}

// Original Note string
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json', originalNoteString);
var noteString = fs.readFileSync('note.json');

// note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
