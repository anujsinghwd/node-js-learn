console.log('Starting Node app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes');

var user = os.userInfo();

fs.appendFile('greet.txt', `Hello ${user.username}! \n`, function(err){
  if(err){
    console.log('Unable to write file');
  }
});
