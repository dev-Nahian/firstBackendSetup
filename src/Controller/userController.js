const {ApiError} = require('../utlis/ApiErrors.js')
const {Apiresponse} = require('../utlis/ApiResponse.js')
const {asyncHander} = require('../utlis/asynchandeler.js')
/**
 * //todo create user controller implement
 * 
 * @param {{ req.body }} req 
 * @param {*} res 
 */




const createUser = async (req, res)=>{
    try {
        const {FirstName, LastName, Email, Telephone, Adress1, City, divition, district, Password} = req.body;
        if(!FirstName){

        }
    } catch (error) {
        console.log(error);
        
    }
}
    
module.exports = {createUser}