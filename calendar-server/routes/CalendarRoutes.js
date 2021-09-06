const express = require("express")
const { bookAppointment } = require("../calendar/calendar-exports")
const CalendarModel = require("../db/models/CalendarModel")
const { smtp } = require("../email/emailer")
const { requestApprovalEmail } = require("../email/RequestApproval")
const { createConfirmationTemplate } = require("../email/reservation-confirmed-template-client")
const {meetingTypeGenerator} = require("../utils/meetingTypes")
const app = express()
/*
TODO:
- MAKE A ROUTE FOR /appointments/ondate
- send the date through request.body
- sends back the availability for the chosen day
*/
app.get("/appointments", async (request, response) => {
  const appointments = await CalendarModel.find({})
  try {
    response.send(appointments)
  } catch (error) {
    response.status(500).send(error)
  }
})


/** Accepts a req.body formatted this way:
 * {
 * clientFirstName: string
 * clientLastName: string
 * clientEmail: string 
 * meetingType: "ENERGY" || "YOGA"
 * meetingDuration: number (should be minutes) 30 || 50 || 60
 * date: Date.toISOString
 * }
  */
app.post("/appointments", async (request, response) => {
  let {clientFirstName, clientLastName, clientEmail, meetingType, meetingDuration, date} = request.body
  let decoratedMeetingType = meetingTypeGenerator({name: meetingType, duration: meetingDuration})
  const reservation = new CalendarModel({
    clientFirstName,
    clientLastName,
    clientEmail,
    meetingType: decoratedMeetingType,
    date: new Date(date)
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

app.get("/test/:id", async (request, response) => {
  let { id } = request.params
  try {
    const appointment = await CalendarModel.findById(request.params.id)
    console.log(appointment.meetingType)
  } catch (e) {
    console.error(e)
    console.log('wtf')
  }
})

app.get("/appointments/:id/confirm", async (request, response) => {
  let { id } = request.params
  try {
    const appointment = await CalendarModel.findById(id)
    if (!appointment) response.status(404).send("No item found")
    const {clientEmail, clientFirstName, clientLastName, meetingType, date} = appointment
    let confirmationEmail = createConfirmationTemplate({
      clientEmail,
      clientFirstName,
      clientLastName,
      meetingType,
      date
    })
    smtp.sendMail(confirmationEmail)
    bookAppointment({meetingType, clientEmail, date})
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
