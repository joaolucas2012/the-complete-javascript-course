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
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

// Global variables
const firstName = 'Jonas';
calcAge(1991);
