import { productCards } from "../components/product-cards.js";
import { getItFromLocalStorage } from "../utils.js";

function render() {
  const productOfCart = getItFromLocalStorage("Products to seil");
  return `
    <div>
      <h1 >My Cart<h1>
      <div class="cards__container">
        ${productOfCart.map(productCards).join("")}
      </div>
    </div>
  `;
}

function CartPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {},
    state: {
      errors: {},
    },
  };
}

export default CartPage;
