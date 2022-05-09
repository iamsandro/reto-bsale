import { getItFromLocalStorage } from "../utils.js";

// Esta función recibe una categoría(objeto) y la enlista.
function listCategories(category) {
  const categorySelected = getItFromLocalStorage("current category");
  return `
  <li class="js-category
  list-categories
  ${categorySelected == category["id"] ? "selected" : ""}"
  data-id=${category["id"]}>${category["name"]}</li>
  `;
}

// Esta función  se encarga de mapear las categoría existentes y retorna el bloque HTML para ser renderisado.
export function aside() {
  const categorySelected = getItFromLocalStorage("current category");
  let categories = getItFromLocalStorage("categories");
  return `
    <nav class="asaide__container">
      <ul>
        ${categories.map(listCategories).join("")}
        <li class="js-category list-categories  ${
          categorySelected == null || categorySelected == "null"
            ? "selected"
            : ""
        }" data-id=null> All products</li>
      </ul>
    </nav>
  `;
}
