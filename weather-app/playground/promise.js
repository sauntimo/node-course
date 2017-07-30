var somePromise = new Promise( ( resolve, reject ) => {

  setTimeout( () => {
    // resolve( 'Hey, it worked!' );
    reject( 'Epic fail :/' );
  }, 2000);

});

somePromise.then( ( message ) => {
  console.log( 'Success: ', message );
}, ( erorrMessage ) => {
  console.log( 'Error: ', errorMessage );
});
