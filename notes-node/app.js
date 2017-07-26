console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');


console.log( _.isString(true) );
console.log( _.isString(7) );
console.log( _.isString('Tim') );

var filteredArray = _.uniq(['Tim', 7, 'Tim', 1, 2, 3, 4, 7, 'Tim']);
console.log( filteredArray );


// var res = notes.add(5,3);
// console.log( `Result: ${res}` );


// var user = os.userInfo();
// fs.appendFile( 'greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
//     if(err){
//         console.log( 'unable to write to file' );
//     }
// });

