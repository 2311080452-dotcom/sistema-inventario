export interface Configuracion {
  almacen: string;
}

/**
 * Lee la configuración del sistema desde las variables de entorno.
 * Desde la versión 1.1.0 es obligatorio indicar el nombre del almacén
 * mediante la variable INVENTARIO_ALMACEN.
 */
export function leerConfiguracion(env: Record<string, string | undefined> = process.env): Configuracion {
  const almacen = env.INVENTARIO_ALMACEN?.trim();
  if (!almacen) {
    throw new Error(
      "Falta la variable de entorno INVENTARIO_ALMACEN (nombre del almacén)."
    );
  }
  return { almacen };
}
