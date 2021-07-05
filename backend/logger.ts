import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json(),
        winston.format.timestamp(),
        winston.format.printf(({level, message, timestamp, stack}) => {
            return stack ? `${timestamp} ${level}: ${stack}` : `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'info.log', level: 'info'}),
    ],
});

/* if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
} */

export default logger;