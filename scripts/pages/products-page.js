import { getItFromLocalStorage } from "../utils.js";
import { aside } from "../components/aside-categories.js";
import { searchTool } from "../components/input-search.js";
import { productCards } from "../components/product-cards.js";
import { addEventChangeCategory } from "../events/aside-events.js";
import {
  addEventGoToCartPage,
  addEventOnSearch,
} from "../events/search-events.js";
import { addEventAddProductToCart } from "../events/product-events.js";
import { inputSelect } from "../components/input-sort.js";
import { addEventSelectSort } from "../events/sort-events.js";

function render() {
  const products = getItFromLocalStorage("products");
  location.replace("https://business.tutsplus.com");
  console.log("😊", location.href);
  return `
  ${searchTool()}
  <div class="container">
    ${aside()}
    <div>
      ${inputSelect()}
      <div class="cards__container">
        ${products.map(productCards)}
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
    },
    state: {
      errors: {},
    },
  };
}

export default ProductsPage;
