import { describe, it, expect } from "vitest";
import { leerConfiguracion } from "../src/config";

describe("Configuración del sistema", () => {
  it("CP08 - Leer el nombre del almacén", () => {
    expect(leerConfiguracion({ INVENTARIO_ALMACEN: "Almacén Central" })).toEqual({
      almacen: "Almacén Central",
    });
  });

  it("CP09 - Rechazar configuración sin almacén", () => {
    expect(() => leerConfiguracion({})).toThrow("INVENTARIO_ALMACEN");
  });
});
