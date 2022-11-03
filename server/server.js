const express = require('express')
require("dotenv").config()

const app = express()


app.use(express.json())


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const { home } = require('./controllers/pageCtrl')

app.get("/", home)
app.get("/about", about)



const { PORT } = process.env
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
