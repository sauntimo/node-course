const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://tsvm.webpack-games:27017/TodoApp', ( err, db ) => {
  if( err ){
    // prevent further execution
    return console.log( 'Unable to connect to Mongo DB server' );
  }

  console.log( 'Connected to Mongo DB server' );

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5985f3ebf7c4c56affa54a55')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //     console.log( result );
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59860630f7c4c56affa54a56')
  }, {
    $set: {
      name: 'Timothy'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
      console.log( result );
  });


  // db.close();
});
