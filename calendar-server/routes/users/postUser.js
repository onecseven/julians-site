const express = require("express")
const app = (module.exports = express())
const { createUser } = require("../../db/models/users/createUser")

app.post("/user/create", function (request, response) {
  let { email, name, password } = request.body
  createUser({
    email,
    name,
    password,
  })
    .then(({ dataValues }) => {
      if (dataValues) {
        response.send(dataValues)
      }
    })
    .catch((err) => {
      console.log(err)
      if (err.original) {
        response.send({ error: err.original.code })
      } else if (err.errors) {
        response.send({ error: "BAD_EMAIL" })
      }
    })
})
