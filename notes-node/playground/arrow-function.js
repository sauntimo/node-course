var square = (x) => {
  var rst = x**2;
  return rst;
}

// can remove brackets and return
var square2 = (x) => x**2;

// if only one argument, don't need brackets
var sqaure3 = x => x**2;

console.log( square(9) );
console.log( square2(12) );
console.log( square2(15) );


var user = {
  name: 'Tim',
  sayHi: () => {
    // this doesn't work, it outputs the global arguments variable
    console.log( arguments );
    // this doesn't work because arroew functions don't bind this from their parent into their lexical scope
    console.log( `Hi, I'm ${this.name}` );
  },
  sayHiAlt () {
    // this works
    console.log( arguments )
    // this works
    console.log( `Hi, I'm ${this.name}` );
  }
}

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);
