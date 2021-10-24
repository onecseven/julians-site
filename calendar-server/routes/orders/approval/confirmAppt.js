const {
  sendConfirmationTemplate,
} = require("../../../features/email/reservation-confirmed-template-client")
const express = require("express")
const app = (module.exports = express())
const {
  updateOrderStatus,
} = require("../../../db/models/orders/updateOrderStatus")
const constants = require("../../../constants")

//      awaiting: "AWAITING_APPROVAL",
// upcoming: "UPCOMING",
// complete: "COMPLETED",
// cancel: "CANCELED"

let isValueInArray = (array, value) => {
  if (array.indexOf(value) > -1) {
    return true
  }
  return false
}

app.put("/appointments/:id/:status", async (request, response) => {
  let { id, status } = request.params
  if (
    isValueInArray(["awaiting", "upcoming", "complete", "cancel"], status) ===
    false
  ) {
    response.status(401).send("Incorrent order status.")
    return
  }
  try {
    const order = await updateOrderStatus(
      id,
      constants.order.order_status[status]
    )
    let { user_id, meeting_type, date } = order
    if (status === "upcoming") {
      sendConfirmationTemplate({
        user_id,
        meeting_type,
        date,
      })
    }
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
