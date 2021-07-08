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
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true
  },
  meetingType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
})


const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;