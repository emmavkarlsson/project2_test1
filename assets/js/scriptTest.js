// UI elements
let player = document.getElementById('players-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
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

function toggleButtons(isEnabled) {
    for (let button of buttons) {
        if (isEnabled) {
            button.classList.remove("disabled");
        } else {
            button.classList.add("disabled");
        }
    }
}

function makeUserSelection(userChoice) {
    if (gameInProgress == true) {
        return;
    }

    gameInProgress = true;
    toggleButtons(false);

    messageSpan.textContent = "Please wait for computer to select";
    player.textContent = userChoice;
    computer.textContent = "";
    result.textContent = "";

    setTimeout(function() {
        runGame(userChoice);
        gameInProgress = false;
        toggleButtons(true);
    }, 3000);    
}

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

function computerTurn() {

    let randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        return "Rock";
        //computer.textContent = "Rock";
        //break;
      case 2:
        return "Paper";
        //computer.textContent = "Paper";
        //break;
      case 3:
        return "Scissor";
        //computer.textContent = "Scissor";
        //break;
      case 4:
        return "Lizard";
        //computer.textContent = "Lizard";
        //break;
      case 5:
        return "Spock";
        //computer.textContent = "Spock";
    }
}

// Returns:
// 0 = tie
// 1 = user wins
// -1 = computer wins
function checkWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice){
      //document.getElementById('result').textContent = "It's a tie!";
      return 0;
    } 
    
    if (computerChoice == "Rock") {
        return (userChoice == "Paper" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Paper") {
        return (userChoice == "Scissor" || userChoice == "Lizard") ? 1 : -1;
    } 
    
    if (computerChoice == "Scissor") {
        return (userChoice == "Rock" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Lizard") {
        return (userChoice == "Rock" || userChoice == "Scissor") ? 1 : -1;
    } 
    
    if (computerChoice == "Spock") {
        return (userChoice == "Lizard" || userChoice == "Paper") ? 1 : -1;
    }
}

// Result:
// 0 = tie
// 1 = user wins
// -1 = computer wins
function recordResult(result) {
    if (result == 1) {
        userScore++;
        return "You Win!";
    } else if (result == 0) {
        tieGames++;
        return "It's a tie!";
    } else if (result == -1) {
        computerScore++;
        return "You Lose :(";
    }
}

function initializeGame(event) {
    for (let button of buttons) {
        const userChoice = button.name;
        
        button.addEventListener('click', function(event) {
            makeUserSelection(userChoice);
        });
    }
 }
  
document.addEventListener("DOMContentLoaded", initializeGame);

// function addElement() {
//     const newDiv = document.createElement("div");
//     const playerHistory = document.createTextNode(player.textContent);
//     const computerHistory = document.createTextNode(computer.textContent);
//     newDiv.appendChild(playerHistory);
//     newDiv.appendChild(computerHistory);
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
// }


