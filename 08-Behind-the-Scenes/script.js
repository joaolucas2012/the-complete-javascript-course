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
