import apiFetch from "./api-fetch.js";

export async function indexProducts() {
  return await apiFetch(`products`);
}

export async function showCategories() {
  return await apiFetch(`categories`);
}

export async function showProductsByCategory(categoryID) {
  return await apiFetch(`categories/${categoryID}`);
}

export async function searchProducts(ProductSearch) {
  return await apiFetch(`search/${ProductSearch}`);
}

export async function sortAllProducts(sortBy, sortSequence) {
  return await apiFetch(`products/${sortBy}/${sortSequence}`);
}

export async function sortProductsByCategory(ProductID, SortBy, SortSequence) {
  return await apiFetch(`products/${ProductID}/${SortBy}/${SortSequence}`);
}

export async function clasificationTypes() {
  return await apiFetch(`clasification_types`);
}
