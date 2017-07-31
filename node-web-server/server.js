const express = require( 'express' );
const hbs = require( 'hbs' );

var app = express();
hbs.registerPartials( __dirname + '/views/partials' );
app.set( 'view engine', 'hbs' );

// 'middleware'
app.use( express.static( __dirname + '/public' ) )

hbs.registerHelper( 'getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper( 'screamIt', ( text ) => {
  return text.toUpperCase();
});

app.get( '/', ( req, res ) => {
  res.render( 'index.hbs', {
    pageTitle: 'Homepage',
    welcomeMessage: 'Welcome to my little express site.',
  });
});

app.get( '/about', ( req, res ) => {
  res.render( 'about.hbs', {
    pageTitle: 'About page',
  });
});

app.get( '/bad', ( req, res ) => {
  res.send({
    errorMessage: 'Bad request'
  });
});

const PORT = 3000;

app.listen( PORT, () => {
  console.log( `Server is listening on port ${PORT}` )
});
