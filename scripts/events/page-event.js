import DOMHandler from "../dom-handler.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventPage() {
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
