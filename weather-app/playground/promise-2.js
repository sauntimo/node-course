const request = require( 'request' );

var geocodeAddress = ( address ) => {
  return new Promise( ( resolve, reject ) => {

    var encodedAddress = encodeURIComponent( address );

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {

      if( !error
          && response.statusCode === 200
          && body.status === 'OK' ){
        var data = body.results[0];
        resolve({
          address: data.formatted_address,
          latitude: data.geometry.location.lat,
          longitude: data.geometry.location.lng
        });
      } else {
        reject( 'Unable to geocode address' );
      }
    });
  });
};

geocodeAddress( 'BS1 5SY' ).then( ( location ) => {
  console.log( JSON.stringify( location, undefined, 4 ) );
}, ( errorMesage ) => {
  console.log( errorMesage );
});
