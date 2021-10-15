const { bookAppointment } = require("../../../features/calendar/calendar-exports");
const { smtp } = require("../../../features/email/emailer");
const { createConfirmationTemplate } = require("../../../features/email/reservation-confirmed-template-client");
const express = require("express")
const app = module.exports = express()

//WAITING Switch to DB waiting for email

app.get("/appointments/:id/confirm", async (request, response) => {
  let { id } = request.params;
  try {
    const appointment = await CalendarModel.findById(id);
    if (!appointment)
      response.status(404).send("No item found");
    const { clientEmail, clientFirstName, clientLastName, meetingType, date } = appointment;
    let confirmationEmail = createConfirmationTemplate({
      clientEmail,
      clientFirstName,
      clientLastName,
      meetingType,
      date,
    });
    smtp.sendMail(confirmationEmail);
    bookAppointment({ meetingType, clientEmail, date });
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
