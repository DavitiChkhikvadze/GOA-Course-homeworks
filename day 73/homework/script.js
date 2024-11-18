// Animal class
class Animal {
    constructor(name, species) {
      this._name = name;
      this._species = species;
    }
  
    get name() {
      return this._name;
    }
  
    get species() {
      return this._species;
    }
  
    speak() {
      return `${this._name} makes a noise.`;
    }
  
    static category() {
      return "Animal Kingdom";
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'Dog');
      this._breed = breed;
    }
  
    get breed() {
      return this._breed;
    }
  
    speak() {
      return `${this.name} the ${this.breed} barks!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed) {
      super(name, 'Cat');
      this._breed = breed;
    }
  
    speak() {
      return `${this.name} the ${this.breed} meows!`;
    }
  }
  
  class Bird extends Animal {
    constructor(name, type) {
      super(name, 'Bird');
      this._type = type;
    }
  
    speak() {
      return `${this.name} chirps!`;
    }
  }
  
  const dog = new Dog('Rex', 'Golden Retriever');
  const cat = new Cat('Mittens', 'Persian');
  const bird = new Bird('Tweety', 'Canary');
  
  console.log(dog.speak()); 
  console.log(cat.speak()); 
  console.log(bird.speak()); 
  console.log(Animal.category());


// Car class
class Car {
    constructor(brand, model) {
      this._brand = brand;
      this._model = model;
    }
  
    get brand() {
      return this._brand;
    }
  
    get model() {
      return this._model;
    }
  
    drive() {
      return `${this._brand} ${this._model} is driving.`;
    }

    static type() {
      return "Vehicle";
    }
  }
  
  class ElectricCar extends Car {
    constructor(brand, model, batteryLife) {
      super(brand, model);
      this._batteryLife = batteryLife;
    }
  
    get batteryLife() {
      return this._batteryLife;
    }
  
    drive() {
      return `${this.brand} ${this.model} with ${this.batteryLife}% battery is driving silently.`;
    }
  }
  
  class SportsCar extends Car {
    constructor(brand, model, maxSpeed) {
      super(brand, model);
      this._maxSpeed = maxSpeed;
    }
  
    get maxSpeed() {
      return this._maxSpeed;
    }
  
    drive() {
      return `${this.brand} ${this.model} zooms at ${this.maxSpeed} mph!`;
    }
  }
  
  class SUV extends Car {
    constructor(brand, model, capacity) {
      super(brand, model);
      this._capacity = capacity;
    }
  
    get capacity() {
      return this._capacity;
    }
  
    drive() {
      return `${this.brand} ${this.model} is driving with capacity for ${this.capacity} passengers.`;
    }
  }
  
  const tesla = new ElectricCar('Tesla', 'Model S', 90);
  const ferrari = new SportsCar('Ferrari', 'F8', 211);
  const rangeRover = new SUV('Land Rover', 'Range Rover', 7);
  
  console.log(tesla.drive()); 
  console.log(ferrari.drive()); !
  console.log(rangeRover.drive()); 
  console.log(Car.type()); 
  

// Human class
class Human {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    get name() {
      return this._name;
    }

    get age() {
      return this._age;
    }
  
    speak() {
      return `${this._name} says hello.`;
    }
  
    static species() {
      return "Homo Sapiens";
    }
  }
  
  class Teacher extends Human {
    constructor(name, age, subject) {
      super(name, age);
      this._subject = subject;
    }
  
    get subject() {
      return this._subject;
    }
  
    teach() {
      return `${this.name} is teaching ${this.subject}.`;
    }
  }
  
  class Student extends Human {
    constructor(name, age, grade) {
      super(name, age);
      this._grade = grade;
    }
  
    get grade() {
      return this._grade;
    }
  
    study() {
      return `${this.name} is studying in grade ${this.grade}.`;
    }
  }
  
  class Athlete extends Human {
    constructor(name, age, sport) {
      super(name, age);
      this._sport = sport;
    }
  
    get sport() {
      return this._sport;
    }
  
    play() {
      return `${this.name} is playing ${this.sport}.`;
    }
  }
  

  const teacher = new Teacher('Ms. Smith', 30, 'Mathematics');
  const student = new Student('John', 16, '11th');
  const athlete = new Athlete('Tom', 25, 'Basketball');
  
  console.log(teacher.teach()); 
  console.log(student.study()); 
  console.log(athlete.play()); 
  console.log(Human.species());
  

//bonus
  class SuperBeing extends Human {
    constructor(name, age, power) {
      super(name, age);
      this._power = power;
    }
  
    get power() {
      return this._power;
    }
  
    usePower() {
      return `${this.name} uses ${this.power}!`;
    }
  
    static species() {
      return "Superbeing";
    }
  }
  
  const superman = new SuperBeing('Superman', 1000, 'Flight');
  console.log(superman.usePower()); 
  console.log(SuperBeing.species()); 
  
