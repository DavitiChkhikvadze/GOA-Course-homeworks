document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      displayData(json);
    })
    .catch(err => console.error('Error:', err));
  });

  function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      <h3>${data.title}</h3>
      <p>Price: $${data.price}</p>
      <p>Category: ${data.category}</p>
      <p>${data.description}</p>
    `;

    outputDiv.appendChild(productDiv);
  }