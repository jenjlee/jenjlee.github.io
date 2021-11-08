// Calling Global variables
var numQuantity = 1;
var origBunPrice = 2;

// Contructors
function originalBun(glaze, quantity, price) {
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
}

// when user clicks "Add to Cart"
function addOrder() {
    var glazeOption = document.getElementById("glaze");
    var glazeChosen = glazeOption.options[glazeOption.selectedIndex].text;
    
    var quantityOption = document.getElementById("quantity");
    var quantityChosen = quantityOption.options[quantityOption.selectedIndex].text;
    
    var bunPrice = document.getElementById("original_price").textContent;
    
    var itemsInCart = document.getElementById("cartItems").textContent;
    itemsInCart = parseInt(itemsInCart)+1;
    document.getElementById("cartItems").textContent = itemsInCart;
    
    sessionStorage.setItem("itemsInCart", itemsInCart);
    
    var addItem = new originalBun(glazeChosen, quantityChosen, bunPrice);
    
    if(itemsInCart ==  1) {
        var cartProducts = new Array(addItem);
        sessionStorage.setObj("cartProducts", cartProducts);
    }
    else if(itemsInCart >= 2) {
        var cartProducts = sessionStorage.getObj("cartProducts");
        cartProducts.push(addItem);
        sessionStorage.setObj("cartProducts", cartProducts);
    }
}

function updateQuantity() {
    var quantityOptions = document.getElementById("quantity");
    var quantitySelected = quantityOptions.options[quantityOptions.selectedIndex].text;
    numQuantity = parseInt(quantitySelected);
    document.getElementById("original_price").textContent = "$" + numQuantity*origBunPrice;
}

function onLoad() {
    var countCheck = sessionStorage.getItem("itemsInCart");
    var subtotal = 0;
    var currentPrice = document.getElementsByClassName("subtotal_price")[0];
    
    if(countCheck == undefined) {
        countCheck = 0;
        if(countCheck !== undefined) {
            document.getElementsByClassName("subtotal_price")[0].textContent = $0
            document.getElementsByClassName("subtotal_price")[1].textContent = $0
        }
    }
    
    document.getElementById("cartItems").textContent = checkCount;
    
    var firstItem = document.getElementsByClassName("item1")[0];
    if(firstItem !== undefined && countCheck<1) {
        firstItem.innerHTML = "No items in your cart!"
        firstItem.style.display = "block";
        firstItem.style.textAlign = "center";
    }
    
}




