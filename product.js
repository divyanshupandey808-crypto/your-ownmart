const params = new URLSearchParams(window.location.search);

const code = params.get("code");

const product = products.find(p => p.code === code);

const productImage = document.getElementById("productImage");
const productCode = document.getElementById("productCode");
const productCategory = document.getElementById("productCategory");
const whatsappBtn = document.getElementById("whatsappBtn");

if(product){

productImage.src = product.image;

productCode.textContent = product.code;

productCategory.textContent = product.category.toUpperCase();

const message =
`Hello, I want to buy Product ${product.code}`;

whatsappBtn.href =
`https://wa.me/919507059053?text=${encodeURIComponent(message)}`;

}else{

document.body.innerHTML = `
<h2 style="text-align:center;margin-top:100px;">
Product Not Found
</h2>
`;

}

// Image Zoom

productImage.addEventListener("click",()=>{

if(productImage.style.transform==="scale(2)"){

productImage.style.transform="scale(1)";

productImage.style.cursor="zoom-in";

}else{

productImage.style.transform="scale(2)";

productImage.style.cursor="zoom-out";

}

});
