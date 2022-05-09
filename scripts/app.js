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
    // se verifica si exites datos acerca de los productos en el local storage
    // si no lo hay tendremos un null. Esto es útil, cuando se haga refresh a la página
    // no se piedan los datos de navegación.
    const categorySelected = getItFromLocalStorage("current category");
    const productsInLocalStorage = getItFromLocalStorage("products");
    const categoriesInLocalStorage = getItFromLocalStorage("categories");
    const clasificationTypesInLocalStorage = getItFromLocalStorage(
      "clasification types"
    );

    // Se realizan peticiones a la api solo si resulatado del localstorage es null
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

    //por defecto se nos redirige a la página de productos.
    //incluido el refresh, volveremos a la ágina de productos.
    module = ProductsPage;
  } catch (error) {
    console.log(error);
    module = ErrorPage;
  }

  //si no hubo ningún error, cargaremos lá pagína en el index.html.
  return DOMHandler.load(module(), root);
}

export default App;
