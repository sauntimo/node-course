const express = require( 'express' );

var app = express();

app.get( '/', ( req, res ) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});

app.get( '/users', ( req, res ) => {
  res.status(200).send([
    {
      name: 'Tim',
      age: 29
    },
    {
      name: 'Bob',
      age: 30
    },
    {
      name: 'Alice',
      age: 27
    }
  ]);
});


app.listen( 3000 );

module.exports.app = app;
