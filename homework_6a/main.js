// set selected glaze + quantity
var glazeSelect = document.querySelectorAll(".glazing");
var quantitySelect = document.querySelectorAll(".item_quantity");

// changes button background of selected glaze
function glazeActive() {
    glazeSelect.forEach(glazing => glazing.classList.remove("active"));
    this.classList.add("active");
}

// changes button background of selected quantity
function quantityActive() {
    quantitySelect.forEach(item_quantity => item_quantity.classList.remove("active"));
    this.classList.add("active");
}

// click to activate change in button background 
glazeSelect.forEach(glazing => glazing.addEventListener("click", glazeActive));
quantitySelect.forEach(item_quantity => item_quantity.addEventListener("click", quantityActive));


var order = function(bun, glazing, item_quantity, price) {
    const glazeChosen = document.querySelector(".glazing.active")
    const quantityChosen = document.querySelector(".item_quantity.active");
    if(glazeChosen) {
        this.bun = glazeChosen.dataset.bun;
        this.glazing = glazeChosen.dataset.glazing;
    }
    if(quantityChosen) {
        this.item_quantity = quantityChosen.dataset.item_quantity;
        this.price = quantityChosen.dataset.price;
    }
    
// initialize cart    
let cart = [];

// add new, personalized orders to cart
function addOrder(bun, glazing, item_quantity, price) {
    var item = new order(bun, glazing, item_quantity, price);
    cart.push(item);
}    


let overallCart = document.querySelectorAll('.add_to_cart');

// loop to see how many orders are in the cart
for(let i=0; i < overallCart.length; i++) {
    overallCart[i].addEventListener("click", ()=> {
        cartNum();
    })
}

// checks to see how many items are in the cart
function cartNum() {
    let itemNum = localStorage.getItem("cartNum");
    itemNum = parseInt(itemNum);
    
    if(itemNum) {
        localStorage.setOrder("cartNum", itemNum+1);
        document.querySelector(".cartItems").textContent = itemNum+1;
    }
    else {
        localStorage.setOrder("cartNum", 1);
        document.querySelector(".cartItems").textContent = 1;
    }
}

// intialize cart button
let cartButton = document.querySelector('.add_to_cart');

// when cart button is clicked, it calls the addOrder function
if(cartButton) {
    cartButton.addEventListener('click',() => {
        addOrder();
    })
}
}