
require('dotenv').config()
const {dbconnect} = require('./DatabaseConfiguration/databaseConfig.js')
const app = require('./App.js')
// database connection method
dbconnect();