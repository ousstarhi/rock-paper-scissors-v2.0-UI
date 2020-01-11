// const buttons = document.querySelectorAll('#player-choices > div > img');
// buttons.forEach(myFunction);

const rock = 'computer-rock';
const paper = 'computer-paper';
const scissors = 'computer-scissors';
const choices = [rock, paper, scissors];

function computerPlay() {
  const choiceNumber = Math.floor(Math.random() * choices.length);
  return choices[choiceNumber];
}

const playerChoices = document.querySelector('#player-choices');
const computerChoices = document.querySelectorAll('#computer-choices div');
const resultMessage = document.querySelector('#message');
const computerScore = document.querySelectorAll('#computer-score .star');
const playerScore = document.querySelectorAll('#player-score .star');

playerChoices.addEventListener('click', (e) => {
  function checkClass(star) {
    return !star.classList.contains('active');
  }
  function checkAll(star) {
    return !(star.classList.contains('active'));
  }
  if (e.target.className === 'player-choice') {
    const computerChoice = computerPlay();
    if (resultMessage.childNodes[0]) {
      resultMessage.removeChild(resultMessage.childNodes[0]);
    }
    if (e.target.id === 'rock' && computerChoice === rock) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Rock</h2>');
    } else if (e.target.id === 'rock' && computerChoice === paper) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Paper</h2>');
    } else if (e.target.id === 'rock' && computerChoice === scissors) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Scissors</h2>');
    } else if (e.target.id === 'paper' && computerChoice === rock) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Rock</h2>');
    } else if (e.target.id === 'paper' && computerChoice === paper) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Paper</h2>');
    } else if (e.target.id === 'paper' && computerChoice === scissors) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Scissors</h2>');
    } else if (e.target.id === 'scissors' && computerChoice === rock) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Rock</h2>');
    } else if (e.target.id === 'scissors' && computerChoice === paper) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Paper</h2>');
    } else if (e.target.id === 'scissors' && computerChoice === scissors) {
      resultMessage.insertAdjacentHTML('beforeend', '<h2>Computer choice was: Scissors</h2>');
    }
    computerChoices.forEach((choice) => {
      if (computerChoice === choice.id) {
        choice.classList.add('active');
      } else {
        choice.classList.remove('active');
      }
    });
    if ((e.target.id === 'rock' && computerChoice === paper) || (e.target.id === 'paper' && computerChoice === scissors) || (e.target.id === 'scissors' && computerChoice === rock)) {
      const firstScore = Array.from(computerScore).find(checkClass);
      firstScore.classList.add('active');
      const computerWin = Array.from(computerScore).some(checkAll);
      if (!computerWin) {
        alert('Game over');
      }
    }
    if ((e.target.id === 'rock' && computerChoice === scissors) || (e.target.id === 'paper' && computerChoice === rock) || (e.target.id === 'scissors' && computerChoice === paper)) {
      const firstScore = Array.from(playerScore).find(checkClass);
      firstScore.classList.add('active');
      const playerWin = Array.from(playerScore).some(checkAll);
      if (!playerWin) {
        alert('Game over');
      }
    }
  }
});

const modalBtn = document.getElementById('modal-btn');
const myModal = document.getElementById('myModal');
function modalFunction(e) {
  if (e.target.tagName === 'BUTTON') {
    myModal.classList.add('display-block');
  }
}
modalBtn.addEventListener('click', modalFunction);
const replayBtn = document.getElementById('replay-btn');
replayBtn.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    myModal.classList.remove('display-block');
  }
});
