console.log("Starting the application.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// Calling own modules functions
let result = notes.addNote();
console.log(result);

// Assignment
let sum = notes.addNums(3,22);
console.log(sum);

// operating system information
let user = os.userInfo();

// Writing the content in the file
fs.appendFile('greeting.txt', `Hello ${user.username}! `, (err) => {
  if(err){
    console.log("Content was not written in file.");
    throw error;
  } else{
    console.log("Content is written in the file.");
  }
});

// lodash isString Method
console.log(_.isString(true));
console.log(_.isString("Tanish"));

// lodash uniq Method
let uniqArray = _.uniq([1,1,1,2,2,3,4,5,5]);
console.log(uniqArray);
