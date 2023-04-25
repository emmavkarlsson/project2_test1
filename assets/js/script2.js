let player = document.getElementById('players-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');


let rock = document.getElementById('rock');
rock.addEventListener('click', rockClick);

function rockClick(event) {
    player.textContent = 'Rock';
    computerTurn();
    checkWinner();
    scores();
}

let paper = document.getElementById('paper');
paper.addEventListener('click', paperClick);

function paperClick(event) {
    player.textContent = 'Paper';
    computerTurn();
    checkWinner();
    scores();
}

let scissor = document.getElementById('scissor');
scissor.addEventListener('click', scissorClick);

function scissorClick(event) {
    player.textContent = 'Scissor';
    computerTurn();
    checkWinner();
    scores();
}

let lizard = document.getElementById('lizard');
lizard.addEventListener('click', lizardClick);

function lizardClick(event) {
    player.textContent = 'Lizard';
    computerTurn();
    checkWinner();
    scores();
}

let spock = document.getElementById('spock');
spock.addEventListener('click', spockClick);

function spockClick(event) {
    player.textContent = 'Spock';
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
      document.getElementById('result').textContent = "It's a draw!";
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