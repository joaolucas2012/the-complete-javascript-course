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

// Selecting the button element
document.querySelector('.check').addEventListener('click', function () {
  // The returned value of an input is always a string, so we need in this case to convert it to a number.
  const guess = Number(document.querySelector('.guess').value);

  // Ever check first if there is a value in the input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number!';
  }
});
