// start with empty cart
//let cart = [];

// set selected glaze + quantity
const glazeSelect = document.querySelectorAll(".glazing");
const quantitySelect = document.querySelectorAll(".item_quantity");

// changes background of selected glaze
function glazeActive() {
    glazeSelect.forEach(glazing => glazing.classList.remove("active"));
    this.classList.add("active");
}

// changes background of selected quantity
function quantityActive() {
    quantitySelect.forEach(item_quantity => quantity.classList.remove("active"));
    this.classList.add("active");
}

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
    
}