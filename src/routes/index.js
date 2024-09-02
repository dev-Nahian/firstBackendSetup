
const express = require('express');
const {Router} = express;
const _ = Router()
const authRoute = require("./api/auth.Apiroute.js")
const {ApiError} = require('../utlis/ApiErrors.js')


console.log(process.env.BASE_URL);


_.use(process.env.BASE_URL, authRoute)

_.use(process.env, ((req, res)=>{
    req.statusCode(400).json( new ApiError(false, null , 404, "page not found" ))

}))



module.exports = _ ;