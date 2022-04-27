import { showCategory } from "../services/categories-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";
import DOMHandler from "../dom-handler.js";
import { searchProducts } from "../services/products-service.js";

function listCategories(category) {
  const categorySelected = getItFromLocalStorage("category selected");
  return `
    <li class="js-category
      list-categories
      ${categorySelected == category["id"] ? "selected" : ""}"
      data-id=${category["id"]}>${category["name"]}</li>
  `;
}

function aside() {
  let categories = getItFromLocalStorage("categories");
  return `
    <nav>
      <ul>
        ${categories.map(listCategories).join("")}
      </ul>
    </nav>
  `;
}

function header() {
  return `
  <div class="header">
    <p class="logo" >BSALE TEST MF</p>
    <input name="search" placeholder="Buscar" class="js-search input"></input>
  </div>
`;
}

function renderCardProducts(product) {
  const ProductInTheCart = getItFromLocalStorage("Products in the cart");
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
              ? `<p class="card__discount">Discount:<br>-$ ${
                  product["discount"] / 100
                }</p>`
              : ""
          }
          <image 
          data-id=${product["id"]}
          class="card__icon js-cart" 
          src=${
            ProductInTheCart?.includes(product["id"])
              ? "./assets/icons/cart-down.svg"
              : "./assets/icons/cart-plus.svg"
          }
          />
        </div>
      </div>
    </div>
    `;
}

function render() {
  let products = getItFromLocalStorage("products");
  return `
  ${header()}
  <div class="container">
  ${aside()}
    <div class="cards__container">
      ${products.map(renderCardProducts)}
    </div>
  </div>
  `;
}

function addEventAddProductToCart() {
  const iconsCart = document.querySelectorAll(".js-cart");
  iconsCart.forEach((iconCart) => {
    iconCart.addEventListener("click", (event) => {
      const productId = event.target.dataset.id;
      let products = getItFromLocalStorage("Products in the cart") || [];
      products.includes(+productId)
        ? products.splice(products.indexOf(+productId), 1)
        : products.push(+productId);
      saveToLocalStorage("Products in the cart", products);
      DOMHandler.reload();
    });
  });
}

function addEventOnSearch() {
  const inputSearch = document.querySelector(".js-search");
  inputSearch.addEventListener("change", async (event) => {
    const products = await searchProducts(event.target.value);
    saveToLocalStorage("products", products);
    saveToLocalStorage("category selected", null);
    DOMHandler.reload();
  });
}

function addEventChangeCategory() {
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
      return render();
    },
    addListeners() {
      addEventChangeCategory();
      addEventOnSearch();
      addEventAddProductToCart();
    },
    state: {
      errors: {},
    },
  };
}

export default ProductsPage;
