import apiFetch from "./api-fetch.js";

export async function indexProducts() {
  return await apiFetch(`products`);
}

export async function showProduct(productId) {
  return await apiFetch(`products/${productId}`);
}

export async function searchMyProducts(productsIds) {
  return await apiFetch(`get_products/${productsIds}`);
}

export async function showCategories() {
  return await apiFetch(`categories`);
}

export async function showProductsByCategory(categoryID) {
  return await apiFetch(`categories/${categoryID}`);
}

export async function searchProducts(ProductSearch, sortBy, order) {
  return sortBy && order
    ? await apiFetch(`search/${ProductSearch}/${sortBy}/${order}`)
    : await apiFetch(`search/${ProductSearch}`);
}

export async function sortAllProducts(sortBy, sortSequence) {
  return await apiFetch(`products/${sortBy}/${sortSequence}`);
}

export async function sortProductsByCategory(ProductID, SortBy, SortSequence) {
  return await apiFetch(
    `products/category/${ProductID}/${SortBy}/${SortSequence}`
  );
}

export async function clasificationTypes() {
  return await apiFetch(`clasification_types`);
}
