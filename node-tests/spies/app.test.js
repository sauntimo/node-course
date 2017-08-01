const expect = require( 'expect' );
const rewire = require( 'rewire' );

var app = rewire( './app' );

describe( 'App', () => {

  var db = {
    saveUser: expect.createSpy()
  };

  // rewire - use this fake method rather than the real one
  app.__set__( 'db', db );

  it( 'should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy( 'Tim', 29 );
    expect(spy).toHaveBeenCalledWith( 'Tim', 29 );
  });

  it('should call saveUser with user object', () => {
    var email = 'example@example.com';
    var password = 'abc123';
    app.handleSignup( email, password );
    expect( db.saveUser ).toHaveBeenCalledWith({ email, password });
  });

});
