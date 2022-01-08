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
