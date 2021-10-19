const { Order } = require("./Orders")
const constants = require("./../../../constants")

function postOrder({ date, timeslot, meeting_type, user_id }) {
  return Order.create({
    date,
    timeslot,
    meeting_type,
    user_id,
    order_status: constants.order.order_status.awaiting,
  })
}

module.exports.postOrder = postOrder
