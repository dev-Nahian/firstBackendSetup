const express = require('express')
const {Router} = express
const _ = Router()
const {Apiresponse} = require('../../utlis/ApiResponse.js')


_.route("/getname").get((req, res)=>{
    res.status(200).json( new Apiresponse(true, "nahianThikAsey", 200, false, "its oke you can do one Day" ))
    
})




module.exports = _