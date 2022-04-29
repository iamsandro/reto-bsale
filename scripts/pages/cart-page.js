import { productCards } from "../components/product-cards.js";
import { addEventBackToProductPage } from "../events/header-events.js";
import { getItFromLocalStorage } from "../utils.js";

function product(product) {
  return `
    <p class="card-sale__name">* ${product["name"]}</p>
    <p class="card-sale__price">$ ${product["price"]}</li>
  `;
}

function saleDescription() {
  const [list, total, disscount] = getItFromLocalStorage("sale description");
  return `
    <div class="card-sale">
      <p class="card-sale__title">sale description</p>
      <div class="card-sale__lists">
        ${list.map(product).join("")}
      </div>
      <p class="card-sale__total">Total to pay: $ ${total}</p>
      <p class="card-sale__total">Discount: - $ ${disscount}</p>
      <p class="card-sale__total">New Total: $ ${total - disscount}</p>
      <button>Pay now</button>
    </div>
  `;
}

function render() {
  const productOfCart = getItFromLocalStorage("Products to seil");
  return `
    <div>
      <div class="header">
        <div class="back">
          <img src="./assets/icons/back.svg" class="js-back icon-back" />
          <span>continue shopping</span>
        </div>
        <h1 class="name-page">My Cart<h1>
      </div>
      <div class="container">
        ${saleDescription()}
        <div class="cards__container">
          ${productOfCart.map(productCards).join("")}
        </div>
      </div>
    </div>
  `;
}

function CartPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      addEventBackToProductPage();
    },
    state: {
      errors: {},
    },
  };
}

export default CartPage;
