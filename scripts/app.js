import DOMHandler from "./dom-handler.js";
import ProductsPage from "./pages/products-page.js";
import { indexCategories } from "./services/categories-service.js";
import { indexProducts } from "./services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "./utils.js";

const root = document.querySelector("#root");

let module;
async function App() {
  try {
    const productsInLocalStorage = getItFromLocalStorage("products");
    const products = productsInLocalStorage
      ? productsInLocalStorage
      : await indexProducts();
    const categories = await indexCategories();
    saveToLocalStorage("products", products);
    saveToLocalStorage("categories", categories);
    module = ProductsPage;
  } catch (error) {
    console.log(error);
    // module = PageDon'tfound;
  }

  return DOMHandler.load(module(), root);
}

export default App;
