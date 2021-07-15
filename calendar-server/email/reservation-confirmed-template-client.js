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
  //need to switch on meeting type refere to doc

  return {
    from: user,
    to: clientEmail,
    subject: "test",
    text: `Hi, 
    Thanks for scheduling with us. This email serves as a confirmation that your appointment for [time and type of appointment (ie 30 minute Guided Energy Work)] at [date and time] has been approved. You will receive a questionnaire [and waiver if for yoga] soon so I can best prepare for our work together. If you need to change or cancel our appointment, please to the best of your ability email me within 24 hours of your scheduled time. 
    With loving kindness,
    Julian
    `,
    // html: "<p>HTML version of the message</p>",
  }
}
