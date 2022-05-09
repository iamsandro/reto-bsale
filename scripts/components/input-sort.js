import { getItFromLocalStorage } from "../utils.js";

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

export function selecTheOrder() {
  const clasificationTypes = getItFromLocalStorage("clasification types");
  return `
      <select name="sort" class="js-sort input-selected">
        <option>Select to sort products</option>
        ${clasificationTypes.map(options)}
      </select>`;
}
