
//--------Computer Logic-------//
//# Create a function that returns a number from one to three
//# Attach that number to rock, paper or scissors
//# Return the value (rock, paper or scissors)

function computerPlay() {
    const number = (Math.random() * 3);
            if (number <= 1) {
                return 'Rock';
            } else if (number >= 2) {
                return 'Scissors';
            }
            else return 'Paper';
}


//# Initialize playerScore and computerScore

let computerScore = 0;
let playerScore = 0;


//-----------Game Logic---------------//
//# Create a function that takes and compares two parameters and returns a 
//---a string that declares the winner and adds up score using if, else if and else format

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerScore++;
        return `You Lose! Scissors beats rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
    }
    else return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
}


//-------------Game Function-------------//
//# Create a function that prompts player response and passes it through toLowerCase()
//--- use a for loop through the logic five times
//--- set the parameter for computerSelection to compturePlay()
//---use a if, else if and else logic to determine the fianl winner

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}



















































