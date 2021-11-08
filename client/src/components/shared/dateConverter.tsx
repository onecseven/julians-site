import calendarSlice from "../../store/features/calendar/calendarSlice"

export const dateConverter = (date) => date.toISOString().split("T")[0]

// const dateString = "2019-05-05T10:30:00Z";
// const userOffset = new Date().getTimezoneOffset()*60*1000;
// const localDate = new Date(dateString);
// const utcDate = new Date(localDate.getTime() + userOffset);

// console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);

// Mon-Friday

// 2-3pm
// 3-4pm
// 4-5pm
// 5-6pm

// TODO timeslot converter (30minute blocks)
// TODO timeslot converter in emails and calendar (server)
// TODO disable weekends on calendars
