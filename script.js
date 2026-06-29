const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".categories button");

let currentCategory = "all";

// Products Show Function
function displayProducts(productList) {

productContainer.innerHTML = "";

if(productList.length === 0){

productContainer.innerHTML = `
<div class="no-product">
<h2>No Products Found</h2>
</div>
`;

return;

}

productList.forEach(product => {

const card = document.createElement("div");

card.className = "product-card";

card.innerHTML = `

<div class="product-image">

<img src="${product.image}" alt="${product.code}">

</div>

<div class="product-info">

<h3 class="product-name">${product.category.toUpperCase()}</h3>

<p class="product-code">${product.code}</p>

<button class="add-cart">
View Product
</button>

</div>

`;

card.addEventListener("click",()=>{

window.location.href=
`product.html?code=${product.code}`;

});

productContainer.appendChild(card);

});

}
// ===========================
// Live Search
// ===========================

searchInput.addEventListener("keyup", () => {

const searchValue = searchInput.value.toLowerCase();

const filteredProducts = products.filter(product => {

return (

product.code.toLowerCase().includes(searchValue) ||

product.category.toLowerCase().includes(searchValue)

);

});

displayProducts(filteredProducts);

});


// ===========================
// Category Filter
// ===========================

categoryButtons.forEach(button => {

button.addEventListener("click", () => {

categoryButtons.forEach(btn => {

btn.classList.remove("active");

});

button.classList.add("active");

const category = button.dataset.category;

if(category === "all"){

displayProducts(products);

return;

}

const filteredProducts = products.filter(product =>

product.category === category

);

displayProducts(filteredProducts);

});

});

// Default Load

displayProducts(products);
