import DOMHandler from "../dom-handler.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";

// Este evento es para agregar un producto a la cesta, cuando se da click sobre el ícono del carrito
// que está en el card de los productos se extrae la ID  de dicho producto y se guarda.
export function addEventAddProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");

  iconsCart.forEach((iconCart) => {
    iconCart?.addEventListener("click", async (event) => {
      const productId = event.target.dataset.id;
      let products = getItFromLocalStorage("selected products(ID's)") || [];
      products.includes(+productId)
        ? products.splice(products.indexOf(+productId), 1)
        : products.push(+productId);

      saveToLocalStorage("selected products(ID's)", products);

      DOMHandler.reload();
    });
  });
}

// Este evento es para quitar un producto del carrito o la cesta de compra, se quita el ID, y se recalcula
// el monto a pagar del usuario.
export function addEventDeleteProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");
  let cartProducts = getItFromLocalStorage("Products to seil");
  let indexProducts = getItFromLocalStorage("selected products(ID's)");

  iconsCart.forEach((iconCart) => {
    iconCart?.addEventListener("click", async (event) => {
      const productId = event.target.dataset.id;
      cartProducts = cartProducts.filter((product) => {
        return product["id"] != productId;
      });

      let totalToPay = 0;
      let disscount = 0;

      const productDescription = [
        ...cartProducts.map((product) => {
          totalToPay += product["new_price"];
          disscount += product["saving"] / 100;
          return { name: product["name"], price: product["new_price"] };
        }),
      ];

      saveToLocalStorage("sale description", [
        productDescription,
        totalToPay,
        disscount,
      ]);

      indexProducts.splice(indexProducts.indexOf(productId), 1);

      saveToLocalStorage("selected products(ID's)", indexProducts);
      saveToLocalStorage("Products to seil", cartProducts);

      DOMHandler.reload();
    });
  });
}
