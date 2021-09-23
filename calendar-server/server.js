const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes.js");
const { appts } = routes
const app = express()
app.use(express.json())

for (let route in appts) {
  app.use(appts[route])
}

const server = app.listen(3000, () => {
  console.log("Server is running...")
})

server.keepAliveTimeout = 61 * 1000;

