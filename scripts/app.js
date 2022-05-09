import DOMHandler from "./dom-handler.js";
import ProductsPage from "./pages/products-page.js";
import {
  indexProducts,
  showCategories,
  clasificationTypes,
} from "./services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "./utils.js";
import ErrorPage from "./pages/error-page.js";

let module;
async function App() {
  const root = document.querySelector("#root");
  try {
    const categorySelected = getItFromLocalStorage("current category");
    const productsInLocalStorage = getItFromLocalStorage("products");
    const categoriesInLocalStorage = getItFromLocalStorage("categories");
    const clasificationTypesInLocalStorage = getItFromLocalStorage(
      "clasification types"
    );
    const products =
      categorySelected == null ? await indexProducts() : productsInLocalStorage;

    const categories = categoriesInLocalStorage
      ? categoriesInLocalStorage
      : await showCategories();

    const clasification = clasificationTypesInLocalStorage
      ? clasificationTypesInLocalStorage
      : await clasificationTypes();

    saveToLocalStorage("products", products);
    saveToLocalStorage("categories", categories);
    saveToLocalStorage("clasification types", clasification);
    saveToLocalStorage("sale completed", false);
    if (!categorySelected) {
      saveToLocalStorage("current category", null);
    }

    module = ProductsPage;
  } catch (error) {
    console.log(error);
    module = ErrorPage;
  }

  return DOMHandler.load(module(), root);
}

export default App;
