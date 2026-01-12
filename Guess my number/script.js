'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😀 correct number';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumbers = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highscores = 0;
const duplicateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number 🚫';
    duplicateMessage('No number 🚫');

    // Wheen a  player wins
  } else if (guess === secretNumbers) {
    //document.querySelector('.message').textContent = 'correct number';
    duplicateMessage('correct number');
    document.querySelector('.number').textContent = secretNumbers;

    document.querySelector('body').style.backgroundColor = '  #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scores > highscores) {
      highscores = scores;
      document.querySelector('.highscore').textContent = highscores;
    }
  } else if (guess !== secretNumbers) {
    if (scores > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumbers ? 'Too High 📉' : 'TOO LOW 📉';

      duplicateMessage(guess > secretNumbers ? 'Too High 📉' : 'TOO LOW 📉');

      scores--;
      document.querySelector('.score').textContent = scores;
    } else {
      //document.querySelector('.message').textContent = 'You lose 😭';
      duplicateMessage('You lose 😭');
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
  // when guess No is too high
  else if (guess > secretNumbers) {
    if (scores > 1) {
      document.querySelector('.message').textContent = 'Too High 📉';
      scores--;
      document.querySelector('.score').textContent = scores;
    } else {
      document.querySelector('.message').textContent = 'You lose 😭';
      document.querySelector('.score').textContent = 0;
    }

    //  // when guess No is too low
  } else if (guess < secretNumbers) {
    if (scores > 1) {
      document.querySelector('.message').textContent = 'TOO LOW 📉';
      scores--;
      document.querySelector('.score').textContent = scores;
    } else {
      document.querySelector('.message').textContent = ' You lose 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

document.querySelector('.again').addEventListener('click', function () {
  scores = 20;
  secretNumbers = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scores;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = ' 15rem';
  document.querySelector('.highscore').textContent;
});
