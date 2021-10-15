const express = require("express")
const {
  updateUserApproval,
} = require("../../../db/models/users/updateUserApproval")
const app = (module.exports = express())

app.put("/user/:id/approve", async (request, response) => {
  let { id } = request.params
  try {
    let updating = await updateUserApproval(id)
    response.sendStatus(200)
  } catch (e) {
    response.sendStatus(400)
  }
})
