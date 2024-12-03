//N1
const countries = new Map([
    ["Georgia", "Tbilisi"],
    ["France", "Paris"],
    ["Germany", "Berlin"]
]);
countries.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

//N2
const cities = new Map([
    ["Tbilisi", "Georgia"],
    ["New-York", "USA"],
    ["London", "England"]
]);
console.log("Tbilisi exists:", cities.has("Tbilisi"));

//N3
const students = new Map([
    ["Daviti", 10],
    ["Luka", 9],
    ["Ioane", 8]
]);
console.log("Daviti's Mark:", students.get("Daviti"));

//N4
students.forEach((_, key) => {
    console.log("Student Name:", key);
});

//N5
cities.delete("Tbilisi");
console.log("Updated Map:", cities);

//N6
console.log("Size of Map:", countries.size);

//N7
students.set("Ioane", 9);
console.log("Updated students' Map:", students);

//N8
const emptyMap = new Map();
console.log("Map empty:", emptyMap.size === 0);

//N9
const product = { name: "Laptop", price: 1500 };
const productMap = new Map(Object.entries(product));
console.log("Products Map:", productMap);

//N10
productMap.clear();
console.log("Products Map empty:", productMap.size === 0);
