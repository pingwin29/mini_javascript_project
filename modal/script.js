'use strict';

// Element
const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalElm = document.querySelector('.modal');
const overlayElm = document.querySelector('.overlay');

// action fucntion
function showModal() {
  modalElm.classList.remove('hidden');
  overlayElm.classList.remove('hidden');
}

function closeModal() {
  modalElm.classList.add('hidden');
  overlayElm.classList.add('hidden');
}
//handerfunction
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', showModal);
}

closeModalBtn.addEventListener('click', closeModal);

overlayElm.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  e.key === 'Escape' && closeModal();
});
console.log({ showModalBtns });
