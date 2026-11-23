# Historial de versiones

Todas las versiones del Sistema de Inventario se identifican con el esquema `vMAYOR.MENOR.PARCHE`.

## v1.1.0 - 2026-11-23

- Nueva configuración obligatoria: nombre del almacén mediante la variable de entorno `INVENTARIO_ALMACEN`.
- El programa muestra la versión y el almacén al iniciar, y consulta un producto por su código.
- Pruebas CP08 y CP09 para la configuración (9 de 9 pruebas correctas).

## v1.0.2 - 2026-11-23

- Corrección del error en `getNombre()` detectado durante las pruebas (devolvía el nombre en mayúsculas).
- Validación satisfactoria de la funcionalidad Producto: 7 de 7 pruebas correctas.
- Se agrega este archivo `CHANGELOG.md` al repositorio y al paquete de distribución.

## v1.0.1 - 2026-11-23 (no publicada)

- Versión con un error intencional en `getNombre()`.
- Las pruebas CP01 y CP03 fallaron durante el proceso de liberación.
- El workflow se detuvo antes de crear el paquete; la versión **no se publicó**.

## v1.0.0 - 2026-11-23

- Primera versión del Sistema de Inventario.
- Incorporación de la funcionalidad Producto (código, nombre, precio y existencia).
- Implementación de pruebas automatizadas con Vitest (CP01–CP07).
- Workflows de GitHub Actions para construcción, pruebas y liberación.
