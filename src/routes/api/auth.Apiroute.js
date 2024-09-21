const express = require('express')
const {Router} = express
const _ = Router()
const {Apiresponse} = require('../../utlis/ApiResponse.js')
const {createUser} = require('../../Controller/userController.js')


_.route("/registration").post(createUser)




module.exports = _