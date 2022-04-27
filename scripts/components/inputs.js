export function input({
  label,
  id,
  name,
  placeholder = "",
  type,
  required = false,
  value = false,
  icon,
  error,
  classInput,
}) {
  return `
  <div class="input">
    ${
      label
        ? `<label for="${id}" class="content-xs overline">${label}</label>`
        : ""
    }
    <div class="input__container">
      ${
        icon
          ? `<img
          src="${icon}"
          alt=""
          class="input__icon"
        />`
          : ""
      }
      <input
        class="${classInput ? classInput : ""}"
        type="${type ? type : "text"}"
        placeholder="${placeholder}"
        class="input__content"
        id="${id}"
        name="${name ? name : id}"
        ${value ? `value="${value}"` : ""}
        ${required ? "required" : ""}
      />
    </div>
    ${error ? `<span class="input__error-message">${error}</span>` : ""}
  </div>
  `;
}
