const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://tsvm.webpack-games:27017/TodoApp', ( err, db ) => {
  if( err ){
    // prevent further execution
    return console.log( 'Unable to connect to Mongo DB server' );
  }

  console.log( 'Connected to Mongo DB server' );

  // db.collection( 'Todos' ).find({
  //   _id: new ObjectID( "5985ae17f7c4c56affa54a4d" )
  // }).toArray().then( (docs) => {
  //   console.log( 'todos:' );
  //   console.log( JSON.stringify( docs, undefined, 4 ) );
  // }, (err) => {
  //   console.log( 'unable to fetch todos', err );
  // });

  db.collection( 'Users' ).find({
    name: 'Tim'
  }).toArray().then( (docs) => {
    console.log( 'Users:' );
    console.log( JSON.stringify( docs, undefined, 4 ) );
  }, (err) => {
    console.log( 'unable to fetch todos', err );
  });

  db.collection( 'Todos' ).find().count().then( (count) => {
    console.log( `todos count: ${count}` );
  }, (err) => {
    console.log( 'unable to fetch todos', err );
  });

  // db.close();
});
