console.log("Hello World");

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


function findWinner(playerSelection, computerSelection) {
  console.log(`The computer chose ${computerSelection}`)
  if (playerSelection.toLowerCase() == 'rock') {
    switch (computerSelection) {
      case 'scissors':
        console.log("Rock beats sciccors, you win")
        break;
      case 'paper':
        console.log("Rock losses to paper, you lose")
        break;
      case 'rock':
        console.log("Rock vs Rock, Draw")
        break;
      default:
        console.log("error")
    }
  } else if (playerSelection.toLowerCase() == 'scissors'){
    switch (computerSelection) {
      case 'rock':
        console.log('Scissors vs Rock, You lose')
        break;
      case 'paper':
        console.log('Scissors vs Paper, You win')
        break;
      case 'scissors':
        console.log('Scissors vs Scissors, draw')
        break;
      default:
        console.log('error')
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    switch(computerSelection){
      case 'rock':
        console.log('Paper vs rock, you win')
        break;
      case 'scissors':
        console.log('Paper vs scissors, you lose')
        break;
      case 'paper':
        console.log('Paper vs Paper, draw')
        break;
      default:
        console.log("error")
    }
  } else {
    console.log('Invalid input, please try agian')
  }
}

const playerSel = 'scissors'

findWinner(playerSel,getComputerChoice());


