import apiFetch from "./api-fetch.js";

export async function indexProducts() {
  return await apiFetch(`products`);
}

export async function showProduct(ProductID) {
  return await apiFetch(`products/${ProductID}`);
}

export async function sortProducts(SortBy, SortSequence) {
  return await apiFetch(`products/${SortBy}/${SortSequence}`);
}
export async function sortProductsByCategory(ProductID, SortBy, SortSequence) {
  return await apiFetch(`products/${ProductID}/${SortBy}/${SortSequence}`);
}

export async function searchProducts(ProductSearch) {
  return await apiFetch(`search/${ProductSearch}`);
}
