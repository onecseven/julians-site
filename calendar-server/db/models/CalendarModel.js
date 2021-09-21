const mongoose = require("mongoose");

// const FoodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//   },
//   calories: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Negative calories aren't real.");
//     },
//   },
// });

const CalendarSchema = new mongoose.Schema({
  clientFirstName: {
    type: String,
    required: true,
  },
  clientLastName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true
  },
  meetingType: {
    type: {
      name: String,
      duration: Number
    },
    required: true
  },
  date: {
    type: {
      utc: date,
      timeslot: {
        1: Boolean,
        2: Boolean,
        3: Boolean,
        

      }
    },
    required: true,
  },
})


const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;