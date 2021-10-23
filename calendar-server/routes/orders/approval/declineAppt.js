const express = require("express")
const app = (module.exports = express())
const {
  destroyOrderById,
} = require("../../../db/models/orders/destroyOrderById")

app.get("/appointments/:id/decline", async (request, response) => {
  try {
    const food = await destroyOrderById(request.params.id)
    response.status(200).send("all good")
  } catch (error) {
    response.status(500).send(error)
  }
})
