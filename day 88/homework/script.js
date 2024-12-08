//codewars: find the odd int (js)

function findOdd(A) {
    const countMap = new Map();
    
    for (const num of A) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    for (const [key, value] of countMap) {
        if (value % 2 !== 0) {
                return key;
        }
    }
}

console.log(findOdd([7]));
console.log(findOdd([0])); 
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
    
