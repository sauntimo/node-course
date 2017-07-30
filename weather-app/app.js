
const yargs = require('yargs');

// don't need ".js" if it's javascript
const geocode = require( './geocode/geocode' );
const weather = require( './weather/weather' );

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address for which to fetch weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress( argv.address, ( errorMesage, geocodeResults ) => {
  if( errorMesage ){
    console.log( errorMesage );
  } else {
    weather.getWeather( geocodeResults, ( errorMesage, weatherResults ) => {
      if( errorMesage ){
        console.log( errorMesage );
      } else {
        var weatherNow = weatherResults.currentWeather;
        console.log( `It's ${weatherNow.temperature}C (feels like ${weatherNow.apparentTemperature}C) in ${ geocodeResults.address }.` );
      }
    });
  }
});
