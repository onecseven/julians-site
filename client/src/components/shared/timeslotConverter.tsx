export const timeslotConverter = (timeslot) => {
  const timeslotKey = {
    1: "17:00",
    2: "17:30",
    3: "18:00",
    4: "18:30",
    5: "19:00",
    6: "19:30 ",
  }
  let date: any = new Date()
  let hours = timeslotKey[timeslot].split(":")[0]
  let minutes = timeslotKey[timeslot].split(":")[1]
  date.setUTCHours(hours)
  date.setUTCMinutes(minutes)
  date.setUTCSeconds(0)
  date["smallTimeString"] = date.toTimeString().split("(")[0]
  return date
}
