const express = require("express");
const { Order } = require("../../db/models/Orders");
const app = module.exports = express()

app.get("/test/:order_id", async (request, response) => {
  let { order_id } = request.params;
  try {
    const appointment = await Order.findOne({
      where: {
        order_id
      }
    });
    response.send(appointment)
  } catch (e) {
    console.error(e);
    response.error(404)
  }
});
