# ChallengeAngular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Decisiones técnicas:

- arquitectura de CSS: inverted triangle, para modularizar estilos en distintas capas.
- signals: acorde con la nueva arquitectura de angular 18, se utiliza signals para optimización de la detección de cambios.
- implementación de angular material: para uso de dialogs, iconos, spinners, y sliders.
- formularios reactivos: se utiliza en los filtros, en el input de busqueda de productos.
- se utiliza LocalStorage para persistir carrito durante una compra.
- la "thankyou page" genera un código random simulando la respuesta de una api con codigo de retiro de un pedido
