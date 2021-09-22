const express = require("express")
const mongoose = require("mongoose")
const CalendarRouter = require("./routes/CalendarRoutes.js");

const app = express()
app.use(express.json())

app.use(CalendarRouter);

const server = app.listen(3000, () => {
  console.log("Server is running...")
})

server.keepAliveTimeout = 61 * 1000;

