import {format, createLogger, transports, log, info, Logger } from "winston"

//Format console.log
const consoleFormat = format.printf(({ level, message
}) => {
    const loglevel = format.colorize().colorize(level, `${level.toUpperCase()}`)
    return `[${loglevel}]: ${message}`
})

//Logger
let logger = createLogger({
    transports: [
        new transports.Console({
            level: process.env.LOG_LEVEL,
            handleExceptions: true,
            format: format.combine(format.timestamp(), consoleFormat)
        })
    ]
})

//Print any unknown error
logger.on("error", error => {
    console.log("Unknwon error in Winston logger");
    console.log(error.message);
})
export default logger