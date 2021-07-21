#!/usr/bin/env node

const inquirer = require("inquirer")
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
const template = require("../email/reservation-confirmed-template-client")
const { meetingTypeGenerator, meetingTypes} = require("../utils/meetingTypes")
const fs = require('fs');

const questions = [
  {
    type: "list",
    name: "duration",
    message: "Choose meeting type",
    choices: [60,50,30],
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
  fs.writeFile("./json.json", JSON.stringify({
    clientEmail: answers.clientEmail,
    clientFirstName: answers.clientFirstName,
    clientLastName: answers.clientLastName,
    meetingType: meetingTypeGenerator({duration: answers.duration}),
    date: answers.date
}), (err) => {
    if (err) return console.error(err);
    console.log('Token stored');
  });

  // return console.log(template.confirmationTemplate({
  //     clientEmail: answers.clientEmail,
  //     clientFirstName: answers.clientFirstName,
  //     clientLastName: answers.clientLastName,
  //     meetingType: meetingTypeGenerator({duration: answers.duration}),
  //     date: answers.date
  // }))
  // fs
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
