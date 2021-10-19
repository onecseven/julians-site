const express = require("express")
const { getAllOrdersByUserId } = require("../../db/models/orders/getAllOrdersByUserId")
const app = (module.exports = express())


app.get("/appointments/:id", (request, response) => {
  let { id } = request.params;
  getAllOrdersByUserId(id)
    .catch((error) => response.sendStatus(404))
    .then(( data ) => response.send(data))
})
