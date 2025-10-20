/* 
function to generate number between 0 - 2
 convert number to String
 return string to computerChoice
*/

function getComputerChoice() {
    const convertNumber = Math.floor(Math.random() * 3);
    // console.log(convertNumber)
    switch (convertNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/* 
Return a valid choice based on users input
Use prompt
Assume user ALWAYS enters a valid choice
Test function

prompt user to choose rock paper or scissors
*/

function getHumanChoice() {
    const humanChoice = prompt ("Choose rock, paper, or scissors");
    return humanChoice;
}

console.log(getHumanChoice());


