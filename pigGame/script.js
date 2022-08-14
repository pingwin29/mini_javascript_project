'use strict';
// Element
const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');

const player0Elm = document.querySelector('.player--0');
const player1Elm = document.querySelector('.player--1');

const dieImg = document.querySelector('.dice');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let die, activePlayer, currentScore, score;

const init = () => {
  die = 0;
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];
  dieImg.classList.add('hidden');

  player0Elm.classList.add('player--active');
  player1Elm.classList.remove('player--active');

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  score0Elm.textContent = 0;
  score1Elm.textContent = 0;

  rollBtn.disabled = false;
  holdBtn.disabled = false;
};

init();
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  currentScore = 0;
  player0Elm.classList.toggle('player--active');
  player1Elm.classList.toggle('player--active');
};

const endGame = () => {
  dieImg.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  rollBtn.disabled = true;
  holdBtn.disabled = true;
};

// handler function
function rollHandler() {
  die = Math.ceil(Math.random() * 6);

  dieImg.classList.remove('hidden');
  dieImg.src = `dice-${die}.png`;

  if (die != 1) {
    currentScore += die;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}

function holdHandler() {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 100) {
    endGame();
  } else {
    switchPlayer();
  }
}
// addEventListener
rollBtn.addEventListener('click', rollHandler);
holdBtn.addEventListener('click', holdHandler);
newGameBtn.addEventListener('click', init);
