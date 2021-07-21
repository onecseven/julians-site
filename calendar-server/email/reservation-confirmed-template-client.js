let {user} = require("../auth/email")

const ENERGY = "Guided Energy Work"
const YOGA = "Yoga for Embodiment and Transformation" 


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

exports.confirmationTemplate = ({clientEmail, clientFirstName,clientLastName, meetingType, date, meetingDuration}) => {
  //need to switch on meeting type refere to doc
  return {
    from: user,
    to: clientEmail,
    subject: "test",
    text: `Hi ${clientFirstName}, 
    Thanks for scheduling with us. This email serves as a confirmation that your appointment for your ${meetingType.toString} at ${date.toString()} has been approved. You will receive a questionnaire ${meetingType === "YOGA" ? "and waiver" : ""} soon so I can best prepare for our work together. If you need to change or cancel our appointment, please to the best of your ability email me within 24 hours of your scheduled time. 
    With loving kindness,
    Julian
    radfairyflows    
    `,
  }
}
