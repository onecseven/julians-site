let {user} = require("../auth/email")


/**
 * 
 * @param clientEmail string 
 * @param clientName string
 * @param reservationDate Date
 * @returns An object ready to be sent with nodemailer notifying the client that their
 * reservation has been notes and taken.
 */

exports.requestApprovalEmail = ({clientEmail, clientName, date, meetingType, _id}) => {
  return {
    from: user,
    to: "julian@radfairyflows.com",
    subject: "Reservation Attempt Notification",
    text: `
    Hi, Julian
    
    A reservation attempt has been made by ${clientName}, ${clientEmail} at the following date ${date.toString()}, for the purpose of ${meetingType}
    
    CONFIRM: https://localhost:3000/appointment/${_id}/confirm
    DECLINE: https://localhost:3000/appointment/${_id}/decline
    
    `  }
}
