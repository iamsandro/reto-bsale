import DOMHandler from "../dom-handler.js";
import { showCategory } from "../services/categories-service.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventChangeCategory() {
  const categoriesList = document.querySelectorAll(".js-category");
  categoriesList.forEach((category) => {
    category.addEventListener("click", async (event) => {
      const categoryId = event.target.dataset.id;
      const products = await showCategory(categoryId);
      saveToLocalStorage("products", products);
      saveToLocalStorage("category selected", categoryId);
      DOMHandler.reload();
    });
  });
}
