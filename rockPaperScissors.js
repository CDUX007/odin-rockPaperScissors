function getComputerChoice() {
    const convertNumber = Math.floor(Math.random() * 3);
    switch (convertNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt ("Choose rock, paper, or scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`You choose ${humanChoice}`);
    console.log(`Computer chooses ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log(`Tie - you both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win - ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win - ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win - ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lost - ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function newSelection() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} - Human ${humanScore} | Computer ${computerScore}`)
        if (i < 4) {newSelection();
        } else {
            if (humanScore === computerScore) {
                console.log("After five round, we end with a draw");
            } else if (humanScore > computerScore) {
                console.log(`After five rounds, you are the overall winner, ${humanScore} vs ${computerScore}`);
            } else {
                console.log(`After five rounds, Computer is the overall winner, ${computerScore} vs ${humanScore}`)    
            }
        }
    }
}

playGame()