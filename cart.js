let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const orderBtn = document.getElementById("orderBtn");

function renderCart(){

cartItems.innerHTML = "";

if(cart.length === 0){
cartItems.innerHTML = "<h3>Your Cart is Empty</h3>";
return;
}

cart.forEach((item, index) => {

const div = document.createElement("div");
div.className = "cart-item";

div.innerHTML = `
<img src="${item.image}">
<div class="cart-item-details">
<div class="cart-item-code">${item.code}</div>
</div>

<button class="remove-btn">Remove</button>
`;

div.querySelector(".remove-btn").addEventListener("click", () => {
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
});

cartItems.appendChild(div);

});

}

orderBtn.addEventListener("click", () => {

if(cart.length === 0){
alert("Cart is empty!");
return;
}

let msg = "🛒 Order:\n\n";

cart.forEach(item => {
msg += item.code + "\n";
});

window.open(
`https://wa.me/919507059053?text=${encodeURIComponent(msg)}`,
"_blank"
);

});

renderCart();
