import DOMHandler from "../dom-handler.js";
import {
  searchMyProducts,
  searchProducts,
} from "../services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";
import CartPage from "../pages/sale-page.js";
import ProductsPage from "../pages/products-page.js";

export function addEventOnSearch() {
  const inputSearch = document.querySelector(".js-search");
  inputSearch?.addEventListener("change", async (event) => {
    const productToSearch = event.target.value;

    const products = await searchProducts(productToSearch);

    saveToLocalStorage("product to search", productToSearch);
    saveToLocalStorage("products", products);
    saveToLocalStorage("current category", null);
    saveToLocalStorage("sort selected", null);

    DOMHandler.reload();
  });
}

export function addEventGoToCartPage() {
  const iconCart = document.querySelector(".js-cart-page");
  const root = document.querySelector("#root");

  iconCart?.addEventListener("click", async () => {
    const productIds = getItFromLocalStorage("selected products(ID's)");

    let products = (await searchMyProducts(productIds))[0];

    let totalToPay = 0;
    let discount = 0;
    const productDescription = [
      ...products.map((product) => {
        totalToPay += product["price"];
        discount += product["saving"];
        return { name: product["name"], price: product["price"] };
      }),
    ];

    saveToLocalStorage("sale description", [
      productDescription,
      totalToPay,
      discount,
    ]);
    saveToLocalStorage("Products to seil", products);
    DOMHandler.load(CartPage(), root);
  });
}

export function addEventBackToProductPage() {
  const root = document.querySelector("#root");
  const iconBack = document.querySelector(".js-back");

  saveToLocalStorage("sale completed", false);

  iconBack?.addEventListener("click", () => {
    DOMHandler.load(ProductsPage(), root);
  });
}
