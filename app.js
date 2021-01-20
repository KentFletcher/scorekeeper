const p1 = {
  score: 0,
  button: document.querySelector('#playerOneBtn'),
  display: document.querySelector('#p1display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#playerTwoBtn'),
  display: document.querySelector('#p2display')
}

//Initialize the score to reach to win the game
let winningScore = 3;
let isGameOver = false;

//grab the reset buttons
const resetBtn = document.querySelector('#resetBtn');
//grab the play-to score select
const playTo = document.querySelector('#score-select');
//event listener on the winning score select of playTo
playTo.addEventListener('change', function (e) {
  winningScore = parseInt(this.value);
  reset();
})

//function for the player 1 and 2 buttons
function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

//event listeners for the buttons
p1.button.addEventListener('click', function (e) {
  updateScores(p1, p2)
})
p2.button.addEventListener('click', function (e) {
  updateScores(p2, p1)
})
//reset all if the reset button is pressed
resetBtn.addEventListener('click', reset)

//function to reset for a fresh start
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
