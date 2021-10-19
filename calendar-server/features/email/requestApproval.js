let { user } = require("../auth/email")
const { findUserById } = require("../../db/models/users/findUser")
const { smtp } = require("../../features/email/emailer")


/**
 *
 * @param clientEmail string
 * @param clientName string
 * @param reservationDate Date
 * @returns An object ready to be sent with nodemailer notifying the client that their
 * reservation has been notes and taken.
 */

const constructApprovalEmail = ({
  clientEmail,
  clientName,
  date,
  meetingType,
  _id,
}) => {
  return {
    from: user,
    to: "julian@radfairyflows.com",
    subject: "Reservation Attempt Notification",
    text: `
    Hi, Julian
    
    A reservation attempt has been made by ${clientName}, ${clientEmail} at the following date ${date.toString()}, for the purpose of ${
      meetingType.toString
    }
    
    CONFIRM: https://localhost:3000/appointment/${_id}/confirm
    DECLINE: https://localhost:3000/appointment/${_id}/decline
    
    `,
  }
}
/**
 * 
 * @param {number} user_id 
 * @param {number} order_id 
 * @param {YYYY-MM-DD string} date 
 * @param {meetingType} meetingType 
 * @param {integer} timeslot 
 * @returns {Promise}
 */
exports.sendApprovalEmail = (user_id, date, meetingType, timeslot, order_id) => {
  let { name, email } = findUserById(user_id)
  let emailTemplate = constructApprovalEmail({
    clientEmail: email,
    clientName: name,
    date: date,
    meetingType,
    _id: order_id,
  })
  return smtp.sendMail(emailTemplate)
}
