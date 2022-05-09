import { getItFromLocalStorage } from "../utils.js";

// Este bloque de código retorna el bloque HTML del card del producto que se mostrará en pantalla.
export function productCards(product) {
  const ProductInTheCart = getItFromLocalStorage("selected products(ID's)");
  return `
    <div class="card">
      <image 
        src=${
          product["url_image"]
            ? product["url_image"]
            : "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"
        }
        alt="product's image" class="card__image" />

      <div class="card__description">
        <p class="card__name">${product["name"]}</p>
        <div class="card__footer">
          <p class="card__price ${
            product["discount"] > 0 ? "crossed-out" : ""
          }">$ ${product["price"] / 100}</p>
          ${
            product["discount"] > 0
              ? `<p class="card__discount">Get it for:<br>$ ${
                  product["new_price"] / 100
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
