import { Producto } from "./producto";

export class Inventario {
  private productos: Producto[] = [];

  agregar(producto: Producto): void {
    this.productos.push(producto);
  }

  buscar(codigo: string): Producto | undefined {
    return this.productos.find((p) => p.getCodigo() === codigo);
  }

  actualizarExistencia(codigo: string, existencia: number): void {
    const producto = this.buscar(codigo);
    if (!producto) {
      throw new Error(`Producto ${codigo} no encontrado`);
    }
    producto.setExistencia(existencia);
  }

  listar(): Producto[] {
    return [...this.productos];
  }

  valorTotal(): number {
    return this.productos.reduce((total, p) => total + p.getExistencia() * p.getPrecio(), 0);
  }
}
