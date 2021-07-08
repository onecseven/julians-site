const express = require("express")
const CalendarModel = require("../models/CalendarModel")
const app = express()

app.get("/appointments", async (request, response) => {
  const appointments = await CalendarModel.find({})

  try {
    response.send(appointments)
  } catch (error) {
    response.status(500).send(error)
  }
})

app.post("/reservation", async (request, response) => {
  const food = new CalendarModel(request.body)

  try {
    await food.save()
    response.send(food)
  } catch (error) {
    response.status(500).send(error)
  }
})

app.delete("/appointment/:id", async (request, response) => {
  try {
    const food = await CalendarModel.findByIdAndDelete(request.params.id)

    if (!food) response.status(404).send("No item found")
    response.status(200).send()
  } catch (error) {
    response.status(500).send(error)
  }
})

module.exports = app
