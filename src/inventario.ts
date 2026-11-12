import { Producto } from "./producto";

export class Inventario {
  private productos: Producto[] = [];

  agregar(producto: Producto): void {
    this.productos.push(producto);
  }

  buscar(id: number): Producto | undefined {
    return this.productos.find((p) => p.id === id);
  }

  actualizarCantidad(id: number, cantidad: number): void {
    const producto = this.buscar(id);
    if (!producto) {
      throw new Error(`Producto ${id} no encontrado`);
    }
    producto.cantidad = cantidad;
  }

  listar(): Producto[] {
    return [...this.productos];
  }

  valorTotal(): number {
    return this.productos.reduce((total, p) => total + p.cantidad * p.precio, 0);
  }
}
