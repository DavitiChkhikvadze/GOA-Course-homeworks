class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `${this.name} is an animal.`;
    }
}

class Mammal extends Animal {
    constructor(name, hasFur) {
        super(name);
        this.hasFur = hasFur;
    }

    describe() {
        return `${this.name} is a mammal${this.hasFur ? ' with fur.' : '.'}`;
    }
}

class Dog extends Mammal {
    constructor(name, hasFur, breed) {
        super(name, hasFur);
        this.breed = breed;
    }

    describe() {
        return `${this.name} is a ${this.breed} dog${this.hasFur ? ' with fur.' : '.'}`;
    }
}

const rect = new Rectangle(10, 20);
console.log(`Perimeter of the rectangle: ${rect.perimeter}`);

const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.describe());

const mammal = new Mammal("Cow", true);
console.log(mammal.describe());

const dog = new Dog("Buddy", true, "Golden Retriever");
console.log(dog.describe());
