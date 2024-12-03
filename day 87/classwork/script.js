
const cars = new Map([
    ["Bugatti", "Tourbillon"],
    ["Lamborghini", "Revuelto"],
    ["Ferrari", "SF90 Stradale"],
    ["McLaren", "Artura"],
    ["Porsche", "Mission X"]
  ]);
  
  console.log("Map size:", cars.size);
  
  cars.forEach((model, brand) => {
    console.log(`${brand}: ${model}`);
  });
  