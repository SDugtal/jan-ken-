let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".message");
const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const resetButton = document.querySelector(".rst");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    // Update the score display
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice == "paper") {
            userWin = compChoice !== "scissors";
        } else {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Reset the scores
resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
});
