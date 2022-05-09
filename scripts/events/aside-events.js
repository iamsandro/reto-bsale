import DOMHandler from "../dom-handler.js";
import {
  indexProducts,
  showProductsByCategory,
} from "../services/products-service.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventChangeCategory() {
  const categoriesList = document.querySelectorAll(".js-category");
  categoriesList.forEach((category) => {
    category?.addEventListener("click", async (event) => {
      const categoryId = event.target.dataset.id;

      const products =
        categoryId !== null && categoryId !== "null"
          ? await showProductsByCategory(categoryId)
          : await indexProducts();

      saveToLocalStorage("products", products);
      saveToLocalStorage("current category", categoryId);
      saveToLocalStorage("current number page", 1);
      saveToLocalStorage("product to search", null);
      saveToLocalStorage("sort selected", null);

      DOMHandler.reload();
    });
  });
}
