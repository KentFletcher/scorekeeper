const allPlayers = [
  p1 = {
    score: 0,
    button: document.querySelector('#playerOneBtn'),
    display: document.querySelector('#p1display')
  },
  p2 = {
    score: 0,
    button: document.querySelector('#playerTwoBtn'),
    display: document.querySelector('#p2display')
  },
  p3 = {
    score: 0,
    button: document.querySelector('#playerThreeBtn'),
    display: document.querySelector('#p3display')
  },
  p4 = {
    score: 0,
    button: document.querySelector('#playerFourBtn'),
    display: document.querySelector('#p4display')
  }
]


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
function updateScores(player, ...opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    //Players must win by 2 points
    if (player.score >= winningScore && opponent.every(opp => player.score >= opp.score + 2)) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      player.button.disabled = true;
      opponent.forEach(opp => {
        opp.display.classList.add('has-text-danger');
        opponent.forEach(opp => opp.button.disabled = true);
      })
    }

  }
}


//event listeners for the buttons
p1.button.addEventListener('click', function (e) {
  updateScores(allPlayers[0], allPlayers[1], allPlayers[2], allPlayers[3])
})
p2.button.addEventListener('click', function (e) {
  updateScores(allPlayers[1], allPlayers[0], allPlayers[2], allPlayers[3])
})
p3.button.addEventListener('click', function (e) {
  updateScores(allPlayers[2], allPlayers[0], allPlayers[2], allPlayers[3])
})
p4.button.addEventListener('click', function (e) {
  updateScores(allPlayers[3], allPlayers[0], allPlayers[2], allPlayers[2])
})
//reset all if the reset button is pressed
resetBtn.addEventListener('click', reset)

//function to reset for a fresh start
function reset() {
  isGameOver = false;
  for (let p of allPlayers) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
