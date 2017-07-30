
const yargs = require('yargs');
const axios = require('axios');

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

const DARKSKY_API_KEY = '0ad23e20a0accf36064b25d676d45e8f';

var encodedAddress = encodeURIComponent( argv.address );
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get( geocodeUrl )
  .then( ( response ) => {

    if( response.data.status === 'ZERO_RESULTS' ){
      throw new Error( 'Unable to find that address.' );
    }

    global.formatted_address = response.data.results[0].formatted_address;
    var location = response.data.results[0].geometry.location;
    var weatherUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${location.lat},${location.lng}?units=si`;

    return axios.get( weatherUrl );

  })
  .then( ( response ) => {

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log( `It's ${temperature}C (feels like ${apparentTemperature}C) in  ${global.formatted_address}.` );
    
  })
  .catch( (e) => {

    if( e.code === 'ENOTFOUND' ){
      console.log( 'Unable to connect to geocode API servers.' );
    } else {
      console.log( e.message );
    }

});
