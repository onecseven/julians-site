const { Order } = require("./Orders")

/**
 *
 * @param {number} id
 * returns promise
 *  */

function getAllOrdersByUserId(id) {
  return Order.sync().then(function () {
    return Order.findAll({
      where: {
        user_id: id
      },
    })
  })
}

module.exports.getAllOrdersByUserId = getAllOrdersByUserId