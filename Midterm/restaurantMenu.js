// These are from Week Seven Week 8 and Homework 4
const menuItemsUlRef = document.querySelector("#menu");
console.log(menuItemsUlRef)
const itemsUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document.querySelector("#remove-item");
const cartsSectionRef = document.querySelector("#carts");

const menuItems = {
    items: "Hamburger",
    price: "$2.99",

    items: "Cheeseburger",
    price: "$3.99",

    items: "Cheese Pizza",
    price: "$3.99",

    items: "Pepperoni Pizza",
    price: "$4.99",

    items: "Sausage Pizza",
    price: "$4.99",

    items: "Caesar Salad",
    price: "$3.99",

    items: "Fries",
    price: "$1.99",

    items: "Onion Rings",
    price: "$2.49",
};
const cart = [];

const myFood = [
    { name: "Hamburger", price: "$2.99"},
    { name: "Cheeseburger", price: "$3.99"},
    { name: "Cheese Pizza", price: "$3.99"},
    { name: "Pepperoni Pizza", price: "$4.99"},
    { name: "Sausage Pizza", price: "$4.99"},
    { name: "Caesar Salad", price: "$3.99"},
    { name: "Fries", price: "$1.99"},
    { name: "Onion Rings", price: "$2.49"},
];


// Will not add to cart?
function removeItemFromCart() {
    cart.shift();
  
    showCart();
  }
  
  function showCart() {
    cartUlRef.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
      cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
    }
  }
  
  function addItemToCart(e) {
    cart.push(e.target.dataset.name);
  
    showCart();
  }
  

// This works fine (important menu stuff)
for (let i = 0; i < myFood.length; i++) {
    const menuItems = myFood[i]
    const newLi = document.createElement("li");
    newLi.innerText = menuItems.name + "|" + menuItems.price;

    const newBtn = document.createElement("button");
    newBtn.innerHTML = "+";
    newBtn.dataset.name = menuItems.name + "|" + menuItems.price;

    newBtn.onclick = addItemToCart;
    newLi.appendChild(newBtn);

    menuItemsUlRef.appendChild(newLi);
}

  removeBtnRef.onclick = removeItemFromCart;