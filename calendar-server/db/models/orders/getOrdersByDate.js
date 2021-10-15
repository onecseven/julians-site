const { Order } = require("./Orders")

/**
 *
 * @param {date} date 
 * returns promise
 *  */

function getOrdersByDate(date) {
  return Order.sync().then(function () {
    return Order.findAll({
      where: {
        date
      },
    })
  })
}

module.exports.getOrdersByDate = getOrdersByDate