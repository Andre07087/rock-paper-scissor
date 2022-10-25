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
        printResultToDom("You Win! Rock beats Scissors");
        increaseScore("player");
        break;
      case "paper":
        printResultToDom("You Lose! Paper beats Rock");
        increaseScore("computer");
        break;
      case "rock":
        printResultToDom("Draw! Rock ties Rock");
        break;
      default:
        console.warn("error rock vs computer");
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "paper":
        printResultToDom("You Win! Scissors beats Paper");
        increaseScore("player");
        break;
      case "rock":
        printResultToDom("You Lose! Rock beats Scissors");
        increaseScore("computer");
        break;
      case "scissors":
        printResultToDom("Draw! Scissors ties Scissors");
        break;
      default:
        console.warn("error scissors vs computer");
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        printResultToDom("You Win! Paper beats Rock");
        increaseScore("player");
        break;
      case "scissors":
        printResultToDom("You Lose! Scissors beats Paper");
        increaseScore("computer");
        break;
      case "paper":
        printResultToDom("Draw! Paper ties Paper");
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

function printResultToDom(result) {
  resultParagraphDom.textContent = result;
}

function increaseScore(winner) {
  if (winner == "computer") {
    computerCount++;
    computerScoreDom.textContent = computerCount;
  } else {
    playerCount++;
    playerScoreDom.textContent = playerCount;
  }
  checkWinner();
}

function checkWinner() {
  if (computerCount == 5) {
    gameWinnerDom.textContent = "You Lose!";
    appendTryAgainBtn();
  } else if (playerCount == 5) {
    gameWinnerDom.textContent = "You Win!!!";
    appendTryAgainBtn();
  }
}

function tryAgain() {
  computerCount = 0;
  playerCount = 0;
  computerScoreDom.textContent = computerCount;
  playerScoreDom.textContent = playerCount;
  gameWinnerDom.textContent = "";
  resultParagraphDom.textContent = "";
}

function appendTryAgainBtn() {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Try Again";
  buttonEl.setAttribute("id", "try-again-btn");
  tryAgainDiv.appendChild(buttonEl);

  buttonEl.addEventListener("click", () => {
    tryAgain();
    const tryAgainBtn = document.querySelector("#try-again-btn");
    tryAgainBtn.remove();
  });
}

// const playerInput = prompt("Enter rock, paper, or scissors:");
// game();
const resultParagraphDom = document.querySelector("#result-p");
const gameWinnerDom = document.querySelector("#game-winner");
const computerScoreDom = document.querySelector("#computer-score");
const playerScoreDom = document.querySelector("#player-score");
const tryAgainDiv = document.querySelector("#try-again-div");
const buttons = document.querySelectorAll("button");
let computerCount = 0;
let playerCount = 0;

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", () => {
    console.log(button.id);
    // on click run function
    if (button.id == "rock-btn") {
      console.log("rock button pressed");
      playRound("rock", getComputerChoice());
    } else if (button.id == "paper-btn") {
      console.log("paper button pressed");
      playRound("paper", getComputerChoice());
    } else if (button.id == "sciss-btn") {
      console.log("scissors button pressed");
      playRound("scissors", getComputerChoice());
    }
  });
});
