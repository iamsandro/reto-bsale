import DOMHandler from "../dom-handler.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";

export function addEventAddProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");
  iconsCart.forEach((iconCart) => {
    iconCart.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      let products = getItFromLocalStorage("Products in the cart") || [];
      products.includes(+productId)
        ? products.splice(products.indexOf(+productId), 1)
        : products.push(+productId);
      saveToLocalStorage("Products in the cart", products);
      DOMHandler.reload();
    });
  });
}
