const {
  bookAppointment,
} = require("../../../features/calendar/calendar-exports")
const { smtp } = require("../../../features/email/emailer")
const {
  createConfirmationTemplate,
} = require("../../../features/email/reservation-confirmed-template-client")
const express = require("express")
const app = (module.exports = express())
const { getOrderById } = require("../../../db/models/orders/getOrderById")

app.get("/appointments/:id/confirm", async (request, response) => {
  let { id } = request.params
  try {
    const appointment = await getOrderById(id)
    if (!appointment) {
      response.status(404).send("No item found")
      return
    }
    const { clientEmail, clientFirstName, clientLastName, meetingType, date } =
      appointment.dataValues
    let confirmationEmail = createConfirmationTemplate({
      clientEmail,
      clientFirstName,
      clientLastName,
      meetingType,
      date,
    })
    smtp.sendMail(confirmationEmail)
    bookAppointment({ meetingType, clientEmail, date })
    response.status(200).send()
  } catch (error) {
    response.status(500).send(error)
  }
})
