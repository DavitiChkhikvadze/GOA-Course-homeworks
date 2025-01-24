fetch('https://fakestoreapi.com/producs/1').then(res => {
    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('404');
        }
        throw new Error('Unknown Error');
    }
    return res.json();
}).then(json => {
    const container = document.getElementById('product-container');
    container.innerHTML = `
        <div class="product">
            <h2>${json.title}</h2>
            <img src="${json.image}" alt="${json.title}" style="max-width: 100%; height: auto;">
            <p><strong>Price:</strong> $${json.price}</p>
            <p>${json.description}</p>
        </div>`;
}).catch(err => {
    const container = document.getElementById('product-container');
    if (err.message === '404') {
        container.innerHTML = `
            <div class="error">
                <p style="font-size: 50px;">404 - Page not found</p>
                <img src="error.png" alt="404 Error" width="500px">
            </div>`;
    } else {
        console.error(err.message);
    }
});