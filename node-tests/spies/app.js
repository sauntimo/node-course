var db = require( './db.js' );


module.exports.handleSignup = ( email, password ) => {

  // check if email already exists

  // save user to db ES6 syntax where prop = val
  db.saveUser({
    email,
    password
  })

  // sned email to user

};
