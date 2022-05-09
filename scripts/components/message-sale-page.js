// Este bloque retorna el bloque HTML para mostrar cualquier mensaje
export function message(text, image) {
  return `
    <div class="message__cart">
      <h1 class="message__content">${text}</h1>
    </div>  
  `;
}
