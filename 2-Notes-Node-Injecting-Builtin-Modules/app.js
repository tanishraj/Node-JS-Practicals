console.log("Starting the application.");

const fs = require('fs');
const os = require('os');

let user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username}! `, (err) => {
  if(err){
    console.log("Content was not written in file.");
    throw error;
  } else{
    console.log("Content is written in the file.");
  }
});
