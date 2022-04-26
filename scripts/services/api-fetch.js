import { BASE_URI } from "../config.js";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  debugger;
  console.log(
    "%c 🥧: BASE_URI + endpoint ",
    "font-size:16px;background-color:#81c798;color:white;",
    BASE_URI + endpoint
  );
  console.log(
    "%c 🇫🇮: config ",
    "font-size:16px;background-color:#9d9181;color:white;",
    config
  );
  const response = await fetch(BASE_URI + endpoint, config);

  let data;
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
