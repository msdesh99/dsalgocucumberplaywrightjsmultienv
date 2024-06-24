const { fixtures } = require('../../hooks/Fixtures')

exports.writeLogIntoLogger = class writeLogIntoLogger{

    constructor(){}

    writeLog(level,message){
        if(level==`info`)
            fixtures.logger.info()
    }
}