// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////////////////

// SETTING UP PRETTIER AND VS CODE
// The Prettier Extension transform every single quotes in double quotes by default

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - 2001;
*/

// Go to user snippets in the VS Code, and set:
/*
"Print to console": {
  "scope": "javascript,typescript",
  "prefix": "log",
  "body": ["console.log();"],
  "description": "Log output to console"
}
*/
// Every time I write "log", I can press enter and it will be replaced by "console.log();"
// console.log();

///////////////////////////////////////////////////

// INSTALLING NODE.JS AND SETTING UP A DEV ENVIRONMENT

// Those tools reload the html pages automatically

// Install Live Server Extension in VS Code
// Install Node.JS

/*
// DISCOVER THE VERSION OF NODE.JS I HAVE INSTALLED:
--> Just open the terminal and type:
node -v

// INSTALL LIVE SERVER ON THE TERMINAL:
--> Just go to the terminal and type:
npm install live-server -g
--> If it's on MAC, you have to type:
sudo npm install live-server -g

// TO USE THE LIVE SERVER VIA THE TERMINAL:
--> Just go to the terminal and type:
live-server

// EXPLANATION ABOUT THE INSTALLATION:
--> npm is the Node Package Manager, a program for downloading tools.
--> Then comes install, which is the command to install something.
--> Then comes the name of the tool we want to install.
--> -g means the tool must be installed globally.
*/

///////////////////////////////////////////////////

// SOLVING A PROBLEM

// PROBLEM 1:
/* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." */

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
/* 
- What is temperature amplitude? Answer:  difference between highest and lowest temperature
- How to compute the max and min temperatures?
- What is a sensor error? And what to do?
*/

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find max value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

*/

// PROBLEM 2:
/* Function should now receive 2 arrays of temps */

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/*
const calcTempAmplitudeNew = (temps1, temps2) => {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 67, 8, -2], [3, 6, 9]);
console.log(amplitudeNew);

*/

///////////////////////////////////////////////////

// SOLVING ANOTHER PROBLEM BY MYSELF

/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] 
*/

// 1) Understanding the problem
// - How to count similar elements in a string?
// - How to separate an string?

// 2) Breaking up into sub-problems
// - If the argument is an array, do it in a different way
// - Identify different elements in the string
// - Count the number of similar elements
// - Create an array with the elements separated
// - Return the array with the elements separated caracteres

/*
// RESOLUTION
const unique_in_order = function (sequence) {
  let caracteres = [];
  if (typeof sequence === 'string') {
    caracteres = sequence.split('');
  } else {
    for (let i = 0; i < sequence.length; i++) {
      caracteres.push(sequence[i]);
    }
  }
  const uniqueOrdered = [];
  uniqueOrdered.push(caracteres[0]);
  for (let i = 0; i < caracteres.length; i++) {
    let caract = caracteres[i];
    if (caract === uniqueOrdered[uniqueOrdered.length - 1]) continue;
    uniqueOrdered.push(caract);
  }
  return uniqueOrdered;
};
// const sequence = 'AAAABBBCCDAABBB';
// const sequence = 'ABBCcAD';
// const sequence = 'ABBCcAD';
// const sequence = [1, 2, 2, 3, 3];

console.log(unique_in_order(sequence));

*/

///////////////////////////////////////////////////

//DEBUGGING (FIXING ERRORS):
/*
A) IDENTIFY
B) FIND
C) FIX
D) PREVENT
*/
///////////////////////////////////////////////////

// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

/*
// There's a bug here
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // Fixing and preventing an error
    value: Number(prompt('Degrees celsius:')),
  };
  debugger;
  // Testing if the value is being read
  console.log(measurement.value); //OK
  // console.warn(measurement.value);
  // console.error(measurement.value);
  // console.table(10measurement);

  // After test it, I found that the value is a string, not a number. That's the bug.
  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

*/

///////////////////////////////////////////////////

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17??C in 1
days ... 21??C in 2 days ... 23??C in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
?? Data 1: [17, 21, 23]
?? Data 2: [12, 5, -5, 0, 4]

*/

/*

// 1) Understanding the problem
// - How to loop an array?
// - How to print a string like this?

// 2) Breaking up into sub-problems
// - Get the array and loop trough it 
// - Print the string with the values in degrees in each iteration

// 1
// const temperatures = [17, 21, 23];
// const temperatures = [12, 5, -5, 0, 4];

const printForecast = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}??C in ${i + 1} days`);
  }
};

//2
printForecast(temperatures);

*/
