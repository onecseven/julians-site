let {user} = require("../auth/email")


/**
 * 
 * @param clientEmail string 
 * @param clientName string
 * @param reservationDate Date
 * @returns An object ready to be sent with nodemailer notifying the client that their
 * reservation has been notes and taken.
 */

exports.confirmationTemplate = ({clientEmail, clientName, reservationDate}) => {
  return {
    from: user,
    to: "julian.thomas1697@gmail.com",
    subject: "test",
    text: "hi julian this is a test to check if the email systems are working",
    // html: "<p>HTML version of the message</p>",
  }
}
