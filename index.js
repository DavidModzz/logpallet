const chalk = require('chalk');

function log(message, mode) {
  let logMessage = '';

  switch (mode) {
    case 'info':
      logMessage = chalk.blue('[INFO]') + ' ' + message;
      break;
    case 'alert':
      logMessage = chalk.yellow('[ALERT]') + ' ' + message;
      break;
    case 'error':
      logMessage = chalk.red('[ERROR]') + ' ' + message;
      break;
    case 'success':
      logMessage = chalk.green('[SUCCESS]') + ' ' + message;
      break;
    case 'debug':
      logMessage = chalk.gray('[DEBUG]') + ' ' + message;
      break;
    case 'warn':
      logMessage = chalk.keyword('orange')('[WARN]') + ' ' + message;
      break;
    case 'critical':
      logMessage = chalk.bgRed.white('[CRITICAL]') + ' ' + message;
      break;
    default:
      logMessage = message;
      break;
  }

  console.log(logMessage);
}

module.exports = {
  log
};
