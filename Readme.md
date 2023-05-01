# logPalette

Un paquete de registro para Node.js que proporciona diferentes modos de registro para mensajes de consola.

## Instalación

Para instalar el paquete, utiliza el siguiente comando:

```shell
npm install logpalette
```

## Uso

```javascript
const logger = require('logpalette');

// Ejemplos de uso
logger.log('Esto es un mensaje de información.', 'info');
logger.log('Esto es un mensaje de alerta.', 'alert');
logger.log('Esto es un mensaje de error.', 'error');
logger.log('Esto es un mensaje de éxito.', 'success');
logger.log('Esto es un mensaje de línea.', 'line');
```

## Opciones de Modo

El paquete `logPalette` admite los siguientes modos:

### `info`

Para mensajes de información general.

### `alert`

Para mensajes de advertencia.

### `error`

Para mensajes de error.

### `success`

Para mensajes de éxito.

### `debug`

Para mensajes de depuracion.

### `Warn`

Para mensajes de advertencia

### `critical`

Para mensajes criticos.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre una nueva solicitud de extracción o emite un informe de problema.

## Licencia

Este paquete está bajo la Licencia MIT.````
