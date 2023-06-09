const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const snacksController = require("./controllers/snacksController");
app.use("/snacks", snacksController);

app.get('/', (_, res) => {
    res.status(200).send('welcome to snackalog')
})

app.get('*', (_, res) => {
    res.status(404).send('Page not Found')
})

module.exports = app
