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

/*
step 5 instructions
make humanChoice case-insensitive
write playRound code so console populates string saying who wins
increment human/computer score accordingly


*/

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
    console.log(`Your score: ${humanScore}`)
    console.log(`Conmputer score: ${computerScore}`)

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);