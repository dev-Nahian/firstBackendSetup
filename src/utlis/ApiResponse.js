class Apiresponse{
    constructor(success, data, statusCode, message){
        this.success = success,
        this.data = data,
        this.statusCode = statusCode,
        this.message = message
    }
}

module.exports = {Apiresponse}