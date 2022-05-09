// Este bloque de código nos permite cargar una página en el index.html o recargarla
// para ello tiene la función load y la función reload,
// lo único que hace es insertar todo el bloque html en el div con id = root que esta en el index HTML
const DOMHandler = {
  module: null,
  parent: null,
  load(module, parent) {
    this.module = module;
    this.parent = parent;

    parent.innerHTML = module; //toString()
    module.addListeners();
  },
  reload() {
    this.load(this.module, this.parent);
  },
};

export default DOMHandler;
