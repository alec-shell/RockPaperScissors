let humanScore = 0;
let computerScore = 0;

alert("OPEN THE CONSOLE");

console.log("Welcome to ROCK PAPER SCISSORS!");
playGame()

function getComputerChoice() {
    let moves = ["R", "P", "S"];
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

function getHumanChoice() {
    return prompt("Rock (R), Paper (P), or Scissors (S)? ").toUpperCase();
}

function playRound() {
    let compMove = getComputerChoice();
    let userMove = getHumanChoice();
    let result = "Round lost!";

    if (compMove === userMove) {
        result = "Tie!";
    }
    else if (compMove === "R" && userMove === "P") {
        result = "Round won!";
    }
    else if (compMove === "P" && userMove === "S") {
        result = "Round won!";
    }
    else if (compMove === "S" && userMove === "R") {
        result = "Round won!";
    }

    if (result === "Round lost!") {
        computerScore ++;
    }
    else if (result === "Round won!") {
        humanScore++;
    }
    console.log(result);
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }
    if (humanScore === 5) {
        console.log("You win!");
    }
    else {
        console.log("Better luck next time!");
    }
    location.reload();
}
