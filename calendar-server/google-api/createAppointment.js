const fs = require("fs")
const readline = require("readline")
const { google } = require("googleapis")
const token = require("../auth/token.json")
const credentials = require("../auth/credentials.json")
const SCOPES = ["https://www.googleapis.com/auth/calendar"]

authorize(credentials, listEvents)

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )
  oAuth2Client.setCredentials(JSON.parse(token))
  
  callback(oAuth2Client)
}

let memoizedInsertEvents = (event) => (auth) => {
  const calendar = google.calendar({ version: "v3", auth })
  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });
}

let insertEvent = (event) => {
  let memoizedInsertEvent = memoizedInsertEvents(event)
  authorize(credentials, memoizedInsertEvent)
}

exports.createAppointment = insertEvent