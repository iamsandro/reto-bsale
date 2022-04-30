import { getItFromLocalStorage } from "../utils.js";

// const categorySelected = getItFromLocalStorage("category selected");

function listCategories(category) {
  const categorySelected = getItFromLocalStorage("category selected");
  return `
  <li class="js-category
  list-categories
  ${categorySelected == category["id"] ? "selected" : ""}"
  data-id=${category["id"]}>${category["name"]}</li>
  `;
}

export function aside() {
  const categorySelected = getItFromLocalStorage("category selected");
  let categories = getItFromLocalStorage("categories");
  return `
    <nav>
      <ul>
        ${categories.map(listCategories).join("")}
        <li class="js-category list-categories  ${
          categorySelected == "allProduct" ? "selected" : ""
        }" data-id="allProduct"> All products</li>
      </ul>
    </nav>
  `;
}
