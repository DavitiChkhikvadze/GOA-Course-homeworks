//N1
class car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
}

const car1 = new car("Ferrari", "SF90 Stradale")
const car2 = new car("Lamborghini", "Countach LPI 800-4")
 console.log(car1, car2)

//N2
class Animals {
    constructor() {
        this.animals = [
            { name: "Dog", sound: "Woof" },
            { name: "Cat", sound: "Meow" },
            { name: "Cow", sound: "Moo" },
            { name: "Sheep", sound: "Baa" },
            { name: "Duck", sound: "Quack" }
        ];
    }

    makeSound() {
        this.animals.forEach(animal => {
            console.log(`${animal.name} says: ${animal.sound}`);
        });
    }
}

const myAnimals = new Animals();
myAnimals.makeSound();
