'use strict';

const winston = require('winston');

const fileLogger = new winston.Logger({
    exitOnError: false
});

const winstonLogger = new winston.Logger({
    exitOnError: false
});
winston.emitErrs = true;

let consoleConfig = ({
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    timestamp: true,
    stderrLevels: ['error']
});


// TODO: Remove info formatting on logger
let fileConfig = ({
    level: 'info',    
    filename: 'messages.log',
    handleExceptions: false,
    json: false,    
    timestamp: false    
})

winstonLogger.add(winston.transports.Console, consoleConfig);
fileLogger.add(winston.transports.File, fileConfig);

module.exports = (fileName) => {
    let logger = {
        levels: ['error', 'warn', 'info', 'debug', 'keep'],
        to_file: (text) => {
            fileLogger.info(text);
        },
        error: (text) => {
            winstonLogger.error(fileName + ': ' + text);
        },
        warn: (text) => {
            winstonLogger.warn(fileName + ': ' + text);
        },
        info: (text) => {
            winstonLogger.info(fileName + ': ' + text);
        },
        debug: (text) => {
            winstonLogger.debug(fileName + ': ' + text);
        }
    };

    return logger;
};
