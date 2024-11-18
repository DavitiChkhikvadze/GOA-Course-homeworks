const me = {
    name: "David",
    surname: "Chkhikvadze",
    age: 14,
    hobby: "playingFootball"
}

me.lovesVideoGames = false
me.hobby = "programming"
delete me.surname

console.log(me)
console.log(me.name)
console.log(me.age)
console.log(me.hobby)
console.log(me.lovesVideoGames)


const car = {
    brand: "Lamborghini",
    model: "Temerario",
    releaseDate: 2025,
    engine: "Twin turbo V8 engine",
    country: "Italy",
    LamboText: function lamboText() {
        console.log("Lamborghini is releasing really good supercars. ")
    },
    LamboSuggestion: function lamboSuggest() {
        console.log('for millionaires lambo is best car. buy ' + this.brand + ' ' + this.model + " today for only 2.5m$ (special offer)")
    }
}

console.log(car)
console.log(car.LamboText() + car.LamboSuggestion())


function robot(name, year) {
    this.name = name;
    this.year = year;
    
    this.displayInfo = function() {
      console.log(this.name, this.year);
    };
}

const robot1 = new robot('irobot', 2030);
const robot2 = new robot('megarobot', 2050);
const robot3 = new robot('robot-50284', 2105);

robot1.displayInfo(); 
robot2.displayInfo(); 
robot3.displayInfo();