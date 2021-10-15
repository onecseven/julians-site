type meetingType = "YOGA" | "ENERGY" | "CONSULT"
type orderStatus = "AWAITING_APPROVAL" | "UPCOMING" | "COMPLETED" | "CANCELED"

declare interface order {
  date: string //YYYY-MM-DD
  timeslot: number //1-6
  meeting_type: meetingType
  user_id: number
  order_id: number
  order_status: orderStatus
}

declare interface user {
  user_id: number
  email: string
  password: string
  name: string
  approved: number // 0 - 1
}