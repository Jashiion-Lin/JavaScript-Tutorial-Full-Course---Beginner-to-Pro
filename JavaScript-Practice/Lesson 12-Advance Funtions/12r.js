let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function computerMoveF() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >=2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }         
  return computerMove;
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = computerMoveF();
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }   
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.js-result')
    .innerHTML = result;
  document.querySelector('.js-move')
    .innerHTML = `You <img src="${playerMove}-emoji.png" class="move-icon"><img src="${computerMove}-emoji.png" class="move-icon"> Conputer`
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score')
   .innerHTML = `Wins : ${score.wins}. Losses : ${score.losses}. Ties : ${score.ties}.`
} 

let isAutoPlaying = false;
let internalId;
function autoPlay() {
  if (!isAutoPlaying) {
    internalId = setInterval(() => {
      const playerMove = computerMoveF();
      playGame(playerMove);
      }
    ,1000); 
    isAutoPlaying = true;
    autoPlayButton.innerHTML = 'Stop Playing';
  } else {
    clearInterval(internalId);
    isAutoPlaying = false;
    autoPlayButton.innerHTML = 'Auto Play'
  }
}
// 12s
const autoPlayButton = document.querySelector('.autoPlay-button');
autoPlayButton.addEventListener('click',() => {
  autoPlay()
})
// 12v

function removeConfirm() {
  document.querySelector('.js-confirm')
    .innerHTML = '';
}

function resetScoreConfirm() {
  document.querySelector('.js-confirm')
    .innerHTML = `
      <p class="js-confirm-message">Are you sure you want to reset the score?</p>
      <button class="js-confirm-yes" onclick="
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
          removeConfirm();
      ">Yes</button>

      <button class="js-confirm-no" onclick="
        removeConfirm();
      ">No</button>`
} 

document.querySelector('.reset-button')
  .addEventListener('click',() => {
    resetScoreConfirm();
  })
document.querySelector('.js-player-rock')
  .addEventListener('click', () => {
    playGame('rock');
  })
document.querySelector('.js-player-paper')
  .addEventListener('click', () => {
    playGame('paper');
  })  
document.querySelector('.js-player-scissors')
  .addEventListener('click', () => {
    playGame('scissors');
  }) 

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock');
    } else if (event.key === 'p') {
      playGame('paper');
    } else if (event.key === 's') {
      playGame('scissors');
      // 12u
    } else if (event.key === 'a') {
      autoPlay();
      // 12w
    } else if (event.key === 'Backspace') {
      resetScore();
    }
  })

