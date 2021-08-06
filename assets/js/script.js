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

// Event Listener to see if successful hit

borisMole.forEach(boris => boris.addEventListener('click',success));

// Function to count hits and increase score

function success(e) {
    if(!e.isTrusted) return; // someone is cheating!!!
    score++;
    this.parentNode.classList.remove('peek');
    numberHits.textContent = score;
}

// Function to count misses and increase miss count

let totalClicks = document.getElementById("hole-area"),
    count = 0;
totalClicks.onclick = function(){
    count ++;
    numberMiss.textContent = count - score;
}

// Functions to open and close rules pop up

function openRules() {
    let rulesWindow = document.getElementById('rules');
    rulesWindow.style.display = "block";
}

function closeRules() {
    let rulesWindow = document.getElementById('rules');
    rulesWindow.style.display = "none";
}

// Functions to open and close feedback pop up

function openFeedback() {
    let rulesWindow = document.getElementById('feedback');
    rulesWindow.style.display = "block";
}

function closeFeedback() {
    let rulesWindow = document.getElementById('feedback');
    rulesWindow.style.display = "none";
}