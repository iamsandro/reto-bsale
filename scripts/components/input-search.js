//Esta función es retorna el bloque HTML cabezera, incluye el nombe "bsale test Mf" y el campo para buscar.
export function searchTool() {
  return `
  <div class="search-tool">
    <p class="app-name" >BSALE TEST MF</p>
    <input name="search" placeholder="Buscar" class="js-search input"></input>
    <img src="./assets/icons/cart.svg" alt="icon-cart" class="js-cart-page icon-cart"/>
  </div>
`;
}
