const { sendApprovalEmail } = require("../../features/email/RequestApproval")
const express = require("express")
const { postOrder } = require("../../db/models/orders/postOrder")
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

//TODO handle error

app.post("/appointments", async (request, response) => {
  let { date, timeslot, meetingType, user_id } = request.body
  postOrder({
    date,
    timeslot,
    meeting_type: meetingType,
    user_id,
  })
    .then(({ order_id }) => {
      sendApprovalEmail(user_id, date, meetingType, timeslot, order_id)
        .then((e) => response.send({ order_id }))
        .catch((e) => response.send({ error: "EMAIL_ERROR" }))
      return null
    })
    .catch((e) => response.send({ error: "DB_ERROR" }))
})
