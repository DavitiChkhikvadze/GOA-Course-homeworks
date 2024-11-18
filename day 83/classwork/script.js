
class Animal {
    constructor(name, image, description) {
      this.name = name;
      this.image = image;
      this.description = description;
    }
  
    createCard() {
      return `
        <div class="card">
          <img src="${this.image}" alt="${this.name}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
        </div>
      `;
    }
  }
  

  const animals = [
    new Animal('Lion', 'lion.png', 'The king of the jungle.'),
    new Animal('Elephant', 'elephant.png', 'The largest land animal.'),
    new Animal('Panda', 'panda.png', 'Loved for its playful nature.'),
    new Animal('Tiger', 'tiger.png', 'A powerful and graceful big cat.'),
    new Animal('Giraffe', 'giraffe.png', 'Known for its long neck and height.'),
    new Animal('Zebra', 'zebra.png', 'Famous for its black and white stripes.'),
  ];
  
  // Render animal cards
  const container = document.getElementById('animal-cards');
  animals.forEach(animal => {
    container.innerHTML += animal.createCard();
  });
  