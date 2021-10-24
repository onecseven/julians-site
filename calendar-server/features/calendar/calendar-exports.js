const {createAppointment} = require("./createAppointment")
const {calendarEventFactory} = require("./calendarEventFactory")

/**
 * 
 * @param {meeting_type} {duration: Number, name: "YOGA"| "ENERGY"} 
 * @param {email} String
 * @param {date} Date
 */
exports.bookAppointment = ({meeting_type, email, date}) => {
  createAppointment(calendarEventFactory({meeting_type, email, date}))
}