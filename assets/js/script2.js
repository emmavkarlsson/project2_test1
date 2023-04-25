
let player = document.getElementById('players-choice');
let playerResult = player.textContent;
let computerResult = document.getElementById('computers-choice').textContent;
let result = document.getElementById('result').textContent;


let rock = document.getElementById('rock');
rock.addEventListener('click', rockClick);

function rockClick(event) {
    player.textContent = 'Rock';
    computerTurn();
    checkWinner();
}

let paper = document.getElementById('paper');
paper.addEventListener('click', paperClick);

function paperClick(event) {
    player.textContent = 'Paper';
    computerTurn();
    checkWinner();
}

let scissor = document.getElementById('scissor');
scissor.addEventListener('click', scissorClick);

function scissorClick(event) {
    document.getElementById('players-choice').textContent = 'Scissor';
    computerTurn();
    checkWinner();
}

let lizard = document.getElementById('lizard');
lizard.addEventListener('click', lizardClick);

function lizardClick(event) {
    document.getElementById('players-choice').textContent = 'Lizard';
    computerTurn();
    checkWinner();
}

let spock = document.getElementById('spock');
spock.addEventListener('click', spockClick);

function spockClick(event) {
    document.getElementById('players-choice').textContent = 'Spock';
    computerTurn();
    checkWinner();
}


// let choices = {
//     rock: { defeats: ['scissors', 'lizard'] },
//     paper: { defeats: ['rock', 'spock'] },
//     scissor: { defeats: ['paper', 'lizard'] },
//     lizard: { defeats: ['paper', 'spock'] },
//     spock: { defeats: ['rock', 'scissors'] }
// };

// function computersChoice() {
//     let choiceKeys = Object.keys(choices);
//     let randomIndex = Math.floor(Math.random() * choiceKeys.length);
//     document.getElementById('computers-choice').textContent = [randomIndex];
//     console.log('hey');
// }

function computerTurn(){

    let randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        document.getElementById('computers-choice').textContent = "Rock";
        break;
      case 2:
        document.getElementById('computers-choice').textContent = "Paper";
        break;
      case 3:
        document.getElementById('computers-choice').textContent = "Scissor";
        break;
      case 4:
        document.getElementById('computers-choice').textContent = "Lizard";
        break;
      case 5:
        document.getElementById('computers-choice').textContent = "Spock";
    }
}




function checkWinner(){
    if(document.getElementById('players-choice').textContent == document.getElementById('computers-choice').textContent){
      document.getElementById('result').textContent = "It's a draw!";
    }
    else if (document.getElementById('computers-choice').textContent == "Rock") {
        document.getElementById('result').textContent = "You lost!";
    }
}