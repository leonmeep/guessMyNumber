'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/*functions*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  /* if there is no number input */
  if (!guess) {
    displayMessage('⛔️ No Number!');
    /* if player wins */
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }

    /* if guess is too high*/
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      /*decrease score by 1*/
      score--;
      setScore(score);
      /*if score is 0*/
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let highscore = 0;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  setScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
