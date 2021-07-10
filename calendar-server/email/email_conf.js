let { password, user } = require("../auth/email")
let nodemailer = require("nodemailer")
let { confirmationTemplate } = require("./reservation-confirmed-template")
var smtp = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  auth: {
    user,
    pass: password,
  },
})

let template = confirmationTemplate({clientEmail: "", clientName:"", reservationDate: ""})

smtp.sendMail(template)
.catch(err => console.error(err))
.then(success => console.log("yay"))
