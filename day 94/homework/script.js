function greetWithDelay(name, callback) {
    setTimeout(() => {
        alert(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greetWithDelay("Daviti", () => alert("Greeting alerted."));

function processWithDelay(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback('Process completed successfully.');
    }, 2000);
}

processWithDelay("Processing data...", (status) => console.log(status));

function manipulateArrayWithDelay(numbers, callback) {
    setTimeout(() => {
        const squaredNumbers = numbers.map(num => num**2);
        callback(squaredNumbers);
    }, 2000);
}

manipulateArrayWithDelay([1, 2, 3, 4], (result) => console.log(result));

function changeColorWithDelay(color, callback) {
    setTimeout(() => {
        document.body.style.color = color;
        callback(`Text color changed to ${color}`);
    }, 2000);
}

changeColorWithDelay("blue", (message) => console.log(message));

function interactiveUserGreeting() {
    const name = prompt("Please enter your name:");
    setTimeout(() => {
        console.log(`Hello, ${name}! Thank you for helping.`);
    }, 3000);
}

interactiveUserGreeting();