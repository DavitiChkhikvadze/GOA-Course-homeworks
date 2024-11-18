class LivingBeing {
    constructor(name) {
        this.name = name;
    }
    
    describe() {
        return `${this.name} is a living being.`;
    }
}


class Animal extends LivingBeing {
    constructor(name, habitat) {
        super(name);
        this.habitat = habitat;
    }
    
    describe() {
        return `${this.name} is an animal that lives in ${this.habitat}.`;
    }
}


class Mammal extends Animal {
    constructor(name, habitat, isWarmBlooded) {
        super(name, habitat);
        this.isWarmBlooded = isWarmBlooded;
    }
    
    describe() {
        return `${this.name} is a mammal and is ${this.isWarmBlooded ? "warm-blooded" : "not warm-blooded"}.`;
    }
}


class Primate extends Mammal {
    constructor(name, habitat, isWarmBlooded, hasOpposableThumbs) {
        super(name, habitat, isWarmBlooded);
        this.hasOpposableThumbs = hasOpposableThumbs;
    }
    
    describe() {
        return `${this.name} is a primate that ${this.hasOpposableThumbs ? "has" : "does not have"} opposable thumbs.`;
    }
}


class Human extends Primate {
    constructor(name, habitat, isWarmBlooded, hasOpposableThumbs, language) {
        super(name, habitat, isWarmBlooded, hasOpposableThumbs);
        this.language = language;
    }
    
    describe() {
        return `${this.name} is a human who speaks ${this.language}.`;
    }
}


class Developer extends Human {
    constructor(name, habitat, isWarmBlooded, hasOpposableThumbs, language, programmingLanguage) {
        super(name, habitat, isWarmBlooded, hasOpposableThumbs, language);
        this.programmingLanguage = programmingLanguage;
    }
    
    describe() {
        return `${this.name} is a developer who codes in ${this.programmingLanguage}.`;
    }
}


class FrontendDeveloper extends Developer {
    constructor(name, habitat, isWarmBlooded, hasOpposableThumbs, language, programmingLanguage, frontendFramework) {
        super(name, habitat, isWarmBlooded, hasOpposableThumbs, language, programmingLanguage);
        this.frontendFramework = frontendFramework;
    }
    
    describe() {
        return `${this.name} is a frontend developer who uses ${this.frontendFramework}.`;
    }
}


const person = new FrontendDeveloper('David', 'City', true, true, 'English', 'JavaScript', 'ECMAScript');
console.log(person.describe());  
