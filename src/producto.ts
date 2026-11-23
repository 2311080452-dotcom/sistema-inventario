export class Producto {
  constructor(
    private codigo: string,
    private nombre: string,
    private precio: number,
    private existencia: number
  ) {}

  getCodigo(): string {
    return this.codigo;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPrecio(): number {
    return this.precio;
  }

  getExistencia(): number {
    return this.existencia;
  }

  setExistencia(existencia: number): void {
    this.existencia = existencia;
  }

  mostrarPrecio(): string {
    return `$${this.precio}`;
  }

  mostrarInformacion(): string {
    return [
      `Código: ${this.codigo}`,
      `Nombre: ${this.nombre}`,
      `Precio: ${this.mostrarPrecio()}`,
      `Existencia: ${this.existencia}`,
    ].join("\n");
  }
}
