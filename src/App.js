
const express = require('express')
const app = express()
const chalk = require("chalk")
const Allroute = require('./routes/index.js')
const cors = require('cors')



// all middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(Allroute);



app.listen(process.env.PORT || 3000, ()=>{
    console.log(chalk.bgCyanBright(`successfully connected on port http://localhost:${process.env.PORT}`))
})

  