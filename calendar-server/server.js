const express = require("express")
const mongoose = require("mongoose")
const CalendarRouter = require("./db/routes/CalendarRoutes.js");
const {user, password} = require("./auth/db")

const app = express()
app.use(express.json())


mongoose.connect(
  `mongodb+srv://${user}:${password}@cluster0.sutow.mongodb.net/calendar?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
)

app.use(CalendarRouter);

app.listen(3000, () => {
  console.log("Server is running...")
})
