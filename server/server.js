const express = require('express')
require("dotenv").config()

const app = express()


app.use(express.json())



const { home, image } = require('./controllers/pageCtrl')

app.get("/", home)
app.get("/image", image)



const { PORT } = process.env
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
