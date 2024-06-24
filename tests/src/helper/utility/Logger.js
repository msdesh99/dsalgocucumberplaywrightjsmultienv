const winston = require('winston')

    const customFormat = winston.format.combine(
        winston.format.align(),
        winston.format.timestamp({format:'MM:DD:YY HH:mm:ss'}),
        winston.format.printf(info=>`${info.level}:${[info.timestamp]}:${info.message}`)
    )   
exports.options = function options(scenarioName) { 
    var filePath = `test-results/logs/${process.env.NODE_ENV}/${process.env.BROWSER}/${scenarioName}`
    filePath = filePath.replaceAll('"','')
    return{
        transports: [ 
            new winston.transports.Console({level:'debug', format: customFormat, colorize:true}),
            new winston.transports.File({
                level: 'debug',
                filename:`${filePath}/debug-log.log`,
                colorize:true,
                format: customFormat 
            }),
        new winston.transports.Console({level:'info', format: customFormat, colorize:true}),
        new winston.transports.File({
               level: 'info',
               
               filename:`${filePath}/${winston.level}-log.log`,
               colorize: true,
               format:customFormat
            }),
        new winston.transports.Console({level:'error',format:customFormat}),
        new winston.transports.File({
              level:'error',
              filename:`${filePath}/error-log.log`,
              colorize:true,
              format: customFormat
        })
        ]  
}
}