# sistema-inventario

Sistema de inventarios en TypeScript (Node.js).

## Comandos

```bash
npm install      # instala dependencias
npm run build    # compila TypeScript a dist/
npm start        # ejecuta el sistema
```

La construcción se verifica automáticamente con GitHub Actions en cada push a `main`
(ver `.github/workflows/build.yml`).

## Configuración (desde v1.1.0)

Antes de ejecutar el sistema se debe indicar el nombre del almacén:

```bash
export INVENTARIO_ALMACEN="Almacén Central"
npm start
```
