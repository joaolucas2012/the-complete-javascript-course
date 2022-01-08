'use strict';

/********** Refactoring variables **********/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
/*******************************************/

/**************** Functions ****************/
// Function to close the modal window
const openModal = () => {
  // document.querySelector('.modal').classList.remove('hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function to close the modal window
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
/******************************************/

// It returns a list of all the elements that have a class with the same name
const btnsShowModal = document.querySelectorAll('.show-modal');
// console.log(btnsShowModal);

// We can do a for loop in this list of elements
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* 
THERE ARE 3 TYPES OF KEYBOARD EVENTS:
- KEYUP: When when we lift our finger off the keyboard.
- KEYPRESS: It is fired continuously while keeping our finger on a certain key.
- KEYDOWN: It is fired as soon as we press the key. */

// HANDLING AN "ESC" KEYPRESS EVENT
document.addEventListener('keydown', function (e) {
  // To know the name of the key pressed
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
