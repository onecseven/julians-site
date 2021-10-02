const express = require("express")
const app = module.exports = express()
const { createUser } = require("../../db/models/users/createUser")
const bcrypt = require("bcrypt")
const saltRounds = 12

//TODO handle emailExists in client
//TODO handle ER_DUP_ENTRY as emailExists
//TODO handle BAD_EMAIL as ?

app.post("/user/create", function (request, response) {
  let { email, name, password } = request.body
  bcrypt.hash(password, saltRounds, function (err, hash) {
    createUser({
      email,
      name,
      password: hash,
    })
      .then(({dataValues}) => {
        if (dataValues) {
          response.send(dataValues)
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.original) {
          response.send({"error": err.original.code})
        } else if (err.errors) {
          response.send({"error": "BAD_EMAIL"})
        }
      })
  })
})
