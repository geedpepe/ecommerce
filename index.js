// funcion carrito
function addToCart(itemName) {
    // lista
    var cartItem = document.createElement("li");
  
  
    var itemNameSpan = document.createElement("span");
    itemNameSpan.textContent = itemName;
  
    var removeButton = document.createElement("button");
    removeButton.textContent = "Quitar";
    removeButton.onclick = function() {
      cartItem.remove();
    };
  
    cartItem.appendChild(itemNameSpan);
    cartItem.appendChild(removeButton);
  
  
    var cart = document.getElementById("cart-items");
    cart.appendChild(cartItem);
  }
  
  // Funcion Checkout 
  function checkout() {
    var cartItems = document.getElementById("cart-items");
  
    if (cartItems.children.length === 0) {
      alert("Su Carrito esta vacio.");
    } else {
      var itemNames = [];
      for (var i = 0; i < cartItems.children.length; i++) {
        var itemName = cartItems.children[i].querySelector("span").textContent;
        itemNames.push(itemName);
      }
  
      var itemNamesString = itemNames.join(", ");
      alert("Gracias por su compra! Usted ha ordenado: " + itemNamesString);
  
      // Clear the cart
      cartItems.innerHTML = "";
    }
  }
  
  