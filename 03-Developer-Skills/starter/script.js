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
