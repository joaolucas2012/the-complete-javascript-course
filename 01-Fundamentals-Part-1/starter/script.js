/* let js = 'amazing';
if (js === 'amazing') alert('Javascript is fun');

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23); */

///////////////////////////////////////////////////
// Variable name conventions
// let Name = "Jonas";
// console.log(Name);

/* 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country(population in millions) */
// let country = 'Brazil';
// let continent = "South America";
// let population = 212600000;

/* 2. Log their values to the console */
// console.log(country);
// console.log(continent);
// console.log(population);

///////////////////////////////////////////////////

// Type of values
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof country);
// console.log(typeof 'Jonas');

/* BOOLEAN */
// true;
// console.log(true);
// let javascripIsFun = true;
// console.log(javascripIsFun);

/* Reassign the variable type */
// DINAMIC TYPING //
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

// UNDEFINED TYPE //
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);

// JAVASCRIPT ERROR //
/* Null type isn't an object */
// console.log(typeof null);


/* 1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet */
// let isIsland = false;
// let language;

/*2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


/* 1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
*/

// const language = 'Portuguese';

/* 3. Try to change one of the changed variables now, and observe what happens */

// language = 'Spanish';
// console.log(language);

// The variable language has already been declared and can't change

// OPERADORES:
// --> Operadores permitem transformar ou combinar múltiplos valores

///////////////////////////////////////////////////

// TIPOS DE OPERADORES:
// --> Operadores matemáticos (divisão, multiplicação, etc)
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2);
// console.log(2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2 = 8

// Contatenate strings with +
// const firstName = 'João';
// const lastName = 'Lucas';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 10 + 5; // x = 150
// x += 10 // x = x + 10
// x *= 4 // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

///////////////////////////////////////////////////

// Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageJonas >= 60);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half? */
// population = population / 2;
// console.log('Each half will contain ' + population + ' people.');

/* 2. Increase the population of your country by 1 and log the result to the console */
// console.log(population + 1);

/* 3. Finland has a population of 6 million. Does your country have more people than
Finland? */
// console.log(population > 6000000);

/* 4. The average population of a country is 33 million people. Does your country
have less people than the average country? */
// console.log(population < 33000000);

/* 5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese' */
// const description = 'Portuguese is in Europe, and its 11 million people speak portuguese';
// console.log(description);

///////////////////////////////////////////////////

//Operators precedence
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// console.log(x + y / 2);
// console.log((x + y) / 2);

///////////////////////////////////////////////////

// CODING CHALENGE #10
/* Mark and Johnn are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using the formula (you can even implement both versions)
3.Create a boolean variable 'markHigherBMI' containing information about wheter Mark has a higher BMI than John.

TEST DATA 1: Mark weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

///////////////////////////////////////////////////

//Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

//1.1
// const markMass = 78, johnMass = 92, markHeight = 1.69, johnHeight = 1.95;
// console.log("Mark's mass: " + markMass, " John's mass: " + johnMass);
// console.log("John's height: " + markHeight, " John's height: " + johnHeight);

//2.1
// const markBMI = markMass / markHeight ** 2;
// console.log("Mark's BMI: " + markBMI + '.');
// const johnBMI = johnMass / johnHeight ** 2;
// console.log("Johns's BMI: " + johnBMI + '.');

//3.1
// const markHigherBMI = markBMI > johnBMI;
// console.log("markHigherBMI is " + markHigherBMI);

///////////////////////////////////////////////////
// Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//1.2
// const markMass = 95, johnMass = 85, markHeight = 1.88, johnHeight = 1.76;
// console.log("Mark's mass: " + markMass, " John's mass: " + johnMass);
// console.log("John's height: " + markHeight, " John's height: " + johnHeight);

//2.2
// const markBMI = markMass / markHeight ** 2;
// console.log("Mark's BMI: " + markBMI + '.');
// const johnBMI = johnMass / johnHeight ** 2;
// console.log("Johns's BMI: " + johnBMI + '.');

//3.2
// markHigherBMI = markBMI > johnBMI;
// console.log("markHigherBMI is " + markHigherBMI);
///////////////////////////////////////////////////

// Strings and Template Literals
// const firstName = 'João';
// const job = 'programmer';
// const birthYear = 2000;
// const year = 2021;

// NORMAL STRING
// const joao = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(joao);

// TEMPLATE LITERALS
// const joaoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(joaoNew);

// Example
// const v1 = 3, v2 = 4, v3 = 5;
// const conta = `The value is ${(v1 - v2) / v3 ** 2}`;
// console.log(conta);

// MULTILINE STRINGS
// console.log('String with \n\
// multiple \n\
// lines');

// Better form
// console.log(`String
// multiple
// lines`);

/* 1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */
// const description = `Portuguese is in Europe, and its 11 million people speak portuguese`;
// console.log(description);

///////////////////////////////////////////////////

