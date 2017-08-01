const expect = require( 'expect' );

const utils = require( './utils' );

describe( 'Utils', () => {

  describe('sync', () => {

    describe('#square', () => {
      it('should square a number', () => {
        var res = utils.square( 12 );
        expect( res ).toBe( 144 ).toBeA('number');
      });
    });

    describe('#add', () => {
      it('should add two numbers', () => {
        var res = utils.add( 33, 11 );
        expect( res ).toBe( 44 ).toBeA('number');
      });
    });

  });

  describe('async', () => {
    // async test: use done() to tell mocha when we're finished with our assertions

    describe('#asyncAdd', () => {
      it('should async add two numbers', ( done ) => {
        utils.asyncAdd( 4, 3, ( sum ) => {
          expect( sum ).toBe( 7 ).toBeA( 'number' );
          done();
        });
      });
    });

    describe('#asyncSquare', () => {
      it('should async square a number', ( done ) => {
        utils.asyncSquare( 15, ( res ) => {
          expect( res ).toBe( 225 ).toBeA( 'number' );
          done();
        });
      });
    });

  });
});



describe('playground', () => {
  it('should set first and last names', () => {
    var user = {
      age: 29,
      location: 'Bristol'
    };
    var res = utils.setName( user, 'Tim Saunders' );
    expect( res )
      .toBeA( 'object' )
      .toInclude({
        firstName: 'Tim',
        lastName: 'Saunders'
      });
  });
});

// it('should expect some values',() => {
//   // expect(12).toNotBe( 12 );
//   // expect( { name: 'Tim' } ).toEqual( { name: 'Tim' } );
//   // expect( [1,2,3,4] ).toExclude( 5 );
//   expect({
//     name: 'Tim',
//     age: 29,
//     location: 'Bristol'
//   }).toInclude({
//     name: 'Tim'
//     // name: 'Dave'
//   });
//
// });
