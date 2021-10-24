const {createAppointment} = require("./createAppointment")
const {calendarEventFactory} = require("./calendarEventFactory")

/**
 * 
 * @param {meetingType} {duration: Number, name: "YOGA"| "ENERGY"} 
 * @param {clientEmail} String
 * @param {date} Date
 */
exports.bookAppointment = ({meeting_type, clientEmail, date}) => {
  createAppointment(calendarEventFactory({meeting_type, clientEmail, date}))
}