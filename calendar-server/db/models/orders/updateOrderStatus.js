// we need to look up how to do updates with sequelize
const {getOrderById} = require("./getOrderById")

const updateOrderStatus = async (id, newStatus) => {
  let order = await getOrderById(id)
  order.order_status = newStatus
  return order.save()
}

module.exports.updateOrderStatus = updateOrderStatus
