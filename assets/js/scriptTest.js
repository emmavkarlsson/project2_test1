let player = document.getElementById('players-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');


let buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.addEventListener('click', runGame);
}

function playerTurn(){
    if (rock.clicked == true) {
        document.getElementById('players-choice').textContent = 'Rock';
    } else if (paper.clicked == true) {
        document.getElementById('players-choice').textContent = 'Paper';
    } else if (scissor.clicked == true) {
        document.getElementById('players-choice').textContent = 'Scissors';
    } else if (lizard.clicked == true) {
        document.getElementById('players-choice').textContent = 'Lizard';
    } else if (spock.clicked == true) {
        document.getElementById('players-choice').textContent = 'Spock';
    }
}

function runGame() {
    playerTurn();
    computerTurn();
    checkWinner();
    scores();
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
    } else if (result.textContent == "You lost!") {
        incrementLosses();
    }
}

function incrementWins() {
    let oldWins = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++oldWins;
}

function incrementLosses() {
    let oldLosses = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++oldLosses;
}