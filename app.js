console.log('hello from app.js...scorekeeper')

//grab the buttons 
const playerOneBtn = document.querySelector('#playerOneBtn');
const playerTwoBtn = document.querySelector('#playerTwoBtn');
const resetBtn = document.querySelector('#resetBtn');
//grab the html to display the players score display
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
//grab the play-to score select
const playTo = document.querySelector('#score-select');

//variable to track the players scores
let p1Score = 0;
let p2Score = 0;
//Initialize the score to reach to win the game
let winningScore = 3;
let isGameOver = false;

//event listener on the winning score select of playTo
playTo.addEventListener('change', function (e) {
  winningScore = parseInt(this.value);
  reset();
})

//event listeners for the buttons
playerOneBtn.addEventListener('click', function (e) {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
      playerTwoBtn.style.opacity = 0.6;
      playerOneBtn.style.opacity = 0.6;
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
  }
})
playerTwoBtn.addEventListener('click', function (e) {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
      playerTwoBtn.style.opacity = 0.6;
      playerOneBtn.style.opacity = 0.6;
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
  }
})
//reset all if the reset button is pressed
resetBtn.addEventListener('click', reset)

//function to reset for a fresh start
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.textContent = p1Score;
  p2Display.classList.remove('winner', 'loser');
  p1Display.classList.remove('loser', 'winner');
  playerTwoBtn.style.opacity = 1;
  playerOneBtn.style.opacity = 1;
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
}
