import { Inventario } from "./inventario";

const inventario = new Inventario();
inventario.agregar({ id: 1, nombre: "Teclado", cantidad: 10, precio: 350 });
inventario.agregar({ id: 2, nombre: "Mouse", cantidad: 25, precio: 150 });
inventario.actualizarCantidad(1, 8);

console.log("Productos:", inventario.listar());
console.log("Valor total del inventario: $" + inventario.valorTotal(;
