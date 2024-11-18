// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// let arr = [2, 4, 6];

// arr.forEach(function(value, index, array) {
//   array[index] = value * 2;
// });
// console.log(arr);

// let sum = 0;
// let nums = [5, 10, 15];

// nums.forEach(function(value) {
//   sum += value;
// });
// console.log(sum);

// function myForEach(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//       func(arr[i], i, arr);
//     }
// }

// myForEach([1, 2, 3, 4], (number) => {
//     console.log(number);
//   });

// let arrClone = [2, 4, 6];

// myForEach(arrClone, (value, index, array) => {
//     array[index] = value * 2;
// });

// console.log(arrClone);

// let sumClone = 0;

// myForEach([5, 10, 15], (value) => {
//   sumClone += value;
// });

// console.log(sumClone);


// let colors = ['red', 'green', 'blue'];
//     colors.forEach(function(color) {
//   console.log(color);
// });

// let numbers1 = [1, 2, 3];
//     numbers.forEach(function(number) {
//   console.log(number + 1);
// });

// let words = ['hello', 'world'];
//     words.forEach(function(word) {
//   console.log(word.toUpperCase());
// });

// let pets = ['dog', 'cat', 'fish'];
//     pets.forEach((pet, index) => {
//   console.log(index);
// });

// let names = ['Alice', 'Bob', 'Charlie'];
//     names.forEach(function(name) {
//   console.log('Hello, ' + name + '!');
// });



// let colors1 = ['red', 'green', 'blue'];
//     myForEach(colors, (color) => {
//   console.log(color);
// });

// let numbers2 = [1, 2, 3];
//     myForEach(numbers, (number) => {
//   console.log(number + 1);
// });

// let words1 = ['hello', 'world'];
//     myForEach(words, (word) => {
//   console.log(word.toUpperCase());
// });

// let pets1 = ['dog', 'cat', 'fish'];
//     myForEach(pets, (pet, index) => {
//   console.log(index);
// });

// let names1 = ['Alice', 'Bob', 'Charlie'];
//     myForEach(names, (name) => {
//   console.log('Hello, ' + name + '!');
// });


// let numbers = [1, 2, 3, 4];
// let doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });
// console.log(doubledNumbers);

// let names = ['alice', 'bob', 'charlie'];
// let upperCaseNames = names.map(function(name) {
//   return name.toUpperCase();
// });
// console.log(upperCaseNames);

// let nums = [5, 10, 15];
// let incrementedNumbers = nums.map(function(number) {
//   return number + 1;
// });
// console.log(incrementedNumbers);

// function manualMap(arr, func) {
//     let resultArray = [];  
//     for (let i = 0; i < arr.length; i++) {
//       resultArray.push(func(arr[i], i, arr));  
//     }
//     return resultArray;  
// }



// let numbers1 = [1, 2, 3, 4];
// let doubled = manualMap(numbers, (number) => {
//   return number * 2;
// });
// console.log(doubled); 


// let words = ['apple', 'banana', 'cherry'];
// let uppercased = manualMap(words, (word) => {
//   return word.toUpperCase();
// });
// console.log(uppercased);


// let nums1 = [5, 10, 15];
// let incremented = manualMap(nums, (number) => {
//   return number + 1;
// });
// console.log(incremented); 

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;  
});
console.log(evenNumbers); 

let names = ['Tom', 'Anna', 'Joe', 'Sam', 'Michael'];

let longNames = names.filter(function(name) {
  return name.length > 3; 
});
console.log(longNames); 

let nums = [5, 10, 15, 20, 25];
let greaterThanTen = numbers.filter(function(number) {
  return number > 10;  
});
console.log(greaterThanTen);


function manualFilter(arr, func){
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}

