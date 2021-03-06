module.exports = {
  order: {
    meeting_type: {
      yoga: "YOGA",
      energy: "ENERGY",
      consult: "CONSULT",
    },
    dateConverter: (date) => {
      const yourDate = new Date(date)
      return yourDate.toISOString().split('T')[0]
    },
    timeslotConverter: (num) => {
      null
      return null
    },
    order_status: {
      unpaid: "UNPAID",
      awaiting: "PAID",
      upcoming: "UPCOMING",
      complete: "COMPLETED",
      cancel: "CANCELED"
    }
  },
}
