const { Order } = require("../../db/models/Orders")
const express = require("express")
const app = module.exports = express()


/**
 * request.body: {
 * date: String (YYYYMMDD)  new Date().toISOString().split('T')[0]
 * }
 */

app.get("/appointments/ondate", (request, response) => {
  let { date } = request.body
  Order.findAll({
    where: {
      date,
    },
  })
    .then((appointments) => response.send(appointments))
    .catch((error) => console.log(error))
})
