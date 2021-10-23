const { Order } = require("./Orders")

const destroyOrderById = (id) => {
  return Order.destroy({
    where: {
      order_id: id,
    },
  }).then(
    function (rowDeleted) {
      if (rowDeleted === 1) {
        return
      } else {
        throw new Error("AAAH")
      }
    },
    function (err) {
      console.log(err)
    }
  )
}

module.exports.destroyOrderById = destroyOrderById
