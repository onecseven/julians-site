const findUserById = require("../users/findUser")
const { Order } = require("./Orders")

/**
 *
 * @param {number} id 
 * returns promise
 *  */

function findOrderById(id) {
  return Order.sync().then(function () {
    return Order.findOne({
      where: {
        id
      },
    })
  })
}

module.exports.findOrderById = findOrderById