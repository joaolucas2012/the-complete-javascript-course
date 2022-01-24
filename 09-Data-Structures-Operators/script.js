'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Clássico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Main ingredient: ${mainIngredient}`);
    console.log(`Other ingredients: ${otherIngredients}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///////////////////////////////////////////////////

// DESTRUCTURING ARRAYS
/*
// Here, the x, y and z variables received the values 2, 3 and 4 from the 'arr' array
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

// The original array still the same, without modifications
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// If I want to get the values ​​in an unordered sequence, I just put a space and a comma to skip a value
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// --> Hard way:
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Easy way
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter}, ${mainCourse}`);

// Nested destructuring
const nested = [2, 4, [5, 6]];

// --> This would serve to receive the entire internal array within a single variable:
// const [i, , j] = nested;
// console.log(i, j);

// --> This would serve to receive the values ​​of the internal array, each one inside a variable.
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// Here, the variables p and q received the values ​​8 and 9, and as there was no third value to be received, the variable r persisted with the value 1, already defined previously by default.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

///////////////////////////////////////////////////

// DESTRUCTURING OBJECTS

/*

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Doing the same but with the properties renamed
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// It's necessary to put it inside of parêntesis
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
*/

/*
// Exercising
const objectName = {
  name: 'João Lucas',
  friends: {
    fst: 'Jane',
    snd: 'Leticia',
    trd: 'Marcos',
  },
};

const {
  name: n,
  friends: { fst: one, trd: two },
} = objectName;
console.log(`${n}, ${one}, ${two}`);
*/

/*
// Calling functions passing an destructured object as a parameter
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

/*
// Exercising
const heroStory = {
  heroes: ['Ben 10', 'Omniman', 'Generator Rex'],
  story: function ({ hero1, hero2, place = 'some place in this city' }) {
    console.log(
      `Oh my God! ${this.heroes[hero1]} and ${this.heroes[hero2]} are fighting at ${place}.`
    );
  },
};

heroStory.story({
  hero1: 0,
  hero2: 2,
  place: 'New York',
});

heroStory.story({
  hero1: 2,
  hero2: 1,
});
*/
///////////////////////////////////////////////////

// THE SPREAD OPERATOR

/*
const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// In the following example, the newArray received all tha values of the arr without write hard code
// This is the Spread operator
const newArray = [1, 2, ...arr];
console.log(newArray);

// To log the individual elements of an array in the console
console.log(...newArray);
// console.log(1, 2, 7, 8, 9);

// To get the elements of an array and add another values after them
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(
  `
  Starter Menu: ${restaurant.starterMenu}, 
  Main Menu: ${restaurant.mainMenu}, 
  Complete Menu: ${completeMenu}
  `
);

// The Spread operator works with all the iterables
// ITERABLES: arrays, strings, maps, sets, NOT objects
const str = 'João Lucas';
const letters = [...str, ' ', 'ç'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Ribeiro`); // --> It doesn't work

*/

// Passing a spread array as an argument to a function
/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
a;
restaurant.orderPasta(...ingredients);
*/

/*
// Exercising
const doThis = function (arg1, arg2) {
  console.log(`Do ${arg1} and ${arg2}`);
};
const args = ['rice', 'beans'];
doThis(...args);
*/

/*
// Objects
// --> Here, a new object was created that received two new properties more than the original object.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'James' };
console.log(newRestaurant);

// To make a copy of an object with the Spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

///////////////////////////////////////////////////

// REST PATTERN AND PARAMETERS
/*
// 1) Destructuring
// SPREAD, because the ... is on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because the ... is on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// const element = {
//   name: 'James',
//   age: 12,
//   comment: 'Nothing to say',
// };
// const { name, ...otherThings } = element;
// console.log(name, otherThings);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6, 7, 8);
add(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

///////////////////////////////////////////////////

// SHORT CIRCUITING (&& and ||)

/*
// && and || operators can use any data type, they can return any data type and they do short-circuiting
// Short-circuiting with || operator returns:
// The first value if it is a truthy value, or the second value if the first value is falsy
console.log('------ OR ------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// --> In case there are many values ​​being compared, the || operator returns the first true value it finds, from left to right.
// --> Here, the value 'Hello' was returned, which was the first non-false value that the || operator found.
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// --> Short circuit returns the first value if it is false, or returns the last true value it finds if all values ​​are true.
console.log('------ AND ------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

// --> If they have many values, it returns the first false value it finds, or it returns the last true value it finds, if all are true.
console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// The same code as above, but with the && operator
// Returns the first element, if it's false
// Executes the second element, if the first is true
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'garlic');
*/
///////////////////////////////////////////////////

// THE NULLISH COALESCING OPERATOR (??)

/*

// Here, if we are working with real projects, the || operator will fail when the value of restaurant.numGuests is equals to 0
// Cause it will return 10, and it's not the real situation in real life
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// The solution is the nullish coalescing operator (??)

//--> This operator works with null values, but with a detail: IT DOES NOT CONSIDER EMPTY STRING ('') NOR 0 AS NULL VALUES.
// --> Only considers null and undefined as null values.
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// In this case, it returned the value 0, the real value, because it doesn't consider 0 as a null value

*/
///////////////////////////////////////////////////

// Logical assignment operators

/*
// OR ASSIGNMENT OPERATOR
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// --> This code is the same as above, but simplified
// --> Here, it is checked whether the restaurant has the property 'numGuests' or not, and in case it doesn't, it receives this property and its value becomes 10.
// rest1.numGuests ||= 10;
// rest1.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

//-------------------------------------------//

// THE LOGICAL NULLISH ASSIGNMENT OPERATOR

// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;

// --> This code is the same as above, but simplified
// It is an example with the nullish coalescing operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

//-------------------------------------------//

// THE && OPERATORS

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest2);

// --> This code is the same as above, but simplified
// It is an example with the && operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

*/
///////////////////////////////////////////////////

// CODING CHALLENGE #1

/* We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...playersNumber) {
    console.log(`${playersNumber}, goals: ${playersNumber.length}`);
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
// const { team1 } = game.odds;
// const { x: draw } = game.odds;
// const { team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6
game.printGoals(...game.scored);
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...players1);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

///////////////////////////////////////////////////
