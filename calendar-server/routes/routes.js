const confirmAppt = require("./appts/confirmAppt.js")
const declineAppt = require("./appts/declineAppt.js")
const getApptsOnDate = require("./appts/getApptsOnDate.js")
const postAppt = require("./appts/postAppt.js")
const testApptByUserId = require("./appts/testApptByUserId.js")
const login = require("./users/login.js")
const postUser = require("./users/postUser.js")
//how to dynamically import the rest of the routes?

module.exports = {
  appts: {
    confirmAppt,
    declineAppt,
    getApptsOnDate,
    postAppt,
    testApptByUserId,
    postUser,
    login,
  },
}
