let { user } = require("../auth/email")
let { findUserById } = require("../../db/models/users/findUser")
const { smtp } = require("../../features/email/emailer")
const { bookAppointment } = require("../calendar/calendar-exports")
let key = {
  ENERGY: "Guided Energy Work",
  YOGA: "Yoga for Embodiment and Transformation",
  CONSULT: "a free consult",
}

/**
 *
 * @param clientEmail string
 * @param clientFirstName string
 * @param clientLastName string
 * @param date Date
 * @param meetingType meetingType.js
 * @returns An object ready to be sent with nodemailer notifying the client that their
 * reservation has been notes and taken.
 */

buildConfirmationEmail = ({ clientEmail, clientName, meetingType, date }) => {
  return {
    from: user,
    to: clientEmail,
    subject: "test",
    text: `Hi ${clientName}, 
    Thanks for scheduling with us. This email serves as a confirmation that your appointment for  ${
      key[meetingType]
    } on ${date} has been approved. You will receive a questionnaire ${
      meetingType === "YOGA" ? "and waiver" : ""
    } soon so I can best prepare for our work together. If you need to change or cancel our appointment, please to the best of your ability email me within 24 hours of your scheduled time. 
    With loving kindness,
    Julian
    radfairyflows    
    `,
  }
}

exports.sendConfirmationTemplate = async ({ user_id, meeting_type, date }) => {
  let user = await findUserById(user_id)
  let { name, email } = user.dataValues
  smtp.sendMail(
    buildConfirmationEmail({
      clientEmail: email,
      clientName: name,
      meeting_type,
      date,
    })
  )
  bookAppointment({ meeting_type, email, date })
}
