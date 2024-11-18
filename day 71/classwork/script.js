//n1
// Swap the values of nums[0] and nums[1]
const nums = [1, 2];

[nums[0], nums[1]] = [nums[1], nums[0]];

console.log(nums);

//n2
const person = { name: 'Alice', age: 25, city: 'New York' };
// Extract the 'name' and 'age' properties

const {name, age} = person
console.log(name, age)

//n3
// Extract the value 4
const nestedArray = [1, [2, 3, [4, 5]]];
const value = nestedArray[1][2][0];

console.log(value);

//n4
// Destructure the first element and set 'banana' as the default for the second element
const fruits = ['apple'];
const [firstFruit, secondFruit = 'banana'] = fruits;

console.log(firstFruit, secondFruit); 

//n5
// Extract 'id' and 'username' into variables named 'userId' and 'userName'
const user = { id: 101, username: 'john_doe' };
const { id: userId, username: userName } = user;

console.log(userId); 
console.log(userName);


//N1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// Merge array1 and array2

const mergedArray = [...array1, ...array2];
console.log(mergedArray); 

//N2
const colors = ['red', 'green', 'blue'];
// Create a copy of 'colors'
const colorsCopy = [...colors];
console.log(colorsCopy);

//N3
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Merge obj1 and obj2

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); 

//N4
const numbers = [10, 20, 30, 40, 50];
// Destructure the first element and gather the remaining elements

const [first, ...rest] = numbers;
console.log(first); 
console.log(rest);  

//N5
function logArguments(...args) {
    console.log(args);
}

logArguments(1, 2, 3, 4, 5);

//N6
const integers = [1, 2, 3];
// Function that takes 3 parameters
function add(a, b, c) {
  // Use the spread operator to pass nums as arguments
  return a + b + c;
}

const result = add(...nums);
console.log(result);

//N7
const user1 = { name: 'John', age: 30 };
// Create a clone of 'user'

const userClone = { ...user };
console.log(userClone);

//N8
const car = { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'blue' };
// Destructure 'brand' and 'model' and gather the remaining properties

const { brand, model, ...remainingProperties } = car;

console.log(brand);              
console.log(model);              
console.log(remainingProperties); 

//N9
const fruits1 = ['banana', 'cherry'];
// Add 'apple' at the beginning and 'mango' at the end using the spread operator

const updatedFruits = ['apple', ...fruits, 'mango'];

console.log(updatedFruits);

//N10
function greet(greeting = 'Hello', ...names) {
    names.forEach(name => {
        console.log(`${greeting}, ${name}!`);
    });
}

greet(undefined, 'Alice', 'Bob', 'Charlie');
greet('Hi', 'David', 'Eva');




