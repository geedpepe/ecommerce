
function addToCart(itemName) {
  var cartItem = document.createElement("li");

  var itemNameSpan = document.createElement("span");
  itemNameSpan.textContent = itemName;

  var removeButton = document.createElement("button");
  removeButton.textContent = "Quitar";
  removeButton.onclick = function() {
    cartItem.remove();
    updateCartItems();
  };

  cartItem.appendChild(itemNameSpan);
  cartItem.appendChild(removeButton);

  var cart = document.getElementById("cart-items");
  cart.appendChild(cartItem);
  updateCartItems();
}


function updateCartItems() {
  var cartItems = [];
  var cartItemList = document.getElementById("cart-items").children;

  for (var i = 0; i < cartItemList.length; i++) {
    var itemName = cartItemList[i].querySelector("span").textContent;
    cartItems.push(itemName);
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


window.addEventListener("DOMContentLoaded", function() {
  var cartItems = localStorage.getItem("cartItems");
  if (cartItems) {
    cartItems = JSON.parse(cartItems);
    for (var i = 0; i < cartItems.length; i++) {
      addToCart(cartItems[i]);
    }
  }
});


function checkout() {
  var cartItems = document.getElementById("cart-items");
  if (cartItems.children.length === 0) {
    alert("Su Carrito está vacío.");
  } else {
    var itemNames = [];
    for (var i = 0; i < cartItems.children.length; i++) {
      var itemName = cartItems.children[i].querySelector("span").textContent;
      itemNames.push(itemName);
    }

    var itemNamesString = itemNames.join(", ");
    alert("Gracias por su compra! Usted ha ordenado: " + itemNamesString);

    cartItems.innerHTML = "";
    localStorage.removeItem("cartItems");
  }
}
