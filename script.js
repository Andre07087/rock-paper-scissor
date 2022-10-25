function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  let ans;
  switch (rand) {
    case 0:
      ans = "rock";
      break;
    case 1:
      ans = "paper";
      break;
    case 2:
      ans = "scissors";
      break;
  }
  return ans;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "scissors":
        printResultToDom('You Win! Rock beats Scissors')
        increasePlayerScore()
        break;
      case "paper":
        printResultToDom('You Lose! Paper beats Rock')
        increaseComputerScore()
        break;
      case "rock":
        printResultToDom('Draw! Rock ties Rock')
        break;
      default:
        console.warn("error rock vs computer");
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "paper":
        printResultToDom('You Win! Scissors beats Paper')
        increasePlayerScore()
        break;
      case "rock":
        printResultToDom('You Lose! Rock beats Scissors')
        increaseComputerScore()
        break;
      case "scissors":
        printResultToDom('Draw! Scissors ties Scissors')
        break;
      default:
        console.warn("error scissors vs computer");
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        printResultToDom('You Win! Paper beats Rock')
        increasePlayerScore()
        break;
      case "scissors":
        printResultToDom('You Lose! Scissors beats Paper')
        increaseComputerScore()
        break;
      case "paper":
        printResultToDom('Draw! Paper ties Paper')
        break;
      default:
        console.log("error paper vs computer");
    }
  } else {
    console.alert("Invalid input, please try agian");
  }
}

function game() {
  let computerCount = 0;
  let playerCount = 0;
  let roundCount = 1;
  // Loop through each round and keep count of wins
  for (let i = 0; i < 5; i++) {
    let roundWinString = playRound(playerSel, getComputerChoice());
    let resultString = roundWinString.split("!")[0];
    // Report round winner
    console.log(`Round ${roundCount}: ${roundWinString}`);
    roundCount++;
    // Keep track of wins
    if (resultString == "You Win") {
      playerCount++;
    } else if (resultString == "You Lose") {
      computerCount++;
    }
  }
  if (playerCount > computerCount) {
    console.log(
      `You won the game! You win: ${playerCount} to ${computerCount}`
    );
  } else if (computerCount > playerCount) {
    console.log(
      `You lost the game! You lost: ${computerCount} to ${playerCount}`
    );
  } else {
    console.log(`Game is a Draw! ${playerCount} to ${computerCount}`);
  }
}

function printResultToDom (result) {
  resultParagraphDom.textContent = result
}

function increaseComputerScore () {
  computerCount++;
  computerScoreDom.textContent = computerCount
}

function increasePlayerScore () {
  playerCount++;
  playerScoreDom.textContent = playerCount
}

// const playerInput = prompt("Enter rock, paper, or scissors:");
// game();
const resultParagraphDom = document.querySelector('#result-p')
const computerScoreDom = document.querySelector('#computer-score')
const playerScoreDom = document.querySelector('#player-score')
const buttons = document.querySelectorAll('button');
let computerCount = 0;
let playerCount = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id)
    // on click run function
    if (button.id == 'rockBtn'){
      console.log('rock button pressed')
      playRound('rock', getComputerChoice())
    }
    else if (button.id == 'paperBtn'){
      console.log('paper button pressed')
      playRound('paper', getComputerChoice())
    }
    else if (button.id == 'scissBtn'){
      console.log('scissors button pressed')
      playRound('scissors', getComputerChoice())
    }
  })
})