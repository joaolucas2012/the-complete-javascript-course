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
