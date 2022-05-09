import { getItFromLocalStorage } from "../utils.js";

// Este bloque se encarga en enlistar, para el tag select, todas las opciones para ordenar.
function options(type) {
  const optionSelected = getItFromLocalStorage("sort selected");
  const categorySelected = getItFromLocalStorage("current category");
  return `
  <option
  class="option-sort"
  value="${categorySelected ? type + " " + categorySelected : type}" 
  ${optionSelected?.includes(type) ? "selected" : ""}
  >${type}</option>
  `;
}

// Este bloque devuelve el tag select, con las opciones para ordenar los productos.
export function selecTheOrder() {
  const clasificationTypes = getItFromLocalStorage("clasification types");
  return `
      <select name="sort" class="js-sort input-selected">
        <option>Select to sort products</option>
        ${clasificationTypes.map(options)}
      </select>`;
}
