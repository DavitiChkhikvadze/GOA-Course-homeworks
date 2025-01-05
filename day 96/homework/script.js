const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let counterValue = parseInt(localStorage.getItem('counter')) || 0;
counterElement.textContent = counterValue;

const updateCounter = (value) => {
    counterValue = value;
    counterElement.textContent = counterValue;
    localStorage.setItem('counter', counterValue);
};

incrementButton.addEventListener('click', () => updateCounter(counterValue + 1));
decrementButton.addEventListener('click', () => updateCounter(counterValue - 1));
resetButton.addEventListener('click', () => updateCounter(0));
