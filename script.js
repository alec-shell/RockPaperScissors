function getComputerChoice() {
    let moves = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

function displayOutput(result, comp = "") {
    display.innerText = "";
    let banner = document.createElement("div");
    banner.innerText = "Scores:";
    let scores = document.createElement("div");
    scores.innerText = `You: ${humanScore} Opponent: ${computerScore}`;
    let winner = document.createElement("div");
    winner.innerText = result;
    winner.setAttribute("style", "font-weight: 900; font-size: 32px;");
    let compMove = document.createElement("div");
    compMove.innerText = `Opponent chose: ${comp}`
    display.appendChild(banner);
    display.appendChild(scores);
    display.appendChild(compMove);
    display.appendChild(winner);
}

function endMessage() {
    let message = "You win!"
    if (computerScore >= 5) {
        message = "You lose!"
    } 
    const resetButton = document.createElement("button");
    resetButton.innerText = "New Game";
    resetButton.setAttribute("style", "padding: 5px 10px; font-weight: 900; font-size: 28px; color: white; background-color: rgb(223, 152, 21); border: 3px solid white; border-radius: 5px;");
    resetButton.addEventListener("click", () => window.location.reload());
    display.innerText = "";
    display.innerText = message;
    display.setAttribute("style", "font-weight: 900; font-size: 40px;");
    display.appendChild(resetButton);
}

function playRound(userMove) {
    let compMove = getComputerChoice();
    let result = "Round lost!";

    if (compMove === userMove) {
        result = "Tie!";
    }
    else if (compMove === "Rock" && userMove === "Paper") {
        result = "Round won!";
    }
    else if (compMove === "Paper" && userMove === "Scissors") {
        result = "Round won!";
    }
    else if (compMove === "Scissors" && userMove === "Rock") {
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
    else displayOutput(result, compMove);
}

//execution

let humanScore = 0;
let computerScore = 0;

const display = document.querySelector("#output");
const moves = document.querySelectorAll(".moves");

displayOutput("Select a move to begin!");

moves.forEach((btn) => {
    btn.addEventListener("click", (e) => playRound(e.target.value));
});
