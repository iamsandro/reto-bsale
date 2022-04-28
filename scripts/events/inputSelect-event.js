import DOMHandler from "../dom-handler.js";
import {
  sortAllProducts,
  sortProductsByCategory,
} from "../services/products-service.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventSelectSort() {
  const input = document.querySelector(".js-sort");
  input.addEventListener("change", async (event) => {
    const optionSelected = event.target.value;
    saveToLocalStorage("order selected", optionSelected);
    const [sortBy, order, categoryId] = optionSelected.split(" ");
    const products = categoryId
      ? await sortProductsByCategory(categoryId, sortBy, order)
      : await sortAllProducts(sortBy, order);
    saveToLocalStorage("products", products);
    DOMHandler.reload();
  });
}
