const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

function addToCart(product){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart!");
}

function displayProducts(list){

productContainer.innerHTML = "";

list.forEach(p => {

const card = document.createElement("div");
card.className = "product-card";

card.innerHTML = `
<img src="${p.image}">
<h3>${p.code}</h3>
<p>${p.category}</p>
<button class="btn">Add To Cart</button>
`;

card.addEventListener("click", () => {
window.location.href = `product.html?code=${p.code}`;
});

card.querySelector(".btn").addEventListener("click", (e) => {
e.stopPropagation();
addToCart(p);
});

productContainer.appendChild(card);

});

}

displayProducts(products);

searchInput.addEventListener("input", (e) => {
const val = e.target.value.toLowerCase();

const filtered = products.filter(p =>
p.code.toLowerCase().includes(val) ||
p.category.toLowerCase().includes(val)
);

displayProducts(filtered);
});
