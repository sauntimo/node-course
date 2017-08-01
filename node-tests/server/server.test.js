const request = require( 'supertest' );
const expect = require( 'expect' );

var app = require( './server' ).app;

describe('Server', () => {
  describe('/', () => {
    it('should return error response', ( done ) => {
      request( app )
        .get( '/' )
        .expect( 404 )
        .expect((res) => {
          expect( res.body ).toInclude({
            error: 'Page not found.'
          })
        })
        .end( done );
    });
  });
  describe('/users', () => {
    it('should return my user object in an array', ( done ) => {
      request( app )
        .get( '/users' )
        .expect( 200 )
        .expect((res) => {
          expect( res.body ).toInclude({
            name: 'Tim',
            age: 29
          })
        })
        .end( done );
    });
  });
});
