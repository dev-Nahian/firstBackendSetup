

const express = require('express')
const app = express()
const chalk = require("chalk")




app.get('/', function (req, res) {
  res.send('Hello Nahian')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(chalk.bgCyanBright(`successfully connected on port http://localhost:${process.env.PORT}`))
})

