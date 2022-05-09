import { BASE_URI } from "../config.js";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  //verificación si se está recibiendo algo en el body, si lo hay, se agraga al headers.
  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }
  // se verifica que verbo se enviará, si hay body, es un POST, y si no, un GET, para PUT, PATCH o DELETE
  // se debe especificar de otra forma.
  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  // se realiza el fetch
  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  //verificar si el erro biene con data o solo status
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(JSON.stringify(data));
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
