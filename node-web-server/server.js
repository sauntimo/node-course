const express = require( 'express' );
const hbs = require( 'hbs' );
const fs = require( 'fs' );

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials( __dirname + '/views/partials' );
app.set( 'view engine', 'hbs' );

// 'middleware'


app.use( (req, res, next) => {
  var now = new Date().toString();
  var str_log = `${now}: ${req.method} ${req.url}`;
  console.log( str_log );
  fs.appendFile( 'server.log', str_log + '\n', ( err ) => {
    if( err ){
      console.log( 'Unable to append to server.log.' );
    }
  });
  next();
});

// app.use( (req, res, next) => {
//   res.render( 'maintenance.hbs', {
//       pageTitle: 'Site is down for maintenance'
//   });
// });

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

app.listen( port, () => {
  console.log( `Server is listening on port ${port}` )
});
