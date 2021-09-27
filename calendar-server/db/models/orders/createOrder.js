const { Order } = require("./Orders")
/**
 * 
 * @param {object} orderData
 * @param {Date} orderData.date YYYY/MM/DD
 * @param {number} orderData.timeslot 
 * @param {string} orderData.meeting_type
 * @param {number} orderData.user_id
 * @returns {promise} Promise
 *  */
function createOrder ({date, timeslot, meeting_type, user_id}) {
  return Order.sync().then(function () {
    return Order.create({
      date,
      timeslot,
      meeting_type,
      user_id
    })
  })
}

module.exports.createOrder = createOrder