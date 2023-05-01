document.addEventListener("DOMContentLoaded", initializeGame);

function initializeGame(event) {
    for (let button of buttons) {
        const userChoice = button.name;
        
        button.addEventListener('click', function(event) {
            makeUserSelection(userChoice);
        });
    }
}

// UI elements
let user = document.getElementById('users-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

let messageSpan = document.getElementById('message');
let winsLabel = document.getElementById('wins');
let tiesLabel = document.getElementById('ties');
let lossesLabel = document.getElementById('losses');
let buttons = document.getElementsByClassName('btn-selection');

// Game variables
let gameInProgress = false;
let userScore = 0;
let computerScore = 0;
let tieGames = 0;

/**
 * Disabling the buttons when the user has clicked on them,
 * as the user waits for the computer to make it's choice,
 * and enabling them again when the results are shown
 */
function toggleButtons(isEnabled) {
    for (let button of buttons) {
        if (isEnabled) {
            button.classList.remove("disabled");
        } else {
            button.classList.add("disabled");
        }
    }
}

/**
 * The game function for when the user has made it's choice
 */
function makeUserSelection(userChoice) {
    if (gameInProgress == true) {
        return;
    }

    gameInProgress = true;
    toggleButtons(false);

    messageSpan.textContent = "Please wait for computer to select";
    user.textContent = userChoice;
    computer.textContent = "";
    result.textContent = "";

    setTimeout(function() {
        runGame(userChoice);
        gameInProgress = false;
        toggleButtons(true);
    }, 1500);    
}

/**
 * Runs the game after the user and computer has made it's choice
 * Updates the score on the scoreboard and 
 * the descriptive text
 */
function runGame(userChoice) {
    const computerChoice = computerTurn();    
    const winner = checkWinner(userChoice, computerChoice);
    const outcome = recordResult(winner);

    messageSpan.textContent = "";
    computer.textContent = computerChoice;
    result.textContent = outcome;

    winsLabel.textContent = userScore;
    tiesLabel.textContent = tieGames;
    lossesLabel.textContent = computerScore;
}

/**
 * Function for determening the computers choice by random numbers
 */
function computerTurn() {

    let randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
      case 4:
        return "Lizard";
      case 5:
        return "Spock";
    }
}

/**
 * Checks the winner of the game
 */
function checkWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice){
      return 0;
    } 
    
    if (computerChoice == "Rock") {
        return (userChoice == "Paper" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Paper") {
        return (userChoice == "Scissors" || userChoice == "Lizard") ? 1 : -1;
    } 
    
    if (computerChoice == "Scissors") {
        return (userChoice == "Rock" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Lizard") {
        return (userChoice == "Rock" || userChoice == "Scissors") ? 1 : -1;
    } 
    
    if (computerChoice == "Spock") {
        return (userChoice == "Lizard" || userChoice == "Paper") ? 1 : -1;
    }
}

/**
 * Increments the scores and records the results
 */
function recordResult(result) {
    if (result == 1) {
        userScore++;
        return "You Win!";
    } else if (result == 0) {
        tieGames++;
        return "It's a tie!";
    } else if (result == -1) {
        computerScore++;
        return "You Lose!";
    }
}