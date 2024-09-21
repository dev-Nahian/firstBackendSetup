const {ApiError} = require('./ApiErrors.js')



const asyncHander = async (fun) =>{
    return async (req,res,next) => {
        try {
            return await fun(req,res,next);
        } catch (error) {
            this.success = success,
            this.data = data,
            this.statusCode = statusCode,
            this.message = message
            ApiError( false, null, 505, "asynchander Error" + error)
        }
    }

    
}


module.exports = {asyncHander};