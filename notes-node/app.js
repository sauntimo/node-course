console.log('starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

console.log( user );

fs.appendFile( 'greetings.txt', `Hello ${user.username}`, function(err){
    if(err){
        console.log( 'unable to write to file' );
    }
});

