const confirmAppt = require("./orders/approval/confirmAppt.js")
const declineAppt = require("./orders/approval/declineAppt.js")
const getApptsOnDate = require("./orders/getOrdersByDate.js")
const postOrder = require("./orders/postOrder.js")
const updateOrderStatus = require("./orders/updateOrderStatus.js")
const updateUserApproval = require("./users/approval/updateUserApproval.js")
const login = require("./users/login.js")
const postUser = require("./users/postUser.js")
const getAllOrdersByUserId = require("./orders/getAllOrdersByID.js")
const createcheckoutsession = require("./stripe/createcheckoutsession")
const publicKeys = require("./stripe/public-keys")

module.exports = {
    confirmAppt,
    declineAppt,
    getApptsOnDate,
    postOrder,
    postUser,
    login,
    updateOrderStatus,
    updateUserApproval,
    getAllOrdersByUserId,
    publicKeys,
    createcheckoutsession
}
