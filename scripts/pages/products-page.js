import { showCategory } from "../services/categories-service.js";
import { fromLocalStorage, saveToLocalStorage } from "../utils.js";
import DOMHandler from "../dom-handler.js";

function listCategories(category) {
  const categorySelected = fromLocalStorage("category selected");
  return `
    <li class="js-category
      list-categories
      ${categorySelected == category["id"] ? "selected" : ""}"
      data-id=${category["id"]}>${category["name"]}</li>
  `;
}

function aside() {
  let categories = fromLocalStorage("categories");
  return `
    <nav>
      <ul>
        ${categories.map(listCategories).join("")}
      </ul>
    </nav>
  `;
}

function renderProducts(product) {
  return `
    <div class="card">
      <image 
        src=${product["url_image"]}
        alt="product's image" class="card__image" />

      <div class="card__description">
        <p class="card__name">${product["name"]}</p>
        <div class="card__footer">
          <p class="card__price">$ ${product["price"] / 100}</p>
          ${
            product["discount"] > 0
              ? `<p class="card__discount">-$ ${product["discount"] / 100}</p>`
              : ""
          }
          <image class="card__icon" src="./assets/icons/cart-plus.svg"/>
        </div>
      </div>
    </div>
    `;
}

function render() {
  let products = fromLocalStorage("products");
  return `
  <div class="container">
  ${aside()}
    <div class="cards__container">
      <h1>Esta es la pagína de products</h1>
      ${products.map(renderProducts)}
    </div>
  </div>
  `;
}

function eventChangeCategory(params) {
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

function ProductsPage() {
  return {
    toString() {
      // return render.call(this);
      return render();
    },
    addListeners() {
      eventChangeCategory();
    },
    state: {
      errors: {},
    },
  };
}

export default ProductsPage;
