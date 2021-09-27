const express = require("express")
const { findOrderByDate } = require("../../db/models/orders/findOrderByDate")
const app = (module.exports = express())

//DONE

/**
 * request.body: {
 * date: String (YYYYMMDD)  new Date().toISOString().split('T')[0]
 * }
 */

app.get("/appointments/ondate", (request, response) => {
  let { date } = request.body
  findOrderByDate(date)
    .then((appointments) => response.send(appointments))
    .catch((error) => response.sendStatus(404))
})
