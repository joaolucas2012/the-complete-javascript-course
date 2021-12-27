'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// I CAN'T NAME VARIABLES LIKE THIS
// const interface = 'Audio';
// const private = 534;
// const if = 23;

///////////////////////////////////////////////////

// FUNCTIONS

// function logger() {
//   console.log('My name is João Lucas');
// }

const log = parameter => console.log(`${parameter}`);

const logArray = vector => console.log(vector);

// Calling, running or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

///////////////////////////////////////////////////

/* 1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

//1
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

//2
// const firstCountry = describeCountry('Brazil', 212, 'Brazilia');
// const secondCountry = describeCountry('Portugal', 10, 'Lisboa');
// const thirdCountry = describeCountry('United States', 333, 'Washington D.C.');

// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);

///////////////////////////////////////////////////

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(2000);
// console.log(age1);

// Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

///////////////////////////////////////////////////

/* 1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) */

//1 and 2
// function percentageOfWorld1(population) {
//   return ((population / 7900) * 100);
// }

//3
// const BrazilPercentage = percentageOfWorld1(212);
// const USAPercentage = percentageOfWorld1(333);
// const PortugalPercentage = percentageOfWorld1(10);
// console.log(`Brazil: ${BrazilPercentage.toPrecision(2)}%, USA: ${USAPercentage.toPrecision(2)}%, Portugal: ${PortugalPercentage.toPrecision(2)}%.`);

//4
// const percentageOfWorld2 = function (population) {
//   return ((population / 7900) * 100);
// }

// const IrelandPercentage = percentageOfWorld2(4.9);
// const CanadaPercentage = percentageOfWorld2(38);
// const CaribbeanPercentage = percentageOfWorld2(44.4);
// console.log(`Ireland: ${IrelandPercentage.toPrecision(2)}%, Canada: ${CanadaPercentage.toPrecision(2)}%, Caribbean: ${CaribbeanPercentage.toPrecision(2)}%.`);

///////////////////////////////////////////////////

// ARROW FUNCTION
// const calcAge = birthYear => 2037 - birthYear;
// const age = calcAge(2000);
// console.log(age);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(2000, 'João Lucas'));
// console.log(yearsUntilRetirement(1996, 'Carlos'));

/* 1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

// const percentageOfWorld3 = population => ((population / 7900) * 100);
// const IrelandPercentage = percentageOfWorld3(4.9);
// console.log(`Ireland: ${IrelandPercentage.toFixed(2)}%.`);

///////////////////////////////////////////////////

// FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));


/* 1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

//1
// const describePopulation = (country, population) => {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(2)}% of the world.`;
// }

// console.log(describePopulation('Brazil', 212));
// console.log(describePopulation('Portugal', 10));
// console.log(describePopulation('Ireland', 4.9));

///////////////////////////////////////////////////

// REVIEWING FUNCTIONS

/* Arrow function */
// Name = parameters => result.
// const calcAge = birthYear => 2037 - birthYear;

/* Function declaration */
// function name(parameters){result}
// function verifyAge(retirement, firstName) {
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//   } else {
//     console.log(`${firstName} has already retired.`);
//     ;
//   }
// }

/* Function expression */
// const name = function(parameters){result}
// const yearsUntilRetirement = function (birthYear, firstName) {

//Calling an arrow function
// const age = calcAge(birthYear);
// const retirement = 65 - age;

//Calling a normal function
// verifyAge(retirement, firstName);
// }

//Calling a function expression
// yearsUntilRetirement(1991, 'Jonas');
// yearsUntilRetirement(1950, 'João Lucas');
// yearsUntilRetirement(2004, 'Gustavo');

///////////////////////////////////////////////////

// CODING CHALLENGE #1

/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores � */

//1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//2
// const averageDolphins = calcAverage(44, 23, 71);
// const averageDolphins2 = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(65, 54, 49);
// const averageKoalas2 = calcAverage(23, 34, 27);

//3
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No one wins the tropy...`;
//   }
// }

//4
// console.log(checkWinner(averageDolphins, averageKoalas));
// console.log(checkWinner(averageDolphins2, averageKoalas2));

///////////////////////////////////////////////////

// INSTRODUCTION TO ARRAYS

// const frient1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// Literals implementation
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// Second form to declare an array
// const years = new Array(1991, 1996, 2000, 2020);

// Log a value that is in a specific position of the array
// console.log(friends[0]);
// console.log(friends[1]);

// Log the array length
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// Change a value inside of a position of the array
// friends[2] = 'Jay';
// console.log(friends);

// Create an array with another array inside
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 20037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// Calling functions inside of the array
// const years2 = [1990, 2000, 2002, 2010, 2018];
// const age1 = calcAge1(years2[0]);
// const age2 = calcAge1(years2[1]);
// const age3 = calcAge1(years2[years2.length - 1]);
// console.log(age1, age2, age3);

// Better form
// const ages = [calcAge1(years2[0]), calcAge1(years2[1]), calcAge1(years2[years2.length - 1])];
// console.log(ages);

// Training
// const minusOne = valor => valor - 1;
// const vetor = [minusOne(2), minusOne(56)];
// console.log(vetor);

///////////////////////////////////////////////////

/* 1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values */

/*
//1
const populations = [212, 4.9, 38, 44.4];

//2
populations.length === 4 ? console.log(`${true}`) : console.log(`${false}`);

//3
function percentageOfWorld1(population) {
  return ((population / 7900) * 100);
}
const percentages = [percentageOfWorld1(populations[0]).toFixed(2), percentageOfWorld1(populations[1]).toFixed(2), percentageOfWorld1(populations[2]).toFixed(2), percentageOfWorld1(populations[3]).toFixed(2)];

console.log(percentages);
*/

///////////////////////////////////////////////////

// BASIC ARRAY OPERATION (METHODS)

/*
// ADD ELEMENTS //
// push() add elements to the end of the array
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
logArray(friends);
log(friends.length);

// unshift() add elements to the beginning of the array
friends.unshift('John');
logArray(friends);
log(friends.length);

// REMOVE ELEMENTS //
// pop() remove the last element of the arrays
friends.pop();
const popped = friends.pop();
log(popped);
logArray(friends);
log(friends.length);

// shift() remove the first element of the array
friends.shift();
const shifted = friends.shift();
log(shifted);
logArray(friends);
log(friends.length);

// KNOW THE POSITION OF THE ELEMENTS //
// indexOf() shows the position of the element
log(friends.indexOf('Steven'));

// KNOW IF THE VALUE IS INSIDE OF THE ARRAY //
// includes() returns true if the value is in the array and false if it isn't
log(friends.includes('Bob'));
log(friends.includes('Steven'));
friends.includes('Jennifer') === true ? log(`Jennifer is in the array`) : log(`Jennifer isn't in the array`);
*/

///////////////////////////////////////////////////

/* 1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */

/*
//1
const neighbours = ['Canada', 'Mexico'];

//2
neighbours.push('Utopia');

//3
neighbours.pop();

//4
if (!neighbours.includes('Germany')) log(`Probably not a central European country :D`);

//5
neighbours[neighbours.indexOf('Mexico')] = 'Brazil';
log(neighbours);
*/

///////////////////////////////////////////////////

// CODING CHALLENGE #2

/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) � */

/*
//1
const calcTip = bill => (bill >= 50 && bill <= 300) ? Number((bill * 0.15).toFixed(2)) : Number((bill * 0.2).toFixed(2));

//2
const bills = [125, 555, 44];
logArray(bills);

//3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
logArray(tips);

//4
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
logArray(total);

*/

///////////////////////////////////////////////////

// INTRODUCTION TO OBJECTS

// Each value inside the object is called a "key"
// Each key is a property of the object
// In this case, jonas is an object with five properties
// The data inside the object doesn't need to be in order like in an array

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Ribeiro',
  age: 2021 - 2000,
  job: 'Bricklayer',
  friends: ['Renato', 'Fred', 'Ribas']
};
*/

///////////////////////////////////////////////////

/* 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments) */

/*
const myCountry = {
  country: 'USA',
  capital: 'Washington D.C.',
  language: 'Portuguese',
  population: 329.5,
  neighbours: ['Canada', 'Mexico']
};
*/

///////////////////////////////////////////////////

// DOT VS BRACKET NOTATION
/*

const jonas = {
  firstName: 'Jonas',
  lastName: 'Ribeiro',
  age: 2021 - 2000,
  job: 'Bricklayer',
  friends: ['Renato', 'Fred', 'Michael']
};
logArray(jonas);

// DOT NOTATION
log(jonas.lastName);

// BRACKET NOTATION
log(jonas['lastName']);

// It's possible to catch a property by this way:
const nameKey = 'Name';
log(jonas['first' + nameKey]); // first + nameKey = first + 'Name' = 'firstName'
log(jonas['last' + nameKey]); // last + nameKey = last + 'Name' = 'lastName'

// const interestedIn = prompt(`What do you want to know about Jonas? Choose between, firstName, lastName, age, job, and friends`);

// Using an expression inside the bracket notation
// log(jonas[interestedIn]);
// jonas[interestedIn] ? log(jonas[interestedIn]) : log(`Wrong request... Choose between, firstName, lastName, age, job, and friends`);

// ADD A PROPERTY TO THE OBJECT
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasribeiro';
logArray(jonas);

*/

// Challenge
// Write "Jonas has 3 friends, and his best friend is called Michael"
// log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[jonas.friends.indexOf('Michael')]}`);

///////////////////////////////////////////////////

/* 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation. */

/*
//1
const country = {
  name: 'Finland',
  population: 6,
  neighbouringCountries: ['Sweden', 'Russia', 'Norway'],
  capital: 'Helsinki'
};
log(`${country.name} has ${country.population} million finnish-speaking people, ${country.neighbouringCountries.length} neighbouring countries and a capital called ${country.capital}.`);

//2
country.population += 2;
logArray(country);
country['population'] -= 2;
logArray(country);

*/

///////////////////////////////////////////////////

// OBJECT METHODS
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Ribeiro',
  birthYear: 1991,
  job: 'Bricklayer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: birthYear => 2037 - birthYear

  // calcAge: function () {
  //   logArray(this);
  //   return 2037 - this.birthYear;
  // }

calcAge: function () {
  this.age = 2013 - this.birthYear;
  return this.age;
}
};

*/

// log(jonas.calcAge());
// log(jonas['calcAge'](2000));

// Challenge
// Write a method called getSummary that returns a string like this: "Jonas is a 46-year old bricklayer, and he has a/no driver's license"
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Ribeiro',
  birthYear: 1991,
  job: 'bricklayer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2013 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense === true ? `a` : `no`} driver's license`;
  }
};

log(jonas['getSummary']());

*/

///////////////////////////////////////////////////

/* 1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/

//1
/*
const myCountry = {
  country: 'USA',
  capital: 'Washington D.C.',
  language: 'Portuguese',
  population: 329.5,
  neighbours: ['Canada', 'Mexico'],
  describe: function () {
    log(`${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  }
};
*/

//2
// myCountry.describe();

//3
/*
const myCountry = {
  country: 'USA',
  capital: 'Washington D.C.',
  language: 'Portuguese',
  population: 329.5,
  neighbours: ['Canada', 'Mexico'],

  describe: function () {
    log(`${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length <= 0 ? true : false;
    return this.isIsland;
  }
};

log(myCountry.checkIsland());
*/

///////////////////////////////////////////////////

//CODING CHALLENGE #3

/* Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

//1 and 2
/*
const MarkMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = (this.mass / (this.height ** 2)).toFixed(2);
    return this.BMI;
  }
};

const JohnSmith = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = (this.mass / (this.height ** 2)).toFixed(2);
    return this.BMI;
  }
};
*/

// 3
/*
if (MarkMiller.calcBMI() > JohnSmith.calcBMI()) {
  log(`${MarkMiller.fullName}'s BMI (${MarkMiller.BMI}) is higher than ${JohnSmith.fullName}'s (${JohnSmith.BMI})!`);
} else {
  log(`${JohnSmith.fullName} 's BMI (${JohnSmith.BMI}) is higher than ${MarkMiller.fullName}'s(${MarkMiller.BMI})!`);
}
*/

///////////////////////////////////////////////////

// ITERATION: THE LOOP FOR
// log(`Lifting weights repetition 1`);

//// For loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   log(`Lifting weights repetition ${rep}`);
// }

///////////////////////////////////////////////////

/* 1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting' */
// for (let voters = 1; voters <= 50; voters++) {
//   log(`Voter number ${voters} is currently voting`);
// }

///////////////////////////////////////////////////