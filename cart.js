let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const orderBtn = document.getElementById("orderBtn");

function renderCart(){

cartItems.innerHTML = "";

if(cart.length === 0){
cartItems.innerHTML = "<h3>Cart Empty</h3>";
return;
}

cart.forEach((item,index) => {

const div = document.createElement("div");

div.innerHTML = `
<img src="${item.image}" width="60">
<span>${item.code}</span>
<button>Remove</button>
`;

div.querySelector("button").onclick = () => {
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
};

cartItems.appendChild(div);

});

}

orderBtn.onclick = () => {

let msg = "Order:\n";

cart.forEach(i => {
msg += i.code + "\n";
});

window.open(
`https://wa.me/919507059053?text=${encodeURIComponent(msg)}`
);

};

renderCart();
