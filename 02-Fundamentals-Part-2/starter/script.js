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

// Calling, running or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// console.log(apples, oranges);
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