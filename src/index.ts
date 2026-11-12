import { Inventario } from "./inventario";
import { Producto } from "./producto";

const inventario = new Inventario();
inventario.agregar(new Producto("P001", "Teclado", 350, 10));
inventario.agregar(new Producto("P002", "Mouse", 180, 5));

for (const producto of inventario.listar()) {
  console.log(producto.mostrarInformacion());
  console.log("---");
}
console.log("Valor total del inventario: $" + inventario.valorTotal());
