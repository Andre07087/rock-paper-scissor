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

function findRoundWinner(playerSelection, computerSelection) {
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

  for (let i = 0; i < 5; i++) {
    let roundWinString = findRoundWinner(playerSel, getComputerChoice());
    let resultString = roundWinString.split("!")[0];

    console.log(`Round ${roundCount}: ${roundWinString}`);
    roundCount++;

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
    console.log(
      `Game is a Draw! ${playerCount} to ${computerCount}`
    );
  }
}

const playerSel = prompt("Enter rock, paper, or scissors:");
game();
