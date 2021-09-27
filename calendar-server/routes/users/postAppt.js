const { smtp } = require("../../email/emailer")
const { requestApprovalEmail } = require("../../email/RequestApproval")
const express = require("express")
const { createOrder } = require("../../db/models/orders/createOrder")
const findUserById = require("../../db/models/users/findUser")
const app = (module.exports = express())

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

//DONE

app.post("/appointments", async (request, response) => {
  let { date, timeslot, meetingType, user_id } = request.body
  const { order_id } = await createOrder({
    date,
    timeslot,
    meeting_type: meetingType,
    user_id,
  })
  let { name, email } = findUserById(user_id)
  let emailTemplate = requestApprovalEmail({
    clientEmail: email,
    clientName: name,
    date: date,
    meetingType,
    _id: order_id,
  })
  try {
    await smtp.sendMail(emailTemplate)
    response.status(200).send()
  } catch (e) {
    response.status(500).send(e)
  }
})
