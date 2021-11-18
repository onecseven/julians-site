const express = require("express")
const app = (module.exports = express())
const keys = require("../../features/auth/stripe_keys.json")
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY)

//TODO create /user/login, /user/login/badEmail, /user/login/success

// app.post("/user/login", function (request, response) {

// })

//TODO
// Account for different producs
// Add success url
// Add cancel url

app.post("/create-checkout-session", async (request, response) => {
  console.log("here")
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1JwXyJBfOGinzehtXSIF8sE9",
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
    })
    response.redirect(303, session.url)
  } catch (e) {
    console.log(e)
    response.sendStatus(403)
  }
})
