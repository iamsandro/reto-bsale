import { productCards } from "../components/product-cards.js";
import { addEventBackToProductPage } from "../events/header-events.js";
import { getItFromLocalStorage } from "../utils.js";
import { saleCard } from "../components/sale-card.js";
import { addEventDeleteProductToCart } from "../events/product-events.js";
import { addEventButtonToPay } from "../events/sale-event.js";
import { message } from "../components/message-sale-page.js";

function render() {
  const productOfCart = getItFromLocalStorage("Products to seil");
  const saleCompleted = getItFromLocalStorage("sale completed");
  return `
    <div>
      <div class="header">
        <div class="back">
          <img src="./assets/icons/back.svg" class="js-back icon-back" />
          <span>continue shopping</span>
        </div>
        <h1 class="name-page">My Cart<h1>
      </div>
      ${
        saleCompleted
          ? message("Your purchase was successful, click on continue shopping")
          : `<div class="container">
              ${saleCard()}
                ${
                  productOfCart[0]
                    ? `
                  <div class="cards__container">
                    ${productOfCart.map(productCards).join("")}
                  </div>`
                    : message("you don't have any products in your cart yet")
                }
            </div>`
      }
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
      addEventDeleteProductToCart();
      addEventButtonToPay();
    },
  };
}

export default CartPage;
