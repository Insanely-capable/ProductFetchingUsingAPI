document.addEventListener('DOMContentLoaded',() => {
    fetchProducts();
});

function fetchProducts(){
    fetch("https://dummyjson.com/products")
    .then((Response)=>Response.json())
    .then((data) =>displayProducts(data.products))
}

function displayProducts(products){
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> &#8377;${product.price}</p>
        `;

        container.appendChild(productCard);
    });
}