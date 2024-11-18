//N1
const numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach((number) => {
    console.log(number)
})

//N2
const sumNums = [2, 5, 12, 3, 45, 129]
let sum = 0
sumNums.forEach((number) => {
    sum += number
})
console.log(sum)

//N3
let students = ['John', 'Jane', 'Sam', 'Sara'];
students.forEach((student) => {
    console.log(`Student: ${student}`)
});

//N4
let integers = [1, 2, 3, 4];
let doubled = [];
integers.forEach(num => 
    doubled.push(num * 2)
);
console.log('Doubled Values:', doubled);

//N5
let squared = integers.map(num => num * num);
console.log('Squared Values:', squared);

//N6
let strings = ['apple', 'banana', 'cherry'];
let lengths = strings.map(str => str.length);
console.log('Lengths of Strings:', lengths);

//N7
let lowercaseStrings = ['hello', 'world', 'javascript'];
let uppercaseStrings = lowercaseStrings.map(str => str.toUpperCase());
console.log('Uppercase Strings:', uppercaseStrings);

//N8
let evenNumbers = integers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

//N9
let names = ['Michael', 'Anna', 'Christopher', 'Sue'];
let longNames = names.filter(name => name.length > 5);
console.log('Long Names:', longNames);

//N10
let mixedNumbers = [-5, 0, 3, 9, -2];
let positiveNumbers = mixedNumbers.filter(num => num > 0);
console.log('Positive Numbers:', positiveNumbers);

//Clone functions
//forEach Clone:
function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

//map clone:
function manualMap(arr, func) {
    let resultArray = [];  
    for (let i = 0; i < arr.length; i++) {
      resultArray.push(func(arr[i], i, arr));  
    }
    return resultArray;  
}

//filter clone:
function manualFilter(arr, func){
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}

//reduce clone
function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
}

//site:
document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const taskList = document.getElementById('taskList');
    
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => listItem.remove());

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}
