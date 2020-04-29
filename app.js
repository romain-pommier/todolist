const express = require('express')
const morgan = require('morgan')
const index = require("./routes");
const path = require("path");

require('./database')

const app = express()
const port = process.env.PORT || 3000
const routing = require('./routes')

app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs")

app.use(morgan("short"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(index)

app.listen(port)