const enteredNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const hiddenNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
let scoreValue = 20;
let highScoreValue = 0;

const randomNumber = Math.trunc(Math.random() * 20) + 1;
hiddenNumber.textContent = randomNumber;


checkBtn.addEventListener('click', () => {
  const guess = Number(enteredNumber.value);

  if (!guess) {
    message.textContent = 'No number!';
    return;
  }

  if (guess === randomNumber) {
    message.textContent = 'Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    if (scoreValue > highScoreValue) {
      highScoreValue = scoreValue;
      highScore.textContent = highScoreValue;
    }
  } else {
    if (scoreValue > 1) {
      message.textContent = guess > randomNumber ? 'Too High!' : 'Too Low!';
      score.textContent = --scoreValue;
      document.body.style.backgroundColor = '#ff0000';
    } else {
      message.textContent = 'You lost the game!';
      score.textContent = 0;
    }
  }
});


againBtn.addEventListener('click', () => {
  location.reload();
});





