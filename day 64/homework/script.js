//N1: Basic Sequence Practice

function sumOfN(n) {
    const array = [];
   array[0] = 0;
   for (let i = 1; i < Math.abs(n)+1; i++) {
     if (n > 0){ 
       array[i] = array[i-1]+i
     }
     else {
       array[i] = array[i-1]-i
       };
   }
   return array;
}

//N2: Highest and Lowest

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

//N3: Shortest word

function findShort(s){
    let words = s.split(' ')
  
    const minLength = words.reduce((min, word) => {
      return Math.min(min, word.length);
    }, Infinity);
  
    return minLength;
}

//N4: Square Every Digit

function squareDigits(num){
    let string = num.toString();
      const results = [];
      for (let i = 0; i < string.length; i++){
          results[i] = string[i] * string[i];
      }
      return Number(results.join(''));
  }

//N5: Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    let sortedNums = numbers.sort(function(a,b){
      return a - b
    })
    return sortedNums[0] + sortedNums[1]
  }

//N6: Sum of integers in strings

function sumOfIntegersInString(s) {
    const numbers = '1234567890'
    let result = ''
    let sum = 0
    for (let i = 0; i <= s.length; i += 1) {
      if (numbers.includes(s[i])) {
        result += s[i]
      }
      else {
        if (result !== '') {
          sum = sum + parseInt(result)
          result = ''
        }
      }
    }
    return sum
  }

//N7: Odd or Even?

function oddOrEven(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++){
      result += array[i];
    }
    if (result % 2 == 0){
      return "even";
    }
    else{
      return "odd";
    }
  }

//N8: Sum of Odd Numbers

function rowSumOddNumbers(n) {
	return n**3
}

//N9: Descending Orders

function descendingOrder(n){
    return +n.toString().split('').sort().reverse().join('');
  }

//N10: sort array by string length

function sortByLength (array) {
    return array.sort(function(a,b){
      return a.length - b.length
    })
  }


//N11: Remove the minimum

function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }

//N12: Sum of All Arguments

function sum() {
    let sum = 0;
    for(let i=0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

//N13: Simple remove duplicates

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(i,1);
          --i
        }
      }
    }
     
    return arr;
  }

//N14: Nth root of the number

function root(x, n) {
    return x ** (1/n)
  }

//N15: Find the digit of the number

function findDigit(num, nth) {
    num = Math.abs(num);
      
      if (nth <= 0) {
          return -1;
      }
      
      const numStr = num.toString();
      const indexFromEnd = nth - 1; 
      
      if (indexFromEnd < numStr.length) {
          return Number(numStr[numStr.length - 1 - indexFromEnd]);
      } else {
          return 0;
      }
  }
