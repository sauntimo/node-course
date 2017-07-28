const request = require('request');
const yargs = require('yargs');

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

  var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {

  if( error ){

    console.log( 'Unable to connect to Google servers.' );

  } else if( body.status === 'ZERO_RESULTS' ){

    console.log( 'Unable to find that address.' );

  } else if( body.status === 'OK' ){

    var data = body.results[0];
    console.log( `Address: ${JSON.stringify(data.formatted_address)}` );
    for( var key in data.geometry.location ){
      console.log( `${key}: ${data.geometry.location[key]}` );
    }
  }

});
