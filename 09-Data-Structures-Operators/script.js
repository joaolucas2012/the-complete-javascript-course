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
