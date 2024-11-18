//Variables
let x = 5
let name = "David"
const PI = 3.14
let y = x
let isStudent = true
let age = ''
x = 10
let greeting = 'Hello World!'
let height = 0
let num = 2 + 3
let z = undefined
let total = 10 + 20
let language = "JavaScript"
let IsAvailable = false
let message = "Welcome To JavaScript!"
let pi = 3.14
let temperature = 25
let score = 100
let fullName = "DavitiChkhikvadze"
let isOnline = false
//Functions
function sayHello() {
    return 'Hello World!'
}
console.log(sayHello())

function addNumbers(a,b) {
    return a + b
}
console.log(addNumbers(7, 9))
console.log(addNumbers(18723451, 124124))

function getFullName(FirstName, Lastname) {
    return FirstName + ' ' + Lastname
}
console.log(getFullName('Daviti', 'Chkhikvadze'))

function multiply(x, y) {
    return x * y
}
console.log(multiply(23, 3))
console.log(multiply(90, 24))

function isOdd(x) {
   if (x % 2 === 0) {
    return true
   }
   else {
    return false
   }
}
console.log(isOdd(6))
console.log(isOdd(7))

function square(x) {
    return x**2
}
console.log(square(16))
console.log(square(31))

function celsiusToFarenheit(x) {
    return (x * 9/5) + 32
}
console.log(celsiusToFarenheit(0))

function isEqual(x, y) {
    return x === y
}
console.log(isEqual(5, 5))

function subtract(x, y) {
    return x - y
}
console.log(subtract(7, 4))

function isGreater(x, y) {
    return x > y
}
console.log(8, 5)

function promptForName() {
   let userName = prompt()
   alert("hello," + ' ' + userName)
}
console.log(promptForName())

function addTwoNumbers() {
    let x = prompt()
    let y = prompt()
    alert(Number(x) + Number(y))
}
console.log(addTwoNumbers())


