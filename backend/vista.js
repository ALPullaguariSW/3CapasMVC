class Vista {
  constructor() {
    this.tabla = document.getElementById("tabla-articulos");
    this.totalCompraElemento = document.getElementById("totalCompra");
  }

  mostrarArticulos(articulos) {
    this.tabla.innerHTML = "";
    articulos.forEach((articulo) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
          <td>${articulo.nombre}</td>
          <td>$${articulo.precio.toFixed(2)}</td>
          
        `;
      this.tabla.appendChild(fila);
    });
  }

  mostrarTotalCompra(total) {
    this.totalCompraElemento.textContent = `$${total.toFixed(2)}`;
  }
}
