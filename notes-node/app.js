console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(5,3);
console.log( `Result: ${res}` );




// var user = os.userInfo();
// fs.appendFile( 'greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
//     if(err){
//         console.log( 'unable to write to file' );
//     }
// });

