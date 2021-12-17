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

// CODING CHALENGE #1
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

//Making Decisions with if else statement

// const johnAge = 19;
// const sarahAge = 15;
// const isJohnOldEnough = johnAge >= 18;
// const isSarahOldEnough = sarahAge >= 18;

// if (isJohnOldEnough) {
//   console.log(`John can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - johnAge;
//   console.log(`John is too young... wait for more ${yearsLeft} years 😢`);
// }

// if (isSarahOldEnough) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - sarahAge;
//   console.log(`Sarah is too young... wait for more ${yearsLeft} years 😢`);
// }

// Another example
// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

///////////////////////////////////////////////////

// LECTURE: Taking Decisions: if / else Statements

/* 1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population) */

// const countryName = 'Brazil';
// const countryPopulation = 212.6;

// if (countryPopulation > 33) {
//   console.log(`${countryName}'s population is ${countryPopulation - 33} million above average.`);
// } else {
//   console.log(`${countryName}'s population is ${33 - countryPopulation} million below average.`);
// }

///////////////////////////////////////////////////

// CODING CHALENGE #2

/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1.Print a nice output to the console, saying who has the bigger BMI. The message can be either "John's BMI is higher than John's!" or "Mark's BMI is higher than Mark's!"
2.Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

MINT: Use an if else statement 😀*/

// Mark weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
// const markMass = 78;
// johnMass = 92;
// markHeight = 1.69;
// johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI, markBMI);

// // 1
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// //2
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

///////////////////////////////////////////////////

// TYPE CONVERSION
// const inputYear = '1991';

// // Convert a string to a number
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// // Convert a number to a string
// console.log(String(23));

///////////////////////////////////////////////////

// TYPE COERSION
// Javascript converts automatically the value 21 to a string or to a number
// console.log('I am ' + 21 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');

// let n = '1' + 1; //'11'
// n = n - 1; // 11 = 11 - 1 = 10
// console.log(n); // 10

// 2 + 3 + 4 + '5'; // '95'
// '10' - '4' - '3' - 2 + '5'; // '15'

///////////////////////////////////////////////////

/*1. Predict the result of these 5 operations without executing them:
'9' - '5'; --> 4
'19' - '13' + '17'; --> 617
'19' - '13' + 17; --> 23
'123' < 57; --> false
5 + 6 + '4' + 9 - 4 - 2; --> 1143
2. Execute the operations to check if you were right */


///////////////////////////////////////////////////


// 5 falsy values: 0, '', undefined, null, NaN.

// console.log(`0 ->> ${Boolean(0)}`);
// console.log(`undefined --> ${Boolean(undefined)}`);
// console.log(`string 'Jonas' --> ${Boolean(`Jonas`)}`);
// console.log(`Empty object ${Boolean({})}`);

// const money = 0;
// const money = 100;
// if (money) {
//   console.log(`Don't spend it all!`);
// } else {
//   console.log(`You should get a job!`);
// }

// // let height;
// let height = 100;
// if (height) {
//   console.log('YAY! Height is defined!');
// } else {
//   console.log('Height is UNDEFINED!');
// }

///////////////////////////////////////////////////

// EQUALITY Operators
// const age = 18;
// const age = '18';
// if (age === 18) console.log('You just became a adult (strict)');

// if (age == 18) console.log('You just became a adult (loose)');

///////////////////////////////////////////////////

// CATCH USER DATA
// const favourite = prompt('What is your favourite number?');
// const favourite = Number(prompt('What is your favourite number?'));

// console.log(favourite);
// console.log(typeof (favourite));

// WORST WAY
// if (favourite == 12) { // '12' == 12
//   console.log(`Cool! ${Number(favourite)} is an amazing number!`);
//   console.log(typeof (Number(favourite)));
// }

// BEST WAY
// if (Number(favourite) === 12) { // '12' === 12
//   console.log(`Cool! ${Number(favourite)} is an amazing number!`);
//   console.log(typeof (Number(favourite)));
// }

// ELSE IF
// if (Number(favourite) === 12) { // '12' == 12
//   console.log(`Cool! ${Number(favourite)} is an amazing number!`);
//   console.log(typeof (Number(favourite)));
// } else if (Number(favourite) === 7) { // 7 === 7
//   console.log(`${Number(favourite)} is an amazing number too!`);
// } else {
//   console.log(`Ok, ${favourite} was not expected, but that's still cool!`);
// }


// DIFFERENT OPERATOR
// if (Number(favourite) !== 23) console.log('Why did you choose this number');

///////////////////////////////////////////////////

/* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?'); */
// const numNeighbours = prompt('How many neighbour countries does your country have?');

/* 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
*/
// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }
/*
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
*/

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

/*
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type conversion in this situation
*/
// if (Number(numNeighbours) === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

///////////////////////////////////////////////////

// BASIC BOOLEAN LOGIC: THE END, OR & NOT OPERATORS AND
// const hasDriversLicense = true; // A
// const hasGoodVision = true; //B
// const shoulDrive = hasDriversLicense && hasGoodVision;

// console.log(hasDriversLicense && hasGoodVision); // true and true = true
// console.log(hasDriversLicense || hasGoodVision); // true or true = true
// console.log(!hasDriversLicense); // not

// if (!hasDriversLicense !== true || !hasGoodVision !== true) {
//   console.log('Someone else should drive');
// }

// if (shoulDrive) {
// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive');
// } else if (!hasDriversLicense || !hasGoodVision) {
//   console.log('Someone else should drive');
// } else {
//   console.log('Someone else should drive');
// }

///////////////////////////////////////////////////

// Coding Challenge #3

/* There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
*/

/* Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 */

//1 and 2
// let teamName = 'Dolphins';
// let firstScore = 96;
// let secondScore = 108;
// let thirdScore = 89;
// const DolphinsAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${DolphinsAverageScore}.`);

// teamName = 'Koalas';
// firstScore = 88;
// secondScore = 91;
// thirdScore = 110;
// const KoalasAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${KoalasAverageScore}.`);

// if (KoalasAverageScore > DolphinsAverageScore) {
//   console.log(`Koalas is the winner!`);
// } else if (KoalasAverageScore < DolphinsAverageScore) {
//   console.log(`Dolphins is the winner!`);
// } else console.log(`There's a draw between the 2 teams!`);

///////////////////////////////////////////////////

/* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks � */

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

//// 3
// let teamName = 'Dolphins';
// let firstScore = 97;
// let secondScore = 112;
// let thirdScore = 101;
// const DolphinsAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${DolphinsAverageScore}.`);

// teamName = 'Koalas';
// firstScore = 109;
// secondScore = 95;
// thirdScore = 123;
// const KoalasAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${KoalasAverageScore}.`);

// if (KoalasAverageScore > DolphinsAverageScore && KoalasAverageScore > 100) {
//   console.log(`Koalas is the winner!`);
// } else if (KoalasAverageScore < DolphinsAverageScore && DolphinsAverageScore > 100) {
//   console.log(`Dolphins is the winner!`);
// } else console.log(`There's a draw between the 2 teams!`);

///////////////////////////////////////////////////

/* 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy */

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

////4
// let teamName = 'Dolphins';
// let firstScore = 97;
// let secondScore = 112;
// let thirdScore = 101;
// const DolphinsAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${DolphinsAverageScore}.`);

// teamName = 'Koalas';
// firstScore = 109;
// secondScore = 95;
// thirdScore = 106;
// const KoalasAverageScore = (firstScore + secondScore + thirdScore) / 3;
// console.log(`The ${teamName}'s average score is: ${KoalasAverageScore}.`);

// if (KoalasAverageScore > DolphinsAverageScore && KoalasAverageScore > 100) {
//   console.log(`Koalas is the winner!`);
// } else if (KoalasAverageScore < DolphinsAverageScore && DolphinsAverageScore > 100) {
//   console.log(`Dolphins is the winner!`);
// } else if (KoalasAverageScore === DolphinsAverageScore && DolphinsAverageScore > 100 && KoalasAverageScore > 100) {
//   console.log(`There's a draw between the 2 teams!`);
// } else console.log(`Oh... no one won the trophy :(`);

///////////////////////////////////////////////////