const gameButton = document.getElementById('game-button');
const scoreElement = document.getElementById('score');
const audio = document.getElementById('audio');

let score = 0;

gameButton.addEventListener('click', increaseScore);

function increaseScore() {
  score++;
  scoreElement.textContent = 'Очки: ' + score;
  playSound('button-click.mp3');
  animateButton();
}

function animateButton() {
  gameButton.classList.remove('animate');
  void gameButton.offsetWidth; // Перезавантаження анімації
  gameButton.classList.add('animate');
}

