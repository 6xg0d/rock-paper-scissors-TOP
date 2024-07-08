/*Global score*/
let humanScore = 0;
let computerScore = 0;

/*Get human choice*/
function getHumanChoice() {
  const humanChoice = prompt("Choose between paper, scissors and rock:");
  return humanChoice;
}
/*Get computer choice*/
function getComputerChoice(){
  const computerDecision = Math.floor(Math.random() * 3);
  if (computerDecision === 0) {
    return "rock";
  }
  else if (computerDecision === 1) {
    return "paper";
  }
  else {
    return "scissors"; 
  }
}
/*Play round*/
function playRound(humanSelection, computerSelection) {
  if(humanSelection === computerSelection) {
    console.log(`Draft! You both chose: ${humanSelection}`);
  }
  else {
    if (humanSelection === "rock" && computerSelection === "paper") {
      console.log(`You lose! ${humanSelection} loses against ${computerSelection}`);
      computerScore++;
    }
    else if (humanSelection === "paper" && computerSelection === "scissors") {
      console.log(`You lose! ${humanSelection} loses against ${computerSelection}`);
      computerScore++;
    }
    else if(humanSelection === "scissors" && computerSelection === "rock") {
      console.log(`You lose! ${humanSelection} loses against ${computerSelection}`);
      computerScore++;
    }
    else {
      console.log(`Hip hip hurra, you won! ${humanSelection} wins over ${computerSelection}`);
      humanScore++;
    }
  }
}

/*play 5 rounds*/
function playGame() {
  for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection)
}
  if (humanScore === computerScore) {
    console.log(`Damnit!! We need to this never happen again, we finished ${humanScore} to ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
  }
  else if (humanScore > computerScore) {
    console.log(`Humans beats machines!! you won ${humanScore} to ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
  }
  else {
    console.log(`WHAAAAT, humanity has lose against machines... you lose ${humanScore} to ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
  }
}
