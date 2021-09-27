const { Order } = require("./Orders")

/**
 *
 * @param {date} date 
 * returns promise
 *  */

function findOrderByDate(date) {
  return Order.sync().then(function () {
    return Order.findAll({
      where: {
        date
      },
    })
  })
}

module.exports.findOrderByDate = findOrderByDate