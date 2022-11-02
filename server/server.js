const express = require('express')
require("dotenv").config()

const app = express()

app.use(express.json())


const { home } = require('./controllers/pageCtrl')

app.get("/", home)




const { PORT } = process.env
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
