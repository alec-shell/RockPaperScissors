function getComputerChoice() {
    let moves = ["R", "P", "S"];
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

function endMessage() {
    let message = "You win!"
    if (computerScore >= 5) {
        message = "You lose!"
    } 
    const resetButton = document.createElement("button");
    resetButton.innerText = "New Game";
    resetButton.setAttribute("style", "padding: 5px 10px; font-weight: 900; font-size: 32px; color: white; background-color: green; border: 3px solid rgb(8, 187, 8); border-radius: 5px;");
    resetButton.addEventListener("click", () => window.location.reload());
    display.innerText = "";
    display.innerText = message;
    display.setAttribute("style", "font-weight: 900; font-size: 50px;")
    display.appendChild(resetButton);
}

function displayOutput(result) {
    display.innerText = "";
    let banner = document.createElement("div");
    banner.innerText = "Scores:";
    let scores = document.createElement("div");
    scores.innerText = `You: ${humanScore} Opponent: ${computerScore}`;
    let winner = document.createElement("div");
    winner.innerText = result;
    winner.setAttribute("style", "font-weight: 900; font-size: 32px;");
    display.appendChild(banner);
    display.appendChild(scores);
    display.appendChild(winner);
}

function playRound(userMove) {
    let compMove = getComputerChoice();
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
    const gameOver = function() {return humanScore >= 5 || computerScore >= 5};
    if (gameOver()) endMessage();
    else displayOutput(result);
}


let humanScore = 0;
let computerScore = 0;

const display = document.querySelector("#output");
const moves = document.querySelectorAll(".moves");

displayOutput("Select a move to begin!");

moves.forEach((btn) => {
    btn.addEventListener("click", (e) => playRound(e.target.value));
});
