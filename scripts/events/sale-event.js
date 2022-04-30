import DOMHandler from "../dom-handler.js";
import { saveToLocalStorage } from "../utils.js";

export function addEventButtonToPay() {
  const button = document.querySelector(".js-button-to-pay");
  button?.addEventListener("click", () => {
    saveToLocalStorage("sale completed", true);
    saveToLocalStorage("IDs of cart's products", []);
    saveToLocalStorage("Products to seil", []);

    DOMHandler.reload();
  });
}
