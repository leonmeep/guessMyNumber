'use strict';

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

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    /* if guess is too high*/
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      /*decrease score by 1*/
      score--;
      document.querySelector('.score').textContent = score;
      /*if score is 0*/
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    /* if guess is too low*/
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      /*decrease score by 1*/
      score--;
      document.querySelector('.score').textContent = score;
      /*if score is 0*/
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
    // document.querySelector('.score').textContent = 0;
  }
});
