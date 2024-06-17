'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  /* if there is no number input*/
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    /* if player wins*/
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    /* if guess is too high*/
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    /*decrease score by 1*/
    score--;
    document.querySelector('.score').textContent = score;
    /* if guess is too low*/
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
    /*decrease score by 1*/
    score--;
    document.querySelector('.score').textContent = score;
  }
});
