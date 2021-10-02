const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes.js")
const path = require("path")
let publicPath = path.join(__dirname, "../client/public")
let distPath = path.join(__dirname, "../client/dist")

const { appts } = routes
const app = express()
app.use(express.json())

app.use(express.static(publicPath))
app.use('/', express.static(distPath))


for (let route in appts) {
  app.use(appts[route])
}

const server = app.listen(3000, () => {
  console.log("Server is running...")
})

server.keepAliveTimeout = 61 * 1000
