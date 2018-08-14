const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hello Node JS`);
logger.info(`Node JS is great`);
logger.warn(`Warning Warning, I think we have a Warning`);
logger.error(`Mayday Mayday, we have an error, repeat.. we have an error`);