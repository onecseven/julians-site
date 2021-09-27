const { User } = require("./models/users/User")
const { Order } = require("./models/Orders")

// User.sync().then(function () {
//   return User.create({
//     name: "test",
//     email: "test@test.com",
//     password: "wtf",
//   })
// })

Order.sync().then(function () {
  return Order.create({
    date: new Date(),
    meeting_type: "ENERGY",
    timeslot: 2,
    user_id: 1,
  })
})

