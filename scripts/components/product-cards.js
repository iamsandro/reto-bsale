import { getItFromLocalStorage } from "../utils.js";

export function productCards(product) {
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
