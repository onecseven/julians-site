const confirmAppt = require("./orders/approval/confirmAppt.js")
const declineAppt = require("./orders/approval/declineAppt.js")
const getApptsOnDate = require("./orders/getOrdersByDate.js")
const postOrder = require("./orders/postOrder.js")
const updateOrderStatus = require("./orders/updateOrderStatus.js")
const login = require("./users/login.js")
const postUser = require("./users/postUser.js")

module.exports = {
  appts: {
    confirmAppt,
    declineAppt,
    getApptsOnDate,
    postOrder,
    postUser,
    login,
    updateOrderStatus
  },
}
