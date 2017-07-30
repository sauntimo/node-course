var somePromise = new Promise( ( resolve, reject ) => {

  setTimeout( () => {
    // resolve( 'Hey, it worked!' );
    reject( 'Epic fail :/' );
  }, 2000);

});

somePromise.then(
  ( message ) => console.log( 'Success: ', message ),
  ( errorMessage ) => console.log( 'Error: ', errorMessage )
);

// somePromise.then( function( value ) {
//   console.log( 'Resolved: ', value );
// }, function( reason ) {
//   console.log( 'Rejected: ', reason );
// });
