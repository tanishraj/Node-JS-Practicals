console.log("Starting the application.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let result = notes.addNote();
console.log(result);

// Assignment
let sum = notes.addNums(3,22);
console.log(sum);

let user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username}! `, (err) => {
  if(err){
    console.log("Content was not written in file.");
    throw error;
  } else{
    console.log("Content is written in the file.");
  }
});
