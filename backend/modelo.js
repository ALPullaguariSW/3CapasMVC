class Modelo {
  constructor() {
    this.articulos = [];
  }

  agregarArticulo(articulo) {
    this.articulos.push(articulo);
  }

  eliminarTodosArticulos() {
    this.articulos = [];
  }

  obtenerArticulos() {
    return this.articulos;
  }

  obtenerTotalCompra() {
    return this.articulos.reduce(
      (total, articulo) => total + articulo.precio,
      0
    );
  }
}
