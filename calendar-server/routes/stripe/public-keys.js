const express = require("express")
const app = (module.exports = express())
const keys = require("../../features/auth/stripe_keys.json")
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY)

app.get("/public-keys", async (request, response) => {
  response.send({ key: keys.STRIPE_PUBLIC_KEY })
})
