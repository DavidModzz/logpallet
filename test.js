const logger = require('./index');

logger.log('Esto es un mensaje de información.', 'info');
logger.log('Esto es un mensaje de alerta.', 'alert');
logger.log('Esto es un mensaje de error.', 'error');
logger.log('Esto es un mensaje de éxito.', 'success');
logger.log('Esto es un mensaje de depuración.', 'debug');
logger.log('Esto es un mensaje de advertencia.', 'warn');
logger.log('Esto es un mensaje dcritico.', 'critical');
logger.log('Esto es un mensaje sin modo específico.');