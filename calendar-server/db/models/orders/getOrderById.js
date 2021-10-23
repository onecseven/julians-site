const findUserById = require("../users/findUser")
const { destroyOrderById } = require("./destroyOrderById")
const { Order } = require("./Orders")

/**
 *
 * @param {number} id
 * returns promise
 *  */

function getOrderById(id) {
  return Order.sync().then(function () {
    return Order.findOne({
      where: {
        order_id: id,
      },
    })
  })
}
module.exports.getOrderById = getOrderById
