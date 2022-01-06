'use strict';

/*
// Identify a class or an id of the HTML in Javascript
console.log(document.querySelector('.message'));
// document.querySelector('#id-name');

// Identify the text of a class or an id of the HTML in Javascript
console.log(document.querySelector('.message').textContent);
// document.querySelector('#id-name').textContent;
*/

//////////////////////////////////////////////////

// Selecting and manipulating elements

/*
// Change the value of an element
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

// Manipulate the value of an input element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//////////////////////////////////////////////////

// HANDLING CLICK EVENTS

// Defining the number between 1 and 20 randomly
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Selecting the button element
document.querySelector('.check').addEventListener('click', function () {
  // The returned value of an input is always a string, so we need in this case to convert it to a number.
  const guess = Number(document.querySelector('.guess').value);

  // Ever check first if there is a value in the input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🧨Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤏Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
