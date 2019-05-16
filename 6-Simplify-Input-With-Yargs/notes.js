console.log("Starting notes.js");

let addNote = (title, body) => {
  console.log("Adding note: ", title, body);
}

let getAll = () => {
  console.log("Getting All Notes.");
}

let readNote = (title) => {
  console.log("Note that is being read is: ", title);
}

let removeNote = (title) => {
  console.log("Note that is being removed is: ", title);
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  readNote: readNote,
  removeNote: removeNote
};
