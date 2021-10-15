const express = require("express")
const {
  updateOrderStatus,
} = require("../../db/models/orders/updateOrderStatus")
const app = (module.exports = express())

app.put("/appointments/status", (request, response) => {
  let { id, status } = request.body
  updateOrderStatus(id, status)
    .then(({ dataValues }) => response.send(dataValues))
    .catch((err) => response.sendStatus(400))
})
