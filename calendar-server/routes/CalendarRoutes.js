const express = require("express")
const CalendarModel = require("../db/models/CalendarModel")
const { smtp } = require("../email/emailer")
const { requestApprovalEmail } = require("../email/RequestApproval")
const app = express()

app.get("/appointments", async (request, response) => {
  const appointments = await CalendarModel.find({})
  try {
    response.send(appointments)
  } catch (error) {
    response.status(500).send(error)
  }
})

/** req.body should be modelled the following: *
 * {
 *   clientName: string
 *   clientEmail: string
 *   meetingType: string
 *   date: Date (in Unix time)
 * }
 *
 * */

app.post("/appointments", async (request, response) => {
  let {clientName, clientEmail, meetingType, date} = request.body
  const reservation = new CalendarModel({
    clientName,
    clientEmail,
    meetingType,
    date: new Date(date).setFullYear(new Date().getFullYear())
  })

  let email = requestApprovalEmail(reservation)
  
  try {
    await smtp.sendMail(email)
    await reservation.save()
    response.status(200).send()
  } catch (e){
    response.status(500).send(e)
  }

})

app.get("/appointment/:id/confirm", async (request, response) => {
  //TODO SEND EMAIL CONF TO CLIENT
  //TODO SEND GOOGLE CALENDAR INVITE TO CLIENT  
  let { id } = request.params
  try {
    const appointment = await CalendarModel.findById(request.params.id)
    if (!appointment) response.status(404).send("No item found")
    response.status(200).send()
  } catch (error) {
    response.status(500).send(error)
  }
})

app.get("/appointment/:id/decline", async (request, response) => {
  try {
    const food = await CalendarModel.findByIdAndDelete(request.params.id)
    if (!food) response.status(404).send("No item found")
    response.status(200).send()
  } catch (error) {
    response.status(500).send(error)
  }
})

module.exports = app
