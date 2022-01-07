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

// REFACTORING OUR CODE: THE DRY PRINCIPLE
// It is the act of shortening repeated lines of code without altering how the code works as a whole.
/* 
--> It can be done by creating a new logic that encompasses two logics with repeated codes, so the code becomes one, in the same logic, only with the ternary operator (condition ? if yes, do this : if not do that;).
--> It can also be done using functions.
*/

/* Defining refactor functions */

// To display a message in the Html
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// To display the guess number
const displayGuess = message =>
  (document.querySelector('.number').textContent = message);

// To define the number between 1 and 20 randomly
const random = () => {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};

// To display a victory message
const displayVictory = message =>
  (document.querySelector('#guess-number').textContent = message);

// To change the body style
const changeColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

// To change the score
const changeScore = content =>
  (document.querySelector('.score').textContent = content);

// To change the number element width
const changeWidth = number =>
  (document.querySelector('.number').style.width = number);

//////////////////////////////////////////////////

// HANDLING CLICK EVENTS

// Defining the number between 1 and 20 randomly
let secretNumber = random();
let score = 20;
let highScore = 0;

// Selecting the button element
document.querySelector('.check').addEventListener('click', function () {
  // The returned value of an input is always a string, so we need in this case to convert it to a number.
  const guess = Number(document.querySelector('.guess').value);

  //////////////////////////////////////////////////

  // GAMING LOGIC AND MANIPULATING HTML AND CSS STYLES

  // When there is no input
  if (!guess) {
    displayMessage('⛔No number!');

    // When the player wins
  } else if (guess > 20 || guess < 1) {
    displayMessage('⛔The number needs to be from 1 to 20!');
  } else if (guess === secretNumber) {
    displayGuess(guess);
    displayMessage('🎉Correct Number!');
    displayVictory('Congratulations!');

    changeColor('#60b347');
    changeWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // When guess is too high or too low
      displayMessage(guess > secretNumber ? '🧨Too high!' : '🤏Too low!');
      score--;
      changeScore(score);
    } else {
      displayVictory('Almost there...');
      displayMessage('🥺You lost the game!');
      changeColor('red');
      changeScore(0);
    }
  }
});

//////////////////////////////////////////////////

// CODING CHALLENGE #1

/* Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
 */

//1
document.querySelector('.again').addEventListener('click', function () {
  //2
  score = 20;
  secretNumber = random();

  //3
  displayVictory('Guess My Number!');
  displayGuess('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  changeScore(score);

  //4
  changeColor('#222');
  changeWidth('15rem');
});

///////////////////////////////////////////////////
