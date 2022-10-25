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
  if (playerSelection.toLowerCase() == "rock") {
    switch (computerSelection) {
      case "scissors":
        return "You Win! Rock beats Scissors";
      case "paper":
        return "You Lose! Paper beats Rock";
      case "rock":
        return "Draw! Rock ties Rock";
      default:
        console.warn("error rock vs computer");
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    switch (computerSelection) {
      case "paper":
        return "You Win! Scissors beats Paper";
      case "rock":
        return "You Lose! Rock beats Scissors";
      case "scissors":
        return "Draw! Scissors ties Scissors";
      default:
        console.warn("error scissors vs computer");
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    switch (computerSelection) {
      case "rock":
        return "You Win! Paper beats Rock";
      case "scissors":
        return "You Lose! Scissors beats Paper";
      case "paper":
        return "Draw! Paper ties Paper";
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
  const resultSection = document.querySelector('#result-p')
  resultSection.textContent = result
}

// const sectionList = document.querySelectorAll('section')


const resultStringg = "Heeyyyo rock won"
printResultToDom(resultStringg)
// const playerInput = prompt("Enter rock, paper, or scissors:");
// game();

const buttons = document.querySelectorAll('button');

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