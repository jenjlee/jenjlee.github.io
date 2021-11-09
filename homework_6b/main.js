// Global variables
var numQuantity = 1
var origBunPrice = 2

// Changing price of bun when choosing quantity
function updateQuantity() {
    var quantityOptions = document.getElementById("quantity")
    var quantitySelected = quantityOptions.options[quantityOptions.selectedIndex].text;
    numQuantity = parseInt(quantitySelected);
    document.getElementById("original_price").textContent = "$" + numQuantity*origBunPrice;
}