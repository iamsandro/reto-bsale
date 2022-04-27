import DOMHandler from "../dom-handler.js";
import { searchProducts } from "../services/products-service.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventOnSearch() {
  const inputSearch = document.querySelector(".js-search");
  inputSearch.addEventListener("change", async (event) => {
    const productToSearch = event.target.value;
    const products = await searchProducts(productToSearch);
    saveToLocalStorage("productToSearch", productToSearch);
    saveToLocalStorage("products", products);
    saveToLocalStorage("category selected", null);
    DOMHandler.reload();
  });
}
