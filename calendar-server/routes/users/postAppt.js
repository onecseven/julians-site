const { smtp } = require("../../email/emailer");
const { requestApprovalEmail } = require("../../email/RequestApproval");
const { meetingTypeGenerator } = require("../../utils/meetingTypes");
const express = require("express")
const app = module.exports = express()


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
  let {
    clientFirstName, clientLastName, clientEmail, meetingType, meetingDuration, date,
  } = request.body;
  let decoratedMeetingType = meetingTypeGenerator({
    name: meetingType,
    duration: meetingDuration,
  });
  const reservation = new CalendarModel({
    clientFirstName,
    clientLastName,
    clientEmail,
    meetingType: decoratedMeetingType,
    date: new Date(date),
  });

  let email = requestApprovalEmail(reservation);

  try {
    await smtp.sendMail(email);
    await reservation.save();
    response.status(200).send();
  } catch (e) {
    response.status(500).send(e);
  }
});
