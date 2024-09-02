

const express = require('express')
const app = express()
const chalk = require("chalk")
const Allroute = require('./routes/index.js')


app.use(Allroute)


app.listen(process.env.PORT || 3000, ()=>{
    console.log(chalk.bgCyanBright(`successfully connected on port http://localhost:${process.env.PORT}`))
})

  