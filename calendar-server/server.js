const express = require("express")
const routes = require("./routes/routes.js")
const path = require("path")
var cors = require("cors")

let publicPath = path.join(__dirname, "../client/public")
let distPath = path.join(__dirname, "../client/dist")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/", express.static(distPath))

for (let route in routes) {
  app.use(routes[route])
}

app.use("*", function (req, res) {
  res.sendFile(path.resolve(distPath, "index.html"))
})

const server = app.listen(3000, () => {
  console.log("Server is running...")
})

server.keepAliveTimeout = 61 * 1000
