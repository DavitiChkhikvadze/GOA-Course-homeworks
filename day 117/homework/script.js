//async-await-ის 5 მაგალითი:
//1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example1() {
    console.log("start");
    await delay(2000);
    console.log("2 seconds out");
}

example1();

//2
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
}

fetchData();

//3
async function multipleAwaits() {
    console.log("first progress");
    await delay(1000);
    console.log("second progress");
    await delay(1000);
    console.log("third progress ended");
}

multipleAwaits();

//4
async function fetchWithError() {
    try {
        let response = await fetch("https://invalid-url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("error occured:", error);
    }
}

fetchWithError();

//5
async function parallelRequests() {
    let [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/todos/2").then(res => res.json())
    ]);

    console.log("first:", data1);
    console.log("second:", data2);
}

parallelRequests();

//5 მაგალითი class-ებზე:
//1
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}

let person = new Person("Daviti");
person.sayHello();

//2
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes sound`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says: wwof woof`);
    }
}

let dog = new Dog("max");
dog.makeSound();

//3
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3))

//4
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.area);
rect.dimensions = { width: 7, height: 4 };
console.log(rect.area);

//5
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`transfered: ${amount}. current balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance());


