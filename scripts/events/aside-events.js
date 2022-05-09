import DOMHandler from "../dom-handler.js";
import {
  indexProducts,
  showProductsByCategory,
} from "../services/products-service.js";
import { saveToLocalStorage } from "../utils.js";

// Este evento, es para cuando el usuario de click sobre una categoría que está en el aside,
// se pueda mostrar los productos de esa categoría en específicos, se realiza una consulta con la Id de la categoría,
// y luego se recarga la página, para mostrar los nuevos pruducto de la categoría seleccionada.
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
