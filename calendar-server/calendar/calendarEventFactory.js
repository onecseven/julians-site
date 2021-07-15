exports.calendarEventFactory = ({ meetingType, date, clientEmail }) => {
  return {
    summary: meetingType,
    location: "800 Howard St., San Francisco, CA 94103",
    description: "",
    start: {
      dateTime: new Date().toISOString(),
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: new Date(date.getTime() + 20 * 60000).toISOString(), //20 minute meeting / switch on meeting types
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
