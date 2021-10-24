// we need to look up how to do updates with sequelize
const {getOrderById} = require("./getOrderById")

const updateOrderStatus = async (id, newStatus) => {
  let order = await getOrderById(id)
  order.order_status = newStatus
  order.save()
  return order
}

module.exports.updateOrderStatus = updateOrderStatus
