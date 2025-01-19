const container = document.getElementById('product-container');

function fetchProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()).then(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" style="max-width: 150px;">
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>`;
        container.appendChild(productDiv);
    })
}

fetchProduct(1);
fetchProduct(2);
fetchProduct(3);

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json => {
    for (let i = 0; i < json.length; i++) {
        console.log(json[i]);
    }
})
