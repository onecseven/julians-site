const express = require("express")
const app = (module.exports = express())
const {
  findAllOrdersByUserId,
} = require("../../db/models/orders/findAllOrdersByUserId")

//DONE This is working

app.get("/test/:user_id", async (request, response) => {
  let { user_id } = request.params
  try {
    const appointment = await findAllOrdersByUserId(user_id)
    response.send(appointment)
  } catch (e) {
    response.sendStatus(404)
  }
})
