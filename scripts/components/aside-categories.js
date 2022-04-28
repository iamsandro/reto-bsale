import { getItFromLocalStorage } from "../utils.js";

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
  let categories = getItFromLocalStorage("categories");
  return `
    <nav>
      <ul>
        ${categories.map(listCategories).join("")}
      </ul>
    </nav>
  `;
}
