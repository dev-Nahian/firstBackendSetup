const userController = async (req, res)=>{
    try {
        res.send("everyThing Fine")
    } catch (error) {
        console.log(error);
        
    }
}
    
module.exports = {userController}