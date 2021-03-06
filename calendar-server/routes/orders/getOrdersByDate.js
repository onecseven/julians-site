const express = require("express")
const { getOrdersByDate } = require("../../db/models/orders/getOrdersByDate")
const app = (module.exports = express())

//DONE

/**
 * request.body: {
 * date: String (YYYYMMDD)  new Date().toISOString().split('T')[0]
 * }
 */

const timeslotFormatter = (rawData) => {
  console.log(rawData)
  let result = []
  for (let datum of rawData) {
    result.push(datum.timeslot)
  }
  return result
}

app.post("/appointments/ondate", (request, response) => {
  let { date } = request.body
  getOrdersByDate(date)
    .catch((error) => response.sendStatus(404))
    .then(( data ) => response.send({ timeslots: timeslotFormatter(data) }))
})
