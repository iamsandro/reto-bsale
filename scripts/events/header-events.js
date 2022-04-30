import DOMHandler from "../dom-handler.js";
import { searchProducts } from "../services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "../utils.js";
import CartPage from "../pages/sale-page.js";
import ProductsPage from "../pages/products-page.js";

export function addEventOnSearch() {
  const inputSearch = document.querySelector(".js-search");
  inputSearch.addEventListener("change", async (event) => {
    const productToSearch = event.target.value;

    const products = await searchProducts(productToSearch);

    saveToLocalStorage("product to search", productToSearch);
    saveToLocalStorage("products", products);
    saveToLocalStorage("category selected", null);
    saveToLocalStorage("sort selected", null);

    DOMHandler.reload();
  });
}

export function addEventGoToCartPage() {
  const iconCart = document.querySelector(".js-cart-page");
  const root = document.querySelector("#root");

  iconCart.addEventListener("click", () => {
    const productIds = getItFromLocalStorage("IDs of cart's products");
    let products = getItFromLocalStorage("All products");

    let productsToSeil = products.filter((product) => {
      return productIds?.includes(product["id"]);
    });

    let totalToPay = 0;
    let discount = 0;
    const productDescription = [
      ...productsToSeil.map((product) => {
        totalToPay += product["price"];
        discount += product["discount"];
        return { name: product["name"], price: product["price"] };
      }),
    ];

    saveToLocalStorage("sale description", [
      productDescription,
      totalToPay,
      discount,
    ]);
    saveToLocalStorage("Products to seil", productsToSeil);
    DOMHandler.load(CartPage(), root);
  });
}

export function addEventBackToProductPage() {
  const root = document.querySelector("#root");
  const iconBack = document.querySelector(".js-back");

  saveToLocalStorage("sale completed", false);

  iconBack.addEventListener("click", () => {
    DOMHandler.load(ProductsPage(), root);
  });
}
