import DOMHandler from "../dom-handler.js";
import { saveToLocalStorage } from "../utils.js";

// Este evento es para cambiar de número de página, cuando se da click, sobre alguno de los botones(números)
// pasamos a dicho número de página.
export function addEventChangeNumberPage() {
  const numberPages = document.querySelectorAll(".js-page");
  numberPages?.forEach((page) => {
    page.addEventListener("click", (event) => {
      const number = event.target.dataset.number;
      console.log(number);
      saveToLocalStorage("current number page", number);

      DOMHandler.reload();
    });
  });
}
