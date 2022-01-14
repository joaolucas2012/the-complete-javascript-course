'use strict';
/***************** GLOBAL SCOPE *****************/

// Function defined in the global scope
function calcAge(birthYear) {
  // FUNCTION SCOPE
  const age = 2037 - birthYear;

  // This function can access the global variables
  // console.log(firstName);

  function printAge() {
    // ANOTHER FUNCTION SCOPE
    // This function can access the parent function variables and global variables
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // BLOCK SCOPE
      var millenial = true;

      /* Creating NEW variable with same name as outer scope's variable */

      // The Javascript will search for the firstName in the current scope, and it is in the current scope, so the firstName will be 'Steven' instead 'Jonas'
      const firstName = 'Steven';

      // Reassigning outer scope variables
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // This add function can just be accessed inside of this block scope
      function add(a, b) {
        return a + b;
      }
    }
    // The function scope cannot access the block scope variables
    // console.log(str);

    // var variables can be accessed outside the block scope, cause they are function scoped
    console.log(millenial);

    // The function scope cannot access the block scope functions (just in strict mode)
    // add(2, 3);

    // The output was changed inside the block scope
    console.log(output);
  }
  printAge();

  return age;
}

// Global variables
const firstName = 'Jonas';
calcAge(1991);

// Global scope cannot access variables declared in the function scopes (inner functions)
// console.log(age);
// printAge();

///////////////////////////////////////////////////

/*
// HOISTING AND TDZ (TEMPORAL DEAD ZONE)
// The temporal dead zone starts from the beginning of the code (global scope) to the point where the variable is declared

// Var variables are hoisted, but their value is undefined when they're called before declaration
console.log(me);

// Let and const variables aren't hoisted, so they can't be accessed before initialization, and they are in the temporal dead zone before their initialization
console.log(job);
console.log(year);

// Variables
var me = 'João Lucas';
let job = 'programmer';
const year = 2000;

// Function declarations can be accessed before their declaration, cause they're hoisted
console.log(addDecl(2, 3));

// var Function expressions and var arrow functions cannot be called before their initialization, cause they are hoisted, but their value is undefined
console.log(addExpr(2, 3));

// const Function expressions and const arrow functions cannot be called before their initialization, cause they aren't hoisted
console.log(addArrow(2, 3));

// Functions
function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Example

// Here the function declaration is called, because it is hoisted, but the var variable at this point is undefined by its hoisting, and because of it, the value returned by the function doesn't make any sense
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// If I type "window" in the console, I can see the global object properties of Javascript, and var variables are added to the global object as a property too
var x = 1;

// let and const variables aren't added to the global object as properties
let y = 2;
const z = 3;

// This returns true if the variable is a property or false if it's not
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/
///////////////////////////////////////////////////

// THE THIS KEYWORD IN PRACTICE
/*
// The this keyword points to the Javascript object window
console.log(this);

// Regular functions point to themselves, but their value is undefined
const calcAgeRegular = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeRegular(2000);

// Arrow functions point to their parent scope, or their parent functions
// In this case, the this keyword points to the global scope, that is the Javascript object window
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(2000);

// The this keyword points to the object that is calling the method. In this case, it pointed to the joaoLucas object, that is the owner of the method
// this pointed to the 'joaoLucas' that is calling the calcAge() method, and not to the 'joaoLucas' object in witch the calcAge() method is declared!
const joaoLucas = {
  year: 2000,
  calcAgeMethod: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
joaoLucas.calcAgeMethod();

// Here I copied the calcAgeMethod value of joaoLucas object and I stored it inside the f variable
const f = joaoLucas.calcAgeMethod;
// f became just a regular function call, and because of it, the this keyword points to undefined
// f();

*/
///////////////////////////////////////////////////
/*
// REGULAR FUNCTIONS VS ARROW FUNCTIONS IN PRACTICE:

// When I declare a var variable in the global scope, it creates a property in the Javascript window object
// var firstName = 'Matilda';

// An object does not have its own scope, its simply the way that it is literally declared
const joaoLucas = {
  firstName: 'João',
  year: 2000,
  calcAgeMethod: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // --> If I'm going to declare a function inside another in an object, that second function must be an arrow function, in case I decide to use the this keyword.
    // --> Since the arrow function doesn't have this keyword pointing to itself, it will point to the this keyword of the function in which it was declared.
    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // As mentioned before, arrow functions don't have a this keyword. In this case, it will point to the Javascript object window, its parent function (global scope)
  greet: () => {
    console.log(`Hey ${this.firstName}`);

    // Here the result will be the window object
    console.log(this);
  },
};
joaoLucas.greet();

// When we try to get an object property that not exists, it will return undefined
// Here the result will be the window object name Matilda, it is equal to "window.firstName", and in the global scope, the firstName is Matilda
console.log(this.firstName);
joaoLucas.calcAgeMethod();

// Arguments keyword
// It returns an array with the arguments received by a function
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// An arrow functions doesn't have the arguments keyword
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8);

*/
///////////////////////////////////////////////////

// PRIMITIVES VS. OBJECTS (PRIMITIVES VS. REFERENCE TYPES)
// The 'age' points is created in the call stack
// The 'age' points to the memory address where it is located, and this address is where the value 30 is stored
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// The 'me' is created in the call stack
// The real object is created in the heap memory
// The 'me' points to the memory address where it is located, and this address points to the heap memory address that points to the real object value
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
