document.addEventListener('DOMContentLoaded', playersChoice());

function playersChoice () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('id') === "rock") {
                document.getElementById('players-choice').textContent = 'Rock';
            } else if (this.getAttribute('id') === "paper") {
                document.getElementById('players-choice').textContent = 'Paper';
            } else if (this.getAttribute('id') === "scissor") {
                document.getElementById('players-choice').textContent = 'Scissors';
            } else if (this.getAttribute('id') === "lizard") {
                document.getElementById('players-choice').textContent = 'Lizard';
            } else if (this.getAttribute('id') === "spock") {
                document.getElementById('players-choice').textContent = 'Spock';
            }
        })
    } 
}

// let rock = document.getElementById('rock');
// let paper = document.getElementById('paper');
// let scissor = document.getElementById('scissor');
// let lizard = document.getElementById('lizard');
// let spock = document.getElementById('spock');



Define an object to represent the game choices
let choices = {
    rock: { defeats: ['scissors', 'lizard'] },
    paper: { defeats: ['rock', 'spock'] },
    scissor: { defeats: ['paper', 'lizard'] },
    lizard: { defeats: ['paper', 'spock'] },
    spock: { defeats: ['rock', 'scissors'] }
  };

function computersChoice() {
    let choiceKeys = Object.keys(choices);
    let randomIndex = Math.floor(Math.random() * choiceKeys.length);
    document.getElementById('computers-choice').textContent = 'choiceKeys[randomIndex]';
    console.log('hey');
}


