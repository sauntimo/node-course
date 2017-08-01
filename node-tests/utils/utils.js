module.exports = {

  asyncAdd: ( a, b, callback ) => {
    setTimeout( () => {
      callback( a + b );
    }, 1000);
  },

  asyncSquare: ( x, callback ) => {
    setTimeout( () => {
      callback( Math.pow( x, 2) );
    }, 1000);
  },


  add: (a, b)  => a + b,
  square: (x) => Math.pow( x, 2 ),
  setName: ( user, fullName ) => {
    var names = fullName.split( ' ' );
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
  }
}
