const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const product = products.find(p => p.code === code);

const img = document.getElementById("productImage");
const codeBox = document.getElementById("productCode");
const catBox = document.getElementById("productCategory");

if(product){
img.src = product.image;
codeBox.innerText = product.code;
catBox.innerText = product.category;
}

function addToCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart!");
}

img.addEventListener("click", () => {
img.classList.toggle("zoom");
});
