import DOMHandler from "../dom-handler.js";
import { showProduct } from "../services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";

export function addEventAddProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");

  iconsCart.forEach((iconCart) => {
    iconCart.addEventListener("click", async (event) => {
      const productId = event.target.dataset.id;
      let products = getItFromLocalStorage("IDs of cart's products") || [];
      products.includes(+productId)
        ? products.splice(products.indexOf(+productId), 1)
        : products.push(+productId);

      saveToLocalStorage("IDs of cart's products", products);

      DOMHandler.reload();
    });
  });
}

export function addEventDeleteProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");
  let cartProducts = getItFromLocalStorage("Products to seil");
  let indexProducts = getItFromLocalStorage("IDs of cart's products");

  iconsCart.forEach((iconCart) => {
    iconCart.addEventListener("click", async (event) => {
      const productId = event.target.dataset.id;
      cartProducts = cartProducts.filter((product) => {
        return product["id"] != productId;
      });

      let totalToPay = 0;
      let disscount = 0;

      const productDescription = [
        ...cartProducts.map((product) => {
          totalToPay += product["price"];
          disscount += product["discount"];
          return { name: product["name"], price: product["price"] };
        }),
      ];

      saveToLocalStorage("sale description", [
        productDescription,
        totalToPay,
        disscount,
      ]);

      indexProducts.splice(indexProducts.indexOf(productId), 1);

      saveToLocalStorage("IDs of cart's products", indexProducts);
      saveToLocalStorage("Products to seil", cartProducts);

      DOMHandler.reload();
    });
  });
}
