import { getItFromLocalStorage } from "../utils.js";

function options(type) {
  const optionSelected = getItFromLocalStorage("order selected");
  const categorySelected = getItFromLocalStorage("category selected");
  return `
  <option
    value="${categorySelected ? type + " " + categorySelected : type}" 
    ${optionSelected == type ? "selected" : ""}
  >${type}</option>
  `;
}

export function inputSelect() {
  const clasificationTypes = getItFromLocalStorage("clasification types");
  return `
      <select name="sort" class="js-sort input-selected">
        ${clasificationTypes.map(options)}
      </select>`;
}
