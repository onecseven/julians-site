const {createAppointment} = require("./createAppointment")
const {calendarEventFactory} = require("./calendarEventFactory")

let event = calendarEventFactory({
  meetingType: "test",
  clientEmail: "iced.tati@gmail.com",
  date: new Date()
})

createAppointment(event)