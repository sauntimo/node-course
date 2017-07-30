var asyncAdd = (a, b) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      if( typeof a === 'number' && typeof b === 'number' ){
        resolve( a + b );
      } else {
        reject( 'Arguments must be numbers' );
      }
    }, 1500);
  });
}


// when chainging promises, it might be easier to have one error handler
// at the end using .catch()

asyncAdd( 4, 7 ).then( ( res ) => {
  console.log( 'Result: ' + res );
  return asyncAdd( res, 46 );
}).then( ( res ) => {
  console.log( 'Should be 57' );
  console.log( 'Result: ' + res );
}).catch( ( errorMesage ) => {
  console.log( errorMesage );
});


// var somePromise = new Promise( ( resolve, reject ) => {
//
//   setTimeout( () => {
//     // resolve( 'Hey, it worked!' );
//     reject( 'Epic fail :/' );
//   }, 2000);
//
// });
//
// somePromise.then(
//   // resolved handler
//   ( message ) => console.log( 'Success: ', message ),
//   // rejected handler
//   ( errorMessage ) => console.log( 'Error: ', errorMessage )
// );

// somePromise.then( function( value ) {
//   console.log( 'Resolved: ', value );
// }, function( reason ) {
//   console.log( 'Rejected: ', reason );
// });
