const fs = require('fs');

let fetchNotes = () => {
  try{
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch(e){
    return [];
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title: title,
    body: body
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

let getAll = () => {
  return fetchNotes();
}

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
  debugger
  // debugger;
  // break on this line and repl to output note
  // use read command with --title
  console.log('--------------------');
  console.log(`Title: ${note.title}`);
  console.log(`Title: ${note.body}`);
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote,
  logNote: logNote,
};
