let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let rangeStart = 1;
let rangeEnd = 2;
let randomNumber = generateRandomNumber(rangeStart, rangeEnd);

function saveName() {
    const name = document.getElementById('name').value;
    if (name) {
        localStorage.setItem('name', name);
        showMainPage(name);
    }
}

function showMainPage(name) {
    document.getElementById('nameInputContainer').classList.add('hidden');
    document.getElementById('mainContainer').classList.remove('hidden');
    document.getElementById('welcomeMessage').innerText = `Hello, ${name}!`;
    document.getElementById('score').innerText = score;
    updateRange();
}

function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function updateRange() {
    document.getElementById('range').innerText = `${rangeStart}-${rangeEnd}`;
}

function changeBackgroundColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (guess === randomNumber) {
        score++;
        localStorage.setItem('score', score);
        document.getElementById('score').innerText = score;
        alert('Correct! Leveling up!');

        rangeEnd *= 2;
        randomNumber = generateRandomNumber(rangeStart, rangeEnd);
        updateRange();
    } else {
        alert('Incorrect, try again!');
    }
}

window.onload = function() {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        showMainPage(savedName);
    }
};