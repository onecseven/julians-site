const confirmAppt = require("./users/confirmAppt.js")
const declineAppt = require("./users/declineAppt.js")
const getApptsOnDate = require("./users/getApptsOnDate.js")
const postAppt = require("./users/postAppt.js")
const testApptByUserId = require("./users/testApptByUserId.js")
//how to dynamically import the rest of the routes?

module.exports = {
  appts: { confirmAppt, declineAppt, getApptsOnDate, postAppt, testApptByUserId },
}
