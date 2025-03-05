const itemsUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");

const items = ["Apple", "Orange", "Plum", "Pear", "Hairy Potato"];
const cart = [];

function removeItemFromCart(){
    cart.shift();

    showCart();
}

function showCart(){
    cartUlRef.innerHTML = "";
    for(let i = 0; i < cart.length; i++) {
        cartUlRef.innerHTML += "<li>" +cart[i]
    }
}
function addItemToCart(){
    cart.push(e.target.dataset.name);

    showCart();
    // for(let i = 0; i < cart.length; i++) {
    //     cartUlRef.innerHTML += "<li>" +cart[i]
    // }
}
for(let i = 0; i < items.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = items [i];
    // itemsUlRef.innerHTML += "<li>" + items[i] + "</li>";
    // itemsUlRef.innerHTML += items [i];

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    itemsUlRef.appendChild(newBtn);

    itemsUlRef.appendChild(newLi);
    itemsUlRef.innerHTML += "</li>";

}