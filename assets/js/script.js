// Global variables

const holes = document.querySelectorAll('.mole-hole');
const numberHits = document.querySelector('.score');
const numberMiss = document.querySelector('.miss');
const borisMole = document.querySelectorAll('.boris');
const gameBoard = document.querySelector('.hole-area');

const timer = document.getElementById("time-left");

// Start of game variables - values will change throughout game session

let timeUp = false;
let timeLimit = 30000;
let timeLeft = timer.textContent;
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
        else openScore();
    }, time);        
}

// Function to add whack sound everytime a mouse is clicked

gameBoard.addEventListener('click', whack);

function whack() {
    let hitSound = document.getElementById("whack-sound");
    hitSound.play();
}

// Function to start timed game

function startTimedGame() {
    scoreWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    rulesWindow.style.display = "none";
    numberHits.textContent = 0;
    score = 0;
    numberMiss.textContent = 0;
    timer.textContent = 30;
    borisUp();
    setInterval(countDownTimer,1000);
    setTimeout(() => timeUp = true, 30000);
    }

// Function to control a countdown timer

function countDownTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timer.textContent = timeLeft;
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

var rulesWindow = document.getElementById('rules');

function openRules() {
    rulesWindow.style.display = "flex";
    scoreWindow.style.display = "none";
    feedbackWindow.style.display = "none";
}

function closeRules() {
    scoreWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    rulesWindow.style.display = "none";
}

// Functions to open and close feedback pop up

var feedbackWindow = document.getElementById('feedback');

function openFeedback() {
    feedbackWindow.style.display = "flex";
    scoreWindow.style.display = "none";
    rulesWindow.style.display = "none";
}

function closeFeedback() {
    scoreWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    rulesWindow.style.display = "none";
}

// Function to display thank you message after rating submit

var fbtn = document.getElementById("feedback-submit");
var submitted = document.querySelector(".submitted");
var rating = document.querySelector("star-rating");

fbtn.onclick = () => {
    rating.style.display = "none";
    submitted.style.display = "block";
}

// Functions to open and close scores pop up

var scoreWindow = document.getElementById('final-score');

function openScore() {
    scoreWindow.style.display = "block";
    feedbackWindow.style.display = "none";
    rulesWindow.style.display = "none";

    document.getElementById("fscore").textContent = score ;
}

function closeScore() {
    scoreWindow.style.display = "none";
    feedbackWindow.style.display = "none";
    rulesWindow.style.display = "none";
}