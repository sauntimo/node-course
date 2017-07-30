const request = require('request');

const DARKSKY_API_KEY = '0ad23e20a0accf36064b25d676d45e8f';

var getWeather = ( objAddress, callback ) => {

	request({
	  url: `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${objAddress.latitude},${objAddress.longitude}?units=si`,
	  json: true
	}, (error, response, body) => {

    if( !error & response.statusCode === 200 ){
      callback( undefined, {
        currentWeather: body.currently
      });
    } else {
      callback( 'Unable to fetch weather.' );
    }
    
	});
}

module.exports = {
	getWeather
};
