const express = require("express")
const app = (module.exports = express())
const bcrypt = require("bcrypt")
const { findUserByEmail } = require("../../db/models/users/findUser")
const saltRounds = 12

//TODO create /user/login, /user/login/badEmail, /user/login/success

app.post("/user/login", function (request, response) {
  let { email, password } = request.body
  findUserByEmail(email)
    .then(({ dataValues }) => {
      bcrypt.compare(password, dataValues.password, (err, result) => {
        if (result == true) {
          response.send(dataValues)
        } else {
          response.send({error: "BAD_PASSWORD"})
        }
      })
    })
    .catch((err) => response.send({error: "EMAIL_NOT_FOUND", info: err}))
})
