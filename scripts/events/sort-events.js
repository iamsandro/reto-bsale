import DOMHandler from "../dom-handler.js";
import {
  searchProducts,
  sortAllProducts,
  sortProductsByCategory,
} from "../services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";

export function addEventSelectSort() {
  const input = document.querySelector(".js-sort");
  const searching = getItFromLocalStorage("product to search");

  input.addEventListener("change", async (event) => {
    const optionSelected = event.target.value;
    const [sortBy, order, categoryId] = optionSelected.split(" ");
    let products;

    if (searching == null) {
      products = categoryId
        ? await sortProductsByCategory(categoryId, sortBy, order)
        : await sortAllProducts(sortBy, order);
      saveToLocalStorage("products", products);
    } else {
      products = await searchProducts(searching, sortBy, order);
    }

    saveToLocalStorage("products", products);
    saveToLocalStorage("sort selected", `${sortBy} ${order}`);

    DOMHandler.reload();
  });
}
