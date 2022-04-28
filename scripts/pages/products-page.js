import { getItFromLocalStorage } from "../utils.js";
import { aside } from "../components/aside.js";
import { searchTool } from "../components/tool-search.js";
import { productCards } from "../components/product-cards.js";
import { addEventChangeCategory } from "../events/asides-events.js";
import { addEventOnSearch } from "../events/search-tool-events.js";
import { addEventAddProductToCart } from "../events/cards-events.js";
import { inputSelect } from "../components/input-select-order.js";
import { addEventSelectSort } from "../events/inputSelect-event.js";

function render() {
  const products = getItFromLocalStorage("products");
  return `
  ${searchTool()}
  <div class="container">
  ${aside()}
    <div class="cards__container">
      ${inputSelect()}
      ${products.map(productCards)}
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
    },
    state: {
      errors: {},
    },
  };
}

export default ProductsPage;
