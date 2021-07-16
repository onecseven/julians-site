#!/usr/bin/env node
const colors = require("colors")

const inquirer = require("inquirer")
const {meetingTypes} = require("./constants")
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
const template = require("../email/reservation-confirmed-template-client")
const questions = [
  {
    type: "list",
    name: "type",
    message: "Choose meeting type",
    choices: meetingTypes.map(type => type.toString()),
  },
  {
    type: "input",
    name: "clientFirstName",
    message: "Whats your First Name?",
    default: "test",
  },
  {
    type: "input",
    name: "clientLastName",
    message: "Whats your Last Name?",
    default: "testonson",
  },
  {
    type: "input",
    name: "clientEmail",
    message: "What is your email?",
    default: "tes@test.com",
  },
  {
    type: "datetime",
    name: "date",
    message: "When would you like to schedule the appoint?",
  },
]

inquirer.prompt(questions).then(function (answers) {
  return console.log(template.confirmationTemplate({
      clientEmail: answers.clientEmail,
      clientFirstName: answers.clientFirstName,
      clientLastName: answers.clientLastName,
      meetingType: answers.type,
      meetingDuration: answers.type.meetingDuration,
      date: answers.date
  }))
})

// // export function to list coffee
// module.exports = function () {
//   console.log("COFFEE MENU")
//   console.log("------------------")

//   // list on separate lines
//   types.forEach((type) => {
//     console.log("%s %s", colors.bold(type.name), colors.grey("/ " + type.price))
//   })
// }
