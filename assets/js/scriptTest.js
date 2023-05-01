let player = document.getElementById('players-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

let messageSpan = document.getElementById('message');
let buttons = document.getElementsByTagName('button');

function selectUserValue(event) {
	player.textContent = event.target.name;
}

function initializeGame(event) {
  for (let button of buttons) {
      button.addEventListener('click', runGameWithTimeout);
  }
}

document.addEventListener("DOMContentLoaded", initializeGame);

function runGameWithTimeout(event) {
    selectUserValue(event);
    messageSpan.textContent = "Please wait for the computer to select";
    // toggleButtons(true);
    setTimeout(runGame, 2000);
}
 
// not working!!!!!

// function toggleButtons(flag) {
//     Array.from(document.getElementsByClassName("btn")).forEach(toggleButton);
// }

// function toggleButton(buttonElement) {
//     buttonElement.disabled = flag;
//     if (!flag) {
//         buttonElement.classList.add("disabled");
//     } else {
//         buttonElement.classList.remove("disabled");
//     }
// }
 
function runGame() {
    computerTurn();
    messageSpan.textContent = "";
    checkWinner();
    scores();
    // toggleButtons(true);
}

function computerTurn() {

    let randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        computer.textContent = "Rock";
        break;
      case 2:
        computer.textContent = "Paper";
        break;
      case 3:
        computer.textContent = "Scissor";
        break;
      case 4:
        computer.textContent = "Lizard";
        break;
      case 5:
        computer.textContent = "Spock";
    }
}

function checkWinner() {
    if(player.textContent == computer.textContent){
      document.getElementById('result').textContent = "It's a tie!";
    } else if (computer.textContent == "Rock") {
        return (player.textContent == "Paper" || player.textContent == "Spock") ? result.textContent = "You won!" : result.textContent = "You lost!";
    } else if (computer.textContent == "Paper") {
        return (player.textContent == "Scissor" || player.textContent == "Lizard") ? result.textContent = "You won!" : result.textContent = "You lost!";
    } else if (computer.textContent == "Scissor") {
        return (player.textContent == "Rock" || player.textContent == "Spock") ? result.textContent = "You won!" : result.textContent = "You lost!";
    } else if (computer.textContent == "Lizard") {
        return (player.textContent == "Rock" || player.textContent == "Scissor") ? result.textContent = "You won!" : result.textContent = "You lost!";
    } else if (computer.textContent == "Spock") {
        return (player.textContent == "Lizard" || player.textContent == "Paper") ? result.textContent = "You won!" : result.textContent = "You lost!";
    }
}

function scores() {
    if (result.textContent == "You won!") {
        incrementWins();
    } else if (result.textContent == "It's a tie!") {
        incrementTies();
    } else if (result.textContent == "You lost!") {
        incrementLosses();
    }
}

function incrementWins() {
    let oldWins = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++oldWins;
}

function incrementTies() {
    let oldTies = parseInt(document.getElementById('ties').innerText);
    document.getElementById('ties').innerText = ++oldTies;
}

function incrementLosses() {
    let oldLosses = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++oldLosses;
}

// function addElement() {
//     const newDiv = document.createElement("div");
//     const playerHistory = document.createTextNode(player.textContent);
//     const computerHistory = document.createTextNode(computer.textContent);
//     newDiv.appendChild(playerHistory);
//     newDiv.appendChild(computerHistory);
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
// }


