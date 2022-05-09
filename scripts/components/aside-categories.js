import { getItFromLocalStorage } from "../utils.js";

// const categorySelected = getItFromLocalStorage("current category");

function listCategories(category) {
  const categorySelected = getItFromLocalStorage("current category");
  return `
  <li class="js-category
  list-categories
  ${categorySelected == category["id"] ? "selected" : ""}"
  data-id=${category["id"]}>${category["name"]}</li>
  `;
}

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
