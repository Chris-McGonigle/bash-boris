// Global variables

const holes = document.querySelectorAll('.mole-hole');
const numberHits = document.querySelector('.score');
const numberMiss = document.querySelector('.miss');
const borisMole = document.querySelectorAll('.boris');
const gameBoard = document.querySelector('.hole-area');

const timer = document.querySelector('.time');

// Start of game variables - values will change throughout game session

let timeup = false;
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
    let time = Math.random() * 1500 + 500;
    let chosenHole = selectHole(holes);
    chosenHole.classList.add('peek');
    setTimeout(function(){
        chosenHole.classList.remove('peek');
        if (!timeUp) borisUp();
    }, time);        
}

// Function to add whack sound everytime a mouse is clicked

gameBoard.addEventListener('click', whack);

function whack() {
    let hitSound = document.getElementById("whack-sound");
    hitSound.play()
}

// Function to start timed game

function startTimedGame() {
    countdown = timeLimit/1000;
    numberHits.textContent = 0;
    numberMiss.textContent = 0;
    timer.textContent = 30;
    timeUp = false;
    score = 0;
    borisUp();
    setInterval(countDownTimer,1000);
    setTimeout(() => timeUp = true, 30000);
}

// Function to control a countdown timer

function countDownTimer() {
    if(timer > 0) {
        timer--;
        timer.textContent = timer;
    }
}