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

//event listener on the winning score select of playTo
playTo.addEventListener('change', function (e) {
  winningScore = parseInt(e.target.value);
})

//event listeners for the buttons
playerOneBtn.addEventListener('click', function (e) {
  p1Score += 1;
  p1Display.textContent = p1Score;
  if (p1Score === winningScore) {
    p1Display.style.color = 'green';
    p2Display.style.color = 'red';
    playerTwoBtn.style.opacity = 0.6;
    playerOneBtn.style.opacity = 0.6;
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
  }
})
playerTwoBtn.addEventListener('click', function (e) {
  p2Score += 1;
  p2Display.textContent = p2Score;
  if (p2Score === winningScore) {
    p2Display.style.color = 'green';
    p1Display.style.color = 'red';
    playerTwoBtn.style.opacity = 0.6;
    playerOneBtn.style.opacity = 0.6;
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;
  }
})
//reset all if the reset button is pressed
resetBtn.addEventListener('click', function (e) {
  p1Score = 0;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.textContent = p1Score;
  p2Display.style.color = 'black';
  p1Display.style.color = 'black';
  playerTwoBtn.style.opacity = 1;
  playerOneBtn.style.opacity = 1;
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
})


