
/**
 * 
 * @param {meetingType} meetingType 
 * @param {date} Date
 * @param {clientEmail} String
 * @returns 
 */
exports.calendarEventFactory = ({ meetingType, date, clientEmail }) => {
  return {
    summary: meetingType.toString,
    location: "",
    description: "",
    start: {
      dateTime: date.toISOString(),
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: new Date(date.getTime() + meetingType.duration * 60000).toISOString(), //this is why duration is minutes!!
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
