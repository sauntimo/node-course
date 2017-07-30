const request = require('request');

var geocodeAddress = ( address, callback ) => {

	var encodedAddress = encodeURIComponent( address );

	request({
	  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	  json: true
	}, (error, response, body) => {

	  if( error ){

	    callback( 'Unable to connect to Google servers.' );

	  } else if( body.status === 'ZERO_RESULTS' ){

	    callback( 'Unable to find that address.' );

	  } else if( body.status === 'OK' ){
			var data = body.results[0];
			callback( undefined, {
				address: data.formatted_address,
				latitude: data.geometry.location.lat,
				longitude: data.geometry.location.lng
			});
	  }
	});
}

module.exports = {
	geocodeAddress
};
