// Global variables

const holes = document.querySelectorAll('.mole-hole');
const numberHits = document.querySelector('.score');
const numberMiss = document.querySelector('.miss');
const borisMole = document.querySelectorAll('.boris');

const timer = document.querySelector('.time');

// Start of game variables - values will change throughout game session

let timeUp = false;
let timeLimit = 30000;
let score = 0;
let countdown;
let lastHole;

// Function to select a hole at random

function selectHole(holes) {
    let randomHole = Math.floor(Math.random() * holes.length);
    let hole = holes[randomHole];
    if (hole === lastHole){
        return selectHole(holes);
    }
    lastHole = hole;
    return hole;
}

// Function to animate mole up and hide after random period of time until game over timer

function borisUp() {
    let time = Math.random() * 2500 + 500;
    let chosenHole = selectHole(holes);
    chosenHole.classList.add('peek');
    setTimeout(function(){
        chosenHole.classList.remove('peek');
        if (!timeUp) borisUp();
    }, time);        
}