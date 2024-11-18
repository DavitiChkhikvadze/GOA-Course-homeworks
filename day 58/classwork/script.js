const userBudget = prompt('please enter your budget:')
let phone = 1200

if (Number(userBudget) > phone) {
    console.log('you can afford this')
} else {
    console.log('you cant afford this. go work')
}
 for (let i = 0; i < 10; i++) {
    console.log('hello world!')
 }

 for (let num = 20; num > 0; num-- ) {
    console.log(num)
 }

 function allEvensBeforeNum(border) {
    let sum = 0
    for (let i = 0; i < border; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(allEvensBeforeNum(20))
console.log(allEvensBeforeNum(40))