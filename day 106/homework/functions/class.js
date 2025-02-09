export function personClass(name, age) {
    this.name = name
    this.age = age

    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}