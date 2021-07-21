const {createAppointment} = require("./createAppointment")
const {calendarEventFactory} = require("./calendarEventFactory")

/**
 * 
 * @param {meetingType} {duration: Number, name: "YOGA"| "ENERGY"} 
 * @param {clientEmail} String
 * @param {date} Date
 */
exports.bookAppointment = ({meetingType, clientEmail, date}) => {
  createAppointment(calendarEventFactory({meetingType, clientEmail, date}))
}