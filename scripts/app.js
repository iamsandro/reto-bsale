import DOMHandler from "./dom-handler.js";
import ProductsPage from "./pages/products-page.js";
import { indexProducts } from "./services/products-service.js";
import { saveToLocalStorage } from "./utils.js";

const root = document.querySelector("#root");

let module;
async function App() {
  try {
    let products = await indexProducts();
    saveToLocalStorage("products", products);
    module = ProductsPage;
  } catch (error) {
    console.log(error);
    // module = PageDon'tfound;
  }

  return DOMHandler.load(module(), root);
}

export default App;
