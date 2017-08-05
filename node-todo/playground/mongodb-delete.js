const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect( 'mongodb://tsvm.webpack-games:27017/TodoApp', ( err, db ) => {
  if( err ){
    // prevent further execution
    return console.log( 'Unable to connect to Mongo DB server' );
  }

  console.log( 'Connected to Mongo DB server' );

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'eat lunch'
  // }).then( (res) => {
  //   console.log( res );
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'eat lunch'
  // }).then( ( response ) => {
  //   var res = response.result;
  //   if( res.ok ){
  //     console.log( `Deleted ${res.n} documents` );
  //   }
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then( ( response ) => {
  //   console.log( response );
  // });

  db.collection('Users').deleteMany({
    name: 'Tim'
  }).then( (res) => {
    console.log( res );
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5985abe68fb0e60f0b9f2a68')
  }).then( ( response ) => {
    console.log( response );
  });


  // db.close();
});
