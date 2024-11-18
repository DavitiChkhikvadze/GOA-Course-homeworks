//1

const person = {
    name: "Daviti",
    age: 14,
    country: "Georgia",
    city: "Tbilisi",
    address: "Nutsubidze plateu 4th avenue"
}
console.log(person)

//2

const car = {
    brand: "Lamborghini",
    model: "Temerario",
    year: 2025,
    engine: "twin turbo v8 engine",
    price: "2.5m$"
}
console.log(car.brand)
console.log(car.model)
console.log(car.year)
console.log(car.engine)
console.log(car.price)

//3

person.age = 16
console.log(person.age)

//4

person.hobby = "programming"
console.log(person.hobby)

//5

delete  person.city
console.log(person)

//6

const calculator = {
    a: 68,
    b: 135,
    sum: function add(){
        return this.a + this.b
    }
}
console.log(calculator.sum())

//7

const book1 = {
    title: "15-years-old captain",
    author: "Jules Verne",
    pages: "350+"
}

const book2 = {
    title: "Captain Grant's sons",
    author: "Jules Verne",
    pages: "500+"
}

const book3 = {
    title: "Sherlock Holmes' Adventure",
    author: "Arthur Conan Doyle",
    pages: "400+"
}
console.log(book1, book2, book3)

//8

function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
    
    this.makeSound = function() {
        console.log(this.sound);
    };

    this.changeName = function(newName) {
        this.name = newName;
    };
}

const animal1 = new Animal("cow", "MOOOO")
const animal2 = new Animal("cat", "meow")
const animal3 = new Animal("dog", "woof")

animal1.makeSound();
animal2.makeSound();
animal3.makeSound();

animal1.changeName("bigboy")
console.log(animal1.name)

animal2.changeName("kitty")
console.log(animal2.name)

animal3.changeName("max")
console.log(animal3.name)

//9

//შევაერთე ზემოთა და ბოლო 2 დავალება



