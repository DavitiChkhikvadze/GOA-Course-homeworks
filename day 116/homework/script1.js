const secretNumber = Math.floor(Math.random() * 20) + 1;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const result = document.getElementById("result");

    if (guess < secretNumber) {
        result.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
        result.textContent = "Too high! Try again.";
    } else {
        result.textContent = "Correct! You guessed it!";
    }
}