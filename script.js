const startScreen = document.getElementById("start-screen");

const playerNameInput = document.getElementById("player-name");

const startGameButton = document.getElementById("start-game");

const playerNameDisplay =
    document.getElementById("player-name-display");

const nameError =
    document.getElementById("name-error");


let playerName = "";


startGameButton.addEventListener("click", startGame);


playerNameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        startGame();

    }

});


function startGame() {

    const name = playerNameInput.value.trim();


    if (name === "") {

        nameError.style.display = "block";

        playerNameInput.focus();

        return;

    }


    playerName = name;


    playerNameDisplay.textContent = playerName;


    startScreen.classList.add("hide");

}
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");

const result = document.getElementById("result");

const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");
const drawsElement = document.getElementById("draws");

const choiceButtons = document.querySelectorAll(".choice");
const playAgainButton = document.getElementById("play-again");


let wins = 0;
let losses = 0;
let draws = 0;


const hands = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};


choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        playGame(playerChoice);

    });

});


function playGame(playerChoice) {

    const choices = ["rock", "paper", "scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];


    playerHand.textContent = hands[playerChoice];
    computerHand.textContent = hands[computerChoice];


    playerHand.classList.remove("shake");
    computerHand.classList.remove("computer-shake");


    void playerHand.offsetWidth;
    void computerHand.offsetWidth;


    playerHand.classList.add("shake");
    computerHand.classList.add("computer-shake");


    setTimeout(() => {

        checkWinner(playerChoice, computerChoice);

    }, 500);

}


function checkWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {

        draws++;

        result.textContent = "Draw!";

    }

    else if (

        (playerChoice === "rock" && computerChoice === "scissors") ||

        (playerChoice === "paper" && computerChoice === "rock") ||

        (playerChoice === "scissors" && computerChoice === "paper")

    ) {

        wins++;

        result.textContent = "You Won!";

    }

    else {

        losses++;

        result.textContent = "You Lost!";

    }


    updateScore();

}


function updateScore() {

    winsElement.textContent = wins;

    lossesElement.textContent = losses;

    drawsElement.textContent = draws;

}


playAgainButton.addEventListener("click", () => {

    playerHand.textContent = "✊";
    computerHand.textContent = "✊";

    result.textContent = "Choose your move!";

    playerHand.classList.remove("shake");
    computerHand.classList.remove("computer-shake");

});