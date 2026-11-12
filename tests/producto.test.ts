import { describe, it, expect, beforeEach } from "vitest";
import { Producto } from "../src/producto";

describe("Funcionalidad Producto", () => {
  let teclado: Producto;

  beforeEach(() => {
    teclado = new Producto("P001", "Teclado", 350, 10);
  });

  it("CP01 - Crear producto", () => {
    expect(teclado).toBeInstanceOf(Producto);
    expect(teclado.getCodigo()).toBe("P001");
    expect(teclado.getNombre()).toBe("Teclado");
    expect(teclado.getPrecio()).toBe(350);
    expect(teclado.getExistencia()).toBe(10);
  });

  it("CP02 - Mostrar código", () => {
    expect(teclado.getCodigo()).toBe("P001");
    expect(teclado.mostrarInformacion()).toContain("Código: P001");
  });

  it("CP03 - Mostrar nombre", () => {
    expect(teclado.getNombre()).toBe("Teclado");
    expect(teclado.mostrarInformacion()).toContain("Nombre: Teclado");
  });

  it("CP04 - Mostrar precio", () => {
    expect(teclado.getPrecio()).toBe(350);
    expect(teclado.mostrarPrecio()).toBe("$350");
    expect(teclado.mostrarInformacion()).toContain("Precio: $350");
  });

  it("CP05 - Mostrar existencia", () => {
    expect(teclado.getExistencia()).toBe(10);
    expect(teclado.mostrarInformacion()).toContain("Existencia: 10");
  });

  it("CP06 - Mostrar información completa", () => {
    expect(teclado.mostrarInformacion()).toBe(
      "Código: P001\nNombre: Teclado\nPrecio: $350\nExistencia: 10"
    );
  });

  it("CP07 - Crear segundo producto", () => {
    const mouse = new Producto("P002", "Mouse", 180, 5);
    expect(mouse.mostrarInformacion()).toBe(
      "Código: P002\nNombre: Mouse\nPrecio: $180\nExistencia: 5"
    );
    // El primer producto conserva sus datos
    expect(teclado.mostrarInformacion()).toBe(
      "Código: P001\nNombre: Teclado\nPrecio: $350\nExistencia: 10"
    );
  });
});
