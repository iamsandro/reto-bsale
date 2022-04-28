import DOMHandler from "../dom-handler.js";
import { searchProducts } from "../services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";
import CartPage from "../pages/cart-page.js";

export function addEventOnSearch() {
  const inputSearch = document.querySelector(".js-search");
  inputSearch.addEventListener("change", async (event) => {
    const productToSearch = event.target.value;

    const products = await searchProducts(productToSearch);

    saveToLocalStorage("product to search", productToSearch);
    saveToLocalStorage("products", products);
    saveToLocalStorage("category selected", null);
    saveToLocalStorage("sort selected", null);

    DOMHandler.reload();
  });
}

export function addEventGoToCartPage() {
  const iconCart = document.querySelector(".js-cart-page");
  const root = document.querySelector("#root");

  iconCart.addEventListener("click", () => {
    const productIds = getItFromLocalStorage("Products in the cart");
    let products = getItFromLocalStorage("products");

    let productsToSeil = products.filter((product) => {
      return productIds.includes(product["id"]);
    });

    saveToLocalStorage("Products to seil", productsToSeil);
    DOMHandler.load(CartPage(), root);
  });
}
