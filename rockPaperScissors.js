function getComputerChoice() {
    const convertNumber = Math.floor(Math.random() * 3);
    console.log(convertNumber)
    switch (convertNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}



console.log(getComputerChoice())


// function to generate number between 0 - 2
// convert number to String
// return string to computerChoice