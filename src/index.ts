import { leerConfiguracion } from "./config";
import { Inventario } from "./inventario";
import { Producto } from "./producto";

const VERSION = "1.1.0";

try {
  const config = leerConfiguracion();
  console.log(`Sistema de Inventario v${VERSION} - Almacén: ${config.almacen}`);
  console.log("===");
} catch (error) {
  console.error(`Error de configuración: ${(error as Error).message}`);
  process.exit(1);
}

const inventario = new Inventario();
inventario.agregar(new Producto("P001", "Teclado", 350, 10));
inventario.agregar(new Producto("P002", "Mouse", 180, 5));

for (const producto of inventario.listar()) {
  console.log(producto.mostrarInformacion());
  console.log("---");
}

const buscado = inventario.buscar("P002");
console.log("Consulta del producto P002: " + (buscado ? buscado.getNombre() : "no encontrado"));
console.log("Valor total del inventario: $" + inventario.valorTotal());
