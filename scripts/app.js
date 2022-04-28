import DOMHandler from "./dom-handler.js";
import ProductsPage from "./pages/products-page.js";
import {
  indexProducts,
  showCategories,
  clasificationTypes,
} from "./services/products-service.js";
import { getItFromLocalStorage, saveToLocalStorage } from "./utils.js";

let module;
async function App() {
  const root = document.querySelector("#root");
  try {
    const productsInLocalStorage = getItFromLocalStorage("products");
    const categoriesInLocalStorage = getItFromLocalStorage("categories");
    const clasificationTypesInLocalStorage = getItFromLocalStorage(
      "clasification types"
    );
    const products = productsInLocalStorage
      ? productsInLocalStorage
      : await indexProducts();

    const categories = categoriesInLocalStorage
      ? categoriesInLocalStorage
      : await showCategories();

    const clasification = clasificationTypesInLocalStorage
      ? clasificationTypesInLocalStorage
      : await clasificationTypes();
    console.log("🤣", clasification);

    saveToLocalStorage("products", products);
    saveToLocalStorage("categories", categories);
    saveToLocalStorage("clasification types", clasification);
    module = ProductsPage;
  } catch (error) {
    console.log(error);
    module = () => {
      return `<di>NO hay products</div>`;
    };
  }

  return DOMHandler.load(module(), root);
}

export default App;
