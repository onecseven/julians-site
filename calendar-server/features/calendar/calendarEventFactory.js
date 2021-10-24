
/**
 * 
 * @param {meetingType} meetingType 
 * @param {date} Date
 * @param {clientEmail} String
 * @returns 
 */

//TODO need to make the timeslot converter

exports.calendarEventFactory = ({ meeting_type, date, clientEmail }) => {
  return {
    summary: meeting_type.toString,
    location: "",
    description: "",
    start: {
      dateTime: new Date(date),
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: new Date(date), //this is why duration is minutes!!
      timeZone: "America/Los_Angeles",
    },
    attendees: [{ email: clientEmail }],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
  }
}
