import { getItFromLocalStorage } from "../utils.js";

function options(type) {
  const optionSelected = getItFromLocalStorage("sort selected");
  const categorySelected = getItFromLocalStorage("category selected");
  return `
  <option
  value="${categorySelected ? type + " " + categorySelected : type}" 
  ${optionSelected?.includes(type) ? "selected" : ""}
  >${type}</option>
  `;
}

export function inputSelect() {
  const optionSelected = getItFromLocalStorage("order selected");
  const clasificationTypes = getItFromLocalStorage("clasification types");
  return `
      <select name="sort" class="js-sort input-selected">
        <option>Select to sort products</option>
        ${clasificationTypes.map(options)}
      </select>`;
}
