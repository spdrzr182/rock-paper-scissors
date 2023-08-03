
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
        result.innerText = `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        result.innerText = `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        result.innerText = `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        result.innerText = `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerScore++;
        result.innerText = `You Lose! Scissors beats rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        result.innerText = `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
    }
    else result.innerText = `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
}


//-------------Game Function-------------//
//# Create a function that prompts player response and passes it through toLowerCase()
//--- use a for loop through the logic five times
//--- set the parameter for computerSelection to compturePlay()
//---use a if, else if and else logic to determine the fianl winner

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Type: Rock, Paper, or Scissors')
//         playerSelection = playerSelection.toLowerCase();
//         const computerSelection = computerPlay()
//         console.log(playRound(playerSelection, computerSelection))
//     }
//     if (playerScore > computerScore) {
//         console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
//     } else
//         console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
// }







document.getElementById("rock").addEventListener("click", function game() {
        let playerSelection = 'rock'
        const computerSelection = computerPlay()
        console.log = (playRound(playerSelection, computerSelection))
        output.innerText = `Computer chose ${computerSelection}`

    if (playerScore > computerScore) {
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
    } else
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
})
    
document.getElementById("paper").addEventListener("click", function game(){
    let playerSelection = 'paper'
        const computerSelection = computerPlay()
        console.log = (playRound(playerSelection, computerSelection))
        output.innerText = `Computer chose ${computerSelection}`

    if (playerScore > computerScore) {
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
    } else
        score.innerText = (`Score: ${playerScore} to ${computerScore}`);
});
    
document.getElementById("scissors").addEventListener("click", function game(){
    let playerSelection = 'scissors'
    const computerSelection = computerPlay()
    console.log = (playRound(playerSelection, computerSelection))
    output.innerText = `Computer chose ${computerSelection}`

if (playerScore > computerScore) {
    score.innerText = (`Score: ${playerScore} to ${computerScore}`);
} else if (computerScore > playerScore) {
    score.innerText = (`Score: ${playerScore} to ${computerScore}`);
} else
    score.innerText = (`Score: ${playerScore} to ${computerScore}`);
});

// if (computerScore === 5) {
//     score.innerText = (`Game Over, You Lose. Final Score: ${playerScore} to ${computerScore}`);
// } else if (playerScore === 5) { 
//     score.innerText = (`Game Over, You Win! Final Score: ${playerScore} to ${computerScore}`);
//     } else {
//     score.innerText = (`Tie! ${playerScore} to ${computerScore}`);
//     }

// Still need to add a declared winner with final score and game end

let output = document.querySelector("#output");
let result = document.querySelector('#result');
let score = document.querySelector('#score');







































