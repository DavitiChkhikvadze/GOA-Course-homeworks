function countOccurrences(arr) {
    let countMap = {};
    arr.forEach(num => countMap[num] = (countMap[num] || 0) + 1);
    return arr.map(num => countMap[num]).join(',');
}

let n1 = 6;
let arr1 = [3, 1, 2, 1, 2, 1];
console.log(countOccurrences(arr1));


function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let n2 = 6;
let arr2 = [3, 1, 2, 1, 2, 1];
console.log(sortDescending(arr2));
