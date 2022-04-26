import apiFetch from "./api-fetch.js";

export async function indexCategories() {
  return await apiFetch(`/categories`);
}

export async function showCategories(CategoryId) {
  return await apiFetch(`/categories/${CategoryId}`);
}
