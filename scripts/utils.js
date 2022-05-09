// Estas funciones nos sirver para guardar datos en el local storage y luego obtenerlas de nuevo.
let appKey = "bsale_test";

export function getItFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(appKey)) || {};
  return data[key];
}

export function saveToLocalStorage(key, value) {
  let data = JSON.parse(localStorage.getItem(appKey)) || {};
  data = { ...data, [key]: value };
  localStorage.setItem(appKey, JSON.stringify(data));
}
