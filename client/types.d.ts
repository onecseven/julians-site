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

declare type snackbarStatus = "success" | "info" | "warning" | "error"

declare type action = {
  type: string
}

export namespace ActionTypes {
  interface POST_LOGIN extends action {
    type: "POST_LOGIN"
    payload: {
      password: string
      email: string
    }
  }
  interface LOGIN_SUCCESS extends action {
    type: "LOGIN_SUCCESS"
  }
  interface RESET_SNACKBAR extends action {
    type: "RESET_SNACKBAR"
  }
  interface SEND_NOTIF extends action {
    type: "SEND_NOTIF"
    payload: {
      error?: snackbarStatus
      message: string
    }
  }
}
