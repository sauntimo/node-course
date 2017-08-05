// const MongoClient = require('mongodb').MongoClient;
// this does the same as above with ES6 destructuring
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log( obj );

MongoClient.connect( 'mongodb://tsvm.webpack-games:27017/TodoApp', ( err, db ) => {
  if( err ){
    // prevent further execution
    return console.log( 'Unable to connect to Mongo DB server' );
  }

  console.log( 'Connected to Mongo DB server' );

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if( err ){
  //     return console.log( 'Unable to insert todo', err );
  //   }
  //   console.log( JSON.stringify( res.ops, undefined, 4 ) );
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tim',
  //   age: 29,
  //   location: 'Bristol, UK'
  // }, (err, res) => {
  //   if( err ){
  //     return console.log( 'Unable to insert user', err );
  //   }
  //   // console.log( JSON.stringify( res.ops, undefined, 4 ) );
  //   console.log( res.ops[0]._id.getTimestamp() );
  // });

  db.close();
});
