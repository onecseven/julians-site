const {
  sendConfirmationTemplate,
} = require("../../../features/email/reservation-confirmed-template-client")
const express = require("express")
const app = (module.exports = express())
const {
  updateOrderStatus,
} = require("../../../db/models/orders/updateOrderStatus")
const constants = require("../../../constants")

app.get("/appointments/:id/confirm", async (request, response) => {
  let { id } = request.params
  try {
    const order = await updateOrderStatus(
      id,
      constants.order.order_status.upcoming
    )
    let { user_id, meeting_type, date } = order
    sendConfirmationTemplate({
      user_id,
      meeting_type,
      date,
    })
    response.status(200).send()
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
})
// {
//   order_id: 31,
//   date: '2021-10-19',
//   timeslot: 4,
//   meeting_type: 'CONSULT',
//   user_id: 20,
//   order_status: 'AWAITING_APPROVAL'
// }
