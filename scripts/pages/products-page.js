//Esta página es la principal, aquí se nos muestra los productos disponibles y los filtros de los mismos.
import { getItFromLocalStorage } from "../utils.js";
import { aside } from "../components/aside-categories.js";
import { searchTool } from "../components/input-search.js";
import { productCards } from "../components/product-cards.js";
import { addEventChangeCategory } from "../events/aside-events.js";
import {
  addEventGoToCartPage,
  addEventOnSearch,
} from "../events/header-events.js";
import { addEventAddProductToCart } from "../events/product-events.js";
import { selecTheOrder } from "../components/input-sort.js";
import { addEventSelectSort } from "../events/sort-events.js";
import { addEventChangeNumberPage } from "../events/pagination-event.js";
import { pagination } from "../components/pagination.js";

function render() {
  const currentNumberPage = getItFromLocalStorage("current number page") || 1;
  const allProducts = getItFromLocalStorage("products");
  const quantityPages = allProducts.length;
  const products = allProducts[currentNumberPage - 1];

  return `
  ${searchTool()}
  <div class="sub-header">
    ${products[0] ? selecTheOrder() : ""}
    <div class="pagination__container">
      ${pagination(currentNumberPage, quantityPages)}
    </div>
  </div>
  <div class="container">
    ${aside()}
    <div class="div__main">
      <div class="cards__container">
        ${
          products.length > 0
            ? products.map(productCards).join("")
            : "<h1>Sorry! We don't have this product 😣</h1>"
        }
      </div>
    </div>
  </div>
  `;
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
      addEventSelectSort();
      addEventGoToCartPage();
      addEventChangeNumberPage();
    },
  };
}

export default ProductsPage;
