const numArr = new Array(0);
let evenSum = 0;
for (let i = 0; i<101; i++){
    numArr.push(i)
    if (i % 2 === 0){
        evenSum += i
    }
}
    

console.log(numArr)
console.log(evenSum)

//davaleba3

const myArr = [];
myArr.push(10); //push მეთოდი ამატებს  კონკრეტულ სიმბოლოს სიაში,
// როგორც პითონშია append, აქაც ისეა push 
myArr.push(10+53);

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newArr.pop(); //pop მეთოდი აშორებს ბოლო მნიშვნელობას სიიდან

newArr.unshift(-1, 0); //ამატებს კონკრეტულ მნიშვნელობა(ებ)ს სიის დასაწყისში

newArr.shift(); //აშორებს პირველ მნიშვნელობას სიიდან

newArr.slice(1, 3);//ჩამოაჭრის ყველა მნიშვნელობას გარდა იმ მნიშვნელობებისა, 
//რომელიც 1 ინდექსიდან 3 ინდექსის ჩათვლითაა
newArr.splice (0, 2, 15, 16);//მითითებულ ინდექსებზე ამატებს მითითებულ მნიშვნელობებს


function manualSlice(arr,start,end){
    let slicedArr = new Array();
    for(let i = start; i < end; i++){
        slicedArr.push(arr[i]);
    }

    console.log(slicedArr);
}

function manualReverse(arr) {
    const reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

console.log(manualReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function manualIndexOf(value, list) {

    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1
}

console.log(manualIndexOf(15, [1, 2, 3, 4, 5, 10 ,15]))

const testArray = [12, 45, 34, 57, 27, 93, 72, 34, 57, 72];
testArray.indexOf(12);
testArray.indexOf(72);
testArray.indexOf(57);

testArray.lastIndexOf(72);
testArray.lastIndexOf(34);
testArray.lastIndexOf(57);

const array1 = [345, 5345, 234, 124, 1241, 41, 24, 12];
const array2 = [123, 1234, 246, 1235, 79867, 588];

testArray.sort();
array1.sort();
array2.sort();

testArray.reverse();
array1.reverse();
array2.reverse();