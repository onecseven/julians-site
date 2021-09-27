const { Order } = require("./Orders")

/**
 *
 * @param {number} id
 * returns promise
 *  */

function findAllOrdersByUserId(id) {
  return Order.sync().then(function () {
    return Order.findAll({
      where: {
        user_id: id
      },
    })
  })
}

module.exports.findAllOrdersByUserId = findAllOrdersByUserId