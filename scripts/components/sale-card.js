import { getItFromLocalStorage } from "../utils.js";

// Este bloque recibe un producto(objeto) y extrae el precion y el nombre, que sirven para el card sale(descipción de la venta)
function product(product) {
  return `
    <div class="card-full-item">
      <p class="card-sale__name">- ${product["name"]}</p>
      <p class="card-sale__price">$ ${product["price"] / 100}</li>
    </div>
  `;
}

// Este bloque de código retorna el bloque HTML para mostra el card sale o card para la descripción de la venta.
export function saleCard() {
  const [list, total, discount] = getItFromLocalStorage("sale description");
  return `
    <div class="card-sale">
      <p class="card-sale__title">sale description</p>

        <div class="card-sale__lists">
          ${list.map(product).join("")}
        </div>
        <p class="card-sale__total">Total to pay: $ ${total / 100}</p>
        ${
          discount > 0
            ? `<p class="card-sale__disscount">Discount: - $ ${
                discount / 100
              }</p>
              <p class="card-sale__total center">New Total: $ ${
                (total - discount) / 100
              }</p>
            `
            : ""
        }
        <button class="js-button-to-pay button">Pay now</button>
    </div>
  `;
}
